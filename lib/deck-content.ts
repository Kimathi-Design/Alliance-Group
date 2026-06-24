export const APPENDIX_COUNT = 9;
export const APPENDIX_START_SLIDE = 42;
export const SLIDE_COUNT = APPENDIX_START_SLIDE + APPENDIX_COUNT;
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
  "Executive Benefits Summary",
  "Understanding DHL Requirements",
  "About Infinity Business Dynamics",
  "Why Infinity Business Dynamics",
  "RSL Accreditation & Compliance",
  "Project Team & Experience",
  "Relevant Experience",
  "Proposed Solution Overview",
  "Enterprise Solution Architecture",
  "SAP Integration Approach",
  "SAP Integration Architecture",
  "Motheo Compliance Layer",
  "Data Flow Architecture",
  "Technical Integration Framework",
  "End-to-End Transaction Workflow",
  "Invoice Reporting Workflow",
  "Credit & Debit Note Processing",
  "QR Code Generation & Validation",
  "Compliance Monitoring & Reporting",
  "Security & Information Governance",
  "Business Continuity & Resilience",
  "Project Governance Framework",
  "Implementation Methodology",
  "Project Implementation Plan",
  "Project Timeline",
  "User Training & Change Management",
  "Support & Maintenance",
  "Service Level Commitments",
  "Commercial Proposal",
  "Annual Subscription & Managed Services",
  "Risk Management & Mitigation",
  "Supplier Responses",
  "Acceptance of DHL Requirements",
  "Why DHL Should Choose Infinity",
  "Conclusion",
  "Proposal Acceptance",
  "Banking Details",
  "Appendices",
  "Appendix A",
  "Appendix B",
  "Appendix C",
  "Appendix D",
  "Appendix E",
  "Appendix F",
  "Appendix G",
  "Appendix H",
  "Appendix I",
];

export const coverMeta = {
  platform: "MOTHEO COMPLIANCE PLATFORM",
  subtitle: "SAP INTEGRATION & LEKUKA E-INVOICING IMPLEMENTATION",
  subjectLines: ["SAP Integration &", "Lekuka e-Invoicing Implementation"],
  preparedFor: "DHL EXPRESS LESOTHO",
  preparedForClient: "DHL Express Lesotho",
  preparedForLocation: "Maseru, Lesotho",
  preparedBy: "INFINITY BUSINESS DYNAMICS (PTY) LTD",
  preparedByDisplay: "Infinity Business Dynamics (Pty) Ltd",
  tagline: "Harnessing the Power of Technology",
  address: "P.O. Box 13145 Maseru 100 Lesotho",
  email: "services@ibd.co.ls",
  phone1: "+266 62554433",
  phone2: "+266 62553300",
  website: "www.ibd.co.ls",
  location: "Maseru, Lesotho",
  tin: "200116903-2",
  date: "24th of June 2026",
  reference: "IBD-DHL-LEKUKA-2026-01",
  accreditation: "Revenue Services Lesotho Accredited Solution Provider",
};

const TOC_TITLE_ALIASES: Record<string, string> = {
  "Governance Framework": "Project Governance Framework",
  "Risk Management & Governance": "Risk Management & Mitigation",
};

const TOC_ENTRIES = [
  "Executive Summary",
  "Executive Benefits Summary",
  "Understanding DHL Requirements",
  "About Infinity Business Dynamics",
  "Why Infinity Business Dynamics",
  "RSL Accreditation & Compliance",
  "Project Team & Experience",
  "Proposed Solution Overview",
  "Enterprise Solution Architecture",
  "SAP Integration Approach",
  "SAP Integration Architecture",
  "Motheo Compliance Layer",
  "Data Flow Architecture",
  "Technical Integration Framework",
  "End-to-End Transaction Workflow",
  "Invoice Reporting Workflow",
  "Credit & Debit Note Processing",
  "QR Code Generation & Validation",
  "Compliance Monitoring & Reporting",
  "Security & Information Governance",
  "Business Continuity & Resilience",
  "Governance Framework",
  "Implementation Methodology",
  "Project Timeline",
  "User Training & Change Management",
  "Support & Maintenance",
  "Service Level Commitments",
  "Commercial Proposal",
  "Annual Subscription & Managed Services",
  "Risk Management & Governance",
  "Supplier Responses",
  "Acceptance of DHL Requirements",
  "Why DHL Should Choose Infinity",
  "Conclusion",
  "Proposal Acceptance",
  "Banking Details",
  "Appendices",
] as const;

export const tableOfContents = TOC_ENTRIES.map((title) => {
  const slideTitle = TOC_TITLE_ALIASES[title] ?? title;
  const slideIndex = slideTitles.indexOf(slideTitle);
  return {
    title,
    page: slideIndex >= 0 ? slideIndex + 1 : 0,
  };
});

/** TOC list position (1–37) for a slide index, or null for pre-TOC slides. */
export function getTocSectionNumber(slideIndex: number): number | null {
  const entryIndex = TOC_ENTRIES.findIndex((title) => {
    const slideTitle = TOC_TITLE_ALIASES[title] ?? title;
    return slideTitles.indexOf(slideTitle) === slideIndex;
  });
  return entryIndex >= 0 ? entryIndex + 1 : null;
}

export const executiveSummaryOutcomes = [
  {
    title: "Full Regulatory Compliance",
    description: "Automated reporting of invoices, credit notes and debit notes.",
  },
  {
    title: "Operational Efficiency",
    description: "Reduced manual intervention through automation.",
  },
  {
    title: "Enhanced Governance",
    description: "Improved visibility and compliance monitoring.",
  },
  {
    title: "Audit Readiness",
    description: "Complete transaction traceability.",
  },
  {
    title: "Future Readiness",
    description: "Support for future regulatory changes.",
  },
  {
    title: "Seamless SAP Integration",
    description: "Preserve existing ERP workflows without operational disruption.",
  },
];

