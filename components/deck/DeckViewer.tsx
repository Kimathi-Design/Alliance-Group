"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { renderDeckSlide } from "@/components/deck/DeckSlides";
import { DeckLoadingScreen } from "@/components/deck/DeckLoadingScreen";
import { DeckProgressBar } from "@/components/deck/DeckProgressBar";
import { IbdMark } from "@/components/deck/IbdMark";
import { ASSETS } from "@/lib/assets";
import { downloadPdf } from "@/lib/export-deck-pdf";
import {
  SLIDE_COUNT,
  SLIDE_HEIGHT,
  SLIDE_WIDTH,
  slideTitles,
} from "@/lib/deck-content";

const PROPOSAL_FILENAME = "Alliance-Group-Motheo-Proposal.pdf";
const FIT_MARGIN = 20;

function computeDeckScale(navHeight: number, container?: HTMLElement | null) {
  const rect = container?.getBoundingClientRect();
  const viewportW = window.visualViewport?.width ?? rect?.width ?? window.innerWidth;
  const viewportH = window.visualViewport?.height ?? rect?.height ?? window.innerHeight;
  const availW = viewportW - FIT_MARGIN * 2;
  const availH = viewportH - navHeight - FIT_MARGIN * 2;
  return Math.min(availW / SLIDE_WIDTH, availH / SLIDE_HEIGHT);
}

async function downloadProposalPdf() {
  const response = await fetch(ASSETS.proposalPdf, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Could not fetch proposal PDF");
  }
  const bytes = new Uint8Array(await response.arrayBuffer());
  downloadPdf(bytes, PROPOSAL_FILENAME);
}

export function DeckViewer() {
  const [current, setCurrent] = useState(0);
  const [scale, setScale] = useState<number | null>(null);
  const [downloading, setDownloading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(Math.max(0, Math.min(SLIDE_COUNT - 1, index)));
  }, []);

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const handleDownloadPdf = useCallback(async () => {
    if (downloading) return;
    setDownloading(true);
    try {
      await downloadProposalPdf();
    } catch {
      window.open(ASSETS.proposalPdf, "_blank", "noopener,noreferrer");
    } finally {
      setDownloading(false);
    }
  }, [downloading]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(SLIDE_COUNT - 1);
      } else if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) {
          containerRef.current?.requestFullscreen?.();
        } else {
          document.exitFullscreen?.();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo]);

  useLayoutEffect(() => {
    const updateScale = () => {
      const navHeight = navRef.current?.offsetHeight ?? 56;
      setScale(computeDeckScale(navHeight, containerRef.current));
    };

    updateScale();
    const raf = requestAnimationFrame(updateScale);

    const ro = new ResizeObserver(updateScale);
    if (containerRef.current) ro.observe(containerRef.current);
    if (navRef.current) ro.observe(navRef.current);

    window.addEventListener("resize", updateScale);
    window.visualViewport?.addEventListener("resize", updateScale);
    document.addEventListener("fullscreenchange", updateScale);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", updateScale);
      window.visualViewport?.removeEventListener("resize", updateScale);
      document.removeEventListener("fullscreenchange", updateScale);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="deck-viewer fixed inset-0 z-[60] flex flex-col bg-[color:var(--ibd-gray)]"
    >
      {scale !== null && (
        <DeckProgressBar current={current} total={SLIDE_COUNT} />
      )}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        {scale === null ? (
          <DeckLoadingScreen />
        ) : (
          <div
            className="deck-stage-host"
            style={{
              width: SLIDE_WIDTH * scale,
              height: SLIDE_HEIGHT * scale,
            }}
          >
            <div
              className="deck-stage-scaler deck-fixed-layout"
              style={{
                width: SLIDE_WIDTH,
                height: SLIDE_HEIGHT,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="deck-stage h-full w-full rounded-lg shadow-[0_24px_80px_-20px_rgba(13,15,26,0.18)]"
                >
                  {renderDeckSlide(current)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>

      <nav
        ref={navRef}
        aria-label="Deck navigation"
        className="flex shrink-0 items-center justify-between gap-4 border-t border-[color:var(--gms-border)] bg-white/95 px-6 py-3 backdrop-blur-xl"
      >
        <div className="flex min-w-0 items-center gap-3">
          <IbdMark size="md" />
          <span className="truncate text-[13px] text-[color:var(--gms-text-muted)]">
            {slideTitles[current]}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={scale === null || downloading}
            aria-label="Download proposal PDF"
            title="Download proposal PDF"
            className="flex h-9 items-center gap-2 rounded-full border border-[color:var(--gms-border)] bg-white px-3 text-[13px] font-medium text-[color:var(--gms-text-muted)] transition hover:border-[color:var(--gms-accent)]/30 hover:bg-[color:var(--ibd-gray)] disabled:opacity-30"
          >
            <Download className={`h-4 w-4 ${downloading ? "animate-pulse" : ""}`} />
            <span>{downloading ? "Downloading…" : "Download PDF"}</span>
          </button>
          <button
            type="button"
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous slide"
            className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--gms-border)] bg-white text-[color:var(--gms-text-muted)] transition hover:border-[color:var(--gms-accent)]/30 hover:bg-[color:var(--ibd-gray)] disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="min-w-[72px] text-center text-[13px] tabular-nums text-[color:var(--gms-text-muted)]">
            {String(current + 1).padStart(2, "0")} / {SLIDE_COUNT}
          </span>
          <button
            type="button"
            onClick={next}
            disabled={current === SLIDE_COUNT - 1}
            aria-label="Next slide"
            className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--gms-border)] bg-white text-[color:var(--gms-text-muted)] transition hover:border-[color:var(--gms-accent)]/30 hover:bg-[color:var(--ibd-gray)] disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </nav>
    </div>
  );
}
