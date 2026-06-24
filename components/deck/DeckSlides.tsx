"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { ASSETS } from "@/lib/assets";
import { DeckCoverFooter } from "@/components/deck/DeckCoverFooter";
import { DeckCoverTitle } from "@/components/deck/DeckCoverHero";
import { DeckAppendixBreaker } from "@/components/deck/DeckAppendixBreaker";
import { IbdContactCard } from "@/components/deck/IbdContactCard";
import { DeckHeaderBrand, SlideEyebrow } from "@/components/deck/SlideEyebrow";
import { ClosingBackdrop } from "@/components/deck/visuals/ClosingBackdrop";
import { ExecutiveSummaryVisual } from "@/components/deck/visuals/ExecutiveSummaryVisual";
import { SolutionArchitectureVisual } from "@/components/deck/visuals/SolutionArchitectureVisual";
import {
  ArchitectureStackVisual,
  FlowStepsVisual,
} from "@/components/deck/visuals/FlowStepsVisual";
import {
  APPENDIX_ICONS,
  BUSINESS_CONTINUITY_FLOW_ICONS,
  CODE_OF_CONDUCT_ICONS,
  CONCLUSION_BENEFIT_ICONS,
  CORE_SERVICE_AREA_ICONS,
  CREDIT_NOTE_STEP_ICONS,
  DASHBOARD_FEATURE_ICONS,
  DATA_FLOW_STEP_ICONS,
  DEBIT_NOTE_STEP_ICONS,
  DELIVERY_PHILOSOPHY_ICONS,
  DESIGN_PRINCIPLE_ICONS,
  DHL_SUCCESS_FACTOR_ICONS,
  EXECUTIVE_BENEFIT_ICONS,
  EXECUTIVE_SUMMARY_OUTCOME_ICONS,
  EXPERIENCE_AREA_ICONS,
  GOVERNANCE_OBJECTIVE_ICONS,
  GOVERNANCE_STRUCTURE_ICONS,
  IMPLEMENTATION_EXPERIENCE_ICONS,
  IMPLEMENTATION_PHASE_ICONS,
  IMPLEMENTATION_STREAM_ICONS,
  INVOICE_PROCESS_ICONS,
  MOTHEO_COMPONENT_ICONS,
  QR_CODE_BENEFIT_ICONS,
  RESILIENCE_FEATURE_ICONS,
  RSL_DHL_BENEFIT_ICONS,
  SAP_ARCHITECTURE_PANEL_ICONS,
  SECURITY_OBJECTIVE_ICONS,
  SOLUTION_COMPONENT_ICONS,
  SUPPORT_SERVICE_ICONS,
  TRAINING_AUDIENCE_ICONS,
  TRANSACTION_TYPE_ICONS,
  TRANSACTION_LIFECYCLE_ICONS,
  WHY_INFINITY_CARD_ICONS,
  WHY_INFINITY_VALUE_ICONS,
  deckIcon,
  mapDeckIcons,
} from "@/components/deck/deck-icons";
import {
  DeckBody,
  DeckBulletList,
  DeckFeatureGrid,
  DeckInsight,
  DeckSectionLabel,
  DeckSlideFrame,
  DeckSlideBodySplit,
  DeckTable,
  DeckTableOfContents,
  DeckTitle,
} from "@/components/deck/DeckSlideFrame";
import {
  accreditationHighlights,
  annualBusinessBenefits,
  annualIncludedServices,
  appendices,
  getAppendixIndexForSlide,
  architecturePrinciples,
  bankingDetails,
  commercialProposal,
  secondYearInvestment,
  conclusionBenefits,
  controlPoints,
  coreServiceAreas,
  creditNoteSteps,
  creditDebitNoteBenefits,
  dashboardFeatures,
  dashboardBenefits,
  dataFlowSteps,
  debitNoteSteps,
  dhlBusinessValue,
  dhlRequirementMatrix,
  dhlSuccessFactors,
  escalationLevels,
  executiveBenefits,
  executiveSummaryOutcomes,
  experienceAreas,
  governanceControls,
  governanceObjectives,
  governanceStructure,
  implementationExperience,
  implementationPhases,
  implementationPrinciples,
  implementationStreams,
  invoiceProcessSteps,
  invoiceProcessBenefits,
  keyMilestones,
  motheoComponents,
  organisationalCommitments,
  projectTeamRoles,
  projectTimeline,
  qrCodeBenefits,
  qrDhlBenefits,
  resilienceFeatures,
  riskMitigation,
  sapArchitecturePanels,
  sapIntegrationActivities,
  securityControls,
  securityBusinessBenefits,
  securityObjectives,
  serviceLevels,
  servicePrinciples,
  solutionComponents,
  supplierResponses,
  supportObjectives,
  supportServices,
  supportedTransactionTypes,
  designPrinciples,
  tableOfContents,
  trainingAudience,
  trainingDeliverables,
  trainingOutcomes,
  transactionLifecycle,
  transactionLifecycleBenefits,
  whyClientsWorkWithUs,
  whyInfinityCards,
  whyInfinityValueCards,
  yearOneIncluded,
} from "@/lib/deck-content";

const RSL_DHL_BENEFITS = [
  {
    title: "Reduced Compliance Risk",
    description:
      "An accredited solution provider reduces implementation and regulatory risk.",
  },
  {
    title: "Proven Compliance Framework",
    description:
      "The solution has been evaluated against Revenue Services Lesotho requirements.",
  },
  {
    title: "Regulatory Alignment",
    description:
      "Designed specifically to support Lekuka compliance obligations.",
  },
  {
    title: "Local Expertise",
    description:
      "Access to local implementation and compliance specialists.",
  },
  {
    title: "Accelerated Deployment",
    description:
      "Accredited status streamlines approval and go-live timelines.",
  },
  {
    title: "Continuous Compliance Assurance",
    description:
      "Ongoing alignment with evolving Revenue Services Lesotho requirements.",
  },
];

const TEAM_EXPERTISE = [
  "SAP Integration — Connecting DHL's ERP environment to the compliance platform.",
  "Enterprise Architecture — Designing secure, scalable integration and data flows.",
  "Compliance Automation — Automating regulatory reporting and validation workflows.",
  "Tax Technology — Applying fiscal rules and tax validation for RSL compliance.",
  "Project Management — Coordinating delivery, governance and stakeholder engagement.",
  "Managed Services — Ongoing platform operation, monitoring and support.",
  "User Enablement — Training and knowledge transfer for DHL teams.",
];

const SOLUTION_BUSINESS_BENEFITS = [
  "Automated Compliance",
  "Reduced Manual Processing",
  "Enhanced Visibility",
  "Improved Audit Readiness",
  "Regulatory Assurance",
];

const TRANSACTION_FLOW_BENEFITS = [
  {
    title: "Full Traceability",
    description: "Complete audit trail from SAP through to RSL submission.",
  },
  {
    title: "Automated Compliance",
    description: "Regulatory reporting handled without manual intervention.",
  },
  {
    title: "Reduced Manual Effort",
    description: "Less administrative work for finance and operations teams.",
  },
  {
    title: "Increased Visibility",
    description: "Real-time status and outcomes across every transaction.",
  },
  {
    title: "Improved Governance",
    description: "Stronger controls, accountability and compliance oversight.",
  },
];

const BUSINESS_CONTINUITY_FLOW = [
  "Failure Detection",
  "Retry Engine",
  "Recovery",
  "Successful Submission",
  "Audit Archive",
];

