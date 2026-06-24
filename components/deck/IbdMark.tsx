import Image from "next/image";
import { ASSETS } from "@/lib/assets";

type IbdMarkProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const SIZES = {
  sm: { px: 16, className: "h-4 w-4" },
  md: { px: 20, className: "h-5 w-5" },
  lg: { px: 28, className: "h-7 w-7" },
} as const;

/** DHL mark — public/dhl-favicon.png */
export function DhlMark({ size = "sm", className = "" }: IbdMarkProps) {
  const { px, className: sizeClass } = SIZES[size];

  return (
    <Image
      src={ASSETS.brands.dhlFavicon}
      alt=""
      width={px}
      height={px}
      aria-hidden
      className={`shrink-0 object-contain ${sizeClass} ${className}`.trim()}
    />
  );
}

/** IBD mark — public/favicon-ibd.png */
export function IbdMark({ size = "sm", className = "" }: IbdMarkProps) {
  const { px, className: sizeClass } = SIZES[size];

  return (
    <Image
      src={ASSETS.brands.ibdFavicon}
      alt=""
      width={px}
      height={px}
      aria-hidden
      className={`shrink-0 object-contain ${sizeClass} ${className}`.trim()}
    />
  );
}

/** Motheo mark — public/motheo-logo.png */
export function MotheoMark({ size = "sm", className = "" }: IbdMarkProps) {
  const heights = {
    sm: "h-3.5",
    md: "h-4",
    lg: "h-5",
  } as const;

  return (
    <Image
      src={ASSETS.brands.motheoLogo}
      alt=""
      width={3770}
      height={3290}
      aria-hidden
      className={`w-auto shrink-0 object-contain ${heights[size]} ${className}`.trim()}
    />
  );
}

/** Horizontal IBD wordmark for slide footers */
export function IbdFooterLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={ASSETS.brands.ibdLogo}
      alt="Infinity Business Dynamics"
      width={2560}
      height={424}
      className={`h-8 w-auto shrink-0 object-contain object-left ${className}`.trim()}
    />
  );
}

function usesFooterFavicon(index: number, slideCount: number) {
  return index === 0 || index === slideCount - 1;
}

function showFooterBrand(index: number) {
  return index !== 1;
}

export function DeckFooterBrand({
  index,
  slideCount,
}: {
  index: number;
  slideCount: number;
}) {
  if (!showFooterBrand(index)) return null;
  if (usesFooterFavicon(index, slideCount)) {
    return <IbdMark size="lg" />;
  }
  return <IbdFooterLogo />;
}
