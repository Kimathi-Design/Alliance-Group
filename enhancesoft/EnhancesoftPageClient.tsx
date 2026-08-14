"use client";

import dynamic from "next/dynamic";

const EnhancesoftViewer = dynamic(
  () => import("@/enhancesoft/EnhancesoftViewer").then((mod) => mod.EnhancesoftViewer),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-[80] bg-[color:var(--ibd-gray)]" />
    ),
  },
);

export function EnhancesoftPageClient() {
  return <EnhancesoftViewer />;
}
