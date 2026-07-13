"use client";

import type { ReactElement } from "react";
import { ASSETS } from "@/lib/assets";
import { slideVisualLabels } from "@/lib/deck-content";
import { ClosingBackdrop } from "@/components/deck/visuals/ClosingBackdrop";
import { IbdContactCard } from "@/components/deck/IbdContactCard";
import {
  ComplianceMatrix,
  GanttChart,
  GovernanceFrameworkVisual,
  InvoiceQrMockup,
  LearningJourneyDiagram,
  RiskManagementVisual,
  SlaEscalationVisual,
  SplitCompareDiagram,
  SupportLifecycleDiagram,
  TestingPyramidDiagram,
  ValueCardsVisual,
  VerticalFlowDiagram,
  WhyInfinityValueVisual,
} from "@/components/deck/visuals/ProposalDiagrams";
import { ExecutiveDashboardMockup } from "@/components/deck/visuals/ExecutiveDashboardMockup";
import { TinValidationVisual } from "@/components/deck/visuals/TinValidationVisual";
import { DeckClosingQuote } from "@/components/deck/DeckSectionedToc";
import { DeckParagraphs } from "@/components/deck/DeckParagraphs";
import {
  DeckBody,
  DeckBulletList,
  DeckFeatureGrid,
  DeckOutcomeCardList,
  DeckSectionLabel,
  DeckSlideFrame,
  DeckSlideBodySplit,
  DeckTable,
  DeckTitle,
} from "@/components/deck/DeckSlideFrame";
import { SlideEyebrow } from "@/components/deck/SlideEyebrow";
import {
  supportLifecycle,
  administrationFeatures,
  annualManagedServices,
  annualManagedServicesIncludes,
  appendices,
  assessedRiskMatrix,
  auditInformation,
  auditWorkflow,
  commercialEstimate,
  commercialInvestmentSummary,
  commercialModelBenefits,
  commercialObjectives,
  commercialPrinciples,
  conclusionBenefits,
  conclusionParagraphs,
  creditNoteBenefits,
  creditNoteFeatures,
  creditNoteIntro,
  auditBusinessBenefits,
  auditGovernanceBenefits,
  auditTrailsIntro,
  commercialModelIntro,
  creditNoteWorkflow,
  dashboardBenefits,
  dashboardIntro,
  debitNoteBenefits,
  debitNoteFeatures,
  debitNoteIntro,
  debitNoteWorkflow,
  deliveryPrinciples,
  enterpriseLicenceIncludes,
  escalationLevels,
  executiveReports,
  governanceIntro,
  governanceObjectives,
  implementationLifecycle,
  implementationMethodologyIntro,
  implementationServicesIncludes,
  infinityRecommendation,
  invoiceLifecycle,
  invoiceLifecycleBenefits,
  invoiceLifecycleFeatures,
  invoiceLifecycleIntro,
  keyMilestones,
  learningJourney,
  licensingBenefits,
  managedServices,
  postGoLiveBenefits,
  postGoLiveIntro,
  pricingNotes,
  pricingPhilosophyIntro,
  professionalServices,
  projectPrinciples,
  proposalAcceptanceIntro,
  projectRisks,
  projectTeam,
  projectTeamPageIntro,
  projectTimeline,
  projectTimelineIntro,
  qrBenefits,
  qrFeatures,
  qrIntro,
  recommendationSummary,
  riskLifecycle,
  riskPrinciples,
  roiBusinessOutcomes,
  roiIntro,
  roiStrategicOutcomes,
  rolloutBenefits,
  rolloutIntro,
  rolloutPhases,
  serviceCommitments,
  serviceLevels,
  supplierResponses,
  supplierMatrixIntro,
  testingActivities,
  testingIntro,
  testingOutcomes,
  testingPyramid,
  thankYouCommitment,
  thankYouCta,
  thankYouParagraphs,
  tinValidation,
  tcoBenefits,
  tcoComparison,
  trainingAudience,
  trainingDeliverables,
  trainingIntro,
  userAdminBusinessBenefits,
  userAdministrationIntro,
  userRoles,
  whyChooseInfinity,
  whyInfinityCommitment,
  whyInfinityMatters,
  whyInfinityPageIntro,
  closingQuote,
} from "@/lib/deck-proposal-content";
import {
  ALLIANCE_HUB_ICONS,
  ALLIANCE_OPTION_ICONS,
  ALLIANCE_AUDIT_ICONS,
  ALLIANCE_COMMERCIAL_ICONS,
  ALLIANCE_CONCLUSION_ICONS,
  ALLIANCE_CREDIT_ICONS,
  ALLIANCE_DEBIT_ICONS,
  ALLIANCE_EXPERIENCE_ICONS,
  ALLIANCE_LICENCE_ICONS,
  ALLIANCE_LIFECYCLE_ICONS,
  ALLIANCE_QR_ICONS,
  ALLIANCE_ROI_ICONS,
  ALLIANCE_ROLLOUT_ICONS,
  ALLIANCE_TCO_ICONS,
  ALLIANCE_USER_ICONS,
  ALLIANCE_WHY_ICONS,
  APPENDIX_ICONS,
  GANTT_PHASE_ICONS,
  LEARNING_JOURNEY_ICONS,
  PROJECT_TEAM_ICONS,
  SUPPORT_SERVICE_ICONS,
  TESTING_ACTIVITY_ICONS,
  TRAINING_AUDIENCE_ICONS,
  DeckIconTile,
  mapDeckIcons,
} from "@/components/deck/deck-icons";