export const executiveBenefits = [
  {
    title: "Compliance Risk Reduction",
    intro:
      "Automated validation and reporting controls reduce reporting errors, compliance breaches and penalties.",
    outcomes: [
      "Reduced manual reporting risk",
      "Improved reporting accuracy",
      "Reduced regulatory exposure",
    ],
  },
  {
    title: "Operational Efficiency",
    intro:
      "Automation eliminates repetitive compliance work and streamlines reporting processes.",
    outcomes: [
      "Reduced administrative effort",
      "Faster processing cycles",
      "Increased productivity",
    ],
  },
  {
    title: "Audit Readiness",
    intro:
      "Audit trails provide complete visibility into transactions and compliance activity.",
    outcomes: [
      "Improved governance",
      "Faster audit preparation",
      "Improved traceability",
    ],
  },
  {
    title: "Future-Proof Compliance",
    intro:
      "The platform is maintained to support evolving Revenue Services Lesotho requirements.",
    outcomes: [
      "Reduced upgrade risk",
      "Continuous compliance",
      "Reduced maintenance effort",
    ],
  },
  {
    title: "Enterprise Scalability",
    intro:
      "Architecture supports increasing transaction volumes and future business growth.",
    outcomes: [
      "Scalable infrastructure",
      "Increased reliability",
      "Growth readiness",
    ],
  },
];

export const dhlRequirementMatrix: { requirement: string; response: string }[] = [
  { requirement: "Lekuka-Compliant e-Invoicing Solution", response: "Motheo Compliance Platform" },
  { requirement: "SAP ERP Integration", response: "Enterprise SAP Integration Services" },
  { requirement: "API Configuration & Implementation", response: "Included" },
  { requirement: "Invoice Reporting", response: "Included" },
  { requirement: "Credit Note Reporting", response: "Included" },
  { requirement: "Debit Note Reporting", response: "Included" },
  { requirement: "QR Code Generation & Validation", response: "Included" },
  { requirement: "User Training", response: "Included" },
  { requirement: "Testing & Go-Live Support", response: "Included" },
  { requirement: "Post-Implementation Support", response: "Included" },
];

export const dhlSuccessFactors = [
  {
    title: "Regulatory Compliance",
    description:
      "Full adherence to RSL electronic invoicing requirements.",
  },
  {
    title: "Operational Continuity",
    description: "No disruption to existing SAP business processes.",
  },
  {
    title: "Enterprise Security",
    description: "Protection of financial and transactional information.",
  },
  {
    title: "Audit Readiness",
    description: "Complete visibility and traceability of reported transactions.",
  },
];

export const coreServiceAreas = [
  {
    title: "Enterprise Software Solutions",
    description: "Implementation and support of business-critical enterprise platforms.",
  },
  {
    title: "ERP Integration Services",
    description: "Integration of SAP, SYSPRO and other enterprise business systems.",
  },
  {
    title: "Compliance Automation",
    description: "Deployment of regulatory reporting and electronic invoicing solutions.",
  },
  {
    title: "Managed Services",
    description: "Long-term support, monitoring and maintenance of business systems.",
  },
  {
    title: "Digital Transformation",
    description:
      "Technology solutions that improve operational efficiency and customer experience.",
  },
  {
    title: "Training & Enablement",
    description: "Structured training and knowledge transfer for successful adoption.",
  },
];

export const whyClientsWorkWithUs = [
  "Enterprise Expertise — Proven capability across enterprise software, integration and compliance programmes.",
  "Local Presence — Lesotho-based teams for implementation, support and ongoing client engagement.",
  "Regulatory Knowledge — Deep understanding of Revenue Services Lesotho and Lekuka requirements.",
  "Integration Capability — Specialist skills connecting SAP and compliance platforms seamlessly.",
  "Dedicated Support — Responsive, accountable service from kick-off through long-term operation.",
  "Long-Term Partnership Focus — Committed to client success well beyond initial deployment.",
];

export const whyInfinityCards = [
  {
    title: "RSL ACCREDITED PROVIDER",
    body: "Infinity Business Dynamics is accredited by Revenue Services Lesotho to provide Lekuka-compliant electronic billing solutions. This accreditation demonstrates our ability to deliver solutions aligned with current regulatory requirements.",
  },
  {
    title: "SAP INTEGRATION EXPERTISE",
    body: "Our team possesses extensive experience integrating enterprise systems with compliance and reporting platforms. The proposed architecture has been specifically designed to support DHL's SAP environment.",
  },
  {
    title: "LOCAL SUPPORT PRESENCE",
    body: "As a Lesotho-based organisation, Infinity Business Dynamics provides local implementation resources, training capabilities and ongoing support services.",
  },
  {
    title: "FUTURE-READY PLATFORM",
    body: "The Motheo Compliance Platform is designed to evolve alongside changing business and regulatory requirements.",
  },
  {
    title: "LONG-TERM PARTNERSHIP",
    body: "We are committed to supporting DHL beyond implementation through managed services, compliance monitoring and continuous improvement initiatives.",
  },
];

export const accreditationHighlights = [
  { label: "Provider", value: "Infinity Business Dynamics (Pty) Ltd" },
  { label: "Solution", value: "Infinity Electronic Billing System" },
  { label: "Model", value: "Software / Virtual POS" },
  { label: "Version", value: "1.0.1" },
  { label: "Validity", value: "31 March 2027" },
];

export const projectTeamRoles: { role: string; responsibility: string }[] = [
  { role: "Executive Sponsor", responsibility: "Strategic oversight and executive governance" },
  { role: "Project Manager", responsibility: "Delivery management and stakeholder coordination" },
  { role: "Solution Architect", responsibility: "Architecture design and technical leadership" },
  { role: "SAP Integration Specialist", responsibility: "SAP configuration and integration activities" },
  { role: "Compliance Consultant", responsibility: "Lekuka compliance and regulatory alignment" },
  { role: "Technical Engineer", responsibility: "Platform deployment and testing" },
  { role: "Training Lead", responsibility: "User training and knowledge transfer" },
  { role: "Support Team", responsibility: "Post-go-live support and maintenance" },
];

