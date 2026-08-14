import type { Metadata } from "next";
import { EnhancesoftPrintView } from "@/enhancesoft/EnhancesoftPrintView";

export const metadata: Metadata = {
  title: "Print — Enhancesoft Proposal",
  robots: { index: false, follow: false },
};

export default function EnhancesoftPrintPage() {
  return <EnhancesoftPrintView />;
}
