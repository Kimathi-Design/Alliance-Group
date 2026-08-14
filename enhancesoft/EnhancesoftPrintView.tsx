"use client";

import { useEffect } from "react";
import {
  ENHANCESOFT_SLIDE_COUNT,
  renderEnhancesoftSlide,
} from "@/enhancesoft/EnhancesoftSlides";

export function EnhancesoftPrintView() {
  useEffect(() => {
    document.documentElement.dataset.enhancesoftExport = "true";
    document.documentElement.dataset.deckExport = "true";
    return () => {
      delete document.documentElement.dataset.enhancesoftExport;
      delete document.documentElement.dataset.deckExport;
    };
  }, []);

  return (
    <div className="deck-print-root deck-fixed-layout">
      {Array.from({ length: ENHANCESOFT_SLIDE_COUNT }, (_, index) => (
        <div key={index} className="deck-print-slide deck-stage es-print-slide">
          {renderEnhancesoftSlide(index)}
        </div>
      ))}
    </div>
  );
}