export const implementationExperience = [
  {
    title: "ERP Integrations",
    description: "Integration of enterprise business systems with third-party platforms.",
  },
  {
    title: "Regulatory Compliance",
    description: "Electronic invoicing and compliance reporting solutions.",
  },
  {
    title: "Business Process Automation",
    description: "Automation of manual compliance and reporting activities.",
  },
  {
    title: "Managed Services",
    description: "Long-term support, monitoring and optimisation of business systems.",
  },
];

export const experienceAreas = [
  {
    title: "Enterprise Systems Integration",
    description: "ERP connected to compliance and business-critical platforms.",
  },
  {
    title: "Compliance Automation",
    description: "Regulatory reporting and e-invoicing, fully automated.",
  },
  {
    title: "Managed Services",
    description: "Always-on support and compliance maintenance.",
  },
  {
    title: "Business Transformation",
    description: "Technology that drives efficiency and stronger governance.",
  },
  {
    title: "Regulatory Technology",
    description: "Built for Revenue Services Lesotho requirements.",
  },
  {
    title: "Project Delivery Excellence",
    description: "On time, on scope, every engagement.",
  },
];

export const deliveryPhilosophy = ["Simplicity", "Reliability", "Compliance", "Sustainability"];

export const solutionComponents = [
  {
    title: "DHL SAP ERP",
    description: "System of record for all financial and operational transactions.",
  },
  {
    title: "Integration Services Layer",
    description: "Secure transaction exchange between SAP and Motheo.",
  },
  {
    title: "Motheo Compliance Platform",
    description: "Validation, transformation, reporting and monitoring engine.",
  },
  {
    title: "Revenue Services Lesotho",
    description: "Regulatory authority receiving fiscal transaction submissions.",
  },
];

export const architecturePrinciples = [
  "Reliability",
  "Security",
  "Scalability",
  "Compliance",
  "Auditability",
];

export const sapIntegrationActivities = [
  "SAP Transaction Mapping",
  "Customer Master Validation",
  "Tax Configuration Alignment",
  "API Configuration",
  "Compliance Rule Configuration",
  "End-to-End Testing",
  "Production Deployment",
];

export const sapArchitecturePanels = [
  {
    title: "Monitoring",
    description: "Live visibility into submission status and volumes.",
  },
  {
    title: "Audit Logs",
    description: "Complete history of every transaction processed.",
  },
  {
    title: "Exception Management",
    description: "Failed submissions flagged and routed for resolution.",
  },
  {
    title: "Compliance Analytics",
    description: "Trends and metrics on compliance performance.",
  },
];

export const motheoComponents = [
  { title: "Validation Engine", description: "Validates transaction completeness and compliance requirements before submission." },
  { title: "Tax Rules Engine", description: "Applies Revenue Services Lesotho fiscal requirements and validation rules." },
  { title: "QR Code Engine", description: "Automatically generates and validates fiscal QR codes." },
  { title: "Audit Logging", description: "Maintains a complete history of transaction processing activities." },
  { title: "Monitoring Services", description: "Provides visibility into submission status and compliance performance." },
  { title: "Retry Engine", description: "Automatically retries failed submissions and manages recovery processes." },
  { title: "Lekuka Connectivity", description: "Provides secure API communication with Revenue Services Lesotho." },
  {
    title: "Exception Management",
    description: "Identifies, routes and resolves failed or rejected transactions.",
  },
];

export const dataFlowSteps = [
  { step: "01", title: "Transaction Generated in SAP" },
  { step: "02", title: "Transaction Extracted Through Integration Layer" },
  { step: "03", title: "Compliance Validation Performed" },
  { step: "04", title: "Tax Rules Applied" },
  { step: "05", title: "QR Code Generated" },
  { step: "06", title: "Submission to Lekuka" },
  { step: "07", title: "Acceptance Confirmation Received" },
  { step: "08", title: "Audit Logs Updated" },
];

export const supportedTransactionTypes = [
  { title: "Invoices", description: "Automated reporting of invoice transactions." },
  { title: "Credit Notes", description: "Automated reporting of credit adjustments." },
  { title: "Debit Notes", description: "Automated reporting of debit adjustments." },
  { title: "Status Tracking", description: "Real-time monitoring of submission outcomes." },
  { title: "Exception Management", description: "Identification and management of failed transactions." },
  { title: "Audit Reporting", description: "Comprehensive compliance reporting and traceability." },
];

export const designPrinciples = [
  { title: "Secure", description: "Authenticated and encrypted communications." },
  { title: "Reliable", description: "Built-in retry and recovery mechanisms." },
  { title: "Scalable", description: "Supports future business growth." },
  { title: "Auditable", description: "Complete transaction visibility." },
  { title: "Resilient", description: "Continuous operation during system or network disruption." },
  { title: "Integrable", description: "Seamless connectivity with SAP and enterprise systems." },
];

export const transactionLifecycle = [
  "Transaction Created in SAP",
  "Compliance Validation",
  "Tax Validation",
  "QR Code Generation",
  "Submission to Lekuka",
  "Acceptance Confirmation",
  "Audit Archive",
  "Compliance Reporting",
];

export const controlPoints = [
  {
    title: "Validation Rules",
    description: "Enforces data integrity before transactions proceed to reporting.",
  },
  {
    title: "Tax Verification",
    description: "Confirms tax calculations meet Revenue Services Lesotho requirements.",
  },
  {
    title: "Error Handling",
    description: "Captures and routes failures for timely resolution.",
  },
  {
    title: "Submission Tracking",
    description: "Monitors each transaction through to RSL acceptance.",
  },
  {
    title: "Audit Logging",
    description: "Records every action for compliance and traceability.",
  },
];

export const transactionLifecycleBenefits = [
  {
    title: "Increased Accuracy",
    description: "Reduces manual errors in fiscal reporting and submissions.",
  },
  {
    title: "Improved Compliance",
    description: "Aligns every transaction with regulatory requirements.",
  },
  {
    title: "Reduced Risk",
    description: "Minimises exposure to penalties and reporting failures.",
  },
];

