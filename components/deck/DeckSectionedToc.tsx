"use client";

import { Fragment, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { tableOfContentsSections } from "@/lib/deck-proposal-content";

type TocRow =
  | { type: "section"; label: string; key: string }
  | { type: "entry"; key: string; index: number; title: string; page: number };

function buildTocRows(): TocRow[] {
  const rows: TocRow[] = [];
  let itemIndex = 0;

  for (const section of tableOfContentsSections) {
    rows.push({ type: "section", label: section.section, key: `section-${section.section}` });
    for (const entry of section.entries) {
      itemIndex += 1;
      rows.push({
        type: "entry",
        key: `${section.section}-${entry.title}`,
        index: itemIndex,
        title: entry.title,
        page: entry.page,
      });
    }
  }

  return rows;
}

const TOC_ROWS = buildTocRows();

export function DeckSectionedTableOfContents() {
  return (
    <div className="deck-toc flex min-h-0 flex-1 flex-col pt-2">
      <div
        className="deck-toc__grid grid min-h-0 flex-1"
        style={{
          gridTemplateColumns: "2.25rem auto 1fr 3rem",
          gridTemplateRows: `repeat(${TOC_ROWS.length}, minmax(1.3em, 1fr))`,
        }}
      >
        {TOC_ROWS.map((row, rowIndex) => {
          const gridRow = rowIndex + 1;

          if (row.type === "section") {
            return (
              <p
                key={row.key}
                className="deck-toc__section self-center justify-self-start text-left"
                style={{ gridColumn: 2, gridRow }}
              >
                {row.label}
              </p>
            );
          }

          return (
            <Fragment key={row.key}>
              <span
                className="deck-toc__index self-center pr-2 text-right tabular-nums"
                style={{ gridColumn: 1, gridRow }}
              >
                {String(row.index).padStart(2, "0")}
              </span>
              <span className="deck-toc__title self-center pr-2" style={{ gridColumn: 2, gridRow }}>
                {row.title}
              </span>
              <span
                aria-hidden
                className="deck-toc__leaders self-center overflow-hidden pr-3"
                style={{ gridColumn: 3, gridRow }}
              >
                {".".repeat(120)}
              </span>
              <span
                className="deck-toc__page self-center text-right tabular-nums"
                style={{ gridColumn: 4, gridRow }}
              >
                {String(row.page).padStart(2, "0")}
              </span>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export function DeckSignoffTaglineLogo({ tagline }: { tagline: string }) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [logoWidth, setLogoWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const measure = () => setLogoWidth(el.offsetWidth);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    void document.fonts.ready.then(measure);

    return () => observer.disconnect();
  }, [tagline]);

  return (
    <div>
      <span
        ref={textRef}
        className="deck-type-body inline-block"
      >
        {tagline}
      </span>
      {logoWidth != null && logoWidth > 0 && (
        <Image
          src={ASSETS.brands.ibdLogo}
          alt="Infinity Business Dynamics"
          width={2560}
          height={424}
          className="mt-8 h-auto"
          style={{ width: logoWidth }}
        />
      )}
    </div>
  );
}

export function DeckLetterDivider() {
  return <div className="my-6 h-px w-full bg-[#FFCC00]" aria-hidden />;
}

export function DeckSignaturePlaceholder() {
  return (
    <div className="mt-auto space-y-2 border-t border-[color:var(--gms-border)] pt-6">
      <div className="h-10 w-40 rounded border border-dashed border-[color:var(--gms-border)]" />
      <p className="text-[14px] font-medium text-[color:var(--gms-text-muted)]">
        Executive signature
      </p>
    </div>
  );
}

export function DeckClosingQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mt-6 border-l-4 border-deck-accent pl-4 text-[20px] font-semibold italic text-deck-accent">
      &ldquo;{children}&rdquo;
    </blockquote>
  );
}
