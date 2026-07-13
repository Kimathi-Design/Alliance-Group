"use client";

import Image from "next/image";
import { Children, Fragment, isValidElement, useEffect, useRef, useState, type ReactNode } from "react";
import { animate, useReducedMotion } from "framer-motion";
import { GlowOrbs } from "@/components/effects/GlowOrbs";
import { Particles } from "@/components/effects/Particles";
import { DeckIconTile as DeckLucideIconTile, deckIcon } from "@/components/deck/deck-icons";
import type { LucideIcon } from "lucide-react";
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
  children?: ReactNode;
  showParticles?: boolean;
  className?: string;
  /** Skip intro/body split — use for hero slides with custom full-bleed layout */
  layout?: "default" | "full";
  /** Full-bleed background image rendered behind slide content */
  backgroundImage?: string;
  /** Hide the default slide footer (e.g. cover / back cover) */
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
  label,
}: {
  children: ReactNode;
  className?: string;
  label?: ReactNode;
}) {
  return (
    <div
      className={`deck-visual-panel flex min-h-0 flex-1 flex-col overflow-hidden rounded-3xl border border-[color:var(--gms-border)] bg-[color:var(--ibd-gray)] p-6${
        label ? " deck-visual-panel--labeled" : ""
      } ${className}`.trim()}
    >
      {label ? (
        <>
          <DeckVisualPanelLabel className="deck-visual-panel__heading">{label}</DeckVisualPanelLabel>
          <div className="deck-visual-panel__body flex min-h-0 flex-1 flex-col overflow-hidden">
            {children}
          </div>
        </>
      ) : (
        children
      )}
    </div>
  );
}