const DELIVERY_PHILOSOPHY_DETAILS = [
  {
    title: "Simplicity",
    description: "Reducing complexity wherever possible.",
  },
  {
    title: "Reliability",
    description: "Building solutions that organisations can depend on.",
  },
  {
    title: "Compliance",
    description: "Ensuring alignment with regulatory obligations.",
  },
  {
    title: "Sustainability",
    description: "Designing solutions that support long-term business growth.",
  },
];

const CODE_OF_CONDUCT_COMMITMENTS = [
  {
    title: "Legal Compliance",
    description: "Compliance with applicable laws and regulations.",
  },
  {
    title: "Fair Labour Practices",
    description: "Respect for employee rights and workplace standards.",
  },
  {
    title: "Ethical Business Conduct",
    description: "Transparent and responsible business practices.",
  },
  {
    title: "Anti-Corruption Principles",
    description: "Zero tolerance for bribery and unethical conduct.",
  },
];

function SignoffTaglineLogo({ tagline }: { tagline: string }) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [logoWidth, setLogoWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const measure = () => setLogoWidth(el.offsetWidth);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    void document.fonts.ready.then(measure);

    return () => observer.disconnect();
  }, [tagline]);

  return (
    <div>
      <span
        ref={textRef}
        className="inline-block text-[18px] font-medium leading-[1.6] text-[color:var(--gms-text)]"
      >
        {tagline}
      </span>
      {logoWidth != null && logoWidth > 0 && (
        <Image
          src={ASSETS.brands.ibdLogo}
          alt="Infinity Business Dynamics"
          width={2560}
          height={424}
          className="mt-8 h-auto"
          style={{ width: logoWidth }}
        />
      )}
    </div>
  );
}

