/**
 * Enhancesoft proposal content — Technical + Financial (Phase 1 focus).
 * Source of truth for narrative: content/enhancesoft/Enhancesoft-2026-copywrite.md
 */

export const proposalCover = {
  title: "Website Design, Branding & Digital Experience",
  subtitle: "Technical Proposal",
  part: "Part A",
  tagline: "Phase 1 Focus — Corporate Branding and Visual Identity System",
  lede:
    "Understanding of the assignment, the Phase 1 identity programme, and the approach, work plan, and team to deliver it. Recommendations, assumptions, and referees complete this part.",
  preparedFor: "ENHANCESOFT LLC",
  preparedForContact: "Charity Nzuki — Project Management & Organizational Development Lead",
  preparedBy: "BRIAN KIMATHI",
  preparedByTagline: "Website Design, Branding & Digital Experience Consultant",
  location: "Nairobi, Kenya",
  email: "Kimathi67@gmail.com",
  phone: "+254 708 407362",
  website: "brian-portfolio-ecru.vercel.app",
  websiteUrl: "https://brian-portfolio-ecru.vercel.app/",
  date: "August 2026",
  reference: "BK-ES-WBD-2026-001",
  subjectLines: [
    "Website Design, Branding & Digital Experience Consultancy",
    "Technical Proposal + Financial Proposal (USD)",
  ],
} as const;

export const coverLetter = {
  to: "Charity Nzuki",
  toTitle: "Project Management & Organizational Development Lead",
  toOrg: "Enhancesoft LLC",
  fromLine: "Brian Kimathi — Nairobi, Kenya",
  dateLine: "11 August 2026",
  salutation: "Dear Charity,",
  paragraphs: [
    "Thank you for the opportunity to proceed following our introductory discussions. I have reviewed the Terms of Reference and the Design Brief in detail and am pleased to submit this Technical Proposal and Financial Proposal in line with your application requirements.",
    "Enhancesoft needs a cohesive, modern, and scalable brand ecosystem across the corporate presence and the product family: osTicket, osTicket 2.0, SupportDesk, and the Enterprise Appliance, not four disconnected websites. This submission is centred on Phase 1: the brand and visual operating system that later digital work would build on.",
    "I will deliver Phase 1 directly as lead consultant. Indicative duration is 6–8 weeks from kickoff, subject to stakeholder access and the review cadence we agree. I am available to commence on signing, and to execute the NDA required before work begins. Handover and knowledge transfer are included for every awarded phase.",
    "The Technical Proposal sets out understanding of the assignment, consultant profile and relevant experience, approach and methodology, Phase 1 work plan, brand-ecosystem recommendations as invited, team and collaboration, assumptions, and two referees from similar assignments.",
    "The Financial Proposal is in USD. It sets out a fixed Phase 1 quotation by deliverable, high-level planning bands for Phases 2–6, recommended tools and licences, proposed payment gates for alignment at contract, and commercial terms. Later phases remain separate awards.",
    "Portfolio for continuity with our conversations: https://brian-portfolio-ecru.vercel.app/. I look forward to partnering with Enhancesoft on this programme.",
  ],
  closing: "Best regards,",
  signatureName: "Brian Kimathi",
  signatureTagline: "Website Design, Branding & Digital Experience Consultant",
} as const;

export const tableOfContentsSections = [
  {
    section: "Technical Proposal",
    entries: [
      { title: "Cover", page: 1 },
      { title: "Cover Letter", page: 2 },
      { title: "Table of Contents", page: 3 },
      { title: "Understanding the Assignment", page: 4 },
      { title: "About the Consultant", page: 5 },
      { title: "Relevant Experience & Portfolio", page: 6 },
      { title: "Featured Case — InMind OS", page: 7 },
      { title: "Featured Case — MediaPal", page: 8 },
      { title: "Approach & Methodology", page: 9 },
      { title: "Brand Ecosystem Recommendations", page: 10 },
      { title: "Phase 1 Work Plan & Timeline", page: 11 },
      { title: "Phases 2–6 Programme Roadmap", page: 12 },
      { title: "Project Team & Collaboration", page: 13 },
      { title: "Assumptions & References", page: 14 },
    ],
  },
  {
    section: "Financial Proposal",
    entries: [
      { title: "Financial Proposal Overview", page: 15 },
      { title: "Phase 1 Detailed Quotation", page: 16 },
      { title: "Phases 2–6 High-Level Estimates", page: 17 },
      { title: "Tools, Licences & Payment Milestones", page: 18 },
      { title: "Commercial Terms & Closing", page: 19 },
      { title: "Back Cover", page: 20 },
    ],
  },
] as const;

export const understandingIntro = [
  "Enhancesoft is a global customer-support and helpdesk software company, creator of osTicket since 2004 and the SaaS platform SupportSystem / SupportDesk, with headquarters in Alexandria, Louisiana and operations in Eldoret, Kenya.",
  "The Company is evolving its platforms as modern, API-first systems and seeks to refresh corporate and product branding, modernize its digital presence, and communicate its products and value proposition through a cohesive brand ecosystem.",
  "This engagement is phased: Phase 1 establishes the corporate and product visual identity system; subsequent phases deliver the corporate website, product websites, and multimedia assets, each evaluated independently before proceeding.",
] as const;

