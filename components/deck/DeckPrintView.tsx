"use client";

import { useEffect } from "react";
import { renderDeckSlide } from "@/components/deck/DeckSlides";
import { SLIDE_COUNT } from "@/lib/deck-content";

export function DeckPrintView() {
  useEffect(() => {
    document.documentElement.dataset.deckExport = "true";
    return () => {
      delete document.documentElement.dataset.deckExport;
    };
  }, []);

  return (
    <div className="deck-print-root deck-fixed-layout">
      {Array.from({ length: SLIDE_COUNT }, (_, index) => (
        <div key={index} className="deck-print-slide deck-stage">
          {renderDeckSlide(index)}
        </div>
      ))}
    </div>
  );
}
