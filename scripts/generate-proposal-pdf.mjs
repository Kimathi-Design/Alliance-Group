import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { spawn } from "node:child_process";
import { tmpdir } from "node:os";
import { chromium } from "playwright";
import { PDFDocument } from "pdf-lib";

/** Keep in sync with lib/submission-pack.ts → submissionPdfMergeOrder */
const submissionPdfMergeOrder = [
  "support-a-rsl-accreditation-letter.pdf",
  "support-b-motheo-integrator-guide.pdf",
  "appendix-f-commercial-pricing-schedule.pdf",
  "mandatory-compliance-documents-2026.pdf",
  "mandatory-tax-clearance-certificate.pdf",
  "mandatory-banking-details.pdf",
  "mandatory-vat-registration-certificate.pdf",
];

const outputPath = join(process.cwd(), "public/Alliance-Group-Motheo-Proposal.pdf");
const port = Number(process.env.DECK_PORT ?? 3010);
const baseUrl = process.env.DECK_URL ?? `http://localhost:${port}`;
const printUrl = `${baseUrl.replace(/\/$/, "")}/print`;

async function waitForServer(url, timeoutMs = 60_000) {
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
  serverProcess = spawn("npm", ["start"], {
    cwd: process.cwd(),
    env: { ...process.env, PORT: String(port) },
    stdio: "inherit",
  });
  await waitForServer(baseUrl);
}

const browser = await chromium.launch();
const page = await browser.newPage();

try {
  console.log(`Rendering slides from ${printUrl}...`);
  await page.goto(printUrl, { waitUntil: "networkidle", timeout: 120_000 });
  await page.waitForFunction(() => document.fonts.ready);
  await page.waitForTimeout(1500);

  const slidesPath = join(tmpdir(), "alliance-proposal-slides.pdf");
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: slidesPath,
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  console.log("Merging appendix PDFs...");
  const pdfDoc = await PDFDocument.load(readFileSync(slidesPath));
  const appendicesDir = join(process.cwd(), "public/appendices");

  for (const file of submissionPdfMergeOrder) {
    const filePath = join(appendicesDir, file);
    try {
      const appendixBytes = readFileSync(filePath);
      const appendixPdf = await PDFDocument.load(appendixBytes);
      const pages = await pdfDoc.copyPages(appendixPdf, appendixPdf.getPageIndices());
      pages.forEach((p) => pdfDoc.addPage(p));
      console.log(`  + ${file}`);
    } catch (error) {
      console.warn(`  SKIP ${file}: ${error.message}`);
    }
  }

  writeFileSync(outputPath, await pdfDoc.save());
  console.log(`Saved ${outputPath}`);
} finally {
  await browser.close();
  if (serverProcess) {
    serverProcess.kill("SIGTERM");
  }
}