export const understandingOutcomes = [
  "Unified corporate and product visual identity",
  "Clear brand architecture across the product ecosystem",
  "Reusable guidelines, templates, and asset libraries",
  "Handover-ready files for long-term internal ownership",
] as const;

export const brandPerception = [
  { title: "Modern & innovative", description: "Forward-looking visual language for a global technology company" },
  { title: "Trustworthy & professional", description: "Enterprise-ready credibility without losing approachability" },
  { title: "Technically sophisticated", description: "Clarity for developers, admins, and decision-makers alike" },
  { title: "Reliable & scalable", description: "Secure, dependable presence that holds as the product family grows" },
  { title: "Clean & accessible", description: "Intuitive, usable experiences across digital touchpoints" },
] as const;

export const ecosystemNodes = [
  { title: "osTicket", description: "Open-source help desk" },
  { title: "SupportDesk", description: "SaaS Customer Operations" },
  { title: "Enterprise Appliance", description: "Self-managed deployments" },
  { title: "Corporate Site", description: "Company narrative & talent" },
] as const;

export const consultantProfile = {
  name: "Brian Kimathi",
  title: "Website Design, Branding & Digital Experience Consultant",
  location: "Nairobi, Kenya",
  email: "Kimathi67@gmail.com",
  phone: "+254 708 407362",
  portfolioUrl: "https://brian-portfolio-ecru.vercel.app/",
  summary:
    "Creative Lead and multidisciplinary digital experience consultant with 8 years across brand identity, websites, UI/UX, product storytelling, and visual communication for technology-driven organisations. Based in Nairobi and working with software, SaaS, and digital-product teams that need a coherent brand and a shippable digital presence, not a logo dropped without a system.",
  focus: ["Software", "SaaS", "Digital Products"],
  deliveryStyle:
    "I work in a consultancy style: frame the problem with stakeholders, lock brand architecture and narrative, then produce the identity, guidelines, and assets the client team can own. Reviews, decision logs, and knowledge transfer are part of delivery, not an afterthought at handover.",
  enhancesoftFit:
    "This ToR needs someone who can hold a multi-product ecosystem (Enhancesoft, osTicket, SupportDesk, and the Enterprise Appliance) without flattening product recognition. That is the work I have been doing for SaaS and enterprise brands: parent + product systems, production files, and a handover the internal team can run.",
  credentials: [
    {
      title: "8+ years",
      description:
        "Brand identity, websites, UI/UX, and product storytelling for technology organisations, from discovery workshops through production-ready files.",
    },
    {
      title: "SaaS / AdTech",
      description:
        "Multi-product ecosystems and platform narratives. Closest analogue to osTicket, SupportDesk, and Appliance sitting under one company brand.",
    },
    {
      title: "End-to-end",
      description:
        "Strategy, creative direction, identity systems, templates, and organised handover, not design files left without context or ownership.",
    },
    {
      title: "Collaborative KT",
      description:
        "Workshops, structured reviews, and knowledge transfer with product, marketing, and leadership so the system is usable internally after sign-off.",
    },
    {
      title: "Brand architecture",
      description:
        "Parent and product systems that stay distinct: the Enhancesoft / osTicket / SupportDesk / Appliance problem, not a single-logo job.",
    },
    {
      title: "Web & motion",
      description:
        "Corporate and product websites, UI language, and multimedia so Phases 2–6 can inherit Phase 1 instead of restarting.",
    },
  ],
} as const;

export const torQualificationMap = [
  { title: "Corporate branding", description: "identity systems and production files", inline: true },
  { title: "SaaS / tech websites", description: "modern, responsive, user-centred", inline: true },
  { title: "Multi-product ecosystems", description: "parent brand, distinct product properties", inline: true },
  { title: "UX / UI & accessibility", description: "usable across devices and audiences", inline: true },
  { title: "Web stack & CMS", description: "recommendations at website-phase kickoff", inline: true },
  { title: "Multimedia & assets", description: "templates, iconography, visual systems", inline: true },
] as const;

export const approachSteps = [
  {
    title: "Discovery & brand assessment",
    detail:
      "Audit existing branding, websites, and digital assets; engage stakeholders; deliver a Discovery and Brand Assessment Report with findings and proposed direction.",
  },
  {
    title: "Brand architecture & creative direction",
    detail:
      "Define relationships between Enhancesoft, osTicket, SupportDesk, Enterprise Appliance, and osTicket 2.0, balancing ecosystem cohesion with distinct product positioning.",
  },
  {
    title: "Logo system refinement",
    detail:
      "Refine existing marks where recognition must be preserved; develop Enterprise Appliance identity; deliver full variant sets for digital, print, and merchandise.",
  },
  {
    title: "Visual identity & guidelines",
    detail:
      "Colour, typography, layout, iconography, illustration direction, and a comprehensive Brand Guidelines / Visual Identity Manual.",
  },
  {
    title: "Reusable assets & handover",
    detail:
      "Corporate templates, minimum 20 icons and 10 illustrations, organised asset library, source files, and knowledge transfer to the Enhancesoft team.",
  },
] as const;

export const phase1Gantt = [
  { phase: "Discovery & assessment", duration: "Week 1–2" },
  { phase: "Brand architecture", duration: "Week 2" },
  { phase: "Logo system", duration: "Week 3–4" },
  { phase: "Guidelines draft", duration: "Week 5" },
  { phase: "Templates & library", duration: "Week 6–7" },
  { phase: "Handover & sign-off", duration: "Week 8" },
] as const;

