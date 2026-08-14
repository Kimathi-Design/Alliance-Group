import type { Metadata } from "next";
import { ASSETS } from "@/lib/assets";

export const metadata: Metadata = {
  icons: {
    icon: ASSETS.brands.evolveLinkFavicon,
    shortcut: ASSETS.brands.evolveLinkFavicon,
    apple: ASSETS.brands.evolveLinkFavicon,
  },
};

export default function EnhancesoftLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
