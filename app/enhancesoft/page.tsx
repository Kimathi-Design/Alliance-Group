import type { Metadata } from "next";
import { ASSETS } from "@/lib/assets";
import { EnhancesoftPageClient } from "@/enhancesoft/EnhancesoftPageClient";

export const metadata: Metadata = {
  title: "Enhancesoft Proposal — Brian Kimathi",
  description:
    "Technical and Financial Proposal for Enhancesoft Website Design, Branding & Digital Experience consultancy.",
  robots: { index: false, follow: false },
  icons: {
    icon: ASSETS.brands.evolveLinkFavicon,
    shortcut: ASSETS.brands.evolveLinkFavicon,
    apple: ASSETS.brands.evolveLinkFavicon,
  },
};

export default function EnhancesoftProposalPage() {
  return <EnhancesoftPageClient />;
}
