import { ArrowDown, ArrowRight, Building2, CheckCircle2, Landmark, AlertTriangle, UserRound } from "lucide-react";
import { IbdMark } from "@/components/deck/IbdMark";
import { deckIcon } from "@/components/deck/deck-icons";

function FlowRight() {
  return (
    <span className="deck-flow-connector tin-validation-visual__arrow" aria-hidden>
      <ArrowRight strokeWidth={3} />
    </span>
  );
}

function FlowDown() {
  return (
    <span className="deck-flow-connector tin-validation-visual__arrow" aria-hidden>
      <ArrowDown strokeWidth={3} />
    </span>
  );
}

/** Page 22 visual — TIN validation flow with valid/invalid branch */
export function TinValidationVisual() {
  return (
    <div className="tin-validation-visual">
      <div className="tin-validation-visual__pipeline">
        <div className="tin-validation-visual__step gms-card rounded-xl">
          <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact">
            {deckIcon(UserRound, "sm")}
          </div>
          <p className="deck-flow-step-card__title deck-flow-step-card__title--compact">Customer</p>
        </div>

        <FlowRight />

        <div className="tin-validation-visual__step gms-card rounded-xl">
          <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact">
            <span className="tin-validation-visual__tin-badge">TIN</span>
          </div>
          <p className="deck-flow-step-card__title deck-flow-step-card__title--compact">Enter TIN</p>
        </div>

        <FlowRight />

        <div className="tin-validation-visual__step gms-card rounded-xl">
          <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact">
            <IbdMark size="sm" className="!h-4 !w-4" />
          </div>
          <p className="deck-flow-step-card__title deck-flow-step-card__title--compact">
            Enterprise Compliance Hub
          </p>
        </div>

        <FlowRight />

        <div className="tin-validation-visual__step gms-card rounded-xl">
          <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact">
            {deckIcon(Landmark, "sm")}
          </div>
          <p className="deck-flow-step-card__title deck-flow-step-card__title--compact">
            Revenue Services Lesotho
          </p>
        </div>
      </div>

      <FlowDown />

      <div className="tin-validation-visual__branch">
        <div className="tin-validation-visual__outcome tin-validation-visual__outcome--valid gms-card rounded-xl">
          <div className="tin-validation-visual__outcome-icon tin-validation-visual__outcome-icon--valid">
            {deckIcon(CheckCircle2, "sm")}
          </div>
          <div className="tin-validation-visual__outcome-copy">
            <p className="deck-flow-step-card__title deck-flow-step-card__title--compact">Valid</p>
            <p className="deck-type-body-compact tin-validation-visual__outcome-sub">
              Successful validation
            </p>
          </div>
        </div>

        <div className="tin-validation-visual__outcome tin-validation-visual__outcome--invalid gms-card rounded-xl">
          <div className="tin-validation-visual__outcome-icon tin-validation-visual__outcome-icon--invalid">
            {deckIcon(AlertTriangle, "sm")}
          </div>
          <div className="tin-validation-visual__outcome-copy">
            <p className="deck-flow-step-card__title deck-flow-step-card__title--compact">Invalid</p>
            <p className="deck-type-body-compact tin-validation-visual__outcome-sub">
              Exception for review
            </p>
          </div>
        </div>
      </div>

      <FlowDown />

      <div className="tin-validation-visual__result gms-card rounded-xl">
        <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact">
          {deckIcon(Building2, "sm")}
        </div>
        <p className="deck-flow-step-card__title deck-flow-step-card__title--compact">
          Customer Record Updated
        </p>
      </div>
    </div>
  );
}
