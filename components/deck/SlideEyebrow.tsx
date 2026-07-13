"use client";

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertCircle,
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
  Cloud,
  Compass,
  FileCheck,
  FileSignature,
  FileText,
  Flag,
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
  PenLine,
  Route,
  Scale,
  Search,
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
import { AllianceMark, IbdMark } from "@/components/deck/IbdMark";
import { slideTitles, getTocSectionNumber } from "@/lib/deck-content";

const SLIDE_ICONS: LucideIcon[] = [
  Package, Mail, LayoutList, FileText, Target, Building2, ClipboardCheck, Scale,
  GitBranch, Layers, Briefcase, Award, BadgeCheck, BookOpen, Users, Network,
  Server, Workflow, Cloud, Receipt, ShieldCheck, RefreshCw, PenLine, QrCode,
  BarChart3, Lock, ClipboardList, Sparkles, Route, Timer, GraduationCap, Calendar,
  FileCheck, Headphones, Banknote, LineChart, Handshake, Shield, Wrench, Search,
  Flag, Activity, FileSignature, Compass, AlertCircle, Timer, Workflow, GraduationCap,
  Mail, Target, Layers, Award,
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
export function SlideEyebrow({
  index,
  sectionNumber,
}: {
  index: number;
  /** Override TOC numbering, e.g. "32.5" for appendix sub-sections */
  sectionNumber?: string;
}) {
  const Icon = SLIDE_ICONS[index] ?? Sparkles;
  const label = slideTitles[index] ?? "Proposal";
  const tocSection =
    sectionNumber ??
    (getTocSectionNumber(index) !== null
      ? String(getTocSectionNumber(index)).padStart(2, "0")
      : null);
  const prefix = tocSection ? `${tocSection} · ` : "";

  return (
    <DeckEyebrow icon={<Icon aria-hidden />}>
      {prefix}
      {label}
    </DeckEyebrow>
  );
}

/** Slide header brand — Alliance + IBD */
export function DeckHeaderBrand() {
  return (
    <div className="gms-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase backdrop-blur">
      <AllianceMark />
      <span>Alliance Group | Infinity Business Dynamics</span>
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