export const invoiceProcessSteps = [
  "Invoice Created",
  "Validation",
  "Tax Rules Applied",
  "QR Code Generated",
  "Submission to Lekuka",
  "Acceptance Confirmation",
  "Compliance Archive",
];

export const invoiceProcessBenefits = [
  {
    title: "Faster Reporting",
    description:
      "Automated submission shortens the reporting cycle so qualifying invoices reach Revenue Services Lesotho without delay.",
  },
  {
    title: "Reduced Manual Effort",
    description:
      "Finance teams spend less time on data entry, reconciliation and follow-up on submission status.",
  },
  {
    title: "Improved Accuracy",
    description:
      "Built-in validation and tax checks catch issues before invoices are submitted, reducing errors and rework.",
  },
  {
    title: "Audit Readiness",
    description:
      "Complete transaction history and submission records support internal reviews and regulatory audits.",
  },
  {
    title: "Real-Time Visibility",
    description:
      "Live status tracking across the invoice lifecycle, from SAP extraction through to RSL acceptance confirmation.",
  },
  {
    title: "Compliance Assurance",
    description:
      "Every qualifying invoice is processed in line with Revenue Services Lesotho fiscal reporting requirements.",
  },
  {
    title: "Operational Resilience",
    description:
      "Automated retry and exception handling keeps reporting flowing when integration or network issues occur.",
  },
];

export const creditNoteSteps = [
  "Credit Note Created",
  "Reference Validation",
  "Compliance Validation",
  "Submission",
  "Acceptance",
  "Audit Archive",
];

export const debitNoteSteps = [
  "Debit Note Created",
  "Validation",
  "Submission",
  "Acceptance",
  "Compliance Archive",
];

export const creditDebitNoteBenefits = [
  {
    title: "Consistent Processing",
    description:
      "Credit and debit notes follow the same governed workflow as invoices, ensuring adjustments are validated, reported and archived without manual gaps or inconsistent handling.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Each adjustment is submitted to Lekuka in line with Revenue Services Lesotho requirements, preserving fiscal accuracy when transactions are corrected or amended.",
  },
  {
    title: "Improved Traceability",
    description:
      "Every credit and debit note is linked to its original transaction, with full audit history from SAP through to RSL acceptance confirmation.",
  },
  {
    title: "Reduced Risk",
    description:
      "Automated controls prevent unreported adjustments, duplicate reporting and compliance penalties.",
  },
];

export const qrCodeBenefits = [
  { title: "Regulatory Compliance", description: "Supports Revenue Services Lesotho requirements." },
  { title: "Transaction Verification", description: "Enables validation of reported transactions." },
  { title: "Automation", description: "Eliminates manual QR generation." },
  { title: "Audit Support", description: "Provides additional transaction traceability." },
  { title: "Customer Verification", description: "Enables recipients to confirm invoice authenticity by scanning the QR code." },
  { title: "Data Integrity", description: "Ensures embedded fiscal data remains aligned with submitted RSL records." },
];

export const qrDhlBenefits = [
  {
    title: "Automated Generation",
    description:
      "QR codes are produced automatically for every qualifying transaction, with no manual intervention from finance teams.",
  },
  {
    title: "Improved Accuracy",
    description:
      "Fiscal data embedded in each QR code is validated before generation, reducing mismatches between invoices and RSL records.",
  },
  {
    title: "Compliance Assurance",
    description:
      "Every QR-coded document meets Revenue Services Lesotho formatting and content requirements for fiscal reporting.",
  },
  {
    title: "Reduced Operational Effort",
    description:
      "Teams no longer need to generate, attach or verify QR codes manually across high invoice volumes.",
  },
  {
    title: "Enhanced Customer Trust",
    description:
      "Recipients can independently verify document authenticity, strengthening confidence in DHL fiscal invoices.",
  },
  {
    title: "Audit Readiness",
    description:
      "QR-linked records support faster retrieval and verification during internal reviews and regulatory audits.",
  },
];

export const dashboardFeatures = [
  { title: "Submission Monitoring", description: "Track transactions in real time." },
  { title: "Status Visibility", description: "Monitor accepted, pending and failed submissions." },
  { title: "Exception Management", description: "Identify and resolve reporting issues." },
  { title: "Audit Reporting", description: "Access historical reporting records." },
  { title: "Compliance Analytics", description: "Measure compliance performance." },
  { title: "Performance Metrics", description: "View submission success rates and turnaround times at a glance." },
  { title: "Role-Based Views", description: "Tailored dashboards for finance, operations and compliance teams." },
  { title: "Proactive Alerts", description: "Notifications when submissions fail or require immediate attention." },
];

export const dashboardBenefits = [
  {
    title: "Increased Visibility",
    description:
      "A single view of transaction volumes, submission status and compliance performance across the organisation.",
  },
  {
    title: "Improved Governance",
    description:
      "Clear oversight of reporting activities strengthens accountability and regulatory control.",
  },
  {
    title: "Faster Resolution",
    description:
      "Exceptions and failed submissions are identified early, enabling teams to act before issues escalate.",
  },
  {
    title: "Better Decision Making",
    description:
      "Real-time metrics and trends support informed operational and compliance decisions.",
  },
  {
    title: "Audit Readiness",
    description:
      "Historical records and reporting trails are readily available for internal and regulatory review.",
  },
];

export const securityObjectives = [
  { title: "Confidentiality", description: "Protecting sensitive information." },
  { title: "Integrity", description: "Maintaining transaction accuracy." },
  { title: "Availability", description: "Ensuring reliable access to services." },
  { title: "Accountability", description: "Providing complete traceability." },
];

