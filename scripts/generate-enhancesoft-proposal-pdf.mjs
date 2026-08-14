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
  await page.addStyleTag({
    content:
      "nextjs-portal, [data-next-badge-root], #__next-build-watcher { display: none !important; }",
  });
  await page.waitForFunction(() => document.fonts.ready);
  await page.waitForFunction(
    () => document.documentElement.dataset.enhancesoftExport === "true",
  );
  await page.waitForTimeout(2500);

  const slideLocators = page.locator(".es-print-slide, .deck-print-slide");
  const slideCount = await slideLocators.count();
  if (slideCount === 0) {
    throw new Error("No .es-print-slide elements found on /enhancesoft/print");
  }
  console.log(`Capturing ${slideCount} slides as screen screenshots...`);

  const pdfDoc = await PDFDocument.create();

  for (let i = 0; i < slideCount; i++) {
    const slide = slideLocators.nth(i);
    await slide.scrollIntoViewIfNeeded();
    await page.waitForTimeout(i === 0 ? 800 : 120);

    const target = slide.locator("section.deck-slide").first();
    const hasSlide = (await target.count()) > 0;
    const jpgBytes = await (hasSlide ? target : slide).screenshot({
      type: "jpeg",
      quality: 95,
      animations: "disabled",
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
