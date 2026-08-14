"use client";

import dynamic from "next/dynamic";

const EnhancesoftViewer = dynamic(
  () => import("@/enhancesoft/EnhancesoftViewer").then((mod) => mod.EnhancesoftViewer),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[color:var(--ibd-gray)]">
        <span className="text-[13px] font-medium tracking-[0.28em] text-deck-accent uppercase">
          Enhancesoft Proposal
        </span>
      </div>
    ),
  },
);

export function EnhancesoftPageClient() {
  return <EnhancesoftViewer />;
}
