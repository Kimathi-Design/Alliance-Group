import { createElement, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertCircle,
  Award,
  BadgeCheck,
  Banknote,
  BarChart3,
  BookOpen,
  Building,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Cloud,
  Compass,
  Database,
  Eye,
  FileBadge,
  FileCode,
  FileSearch,
  FileSignature,
  FileText,
  Flag,
  FlaskConical,
  FolderOpen,
  Globe,
  Hammer,
  Handshake,
  Headphones,
  Layers,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  Maximize2,
  Network,
  PenLine,
  Plug,
  QrCode,
  RefreshCw,
  Rocket,
  Scale,
  Search,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export function deckIcon(Icon: LucideIcon, size: "sm" | "md" | "hero" | "lg" = "sm"): ReactNode {
  const config =
    size === "lg"
      ? { className: "h-12 w-12", strokeWidth: 1.2 }
      : size === "hero"
        ? { className: "h-10 w-10", strokeWidth: 2 }
        : size === "md"
          ? { className: "h-7 w-7", strokeWidth: 2 }
          : { className: "h-5 w-5", strokeWidth: 2 };

  return createElement(Icon, {
    ...config,
    "aria-hidden": true,
  });
}

export function DeckIconTile({
  icon: Icon,
  size = "sm",
  className = "",
}: {
  icon: LucideIcon;
  size?: "sm" | "hero";
  className?: string;
}) {
  const tileSize = size === "hero" ? "h-20 w-20" : "h-10 w-10";

  return (
    <div
      className={`inline-flex ${tileSize} items-center justify-center rounded-xl border border-[color:var(--gms-border)] bg-[color:var(--ibd-gray)] text-deck-accent ${className}`.trim()}
    >
      {deckIcon(Icon, size === "hero" ? "hero" : "sm")}
    </div>
  );
}

export function mapDeckIcons<T extends object>(
  items: T[],
  icons: readonly LucideIcon[],
  size: "sm" | "md" | "hero" | "lg" = "sm",
) {
  return items.map((item, index) => ({
    ...item,
    icon: deckIcon(icons[index], size),
  }));
}

export const DATA_FLOW_STEP_ICONS = [
  Database,
  Layers,
  ShieldCheck,
  Scale,
  QrCode,
  Globe,
  CheckCircle2,
  ClipboardCheck,
] as const;

export const TRANSACTION_LIFECYCLE_ICONS = [
  Database,
  ShieldCheck,
  Scale,
  QrCode,
  Globe,
  CheckCircle2,
  FolderOpen,
  BarChart3,
] as const;

export const INVOICE_PROCESS_ICONS = [
  FileText,
  ShieldCheck,
  Scale,
  QrCode,
  Globe,
  CheckCircle2,
  FolderOpen,
] as const;

export const CREDIT_NOTE_STEP_ICONS = [
  FileText,
  Search,
  ShieldCheck,
  Globe,
  CheckCircle2,
  FolderOpen,
] as const;

export const DEBIT_NOTE_STEP_ICONS = [
  FileText,
  ShieldCheck,
  Globe,
  CheckCircle2,
  FolderOpen,
] as const;

export const EXECUTIVE_SUMMARY_OUTCOME_ICONS = [
  Shield,
  Workflow,
  BarChart3,
  ClipboardCheck,
  Target,
  Network,
] as const;

export const EXECUTIVE_BENEFIT_ICONS = [
  Shield,
  Workflow,
  FileSearch,
  Sparkles,
  TrendingUp,
] as const;

export const DHL_SUCCESS_FACTOR_ICONS = [
  BadgeCheck,
  Activity,
  Lock,
  Eye,
] as const;

export const CORE_SERVICE_AREA_ICONS = [
  Building2,
  Plug,
  ShieldCheck,
  Headphones,
  Lightbulb,
  BookOpen,
] as const;

export const RSL_DHL_BENEFIT_ICONS = [
  ShieldCheck,
  FileBadge,
  Scale,
  MapPin,
  Award,
  RefreshCw,
] as const;

export const IMPLEMENTATION_EXPERIENCE_ICONS = [
  Database,
  ClipboardCheck,
  Zap,
  Cloud,
] as const;

export const EXPERIENCE_AREA_ICONS = [
  Network,
  Workflow,
  RefreshCw,
  TrendingUp,
  Server,
  ClipboardCheck,
] as const;

export const DELIVERY_PHILOSOPHY_ICONS = [
  Lightbulb,
  CheckCircle2,
  Shield,
  Flag,
] as const;

export const SOLUTION_COMPONENT_ICONS = [
  Server,
  Layers,
  Workflow,
  Building,
] as const;

export const SAP_ARCHITECTURE_PANEL_ICONS = [
  BarChart3,
  FileSearch,
  AlertCircle,
  Target,
] as const;

export const MOTHEO_COMPONENT_ICONS = [
  CheckCircle2,
  Scale,
  QrCode,
  ClipboardCheck,
  Eye,
  RefreshCw,
  Globe,
  AlertCircle,
] as const;

export const TRANSACTION_TYPE_ICONS = [
  FileText,
  FileBadge,
  PenLine,
  Activity,
  AlertCircle,
  FileSearch,
] as const;

export const DESIGN_PRINCIPLE_ICONS = [
  Lock,
  CheckCircle2,
  Maximize2,
  Eye,
  RefreshCw,
  Plug,
] as const;

export const QR_CODE_BENEFIT_ICONS = [
  Shield,
  QrCode,
  Zap,
  ClipboardCheck,
  BadgeCheck,
  Lock,
] as const;

export const DASHBOARD_FEATURE_ICONS = [
  Activity,
  Eye,
  AlertCircle,
  FileSearch,
  BarChart3,
  TrendingUp,
  Users,
  Clock,
] as const;

export const SECURITY_OBJECTIVE_ICONS = [
  Lock,
  CheckCircle2,
  Cloud,
  Users,
] as const;

export const RESILIENCE_FEATURE_ICONS = [
  RefreshCw,
  Activity,
  AlertCircle,
  Database,
  Rocket,
] as const;

export const BUSINESS_CONTINUITY_FLOW_ICONS = [
  AlertCircle,
  RefreshCw,
  Rocket,
  CheckCircle2,
  FolderOpen,
] as const;

export const SOLUTION_ARCHITECTURE_FLOW_ICONS = [
  Users,
  Database,
  Layers,
  Workflow,
  QrCode,
  Building2,
] as const;

export const GOVERNANCE_OBJECTIVE_ICONS = [
  Target,
  Shield,
  Scale,
  Users,
  Award,
] as const;

export const GOVERNANCE_STRUCTURE_ICONS = [
  Building2,
  Flag,
  ClipboardCheck,
  Server,
  ShieldCheck,
  Handshake,
] as const;

export const IMPLEMENTATION_STREAM_ICONS = [
  Users,
  Network,
  Shield,
  BookOpen,
] as const;

export const TRAINING_AUDIENCE_ICONS = [
  FileText,
  Shield,
  Server,
  BarChart3,
] as const;

export const SUPPORT_SERVICE_ICONS = [
  Headphones,
  Eye,
  Server,
  RefreshCw,
  TrendingUp,
] as const;

export const CODE_OF_CONDUCT_ICONS = [
  Scale,
  Users,
  Handshake,
  ShieldCheck,
] as const;

export const WHY_INFINITY_VALUE_ICONS = [
  BadgeCheck,
  Plug,
  MapPin,
  Workflow,
  Headphones,
  Award,
] as const;

export const CONCLUSION_BENEFIT_ICONS = [
  Zap,
  Network,
  Eye,
  ClipboardCheck,
  Sparkles,
] as const;

export const WHY_INFINITY_CARD_ICONS = [
  BadgeCheck,
  Plug,
  MapPin,
  Sparkles,
  Handshake,
] as const;

export const SUPPLIER_RESPONSE_ICONS = [
  ShieldCheck,
  Award,
  Plug,
  Clock,
  Headphones,
  RefreshCw,
] as const;

export const IMPLEMENTATION_PHASE_ICONS = [
  Search,
  Compass,
  Hammer,
  FlaskConical,
  Rocket,
] as const;

export const DHL_STANDARDS_CARD_ICONS = [
  FileText,
  Handshake,
  Lock,
  PenLine,
] as const;

export const APPENDIX_ICONS = [
  Award,
  BookOpen,
  Scale,
  Building,
  Banknote,
  FileText,
  Handshake,
  Shield,
  FileSignature,
] as const;
