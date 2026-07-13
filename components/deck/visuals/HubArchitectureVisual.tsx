"use client";

import Image from "next/image";
import { ArrowDown, Landmark } from "lucide-react";
import { IbdMark, MotheoMark } from "@/components/deck/IbdMark";
import { ALLIANCE_ENTITY_ICONS, deckIcon } from "@/components/deck/deck-icons";
import { ASSETS } from "@/lib/assets";
import { hubArchitectureEntities } from "@/lib/deck-proposal-content";

function FlowDown() {
  return (
    <span className="deck-flow-connector hub-architecture-visual__arrow" aria-hidden>
      <ArrowDown strokeWidth={3} />
    </span>
  );
}

/** Page 10 visual — Alliance Group tree feeding Hub → Motheo → RSL */
export function HubArchitectureVisual() {
  return (
    <div className="hub-architecture-visual">
      <div className="hub-architecture-visual__root gms-card rounded-xl">
        <Image
          src={ASSETS.brands.allianceLogo}
          alt=""
          width={1200}
          height={400}
          aria-hidden
          className="hub-architecture-visual__root-logo"
        />
        <p className="deck-flow-step-card__title deck-flow-step-card__title--compact">
          Alliance Group
        </p>
      </div>

      <div className="hub-architecture-visual__tree" aria-hidden>
        <span className="hub-architecture-visual__tree-stem" />
        <span className="hub-architecture-visual__tree-bar" />
      </div>

      <div className="hub-architecture-visual__entities">
        {hubArchitectureEntities.map((entity, index) => {
          const Icon = ALLIANCE_ENTITY_ICONS[index] ?? ALLIANCE_ENTITY_ICONS[0]!;
          return (
            <div key={entity} className="hub-architecture-visual__entity">
              <span className="hub-architecture-visual__entity-drop" />
              <div className="hub-architecture-visual__entity-card gms-card rounded-lg">
                <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact hub-architecture-visual__entity-icon">
                  {deckIcon(Icon, "sm")}
                </div>
                <div className="hub-architecture-visual__entity-copy">
                  <p className="deck-type-card-title hub-architecture-visual__entity-name">
                    {entity}
                  </p>
                </div>
                <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact hub-architecture-visual__entity-num-tile">
                  <span className="hub-architecture-visual__entity-num tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hub-architecture-visual__funnel" aria-hidden>
        <span className="hub-architecture-visual__funnel-bar" />
        <span className="hub-architecture-visual__funnel-stem" />
      </div>

      <FlowDown />

      <div className="hub-architecture-visual__pipeline">
        <div className="hub-architecture-visual__step gms-card rounded-xl">
          <div className="hub-architecture-visual__step-inner">
            <IbdMark size="md" className="!h-6 !w-6" />
            <p className="deck-flow-step-card__title deck-flow-step-card__title--compact">
              Infinity Enterprise Compliance Hub
            </p>
          </div>
        </div>

        <FlowDown />

        <div className="hub-architecture-visual__step gms-card rounded-xl">
          <div className="hub-architecture-visual__step-inner">
            <MotheoMark size="sm" className="!h-3.5" />
            <p className="deck-flow-step-card__title deck-flow-step-card__title--compact">
              Motheo Compliance Engine
            </p>
          </div>
        </div>

        <FlowDown />

        <div className="hub-architecture-visual__step gms-card rounded-xl">
          <div className="hub-architecture-visual__step-inner">
            <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact">
              {deckIcon(Landmark, "sm")}
            </div>
            <p className="deck-flow-step-card__title deck-flow-step-card__title--compact">
              Revenue Services Lesotho (Lekuka)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
