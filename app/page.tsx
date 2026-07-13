import type { Metadata } from "next";
import { DeckPageClient } from "@/components/deck/DeckPageClient";

export const metadata: Metadata = {
  title: "Enterprise Tax Compliance Transformation — Alliance Group",
  description:
    "Infinity Business Dynamics proposal for a Group-wide Revenue Services Lesotho Electronic Billing Solution for Alliance Group Investment Holding Company Ltd.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
};

export default function HomePage() {
  return <DeckPageClient />;
}
