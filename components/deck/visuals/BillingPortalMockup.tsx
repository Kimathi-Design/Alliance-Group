"use client";

import {
  Activity,
  Archive,
  BarChart3,
  Bell,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Download,
  Eye,
  FileMinus,
  FilePlus,
  FileText,
  Headphones,
  LayoutDashboard,
  Plug,
  QrCode,
  Search,
  Settings,
  UserPlus,
  Users,
} from "lucide-react";
import { deckIcon } from "@/components/deck/deck-icons";

const SIDEBAR = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Customers", icon: Users },
  { label: "Invoices", icon: FileText },
  { label: "Credit Notes", icon: FileMinus },
  { label: "Debit Notes", icon: FilePlus },
  { label: "Reports", icon: BarChart3 },
  { label: "Audit Trail", icon: ClipboardList },
  { label: "Settings", icon: Settings },
  { label: "Users", icon: UserPlus },
  { label: "Integrations", icon: Plug },
  { label: "Support", icon: Headphones },
] as const;

const KPIS = [
  { label: "Total Invoices", value: "1,248", delta: "+12.5%", up: true, icon: FileText },
  { label: "Total Sales (M)", value: "3.46M", delta: "+8.7%", up: true, icon: BarChart3 },
  { label: "Compliant", value: "1,236", delta: "98.1%", up: true, icon: CheckCircle2 },
  { label: "Pending", value: "12", delta: "-4.0%", up: false, icon: Archive },
  { label: "Compliance Rate", value: "98.7%", delta: "+1.3%", up: true, icon: Activity },
] as const;

const INVOICE_ROWS = [
  { no: "INV-2024-1241", customer: "Alliance Properties", entity: "Properties", date: "28 May", amount: "45,200", status: "Compliant" as const },
  { no: "INV-2024-1242", customer: "Lehae Funeral Home", entity: "Lehae", date: "28 May", amount: "12,800", status: "Pending" as const },
  { no: "INV-2024-1243", customer: "Finclude Lesotho", entity: "Finclude", date: "29 May", amount: "28,450", status: "Compliant" as const },
  { no: "INV-2024-1244", customer: "AGIHC HQ", entity: "AGIHC", date: "29 May", amount: "9,600", status: "Compliant" as const },
  { no: "INV-2024-1245", customer: "Alliance Properties", entity: "Properties", date: "30 May", amount: "31,100", status: "Pending" as const },
  { no: "INV-2024-1246", customer: "Lehae Funeral Home", entity: "Lehae", date: "30 May", amount: "7,250", status: "Compliant" as const },
  { no: "INV-2024-1247", customer: "Finclude Lesotho", entity: "Finclude", date: "31 May", amount: "19,875", status: "Compliant" as const },
  { no: "INV-2024-1248", customer: "AGIHC HQ", entity: "AGIHC", date: "31 May", amount: "14,320", status: "Pending" as const },
  { no: "INV-2024-1249", customer: "Alliance Properties", entity: "Properties", date: "31 May", amount: "22,640", status: "Compliant" as const },
  { no: "INV-2024-1250", customer: "Lehae Funeral Home", entity: "Lehae", date: "31 May", amount: "5,980", status: "Compliant" as const },
  { no: "INV-2024-1251", customer: "Finclude Lesotho", entity: "Finclude", date: "31 May", amount: "16,410", status: "Pending" as const },
] as const;

const ACTIVITY = [
  { text: "INV-2024-1250 submitted to RSL", time: "2m ago", tone: "ok" as const },
  { text: "Credit note CN-118 approved", time: "18m ago", tone: "ok" as const },
  { text: "New user added — Billing Officer", time: "1h ago", tone: "info" as const },
  { text: "INV-2024-1242 pending validation", time: "2h ago", tone: "warn" as const },
  { text: "QR code generated for INV-2024-1249", time: "3h ago", tone: "ok" as const },
  { text: "Debit note DN-042 issued", time: "4h ago", tone: "info" as const },
  { text: "TIN validated for new customer", time: "5h ago", tone: "ok" as const },
] as const;

