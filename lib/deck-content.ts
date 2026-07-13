export * from "@/lib/deck-proposal-content";

import { appendices, tableOfContentsSections } from "@/lib/deck-proposal-content";

export const APPENDIX_COUNT = appendices.length;
export const APPENDIX_START_SLIDE = 49;
export const SLIDE_COUNT = 51;

/** A4 portrait at ~150 DPI (210mm × 297mm) */
export const SLIDE_WIDTH = 1240;
export const SLIDE_HEIGHT = 1754;

export const SLIDE_PADDING_X = 104;
export const SLIDE_PADDING_TOP = 96;
export const SLIDE_PADDING_BOTTOM = 88;
export const SLIDE_HEADER_BODY_GAP = 56;
export const SLIDE_INTRO_BODY_GAP = 20;
export const SLIDE_FOOTER_GAP = 40;

export const slideTitles = [
  "Cover",
  "Executive Letter",
  "Table of Contents",
  "Executive Summary",
  "Strategic Business Outcomes",
  "Understanding Alliance Group",
  "Current Technology Landscape",
  "Business Challenges",
  "Recommended Solution Strategy",
  "Infinity Enterprise Compliance Hub",
  "About Infinity Business Dynamics",
  "Why Infinity Business Dynamics",
  "Revenue Services Lesotho Accreditation",
  "Relevant Experience",
  "Project Team & Capability",
  "Enterprise Compliance Hub Overview",
  "Multi-Entity Solution Architecture",
  "Properties (MDA/MRI) Integration",
  "Lehae Funeral Home Integration",
  "Finclude Lesotho (Xero) Integration",
  "AGIHC Standalone Billing Portal",
  "Customer TIN Validation",
  "Invoice Lifecycle",
  "Credit & Debit Note Management",
  "QR Code Framework",
  "Dashboard & Reporting",
  "User Administration",
  "Audit Trails & Compliance Governance",
  "Implementation Methodology",
  "Solution Delivery Approach",
  "Project Governance",
  "Project Team Structure",
  "Implementation Timeline",
  "Testing & Quality Assurance",
  "Training & Change Management",
  "Post Go-Live Support",
  "Commercial Model",
  "Investment & Pricing Philosophy",
  "Detailed Commercial Proposal",
  "Enterprise Licensing & Managed Services",
  "Total Cost of Ownership",
  "Return on Investment",
  "Service Level Agreement",
  "Risk Management",
  "Why Infinity Business Dynamics",
  "Supplier Response Matrix",
  "Conclusion",
  "Proposal Acceptance",
  "Appendices",
  "Thank You",
  "Closing Cover",
] as const;

/** Heading shown at the top of each slide visual panel */
export const slideVisualLabels: Record<number, string> = {
  3: "Transformation",
  4: "Strategic Outcomes",
  5: "Group Structure",
  6: "Technology Landscape",
  7: "Challenges vs Response",
  8: "Solution Strategy",
  9: "Hub Architecture",
  10: "Company Profile",
  11: "Why Infinity",
  12: "Accreditation",
  13: "Experience",
  14: "Team Capability",
  15: "Platform Overview",
  16: "Solution Architecture",
  17: "Properties Integration",
  18: "Lehae Integration",
  19: "Xero Integration",
  20: "Billing Portal",
  21: "TIN Validation",
  22: "Invoice Lifecycle",
  23: "Credit & Debit Notes",
  24: "QR Code Framework",
  25: "Executive Dashboard",
  26: "Access Management",
  27: "Audit Workflow",
  28: "Delivery Framework",
  29: "Rollout Phases",
  30: "Governance Framework",
  32: "Project Schedule",
  33: "Quality Assurance",
  34: "Training Journey",
  35: "Support Lifecycle",
  36: "Commercial Framework",
  37: "Investment Philosophy",
  39: "Licensing Model",
  40: "Cost Comparison",
  41: "Value Outcomes",
  42: "SLA Framework",
  43: "Risk Framework",
  45: "Compliance Matrix",
};

export const coverMeta = {
  platform: "ENTERPRISE TAX COMPLIANCE TRANSFORMATION",
  subtitle: "Revenue Services Lesotho (RSL) Electronic Billing System (EBS)",
  subjectLines: ["Group-Wide Compliance Platform Proposal"],
  preparedFor: "ALLIANCE GROUP INVESTMENT HOLDING COMPANY LTD",
  preparedForClient: "Alliance Group Investment Holding Company Ltd",
  preparedForAddress: "Alliance House, 4 Bowker Road, Maseru, Lesotho",
  preparedForLocation: "Maseru, Lesotho",
  preparedBy: "INFINITY BUSINESS DYNAMICS (PTY) LTD",
  preparedByDisplay: "Infinity Business Dynamics (Pty) Ltd",
  tagline: "Harnessing the Power of Technology",
  address: "Ha Tsosane, Maseru, Lesotho",
  email: "services@ibd.co.ls",
  phone1: "+266 6255 4433",
  phone2: "",
  website: "www.ibd.co.ls",
  location: "Maseru, Lesotho",
  tin: "200116903-2",
  date: "July 8th 2026",
  reference: "IBD-AGIHC-EBS-2026-001",
  accreditation: "Revenue Services Lesotho Accredited Solution Provider",
  primaryContactName: "Infinity Business Dynamics",
  primaryContactRole: "Proposal Team",
  primaryContactEmail: "services@ibd.co.ls",
  primaryContactPhone: "+266 6255 4433",
} as const;

const TOC_ENTRIES = tableOfContentsSections.flatMap((s) =>
  s.entries.map((e) => ({ ...e, section: s.section })),
);

export const tableOfContents = TOC_ENTRIES.map((entry) => ({
  title: entry.title,
  page: entry.page,
}));

export function getTocSectionNumber(slideIndex: number): number | null {
  const page = slideIndex + 1;
  const entryIndex = TOC_ENTRIES.findIndex((e) => e.page === page);
  return entryIndex >= 0 ? entryIndex + 1 : null;
}

export function getAppendixSlideIndex(appendixIndex: number) {
  return appendixIndex === 0 ? APPENDIX_START_SLIDE - 1 : null;
}

export function getAppendixIndexForSlide(slideIndex: number): number | null {
  return slideIndex === APPENDIX_START_SLIDE - 1 ? 0 : null;
}

export type AppendixItem = (typeof appendices)[number];

export const solutionArchitectureFlow = [
  "Alliance Group Entities",
  "Enterprise Compliance Hub",
  "Motheo Compliance Engine",
  "Revenue Services Lesotho",
] as const;
