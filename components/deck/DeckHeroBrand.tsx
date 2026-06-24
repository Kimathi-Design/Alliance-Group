type DeckHeroBrandProps = {
  size?: "default" | "large";
  className?: string;
  variant?: "motheo" | "ibd";
};

export function DeckHeroBrand({
  size = "default",
  className = "",
  variant = "motheo",
}: DeckHeroBrandProps) {
  const titleSize = size === "large" ? "text-[52px]" : "text-[44px]";
  const subtitleSize = size === "large" ? "text-[22px]" : "text-[18px]";

  if (variant === "ibd") {
    return (
      <div className={`space-y-2 ${className}`.trim()}>
        <p className={`font-semibold tracking-tight gradient-text-ibd ${titleSize}`}>
          INFINITY BUSINESS DYNAMICS
        </p>
        <p className={`text-[color:var(--gms-text-muted)] ${subtitleSize}`}>
          Harnessing the Power of Technology
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`.trim()}>
      <p className={`font-semibold tracking-tight gradient-text-ibd ${titleSize}`}>
        MOTHEO COMPLIANCE PLATFORM
      </p>
      <p className={`font-medium text-[color:var(--gms-text-muted)] ${subtitleSize}`}>
        SAP Integration &amp; Lekuka e-Invoicing Implementation
      </p>
    </div>
  );
}
