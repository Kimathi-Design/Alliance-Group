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
  allocateSectionNumber: () => number;
};

const DeckNumberingContext = createContext<DeckNumberingContextValue | null>(
  null,
);

export function DeckNumberingProvider({
  slideIndex,
  children,
}: {
  slideIndex: number;
  children: ReactNode;
}) {
  const tocSection = getTocSectionNumber(slideIndex);
  const sectionCounter = useRef(1);
  const allocateSectionNumber = useCallback(() => {
    sectionCounter.current += 1;
    return sectionCounter.current;
  }, []);

  return (
    <DeckNumberingContext.Provider
      value={{ slideIndex, tocSection, allocateSectionNumber }}
    >
      {children}
    </DeckNumberingContext.Provider>
  );
}

export function useDeckNumbering() {
  return useContext(DeckNumberingContext);
}
