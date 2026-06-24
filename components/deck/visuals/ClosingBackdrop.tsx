"use client";

import type { ReactNode } from "react";

export function ClosingBackdrop({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-full min-h-0 flex-col items-center justify-center overflow-hidden rounded-3xl bg-[color:var(--ibd-gray)] text-center">
      <div className="relative z-10 flex min-h-0 w-full max-h-full flex-col items-center justify-center overflow-hidden">
        {children}
      </div>
    </div>
  );
}