export const securityControls = [
  {
    title: "Secure Authentication",
    description:
      "Verifies user identity before granting access to compliance systems and data.",
  },
  {
    title: "Role-Based Access Control",
    description:
      "Ensures users only access functions and data aligned with their responsibilities.",
  },
  {
    title: "Encrypted Communications",
    description:
      "Protects data in transit between SAP, the platform and Revenue Services Lesotho.",
  },
  {
    title: "Audit Logging",
    description:
      "Records system activity to support traceability, investigations and compliance reviews.",
  },
  {
    title: "Monitoring & Alerting",
    description:
      "Continuous oversight detects unusual activity and potential security events.",
  },
  {
    title: "Incident Management",
    description:
      "Structured processes enable rapid response and resolution of security issues.",
  },
];

export const securityBusinessBenefits = [
  {
    title: "Information Protection",
    description:
      "Sensitive fiscal and customer data is safeguarded throughout the compliance lifecycle.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Security controls align with DHL governance and Revenue Services Lesotho requirements.",
  },
  {
    title: "Reduced Risk",
    description:
      "Proactive controls minimise exposure to data breaches, fraud and operational disruption.",
  },
  {
    title: "Enhanced Governance",
    description:
      "A strong security posture supports accountability and enterprise risk management.",
  },
];

export const resilienceFeatures = [
  { title: "Retry Processing", description: "Automatic recovery of failed submissions." },
  { title: "Submission Monitoring", description: "Continuous visibility into reporting status." },
  { title: "Exception Management", description: "Controlled handling of reporting issues." },
  { title: "Audit Preservation", description: "Retention of transaction history." },
  { title: "Operational Recovery", description: "Rapid restoration of compliance processing." },
];

export const governanceObjectives = [
  { title: "Strategic Oversight", description: "Ensure alignment with DHL business objectives." },
  { title: "Risk Management", description: "Identify, assess and mitigate project risks." },
  { title: "Decision Making", description: "Enable rapid issue resolution and project decisions." },
  { title: "Stakeholder Engagement", description: "Maintain consistent communication across all teams." },
  { title: "Delivery Assurance", description: "Ensure implementation quality and project success." },
];

export const governanceStructure = [
  { title: "Executive Steering Committee", description: "Executive oversight and strategic direction." },
  { title: "Project Sponsor", description: "Business ownership and project success." },
  { title: "Project Manager", description: "Day-to-day governance and coordination." },
  { title: "Technical Workstream", description: "SAP integration, APIs and infrastructure." },
  { title: "Compliance Workstream", description: "Regulatory alignment and reporting." },
  { title: "Business Workstream", description: "User readiness, testing and change management." },
];

export const implementationPhases = [
  {
    phase: "PHASE 1 – DISCOVER",
    summary: "Understand business, technical and compliance requirements.",
    activities: ["Requirements Workshops", "SAP Assessment", "Compliance Assessment", "Project Planning"],
    deliverables: ["Requirements Document", "Project Plan", "Solution Scope"],
  },
  {
    phase: "PHASE 2 – DESIGN",
    summary: "Define architecture, integrations and compliance workflows.",
    activities: ["Architecture Design", "SAP Mapping", "API Design", "Compliance Design"],
    deliverables: ["Solution Architecture", "Integration Design", "Compliance Blueprint"],
  },
  {
    phase: "PHASE 3 – BUILD",
    summary: "Configure the platform and integration services.",
    activities: ["Configuration", "Integration Development", "Compliance Rule Setup"],
    deliverables: ["Configured Environment", "Integrated Solution"],
  },
  {
    phase: "PHASE 4 – VALIDATE",
    summary: "Perform testing and user acceptance activities.",
    activities: ["Functional Testing", "Compliance Testing", "User Acceptance Testing"],
    deliverables: ["Test Results", "User Sign-Off"],
  },
  {
    phase: "PHASE 5 – DEPLOY",
    summary: "Go-live and transition to support.",
    activities: ["Production Deployment", "Hypercare Support", "Transition to Managed Services"],
    deliverables: ["Live Environment", "Operational Support"],
  },
];

export const implementationStreams = [
  { title: "Business Stream", description: "Requirements, user engagement and testing." },
  { title: "Technical Stream", description: "SAP integration, API configuration and deployment." },
  { title: "Compliance Stream", description: "Validation of regulatory reporting requirements." },
  { title: "Training Stream", description: "User enablement and knowledge transfer." },
];

export const implementationPrinciples = [
  {
    title: "Minimal Business Disruption",
    description:
      "Implementation activities are planned around live operations so finance and logistics teams can continue working without interruption.",
  },
  {
    title: "Controlled Deployment",
    description:
      "Each phase is released in a measured sequence with checkpoints, testing and sign-off before progressing to production.",
  },
  {
    title: "User Readiness",
    description:
      "Training, documentation and hands-on support ensure DHL teams are confident using the platform from day one.",
  },
  {
    title: "Compliance Assurance",
    description:
      "Regulatory requirements are validated at every stage—not only at go-live—so reporting obligations are met throughout.",
  },
  {
    title: "Operational Continuity",
    description:
      "Fallback processes and hypercare support protect compliance reporting during and after deployment.",
  },
  {
    title: "Stakeholder Alignment",
    description:
      "Regular engagement across business, technical and compliance workstreams keeps decisions timely and well informed.",
  },
  {
    title: "Quality at Every Stage",
    description:
      "Rigorous testing and review gates ensure integrations, compliance rules and workflows meet enterprise standards before release.",
  },
];

export const projectTimeline: { phase: string; duration: string }[] = [
  { phase: "Discovery & Planning", duration: "Week 1" },
  { phase: "Solution Design", duration: "Week 2" },
  { phase: "SAP Integration & Configuration", duration: "Week 3–4" },
  { phase: "Compliance Validation", duration: "Week 5" },
  { phase: "Testing & User Acceptance", duration: "Week 6" },
  { phase: "Training", duration: "Week 7" },
  { phase: "Go-Live Preparation", duration: "Week 7" },
  { phase: "Production Go-Live", duration: "Week 8" },
];

