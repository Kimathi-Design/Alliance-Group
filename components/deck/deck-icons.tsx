import { createElement, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  Archive,
  Award,
  BadgeCheck,
  Banknote,
  BarChart3,
  BookOpen,
  Briefcase,
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
  FileCheck,
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
  Info,
  Layers,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  Maximize2,
  Network,
  Package,
  PenLine,
  Plug,
  QrCode,
  Receipt,
  RefreshCw,
  Rocket,
  Scale,
  Search,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export function deckIcon(
  Icon: LucideIcon,
  size: "xs" | "sm" | "md" | "hero" | "lg" = "sm",
): ReactNode {
  const config =
    size === "lg"
      ? { className: "h-12 w-12", strokeWidth: 1.2 }
      : size === "hero"
        ? { className: "h-10 w-10", strokeWidth: 2 }
        : size === "md"
          ? { className: "h-7 w-7", strokeWidth: 2 }
          : size === "xs"
            ? { className: "h-3.5 w-3.5", strokeWidth: 2 }
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
  size?: "sm" | "hero" | "compact";
  className?: string;
}) {
  const tileClass =
    size === "hero"
      ? "deck-flow-step-card__tile deck-flow-step-card__tile--hero"
      : size === "compact"
        ? "deck-flow-step-card__tile deck-flow-step-card__tile--compact"
        : "deck-flow-step-card__tile deck-flow-step-card__tile--default";

  return (
    <div className={`${tileClass} ${className}`.trim()}>
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
    icon: deckIcon(icons[index] ?? icons[icons.length - 1]!, size),
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

export const STRATEGIC_OUTCOME_ICONS = [
  Shield,
  Workflow,
  BarChart3,
  ClipboardCheck,
  Network,
] as const;

export const TESTING_ACTIVITY_ICONS = [
  Hammer,
  Network,
  FileCheck,
  Activity,
  Shield,
  ClipboardCheck,
] as const;

export const TESTING_PYRAMID_ICONS = [
  ClipboardCheck,
  Activity,
  Network,
  Hammer,
] as const;

export const BUSINESS_CHALLENGE_ICONS = [
  Server,
  Network,
  FileBadge,
  Activity,
  Eye,
  RefreshCw,
] as const;

export const GATEWAY_CAPABILITY_ICONS = [
  Layers,
  Shield,
  Lock,
  Zap,
  ClipboardCheck,
  Scale,
] as const;

export const BWE_HUB_UNIT_ICONS = [
  BarChart3,
  RefreshCw,
  Package,
  Hammer,
  MapPin,
  Banknote,
  Users,
] as const;

export const EXECUTIVE_SUMMARY_TRANSFORMATION_ICONS = [
  Building2,
  Database,
  ShieldCheck,
  Scale,
  Rocket,
] as const;

export const EXECUTIVE_SUMMARY_CURRENT_ICONS = [
  Database,
  Users,
  PenLine,
] as const;

export const EXECUTIVE_SUMMARY_FUTURE_ICONS = [
  ShieldCheck,
  Scale,
  Globe,
  Rocket,
] as const;

export const SOLUTION_OVERVIEW_FLOW_ICONS = [
  Users,
  Handshake,
  Network,
  Scale,
  Building2,
] as const;

export const SOLUTION_ECOSYSTEM_SIDE_ICONS = [
  Shield,
  Activity,
  FileSearch,
  BarChart3,
  TrendingUp,
] as const;

export const API_GATEWAY_FLOW_ICONS = [
  Server,
  Network,
  ShieldCheck,
  Workflow,
  Scale,
  Building2,
] as const;

export const CRM_FLOW_ICONS = [
  Handshake,
  Network,
  Database,
  Scale,
  Building2,
] as const;

export const SOLUTION_ECOSYSTEM_STEP_ICONS = [
  Users,
  Database,
  Handshake,
  Network,
  Scale,
  Building2,
] as const;

export const RSL_ACCREDITATION_FLOW_ICONS = [
  Users,
  Database,
  Network,
  Scale,
  Building2,
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

export const BWE_SUCCESS_FACTOR_ICONS = [
  BadgeCheck,
  Activity,
  Lock,
  Eye,
] as const;

/** @deprecated Use BWE_SUCCESS_FACTOR_ICONS */
export const DHL_SUCCESS_FACTOR_ICONS = BWE_SUCCESS_FACTOR_ICONS;

export const CORE_SERVICE_AREA_ICONS = [
  Building2,
  Plug,
  ShieldCheck,
  Network,
  Cloud,
  Headphones,
  Lightbulb,
] as const;

export const RSL_BWE_BENEFIT_ICONS = [
  ShieldCheck,
  FileBadge,
  Scale,
  MapPin,
  Award,
  RefreshCw,
] as const;

/** @deprecated Use RSL_BWE_BENEFIT_ICONS */
export const RSL_DHL_BENEFIT_ICONS = RSL_BWE_BENEFIT_ICONS;

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

export const ARCHITECTURE_LAYER_ICONS = [
  Users,
  Layers,
  Network,
  ShieldCheck,
  Building2,
] as const;

export const SOLUTION_COMPONENT_ICONS = [
  Server,
  Users,
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

export const SAP_INTEGRATION_FLOW_ICONS = [
  BarChart3,
  Package,
  Users,
  Banknote,
  Plug,
  Network,
  Scale,
  Building2,
] as const;

export const SAP_INTEGRATION_SIDE_ICONS = [
  Activity,
  FileSearch,
  RefreshCw,
  Mail,
] as const;

export const MOTHEO_RADIAL_NODE_ICONS = [
  CheckCircle2,
  Scale,
  QrCode,
  ClipboardCheck,
  Eye,
  Activity,
  RefreshCw,
  Network,
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

export const ONLINE_PROCESSING_ICONS = [
  CheckCircle2,
  Zap,
  BadgeCheck,
  Activity,
] as const;

export const OFFLINE_PROCESSING_ICONS = [
  Lock,
  RefreshCw,
  Eye,
  Scale,
] as const;

export const RECOVERY_WORKFLOW_ICONS = [
  AlertCircle,
  Eye,
  RefreshCw,
  ShieldCheck,
  Network,
  FileSearch,
] as const;

export const CERTIFICATE_LIFECYCLE_ICONS = [
  FileSignature,
  ClipboardCheck,
  ShieldCheck,
  Award,
  Server,
  RefreshCw,
  FileBadge,
  AlertCircle,
] as const;

export const TRANSACTION_WORKFLOW_ICONS = [
  PenLine,
  CheckCircle2,
  Workflow,
  Scale,
  QrCode,
  Network,
  FileCheck,
  FolderOpen,
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

export const QR_CALLOUT_ICONS = [
  FileText,
  BadgeCheck,
  Globe,
  QrCode,
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

export const DASHBOARD_MODULE_ICONS = [
  BarChart3,
  CheckCircle2,
  Clock,
  AlertCircle,
  Activity,
  TrendingUp,
  ShieldCheck,
  BadgeCheck,
] as const;

export const AVAILABLE_REPORT_ICONS = [
  FileText,
  ClipboardCheck,
  TrendingUp,
  AlertCircle,
  FileSearch,
  FileBadge,
  Activity,
] as const;

export const SECURITY_OBJECTIVE_ICONS = [
  Lock,
  CheckCircle2,
  Cloud,
  Users,
] as const;

export const SECURITY_FLOW_ICONS = [
  Users,
  ShieldCheck,
  Network,
  Shield,
  Lock,
  Globe,
] as const;

export const SECURITY_BADGE_ICONS = [
  Lock,
  FileBadge,
  Users,
  Lock,
  FileSearch,
  Activity,
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
  Flag,
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

export const LEARNING_JOURNEY_ICONS = [
  Lightbulb,
  BookOpen,
  Hammer,
  BadgeCheck,
  Sparkles,
] as const;

export const SUPPORT_LIFECYCLE_ICONS = [
  Eye,
  Headphones,
  TrendingUp,
  RefreshCw,
  ShieldCheck,
] as const;

export const ESCALATION_LEVEL_ICONS = [
  Headphones,
  Server,
  ShieldCheck,
  Users,
  Building2,
] as const;

export const SLA_PRIORITY_ICONS = [
  AlertCircle,
  AlertTriangle,
  Clock,
  Info,
] as const;

export const RISK_TREATMENT_ICONS = [
  Search,
  ClipboardCheck,
  ShieldCheck,
  Activity,
  CheckCircle2,
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
  Server,
  RefreshCw,
] as const;

export const SUPPLIER_RESPONSE_ICONS = [
  ShieldCheck,
  Server,
  Users,
  Globe,
  Plug,
  FileBadge,
  QrCode,
  Headphones,
  BookOpen,
  RefreshCw,
] as const;

export const IMPLEMENTATION_PHASE_ICONS = [
  Search,
  Compass,
  Hammer,
  FlaskConical,
  Rocket,
] as const;

export const WORKSTREAM_ICONS = [
  Users,
  Server,
  ShieldCheck,
  BookOpen,
] as const;

export const PROJECT_TEAM_ICONS = [
  Award,
  Target,
  Layers,
  Database,
  Network,
  Scale,
  FlaskConical,
  BookOpen,
  Headphones,
] as const;

export const GANTT_PHASE_ICONS = [
  Flag,
  Search,
  Compass,
  Hammer,
  Network,
  ClipboardCheck,
  BookOpen,
  Rocket,
  Headphones,
] as const;

export const ALLIANCE_STRATEGIC_ICONS = [
  Shield,
  Banknote,
  BarChart3,
  Workflow,
  Rocket,
] as const;

export const ALLIANCE_ENTITY_ICONS = [
  Building2,
  Users,
  Cloud,
  Briefcase,
] as const;

export const ALLIANCE_OPTION_ICONS = [
  Server,
  Network,
  Users,
  FileBadge,
  TrendingUp,
  RefreshCw,
] as const;

export const ALLIANCE_HUB_ICONS = [
  Layers,
  ShieldCheck,
  BarChart3,
  Network,
  ClipboardCheck,
  Sparkles,
  Scale,
  Globe,
] as const;

export const ALLIANCE_CREDENTIAL_ICONS = [
  FileBadge,
  Scale,
  MapPin,
  Building2,
  BadgeCheck,
  Globe,
] as const;

export const ALLIANCE_WHY_ICONS = [
  BadgeCheck,
  Plug,
  Layers,
  Award,
] as const;

export const ALLIANCE_EXPERIENCE_ICONS = [
  Network,
  Building2,
  Cloud,
  Workflow,
  PenLine,
  Headphones,
] as const;

export const ALLIANCE_TEAM_ICONS = [
  Layers,
  ShieldCheck,
  Network,
  Target,
] as const;

export const ALLIANCE_OUTCOME_ICONS = [
  Layers,
  ShieldCheck,
  Plug,
  BarChart3,
  Server,
  Network,
] as const;

export const ALLIANCE_PORTAL_ICONS = [
  Users,
  FileText,
  ShieldCheck,
  PenLine,
  BarChart3,
  Lock,
] as const;

export const ALLIANCE_TIN_ICONS = [
  Users,
  PenLine,
  ShieldCheck,
  Globe,
  CheckCircle2,
  AlertCircle,
] as const;

export const ALLIANCE_LIFECYCLE_ICONS = [
  PenLine,
  ShieldCheck,
  Scale,
  QrCode,
  Globe,
  CheckCircle2,
  FolderOpen,
  ClipboardCheck,
  FileCheck,
  Archive,
] as const;

export const ALLIANCE_CREDIT_ICONS = [
  Search,
  FileBadge,
  ShieldCheck,
  QrCode,
  Globe,
  CheckCircle2,
  FolderOpen,
  ClipboardCheck,
] as const;

export const ALLIANCE_DEBIT_ICONS = [
  FileText,
  PenLine,
  ShieldCheck,
  QrCode,
  Globe,
  CheckCircle2,
  FolderOpen,
  ClipboardCheck,
] as const;

export const ALLIANCE_QR_ICONS = [
  FileText,
  BadgeCheck,
  Users,
  Clock,
  Globe,
  FileSignature,
] as const;

export const ALLIANCE_DASHBOARD_ICONS = [
  BarChart3,
  CheckCircle2,
  AlertCircle,
  Clock,
  Activity,
  TrendingUp,
  ShieldCheck,
  Server,
  Users,
] as const;

export const ALLIANCE_USER_ICONS = [
  Award,
  Building2,
  FileText,
  Receipt,
  ShieldCheck,
  Eye,
] as const;

export const ALLIANCE_AUDIT_ICONS = [
  Users,
  FileText,
  ClipboardCheck,
  ShieldCheck,
  QrCode,
  Globe,
  Settings,
  Lock,
] as const;

export const ALLIANCE_ROLLOUT_ICONS = [
  Server,
  Building2,
  Users,
  Cloud,
  Briefcase,
  BarChart3,
] as const;

export const ALLIANCE_COMMERCIAL_ICONS = [
  Layers,
  Banknote,
  Target,
  Rocket,
  Handshake,
] as const;

export const ALLIANCE_LICENCE_ICONS = [
  Layers,
  Scale,
  Users,
  BarChart3,
  QrCode,
  Globe,
  Network,
  ClipboardCheck,
] as const;

export const ALLIANCE_TCO_ICONS = [
  Banknote,
  Users,
  BarChart3,
  Rocket,
  TrendingUp,
] as const;

export const ALLIANCE_ROI_ICONS = [
  Workflow,
  BarChart3,
  Shield,
  ClipboardCheck,
  Eye,
  Rocket,
] as const;

export const ALLIANCE_CONCLUSION_ICONS = [
  Shield,
  Workflow,
  ShieldCheck,
  Banknote,
  Eye,
  Scale,
  Rocket,
  Handshake,
] as const;

export const APPENDIX_ICONS = [
  Award,
  BookOpen,
  Scale,
  Building,
  Banknote,
  FileText,
  BookOpen,
  Handshake,
  ClipboardCheck,
  PenLine,
  Lock,
  FileSignature,
] as const;
