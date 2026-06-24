"use client";

import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Banknote,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  ClipboardCheck,
  ClipboardList,
  FileCheck,
  FileSignature,
  FileText,
  GitBranch,
  GraduationCap,
  Handshake,
  Headphones,
  Layers,
  LayoutList,
  LineChart,
  Lock,
  Mail,
  Network,
  Package,
  QrCode,
  Receipt,
  RefreshCw,
  Route,
  Scale,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";
import { DhlMark, IbdMark } from "@/components/deck/IbdMark";
import { slideTitles, getTocSectionNumber } from "@/lib/deck-content";

const SLIDE_ICONS: LucideIcon[] = [
  Package, // 0 Cover
  Mail, // 1 Executive Letter
  LayoutList, // 2 Table of Contents
  FileText, // 3 Executive Summary
  Target, // 4 Executive Benefits
  ClipboardCheck, // 5 DHL Requirements
  Building2, // 6 About IBD
  Award, // 7 Why IBD
  BadgeCheck, // 8 RSL Accreditation
  Users, // 9 Project Team
  Briefcase, // 10 Relevant Experience
  Layers, // 11 Solution Overview
  Network, // 12 Enterprise Architecture
  GitBranch, // 13 SAP Integration Approach
  Server, // 14 SAP Integration Architecture
  Workflow, // 15 Motheo Layer
  Route, // 16 Data Flow
  Wrench, // 17 Technical Framework
  RefreshCw, // 18 End-to-End Workflow
  Receipt, // 19 Invoice Workflow
  FileCheck, // 20 Credit & Debit Notes
  QrCode, // 21 QR Code
  BarChart3, // 22 Compliance Monitoring
  Shield, // 23 Security
  ShieldCheck, // 24 Business Continuity
  Scale, // 25 Governance
  Sparkles, // 26 Methodology
  GitBranch, // 27 Implementation Plan
  Calendar, // 28 Timeline
  GraduationCap, // 29 Training
  Headphones, // 30 Support
  Timer, // 31 SLA
  Banknote, // 32 Commercial
  LineChart, // 33 Annual Subscription
  Lock, // 34 Risk Management
  ClipboardList, // 35 Supplier Responses
  FileSignature, // 36 DHL Acceptance
  Award, // 37 Why Choose Infinity
  Sparkles, // 38 Conclusion
  FileSignature, // 39 Proposal Acceptance
  Banknote, // 40 Banking
  BookOpen, // 41 Appendices
  FileText, // 42 Appendix A
  BookOpen, // 43 Appendix B
  Scale, // 44 Appendix C
  Building2, // 45 Appendix D
  Banknote, // 46 Appendix E
  FileText, // 47 Appendix F
  Handshake, // 48 Appendix G
  Shield, // 49 Appendix H
  FileSignature, // 50 Appendix I
];

type SectionBadgeProps = {
  index: number;
  className?: string;
};

export function DeckEyebrow({
  children,
  icon,
}: {
  children: ReactNode;
  icon: ReactNode;
}) {
  return (
    <div className="deck-title-pill gms-eyebrow inline-flex items-center rounded-full uppercase">
      <span className="deck-title-pill__icon">{icon}</span>
      <span className="deck-title-pill__label font-semibold">{children}</span>
    </div>
  );
}

export function SectionBadge({ index, className = "" }: SectionBadgeProps) {
  const Icon = SLIDE_ICONS[index] ?? Sparkles;
  const label = slideTitles[index] ?? "Proposal";

  return (
    <div
      className={`gms-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase ${className}`.trim()}
    >
      <span className="[&>svg]:h-3.5 [&>svg]:w-3.5">
        <Icon className="h-3.5 w-3.5" aria-hidden />
      </span>
      <span>{label}</span>
    </div>
  );
}

/** Top-of-slide section label — always includes icon + title from slide metadata */
export function SlideEyebrow({ index }: { index: number }) {
  const Icon = SLIDE_ICONS[index] ?? Sparkles;
  const label = slideTitles[index] ?? "Proposal";
  const tocSection = getTocSectionNumber(index);
  const prefix = tocSection ? `${String(tocSection).padStart(2, "0")} · ` : "";

  return (
    <DeckEyebrow icon={<Icon aria-hidden />}>
      {prefix}
      {label}
    </DeckEyebrow>
  );
}

/** Slide header brand — DHL Lesotho + IBD on every slide */
export function DeckHeaderBrand() {
  return (
    <div className="gms-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase backdrop-blur">
      <DhlMark size="sm" />
      <span>DHL Express LS | Infinity Business Dynamics</span>
      <IbdMark size="sm" />
    </div>
  );
}

/** @deprecated Use DeckHeaderBrand */
export function CoverSlideHeaderBadge() {
  return <DeckHeaderBrand />;
}

/** Bottom-right certification label — same on every slide */
export function SlideSectionCorner() {
  return (
    <div className="deck-corner-badge gms-eyebrow inline-flex items-center rounded-full uppercase">
      <Shield className="deck-corner-badge__icon" aria-hidden />
      <span className="deck-corner-badge__label font-semibold">RSL Certified | Lekuka Partner</span>
    </div>
  );
}
