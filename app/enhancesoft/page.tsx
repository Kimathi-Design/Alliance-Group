import type { Metadata } from "next";
import { EnhancesoftPageClient } from "@/enhancesoft/EnhancesoftPageClient";

export const metadata: Metadata = {
  title: "Enhancesoft Proposal — Brian Kimathi",
  description:
    "Technical and Financial Proposal for Enhancesoft Website Design, Branding & Digital Experience consultancy.",
  robots: { index: false, follow: false },
};

export default function EnhancesoftProposalPage() {
  return <EnhancesoftPageClient />;
}
