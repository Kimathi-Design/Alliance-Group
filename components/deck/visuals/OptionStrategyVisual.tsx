"use client";

import {
  DeckVisualPanelLabel,
} from "@/components/deck/DeckSlideFrame";
import { deckIcon } from "@/components/deck/deck-icons";
import {
  optionAAdvantages,
  optionADescription,
  optionADisadvantages,
  optionBAdvantages,
  optionBDescription,
} from "@/lib/deck-proposal-content";
import {
  Banknote,
  BarChart3,
  Building2,
  ClipboardList,
  FileStack,
  Handshake,
  Layers,
  Network,
  Server,
  Settings,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

/** Option A — Independent deployments */
const OPTION_A_ADVANTAGE_ICONS = [Building2] as const;

/** Higher cost, Duplicate infrastructure, Multiple support contracts, Separate reporting, Complex administration */
const OPTION_A_DISADVANTAGE_ICONS = [
  Banknote,
  Server,
  Handshake,
  FileStack,
  Settings,
] as const;

/** Shared infrastructure, Lower total cost, Central administration, Unified reporting, Simplified support, Future scalability */
const OPTION_B_ADVANTAGE_ICONS = [
  Network,
  TrendingUp,
  Users,
  BarChart3,
  ClipboardList,
  Layers,
] as const;

function OptionPointCard({
  label,
  icon,
  tone = "neutral",
}: {
  label: string;
  icon: LucideIcon;
  tone?: "neutral" | "negative" | "positive";
}) {
  return (
    <div
      className={`option-strategy-visual__point gms-card rounded-lg${
        tone === "negative"
          ? " option-strategy-visual__point--negative"
          : tone === "positive"
            ? " option-strategy-visual__point--positive"
            : ""
      }`}
    >
      <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact option-strategy-visual__point-icon">
        {deckIcon(icon, "sm")}
      </div>
      <p className="deck-type-card-body option-strategy-visual__point-label">{label}</p>
    </div>
  );
}

/** Page 9 visual — Option A vs Option B comparison per copywrite */
export function OptionStrategyVisual() {
  return (
    <div className="option-strategy-visual">
      <div className="option-strategy-visual__column option-strategy-visual__column--a gms-card rounded-2xl">
        <div className="option-strategy-visual__column-head">
          <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact">
            {deckIcon(Server, "sm")}
          </div>
          <DeckVisualPanelLabel>Option A — Independent Compliance Solutions</DeckVisualPanelLabel>
        </div>
        <p className="deck-type-card-body option-strategy-visual__desc">{optionADescription}</p>

        <p className="option-strategy-visual__section-label">Advantages</p>
        <div className="option-strategy-visual__points">
          {optionAAdvantages.map((item, index) => (
            <OptionPointCard
              key={item}
              label={item}
              icon={OPTION_A_ADVANTAGE_ICONS[index] ?? Server}
              tone="neutral"
            />
          ))}
        </div>

        <p className="option-strategy-visual__section-label">Disadvantages</p>
        <div className="option-strategy-visual__points">
          {optionADisadvantages.map((item, index) => (
            <OptionPointCard
              key={item}
              label={item}
              icon={OPTION_A_DISADVANTAGE_ICONS[index] ?? Settings}
              tone="negative"
            />
          ))}
        </div>
      </div>

      <div className="option-strategy-visual__column option-strategy-visual__column--b gms-card rounded-2xl">
        <div className="option-strategy-visual__column-head">
          <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact">
            {deckIcon(Layers, "sm")}
          </div>
          <DeckVisualPanelLabel>Option B — Enterprise Compliance Hub</DeckVisualPanelLabel>
          <span className="option-strategy-visual__badge">Recommended</span>
        </div>
        <p className="deck-type-card-body option-strategy-visual__desc">{optionBDescription}</p>

        <p className="option-strategy-visual__section-label">Advantages</p>
        <div className="option-strategy-visual__points">
          {optionBAdvantages.map((item, index) => (
            <OptionPointCard
              key={item}
              label={item}
              icon={OPTION_B_ADVANTAGE_ICONS[index] ?? Layers}
              tone="positive"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
