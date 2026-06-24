"use client";

import { ArchitectureStackVisual } from "@/components/deck/visuals/FlowStepsVisual";
import { SOLUTION_ARCHITECTURE_FLOW_ICONS } from "@/components/deck/deck-icons";
import { solutionArchitectureFlow } from "@/lib/deck-content";

export type SolutionArchitectureVariant = "stack" | "icon" | "tier" | "badge";

export function SolutionArchitectureVisual({
  variant: _variant,
}: {
  variant: SolutionArchitectureVariant;
}) {
  return (
    <ArchitectureStackVisual
      items={solutionArchitectureFlow}
      icons={SOLUTION_ARCHITECTURE_FLOW_ICONS}
    />
  );
}
