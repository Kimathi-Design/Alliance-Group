import type { Metadata } from "next";
import { DeckPageClient } from "@/components/deck/DeckPageClient";

export const metadata: Metadata = {
  title: "Motheo Proposal — DHL Express Lesotho",
  description:
    "DHL Express Lesotho proposal for Motheo Compliance Platform SAP integration and Lekuka e-invoicing implementation by Infinity Business Dynamics.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
};

export default function HomePage() {
  return <DeckPageClient />;
}
