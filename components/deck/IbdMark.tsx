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

/** BWE mark — public/images/brands/bwe-logo.png */
export function BweMark({ size = "sm", className = "" }: IbdMarkProps) {
  const heights = {
    sm: "h-3.5",
    md: "h-4",
    lg: "h-5",
  } as const;

  return (
    <Image
      src={ASSETS.brands.bweLogo}
      alt=""
      width={1799}
      height={483}
      aria-hidden
      className={`w-auto shrink-0 object-contain ${heights[size]} ${className}`.trim()}
    />
  );
}

/** @deprecated Use BweMark */
export function DhlMark(props: IbdMarkProps) {
  return <BweMark {...props} />;
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
    sm: "h-5",
    md: "h-6",
    lg: "h-7",
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

/** Alliance Group mark for slide headers */
export function AllianceMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src={ASSETS.brands.allianceLogo}
      alt=""
      width={1200}
      height={400}
      aria-hidden
      className={`h-4 w-auto shrink-0 object-contain ${className}`.trim()}
    />
  );
}

/** Alliance Group wordmark for cover footer */
export function AllianceFooterLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={ASSETS.brands.allianceLogo}
      alt="Alliance Group"
      width={1200}
      height={400}
      className={`h-8 w-auto shrink-0 object-contain object-left ${className}`.trim()}
    />
  );
}

/** Horizontal BWE wordmark for cover footer */
export function BweFooterLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={ASSETS.brands.bweLogo}
      alt="Barloworld Equipment"
      width={1799}
      height={483}
      className={`h-8 w-auto shrink-0 object-contain object-left ${className}`.trim()}
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

function usesFooterFavicon(index: number) {
  return index === 0;
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
  if (usesFooterFavicon(index)) {
    return <IbdMark size="lg" />;
  }
  return <IbdFooterLogo />;
}