/** Page 21 visual — AGIHC billing portal dashboard mock-up */
export function BillingPortalMockup() {
  return (
    <div className="billing-portal-mockup">
      <aside className="billing-portal-mockup__sidebar">
        <p className="billing-portal-mockup__brand deck-type-card-title">AGIHC Portal</p>
        <nav className="billing-portal-mockup__nav" aria-label="Portal navigation">
          {SIDEBAR.map((item) => (
            <div
              key={item.label}
              className={`billing-portal-mockup__nav-item${
                item.label === "Dashboard" ? " billing-portal-mockup__nav-item--active" : ""
              }`}
            >
              <span className="billing-portal-mockup__nav-icon">{deckIcon(item.icon, "xs")}</span>
              <span className="billing-portal-mockup__nav-label">{item.label}</span>
            </div>
          ))}
        </nav>
        <div className="billing-portal-mockup__org">
          <span className="billing-portal-mockup__org-icon">{deckIcon(Building2, "xs")}</span>
          <span className="billing-portal-mockup__org-text">Alliance Group — Compliance Hub</span>
        </div>
      </aside>

      <div className="billing-portal-mockup__main">
        <header className="billing-portal-mockup__header">
          <div className="billing-portal-mockup__header-copy">
            <p className="billing-portal-mockup__header-title">Dashboard</p>
            <p className="billing-portal-mockup__header-sub">Welcome back, System Administrator.</p>
          </div>
          <div className="billing-portal-mockup__header-controls">
            <span className="billing-portal-mockup__chip">
              {deckIcon(CalendarDays, "xs")}
              01–31 May 2026
            </span>
            <span className="billing-portal-mockup__bell">
              {deckIcon(Bell, "xs")}
              <span className="billing-portal-mockup__bell-badge">8</span>
            </span>
            <span className="billing-portal-mockup__avatar">SA</span>
          </div>
        </header>

        <div className="billing-portal-mockup__kpis">
          {KPIS.map((kpi) => (
            <div key={kpi.label} className="billing-portal-mockup__kpi gms-card">
              <span className="billing-portal-mockup__kpi-icon">{deckIcon(kpi.icon, "sm")}</span>
              <div className="billing-portal-mockup__kpi-copy">
                <span className="billing-portal-mockup__kpi-label">{kpi.label}</span>
                <p className="billing-portal-mockup__kpi-value tabular-nums">{kpi.value}</p>
                <p
                  className={`billing-portal-mockup__kpi-delta${
                    kpi.up ? " billing-portal-mockup__kpi-delta--up" : " billing-portal-mockup__kpi-delta--down"
                  }`}
                >
                  {kpi.delta} vs Apr
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="billing-portal-mockup__panels">
          <div className="billing-portal-mockup__invoices gms-card">
            <div className="billing-portal-mockup__toolbar">
              <p className="billing-portal-mockup__panel-title">Invoices</p>
              <div className="billing-portal-mockup__toolbar-actions">
                <span className="billing-portal-mockup__search">
                  {deckIcon(Search, "xs")}
                  Search
                </span>
                <span className="billing-portal-mockup__filter">Status</span>
                <span className="billing-portal-mockup__filter">Entities</span>
                <span className="billing-portal-mockup__new">+ New Invoice</span>
              </div>
            </div>
            <div className="billing-portal-mockup__table">
              <div className="billing-portal-mockup__table-head">
                <span>Invoice No.</span>
                <span>Customer</span>
                <span>Entity</span>
                <span>Date</span>
                <span>Amount</span>
                <span>Status</span>
                <span>Actions</span>
              </div>
              {INVOICE_ROWS.map((row) => (
                <div key={row.no} className="billing-portal-mockup__table-row">
                  <span className="tabular-nums">{row.no}</span>
                  <span>{row.customer}</span>
                  <span>{row.entity}</span>
                  <span>{row.date}</span>
                  <span className="tabular-nums">{row.amount}</span>
                  <span
                    className={`billing-portal-mockup__status billing-portal-mockup__status--${
                      row.status === "Compliant" ? "ok" : "warn"
                    }`}
                  >
                    {row.status}
                  </span>
                  <span className="billing-portal-mockup__row-actions">
                    {deckIcon(Eye, "xs")}
                    {deckIcon(Download, "xs")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="billing-portal-mockup__side-panels">
            <div className="billing-portal-mockup__qr gms-card">
              <p className="billing-portal-mockup__panel-title">QR Code Preview</p>
              <div className="billing-portal-mockup__qr-frame">{deckIcon(QrCode, "md")}</div>
              <p className="billing-portal-mockup__qr-meta">INV-2024-1250</p>
              <span className="billing-portal-mockup__status billing-portal-mockup__status--ok">
                Compliant
              </span>
              <span className="billing-portal-mockup__qr-btn">Download QR</span>
            </div>

            <div className="billing-portal-mockup__activity gms-card">
              <p className="billing-portal-mockup__panel-title">Recent Activity</p>
              <ul className="billing-portal-mockup__activity-list">
                {ACTIVITY.map((item) => (
                  <li key={item.text} className="billing-portal-mockup__activity-item">
                    <span
                      className={`billing-portal-mockup__activity-dot billing-portal-mockup__activity-dot--${item.tone}`}
                    />
                    <div className="billing-portal-mockup__activity-copy">
                      <span>{item.text}</span>
                      <span className="billing-portal-mockup__activity-time">{item.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
