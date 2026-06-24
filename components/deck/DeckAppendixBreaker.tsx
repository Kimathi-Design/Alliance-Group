import type { AppendixItem } from "@/lib/deck-content";
import { DeckSlideFrame } from "@/components/deck/DeckSlideFrame";
import { DeckIconTile, APPENDIX_ICONS } from "@/components/deck/deck-icons";

type Props = {
  slideIndex: number;
  appendix: AppendixItem;
  appendixIndex: number;
};

export function DeckAppendixBreaker({ slideIndex, appendix, appendixIndex }: Props) {
  return (
    <DeckSlideFrame index={slideIndex} layout="full">
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-8 text-center">
        <DeckIconTile
          icon={APPENDIX_ICONS[appendixIndex]}
          size="hero"
          className="mb-8"
        />
        <p className="deck-appendix-breaker__id text-deck-accent">{appendix.id}</p>
        <h2 className="deck-appendix-breaker__title mt-4 text-[color:var(--gms-text)]">
          {appendix.title}
        </h2>
        <p className="deck-appendix-breaker__subtitle mt-3 text-[color:var(--gms-text-muted)]">
          {appendix.subtitle}
        </p>
        <a
          href={appendix.file}
          target="_blank"
          rel="noopener noreferrer"
          className="deck-appendix-breaker__link mt-10 inline-flex items-center rounded-full border border-[color:var(--gms-border)] bg-white px-5 py-2 text-[12px] font-medium tracking-[0.14em] text-deck-accent uppercase"
        >
          View attached document
        </a>
      </div>
    </DeckSlideFrame>
  );
}
