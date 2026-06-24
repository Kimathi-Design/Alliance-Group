"use client";

import dynamic from "next/dynamic";

const DeckViewer = dynamic(
  () => import("@/components/deck/DeckViewer").then((mod) => mod.DeckViewer),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[color:var(--ibd-gray)]">
        <span className="text-[13px] font-medium tracking-[0.28em] text-deck-accent uppercase">
          Motheo Proposal
        </span>
      </div>
    ),
  },
);

export function DeckPageClient() {
  return <DeckViewer />;
}