export const keyMilestones: { milestone: string; timing: string }[] = [
  { milestone: "Project Kick-Off", timing: "Week 1" },
  { milestone: "Architecture Sign-Off", timing: "Week 2" },
  { milestone: "Integration Complete", timing: "Week 4" },
  { milestone: "User Acceptance Complete", timing: "Week 6" },
  { milestone: "Production Deployment", timing: "Week 8" },
];

export const trainingAudience = [
  { title: "Finance Team", description: "Invoice processing and compliance reporting." },
  { title: "Compliance Team", description: "Monitoring and exception management." },
  { title: "IT Team", description: "Technical administration and support." },
  { title: "Management Team", description: "Governance and reporting oversight." },
];

export const trainingDeliverables = [
  {
    title: "User Training Sessions",
    description:
      "Hands-on sessions tailored to each user group, covering day-to-day compliance tasks and platform navigation.",
  },
  {
    title: "Administrator Training",
    description:
      "Technical training for IT and system administrators on configuration, monitoring and incident response.",
  },
  {
    title: "User Guides",
    description:
      "Clear, role-specific documentation that teams can reference after go-live and during onboarding.",
  },
  {
    title: "Operational Procedures",
    description:
      "Documented workflows for reporting, exception handling and escalation aligned to DHL processes.",
  },
  {
    title: "Knowledge Transfer Workshops",
    description:
      "Structured sessions that pass operational know-how from the implementation team to DHL staff.",
  },
];

export const trainingOutcomes = [
  {
    title: "Increased User Confidence",
    description:
      "Teams understand how to perform compliance tasks correctly and independently from day one.",
  },
  {
    title: "Faster Adoption",
    description:
      "Familiarity with the platform accelerates uptake and reduces resistance to new processes.",
  },
  {
    title: "Reduced Support Dependency",
    description:
      "Well-trained users resolve routine issues without relying on external support for every query.",
  },
  {
    title: "Improved Operational Readiness",
    description:
      "DHL is prepared to operate, monitor and support the compliance environment post go-live.",
  },
];

export const supportServices = [
  { title: "Application Support", description: "Issue diagnosis and resolution." },
  { title: "Compliance Monitoring", description: "Monitoring of transaction reporting activities." },
  { title: "Technical Support", description: "Platform and integration support." },
  { title: "Regulatory Updates", description: "Implementation of future Lekuka requirements." },
  { title: "Performance Optimisation", description: "Continuous monitoring and optimisation." },
];

export const supportObjectives = [
  {
    title: "Stability",
    description:
      "A dependable compliance platform that performs consistently under normal and peak transaction volumes.",
  },
  {
    title: "Reliability",
    description:
      "Reporting services remain available and submissions succeed with minimal disruption to DHL operations.",
  },
  {
    title: "Compliance",
    description:
      "Ongoing alignment with Revenue Services Lesotho requirements as regulations and platform standards evolve.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Proactive optimisation of performance, processes and support based on operational feedback and monitoring.",
  },
  {
    title: "Proactive Monitoring",
    description:
      "Issues are detected and addressed early before they affect compliance reporting or business operations.",
  },
  {
    title: "Rapid Resolution",
    description:
      "Dedicated support teams respond quickly to incidents with clear escalation paths and accountability.",
  },
];

export const serviceLevels: { priority: string; description: string; response: string }[] = [
  { priority: "Critical", description: "Service unavailable", response: "2 Hours" },
  { priority: "High", description: "Major functionality impacted", response: "4 Hours" },
  { priority: "Medium", description: "Partial functionality affected", response: "1 Business Day" },
  { priority: "Low", description: "General enquiry", response: "2 Business Days" },
];

export const escalationLevels = [
  {
    title: "Level 1 – Helpdesk",
    description:
      "First point of contact for logging, triaging and resolving routine support requests.",
  },
  {
    title: "Level 2 – Technical Support",
    description:
      "Platform and integration specialists handle configuration, connectivity and system-level issues.",
  },
  {
    title: "Level 3 – Compliance Specialists",
    description:
      "Experts address regulatory reporting, submission failures and Lekuka-related concerns.",
  },
  {
    title: "Level 4 – Engineering Team",
    description:
      "Senior engineering resources for complex defects, architecture issues and critical incidents.",
  },
];

export const servicePrinciples = [
  {
    title: "Responsiveness",
    description:
      "Support requests are acknowledged and acted on within agreed service level timeframes.",
  },
  {
    title: "Accountability",
    description:
      "Clear ownership at each escalation level ensures issues are tracked through to resolution.",
  },
  {
    title: "Transparency",
    description:
      "DHL receives regular status updates and visibility into open incidents and progress.",
  },
  {
    title: "Resolution Focus",
    description:
      "Effort is directed at fixing root causes, not simply closing tickets.",
  },
];

export const commercialProposal: { description: string; amount: string }[] = [
  { description: "One-time implementation cost", amount: "$17,250.00" },
  {
    description: "Recurring subscription fees (Year 1) — Motheo platform subscription & managed services",
    amount: "$32,343.75",
  },
  {
    description: "Software license fees (if applicable)",
    amount: "Included in subscription",
  },
  {
    description: "Annual support & maintenance fees (Year 2 onwards)",
    amount: "$22,023.43",
  },
  {
    description: "Training costs",
    amount: "Included",
  },
  {
    description: "Any additional costs",
    amount: "None anticipated (subject to scope change)",
  },
  { description: "Total First-Year Investment (Inclusive of Taxes)", amount: "$49,593.75" },
];

export const secondYearInvestment: { description: string; amount: string }[] = [
  {
    description: "Annual Platform Subscription, Support & Maintenance (Inclusive of Taxes)",
    amount: "$22,023.43",
  },
];

