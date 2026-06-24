"use client";

import { motion } from "framer-motion";

type DeckProgressBarProps = {
  current: number;
  total: number;
};

export function DeckProgressBar({ current, total }: DeckProgressBarProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div
      className="relative z-[70] h-[3px] w-full shrink-0 bg-[color:var(--gms-border)]"
      role="progressbar"
      aria-valuenow={current + 1}
      aria-valuemin={1}
      aria-valuemax={total}
      aria-label="Presentation progress"
    >
      <motion.div
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#34216B] via-[#34216B] to-[#F41C28] shadow-[0_0_10px_rgba(244,28,40,0.25)]"
        initial={false}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