export const approachFacts = [
  {
    title: "5 workstreams",
    description:
      "Discovery, architecture, logo system, guidelines, and reusable assets with knowledge transfer.",
  },
  {
    title: "6–8 weeks",
    description:
      "Indicative Phase 1 window. Bars below assume 8 weeks; kickoff SLA can compress or extend.",
  },
  {
    title: "Brand OS first",
    description:
      "Corporate and product websites in Phases 2–5 inherit this system, with no rediscovery each time.",
  },
] as const;

export const recommendations = [
  {
    title: "Lightweight digital design language in Phase 1",
    description:
      "UI tokens and component principles so Phase 2 website work does not restart visual discovery.",
  },
  {
    title: "Open-source vs commercial brand tension",
    description:
      "Resolve osTicket community trust and SupportDesk enterprise conversion in brand architecture early.",
  },
  {
    title: "Sequence product sites after corporate",
    description:
      "Corporate site anchors the umbrella narrative; product sites inherit approved identity with product-specific positioning.",
  },
  {
    title: "Structured content partnership",
    description:
      "Enhancesoft owns copy; consultant advises on IA, hierarchy, UX writing, and publish support during website phases.",
  },
] as const;

export const phase1ResponseParagraphs = [
  "Brand OS first — Phase 1 locks architecture, marks, guidelines, and a lightweight digital language.",
  "Inherit, don’t restart — later websites reuse that system; no rediscovery each phase.",
  "Community and commercial — osTicket keeps community trust; SupportDesk and the Appliance sell enterprise without looking like a different company.",
  "Corporate site first — product sites then reuse the approved identity with product-specific positioning.",
  "Content partnership — Enhancesoft owns copy; we partner on IA, hierarchy, and publish support.",
] as const;

export const phase1Workstreams = [
  {
    title: "Discovery & Brand Assessment",
    summary: "Audit the current ecosystem and agree direction before any marks move.",
    outputs: [
      "Review of existing branding, websites, products, and digital assets",
      "Stakeholder sessions on business, products, audiences, and intended perception",
      "Category and competitor cues that should inform, not copy, the system",
      "Discovery and Brand Assessment Report with findings and proposed direction",
    ],
  },
  {
    title: "Logo System & Brand Identity",
    summary: "One family of marks that still lets each product keep its recognition.",
    outputs: [
      "Refinement of Enhancesoft, osTicket, and osTicket 2.0 logos",
      "Refinement of SupportDesk logo to the approved rebrand direction",
      "Development of the osTicket Enterprise Appliance identity",
      "Full variant sets for digital, print, and merchandise, production-ready",
    ],
  },
  {
    title: "Brand Guidelines & Visual Identity Manual",
    summary: "The operating rules so internal teams can apply the system without a designer on every file.",
    outputs: [
      "Brand architecture, logo use, colour, typography, imagery, and applications",
      "Do/don’t standards for corporate and product brands",
      "Lightweight digital tokens so website phases inherit the same language",
      "Governance guidance for long-term internal use",
    ],
  },
  {
    title: "Supporting Assets & Handover",
    summary: "Files the Enhancesoft team can own the day after sign-off.",
    outputs: [
      "Reusable templates for decks, docs, and everyday communications",
      "Iconography (minimum 20) and illustrations (minimum 10)",
      "Editable source files and an organised asset library",
      "Knowledge transfer / walkthrough with the Enhancesoft team",
    ],
  },
] as const;

export const phase1Timeline = [
  { week: "1", milestone: "Kickoff, access, discovery intake, and scope alignment with the PMO." },
  { week: "1–2", milestone: "Brand assessment, asset audit, and stakeholder inputs." },
  { week: "2", milestone: "Readout — findings, risks, and proposed brand direction." },
  { week: "3–4", milestone: "Logo system refinement, variants, and review cycles." },
  { week: "5", milestone: "Guidelines draft: architecture, colour, type, and governance." },
  { week: "6–7", milestone: "Templates, icons, illustrations, and the asset library." },
  { week: "8", milestone: "Final packaging, handover walkthrough, and sign-off." },
] as const;

export const engagementPhases = [
  {
    id: 1,
    name: "Corporate Branding and Visual Identity",
    pricing: "detailed" as const,
    summary:
      "Discovery, logo system refinement, brand architecture, visual identity system, guidelines, and handover, the foundation for all subsequent digital work.",
  },
  {
    id: 2,
    name: "Enhancesoft Corporate Website",
    pricing: "high-level" as const,
    summary:
      "Modern, accessible corporate site reflecting brand, products, capabilities, culture, and strategic direction, including documentation, training, and structured handover.",
  },
  {
    id: 3,
    name: "osTicket Website",
    pricing: "high-level" as const,
    summary:
      "Primary open-source help desk property; sets visual language for related osTicket ecosystem sites, including documentation, training, and structured handover.",
  },
  {
    id: 4,
    name: "SupportDesk Website",
    pricing: "high-level" as const,
    summary:
      "Product-led site positioning SupportDesk as a unified Customer Operations Platform, including documentation, training, and structured handover.",
  },
  {
    id: 5,
    name: "osTicket Enterprise Appliance Website",
    pricing: "high-level" as const,
    summary:
      "Enterprise-oriented extension of the osTicket brand for self-managed deployments, including documentation, training, and structured handover.",
  },
  {
    id: 6,
    name: "Visual Communication & Multimedia",
    pricing: "high-level" as const,
    summary:
      "Graphics and multimedia that activate the approved brand across products, sites, and channels, including organised asset library, licensing documentation, and structured handover.",
  },
] as const;

