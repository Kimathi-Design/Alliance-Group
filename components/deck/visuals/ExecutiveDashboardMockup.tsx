"use client";

import {
  Activity,
  AlertCircle,
  AlertTriangle,
  BarChart3,
  Bell,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock,
  LayoutDashboard,
  Server,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { deckIcon } from "@/components/deck/deck-icons";
import {
  dashboardComplianceMeta,
  dashboardComplianceSplit,
  dashboardEntityRevenue,
  dashboardKpis,
  dashboardStatusModules,
  executiveReports,
} from "@/lib/deck-proposal-content";

const SIDEBAR = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Entities", icon: Building2 },
  { label: "Compliance", icon: ShieldCheck },
  { label: "Reports", icon: BarChart3 },
  { label: "Exceptions", icon: AlertTriangle },
  { label: "System Health", icon: Server },
  { label: "Users", icon: Users },
  { label: "Audit", icon: ClipboardList },
] as const;

const KPI_ICONS: LucideIcon[] = [
  BarChart3,
  CheckCircle2,
  AlertCircle,
  Clock,
  Activity,
];

const STATUS_ICONS: LucideIcon[] = [ShieldCheck, Server, Users, Clock, AlertCircle];

/** Page 25 visual — executive dashboard using proposal dashboard modules */
export function ExecutiveDashboardMockup() {
  return (
    <div className="executive-dashboard-mockup">
      <aside className="executive-dashboard-mockup__sidebar">
        <p className="executive-dashboard-mockup__brand">Group Console</p>
        <nav className="executive-dashboard-mockup__nav" aria-label="Dashboard navigation">
          {SIDEBAR.map((item, index) => (
            <div
              key={item.label}
              className={`executive-dashboard-mockup__nav-item${
                index === 0 ? " executive-dashboard-mockup__nav-item--active" : ""
              }`}
            >
              <span className="executive-dashboard-mockup__nav-icon">{deckIcon(item.icon, "xs")}</span>
              <span className="executive-dashboard-mockup__nav-label">{item.label}</span>
            </div>
          ))}
        </nav>
        <div className="executive-dashboard-mockup__reports">
          <p className="executive-dashboard-mockup__reports-label">Executive Reports</p>
          {executiveReports.slice(0, 4).map((report) => (
            <span key={report.title} className="executive-dashboard-mockup__report-item">
              {report.title}
            </span>
          ))}
        </div>
        <div className="executive-dashboard-mockup__org">
          <span className="executive-dashboard-mockup__org-icon">{deckIcon(Building2, "xs")}</span>
          <span className="executive-dashboard-mockup__org-text">Alliance Group — Executive View</span>
        </div>
      </aside>

      <div className="executive-dashboard-mockup__main">
        <header className="executive-dashboard-mockup__header">
          <div className="executive-dashboard-mockup__header-copy">
            <p className="executive-dashboard-mockup__header-title">Group Executive Dashboard</p>
            <p className="executive-dashboard-mockup__header-sub">
              Live compliance across Alliance Group entities
            </p>
          </div>
          <div className="executive-dashboard-mockup__header-controls">
            <span className="executive-dashboard-mockup__chip">
              {deckIcon(CalendarDays, "xs")}
              MTD · Jul 2026
            </span>
            <span className="executive-dashboard-mockup__chip executive-dashboard-mockup__chip--quiet">
              {deckIcon(TrendingUp, "xs")}
              Revenue by Entity
            </span>
            <span className="executive-dashboard-mockup__bell">
              {deckIcon(Bell, "xs")}
              <span className="executive-dashboard-mockup__bell-badge">5</span>
            </span>
            <span className="executive-dashboard-mockup__avatar">GF</span>
          </div>
        </header>

        <div className="executive-dashboard-mockup__kpis">
          {dashboardKpis.map((kpi, index) => (
            <div key={kpi.module} className="executive-dashboard-mockup__kpi gms-card">
              <span className="executive-dashboard-mockup__kpi-icon">
                {deckIcon(KPI_ICONS[index] ?? Activity, "sm")}
              </span>
              <div className="executive-dashboard-mockup__kpi-copy">
                <span className="executive-dashboard-mockup__kpi-label">{kpi.module}</span>
                <p className="executive-dashboard-mockup__kpi-value tabular-nums">{kpi.value}</p>
                <p
                  className={`executive-dashboard-mockup__kpi-delta${
                    kpi.trend === "up"
                      ? " executive-dashboard-mockup__kpi-delta--up"
                      : " executive-dashboard-mockup__kpi-delta--down"
                  }`}
                >
                  {kpi.delta} · {kpi.unit}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="executive-dashboard-mockup__panels">
          <div className="executive-dashboard-mockup__chart gms-card">
            <p className="executive-dashboard-mockup__panel-title">Revenue by Entity</p>
            <div className="executive-dashboard-mockup__bars" aria-hidden>
              {dashboardEntityRevenue.map((entity) => (
                <div key={entity.entity} className="executive-dashboard-mockup__bar-col">
                  <span className="executive-dashboard-mockup__bar-amount tabular-nums">
                    {entity.amount}
                  </span>
                  <div className="executive-dashboard-mockup__bar-track">
                    <div
                      className="executive-dashboard-mockup__bar-fill"
                      style={{ height: `${entity.share}%` }}
                    />
                  </div>
                  <span className="executive-dashboard-mockup__bar-label">{entity.entity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="executive-dashboard-mockup__donut gms-card">
            <div className="executive-dashboard-mockup__panel-head">
              <p className="executive-dashboard-mockup__panel-title">Compliance Rate</p>
              <span className="executive-dashboard-mockup__panel-meta">{dashboardComplianceMeta.period}</span>
            </div>
            <div className="executive-dashboard-mockup__donut-wrap">
              <div className="executive-dashboard-mockup__donut-ring" aria-hidden>
                <span className="executive-dashboard-mockup__donut-value tabular-nums">
                  {dashboardComplianceMeta.rate}
                </span>
                <span className="executive-dashboard-mockup__donut-caption">Group</span>
              </div>
              <ul className="executive-dashboard-mockup__legend">
                {dashboardComplianceSplit.map((item) => (
                  <li key={item.label} className="executive-dashboard-mockup__legend-item">
                    <span
                      className={`executive-dashboard-mockup__legend-dot executive-dashboard-mockup__legend-dot--${item.tone}`}
                    />
                    <div className="executive-dashboard-mockup__legend-copy">
                      <span className="executive-dashboard-mockup__legend-label">{item.label}</span>
                      <span className="executive-dashboard-mockup__legend-count tabular-nums">
                        {item.count} txns
                      </span>
                    </div>
                    <span className="executive-dashboard-mockup__legend-value tabular-nums">{item.value}</span>
                  </li>
                ))}
              </ul>
              <div className="executive-dashboard-mockup__donut-footer">
                <p className="executive-dashboard-mockup__donut-note">{dashboardComplianceMeta.target}</p>
                <p className="executive-dashboard-mockup__donut-note executive-dashboard-mockup__donut-note--muted">
                  {dashboardComplianceMeta.lastSync}
                </p>
              </div>
            </div>
          </div>

          <div className="executive-dashboard-mockup__status gms-card">
            <div className="executive-dashboard-mockup__panel-head">
              <p className="executive-dashboard-mockup__panel-title">Operating Modules</p>
              <span className="executive-dashboard-mockup__panel-meta">Live</span>
            </div>
            <ul className="executive-dashboard-mockup__status-list">
              {dashboardStatusModules.map((item, index) => (
                <li key={item.module} className="executive-dashboard-mockup__status-item">
                  <span className="executive-dashboard-mockup__status-icon">
                    {deckIcon(STATUS_ICONS[index] ?? Server, "xs")}
                  </span>
                  <div className="executive-dashboard-mockup__status-copy">
                    <span className="executive-dashboard-mockup__status-module">{item.module}</span>
                    <span className="executive-dashboard-mockup__status-detail">{item.detail}</span>
                    <span className="executive-dashboard-mockup__status-meta">{item.meta}</span>
                  </div>
                  <span
                    className={`executive-dashboard-mockup__status-value executive-dashboard-mockup__status-value--${item.tone}`}
                  >
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
