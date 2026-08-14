"use client";

import { motion } from "framer-motion";
import { DeckHeroBrand } from "@/components/deck/DeckHeroBrand";
import { ASSETS } from "@/lib/assets";

type DeckLoadingScreenProps = {
  variant?: "motheo" | "enhancesoft";
  className?: string;
};

export function DeckLoadingScreen({
  variant = "motheo",
  className = "fixed inset-0 z-[80]",
}: DeckLoadingScreenProps) {
  return (
    <div
      className={`flex items-center justify-center bg-[color:var(--ibd-gray)] ${className}`.trim()}
    >
      <div
        className={`flex flex-col items-center px-6 text-center ${
          variant === "enhancesoft" ? "es-loading" : "gap-8"
        }`}
      >
        {variant === "enhancesoft" ? (
          <>
            <motion.div
              className="es-loading-lockup"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={ASSETS.brands.enhancesoftLogo}
                alt=""
                width={72}
                height={72}
                aria-hidden
                className="es-loading-lockup__mark"
              />
              <img
                src={ASSETS.brands.enhancesoftWordmark}
                alt="Enhancesoft"
                width={300}
                height={62}
                className="es-loading-lockup__wordmark"
              />
            </motion.div>
            <motion.p
              className="es-loading-lockup__label font-medium text-deck-accent uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              Technical & Financial Proposal
            </motion.p>
          </>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <DeckHeroBrand size="large" variant="motheo" className="justify-center" />
            </motion.div>
            <motion.p
              className="max-w-[520px] text-[26px] font-medium tracking-tight text-[color:var(--gms-text-muted)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              Barloworld Equipment Lesotho — Enterprise Compliance Gateway
            </motion.p>
          </>
        )}
      </div>
    </div>
  );
}
