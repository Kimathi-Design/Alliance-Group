"use client";

import { ArrowDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { deckIcon } from "@/components/deck/deck-icons";

type Step = { step?: string; title: string };

export function FlowConnector({ className = "" }: { className?: string }) {
  return (
    <span className={`deck-flow-connector ${className}`.trim()} aria-hidden>
      <ArrowDown strokeWidth={3} />
    </span>
  );
}

function FlowStepCard({
  step,
  Icon,
}: {
  step: Step;
  Icon?: LucideIcon;
}) {
  const stepLabel = step.step?.replace(/^step\s*/i, "").trim();

  return (
    <div className="deck-flow-step-card gms-card h-full w-full rounded-2xl p-5">
      <div className="deck-flow-step-card__row">
        {stepLabel && (
          <span className="deck-flow-step-card__number tabular-nums">{stepLabel}</span>
        )}
        <p className="deck-flow-step-card__title">{step.title}</p>
        {Icon && (
          <div className="deck-flow-step-card__icon-col">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--gms-border)] bg-[color:var(--ibd-gray)] text-deck-accent">
              {deckIcon(Icon, "sm")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function FlowStepsVisual({
  steps,
  columns = 2,
  icons,
  fill = false,
}: {
  steps: Step[];
  columns?: 1 | 2 | 4;
  icons?: readonly LucideIcon[];
  fill?: boolean;
}) {
  if (columns === 1) {
    return (
      <div
        className={`deck-flow-steps-visual deck-flow-steps-visual--stack${
          fill ? " deck-flow-steps-visual--fill h-full min-h-0 flex-1" : ""
        }`}
      >
        {steps.map((step, index) => {
          const Icon = icons?.[index];
          const isLast = index === steps.length - 1;

          return (
            <div
              key={`${step.title}-${index}`}
              className={fill ? "deck-flow-step-slot" : "deck-flow-step-slot flex flex-col"}
            >
              <div
                className={
                  fill
                    ? "flex w-full min-h-0 flex-1 items-stretch"
                    : "w-full"
                }
              >
                <FlowStepCard step={step} Icon={Icon} />
              </div>
              {!isLast && <FlowConnector />}
            </div>
          );
        })}
      </div>
    );
  }

  const gridClass =
    columns === 4 ? "grid-cols-4" : "grid-cols-2";

  return (
    <div
      className={`deck-flow-steps-visual grid ${gridClass} items-stretch gap-4${
        fill ? " deck-flow-steps-visual--fill" : ""
      }`}
    >
      {steps.map((step, index) => {
        const Icon = icons?.[index];
        return (
          <div key={`${step.title}-${index}`} className="h-full">
            <FlowStepCard step={step} Icon={Icon} />
          </div>
        );
      })}
    </div>
  );
}

export function ArchitectureStackVisual({
  items,
  icons,
  fill = false,
}: {
  items: string[];
  icons?: readonly LucideIcon[];
  fill?: boolean;
}) {
  if (icons) {
    return (
      <div className="deck-architecture-flow flex h-full min-h-0 w-full flex-1 flex-col">
        {items.map((title, index) => (
          <div
            key={title}
            className="deck-architecture-flow__step flex min-h-0 flex-1 flex-col items-center"
          >
            <div className="flex w-full min-h-0 flex-1 items-stretch">
              <FlowStepCard
                step={{
                  step: String(index + 1).padStart(2, "0"),
                  title,
                }}
                Icon={icons[index]}
              />
            </div>
            {index < items.length - 1 && <FlowConnector />}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`deck-flow-steps-visual deck-flow-steps-visual--stack h-full min-h-0 w-full flex-1${
        fill ? " deck-flow-steps-visual--fill" : ""
      }`}
    >
      {items.map((item, index) => (
        <div
          key={item}
          className={`deck-flow-step-slot flex flex-col items-center${
            fill ? " min-h-0 flex-1" : ""
          }`}
        >
          <div
            className={
              fill
                ? "flex w-full min-h-0 flex-1 items-stretch"
                : "w-full"
            }
          >
            <div className="gms-card flex h-full w-full items-center justify-center rounded-2xl px-4 py-5 text-center text-[15px] font-medium leading-snug text-deck-accent">
              {item}
            </div>
          </div>
          {index < items.length - 1 && <FlowConnector />}
        </div>
      ))}
    </div>
  );
}
