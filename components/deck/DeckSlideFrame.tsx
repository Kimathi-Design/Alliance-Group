"use client";

import Image from "next/image";
import { Children, Fragment, isValidElement, useEffect, useRef, useState, type ReactNode } from "react";
import { animate, useReducedMotion } from "framer-motion";
import { GlowOrbs } from "@/components/effects/GlowOrbs";
import { Particles } from "@/components/effects/Particles";
import { slideTitles } from "@/lib/deck-content";
import { DeckNumberingProvider, useDeckNumbering } from "@/components/deck/DeckNumbering";
import { DeckEyebrow, SlideEyebrow, SlideSectionCorner, DeckHeaderBrand } from "@/components/deck/SlideEyebrow";
import { DeckFooterBrand, MotheoMark } from "@/components/deck/IbdMark";
import {
  SLIDE_COUNT,
  SLIDE_HEIGHT,
  SLIDE_FOOTER_GAP,
  SLIDE_HEADER_BODY_GAP,
  SLIDE_INTRO_BODY_GAP,
  SLIDE_PADDING_BOTTOM,
  SLIDE_PADDING_TOP,
  SLIDE_PADDING_X,
  SLIDE_WIDTH,
} from "@/lib/deck-content";

type Props = {
  index: number;
  children: ReactNode;
  showParticles?: boolean;
  className?: string;
  /** Skip intro/body split — use for hero slides with custom full-bleed layout */
  layout?: "default" | "full";
  /** Full-bleed background image rendered behind slide content */
  backgroundImage?: string;
  /** Hide the default slide footer (e.g. cover slide) */
  hideFooter?: boolean;
};

function partitionSlideChildren(children: ReactNode) {
  const items = Children.toArray(children);
  const intro: ReactNode[] = [];
  const body: ReactNode[] = [];
  let pastIntro = false;

  for (const child of items) {
    if (
      !pastIntro &&
      isValidElement(child) &&
      (child.type === DeckEyebrow ||
        child.type === SlideEyebrow ||
        child.type === DeckTitle)
    ) {
      intro.push(child);
    } else {
      pastIntro = true;
      body.push(child);
    }
  }

  return { intro, body };
}

export function DeckVisualPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`deck-visual-panel flex min-h-0 flex-1 flex-col overflow-hidden rounded-3xl border border-[color:var(--gms-border)] bg-[color:var(--ibd-gray)] p-6 ${className}`.trim()}
    >
      {children}
    </div>
  );
}