export const programmeRoadmapIntro = [
  "Phase 1 is the brand operating system. Phases 2–6 inherit it. Each later phase is a separate consultancy contract (ToR 8.1), awarded only after Enhancesoft is satisfied with delivery quality and the working relationship.",
  "Corporate site first, then product sites, then multimedia, so the umbrella narrative is locked before osTicket, SupportDesk, and the Appliance take distinct product voices.",
] as const;

export const programmeRoadmap = [
  {
    phase: "Phase 2",
    title: "Corporate website",
    inherits: "Phase 1 marks, digital tokens, and guidelines",
    delivers:
      "Modern, accessible Enhancesoft.com: company narrative, products, capabilities, culture, and talent, plus CMS recommendation, documentation, and handover.",
  },
  {
    phase: "Phase 3",
    title: "osTicket website",
    inherits: "Approved osTicket identity and the same UI language",
    delivers:
      "Primary open-source property that keeps community trust while sitting clearly in the Enhancesoft family, including documentation, training, and handover.",
  },
  {
    phase: "Phase 4",
    title: "SupportDesk website",
    inherits: "SupportDesk mark and commercial positioning from Phase 1",
    delivers:
      "Product-led site for the SaaS Customer Operations Platform: conversion, proof, and a path to trial, without looking like a different company.",
  },
  {
    phase: "Phase 5",
    title: "Enterprise Appliance website",
    inherits: "New Appliance identity designed in Phase 1",
    delivers:
      "Enterprise, self-managed story that extends osTicket without cloning the community site, including documentation, training, and handover.",
  },
  {
    phase: "Phase 6",
    title: "Visual communication & multimedia",
    inherits: "The full approved system across products and channels",
    delivers:
      "Graphics and motion that activate the brand: organised asset library, licensing notes, and structured handover. Can overlap late website phases once the system is signed off.",
  },
] as const;

export const portfolioIntro = [
  "Selected work mapped to corporate branding, SaaS websites, and multi-product digital ecosystems, the same pattern Enhancesoft needs across osTicket, SupportDesk, and the Enterprise Appliance.",
  "Engagements span enterprise (Safaricom), ICT (IBD), product-led SaaS (MediaPal, YellowCard), digital agency (Evolve-Link), and corporate travel (ATS). Case material and the live portfolio: https://brian-portfolio-ecru.vercel.app/",
  "The next pages feature two live cases: InMind OS, a multi-sided product I led as Creative Lead, and MediaPal, a product-led SaaS website at https://mediapal.net/.",
] as const;

export const inmindCase = {
  url: "https://inmind-os.vercel.app/",
  urlLabel: "inmind-os.vercel.app",
  intro: [
    "InMind OS is the fullest expression of how I design a product brand and digital experience as one system: a live product case beyond the public portfolio.",
    "InMind is an operating system for the creator economy: creators, brands, and agencies in one platform for discovery, campaigns, live social performance, and measurable growth. The brief was the same pattern Enhancesoft faces: several audiences, many touchpoints, and tools that do not talk to each other.",
    "I led the brand, product narrative, and frontend (landing page and dashboard) so three sides of the marketplace feel like one company. Live product, still in the build process: https://inmind-os.vercel.app/.",
  ],
  modules: [
    {
      title: "Discover",
      description:
        "Creator matching by audience, location, category, and brand fit, ranked for the brief before reach.",
    },
    {
      title: "Activate",
      description:
        "Campaigns from brief to publish: strategy, recruitment, briefing, production, approval, and go-live.",
    },
    {
      title: "Manage",
      description:
        "One workspace for deliverables, content QA, and creator relationships that compound instead of starting from zero.",
    },
    {
      title: "Measure",
      description:
        "Live social performance across platforms, plus InMind AI that says what to do next, not only what happened.",
    },
  ],
  relevance:
    "Enhancesoft is a parent brand with distinct products: osTicket, SupportDesk, and the Enterprise Appliance. InMind had to hold three audiences without three disconnected sites. Phase 1 is the same job: one visual operating system, distinct product identities, and a digital experience the internal team can own.",
} as const;

export const mediapalCase = {
  url: "https://mediapal.net/",
  urlLabel: "mediapal.net",
  intro: [
    "MediaPal is a live product-led SaaS website for a media-buying platform: identity, narrative, and digital experience working as one system, not a campaign look dropped onto a template.",
    "The brief matches Enhancesoft’s later website phases: a technology parent selling a platform to a sophisticated buyer, with several audiences (advertisers, partners, talent) that still have to feel like one company.",
    "I led brand, product narrative, and the live site so the platform reads as data-driven and global without losing a distinct product voice. Live site: https://mediapal.net/.",
  ],
  modules: [
    {
      title: "Position",
      description:
        "A media-buying platform for data-driven marketers, not a generic ad-tech brochure.",
    },
    {
      title: "Audiences",
      description:
        "Advertisers, partners, and company pages under one identity, with a clear path to login and get started.",
    },
    {
      title: "Experience",
      description:
        "Hero, product story, and proof (reach, publishers, brands) sequenced for conversion, not decoration.",
    },
    {
      title: "System",
      description:
        "Marks, colour, and UI language that hold from the homepage through platform and company pages.",
    },
  ],
  relevance:
    "Enhancesoft’s corporate and product sites will need the same join: a SaaS story, several audiences, and a visual system that Phase 1 can hand into website work without restarting discovery. MediaPal is that pattern, live.",
} as const;