export const yearOneIncluded = [
  {
    title: "SAP Integration",
    description:
      "Full connection between DHL's SAP environment and the Motheo Compliance Platform, including mapping and testing.",
  },
  {
    title: "API Configuration",
    description:
      "Secure API setup for automated transaction extraction, validation and submission to Revenue Services Lesotho.",
  },
  {
    title: "Compliance Layer Deployment",
    description:
      "Installation and configuration of compliance rules, tax validation and QR code generation capabilities.",
  },
  {
    title: "Testing & Validation",
    description:
      "End-to-end functional, integration and compliance testing before production go-live.",
  },
  {
    title: "User Training",
    description:
      "Structured training for finance, compliance, IT and management teams across all user roles.",
  },
  {
    title: "Go-Live Support",
    description:
      "Dedicated hypercare during deployment to ensure a smooth transition to live compliance reporting.",
  },
  {
    title: "Managed Services",
    description:
      "Ongoing platform operation, monitoring and support for the full first year of service.",
  },
];

export const annualSubscription = {
  description:
    "Annual Platform Subscription, Support & Maintenance (Inclusive of Taxes)",
  amount: "$22,023.43",
};

export const annualIncludedServices = [
  {
    title: "Platform Licensing",
    description:
      "Continued access to the Motheo Compliance Platform and all core compliance capabilities.",
  },
  {
    title: "Technical Support",
    description:
      "Responsive helpdesk and specialist support for platform, integration and infrastructure issues.",
  },
  {
    title: "Compliance Monitoring",
    description:
      "Ongoing oversight of submission volumes, success rates and reporting performance.",
  },
  {
    title: "Regulatory Updates",
    description:
      "Implementation of changes to Revenue Services Lesotho requirements as they are published.",
  },
  {
    title: "Performance Optimisation",
    description:
      "Proactive tuning of integrations and workflows to maintain reliability at scale.",
  },
  {
    title: "Compliance Advisory",
    description:
      "Guidance on regulatory obligations, reporting practices and platform best use.",
  },
];

export const annualBusinessBenefits = [
  {
    title: "Predictable Costs",
    description:
      "A fixed annual fee gives DHL budget certainty without unexpected licensing or support charges.",
  },
  {
    title: "Continuous Compliance",
    description:
      "Reporting to Revenue Services Lesotho remains aligned with current requirements year on year.",
  },
  {
    title: "Reduced Internal Support Burden",
    description:
      "External expertise handles platform operation, freeing DHL teams to focus on core business.",
  },
  {
    title: "Long-Term Sustainability",
    description:
      "A stable support partnership protects compliance reporting well beyond initial go-live.",
  },
];

export const riskMitigation: { risk: string; mitigation: string }[] = [
  { risk: "SAP Integration Delays", mitigation: "Early Technical Discovery" },
  { risk: "Data Quality Issues", mitigation: "Validation & Cleansing" },
  { risk: "Regulatory Changes", mitigation: "Continuous Monitoring" },
  { risk: "User Adoption", mitigation: "Structured Training" },
  { risk: "Reporting Failures", mitigation: "Retry & Monitoring Mechanisms" },
  { risk: "Operational Disruption", mitigation: "Phased Deployment Approach" },
];

export const governanceControls = [
  {
    title: "Defined Project Governance",
    description:
      "Clear roles, escalation paths and decision-making forums keep the project aligned and accountable.",
  },
  {
    title: "Change Management Procedures",
    description:
      "Controlled processes for scope, configuration and requirement changes reduce delivery risk.",
  },
  {
    title: "Testing & Validation Controls",
    description:
      "Structured test cycles verify integrations, compliance rules and end-to-end reporting workflows.",
  },
  {
    title: "User Acceptance Testing",
    description:
      "Formal UAT sign-off ensures DHL teams validate the solution before production deployment.",
  },
  {
    title: "Go-Live Readiness Reviews",
    description:
      "Pre-launch checkpoints confirm technical, operational and compliance readiness for go-live.",
  },
  {
    title: "Hypercare Support",
    description:
      "Intensive post-deployment support during the critical transition to live compliance reporting.",
  },
];

export const supplierResponses = [
  {
    question:
      "Are you currently accredited by Revenue Services Lesotho to provide Lekuka-compliant solutions?",
    answer:
      "Yes. Infinity Business Dynamics is formally accredited by Revenue Services Lesotho as a supplier of Lekuka-compliant electronic billing solutions. This accreditation confirms that our solution satisfies the technical, security and compliance requirements established under the Revenue Services Lesotho electronic invoicing framework. A copy of the accreditation letter is attached in Appendix A.",
  },
  {
    question: "Have you successfully implemented Lekuka for other taxpayers?",
    answer:
      "Yes. Infinity Business Dynamics has successfully deployed and supported Lekuka-compliant electronic billing solutions within Lesotho. Our implementation experience includes: Electronic Invoicing, Compliance Automation, ERP Integration, Regulatory Reporting, Managed Compliance Services. This experience provides DHL with confidence that the proposed solution is supported by practical implementation expertise.",
  },
  {
    question: "Can your solution integrate with existing ERP/accounting systems?",
    answer:
      "Yes. The Motheo Compliance Platform has been designed specifically to integrate with enterprise systems through secure API-based integration services. Supported integrations include: SAP ERP, SYSPRO ERP, Accounting Platforms, Custom Enterprise Applications. For DHL Express Lesotho, the proposed solution includes a dedicated SAP integration framework that enables seamless transaction exchange between SAP and Revenue Services Lesotho.",
  },
  {
    question: "What is the estimated implementation timeline?",
    answer:
      "The estimated implementation timeline is approximately six to eight weeks. This includes: Discovery & Planning, SAP Integration, Compliance Configuration, Testing & Validation, User Training, Production Deployment.",
  },
  {
    question: "What support model do you offer after implementation?",
    answer:
      "Infinity Business Dynamics provides a comprehensive support model that includes: Application Support, Technical Support, Compliance Monitoring, Incident Management, Regulatory Updates, Performance Monitoring.",
  },
  {
    question: "Are future Lekuka changes included in your support agreement?",
    answer:
      "Yes. Future regulatory changes issued by Revenue Services Lesotho relating to Lekuka compliance are included within the annual support and maintenance agreement. This ensures DHL remains compliant without requiring major redevelopment projects.",
  },
];