/** Prose on top (shrink-0) + visual panel filling remaining slide body height */
export function DeckSlideBodySplit({
  children,
  visual,
  className = "",
}: {
  children: ReactNode;
  visual: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex min-h-0 flex-1 flex-col gap-4 ${className}`.trim()}>
      <div className="shrink-0 space-y-4">{children}</div>
      <DeckVisualPanel>{visual}</DeckVisualPanel>
    </div>
  );
}

export function DeckSlideFrame({
  index,
  children,
  showParticles = false,
  className = "",
  layout = "default",
  backgroundImage,
  hideFooter = false,
}: Props) {
  const { intro, body } =
    layout === "full"
      ? { intro: [] as ReactNode[], body: Children.toArray(children) }
      : partitionSlideChildren(children);

  return (
    <section
      className={`deck-slide relative overflow-hidden ${className}`}
      style={{ width: SLIDE_WIDTH, height: SLIDE_HEIGHT }}
      aria-label={`Slide ${index + 1}`}
    >
      <DeckNumberingProvider slideIndex={index}>
        {backgroundImage ? (
          <>
            <Image
              src={backgroundImage}
              alt=""
              aria-hidden
              fill
              sizes={`${SLIDE_WIDTH}px`}
              quality={90}
              className="pointer-events-none absolute inset-0 z-[1] object-cover"
              priority
            />
            {index === 0 && (
              <div aria-hidden className="deck-cover-gradient pointer-events-none absolute inset-x-0 bottom-0 z-[2]" />
            )}
          </>
        ) : (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(165deg, #ffffff 0%, #f5f7fb 52%, #ffffff 100%)",
            }}
          />
        )}
        {!backgroundImage && <GlowOrbs />}
        {showParticles && !backgroundImage && (
          <Particles density={0.00002} className="absolute inset-0 opacity-25" />
        )}

        <div
          className="deck-slide-page relative z-10 flex h-full min-h-0 flex-col"
          style={{
            paddingTop: SLIDE_PADDING_TOP,
            paddingBottom: SLIDE_PADDING_BOTTOM,
            paddingLeft: SLIDE_PADDING_X,
            paddingRight: SLIDE_PADDING_X,
          }}
        >
          {index !== 0 && (
            <header
              className="deck-slide-header flex shrink-0 items-center justify-between gap-4"
              style={{ marginBottom: SLIDE_HEADER_BODY_GAP }}
            >
              <DeckHeaderBrand />
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[color:var(--gms-border)] bg-[color:var(--gms-glass)] px-4 py-1.5 text-[12px] tracking-wider text-[color:var(--gms-text-muted)] tabular-nums">
                <MotheoMark size="sm" />
                {String(index + 1).padStart(2, "0")} / {SLIDE_COUNT}
              </span>
            </header>
          )}

          <div className="deck-slide-body deck-slide-scroll flex min-h-0 flex-1 flex-col">
            {layout === "full" ? (
              <div className="flex min-h-0 flex-1 flex-col gap-5">
                {children}
              </div>
            ) : (
              <>
                {intro.length > 0 && (
                  <div
                    className="deck-slide-intro shrink-0 space-y-4"
                    style={{ marginBottom: SLIDE_INTRO_BODY_GAP }}
                  >
                    {intro}
                  </div>
                )}
                {body.length > 0 && (
                  <div className="deck-slide-body-inner flex min-h-0 flex-1 flex-col gap-5">
                    {body}
                  </div>
                )}
              </>
            )}
          </div>

          {!hideFooter && (
            <footer
              className={`deck-slide-footer flex shrink-0 items-center pointer-events-none ${
                index === 1 ? "justify-end" : "justify-between"
              }`}
              style={{ marginTop: SLIDE_FOOTER_GAP }}
            >
              {index !== 1 && <DeckFooterBrand index={index} slideCount={SLIDE_COUNT} />}
              <SlideSectionCorner />
            </footer>
          )}
        </div>
      </DeckNumberingProvider>
    </section>
  );
}

/** Optional explicit body wrapper — auto-partitioning handles this by default */
export function DeckSlideBody({ children }: { children: ReactNode }) {
  return <div className="w-full">{children}</div>;
}

/** @deprecated Use SlideEyebrow — re-exported for compatibility */
export { DeckEyebrow } from "@/components/deck/SlideEyebrow";

export function DeckTitle({
  children,
  highlight,
  size = "lg",
}: {
  children: ReactNode;
  highlight?: string;
  size?: "lg" | "xl" | "hero";
}) {
  const numbering = useDeckNumbering();
  const sizes = {
    lg: "deck-title-lg",
    xl: "deck-title-xl",
    hero: "deck-title-hero",
  };
  const titlePrefix =
    size === "lg" && numbering?.tocSection ? `${numbering.tocSection}.1 ` : "";

  const plainTitle = [
    typeof children === "string" ? children : "",
    highlight ?? "",
  ]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  const slideTitle = numbering ? slideTitles[numbering.slideIndex] : null;
  if (
    plainTitle &&
    slideTitle &&
    plainTitle.localeCompare(slideTitle, undefined, { sensitivity: "accent" }) === 0
  ) {
    return null;
  }

  return (
    <h2
      className={
        size === "lg"
          ? `font-semibold ${sizes.lg}`
          : `font-semibold tracking-tight text-[color:var(--gms-text)] ${sizes[size]}`
      }
    >
      {titlePrefix}
      {children}
      {highlight && (
        <>
          {" "}
          {size === "lg" ? (
            <span>{highlight}</span>
          ) : (
            <span className="text-deck-accent">{highlight}</span>
          )}
        </>
      )}
    </h2>
  );
}

export function DeckBody({ children }: { children: ReactNode }) {
  return (
    <p className="text-[18px] font-medium leading-[1.6] text-[color:var(--gms-text)]">
      {children}
    </p>
  );
}

function parseStatValue(value: string) {
  const match = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  return { prefix, target: parseFloat(numStr), suffix };
}

function AnimatedStatValue({ value }: { value: string }) {
  const reduced = useReducedMotion();
  const parsed = parseStatValue(value);
  const [display, setDisplay] = useState(parsed?.target ?? 0);

  useEffect(() => {
    const current = parseStatValue(value);
    if (!current) return;
    const isExport =
      typeof document !== "undefined" &&
      document.documentElement.dataset.deckExport === "true";
    if (reduced || isExport) {
      setDisplay(current.target);
      return;
    }
    setDisplay(0);
    const controls = animate(0, current.target, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [value, reduced]);

  if (!parsed) {
    return <>{value}</>;
  }

  const formatted = Number.isInteger(parsed.target)
    ? Math.round(display).toLocaleString()
    : display.toFixed(1);

  return (
    <>
      {parsed.prefix}
      {formatted}
      {parsed.suffix}
    </>
  );
}

export function DeckStatCard({
  value,
  label,
  sublabel,
  animateValue = false,
}: {
  value: string;
  label: ReactNode;
  sublabel?: string;
  animateValue?: boolean;
}) {
  return (
    <div className="gms-card flex flex-col items-center overflow-visible rounded-3xl p-5 text-center">
      <p className="overflow-visible pr-1 text-[32px] font-semibold leading-none tracking-tight whitespace-nowrap text-deck-accent">
        {animateValue ? <AnimatedStatValue value={value} /> : value}
      </p>
      <p className="mt-2 text-[15px] font-medium leading-snug text-[color:var(--gms-text)]">
        {label}
      </p>
      {sublabel && (
        <p className="mt-1 text-[14px] font-medium text-[color:var(--gms-text)]">{sublabel}</p>
      )}
    </div>
  );
}

export function DeckInsight({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-[color:var(--gms-accent)]/20 bg-[color:var(--gms-accent)]/[0.06] p-6">
      <p className="text-[12px] font-semibold tracking-[0.22em] text-deck-accent uppercase">
        {label}
      </p>
      <div className="mt-3 text-[20px] leading-relaxed font-medium text-[color:var(--gms-text)]">
        {children}
      </div>
    </div>
  );
}

type BulletItem = string | { title: string; description?: string; inline?: boolean };

function parseBulletItem(item: BulletItem) {
  if (typeof item === "string") {
    const dashIndex = item.indexOf(" — ");
    if (dashIndex !== -1) {
      return {
        title: item.slice(0, dashIndex),
        description: item.slice(dashIndex + 3),
        inline: true,
      };
    }
    return { title: item, description: undefined, inline: false };
  }
  return { inline: false, ...item };
}

export function DeckBulletList({
  items,
  compact = false,
}: {
  items: BulletItem[];
  compact?: boolean;
}) {
  return (
    <ul className={compact ? "space-y-1" : "space-y-2.5"}>
      {items.map((item) => {
        const { title, description, inline } = parseBulletItem(item);

        return (
          <li
            key={title}
            className={`flex items-start font-medium text-[color:var(--gms-text)] ${
              compact
                ? "gap-2 text-[13px] leading-snug"
                : "gap-3 text-[18px] leading-relaxed"
            }`}
          >
            <span
              className={`deck-bullet ${description && !inline ? "mt-1.5" : ""}`}
              aria-hidden
            />
            <div className="min-w-0">
              {inline && description ? (
                <p className="text-[18px] font-medium leading-[1.6] text-[color:var(--gms-text)]">
                  <span className="font-semibold">{title}</span>
                  {" — "}
                  {description}
                </p>
              ) : (
                <>
                  <p
                    className={
                      description
                        ? "text-[18px] font-semibold leading-[1.6] text-[color:var(--gms-text)]"
                        : "text-[18px] leading-relaxed"
                    }
                  >
                    {title}
                  </p>
                  {description && (
                    <p className="mt-1 text-[18px] font-medium leading-[1.6] text-[color:var(--gms-text)]">
                      {description}
                    </p>
                  )}
                </>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function DeckSectionLabel({ children }: { children: ReactNode }) {
  const numbering = useDeckNumbering();
  const sectionPart = useRef<number | null>(null);

  if (numbering?.tocSection && sectionPart.current === null) {
    sectionPart.current = numbering.allocateSectionNumber();
  }

  const labelPrefix =
    numbering?.tocSection && sectionPart.current !== null
      ? `${numbering.tocSection}.${sectionPart.current} `
      : "";

  return (
    <p className="deck-title-lg font-semibold">
      {labelPrefix}
      {children}
    </p>
  );
}

export function DeckTableOfContents({
  items,
}: {
  items: { title: string; page: number }[];
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col pt-4">
      <div
        className="grid min-h-0 flex-1 items-center"
        style={{
          gridTemplateColumns: "2.25rem auto 1fr 3rem",
          gridTemplateRows: `repeat(${items.length}, minmax(0, 1fr))`,
        }}
      >
        {items.map(({ title, page }, index) => (
          <Fragment key={title}>
            <span
              className="self-end pr-2 text-right text-[18px] font-medium leading-none tabular-nums text-[color:var(--gms-text-muted)]"
              style={{ gridColumn: 1, gridRow: index + 1 }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className="self-end pr-2 text-[18px] font-medium leading-none text-[color:var(--gms-text)]"
              style={{ gridColumn: 2, gridRow: index + 1 }}
            >
              {title}
            </span>
            <span
              aria-hidden
              className="self-end overflow-hidden pr-3 pb-px text-[18px] leading-none tracking-[0.12em] text-[color:var(--gms-text-muted)]/35"
              style={{ gridColumn: 3, gridRow: index + 1 }}
            >
              {".".repeat(120)}
            </span>
            <span
              className="self-end text-right text-[18px] font-medium leading-none tabular-nums text-[color:var(--gms-text-muted)]"
              style={{ gridColumn: 4, gridRow: index + 1 }}
            >
              {String(page).padStart(2, "0")}
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export function DeckTable({
  headers,
  rows,
  compact = false,
  featured = false,
  emphasizeLastRow = false,
  emphasizeRowIndex,
}: {
  headers: string[];
  rows: string[][];
  compact?: boolean;
  featured?: boolean;
  emphasizeLastRow?: boolean;
  emphasizeRowIndex?: number;
}) {
  const headerClass = compact
    ? "px-4 py-3 text-[16px] font-semibold"
    : "px-5 py-3.5 text-[18px] font-semibold";
  const cellClass = compact
    ? "px-4 py-3 text-[16px] font-medium leading-snug"
    : "px-5 py-3.5 text-[17px] font-medium leading-relaxed";

  return (
    <div
      className={
        featured
          ? "gms-card deck-table--featured overflow-hidden rounded-2xl"
          : "overflow-hidden rounded-2xl border border-[color:var(--gms-border)]"
      }
    >
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-[color:var(--gms-border)] bg-[color:var(--ibd-gray)]">
            {headers.map((header, headerIndex) => (
              <th
                key={header}
                className={`text-deck-accent ${headerClass} ${
                  featured && headerIndex === headers.length - 1 ? "text-right" : ""
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            const isEmphasizedRow =
              emphasizeRowIndex !== undefined
                ? rowIndex === emphasizeRowIndex
                : emphasizeLastRow && rowIndex === rows.length - 1;
            const isFollowOnRow =
              emphasizeRowIndex !== undefined &&
              rowIndex === emphasizeRowIndex + 1;

            return (
              <tr
                key={rowIndex}
                className={`border-b border-[color:var(--gms-border)] last:border-b-0 ${
                  isEmphasizedRow
                    ? "deck-table__total-row border-t-2 border-[color:var(--gms-border)] bg-[color:var(--ibd-gray)]"
                    : isFollowOnRow
                      ? "deck-table__follow-on-row border-t border-[color:var(--gms-border)]"
                      : featured
                        ? rowIndex % 2 === 1
                          ? "bg-[color:var(--ibd-gray)]/60"
                          : ""
                        : "even:bg-[color:var(--ibd-gray)]"
                }`}
              >
                {row.map((cell, cellIndex) => {
                  const isAmountColumn = cellIndex === row.length - 1;

                  return (
                    <td
                      key={cellIndex}
                      className={`text-[color:var(--gms-text)] ${cellClass} ${
                        featured && isAmountColumn
                          ? "deck-table__amount text-right tabular-nums font-semibold text-deck-accent"
                          : ""
                      } ${isEmphasizedRow || isFollowOnRow ? "font-semibold" : ""} ${
                        isEmphasizedRow && isAmountColumn
                          ? "text-[18px] font-bold"
                          : ""
                      }`}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function DeckFeatureGrid({
  items,
  uniform = false,
  layout = "stack",
}: {
  items: { title: string; description?: string; icon?: ReactNode }[];
  uniform?: boolean;
  layout?: "stack" | "inline";
}) {
  return (
    <div
      className={`grid gap-4 sm:grid-cols-2 ${
        uniform ? "deck-feature-grid--uniform items-stretch" : ""
      }${layout === "inline" ? " deck-feature-grid--inline" : ""}`}
    >
      {items.map((item) =>
        layout === "inline" ? (
          <div
            key={item.title}
            className="deck-feature-grid__inline-card gms-card flex items-center gap-3 rounded-2xl p-4"
          >
            {item.icon && (
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[color:var(--gms-border)] bg-[color:var(--ibd-gray)] text-deck-accent">
                {item.icon}
              </div>
            )}
            <div className="flex min-w-0 flex-1 items-center gap-2.5">
              <span className="deck-bullet shrink-0" aria-hidden />
              <p className="min-w-0 text-[15px] font-medium leading-snug text-[color:var(--gms-text)]">
                <span className="font-semibold">{item.title}</span>
                {item.description && (
                  <>
                    {" "}
                    <span className="font-medium text-[color:var(--gms-text-muted)]">
                      — {item.description}
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        ) : (
          <div key={item.title} className="gms-card rounded-2xl p-5">
            {item.icon && (
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--gms-border)] bg-[color:var(--ibd-gray)] text-deck-accent">
                {item.icon}
              </div>
            )}
            <p className="text-[17px] font-semibold text-[color:var(--gms-text)]">{item.title}</p>
            {item.description && (
              <p className="deck-feature-grid__description mt-2 text-[17px] font-medium leading-relaxed text-[color:var(--gms-text)]">
                {item.description}
              </p>
            )}
          </div>
        ),
      )}
    </div>
  );
}