export const portfolioHighlights = [
  {
    client: "MediaPal",
    logo: "mediapal",
    type: "AdTech / SaaS",
    relevance: "Closest analogue: product-led SaaS brand under a technology parent.",
    delivered:
      "Identity, product narrative, and digital experience for a SaaS platform selling to global advertisers. Marks, UI language, and pages so product and parent stay related without collapsing into one logo.",
  },
  {
    client: "Safaricom",
    logo: "safaricom",
    type: "Enterprise / Telecom",
    relevance: "Enterprise quality bar and brand governance across many teams.",
    delivered:
      "Corporate branding and digital communications at scale, with usage standards that hold when several teams ship at once. Templates and lockups so governance is usable, not a PDF nobody opens.",
  },
  {
    client: "YellowCard",
    logo: "yellowcard",
    type: "Fintech / SaaS",
    relevance: "Multi-market product site and visual identity for a growth-stage tech company.",
    delivered:
      "Product-led digital presence: positioning, UI language, and pages built for conversion across markets. Visual identity that travels without rewriting the product story each time.",
  },
  {
    client: "Evolve-Link",
    logo: "evolve",
    type: "Digital agency",
    relevance: "Brand, web, and digital experience as one practice, the same join Enhancesoft needs in later website phases.",
    delivered:
      "Identity, positioning, and the live digital presence for Evolve-Link (evolve-link.com): a Nairobi agency spanning brand, web, and campaigns that still has to feel like one company.",
  },
  {
    client: "IBD",
    logo: "ibd",
    type: "ICT / software",
    relevance: "Closest tech-consultancy analogue: corporate brand plus a live digital presence.",
    delivered:
      "Identity, product narrative, and digital experience for Infinity Business Dynamics (ibd.co.ls): a software and ICT parent that still has to feel like one company across products and services.",
  },
  {
    client: "ATS",
    logo: "ats",
    type: "Corporate travel",
    relevance: "Service-brand storytelling with a named referee (Rashid Kaittany).",
    delivered:
      "Brand and digital storytelling for a corporate travel company, including web and visual systems. Referee: Rashid Kaittany, Managing Director, ATS Travel Kenya.",
  },
] as const;

export const workingModelSteps = [
  {
    title: "Kickoff & discovery workshops",
    description: "Align scope, access, and intended perception with the PMO.",
  },
  {
    title: "Design reviews & feedback cycles",
    description: "Iterate architecture, marks, and guidelines against agreed SLAs.",
  },
  {
    title: "Milestone acceptance",
    description: "Formal sign-off at each gate before the next workstream starts.",
  },
  {
    title: "Handover & KT on every phase",
    description: "Source files, walkthrough, and internal ownership at close.",
  },
] as const;

export const teamIntro = [
  "The proposed project team for Phase 1 is Brian Kimathi as Lead Consultant, a single named practitioner covering strategy, identity, production, and handover. ToR 6.1 notes that required qualifications may be demonstrated by one individual.",
  "I am the single point of contact for the Project Manager as Contract Manager. Discovery workshops, design reviews, and milestone acceptance sit on the same calendar as delivery; there is no separate account team to hand off to.",
  "No part of the assignment will be outsourced or subcontracted without Enhancesoft’s prior written approval (ToR 8.5). Any key-personnel change would follow ToR 8.2. Phase 1 does not require a development or motion specialist; if later website phases are awarded, any additional named personnel would be proposed under that separate contract.",
] as const;

export const proposedTeamRoles = [
  {
    title: "Engagement lead",
    description: "Client liaison, scope, timeline, and final delivery sign-off",
    inline: true as const,
  },
  {
    title: "Discovery & brand strategy",
    description: "Workshops, assessment report, and brand architecture",
    inline: true as const,
  },
  {
    title: "Identity & art direction",
    description: "Logo system, guidelines, and digital design language",
    inline: true as const,
  },
  {
    title: "Production & handover",
    description: "Templates, assets, source files, and knowledge transfer",
    inline: true as const,
  },
] as const;

export const collaborationPoints = [
  "Report to Enhancesoft Project Manager (Contract Manager) with agreed review cadence",
  "Discovery workshops, progress meetings, design reviews, and iterative refinement",
  "Deliverables submitted for review per the proposed workplan; QA against industry best practice",
  "Handover and knowledge transfer included for every phase, not Phase 1 only",
  "Source files, editable assets, documentation, credentials (where applicable), and walkthroughs",
  "Enhancesoft retains ownership of all deliverables upon final acceptance and payment",
] as const;

export const assumptionsIntro = [
  "These assumptions protect the Phase 1 timeline and fee. Where they do not hold, scope, duration, or commercial terms would be reviewed with the Project Manager before work continues.",
] as const;