export const dhlBusinessValue: { objective: string; outcome: string }[] = [
  { objective: "Compliance", outcome: "Automated Regulatory Reporting" },
  { objective: "Efficiency", outcome: "Reduced Manual Processes" },
  { objective: "Governance", outcome: "Improved Visibility" },
  { objective: "Auditability", outcome: "Complete Transaction Traceability" },
  { objective: "Scalability", outcome: "Future Growth Support" },
];

export const whyInfinityValueCards = [
  { title: "Revenue Services Lesotho Accredited", description: "Accredited provider of Lekuka-compliant electronic billing solutions." },
  { title: "SAP Integration Expertise", description: "Proven experience integrating enterprise business systems with compliance platforms." },
  { title: "Local Presence", description: "Implementation and support resources based within Lesotho." },
  { title: "Dedicated Compliance Platform", description: "Purpose-built architecture designed specifically for regulatory reporting." },
  { title: "Long-Term Support Model", description: "Ongoing support, monitoring and compliance maintenance services." },
  { title: "Proven Delivery Track Record", description: "Successful Lekuka implementations and compliance deployments within Lesotho." },
];

export const conclusionBenefits = [
  { title: "Automated Regulatory Reporting", description: "Reducing manual effort and compliance risk." },
  { title: "Enterprise Integration", description: "Maintaining existing SAP business processes." },
  { title: "Enhanced Visibility", description: "Providing real-time monitoring and reporting." },
  { title: "Improved Audit Readiness", description: "Supporting governance and compliance objectives." },
  { title: "Long-Term Compliance Assurance", description: "Ensuring readiness for future regulatory changes." },
];

export const organisationalCommitments = [
  "Regulatory Compliance",
  "Ethical Business Conduct",
  "Information Security",
  "Data Protection",
  "Service Excellence",
  "Continuous Improvement",
];

export const bankingDetails = [
  { label: "Company Name", value: "Infinity Business Dynamics (Pty) Ltd" },
  { label: "Bank Name", value: "Nedbank Lesotho" },
  { label: "Branch Name", value: "Maseru" },
  { label: "Account Name", value: "INFINITY BUSINESS DYNAMICS PTY LTD" },
  { label: "Account Number", value: "11990152022" },
  { label: "Branch Code", value: "390161" },
  { label: "SWIFT Code", value: "NEDLLSMX" },
  { label: "Account Type", value: "Current Account" },
  { label: "Currency", value: "USD" },
];

export const appendices = [
  {
    id: "APPENDIX A",
    title: "Revenue Services Lesotho Accreditation Letter",
    subtitle: "RSL Accreditation Confirmation",
    purpose:
      "Confirmation of Infinity Business Dynamics' accreditation as a supplier of Lekuka-compliant electronic billing solutions.",
    file: "/appendices/appendix-a-rsl-accreditation-letter.pdf",
  },
  {
    id: "APPENDIX B",
    title: "Motheo Integrator Guide",
    subtitle: "Technical integration reference",
    purpose:
      "Technical API specifications, integration framework and implementation guidelines.",
    file: "/appendices/appendix-b-motheo-integrator-guide.pdf",
  },
  {
    id: "APPENDIX C",
    title: "Tax Clearance Certificate",
    subtitle: "Infinity Business Dynamics (Pty) Ltd",
    purpose: "",
    file: "/appendices/appendix-c-tax-clearance-certificate.pdf",
  },
  {
    id: "APPENDIX D",
    title: "Business Registration Certificate",
    subtitle: "Infinity Business Dynamics (Pty) Ltd",
    purpose: "",
    file: "/appendices/appendix-d-business-registration-certificate.pdf",
  },
  {
    id: "APPENDIX E",
    title: "Banking Confirmation Letter",
    subtitle: "Infinity Business Dynamics (Pty) Ltd",
    purpose: "",
    file: "/appendices/appendix-e-banking-confirmation-letter.pdf",
  },
  {
    id: "APPENDIX F",
    title: "DHL Group Purchasing Terms & Conditions",
    subtitle: "Attached per RFP requirement",
    purpose: "",
    file: "/appendices/appendix-f-dhl-group-purchasing-terms.pdf",
  },
  {
    id: "APPENDIX G",
    title: "DHL Group Supplier Code of Conduct",
    subtitle: "Attached per RFP requirement",
    purpose: "",
    file: "/appendices/appendix-g-dhl-supplier-code-of-conduct.pdf",
  },
  {
    id: "APPENDIX H",
    title: "DHL Group Information Security Code of Practice",
    subtitle: "Attached per RFP requirement",
    purpose: "",
    file: "/appendices/appendix-h-dhl-information-security-code-of-practice.pdf",
  },
  {
    id: "APPENDIX I",
    title: "DHL Framework Agreement Template",
    subtitle: "To be executed upon award",
    purpose: "",
    file: "/appendices/appendix-i-dhl-framework-agreement-template.pdf",
  },
] as const;

export type AppendixItem = (typeof appendices)[number];

export function getAppendixSlideIndex(appendixIndex: number) {
  return APPENDIX_START_SLIDE + appendixIndex;
}

export function getAppendixIndexForSlide(slideIndex: number): number | null {
  if (
    slideIndex < APPENDIX_START_SLIDE ||
    slideIndex >= APPENDIX_START_SLIDE + APPENDIX_COUNT
  ) {
    return null;
  }
  return slideIndex - APPENDIX_START_SLIDE;
}

/** Architecture flow for complement visuals */
export const solutionArchitectureFlow = [
  "DHL Users",
  "SAP ERP",
  "Integration Layer",
  "Motheo Compliance Platform",
  "Lekuka",
  "Revenue Services Lesotho",
];

export const executiveSummaryFlow = {
  current: ["SAP ERP", "Compliance Challenges"],
  future: ["SAP ERP", "Motheo Compliance Layer", "Lekuka", "Automated Compliance"],
};