/** Prose + visual — vertical (default), horizontal, visual-top, or visual-bottom */
export function DeckSlideBodySplit({
  children,
  visual,
  visualLabel,
  className = "",
  proseClassName = "",
  visualClassName = "",
  layout = "vertical",
}: {
  children: ReactNode;
  visual: ReactNode;
  visualLabel?: ReactNode;
  className?: string;
  proseClassName?: string;
  visualClassName?: string;
  layout?: "vertical" | "horizontal" | "visual-top" | "visual-bottom";
}) {
  if (layout === "horizontal") {
    return (
      <div
        className={`deck-slide-body-split deck-slide-body-split--horizontal grid h-full min-h-0 flex-1 grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] gap-5 ${className}`.trim()}
      >
        <div className="deck-slide-body-split__prose flex min-h-0 flex-col gap-3 overflow-y-auto overscroll-contain pr-1">
          {children}
        </div>
        <DeckVisualPanel className={`h-full min-h-0 ${visualClassName}`.trim()} label={visualLabel}>
          {visual}
        </DeckVisualPanel>
      </div>
    );
  }

  if (layout === "visual-top") {
    return (
      <div
        className={`deck-slide-body-split deck-slide-body-split--visual-top flex h-full min-h-0 flex-1 flex-col gap-4 ${className}`.trim()}
      >
        <DeckVisualPanel className="min-h-0 flex-[1.45]" label={visualLabel}>
          {visual}
        </DeckVisualPanel>
        <div className="deck-slide-body-split__prose min-h-0 flex-1 overflow-y-auto overscroll-contain space-y-3">
          {children}
        </div>
      </div>
    );
  }

  if (layout === "visual-bottom") {
    return (
      <div
        className={`deck-slide-body-split deck-slide-body-split--visual-bottom flex h-full min-h-0 flex-1 flex-col gap-7 ${className}`.trim()}
      >
        <div
          className={`deck-slide-body-split__prose min-h-0 min-w-0 flex-1 shrink overflow-x-hidden overflow-y-auto overscroll-contain space-y-3 ${proseClassName}`.trim()}
        >
          {children}
        </div>
        <DeckVisualPanel className={`min-h-0 shrink-0 flex-[2] ${visualClassName}`.trim()} label={visualLabel}>
          {visual}
        </DeckVisualPanel>
      </div>
    );
  }

  return (
    <div className={`flex min-h-0 flex-1 flex-col gap-4 ${className}`.trim()}>
      <div className="shrink-0 space-y-4">{children}</div>
      <DeckVisualPanel label={visualLabel}>{visual}</DeckVisualPanel>
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
              quality={95}
              // Exact slide-sized JPEGs — skip optimizer re-encode/upscale soft blur
              unoptimized
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
          {!hideFooter && (
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
  return <p className="deck-type-body">{children}</p>;
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
      <div className="mt-3 deck-type-body text-[20px] leading-relaxed">
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
  columns,
}: {
  items: BulletItem[];
  compact?: boolean;
  /** Split items into side-by-side columns (e.g. 2 = left/right halves) */
  columns?: 2;
}) {
  if (columns === 2 && items.length > 1) {
    const mid = Math.ceil(items.length / 2);
    return (
      <div className="deck-bullet-list-columns grid grid-cols-2 gap-x-6">
        <DeckBulletList items={items.slice(0, mid)} compact={compact} />
        <DeckBulletList items={items.slice(mid)} compact={compact} />
      </div>
    );
  }

  return (
    <ul className={compact ? "space-y-1" : "space-y-2.5"}>
      {items.map((item) => {
        const { title, description, inline } = parseBulletItem(item);

        return (
          <li
            key={title}
            className={`deck-type-body flex items-start gap-3 leading-relaxed text-[color:var(--gms-text)] ${
              compact ? "gap-2" : ""
            }`}
          >
            <span
              className={`deck-bullet ${description && !inline ? "mt-1.5" : ""}`}
              aria-hidden
            />
            <div className="min-w-0">
              {inline && description ? (
                <p className="deck-type-body">
                  <span className="font-semibold">{title}</span>
                  {" — "}
                  {description}
                </p>
              ) : (
                <>
                  <p
                    className={
                      description
                        ? "deck-type-body font-semibold"
                        : "deck-type-body"
                    }
                  >
                    {title}
                  </p>
                  {description && (
                    <p className="deck-type-body mt-1">
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

/** Visual panel column/section heading — same typography as DeckSectionLabel, without auto-numbering */
export function DeckVisualPanelLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`deck-title-lg shrink-0 font-semibold ${className}`.trim()}>{children}</p>
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
  numbered = false,
  rowIcons,
}: {
  headers: string[];
  rows: string[][];
  compact?: boolean;
  featured?: boolean;
  emphasizeLastRow?: boolean;
  emphasizeRowIndex?: number;
  numbered?: boolean;
  rowIcons?: readonly LucideIcon[];
}) {
  const hasRoleMeta = numbered || Boolean(rowIcons);
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
          ? `gms-card deck-table--featured overflow-hidden rounded-2xl${
              hasRoleMeta ? " deck-table--with-role-meta" : ""
            }`
          : `overflow-hidden rounded-2xl border border-[color:var(--gms-border)]${
              hasRoleMeta ? " deck-table--with-role-meta" : ""
            }`
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
                  const isRoleColumn = cellIndex === 0 && hasRoleMeta;
                  const rowIcon = rowIcons?.[rowIndex] ?? rowIcons?.[rowIcons.length - 1];

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
                      {isRoleColumn ? (
                        <div className="deck-table__role-cell">
                          {numbered && (
                            <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact deck-table__number-tile">
                              <span className="deck-table__number tabular-nums">
                                {String(rowIndex + 1).padStart(2, "0")}
                              </span>
                            </div>
                          )}
                          {rowIcon && (
                            <DeckLucideIconTile icon={rowIcon} size="compact" />
                          )}
                          <span className="deck-table__role-label min-w-0">{cell}</span>
                        </div>
                      ) : (
                        cell
                      )}
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

export function DeckOutcomeCardList({
  items,
  icons,
  fill = true,
}: {
  items: { title: string; description?: string; subtitle?: string; icon?: ReactNode }[];
  icons?: readonly LucideIcon[];
  fill?: boolean;
}) {
  return (
    <div
      className={`deck-outcome-card-list flex flex-col ${
        fill ? "h-full min-h-0 flex-1 gap-3" : "gap-5"
      }`}
    >
      {items.map((item, index) => (
        <div
          key={item.title}
          className={`deck-outcome-card gms-card rounded-2xl p-5${
            fill ? " flex min-h-0 flex-1 flex-col justify-center" : ""
          }`}
        >
          <div className="flex items-center gap-6">
            <div className="min-w-0 flex-1">
              <p className="deck-type-card-title-accent">{item.title}</p>
              {item.description && (
                <p className="deck-type-card-body mt-2">{item.description}</p>
              )}
              {item.subtitle && (
                <p className="deck-type-outcome-kicker mt-3">{item.subtitle}</p>
              )}
            </div>
            <div className="deck-outcome-card__icon-col">
              <DeckIconTile
                icon={
                  item.icon ??
                  (icons ? deckIcon(icons[index] ?? icons[icons.length - 1]!, "sm") : null)
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function DeckIconTile({ icon }: { icon?: ReactNode }) {
  if (!icon) return null;
  return (
    <div className="deck-flow-step-card__tile deck-flow-step-card__tile--default">{icon}</div>
  );
}

export function DeckFeatureGrid({
  items,
  uniform = false,
  layout = "stack",
  variant = "feature",
  columns = 2,
}: {
  items: { title: string; description?: string; icon?: ReactNode }[];
  uniform?: boolean;
  layout?: "stack" | "inline";
  variant?: "feature" | "premium" | "capability";
  columns?: 1 | 2;
}) {
  const gridClass =
    columns === 1 ? "grid-cols-1" : variant === "premium" ? "deck-premium-card-grid" : "grid-cols-2";

  return (
    <div
      className={`grid gap-4 ${gridClass} ${
        uniform ? "deck-feature-grid--uniform items-stretch" : ""
      }${layout === "inline" ? " deck-feature-grid--inline" : ""}${
        variant === "premium" ? " deck-why-infinity-grid" : ""
      }${variant === "capability" ? " deck-feature-grid--capability" : ""}`}
    >
      {items.map((item) =>
        layout === "inline" ? (
          <div
            key={item.title}
            className="deck-feature-grid__inline-card gms-card flex items-center gap-4 rounded-2xl p-4"
          >
            <DeckIconTile icon={item.icon} />
            <div className="flex min-w-0 flex-1 items-center gap-2.5">
              <span className="deck-bullet shrink-0" aria-hidden />
              <p className="deck-type-inline-feature min-w-0">
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
        ) : variant === "capability" ? (
          <div key={item.title} className="deck-capability-card gms-card rounded-2xl">
            <div className="deck-capability-card__icon shrink-0">
              <DeckIconTile icon={item.icon} />
            </div>
            <div className="deck-capability-card__copy min-w-0 flex-1">
              <p className="deck-type-card-title">{item.title}</p>
              {item.description && (
                <p className="deck-type-card-body mt-2">{item.description}</p>
              )}
            </div>
          </div>
        ) : variant === "premium" ? (
          <div key={item.title} className="gms-card rounded-2xl p-5">
            <DeckIconTile icon={item.icon} />
            <p className="deck-type-premium-label mt-3">{item.title}</p>
            {item.description && (
              <p className="deck-type-card-body mt-2">{item.description}</p>
            )}
          </div>
        ) : (
          <div key={item.title} className="gms-card rounded-2xl p-5">
            <div className="mb-3">
              <DeckIconTile icon={item.icon} />
            </div>
            <p className="deck-type-card-title">{item.title}</p>
            {item.description && (
              <p className="deck-feature-grid__description deck-type-card-body mt-2">{item.description}</p>
            )}
          </div>
        ),
      )}
    </div>
  );
}
