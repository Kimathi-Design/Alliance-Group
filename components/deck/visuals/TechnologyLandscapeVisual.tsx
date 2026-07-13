"use client";

import Image from "next/image";
import { deckIcon, ALLIANCE_ENTITY_ICONS } from "@/components/deck/deck-icons";
import { technologyLandscape } from "@/lib/deck-proposal-content";
import { ASSETS } from "@/lib/assets";
import { Layers, Landmark } from "lucide-react";

/** Page 7 visual — four systems feeding into one central compliance platform */
export function TechnologyLandscapeVisual() {
  return (
    <div className="tech-landscape-visual">
      <div className="tech-landscape-visual__systems">
        {technologyLandscape.map((row, index) => {
          const Icon = ALLIANCE_ENTITY_ICONS[index] ?? ALLIANCE_ENTITY_ICONS[0]!;
          return (
            <div key={row.entity} className="tech-landscape-visual__system gms-card rounded-lg">
              <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact tech-landscape-visual__system-icon">
                {deckIcon(Icon, "sm")}
              </div>
              <div className="tech-landscape-visual__system-copy">
                <p className="deck-type-card-title tech-landscape-visual__system-name">{row.entity}</p>
                <p className="deck-type-card-body tech-landscape-visual__system-soft">{row.software}</p>
                <p className="tech-landscape-visual__system-int">{row.integration}</p>
              </div>
              <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact tech-landscape-visual__system-num-tile">
                <span className="tech-landscape-visual__system-num tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="tech-landscape-visual__connectors" aria-hidden>
        {technologyLandscape.map((row) => (
          <span key={`${row.entity}-connector`} className="tech-landscape-visual__connector" />
        ))}
      </div>

      <div className="tech-landscape-visual__hub gms-card rounded-lg">
        <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact">
          {deckIcon(Layers, "sm")}
        </div>
        <div className="tech-landscape-visual__hub-copy">
          <p className="deck-type-card-title">Enterprise Compliance Hub</p>
          <p className="deck-type-card-body tech-landscape-visual__hub-sub">
            Powered by Motheo
            <Image
              src={ASSETS.brands.motheoLogo}
              alt=""
              width={3770}
              height={3290}
              aria-hidden
              className="tech-landscape-visual__hub-motheo"
            />
          </p>
        </div>
      </div>

      <div className="tech-landscape-visual__arrow" aria-hidden />

      <div className="tech-landscape-visual__rsl gms-card rounded-lg">
        <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact">
          {deckIcon(Landmark, "sm")}
        </div>
        <p className="deck-type-card-title">Revenue Services Lesotho</p>
      </div>
    </div>
  );
}
