"use client";

import { EXECUTIVE_SUMMARY_TRANSFORMATION_ICONS } from "@/components/deck/deck-icons";
import { executiveSummaryTransformation } from "@/lib/deck-proposal-content";
import { VerticalFlowDiagram } from "@/components/deck/visuals/ProposalDiagrams";

/** Page 4 visual — verbatim copywrite transformation diagram */
export function AllianceTransformationVisual() {
  return (
    <div className="alliance-transformation-visual">
      <div className="alliance-transformation-visual__flow">
        <VerticalFlowDiagram
          items={executiveSummaryTransformation}
          icons={EXECUTIVE_SUMMARY_TRANSFORMATION_ICONS}
          compact
          centerContent
          className="alliance-transformation-visual__steps"
        />
      </div>
    </div>
  );
}