export function renderAllianceSlidesExtended(index: number): ReactElement {
  switch (index) {
    case 21:
      return (
        <DeckSlideFrame index={21} className="deck-slide--tin-validation">
          <SlideEyebrow index={21} />
          <DeckSlideBodySplit
            layout="visual-bottom"
            className="deck-slide-body-split--tin-validation"
            visualClassName="tin-validation-panel-below"
            visualLabel={slideVisualLabels[21]}
            visual={<TinValidationVisual />}
          >
            <DeckTitle highlight="Taxpayer Identification">Ensuring Accurate</DeckTitle>
            <DeckParagraphs paragraphs={tinValidation.intro} />
            <DeckSectionLabel>Validation Process</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...tinValidation.process]} />
            <DeckSectionLabel>Validation Features</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...tinValidation.features]} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...tinValidation.benefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 22:
      return (
        <DeckSlideFrame index={22} className="deck-slide--invoice-lifecycle">
          <SlideEyebrow index={22} />
          <DeckSlideBodySplit
            layout="visual-bottom"
            className="deck-slide-body-split--invoice-lifecycle"
            visualClassName="invoice-lifecycle-panel-below"
            visualLabel={slideVisualLabels[22]}
            visual={<VerticalFlowDiagram items={invoiceLifecycle} icons={ALLIANCE_LIFECYCLE_ICONS} compact centerContent />}
          >
            <DeckTitle highlight="Creation to Compliance">Managing Every Invoice from</DeckTitle>
            <DeckParagraphs paragraphs={invoiceLifecycleIntro} />
            <DeckSectionLabel>Key Features</DeckSectionLabel>
            <DeckBulletList compact items={[...invoiceLifecycleFeatures]} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...invoiceLifecycleBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 23:
      return (
        <DeckSlideFrame index={23} className="deck-slide--credit-debit-notes">
          <SlideEyebrow index={23} />
          <DeckSlideBodySplit
            layout="horizontal"
            className="deck-slide-body-split--credit-debit-notes"
            visualClassName="credit-debit-notes-panel"
            visualLabel={slideVisualLabels[23]}
            visual={
              <div className="credit-debit-notes-flows grid h-full min-h-0 grid-cols-2 gap-3">
                <div className="credit-debit-notes-col credit-debit-notes-col--credit flex min-h-0 flex-col gap-1.5">
                  <p className="credit-debit-notes-col__label">Credit Notes</p>
                  <VerticalFlowDiagram
                    className="credit-debit-notes-flow credit-debit-notes-flow--credit"
                    items={creditNoteWorkflow}
                    icons={ALLIANCE_CREDIT_ICONS}
                    compact
                    centerContent
                  />
                </div>
                <div className="credit-debit-notes-col credit-debit-notes-col--debit flex min-h-0 flex-col gap-1.5">
                  <p className="credit-debit-notes-col__label">Debit Notes</p>
                  <VerticalFlowDiagram
                    className="credit-debit-notes-flow credit-debit-notes-flow--debit"
                    items={debitNoteWorkflow}
                    icons={ALLIANCE_DEBIT_ICONS}
                    compact
                    centerContent
                  />
                </div>
              </div>
            }
          >
            <DeckTitle highlight="Note Management">Credit &amp; Debit</DeckTitle>
            <DeckSectionLabel>Credit Note Management</DeckSectionLabel>
            <DeckParagraphs paragraphs={creditNoteIntro} />
            <DeckSectionLabel>Debit Note Management</DeckSectionLabel>
            <DeckParagraphs paragraphs={debitNoteIntro} />
            <DeckSectionLabel>Credit Note Features</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...creditNoteFeatures]} />
            <DeckSectionLabel>Debit Note Features</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...debitNoteFeatures]} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...creditNoteBenefits, ...debitNoteBenefits].slice(0, 3)} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 24:
      return (
        <DeckSlideFrame index={24}>
          <SlideEyebrow index={24} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[24]} visual={<InvoiceQrMockup callouts={qrFeatures} />}>
            <DeckTitle highlight="Fully Compliant">Every Invoice</DeckTitle>
            <DeckParagraphs paragraphs={qrIntro} />
            <DeckSectionLabel>QR Code Components</DeckSectionLabel>
            <DeckBulletList compact items={[...qrFeatures]} />
            <DeckSectionLabel>QR Code Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...qrBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 25:
      return (
        <DeckSlideFrame index={25} className="deck-slide--executive-dashboard">
          <SlideEyebrow index={25} />
          <DeckSlideBodySplit
            layout="visual-bottom"
            className="deck-slide-body-split--executive-dashboard"
            visualClassName="executive-dashboard-panel-below"
            visualLabel={slideVisualLabels[25]}
            visual={<ExecutiveDashboardMockup />}
          >
            <DeckTitle highlight="Alliance Group">Executive Visibility Across the</DeckTitle>
            <DeckParagraphs paragraphs={dashboardIntro} />
            <DeckSectionLabel>Executive Reports</DeckSectionLabel>
            <DeckBulletList compact items={[...executiveReports]} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...dashboardBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 26:
      return (
        <DeckSlideFrame index={26}>
          <SlideEyebrow index={26} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[26]} visual={<DeckFeatureGrid uniform items={mapDeckIcons(userRoles.map((r) => ({ title: r, description: "Role-based access" })), ALLIANCE_USER_ICONS)} />}>
            <DeckTitle highlight="Access Management">Secure Multi-Entity</DeckTitle>
            <DeckParagraphs paragraphs={userAdministrationIntro} />
            <DeckSectionLabel>Administration Features</DeckSectionLabel>
            <DeckBulletList compact items={[...administrationFeatures]} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...userAdminBusinessBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 27:
      return (
        <DeckSlideFrame index={27}>
          <SlideEyebrow index={27} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[27]} visual={<VerticalFlowDiagram items={auditWorkflow} icons={ALLIANCE_AUDIT_ICONS.slice(0, 5)} compact centerContent />}>
            <DeckTitle highlight="Accountability">Complete Visibility and</DeckTitle>
            <DeckParagraphs paragraphs={auditTrailsIntro} />
            <DeckSectionLabel>Audit Information Captured</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...auditInformation]} />
            <DeckSectionLabel>Governance Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...auditGovernanceBenefits]} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...auditBusinessBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 28:
      return (
        <DeckSlideFrame index={28} className="deck-slide--delivery-framework">
          <SlideEyebrow index={28} />
          <DeckSlideBodySplit
            layout="horizontal"
            className="deck-slide-body-split--delivery-framework"
            visualClassName="delivery-framework-panel"
            visualLabel={slideVisualLabels[28]}
            visual={
              <ValueCardsVisual
                items={deliveryPrinciples.map((p) => ({ title: p.title, description: p.description }))}
                icons={ALLIANCE_COMMERCIAL_ICONS}
              />
            }
          >
            <DeckTitle highlight="Enterprise Success">A Structured Delivery Framework for</DeckTitle>
            <DeckParagraphs paragraphs={implementationMethodologyIntro} />
            <DeckSectionLabel>Implementation Phases</DeckSectionLabel>
            <DeckBulletList compact items={[...implementationLifecycle]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 29:
      return (
        <DeckSlideFrame index={29}>
          <SlideEyebrow index={29} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[29]} visual={<DeckOutcomeCardList items={rolloutPhases.map((p) => ({ title: p.phase, description: p.title }))} icons={ALLIANCE_ROLLOUT_ICONS} />}>
            <DeckTitle highlight="Multi-Entity Rollout">A Phased</DeckTitle>
            <DeckParagraphs paragraphs={rolloutIntro} />
            <DeckSectionLabel>Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...rolloutBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 30:
      return (
        <DeckSlideFrame index={30} className="deck-slide--governance-framework">
          <SlideEyebrow index={30} />
          <DeckSlideBodySplit
            layout="horizontal"
            className="deck-slide-body-split--governance-framework"
            visualClassName="governance-framework-panel"
            visualLabel={slideVisualLabels[30]}
            visual={<GovernanceFrameworkVisual />}
          >
            <DeckTitle highlight="Successful Delivery">Governance for</DeckTitle>
            <DeckParagraphs paragraphs={governanceIntro} />
            <DeckSectionLabel>Governance Objectives</DeckSectionLabel>
            <DeckBulletList compact items={[...governanceObjectives]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 31:
      return (
        <DeckSlideFrame index={31}>
          <SlideEyebrow index={31} />
          <DeckTitle highlight="Enterprise Solutions">Experienced Professionals Delivering</DeckTitle>
          <DeckParagraphs paragraphs={projectTeamPageIntro} />
          <DeckTable compact headers={["Role", "Responsibility"]} rows={projectTeam.map((t) => [t.role, t.responsibility])} />
          <DeckSectionLabel>Team Principles</DeckSectionLabel>
          <DeckFeatureGrid uniform items={mapDeckIcons(projectPrinciples.map((p) => ({ title: p, description: p })), PROJECT_TEAM_ICONS.slice(0, 5))} />
        </DeckSlideFrame>
      );

    case 32:
      return (
        <DeckSlideFrame index={32} className="deck-slide--project-schedule">
          <SlideEyebrow index={32} />
          <DeckSlideBodySplit
            layout="horizontal"
            visualClassName="project-schedule-panel"
            visualLabel={slideVisualLabels[32]}
            visual={<GanttChart phases={projectTimeline.map((t) => [t.phase, t.duration] as const)} />}
          >
            <DeckTitle highlight="Project Schedule">Indicative</DeckTitle>
            <DeckParagraphs paragraphs={projectTimelineIntro} />
            <DeckSectionLabel>Implementation Phases</DeckSectionLabel>
            <DeckBulletList
              compact
              items={projectTimeline.map((t) => ({
                title: t.phase,
                description: t.duration,
                inline: true,
              }))}
            />
            <DeckSectionLabel>Key Milestones</DeckSectionLabel>
            <DeckBulletList compact items={[...keyMilestones]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 33:
      return (
        <DeckSlideFrame index={33}>
          <SlideEyebrow index={33} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[33]} visual={<TestingPyramidDiagram levels={testingPyramid} />}>
            <DeckTitle highlight="Production Solution">Delivering a Reliable</DeckTitle>
            <DeckParagraphs paragraphs={testingIntro} />
            <DeckSectionLabel>Testing Phases</DeckSectionLabel>
            <DeckFeatureGrid uniform items={mapDeckIcons([...testingActivities], TESTING_ACTIVITY_ICONS)} />
            <DeckSectionLabel>Expected Outcomes</DeckSectionLabel>
            <DeckBulletList compact items={[...testingOutcomes]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 34:
      return (
        <DeckSlideFrame index={34}>
          <SlideEyebrow index={34} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[34]} visual={<LearningJourneyDiagram steps={learningJourney} />}>
            <DeckTitle highlight="for Success">Preparing Users</DeckTitle>
            <DeckParagraphs paragraphs={trainingIntro} />
            <DeckSectionLabel>Training Audience</DeckSectionLabel>
            <DeckFeatureGrid uniform items={mapDeckIcons([...trainingAudience], TRAINING_AUDIENCE_ICONS)} />
            <DeckSectionLabel>Training Deliverables</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...trainingDeliverables]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 35:
      return (
        <DeckSlideFrame index={35}>
          <SlideEyebrow index={35} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[35]} visual={<SupportLifecycleDiagram steps={supportLifecycle} />}>
            <DeckTitle highlight="Continuous Improvement">Long-Term Partnership &amp;</DeckTitle>
            <DeckParagraphs paragraphs={postGoLiveIntro} />
            <DeckSectionLabel>Managed Services</DeckSectionLabel>
            <DeckFeatureGrid uniform items={mapDeckIcons([...managedServices], SUPPORT_SERVICE_ICONS)} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...postGoLiveBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 36:
      return (
        <DeckSlideFrame index={36}>
          <SlideEyebrow index={36} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[36]} visual={<ValueCardsVisual items={commercialObjectives.map((o) => ({ title: o.title, description: o.description }))} icons={ALLIANCE_COMMERCIAL_ICONS} />}>
            <DeckTitle highlight="Long-Term Value">A Commercial Framework Designed for</DeckTitle>
            <DeckParagraphs paragraphs={commercialModelIntro} />
            <DeckSectionLabel>Infinity Recommendation</DeckSectionLabel>
            <DeckBody>{infinityRecommendation}</DeckBody>
            <DeckSectionLabel>Why This Model Benefits Alliance Group</DeckSectionLabel>
            <DeckBulletList compact items={[...commercialModelBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 37:
      return (
        <DeckSlideFrame index={37}>
          <SlideEyebrow index={37} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[37]} visual={
            <div className="grid grid-cols-2 gap-3">
              <DeckFeatureGrid uniform items={mapDeckIcons(implementationServicesIncludes.slice(0, 5).map((s) => ({ title: s, description: "Once-off investment" })), ALLIANCE_COMMERCIAL_ICONS)} />
              <DeckFeatureGrid uniform items={mapDeckIcons(annualManagedServicesIncludes.slice(0, 5).map((s) => ({ title: s, description: "Recurring investment" })), ALLIANCE_LICENCE_ICONS)} />
            </div>
          }>
            <DeckTitle highlight="Benefiting for Years">Investing Once.</DeckTitle>
            <DeckParagraphs paragraphs={pricingPhilosophyIntro} />
            <DeckSectionLabel>Commercial Principles</DeckSectionLabel>
            <DeckBulletList compact items={[...commercialPrinciples]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 38:
      return (
        <DeckSlideFrame index={38}>
          <SlideEyebrow index={38} />
          <DeckTitle highlight="Proposed Investment">Detailed Commercial</DeckTitle>
          <DeckBody>
            Estimate {commercialEstimate.reference} dated {commercialEstimate.date}. All amounts in {commercialEstimate.currency}.
          </DeckBody>
          <DeckSectionLabel>Once-off Implementation</DeckSectionLabel>
          <DeckTable
            compact
            headers={["Item", "Description", "Amount (LSL)"]}
            rows={professionalServices.map((r) => [r.service, r.description, r.amount])}
          />
          <DeckSectionLabel>Annual Licences &amp; Managed Services</DeckSectionLabel>
          <DeckTable
            compact
            headers={["Item", "Description", "Amount (LSL)"]}
            rows={annualManagedServices.map((r) => [r.service, r.description, r.amount])}
          />
          <DeckSectionLabel>Investment Summary</DeckSectionLabel>
          <DeckTable
            compact
            featured
            emphasizeLastRow
            headers={["Summary", "Amount (LSL)"]}
            rows={commercialInvestmentSummary.map((r) => [r.label, r.amount])}
          />
          <DeckSectionLabel>Commercial Notes</DeckSectionLabel>
          <DeckBulletList compact items={[...pricingNotes]} />
        </DeckSlideFrame>
      );

    case 39:
      return (
        <DeckSlideFrame index={39}>
          <SlideEyebrow index={39} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[39]} visual={<SplitCompareDiagram leftTitle="Traditional Model" rightTitle="Enterprise Compliance Hub" leftItems={["4 Companies", "4 Licences", "4 Support Contracts", "4 Dashboards"]} rightItems={["1 Group Licence", "1 Platform", "1 Dashboard", "Shared Services"]} leftIcons={ALLIANCE_OPTION_ICONS} rightIcons={ALLIANCE_HUB_ICONS} />}>
            <DeckTitle highlight="Unlimited Growth">One Platform. One Licence.</DeckTitle>
            <DeckSectionLabel>Enterprise Licence Includes</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...enterpriseLicenceIncludes]} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...licensingBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 40:
      return (
        <DeckSlideFrame index={40}>
          <SlideEyebrow index={40} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[40]} visual={<ValueCardsVisual items={tcoBenefits.map((b) => ({ title: b.title, description: b.description }))} icons={ALLIANCE_TCO_ICONS} />}>
            <DeckTitle highlight="Shared Enterprise Platform">Maximising Long-Term Value Through a</DeckTitle>
            <DeckTable compact headers={["Independent Platforms", "Enterprise Compliance Hub"]} rows={tcoComparison.map((r) => [r.independent, r.hub])} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 41:
      return (
        <DeckSlideFrame index={41}>
          <SlideEyebrow index={41} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[41]} visual={<ValueCardsVisual items={roiStrategicOutcomes.map((o) => ({ title: o.title, description: o.description }))} icons={ALLIANCE_ROI_ICONS} />}>
            <DeckTitle highlight="Beyond Compliance">Creating Value</DeckTitle>
            <DeckParagraphs paragraphs={roiIntro} />
            <DeckSectionLabel>Strategic Outcomes</DeckSectionLabel>
            <DeckBulletList compact items={[...roiStrategicOutcomes]} />
            <DeckSectionLabel>Expected Business Outcomes</DeckSectionLabel>
            <DeckBulletList compact items={[...roiBusinessOutcomes]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 42:
      return (
        <DeckSlideFrame index={42} className="deck-slide--sla-framework">
          <SlideEyebrow index={42} />
          <DeckSlideBodySplit
            layout="visual-bottom"
            className="deck-slide-body-split--sla-framework"
            visualClassName="sla-framework-panel-below"
            visualLabel={slideVisualLabels[42]}
            visual={<SlaEscalationVisual />}
          >
            <DeckTitle highlight="Support Commitments">Enterprise</DeckTitle>
            <DeckTable compact headers={["Priority", "Description", "Response", "Resolution"]} rows={serviceLevels.map((s) => [s.priority, s.description, s.response, s.resolution])} />
            <DeckSectionLabel>Service Commitments</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...serviceCommitments]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 43:
      return (
        <DeckSlideFrame index={43} className="deck-slide--risk-framework">
          <SlideEyebrow index={43} />
          <DeckSlideBodySplit
            layout="horizontal"
            visualClassName="risk-framework-panel"
            visualLabel={slideVisualLabels[43]}
            visual={
              <RiskManagementVisual
                assessments={assessedRiskMatrix}
                treatmentSteps={riskLifecycle}
              />
            }
          >
            <DeckTitle highlight="with Confidence">Delivering</DeckTitle>
            <DeckTable
              compact
              headers={["Risk", "Impact", "Mitigation"]}
              rows={projectRisks.map((r) => [r.risk, r.impact, r.mitigation])}
            />
            <DeckSectionLabel>Risk Management Principles</DeckSectionLabel>
            <DeckBulletList compact items={[...riskPrinciples]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 44:
      return (
        <DeckSlideFrame index={44}>
          <SlideEyebrow index={44} />
          <DeckTitle highlight="Compliance Partner">Your Strategic Technology &amp;</DeckTitle>
          <DeckParagraphs paragraphs={whyInfinityPageIntro} />
          <DeckFeatureGrid variant="premium" items={mapDeckIcons([...whyChooseInfinity], ALLIANCE_WHY_ICONS)} />
          <DeckSectionLabel>Why This Matters</DeckSectionLabel>
          <DeckBulletList compact columns={2} items={[...whyInfinityMatters]} />
          <DeckSectionLabel>Infinity Commitment</DeckSectionLabel>
          <DeckBody>{whyInfinityCommitment}</DeckBody>
        </DeckSlideFrame>
      );

    case 45:
      return (
        <DeckSlideFrame index={45}>
          <SlideEyebrow index={45} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[45]} visual={<ComplianceMatrix items={supplierResponses.map((s) => [s.requirement, s.response] as const)} />}>
            <DeckTitle highlight="Alliance Group Requirements">Response to</DeckTitle>
            <DeckParagraphs paragraphs={supplierMatrixIntro} />
            <DeckSectionLabel>Recommendation Summary</DeckSectionLabel>
            <DeckBulletList compact items={[...recommendationSummary]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 46:
      return (
        <DeckSlideFrame index={46} showParticles>
          <SlideEyebrow index={46} />
          <ClosingBackdrop>
            <DeckTitle highlight="Compliance Future">Building a Unified</DeckTitle>
            <DeckParagraphs paragraphs={conclusionParagraphs} />
            <DeckSectionLabel>Expected Outcomes</DeckSectionLabel>
            <DeckFeatureGrid
              uniform
              columns={2}
              items={mapDeckIcons([...conclusionBenefits], ALLIANCE_CONCLUSION_ICONS)}
            />
            <DeckClosingQuote>{closingQuote}</DeckClosingQuote>
          </ClosingBackdrop>
        </DeckSlideFrame>
      );

    case 47:
      return (
        <DeckSlideFrame index={47}>
          <SlideEyebrow index={47} />
          <DeckTitle highlight="Proposal">Acceptance</DeckTitle>
          <DeckBody>{proposalAcceptanceIntro}</DeckBody>
          <div className="deck-signature-grid mt-6 grid grid-cols-2 gap-8">
            {["ALLIANCE GROUP INVESTMENT HOLDING COMPANY LTD", "INFINITY BUSINESS DYNAMICS (PTY) LTD"].map((org) => (
              <div key={org} className="space-y-6">
                <DeckSectionLabel>FOR {org}</DeckSectionLabel>
                {["Name", "Position", "Signature", "Date"].map((field) => (
                  <div key={field}>
                    <p className="deck-signature-field__label">{field}</p>
                    <div className={`deck-signature-field__line${field === "Signature" ? " deck-signature-field__line--signature" : ""}`} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </DeckSlideFrame>
      );

    case 48:
      return (
        <DeckSlideFrame index={48}>
          <SlideEyebrow index={48} />
          <DeckTitle highlight="Supporting Documentation">Appendices</DeckTitle>
          <div className="deck-appendix-list mt-4 grid min-h-0 flex-1 grid-cols-2 gap-2 content-start overflow-auto">
            {appendices.map((app, i) => {
              const file = "file" in app && typeof app.file === "string" ? app.file : undefined;
              const content = (
                <>
                  <DeckIconTile icon={APPENDIX_ICONS[i % APPENDIX_ICONS.length]!} size="compact" />
                  <div className="min-w-0 flex-1">
                    <p className="deck-type-premium-label">{app.id}</p>
                    <p className="deck-type-card-title">{app.title}</p>
                  </div>
                  {file ? (
                    <span className="deck-type-premium-label shrink-0 text-deck-accent">Attached</span>
                  ) : (
                    <span className="deck-type-premium-label shrink-0 text-[color:var(--gms-text-muted)]">
                      In proposal
                    </span>
                  )}
                </>
              );

              return file ? (
                <a
                  key={app.id}
                  href={`/appendices/${file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deck-appendix-list__item deck-appendix-list__link gms-card flex items-center gap-3 rounded-2xl p-3"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={app.id}
                  className="deck-appendix-list__item gms-card flex items-center gap-3 rounded-2xl p-3"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </DeckSlideFrame>
      );

    case 49:
      return (
        <DeckSlideFrame index={49} showParticles>
          <SlideEyebrow index={49} />
          <ClosingBackdrop>
            <DeckTitle>Thank You</DeckTitle>
            <DeckParagraphs paragraphs={thankYouParagraphs} />
            <p className="closing-backdrop__quote mt-4">{thankYouCommitment}</p>
            <p className="deck-type-body mt-4 font-semibold text-deck-accent">{thankYouCta}</p>
            <div className="pt-6"><IbdContactCard /></div>
          </ClosingBackdrop>
        </DeckSlideFrame>
      );

    case 50:
      return (
        <DeckSlideFrame index={50} layout="full" backgroundImage={ASSETS.back} hideFooter>
          {null}
        </DeckSlideFrame>
      );

    default:
      return (
        <DeckSlideFrame index={index}>
          <SlideEyebrow index={index} />
          <DeckTitle>Slide {index + 1}</DeckTitle>
          <DeckBody>Content pending.</DeckBody>
        </DeckSlideFrame>
      );
  }
}
