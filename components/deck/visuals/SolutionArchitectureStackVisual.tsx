"use client";

import Image from "next/image";
import { ArrowDown, Landmark, Plug } from "lucide-react";
import { IbdMark, MotheoMark } from "@/components/deck/IbdMark";
import { ALLIANCE_ENTITY_ICONS, deckIcon } from "@/components/deck/deck-icons";
import { ASSETS } from "@/lib/assets";

const STACK_ENTITIES = [
  "Properties",
  "Lehae / Zoho",
  "Finclude",
  "AGIHC",
] as const;

function FlowDown() {
  return (
    <span className="deck-flow-connector solution-architecture-stack__arrow" aria-hidden>
      <ArrowDown strokeWidth={3} />
    </span>
  );
}

/** Page 17 visual — layered stack from Alliance Group → RSL */
export function SolutionArchitectureStackVisual() {
  return (
    <div className="solution-architecture-stack">
      <div className="solution-architecture-stack__root gms-card rounded-xl">
        <Image
          src={ASSETS.brands.allianceLogo}
          alt=""
          width={1200}
          height={400}
          aria-hidden
          className="solution-architecture-stack__root-logo"
        />
        <p className="deck-type-card-title">Alliance Group</p>
      </div>

      <div className="solution-architecture-stack__tree" aria-hidden>
        <span className="solution-architecture-stack__tree-stem" />
        <span className="solution-architecture-stack__tree-bar" />
      </div>

      <div className="solution-architecture-stack__entities">
        {STACK_ENTITIES.map((entity, index) => {
          const Icon = ALLIANCE_ENTITY_ICONS[index] ?? ALLIANCE_ENTITY_ICONS[0]!;
          return (
            <div key={entity} className="solution-architecture-stack__entity">
              <span className="solution-architecture-stack__entity-drop" />
              <div className="solution-architecture-stack__entity-card gms-card rounded-lg">
                <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact">
                  {deckIcon(Icon, "sm")}
                </div>
                <p className="deck-type-card-title">{entity}</p>
                <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact">
                  <span className="solution-architecture-stack__entity-num tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="solution-architecture-stack__funnel" aria-hidden>
        <span className="solution-architecture-stack__funnel-bar" />
        <span className="solution-architecture-stack__funnel-stem" />
      </div>

      <FlowDown />

      <div className="solution-architecture-stack__pipeline">
        <div className="solution-architecture-stack__step gms-card rounded-xl">
          <div className="solution-architecture-stack__step-inner">
            <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact">
              {deckIcon(Plug, "sm")}
            </div>
            <p className="deck-type-card-title">Integration Layer</p>
          </div>
        </div>

        <FlowDown />

        <div className="solution-architecture-stack__step gms-card rounded-xl">
          <div className="solution-architecture-stack__step-inner">
            <IbdMark size="md" className="!h-6 !w-6" />
            <p className="deck-type-card-title">Enterprise Compliance Hub</p>
          </div>
        </div>

        <FlowDown />

        <div className="solution-architecture-stack__step gms-card rounded-xl">
          <div className="solution-architecture-stack__step-inner">
            <MotheoMark size="sm" className="!h-3.5" />
            <p className="deck-type-card-title">Motheo Compliance Engine</p>
          </div>
        </div>

        <FlowDown />

        <div className="solution-architecture-stack__step gms-card rounded-xl">
          <div className="solution-architecture-stack__step-inner">
            <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact">
              {deckIcon(Landmark, "sm")}
            </div>
            <p className="deck-type-card-title">Revenue Services Lesotho</p>
          </div>
        </div>
      </div>
    </div>
  );
}
