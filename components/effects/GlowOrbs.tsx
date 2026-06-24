import { cn } from "@/lib/utils";

export function GlowOrbs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <div className="absolute -top-32 -left-32 h-[460px] w-[460px] rounded-full bg-[#34216B]/12 blur-[120px]" />
      <div className="absolute top-1/3 -right-20 h-[380px] w-[380px] rounded-full bg-[#F41C28]/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-[#34216B]/8 blur-[140px]" />
    </div>
  );
}
