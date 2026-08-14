import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { spawn } from "node:child_process";
import { chromium } from "playwright";
import { PDFDocument } from "pdf-lib";

const SLIDE_WIDTH = 1240;
const SLIDE_HEIGHT = 1754;
const outputPath = join(process.cwd(), "public/Enhancesoft-Proposal-Brian-Kimathi.pdf");
const port = Number(process.env.DECK_PORT ?? 3012);
const baseUrl = process.env.DECK_URL ?? `http://localhost:${port}`;
const printUrl = `${baseUrl.replace(/\/$/, "")}/enhancesoft/print`;

async function waitForServer(url, timeoutMs = 90_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not become ready at ${url}`);
}

async function waitForSlideImages(handle) {
  await handle.evaluate(async (el) => {
    const imgs = [...el.querySelectorAll("img")];
    await Promise.all(
      imgs.map(
        (img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((resolve) => {
                img.onload = () => resolve();
                img.onerror = () => resolve();
                setTimeout(resolve, 4000);
              }),
      ),
    );
  });
}

let serverProcess;
if (!process.env.DECK_URL) {
  serverProcess = spawn("npm", ["start", "--", "--port", String(port)], {
    cwd: process.cwd(),
    env: { ...process.env, PORT: String(port) },
    stdio: "inherit",
  });
  await waitForServer(baseUrl);
}

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: SLIDE_WIDTH, height: SLIDE_HEIGHT },
  deviceScaleFactor: 2,
});

try {
  console.log(`Rendering Enhancesoft proposal from ${printUrl}...`);
  await page.emulateMedia({ media: "screen" });
  await page.goto(printUrl, { waitUntil: "networkidle", timeout: 180_000 });
  await page.waitForFunction(() => document.fonts.ready);
  await page.waitForFunction(
    () => document.documentElement.dataset.enhancesoftExport === "true",
  );
  await page.evaluate(() => {
    document.querySelectorAll("img").forEach((img) => {
      img.loading = "eager";
    });
  });
  await page.waitForTimeout(800);

  const slideLocators = page.locator(".es-print-slide, .deck-print-slide");
  const slideCount = await slideLocators.count();
  if (slideCount === 0) {
    throw new Error("No .es-print-slide elements found on /enhancesoft/print");
  }
  console.log(`Capturing ${slideCount} slides...`);

  const pdfDoc = await PDFDocument.create();

  for (let i = 0; i < slideCount; i++) {
    const slide = slideLocators.nth(i);
    await slide.evaluate((el) => el.scrollIntoView({ block: "start" }));
    const target = slide.locator("section.deck-slide").first();
    const handle = (await target.count()) > 0 ? target : slide;
    await waitForSlideImages(handle);
    await page.waitForTimeout(i === 0 ? 400 : 60);
    const box = await handle.boundingBox();
    if (!box) {
      throw new Error(`Slide ${i + 1} has no bounding box`);
    }
    const x = Math.max(0, Math.round(box.x));
    const y = Math.max(0, Math.round(box.y));
    const clip = {
      x,
      y,
      width: Math.min(SLIDE_WIDTH, SLIDE_WIDTH - x),
      height: Math.min(SLIDE_HEIGHT, SLIDE_HEIGHT - y),
    };

    const jpgBytes = await page.screenshot({
      type: "jpeg",
      quality: 95,
      animations: "disabled",
      caret: "hide",
      clip,
    });

    const image = await pdfDoc.embedJpg(jpgBytes);
    const pdfPage = pdfDoc.addPage([SLIDE_WIDTH, SLIDE_HEIGHT]);
    pdfPage.drawImage(image, {
      x: 0,
      y: 0,
      width: SLIDE_WIDTH,
      height: SLIDE_HEIGHT,
    });
    console.log(`  ✓ slide ${i + 1}/${slideCount}`);
  }

  writeFileSync(outputPath, await pdfDoc.save());
  console.log(`Saved ${outputPath}`);
} finally {
  await browser.close();
  if (serverProcess) {
    serverProcess.kill("SIGTERM");
  }
}
