"use client";

import { BadgeRow } from "@/components/deck/visuals/ProposalDiagrams";
import { VerticalFlowDiagram } from "@/components/deck/visuals/ProposalDiagrams";
import { ALLIANCE_HUB_ICONS } from "@/components/deck/deck-icons";
import { hubOverviewPlatformFlow, solutionFloatingCards } from "@/lib/deck-proposal-content";

/** Page 16 visual — enterprise platform illustration */
export function HubPlatformOverviewVisual() {
  return (
    <div className="hub-platform-overview-visual flex h-full min-h-0 flex-1 flex-col gap-3">
      <VerticalFlowDiagram
        items={hubOverviewPlatformFlow}
        icons={ALLIANCE_HUB_ICONS}
        compact
        centerContent
        className="min-h-0 flex-1"
      />
      <BadgeRow badges={solutionFloatingCards} />
    </div>
  );
}