export const assumptionsList = [
  { title: "Phase 1 boundary", description: "brand and visual identity only; websites sit in later phases", inline: true },
  { title: "Logo refinement", description: "existing marks refined unless discovery approves a fuller rebrand", inline: true },
  { title: "Enterprise Appliance", description: "new identity, not a refinement of an existing mark", inline: true },
  { title: "Remote delivery", description: "Phase 1 is run from Nairobi; travel is not in the fee unless separately quoted", inline: true },
  { title: "Working language", description: "English; Louisiana / Eldoret overlap by appointment with the PMO", inline: true },
  { title: "NDA before kickoff", description: "ToR 8.4 — NDA signed before workshops or source files are shared", inline: true },
  { title: "Review rounds", description: "two cycles per workstream unless a different SLA is agreed at kickoff", inline: true },
  { title: "Review SLAs", description: "feedback turnaround agreed at kickoff so Week 8 stays handover, not catch-up", inline: true },
  { title: "Copy ownership", description: "Enhancesoft owns product and marketing copy; consultant advises on structure and UX writing", inline: true },
  { title: "Trademark & legal", description: "name and mark clearance sits with Enhancesoft; the consultant does not provide legal opinion", inline: true },
  { title: "Font licences", description: "commercial typefaces quoted once approved; not assumed inside the Phase 1 fee until selected", inline: true },
  { title: "Icon & illustration pack", description: "minimum 20 icons and 10 illustrations; volume beyond that is a change of scope", inline: true },
  { title: "Handover on every phase", description: "knowledge transfer is in-scope for each awarded phase, not Phase 1 only", inline: true },
  { title: "IP on payment", description: "ownership of Phase 1 deliverables transfers on final acceptance and full payment (ToR 8.9)", inline: true },
  { title: "Tools", description: "consultant-recommended stack; Enhancesoft has no preferred third-party list", inline: true },
  { title: "Payment gates", description: "milestones proposed against the deliverable breakdown; aligned at contract", inline: true },
] as const;

export const dependenciesList = [
  { title: "Contract signed", description: "Phase 1 starts after the Consultancy Contract is in place (ToR 4.1)", inline: true },
  { title: "NDA executed", description: "signed before workshops or source files are shared (ToR 8.4)", inline: true },
  { title: "Contract Manager", description: "Project Manager available as the decision path for reviews and acceptance", inline: true },
  { title: "Decision path", description: "who can lock architecture and marks if Peter / CEO is not on the review cycle", inline: true },
  { title: "Source files at kickoff", description: "current logos and any guidelines in editable form (AI, EPS, SVG), not PNG-only", inline: true },
  { title: "Access to current properties", description: "live sites, brand folders, and product context for the audit", inline: true },
  { title: "In-scope marks confirmed", description: "Enhancesoft, osTicket, osTicket 2.0, SupportDesk, Enterprise Appliance", inline: true },
  { title: "Product owners", description: "named input for osTicket, SupportDesk, and Appliance so architecture is not PMO-only", inline: true },
  { title: "Reviewers named", description: "who signs architecture, marks, and the manual, so cycles do not stall", inline: true },
  { title: "Workshop dates held", description: "kickoff and discovery slots in the first two weeks, or the 6–8 week window moves", inline: true },
  { title: "Company support", description: "timely information, documentation, and approvals as in ToR 8.7", inline: true },
  { title: "Handover attendees", description: "who on the Enhancesoft side receives knowledge transfer and owns the files after Week 8", inline: true },
] as const;

export const references = [
  {
    label: "Rashid Kaittany",
    org: "ATS Travel Kenya",
    engagement: "Managing Director",
    contact: "+254 721 821505",
    email: "rashid@atstravel.co.ke",
  },
  {
    label: "Fusi Munyolo",
    org: "Infinity Business Dynamics, Lesotho",
    engagement: "Managing Director",
    contact: "+266 6244 3300",
    email: "monyolof@ibd.co.ls",
  },
] as const;

/** @deprecated Use `references` */
export const referencesPlaceholder = references;

/**
 * Nairobi senior creative lead target: KES 320,000 / month.
 * CBK mid-market ~129.4 KES/USD (August 2026) → USD 2,475 per 4-week month.
 * Phase fees = monthly rate × duration. Phase 1 is fixed on the 8-week work plan.
 */
export const MONTHLY_FEE_USD = 2475;

export const phase1QuotationLines = [
  { activity: "Discovery & brand assessment report", amount: 600 },
  { activity: "Brand architecture & creative direction", amount: 575 },
  {
    activity: "Logo system — Enhancesoft, osTicket, osTicket 2.0, SupportDesk, Appliance",
    amount: 1400,
  },
  { activity: "Visual identity manual (incl. digital tokens)", amount: 875 },
  { activity: "Templates, min. 20 icons & 10 illustrations, asset library", amount: 875 },
  { activity: "Packaging, source files, documentation & knowledge transfer", amount: 350 },
  { activity: "Project management & review cycles", amount: 275 },
] as const;

export const phase1Total = phase1QuotationLines.reduce((sum, line) => sum + line.amount, 0);

export const phase1QuotationIntro = [
  "Phase 1 is a fixed fee in USD for the Corporate Branding and Visual Identity System: one overall fee, not day rates. The seven lines below are the full scope.",
  "Indicative duration is 6–8 weeks. Handover and knowledge transfer are in the fee, not extras.",
  "Not included: website build, CMS, hosting, or Phase 6 multimedia. Commercial font licences, if needed, are quoted once typefaces are approved. Payment milestones are proposed on the following slides for Enhancesoft to align at contract.",
] as const;

