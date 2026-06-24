import { toPng } from "html-to-image";
import { PDFDocument } from "pdf-lib";
import {
  appendices,
  getAppendixIndexForSlide,
} from "@/lib/deck-content";

export type ExportDeckPdfOptions = {
  slideCount: number;
  width: number;
  height: number;
  filename?: string;
  renderSlide: (index: number) => Promise<HTMLElement | null>;
  onProgress?: (current: number, total: number) => void;
  settleMs?: (index: number) => number;
};

export async function waitForSlideReady(root: HTMLElement | null) {
  await document.fonts.ready;
  if (!root) return;

  const imgs = Array.from(root.querySelectorAll("img"));
  await Promise.all(
    imgs.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
            return;
          }
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }),
    ),
  );
}

async function appendAppendixPages(
  pdfDoc: PDFDocument,
  appendixIndex: number,
) {
  const appendix = appendices[appendixIndex];
  const response = await fetch(appendix.file);
  if (!response.ok) {
    throw new Error(`Failed to load ${appendix.file}`);
  }

  const appendixBytes = await response.arrayBuffer();
  const appendixPdf = await PDFDocument.load(appendixBytes);
  const copied = await pdfDoc.copyPages(
    appendixPdf,
    appendixPdf.getPageIndices(),
  );
  copied.forEach((page) => pdfDoc.addPage(page));
}

function downloadPdf(bytes: Uint8Array, filename: string) {
  const blob = new Blob([Uint8Array.from(bytes)], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

export async function exportDeckToPdf({
  slideCount,
  width,
  height,
  filename = "DHL-Motheo-Proposal.pdf",
  renderSlide,
  onProgress,
  settleMs = () => 400,
}: ExportDeckPdfOptions) {
  const pdfDoc = await PDFDocument.create();
  let progressStep = 0;
  const totalSteps = slideCount + appendices.length;

  for (let i = 0; i < slideCount; i++) {
    progressStep += 1;
    onProgress?.(progressStep, totalSteps);

    const el = await renderSlide(i);
    if (!el) {
      throw new Error(`Slide ${i + 1} failed to render`);
    }

    await waitForSlideReady(el);
    await new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(resolve)),
    );
    await new Promise((resolve) => setTimeout(resolve, settleMs(i)));

    const dataUrl = await toPng(el, {
      width,
      height,
      pixelRatio: 2,
      cacheBust: true,
      includeQueryParams: true,
    });

    const pngBytes = await fetch(dataUrl).then((response) => response.arrayBuffer());
    const image = await pdfDoc.embedPng(pngBytes);
    const page = pdfDoc.addPage([width, height]);
    page.drawImage(image, {
      x: 0,
      y: 0,
      width,
      height,
    });

    const appendixIndex = getAppendixIndexForSlide(i);
    if (appendixIndex !== null) {
      progressStep += 1;
      onProgress?.(progressStep, totalSteps);
      await appendAppendixPages(pdfDoc, appendixIndex);
    }
  }

  const bytes = await pdfDoc.save();
  downloadPdf(bytes, filename);
}