export function renderDeckSlide(index: number) {
  switch (index) {
    case 0:
      return (
        <DeckSlideFrame index={0} layout="full" backgroundImage={ASSETS.cover} hideFooter>
          <div className="deck-cover-content">
            <div className="deck-cover-lower">
              <div className="deck-cover-title-stack">
                <DeckHeaderBrand />
                <DeckCoverTitle />
              </div>
              <DeckCoverFooter />
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 1:
      return (
        <DeckSlideFrame index={1}>
          <SlideEyebrow index={1} />
          <DeckTitle>Letter of Submission</DeckTitle>
          <div className="space-y-4">
            <div className="text-[18px] font-medium leading-[1.6] text-[color:var(--gms-text)]">
              <p>
                <span className="font-medium text-[color:var(--gms-text)]">To:</span> Sandana
                Armoogum, Purchasing Manager
              </p>
              <p className="mt-1">GBS Procurement Sub-Saharan Africa</p>
              <p>Purchasing Center Mauritius</p>
              <p>Port Louis, Mauritius</p>
              <p>
                <span className="font-medium text-[color:var(--gms-text)]">Email:</span>{" "}
                sandana.armoogum@dhl.com
              </p>
            </div>
            <p className="text-[18px] font-medium leading-[1.6] text-[color:var(--gms-text)]">Dear Sir/Madam,</p>
            <DeckBody>
              Infinity Business Dynamics is pleased to submit this proposal for
              the implementation of a Lekuka-compliant electronic invoicing
              solution for DHL Express Lesotho.
            </DeckBody>
            <DeckBody>
              As Revenue Services Lesotho continues to strengthen fiscal
              transparency through the Lekuka e-Invoicing framework, organisations
              are required to ensure that qualifying transactions are accurately
              reported, validated and monitored in accordance with regulatory
              requirements.
            </DeckBody>
            <DeckBody>
              For DHL Express Lesotho, compliance must be achieved without
              compromising operational efficiency, business continuity or the
              integrity of existing SAP ERP processes.
            </DeckBody>
            <DeckBody>
              To address these requirements, Infinity Business Dynamics proposes
              the implementation of the Motheo Compliance Platform, a Revenue
              Services Lesotho accredited solution designed to automate fiscal
              transaction reporting, QR code generation, compliance validation
              and real-time submission of electronic invoices, credit notes and
              debit notes to the Lekuka platform.
            </DeckBody>
            <DeckBody>
              The proposed solution introduces a dedicated compliance layer
              between DHL&apos;s SAP ERP environment and Revenue Services
              Lesotho, ensuring that regulatory obligations are fulfilled
              automatically while preserving existing business operations.
            </DeckBody>
            <p className="text-[18px] font-medium text-deck-accent">
              The implementation includes:
            </p>
            <DeckBulletList
              items={[
                "SAP ERP Integration",
                "Lekuka API Configuration",
                "Invoice Reporting",
                "Credit Note Reporting",
                "Debit Note Reporting",
                "QR Code Generation",
                "User Training",
                "Testing & Go-Live Support",
                "Managed Support Services",
              ]}
            />
            <DeckBody>
              Infinity Business Dynamics is committed to supporting DHL
              throughout this transformation journey and delivering a solution
              that strengthens compliance, improves visibility and protects
              operational continuity.
            </DeckBody>
            <DeckBody>
              We appreciate the opportunity to submit this proposal and look
              forward to partnering with DHL Express Lesotho.
            </DeckBody>
          </div>
          <div
            className="mt-8 shrink-0 border-t border-[color:var(--gms-border)]"
            aria-hidden
          />
          <div className="h-40 shrink-0" aria-hidden />
          <div className="shrink-0">
            <DeckBody>Yours faithfully,</DeckBody>
            <p className="mt-3 text-[18px] font-semibold text-[color:var(--gms-text)]">
              Infinity Business Dynamics (Pty) Ltd
            </p>
            <SignoffTaglineLogo tagline="Harnessing the Power of Technology" />
          </div>
        </DeckSlideFrame>
      );

    case 2:
      return (
        <DeckSlideFrame index={2}>
          <SlideEyebrow index={2} />
          <div
            className="grid shrink-0 items-end"
            style={{ gridTemplateColumns: "2.25rem 1fr 3rem" }}
          >
            <span aria-hidden />
            <DeckTitle>Proposal Outline</DeckTitle>
            <span className="text-right deck-title-lg">Page</span>
          </div>
          <DeckTableOfContents items={tableOfContents} />
        </DeckSlideFrame>
      );

    case 3:
      return (
        <DeckSlideFrame index={3}>
          <SlideEyebrow index={3} />
          <DeckTitle>Delivering Compliance Without Compromising Operations</DeckTitle>
          <DeckSlideBodySplit visual={<ExecutiveSummaryVisual />}>
            <DeckBody>
              DHL Express Lesotho operates within a sophisticated SAP ERP
              environment that supports mission-critical financial and
              operational processes.
            </DeckBody>
            <DeckBody>
              The introduction of Revenue Services Lesotho&apos;s Lekuka
              e-Invoicing framework requires qualifying transactions to be
              electronically validated, monitored and reported in accordance
              with statutory requirements.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics proposes the implementation of the
              Motheo Compliance Platform as a dedicated compliance gateway
              between SAP ERP and Revenue Services Lesotho.
            </DeckBody>
            <DeckBody>
              The solution enables DHL to achieve full regulatory compliance
              while maintaining existing business processes and operational
              continuity.
            </DeckBody>
            <p className="text-[18px] font-medium text-deck-accent">
              Through this implementation DHL will achieve:
            </p>
            <DeckFeatureGrid
              items={mapDeckIcons(
                executiveSummaryOutcomes,
                EXECUTIVE_SUMMARY_OUTCOME_ICONS,
              )}
            />
            <DeckBody>
              The proposed solution provides DHL Express Lesotho with a secure,
              scalable and enterprise-grade platform designed to support both
              current compliance obligations and future business growth.
            </DeckBody>
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 4:
      return (
        <DeckSlideFrame index={4}>
          <SlideEyebrow index={4} />
          <DeckTitle>Strategic Business Outcomes</DeckTitle>
          <DeckBody>
            The Motheo Compliance Platform delivers measurable business value
            beyond regulatory compliance.
          </DeckBody>
          <div className="mt-4 space-y-5">
            {executiveBenefits.map((benefit, index) => (
              <div key={benefit.title} className="gms-card rounded-2xl p-5">
                <div className="flex items-center gap-6">
                  <div className="min-w-0 flex-1">
                    <p className="text-[17px] font-semibold text-deck-accent">
                      {benefit.title}
                    </p>
                    <p className="mt-2 text-[17px] font-medium leading-relaxed text-[color:var(--gms-text)]">
                      {benefit.intro}
                    </p>
                    <p className="mt-3 text-[12px] font-medium tracking-[0.16em] text-deck-accent uppercase">
                      Expected Outcomes
                    </p>
                    <DeckBulletList items={benefit.outcomes} />
                  </div>
                  <div className="deck-outcome-card__icon-col">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--gms-border)] bg-[color:var(--ibd-gray)] text-deck-accent">
                      {deckIcon(EXECUTIVE_BENEFIT_ICONS[index], "sm")}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DeckSlideFrame>
      );

    case 5:
      return (
        <DeckSlideFrame index={5}>
          <SlideEyebrow index={5} />
          <DeckTitle highlight="Business Objectives">
            Aligning Technology, Compliance and
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              Infinity Business Dynamics understands that DHL Express Lesotho
              requires more than a software implementation.
            </DeckBody>
            <DeckBody>
              The requirement is for a secure, scalable and enterprise-grade
              compliance solution capable of integrating with SAP ERP while
              ensuring continuous compliance with Revenue Services Lesotho
              regulations.
            </DeckBody>
            <DeckBody>
              The proposed solution has been designed directly against
              DHL&apos;s stated requirements and addresses both the technical
              and operational aspects of regulatory compliance.
            </DeckBody>
            <DeckBody>
              The implementation approach focuses on maintaining existing DHL
              business processes while introducing automated compliance
              capabilities that operate transparently alongside SAP.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>DHL Requirement Alignment Matrix</DeckSectionLabel>
            <DeckTable
              headers={["DHL Requirement", "Infinity Business Dynamics Response"]}
              rows={dhlRequirementMatrix.map((r) => [r.requirement, r.response])}
              compact
            />
            <DeckSectionLabel>DHL Success Factors</DeckSectionLabel>
            <DeckFeatureGrid
              uniform
              items={mapDeckIcons(dhlSuccessFactors, DHL_SUCCESS_FACTOR_ICONS)}
            />
          </div>
        </DeckSlideFrame>
      );

    case 6:
      return (
        <DeckSlideFrame index={6}>
          <SlideEyebrow index={6} />
          <DeckTitle highlight="Technology">
            Harnessing the Power of
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              Infinity Business Dynamics is a leading technology solutions
              provider specialising in enterprise software, systems integration,
              compliance automation and managed technology services.
            </DeckBody>
            <DeckBody>
              Our mission is to help organisations leverage technology to improve
              operational efficiency, strengthen governance and achieve
              sustainable business growth.
            </DeckBody>
            <DeckBody>
              We deliver technology solutions that enable organisations to
              modernise operations, automate compliance processes and improve
              decision-making through intelligent digital platforms.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>Core Service Areas</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(coreServiceAreas, CORE_SERVICE_AREA_ICONS)}
            />
            <DeckSectionLabel>Our Approach</DeckSectionLabel>
            <DeckBody>
              We believe technology should do more than meet compliance
              obligations—it should strengthen how organisations operate.
            </DeckBody>
            <DeckBody>
              Our focus is on delivering solutions that create measurable
              operational advantage: greater efficiency, stronger governance and
              improved decision-making.
            </DeckBody>
            <DeckBody>
              This principle guides every solution we design, implement and
              support for our clients.
            </DeckBody>
            <DeckSectionLabel>Why Clients Work With Us</DeckSectionLabel>
            <DeckBulletList items={whyClientsWorkWithUs} />
          </div>
        </DeckSlideFrame>
      );

    case 7:
      return (
        <DeckSlideFrame index={7}>
          <SlideEyebrow index={7} />
          <DeckTitle highlight="Software Provider">
            More Than a
          </DeckTitle>
          <div className="shrink-0 space-y-4">
            <DeckBody>
              DHL requires more than software.
            </DeckBody>
            <DeckBody>
              DHL requires a partner capable of delivering compliance
              transformation, enterprise integration and long-term operational
              success.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics combines technical expertise, regulatory
              knowledge and local support capabilities to deliver successful
              outcomes.
            </DeckBody>
          </div>
          <div className="deck-why-infinity-grid mt-4">
            {whyInfinityCards.map((card, index) => (
              <div key={card.title} className="gms-card rounded-2xl p-5">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--gms-border)] bg-[color:var(--ibd-gray)] text-deck-accent">
                  {deckIcon(WHY_INFINITY_CARD_ICONS[index], "sm")}
                </div>
                <p className="text-[13px] font-medium tracking-[0.16em] text-deck-accent uppercase">
                  {card.title}
                </p>
                <p className="mt-2 text-[17px] font-medium leading-relaxed text-[color:var(--gms-text)]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </DeckSlideFrame>
      );

    case 8:
      return (
        <DeckSlideFrame index={8}>
          <SlideEyebrow index={8} />
          <DeckTitle highlight="Regulatory Assurance">
            Accredited for
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              Revenue Services Lesotho requires taxpayers to utilise approved and
              compliant electronic billing solutions when submitting qualifying
              transactions to the Lekuka platform.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics has received formal accreditation from
              Revenue Services Lesotho as an approved supplier of
              Lekuka-compliant electronic billing solutions.
            </DeckBody>
            <DeckBody>
              This accreditation confirms that the Infinity electronic billing
              solution has met the technical and compliance requirements
              established by Revenue Services Lesotho.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>What This Means for DHL</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(RSL_DHL_BENEFITS, RSL_DHL_BENEFIT_ICONS)}
            />
            <DeckSectionLabel>Accreditation Highlights</DeckSectionLabel>
            <DeckTable
              headers={["Field", "Detail"]}
              rows={accreditationHighlights.map((h) => [h.label, h.value])}
              compact
            />
          </div>
        </DeckSlideFrame>
      );

    case 9:
      return (
        <DeckSlideFrame index={9}>
          <SlideEyebrow index={9} />
          <DeckTitle highlight="Proven Delivery.">
            Experienced Team.
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              Infinity Business Dynamics has assembled a multidisciplinary team
              of business, compliance and integration specialists to ensure
              successful delivery of the DHL Lekuka implementation project.
            </DeckBody>
            <DeckBody>
              The project team combines expertise in:
            </DeckBody>
            <DeckBulletList items={TEAM_EXPERTISE} />
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>Proposed Project Structure</DeckSectionLabel>
            <DeckTable
              headers={["Role", "Responsibility"]}
              rows={projectTeamRoles.map((r) => [r.role, r.responsibility])}
              compact
            />
            <DeckSectionLabel>Implementation Experience</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(
                implementationExperience,
                IMPLEMENTATION_EXPERIENCE_ICONS,
              )}
            />
            <DeckBody>
              DHL requires a partner capable of balancing technical delivery,
              compliance requirements and operational continuity. Infinity
              Business Dynamics brings this combination of expertise to every
              engagement.
            </DeckBody>
          </div>
        </DeckSlideFrame>
      );

    case 10:
      return (
        <DeckSlideFrame index={10}>
          <SlideEyebrow index={10} />
          <DeckTitle highlight="Business Value">
            Delivering Technology Solutions That Drive
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              Infinity Business Dynamics has successfully supported organisations
              across multiple industries with enterprise software, systems
              integration and compliance initiatives.
            </DeckBody>
            <DeckBody>
              Our experience demonstrates our ability to manage projects that
              require both technical expertise and operational understanding.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>Experience Areas</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(experienceAreas, EXPERIENCE_AREA_ICONS)}
            />
            <DeckSectionLabel>Our Delivery Philosophy</DeckSectionLabel>
            <DeckBody>
              Every project is guided by four principles:
            </DeckBody>
            <DeckFeatureGrid
              items={mapDeckIcons(
                DELIVERY_PHILOSOPHY_DETAILS,
                DELIVERY_PHILOSOPHY_ICONS,
              )}
            />
            <DeckSectionLabel>Client References</DeckSectionLabel>
            <DeckBody>References available on request.</DeckBody>
          </div>
        </DeckSlideFrame>
      );

    case 11:
      return (
        <DeckSlideFrame index={11}>
          <SlideEyebrow index={11} />
          <DeckTitle highlight="DHL">
            Enterprise Compliance Architecture for
          </DeckTitle>
          <DeckSlideBodySplit
            visual={<SolutionArchitectureVisual variant="stack" />}
          >
            <DeckBody>
              Infinity Business Dynamics proposes the implementation of the
              Motheo Compliance Platform as a dedicated compliance layer between
              DHL&apos;s SAP ERP environment and Revenue Services Lesotho.
            </DeckBody>
            <DeckBody>
              This architecture ensures compliance obligations are automated
              while preserving existing business operations and workflows.
            </DeckBody>
            <DeckSectionLabel>Solution Components</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(solutionComponents, SOLUTION_COMPONENT_ICONS)}
            />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList items={SOLUTION_BUSINESS_BENEFITS} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 12:
      return (
        <DeckSlideFrame index={12}>
          <SlideEyebrow index={12} />
          <DeckTitle highlight="Compliance Ecosystem">
            A Secure, Scalable and Future-Ready
          </DeckTitle>
          <DeckSlideBodySplit visual={<SolutionArchitectureVisual variant="icon" />}>
            <DeckBody>
              The proposed architecture introduces a dedicated compliance layer
              between SAP ERP and Revenue Services Lesotho.
            </DeckBody>
            <DeckBody>
              This approach ensures compliance obligations are managed
              independently from core ERP processes while preserving existing
              business operations.
            </DeckBody>
            <DeckBody>
              The architecture has been designed around five guiding principles:
            </DeckBody>
            <DeckBulletList items={architecturePrinciples} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 13:
      return (
        <DeckSlideFrame index={13}>
          <SlideEyebrow index={13} />
          <DeckTitle highlight="Business Processes">
            Seamless Integration with Existing
          </DeckTitle>
          <DeckSlideBodySplit visual={<SolutionArchitectureVisual variant="tier" />}>
            <DeckBody>
              The implementation approach focuses on leveraging DHL&apos;s
              existing SAP ERP environment while introducing compliance
              capabilities that operate transparently alongside current business
              processes.
            </DeckBody>
            <DeckBody>
              The solution has been designed to minimise disruption and maximise
              operational continuity.
            </DeckBody>
            <DeckSectionLabel>Integration Activities</DeckSectionLabel>
            <DeckBulletList items={sapIntegrationActivities} />
            <DeckSectionLabel>Expected Outcome</DeckSectionLabel>
            <DeckBody>
              Following deployment, qualifying transactions generated within SAP
              will automatically be processed through the Motheo Compliance
              Platform and submitted to Revenue Services Lesotho.
            </DeckBody>
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 14:
      return (
        <DeckSlideFrame index={14}>
          <SlideEyebrow index={14} />
          <DeckTitle>Enterprise Integration Framework</DeckTitle>
          <DeckSlideBodySplit visual={<SolutionArchitectureVisual variant="badge" />}>
            <DeckBody>
              The integration framework establishes a secure and controlled
              exchange of transaction data between SAP ERP and Revenue Services
              Lesotho.
            </DeckBody>
            <DeckBody>
              All qualifying transactions generated within SAP are routed through
              the Motheo Compliance Platform where validation, fiscal processing
              and regulatory submission occur.
            </DeckBody>
          </DeckSlideBodySplit>
          <div className="mt-4">
            <DeckSectionLabel>Right-Side Panels</DeckSectionLabel>
            <DeckFeatureGrid
              layout="inline"
              items={mapDeckIcons(sapArchitecturePanels, SAP_ARCHITECTURE_PANEL_ICONS)}
            />
          </div>
        </DeckSlideFrame>
      );

    case 15:
      return (
        <DeckSlideFrame index={15}>
          <SlideEyebrow index={15} />
          <DeckTitle highlight="Regulatory Reporting">
            The Compliance Engine Behind
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              The Motheo Compliance Platform serves as the central compliance
              gateway between DHL&apos;s SAP ERP environment and Revenue
              Services Lesotho.
            </DeckBody>
            <DeckBody>
              The platform is specifically designed to separate compliance
              requirements from DHL&apos;s operational systems, enabling
              regulatory reporting to be managed independently without disrupting
              existing business processes.
            </DeckBody>
            <DeckBody>
              By introducing a dedicated compliance layer, DHL benefits from
              increased visibility, reduced complexity and improved control over
              compliance activities.
            </DeckBody>
            <DeckBody>
              The platform automates transaction validation, reporting,
              monitoring and audit management while maintaining seamless
              connectivity with SAP ERP.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>Core Platform Components</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(motheoComponents, MOTHEO_COMPONENT_ICONS)}
            />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList
              items={[
                "Reduced Compliance Risk",
                "Increased Reliability",
                "Improved Visibility",
                "Enhanced Audit Readiness",
                "Future Regulatory Flexibility",
              ]}
            />
          </div>
        </DeckSlideFrame>
      );

    case 16:
      return (
        <DeckSlideFrame index={16}>
          <SlideEyebrow index={16} />
          <DeckTitle highlight="Transaction Processing">
            End-to-End
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              The Motheo Compliance Platform acts as the central compliance
              gateway between SAP ERP and Revenue Services Lesotho.
            </DeckBody>
            <DeckBody>
              Every qualifying transaction generated within SAP follows a
              structured processing path that ensures compliance, traceability
              and reporting accuracy.
            </DeckBody>
            <DeckBody>
              This architecture enables DHL to maintain SAP as the system of
              record while centralising compliance activities within a dedicated
              platform.
            </DeckBody>
          </div>
          <div className="deck-slide-flow-block mt-4">
            <DeckSectionLabel>Transaction Flow</DeckSectionLabel>
            <FlowStepsVisual
              steps={dataFlowSteps}
              columns={2}
              icons={DATA_FLOW_STEP_ICONS}
              fill
            />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList items={TRANSACTION_FLOW_BENEFITS} />
          </div>
        </DeckSlideFrame>
      );

    case 17:
      return (
        <DeckSlideFrame index={17}>
          <SlideEyebrow index={17} />
          <DeckTitle highlight="Enterprise Reliability">
            Designed for
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              The Motheo Compliance Platform utilises secure APIs and automated
              workflows to support the submission and management of fiscal
              transactions.
            </DeckBody>
            <DeckBody>
              The framework has been designed to support enterprise transaction
              volumes while maintaining compliance, security and operational
              resilience.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>Supported Transaction Types</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(
                supportedTransactionTypes,
                TRANSACTION_TYPE_ICONS,
              )}
            />
            <DeckSectionLabel>Design Principles</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(designPrinciples, DESIGN_PRINCIPLE_ICONS)}
            />
          </div>
        </DeckSlideFrame>
      );

    case 18:
      return (
        <DeckSlideFrame index={18}>
          <SlideEyebrow index={18} />
          <DeckTitle highlight="Regulatory Acceptance">
            From SAP to
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              Every qualifying transaction follows a controlled workflow that
              ensures compliance, traceability and successful submission to
              Revenue Services Lesotho.
            </DeckBody>
            <DeckBody>
              The workflow has been designed to minimise operational risk while
              providing complete visibility into reporting activities.
            </DeckBody>
          </div>
          <div className="deck-slide-flow-block mt-4">
            <DeckSectionLabel>Transaction Lifecycle</DeckSectionLabel>
            <FlowStepsVisual
              steps={transactionLifecycle.map((t, i) => ({
                step: String(i + 1).padStart(2, "0"),
                title: t,
              }))}
              columns={2}
              icons={TRANSACTION_LIFECYCLE_ICONS}
              fill
            />
            <DeckSectionLabel>Control Points</DeckSectionLabel>
            <DeckBulletList items={controlPoints} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList items={transactionLifecycleBenefits} />
          </div>
        </DeckSlideFrame>
      );

    case 19:
      return (
        <DeckSlideFrame index={19}>
          <SlideEyebrow index={19} />
          <DeckTitle highlight="Invoice Compliance">
            Automated
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              The proposed solution automatically captures qualifying invoices
              generated within SAP and processes them through the Motheo
              Compliance Platform.
            </DeckBody>
            <DeckBody>
              The workflow eliminates manual reporting activities while improving
              consistency, visibility and compliance.
            </DeckBody>
          </div>
          <div className="deck-slide-flow-block mt-4">
            <DeckSectionLabel>Invoice Process</DeckSectionLabel>
            <FlowStepsVisual
              steps={invoiceProcessSteps.map((s, i) => ({
                step: String(i + 1).padStart(2, "0"),
                title: s,
              }))}
              columns={2}
              icons={INVOICE_PROCESS_ICONS}
              fill
            />
            <DeckSectionLabel>Benefits</DeckSectionLabel>
            <DeckBulletList items={invoiceProcessBenefits} />
          </div>
        </DeckSlideFrame>
      );

    case 20:
      return (
        <DeckSlideFrame index={20}>
          <SlideEyebrow index={20} />
          <DeckTitle highlight="Confidence">
            Managing Transaction Adjustments with
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              Credit notes and debit notes are important components of fiscal
              reporting and require the same level of governance and traceability
              as invoices.
            </DeckBody>
            <DeckBody>
              The Motheo Compliance Platform automatically validates, processes
              and reports transaction adjustments in accordance with Revenue
              Services Lesotho requirements.
            </DeckBody>
          </div>
          <div className="deck-slide-flow-block mt-4">
            <div className="grid min-h-0 flex-1 grid-cols-2 gap-6">
              <div className="flex min-h-0 flex-1 flex-col gap-3">
                <DeckSectionLabel>Credit Note Process</DeckSectionLabel>
                <FlowStepsVisual
                  steps={creditNoteSteps.map((s, i) => ({
                    step: String(i + 1).padStart(2, "0"),
                    title: s,
                  }))}
                  columns={1}
                  icons={CREDIT_NOTE_STEP_ICONS}
                  fill
                />
              </div>
              <div className="flex min-h-0 flex-1 flex-col gap-3">
                <DeckSectionLabel>Debit Note Process</DeckSectionLabel>
                <FlowStepsVisual
                  steps={debitNoteSteps.map((s, i) => ({
                    step: String(i + 1).padStart(2, "0"),
                    title: s,
                  }))}
                  columns={1}
                  icons={DEBIT_NOTE_STEP_ICONS}
                  fill
                />
              </div>
            </div>
            <DeckSectionLabel>Benefits</DeckSectionLabel>
            <DeckBulletList items={creditDebitNoteBenefits} />
          </div>
        </DeckSlideFrame>
      );

    case 21:
      return (
        <DeckSlideFrame index={21}>
          <SlideEyebrow index={21} />
          <DeckTitle highlight="Fiscal Verification">
            Enabling
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              Revenue Services Lesotho requires fiscal documents to contain
              compliant QR codes that enable verification of reported
              transactions.
            </DeckBody>
            <DeckBody>
              The Motheo Compliance Platform automatically generates and
              validates QR codes for all qualifying transactions.
            </DeckBody>
            <DeckBody>
              This functionality ensures that DHL&apos;s fiscal documents meet
              regulatory requirements while reducing administrative effort.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>QR Code Benefits</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(qrCodeBenefits, QR_CODE_BENEFIT_ICONS)}
            />
            <DeckSectionLabel>DHL Benefits</DeckSectionLabel>
            <DeckBulletList items={qrDhlBenefits} />
          </div>
        </DeckSlideFrame>
      );

    case 22:
      return (
        <DeckSlideFrame index={22}>
          <SlideEyebrow index={22} />
          <DeckTitle highlight="Compliance Operations">
            Real-Time Visibility into
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              The Motheo Compliance Platform provides DHL with a centralised
              monitoring environment for managing compliance activities.
            </DeckBody>
            <DeckBody>
              Users gain visibility into transaction volumes, reporting status,
              exceptions and overall compliance performance.
            </DeckBody>
            <DeckBody>
              This visibility enables proactive management of compliance
              obligations and rapid resolution of issues.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>Dashboard Features</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(dashboardFeatures, DASHBOARD_FEATURE_ICONS)}
            />
            <DeckSectionLabel>Benefits</DeckSectionLabel>
            <DeckBulletList items={dashboardBenefits} />
          </div>
        </DeckSlideFrame>
      );

    case 23:
      return (
        <DeckSlideFrame index={23}>
          <SlideEyebrow index={23} />
          <DeckTitle highlight="Data Protection">
            Enterprise-Grade Security and
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              DHL operates within an environment where information security,
              data integrity and operational resilience are essential business
              requirements.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics has designed the proposed solution
              using recognised security principles and industry best practices.
            </DeckBody>
            <DeckBody>
              The Motheo Compliance Platform incorporates security controls that
              protect information throughout its lifecycle while supporting
              DHL&apos;s governance requirements.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>Security Objectives</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(securityObjectives, SECURITY_OBJECTIVE_ICONS)}
            />
            <DeckSectionLabel>Security Controls</DeckSectionLabel>
            <DeckBulletList items={securityControls} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList items={securityBusinessBenefits} />
          </div>
        </DeckSlideFrame>
      );

    case 24:
      return (
        <DeckSlideFrame index={24}>
          <SlideEyebrow index={24} />
          <DeckTitle highlight="Operational Disruptions">
            Maintaining Compliance During
          </DeckTitle>
          <DeckSlideBodySplit
            visual={
              <ArchitectureStackVisual
                items={BUSINESS_CONTINUITY_FLOW}
                icons={BUSINESS_CONTINUITY_FLOW_ICONS}
              />
            }
          >
            <DeckBody>
              Compliance reporting is a business-critical activity that must
              continue even when unexpected technical issues occur.
            </DeckBody>
            <DeckBody>
              The Motheo Compliance Platform incorporates resilience mechanisms
              designed to maximise transaction delivery success and minimise
              operational disruption.
            </DeckBody>
            <DeckSectionLabel>Resilience Features</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(resilienceFeatures, RESILIENCE_FEATURE_ICONS)}
            />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList
              items={[
                "Increased Reliability",
                "Reduced Downtime Risk",
                "Continuous Compliance",
                "Improved Stability",
              ]}
            />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 25:
      return (
        <DeckSlideFrame index={25}>
          <SlideEyebrow index={25} />
          <DeckTitle highlight="Controlled Delivery.">
            Strong Governance.
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              Successful compliance implementations require more than technology.
              They require clear governance, accountability and stakeholder
              engagement throughout the project lifecycle.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics applies a structured governance
              framework designed to ensure project transparency, timely
              decision-making and successful delivery outcomes.
            </DeckBody>
            <DeckBody>
              The governance structure provides oversight, risk management and
              communication channels that keep all stakeholders aligned
              throughout the implementation.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>Governance Objectives</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(
                governanceObjectives,
                GOVERNANCE_OBJECTIVE_ICONS,
              )}
            />
            <DeckSectionLabel>Governance Structure</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(
                governanceStructure,
                GOVERNANCE_STRUCTURE_ICONS,
              )}
            />
          </div>
        </DeckSlideFrame>
      );

    case 26:
      return (
        <DeckSlideFrame index={26}>
          <SlideEyebrow index={26} />
          <DeckTitle highlight="Delivery Framework">
            Proven Enterprise
          </DeckTitle>
          <DeckBody>
            Infinity Business Dynamics follows a structured implementation
            methodology designed to minimise risk, accelerate delivery and
            ensure successful adoption.
          </DeckBody>
          <DeckBody>
            The methodology incorporates best practices in enterprise software
            implementation, compliance transformation and systems integration.
          </DeckBody>
          <div className="mt-4 space-y-4">
            {implementationPhases.map((phase, index) => (
              <div key={phase.phase} className="gms-card rounded-2xl p-5">
                <div className="flex items-center gap-6">
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-semibold tracking-[0.12em] text-deck-accent uppercase">
                      {phase.phase}
                    </p>
                    <p className="mt-1 text-[16px] font-medium text-[color:var(--gms-text)]">
                      {phase.summary}
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[11px] font-medium tracking-[0.16em] text-deck-accent uppercase">
                          Activities
                        </p>
                        <DeckBulletList items={phase.activities} />
                      </div>
                      <div>
                        <p className="text-[11px] font-medium tracking-[0.16em] text-deck-accent uppercase">
                          Deliverables
                        </p>
                        <DeckBulletList items={phase.deliverables} />
                      </div>
                    </div>
                  </div>
                  <div className="deck-outcome-card__icon-col">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--gms-border)] bg-[color:var(--ibd-gray)] text-deck-accent">
                      {deckIcon(IMPLEMENTATION_PHASE_ICONS[index], "sm")}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DeckSlideFrame>
      );

    case 27:
      return (
        <DeckSlideFrame index={27}>
          <SlideEyebrow index={27} />
          <DeckTitle highlight="Delivery Approach">
            Structured
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              The implementation approach focuses on leveraging DHL&apos;s
              existing SAP environment while introducing automated compliance
              capabilities that operate transparently alongside current business
              processes.
            </DeckBody>
            <DeckBody>
              The project will be executed using a phased approach to minimise
              operational risk and maximise stakeholder engagement.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>Implementation Streams</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(
                implementationStreams,
                IMPLEMENTATION_STREAM_ICONS,
              )}
            />
            <DeckSectionLabel>Implementation Principles</DeckSectionLabel>
            <DeckBulletList items={implementationPrinciples} />
          </div>
        </DeckSlideFrame>
      );

    case 28:
      return (
        <DeckSlideFrame index={28}>
          <SlideEyebrow index={28} />
          <DeckTitle highlight="Delivery Schedule">
            Proposed
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              The implementation is expected to be completed within six to eight
              weeks, subject to timely access to systems, stakeholders and
              project approvals.
            </DeckBody>
            <DeckBody>
              The schedule follows the phased delivery framework, progressing from
              discovery and design through build, validation and controlled
              go-live—with clear milestones at each stage.
            </DeckBody>
            <DeckBody>
              Timelines assume prompt availability of key stakeholders, SAP
              environments and governance sign-off; delays in access or approvals
              may extend the schedule accordingly.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckTable
              headers={["Phase", "Duration"]}
              rows={projectTimeline.map((t) => [t.phase, t.duration])}
              compact
            />
            <DeckSectionLabel>Key Milestones</DeckSectionLabel>
            <DeckTable
              headers={["Milestone", "Timing"]}
              rows={keyMilestones.map((m) => [m.milestone, m.timing])}
              compact
            />
          </div>
        </DeckSlideFrame>
      );

    case 29:
      return (
        <DeckSlideFrame index={29}>
          <SlideEyebrow index={29} />
          <DeckTitle highlight="Organisational Readiness">
            Building
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              Technology adoption is critical to achieving long-term compliance
              success.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics provides structured training and
              knowledge transfer programmes to ensure DHL personnel are fully
              equipped to operate and support the solution.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>Training Audience</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(trainingAudience, TRAINING_AUDIENCE_ICONS)}
            />
            <DeckSectionLabel>Training Deliverables</DeckSectionLabel>
            <DeckBulletList items={trainingDeliverables} />
            <DeckSectionLabel>Expected Outcomes</DeckSectionLabel>
            <DeckBulletList items={trainingOutcomes} />
          </div>
        </DeckSlideFrame>
      );

    case 30:
      return (
        <DeckSlideFrame index={30}>
          <SlideEyebrow index={30} />
          <DeckTitle highlight="Compliance Assurance">
            Long-Term
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              Infinity Business Dynamics provides comprehensive support services
              designed to ensure the continued success of DHL&apos;s compliance
              environment.
            </DeckBody>
            <DeckBody>
              The support model combines technical expertise, compliance
              knowledge and operational monitoring.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>Support Services</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(supportServices, SUPPORT_SERVICE_ICONS)}
            />
            <DeckSectionLabel>Support Objectives</DeckSectionLabel>
            <DeckBulletList items={supportObjectives} />
          </div>
        </DeckSlideFrame>
      );

    case 31:
      return (
        <DeckSlideFrame index={31}>
          <SlideEyebrow index={31} />
          <DeckTitle highlight="Service Excellence">
            Commitment to
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              Infinity Business Dynamics is committed to providing responsive and
              professional support services aligned with enterprise operational
              requirements.
            </DeckBody>
            <DeckBody>
              Our support framework defines clear response times, escalation paths
              and service principles so DHL always knows who to contact, how
              quickly issues will be addressed and what to expect at each stage.
            </DeckBody>
            <DeckBody>
              The model is designed for a business-critical compliance environment—
              combining helpdesk coverage, technical expertise and compliance
              specialists to protect reporting continuity beyond go-live.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>Service Levels</DeckSectionLabel>
            <DeckTable
              headers={["Priority", "Description", "Response Time"]}
              rows={serviceLevels.map((s) => [
                s.priority,
                s.description,
                s.response,
              ])}
              compact
            />
            <DeckSectionLabel>Escalation Model</DeckSectionLabel>
            <DeckBulletList items={escalationLevels} />
            <DeckSectionLabel>Service Principles</DeckSectionLabel>
            <DeckBulletList items={servicePrinciples} />
          </div>
        </DeckSlideFrame>
      );

    case 32:
      return (
        <DeckSlideFrame index={32}>
          <SlideEyebrow index={32} />
          <DeckTitle highlight="Summary">
            Investment
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              Infinity Business Dynamics proposes a commercial model that
              combines implementation services, SAP integration, compliance
              enablement and managed support.
            </DeckBody>
            <DeckBody>
              The investment is structured to deliver a complete compliance
              capability—from project delivery through to ongoing platform
              operation—without hidden costs or separate licensing surprises.
            </DeckBody>
            <DeckBody>
              Year-one pricing covers everything required to go live and sustain
              reporting to Revenue Services Lesotho, giving DHL predictable costs
              and a clear view of total value.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>Commercial Proposal (Requested Cost Categories)</DeckSectionLabel>
            <DeckTable
              headers={["Description", "Amount (USD)"]}
              rows={commercialProposal.map((r) => [r.description, r.amount])}
              featured
              emphasizeLastRow
            />
            <DeckBody>All amounts are inclusive of applicable taxes.</DeckBody>
            <DeckSectionLabel>Included in Year One</DeckSectionLabel>
            <DeckBulletList items={yearOneIncluded} />
          </div>
        </DeckSlideFrame>
      );

    case 33:
      return (
        <DeckSlideFrame index={33}>
          <SlideEyebrow index={33} />
          <DeckTitle highlight="Long-Term Compliance">
            Sustaining
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              Compliance is an ongoing operational requirement that requires
              continuous maintenance, monitoring and adaptation.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics provides a comprehensive annual support
              model that ensures DHL remains compliant as Revenue Services
              Lesotho requirements evolve.
            </DeckBody>
            <DeckBody>
              Beyond the first year, DHL benefits from a predictable annual
              subscription covering platform access, technical support, compliance
              monitoring and regulatory updates—protecting reporting continuity
              without the cost of a new implementation.
            </DeckBody>
            <DeckBody>
              The support model is designed to reduce internal burden while
              giving finance and compliance teams confidence that obligations to
              Revenue Services Lesotho are met year after year.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>Second Year Onwards</DeckSectionLabel>
            <DeckTable
              headers={["Description", "Amount (USD)"]}
              rows={secondYearInvestment.map((r) => [r.description, r.amount])}
              featured
              emphasizeLastRow
            />
            <DeckSectionLabel>Included Services</DeckSectionLabel>
            <DeckBulletList items={annualIncludedServices} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList items={annualBusinessBenefits} />
          </div>
        </DeckSlideFrame>
      );

    case 34:
      return (
        <DeckSlideFrame index={34}>
          <SlideEyebrow index={34} />
          <DeckTitle highlight="Compliance Risk">
            Managing Delivery and
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              Infinity Business Dynamics understands that successful compliance
              projects require effective governance and proactive risk
              management.
            </DeckBody>
            <DeckBody>
              The proposed implementation incorporates controls designed to
              minimise project risk and maximise delivery success.
            </DeckBody>
            <DeckBody>
              Key risks have been identified upfront, with defined mitigation
              measures and governance controls applied throughout delivery.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>Key Risks &amp; Mitigation</DeckSectionLabel>
            <DeckTable
              headers={["Risk", "Mitigation"]}
              rows={riskMitigation.map((r) => [r.risk, r.mitigation])}
              compact
            />
            <DeckSectionLabel>Governance Controls</DeckSectionLabel>
            <DeckBulletList items={governanceControls} />
          </div>
        </DeckSlideFrame>
      );

    case 35:
      return (
        <DeckSlideFrame index={35}>
          <SlideEyebrow index={35} />
          <DeckTitle>DHL Supplier Questionnaire Response</DeckTitle>
          <DeckBody>
            Infinity Business Dynamics appreciates the opportunity to respond to
            DHL Express Lesotho&apos;s supplier evaluation questions.
          </DeckBody>
          <DeckBody>
            The following responses address the specific requirements outlined
            within the Request for Proposal.
          </DeckBody>
          <div className="mt-4 space-y-5">
            {supplierResponses.map((item, index) => (
              <div key={item.question} className="gms-card rounded-2xl p-5">
                <p className="text-[17px] font-semibold italic leading-relaxed text-[color:var(--gms-text)]">
                  Q {index + 1}. {item.question}
                </p>
                <p className="mt-1 text-[12px] font-medium tracking-[0.14em] text-deck-accent uppercase">
                  Response
                </p>
                <p className="mt-2 text-[17px] font-medium leading-relaxed text-[color:var(--gms-text)]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </DeckSlideFrame>
      );

    case 36:
      return (
        <DeckSlideFrame index={36}>
          <SlideEyebrow index={36} />
          <DeckTitle highlight="DHL Standards">
            Commitment to
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              Infinity Business Dynamics recognises the importance of governance,
              compliance, ethics and information security within DHL&apos;s
              supplier ecosystem.
            </DeckBody>
            <DeckBody>
              We confirm our commitment to operating in accordance with
              DHL&apos;s procurement and supplier governance requirements.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <div className="gms-card rounded-2xl p-5">
              <p className="text-[18px] font-semibold text-deck-accent">
                DHL Group Purchasing Terms &amp; Conditions
              </p>
              <p className="mt-2 text-[17px] font-medium leading-relaxed text-[color:var(--gms-text)]">
                Infinity Business Dynamics confirms acceptance of the DHL Group
                Purchasing Terms &amp; Conditions, subject to final contract
                execution and mutual agreement.
              </p>
            </div>
            <div className="gms-card rounded-2xl p-5">
              <p className="text-[18px] font-semibold text-deck-accent">
                DHL Group Supplier Code of Conduct
              </p>
              <p className="mt-2 text-[17px] font-medium leading-relaxed text-[color:var(--gms-text)]">
                Infinity Business Dynamics confirms adherence to ethical
                business practices and responsible corporate conduct.
              </p>
              <p className="mt-2 text-[14px] text-[color:var(--gms-text-muted)]">
                Our organisation is committed to:
              </p>
              <DeckFeatureGrid
                items={mapDeckIcons(
                  CODE_OF_CONDUCT_COMMITMENTS,
                  CODE_OF_CONDUCT_ICONS,
                )}
              />
            </div>
            <div className="gms-card rounded-2xl p-5">
              <p className="text-[18px] font-semibold text-deck-accent">
                DHL Information Security Code of Practice
              </p>
              <p className="mt-2 text-[17px] font-medium leading-relaxed text-[color:var(--gms-text)]">
                Infinity Business Dynamics confirms its commitment to
                maintaining appropriate information security controls designed to
                protect DHL information assets and support secure service
                delivery.
              </p>
            </div>
            <div className="gms-card rounded-2xl p-5">
              <p className="text-[18px] font-semibold text-deck-accent">
                Framework Agreement
              </p>
              <p className="mt-2 text-[17px] font-medium leading-relaxed text-[color:var(--gms-text)]">
                Infinity Business Dynamics confirms its willingness to enter into
                the DHL Framework Agreement subject to final contractual review
                and mutual agreement between both parties.
              </p>
            </div>
            <DeckSectionLabel>Organisational Commitments</DeckSectionLabel>
            <DeckBulletList
              items={organisationalCommitments.map((c) => `✓ ${c}`)}
            />
          </div>
        </DeckSlideFrame>
      );

    case 37:
      return (
        <DeckSlideFrame index={37}>
          <SlideEyebrow index={37} />
          <DeckTitle highlight="Compliance Transformation">
            A Strategic Partner for
          </DeckTitle>
          <div className="space-y-4">
            <DeckBody>
              DHL requires more than a software provider.
            </DeckBody>
            <DeckBody>
              DHL requires a partner capable of delivering regulatory compliance,
              enterprise integration, operational continuity and long-term
              support.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics brings together regulatory expertise,
              SAP integration capability and local support resources to deliver a
              solution specifically designed for DHL&apos;s requirements.
            </DeckBody>
          </div>
          <div className="mt-4 space-y-4">
            <DeckSectionLabel>Why Infinity</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons(
                whyInfinityValueCards,
                WHY_INFINITY_VALUE_ICONS,
              )}
            />
            <DeckSectionLabel>DHL Business Value</DeckSectionLabel>
            <DeckTable
              headers={["DHL Objective", "Infinity Outcome"]}
              rows={dhlBusinessValue.map((r) => [r.objective, r.outcome])}
              compact
            />
            <DeckSectionLabel>Our Commitment</DeckSectionLabel>
            <DeckBody>
              We are committed to delivering a solution that enables DHL Express
              Lesotho to meet regulatory obligations confidently while
              maintaining operational excellence and business continuity.
            </DeckBody>
          </div>
        </DeckSlideFrame>
      );

    case 38:
      return (
        <DeckSlideFrame index={38} showParticles>
          <SlideEyebrow index={38} />
          <ClosingBackdrop>
            <div className="flex w-full flex-col gap-5 text-left">
              <DeckTitle highlight="Confidence">
                Delivering Compliance with
              </DeckTitle>
              <DeckBody>
                The implementation of a Lekuka-compliant electronic invoicing
                solution represents a strategic investment in compliance,
                governance and operational efficiency.
              </DeckBody>
              <DeckBody>
                Infinity Business Dynamics proposes a secure, scalable and fully
                compliant solution that integrates seamlessly with DHL&apos;s SAP
                ERP environment while supporting the reporting requirements of
                Revenue Services Lesotho.
              </DeckBody>
              <p className="text-[18px] font-medium text-deck-accent">
                Through the implementation of the Motheo Compliance Platform,
                DHL will benefit from:
              </p>
              <DeckFeatureGrid
                items={mapDeckIcons(conclusionBenefits, CONCLUSION_BENEFIT_ICONS)}
              />
              <DeckSectionLabel>Final Value Statement</DeckSectionLabel>
              <DeckBody>
                Infinity Business Dynamics is uniquely positioned to support DHL
                Express Lesotho through this compliance transformation
                initiative.
              </DeckBody>
              <DeckBody>Our combination of:</DeckBody>
              <DeckBulletList
                items={[
                  "RSL Accreditation",
                  "SAP Integration Expertise",
                  "Compliance Technology",
                  "Local Support Presence",
                  "Managed Services Capability",
                ]}
              />
              <DeckBody>
                provides DHL with a trusted partner capable of delivering
                successful outcomes today while supporting future growth and
                regulatory requirements.
              </DeckBody>
              <DeckInsight label="Closing Statement">
                We appreciate the opportunity to submit this proposal and look
                forward to partnering with DHL Express Lesotho.
              </DeckInsight>
            </div>
          </ClosingBackdrop>
        </DeckSlideFrame>
      );

    case 39:
      return (
        <DeckSlideFrame index={39}>
          <SlideEyebrow index={39} />
          <DeckTitle>Acceptance &amp; Signatures</DeckTitle>
          <DeckBody>
            The undersigned hereby acknowledge and accept the contents of this
            proposal.
          </DeckBody>
          <div className="deck-signature-grid">
            <div className="space-y-8">
              <DeckSectionLabel>For DHL Express Lesotho</DeckSectionLabel>
              <div className="deck-signature-fields">
                {["Name", "Position", "Signature", "Date"].map((field) => (
                  <div key={field}>
                    <p className="deck-signature-field__label">{field}:</p>
                    <div
                      className={`deck-signature-field__line${
                        field === "Signature" ? " deck-signature-field__line--signature" : ""
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <DeckSectionLabel>
                For Infinity Business Dynamics (Pty) Ltd
              </DeckSectionLabel>
              <div className="deck-signature-fields">
                {["Name", "Position", "Signature", "Date"].map((field) => (
                  <div key={field}>
                    <p className="deck-signature-field__label">{field}:</p>
                    <div
                      className={`deck-signature-field__line${
                        field === "Signature" ? " deck-signature-field__line--signature" : ""
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 40:
      return (
        <DeckSlideFrame index={40}>
          <SlideEyebrow index={40} />
          <DeckTitle>
            Infinity Business Dynamics (Pty) Ltd Banking Reference
          </DeckTitle>
          <DeckBody>
            The following banking details are provided for reference purposes
            and are supported by the attached Banking Confirmation Letter.
          </DeckBody>
          <div className="mt-6 flex min-h-0 flex-1 flex-col">
            <DeckTable
              headers={["Field", "Detail"]}
              rows={bankingDetails.map((b) => [b.label, b.value])}
            />
            <div className="mt-auto pt-10">
              <IbdContactCard />
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 41:
      return (
        <DeckSlideFrame index={41}>
          <SlideEyebrow index={41} />
          <DeckTitle highlight="Technical Detail">
            Supporting Documentation &amp;
          </DeckTitle>
          <DeckBody>
            The following supporting documentation forms part of this proposal
            and provides additional evidence of Infinity Business Dynamics&apos;
            capability, accreditation and compliance readiness.
          </DeckBody>
          <div className="deck-appendix-list mt-6">
            {appendices.map((app, index) => (
              <div key={app.id} className="deck-appendix-list__item gms-card rounded-2xl">
                <div className="deck-appendix-list__row">
                  <div className="deck-appendix-list__content min-w-0 flex-1">
                    <p className="text-[13px] font-medium tracking-[0.16em] text-deck-accent uppercase">
                      {app.id}
                    </p>
                    <p className="mt-1 text-[16px] font-semibold text-[color:var(--gms-text)]">
                      {app.title}
                    </p>
                    {app.purpose && (
                      <p className="mt-2 text-[14px] text-[color:var(--gms-text-muted)]">
                        <span className="font-medium text-[color:var(--gms-text-muted)]">
                          Purpose:{" "}
                        </span>
                        {app.purpose}
                      </p>
                    )}
                  </div>
                  <div className="deck-appendix-list__icon-col">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--gms-border)] bg-[color:var(--ibd-gray)] text-deck-accent">
                      {deckIcon(APPENDIX_ICONS[index], "sm")}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DeckSlideFrame>
      );

    default: {
      const appendixIndex = getAppendixIndexForSlide(index);
      if (appendixIndex !== null) {
        return (
          <DeckAppendixBreaker
            slideIndex={index}
            appendix={appendices[appendixIndex]}
            appendixIndex={appendixIndex}
          />
        );
      }
      return null;
    }
  }
}