export const phaseEstimatesHighLevel = [
  {
    phaseId: 1,
    name: engagementPhases[0].name,
    duration: "6–8 weeks",
    estimate: phase1Total,
    estimateLow: null as number | null,
    estimateHigh: null as number | null,
    note: "Detailed quote",
  },
  {
    phaseId: 2,
    name: engagementPhases[1].name,
    duration: "6–8 weeks",
    estimate: null as number | null,
    estimateLow: 3700,
    estimateHigh: 4950,
    note: "Budgetary range",
  },
  {
    phaseId: 3,
    name: engagementPhases[2].name,
    duration: "8–10 weeks",
    estimate: null as number | null,
    estimateLow: 4950,
    estimateHigh: 6200,
    note: "Budgetary range",
  },
  {
    phaseId: 4,
    name: engagementPhases[3].name,
    duration: "10–12 weeks",
    estimate: null as number | null,
    estimateLow: 6200,
    estimateHigh: 7425,
    note: "Budgetary range",
  },
  {
    phaseId: 5,
    name: engagementPhases[4].name,
    duration: "8–10 weeks",
    estimate: null as number | null,
    estimateLow: 4950,
    estimateHigh: 6200,
    note: "Budgetary range",
  },
  {
    phaseId: 6,
    name: engagementPhases[5].name,
    duration: "8–12 weeks",
    estimate: null as number | null,
    estimateLow: 4950,
    estimateHigh: 7425,
    note: "Budgetary range",
  },
] as const;

export const programmeBudgetaryLow =
  phaseEstimatesHighLevel
    .filter((p) => p.phaseId > 1)
    .reduce((sum, p) => sum + (p.estimateLow ?? 0), 0);
export const programmeBudgetaryHigh =
  phaseEstimatesHighLevel
    .filter((p) => p.phaseId > 1)
    .reduce((sum, p) => sum + (p.estimateHigh ?? 0), 0);

export const fullProgrammeLow = phase1Total + programmeBudgetaryLow;
export const fullProgrammeHigh = phase1Total + programmeBudgetaryHigh;

export const phaseEstimatesIntro = [
  "Phases 2–6 are indicative budgetary bands in USD for planning, not a commitment to award, and not a blended programme fee. Each band is the monthly rate × the indicative duration. Sequence and what each phase delivers sit in the technical proposal. Each phase is a separate consultancy contract.",
  "The five lines cover the corporate website, osTicket website, SupportDesk website (including the interactive product demo), Enterprise Appliance website, and multimedia. Handover and knowledge transfer are included in every awarded phase.",
  "Completion of Phase 1 does not select later phases, in line with ToR 8.1. Detailed quotations, CMS, hosting, and production volumes are scoped if Enhancesoft proceeds with that phase.",
] as const;

export const commercialIntro = [
  "ToR 6 asked for assumptions, exclusions, dependencies, and other commercial considerations. Assumptions and dependencies sit earlier in this document. The terms below cover currency, contracts, intellectual property, and what sits outside the Phase 1 fee.",
  "Phase 1 payment gates are proposed on the previous slide against the deliverable breakdown. Enhancesoft may align them at contract stage. The Contract Manager accepts deliverables and approves payments (ToR 7.1).",
  "Handover and knowledge transfer are in the Phase 1 fee and in every later phase that is awarded, not extras. Completion of Phase 1 does not select Phases 2–6 (ToR 8.1). Where an assumption does not hold, scope, duration, or fee is reviewed with the Project Manager before work continues.",
] as const;

export const commercialConsiderations = [
  { title: "Currency", description: "all figures in this proposal are USD", inline: true },
  { title: "Phase 1 fee", description: "fixed USD 4,950 for the identity programme as itemised, not a day-rate retainer", inline: true },
  { title: "Phases 2–6", description: "planning bands only; each awarded phase is a separate contract with its own quotation (ToR 8.1)", inline: true },
  { title: "Payment approval", description: "invoices follow the proposed Phase 1 gates; the Contract Manager approves payments (ToR 7.1)", inline: true },
  { title: "IP transfer", description: "deliverables and source files become Enhancesoft property on final acceptance and full payment (ToR 8.9)", inline: true },
  { title: "Confidentiality", description: "NDA before kickoff; work product is not used in portfolio or publicity without prior written approval (ToR 8.4)", inline: true },
  { title: "Original work", description: "Phase 1 originals; any third-party material is licensed for Enhancesoft’s commercial use (ToR 8.10)", inline: true },
  { title: "Schedule", description: "the 6–8 week plan is adhered to; delays are flagged promptly with mitigation (ToR 8.3)", inline: true },
  { title: "Change of scope", description: "work beyond the seven Phase 1 lines is quoted and agreed before it starts", inline: true },
  { title: "Delivery", description: "Phase 1 is delivered by Brian Kimathi from Nairobi; no subcontracting without prior written approval (ToR 7.2 / 8.5)", inline: true },
] as const;

