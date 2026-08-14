"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  type ReactNode,
} from "react";
import { getTocSectionNumber } from "@/lib/deck-content";

type DeckNumberingContextValue = {
  slideIndex: number;
  tocSection: number | null;
  slideTitle: string | null;
  allocateSectionNumber: () => number;
};

const DeckNumberingContext = createContext<DeckNumberingContextValue | null>(
  null,
);

export function DeckNumberingProvider({
  slideIndex,
  tocSection: tocSectionProp,
  slideTitle = null,
  children,
}: {
  slideIndex: number;
  tocSection?: number | null;
  slideTitle?: string | null;
  children: ReactNode;
}) {
  const tocSection =
    tocSectionProp !== undefined ? tocSectionProp : getTocSectionNumber(slideIndex);
  const sectionCounter = useRef(1);
  const allocateSectionNumber = useCallback(() => {
    sectionCounter.current += 1;
    return sectionCounter.current;
  }, []);

  return (
    <DeckNumberingContext.Provider
      value={{ slideIndex, tocSection, slideTitle, allocateSectionNumber }}
    >
      {children}
    </DeckNumberingContext.Provider>
  );
}

export function useDeckNumbering() {
  return useContext(DeckNumberingContext);
}
