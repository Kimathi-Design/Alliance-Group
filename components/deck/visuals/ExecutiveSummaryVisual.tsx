"use client";

import { executiveSummaryFlow } from "@/lib/deck-content";
import { ArchitectureStackVisual } from "@/components/deck/visuals/FlowStepsVisual";

export function ExecutiveSummaryVisual() {
  return (
    <div className="grid h-full min-h-0 flex-1 grid-cols-2 gap-4">
      <div className="flex min-h-0 flex-1 flex-col">
        <p className="mb-2 shrink-0 text-[12px] font-medium tracking-[0.18em] text-[color:var(--gms-text-muted)] uppercase">
          Current State
        </p>
        <div className="flex min-h-0 flex-1 flex-col">
          <ArchitectureStackVisual items={executiveSummaryFlow.current} fill />
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col">
        <p className="mb-2 shrink-0 text-[12px] font-medium tracking-[0.18em] text-deck-accent uppercase">
          Future State
        </p>
        <div className="flex min-h-0 flex-1 flex-col">
          <ArchitectureStackVisual items={executiveSummaryFlow.future} fill />
        </div>
      </div>
    </div>
  );
}