export const thirdPartyToolsTemplate = [
  {
    name: "Figma (Professional)",
    purpose: "Brand system, guidelines, comments, and inspectable handover",
    cost: null as number | null,
    costLabel: "Included",
    justification:
      "Consultant licence. Shared file for reviews; no extra client seat required unless Enhancesoft wants one.",
  },
  {
    name: "Adobe Creative Cloud",
    purpose: "Logo production and print-ready vectors (AI, SVG, EPS, PDF)",
    cost: null as number | null,
    costLabel: "Included",
    justification:
      "Consultant licence. After Effects is not required until Phase 6.",
  },
  {
    name: "Commercial font licences",
    purpose: "Desktop + webfont rights for approved brand typefaces",
    cost: null as number | null,
    costLabel: "0–800",
    justification:
      "The only likely Phase 1 pass-through. Quoted once typefaces are approved so Enhancesoft owns the licences. USD 0 if we stay on already-licensed or open fonts.",
  },
  {
    name: "Stock photography",
    purpose: "Not required for Phase 1 identity",
    cost: null as number | null,
    costLabel: "Not billed",
    justification:
      "Marks, guidelines, templates, and the minimum 20 icons / 10 illustrations are original. A stock library (Adobe Stock, Getty, Unsplash+) is not needed. If photography is requested later, it is quoted separately.",
  },
  {
    name: "Project tools (Linear, Asana, Jira)",
    purpose: "Internal timeline — not a client deliverable",
    cost: null as number | null,
    costLabel: "Not billed",
    justification:
      "Reviews run in Figma comments, email, and the PMO’s existing cadence. Linear/Asana would be consultant overhead, not a Phase 1 cost to Enhancesoft.",
  },
  {
    name: "CMS / hosting",
    purpose: "Website platform — Phases 2–5 only",
    cost: null as number | null,
    costLabel: "Quoted in Phase 2",
    justification:
      "Not required for Phase 1. Recommended at website-phase kickoff if those phases are awarded.",
  },
] as const;

/** Proposed gates — Charity confirmed these can be aligned to the deliverable breakdown */
export const paymentMilestones = [
  { milestone: "Contract signing / kickoff", pct: "30%", share: 0.3 },
  { milestone: "Approved brand direction & logo system", pct: "40%", share: 0.4 },
  { milestone: "Final guidelines, assets, handover & knowledge transfer", pct: "30%", share: 0.3 },
].map((gate) => ({
  milestone: gate.milestone,
  pct: gate.pct,
  amount: Math.round(phase1Total * gate.share),
}));

export const paymentMilestoneIntro = [
  "These percentages are proposed against the Phase 1 deliverable breakdown and workplan. Enhancesoft may align the gates at contract stage. The amounts below are the Phase 1 fee split, not additional charges.",
  "Invoices follow acceptance, not the calendar. The 40% gate is approved brand direction and the logo system, not a week on the Gantt. Week 8 remains handover and sign-off.",
  "If Phases 2–6 are awarded, each has its own quotation and payment schedule under a separate contract. Phase 1 gates do not carry over.",
] as const;

export const commercialExclusions = [
  { title: "Websites", description: "design, CMS, hosting, and development sit in Phases 2–5", inline: true },
  { title: "Interactive demo", description: "the SupportDesk product teaser is Phase 4, not Phase 1", inline: true },
  { title: "Product UI", description: "in-app / software interface design is outside the identity programme", inline: true },
  { title: "Multimedia", description: "motion, GIFs, and production beyond Phase 1 identity assets sit in Phase 6", inline: true },
  { title: "Stock & media", description: "paid media, photography shoots, and stock libraries unless separately quoted", inline: true },
  { title: "Font licences", description: "commercial typefaces are quoted once approved; not inside the USD 4,950 until selected", inline: true },
  { title: "Extra volume", description: "icons or illustrations beyond the stated minimums are a change of scope", inline: true },
  { title: "Physical production", description: "print runs, apparel, and signage manufacture; files are in scope, fabrication is not", inline: true },
  { title: "Translation", description: "localisation beyond English is not in the Phase 1 fee", inline: true },
  { title: "Travel & retainer", description: "on-site workshops and post-handover support are quoted if requested", inline: true },
] as const;

export const applicationRequirementsChecklist = [
  "Understanding of the assignment and Company objectives",
  "Proposed approach, methodology, and implementation strategy",
  "Work plan and indicative timeline for Phase 1 (and programme view for 2–6)",
  "Proposed project team, roles, and responsibilities",
  "Company profile / CV of proposed personnel",
  "Portfolio: corporate branding, website design & development, multimedia",
  "At least 2 references with contact details",
  "Detailed Phase 1 quotation with activity/deliverable breakdown",
  "High-level budgetary estimates for Phases 2–6",
  "Third-party software, subscriptions, licences — costs and justification",
  "Assumptions, exclusions, dependencies, and commercial considerations",
] as const;

export const financialPlaceholders = {
  currency: "USD",
  phase1Total,
  phase1LineItems: phase1QuotationLines,
  phaseEstimates: phaseEstimatesHighLevel.filter((p) => p.phaseId > 1),
  thirdPartyTools: thirdPartyToolsTemplate,
} as const;

export const deadlines = {
  confirmInterest: "Sent",
  proposalSubmission: "Friday, 14th August 2026 (EOD)",
} as const;

export function formatUsd(amount: number | null): string {
  if (amount == null) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatUsdRange(low: number, high: number): string {
  return `${formatUsd(low)} – ${formatUsd(high)}`;
}

export function formatPhaseEstimate(row: {
  estimate: number | null;
  estimateLow: number | null;
  estimateHigh: number | null;
}): string {
  if (row.estimateLow != null && row.estimateHigh != null) {
    return formatUsdRange(row.estimateLow, row.estimateHigh);
  }
  return formatUsd(row.estimate);
}
