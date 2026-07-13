"use client";

import type { ReactElement } from "react";
import { ASSETS } from "@/lib/assets";
import { slideVisualLabels } from "@/lib/deck-content";
import { DeckCoverFooter } from "@/components/deck/DeckCoverFooter";
import { DeckCoverTitle } from "@/components/deck/DeckCoverHero";
import { DeckHeaderBrand, SlideEyebrow } from "@/components/deck/SlideEyebrow";
import {
  HubSpokeDiagram,
  SplitCompareDiagram,
  ValueCardsVisual,
  VerticalFlowDiagram,
} from "@/components/deck/visuals/ProposalDiagrams";
import { AllianceTransformationVisual } from "@/components/deck/visuals/AllianceTransformationVisual";
import { OptionStrategyVisual } from "@/components/deck/visuals/OptionStrategyVisual";
import { HubArchitectureVisual } from "@/components/deck/visuals/HubArchitectureVisual";
import { SolutionArchitectureStackVisual } from "@/components/deck/visuals/SolutionArchitectureStackVisual";
import { BillingPortalMockup } from "@/components/deck/visuals/BillingPortalMockup";
import { TechnologyLandscapeVisual } from "@/components/deck/visuals/TechnologyLandscapeVisual";
import { IbdFooterLogo } from "@/components/deck/IbdMark";
import { DeckSectionedTableOfContents } from "@/components/deck/DeckSectionedToc";
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
  DeckVisualPanel,
} from "@/components/deck/DeckSlideFrame";
import {
  agihcPortal,
  aboutInfinityIntro,
  allianceHubNodes,
  architecturalPrinciples,
  assessmentSummary,
  businessChallenges,
  businessChallengesIntro,
  companyCredentials,
  coreCapabilities,
  executiveLetter,
  executiveSummaryIntro,
  executiveSummaryOutcomes,
  fincludeIntegration,
  hubOverviewBenefits,
  hubOverviewIntro,
  hubPlatformIntro,
  hubProvides,
  infinitySolutionResponseParagraphs,
  keyBusinessBenefits,
  lehaeIntegration,
  optionBRecommendationParagraphs,
  participatingEntities,
  projectPrinciples,
  propertiesIntegration,
  relevantExperience,
  relevantExperienceIntro,
  rslAccreditationFlowSteps,
  rslAccreditationIntro,
  solutionStrategyIntro,
  strategicOutcomes,
  strategicOutcomesIntro,
  teamCapabilityHighlights,
  teamCapabilityPageIntro,
  technologyLandscape,
  technologyLandscapeIntro,
  technologyLandscapeClosing,
  understandingAllianceIntro,
  whyChooseInfinity,
  whyInfinityPageIntro,
  multiEntityArchitectureIntro,
} from "@/lib/deck-proposal-content";
import {
  ALLIANCE_CREDENTIAL_ICONS,
  ALLIANCE_EXPERIENCE_ICONS,
  ALLIANCE_ENTITY_ICONS,
  ALLIANCE_HUB_ICONS,
  ALLIANCE_OPTION_ICONS,
  ALLIANCE_OUTCOME_ICONS,
  ALLIANCE_STRATEGIC_ICONS,
  ALLIANCE_WHY_ICONS,
  PROJECT_TEAM_ICONS,
  mapDeckIcons,
} from "@/components/deck/deck-icons";
import { renderAllianceSlidesExtended } from "@/components/deck/AllianceDeckSlidesExtended";

export function renderAllianceSlide(index: number): ReactElement {
  if (index > 25) return renderAllianceSlidesExtended(index);

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
          <DeckTitle>Executive Letter</DeckTitle>
          <div className="space-y-3">
            <div className="deck-type-body">
              <p className="font-bold"><span className="text-[color:var(--gms-text)]">To:</span> {executiveLetter.to}</p>
              <p className="mt-1 font-bold">{executiveLetter.toTitle}</p>
              <p className="font-bold">{executiveLetter.toOrg}</p>
            </div>
            <p className="deck-type-body font-semibold">{executiveLetter.salutation}</p>
            <DeckParagraphs paragraphs={executiveLetter.paragraphs} />
          </div>
          <div className="mt-6 shrink-0 pt-2">
            <p className="deck-type-body font-semibold">{executiveLetter.closing}</p>
            <p className="deck-type-body mt-2 font-semibold">{executiveLetter.signatureOrg}</p>
            <p className="deck-type-body font-semibold text-[color:var(--gms-text-muted)]">{executiveLetter.signatureTagline}</p>
            <IbdFooterLogo className="mt-4 h-10" />
          </div>
        </DeckSlideFrame>
      );

    case 2:
      return (
        <DeckSlideFrame index={2}>
          <SlideEyebrow index={2} />
          <div className="deck-toc-header flex w-full shrink-0 items-end justify-between">
            <p className="deck-title-lg">Proposal Outline</p>
            <span className="deck-title-lg">Page</span>
          </div>
          <DeckSectionedTableOfContents />
        </DeckSlideFrame>
      );

    case 3:
      return (
        <DeckSlideFrame index={3}>
          <SlideEyebrow index={3} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[3]} visual={<AllianceTransformationVisual />}>
            <DeckTitle highlight="Enterprise Compliance">A Unified Approach to</DeckTitle>
            <DeckParagraphs paragraphs={executiveSummaryIntro} />
            <DeckSectionLabel>Expected Business Outcomes</DeckSectionLabel>
            <DeckBulletList compact items={[...executiveSummaryOutcomes]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 4:
      return (
        <DeckSlideFrame index={4}>
          <SlideEyebrow index={4} />
          <DeckTitle highlight="Beyond Regulatory Compliance">Delivering Value</DeckTitle>
          <DeckParagraphs paragraphs={strategicOutcomesIntro} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[4]} visual={<DeckOutcomeCardList items={[...strategicOutcomes]} icons={ALLIANCE_STRATEGIC_ICONS} />}>
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...keyBusinessBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 5:
      return (
        <DeckSlideFrame index={5} className="deck-slide--hub-spoke-below">
          <SlideEyebrow index={5} />
          <DeckTitle highlight="Business Portfolio">Supporting a Diverse</DeckTitle>
          <DeckParagraphs paragraphs={understandingAllianceIntro} />
          <DeckSectionLabel>Participating Entities</DeckSectionLabel>
          <DeckTable compact headers={["Entity", "Sector", "System"]} rows={participatingEntities.map((e) => [e.name, e.sector, e.system])} />
          <DeckVisualPanel className="hub-spoke-panel-below" label={slideVisualLabels[5]}>
            <HubSpokeDiagram center="Alliance Group" nodes={allianceHubNodes} gateway="Enterprise Compliance Hub" icons={ALLIANCE_ENTITY_ICONS} />
          </DeckVisualPanel>
        </DeckSlideFrame>
      );

    case 6:
      return (
        <DeckSlideFrame index={6} className="deck-slide--tech-landscape">
          <SlideEyebrow index={6} />
          <DeckTitle highlight="Systems Assessment">Existing Technology</DeckTitle>
          <DeckSlideBodySplit
            layout="visual-bottom"
            className="deck-slide-body-split--tech-landscape"
            visualClassName="tech-landscape-panel-below"
            visualLabel={slideVisualLabels[6] ?? "Technology Landscape"}
            visual={<TechnologyLandscapeVisual />}
          >
            <DeckParagraphs paragraphs={technologyLandscapeIntro} />
            <DeckTable compact headers={["Entity", "Current Software", "Proposed Integration"]} rows={technologyLandscape.map((r) => [r.entity, r.software, r.integration])} />
            <DeckSectionLabel>Assessment Summary</DeckSectionLabel>
            <DeckBody>The existing environment is characterised by:</DeckBody>
            <DeckBulletList compact items={[...assessmentSummary]} />
            <DeckParagraphs paragraphs={technologyLandscapeClosing} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 7:
      return (
        <DeckSlideFrame index={7} className="deck-slide--business-challenges">
          <SlideEyebrow index={7} />
          <DeckTitle highlight="Multiple Platforms">Managing Compliance Across</DeckTitle>
          <DeckSlideBodySplit
            layout="visual-bottom"
            className="deck-slide-body-split--business-challenges"
            visualClassName="business-challenges-panel-below"
            visualLabel={slideVisualLabels[7]}
            visual={
              <SplitCompareDiagram
                leftTitle="Business Challenges"
                rightTitle="Infinity Solution"
                leftItems={[...businessChallenges]}
                rightItems={[infinitySolutionResponseParagraphs]}
                leftIcons={ALLIANCE_OPTION_ICONS}
                rightIcons={ALLIANCE_HUB_ICONS.slice(0, 1)}
              />
            }
          >
            <DeckParagraphs paragraphs={businessChallengesIntro} />
            <DeckSectionLabel>Key Challenges</DeckSectionLabel>
            <DeckBulletList compact items={[...businessChallenges]} />
            <DeckSectionLabel>Infinity&apos;s Response</DeckSectionLabel>
            <DeckParagraphs paragraphs={infinitySolutionResponseParagraphs} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 8:
      return (
        <DeckSlideFrame index={8} className="deck-slide--solution-strategy">
          <SlideEyebrow index={8} />
          <DeckTitle highlight="Multiple Businesses">One Platform.</DeckTitle>
          <DeckSlideBodySplit
            layout="visual-bottom"
            className="deck-slide-body-split--solution-strategy"
            visualClassName="solution-strategy-panel-below"
            visualLabel={slideVisualLabels[8]}
            visual={<OptionStrategyVisual />}
          >
            <DeckParagraphs paragraphs={solutionStrategyIntro} />
            <DeckSectionLabel>Recommendation</DeckSectionLabel>
            <DeckParagraphs paragraphs={optionBRecommendationParagraphs} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 9:
      return (
        <DeckSlideFrame index={9} className="deck-slide--hub-architecture">
          <SlideEyebrow index={9} />
          <DeckTitle highlight="Entire Group">A Single Compliance Platform for the</DeckTitle>
          <DeckSlideBodySplit
            layout="visual-bottom"
            className="deck-slide-body-split--hub-architecture"
            visualClassName="hub-architecture-panel-below"
            visualLabel={slideVisualLabels[9]}
            visual={<HubArchitectureVisual />}
          >
            <DeckParagraphs paragraphs={hubPlatformIntro} />
            <DeckSectionLabel>Enterprise Compliance Hub Provides</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...hubProvides]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 10:
      return (
        <DeckSlideFrame index={10} className="deck-slide--company-profile">
          <SlideEyebrow index={10} />
          <DeckSlideBodySplit
            layout="horizontal"
            visualLabel={slideVisualLabels[10]}
            visual={<DeckFeatureGrid uniform items={mapDeckIcons([...companyCredentials], ALLIANCE_CREDENTIAL_ICONS)} />}
          >
            <DeckTitle>About Infinity Business Dynamics</DeckTitle>
            <DeckParagraphs paragraphs={aboutInfinityIntro} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 11:
      return (
        <DeckSlideFrame index={11}>
          <SlideEyebrow index={11} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[11]} visual={<DeckFeatureGrid variant="premium" items={mapDeckIcons([...whyChooseInfinity], ALLIANCE_WHY_ICONS)} />}>
            <DeckTitle highlight="Compliance Partner">Your Strategic Technology &amp;</DeckTitle>
            <DeckParagraphs paragraphs={whyInfinityPageIntro} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 12:
      return (
        <DeckSlideFrame index={12} className="deck-slide--rsl-accreditation">
          <SlideEyebrow index={12} />
          <DeckSlideBodySplit layout="visual-bottom" visualLabel={slideVisualLabels[12]} visual={<VerticalFlowDiagram items={rslAccreditationFlowSteps.map((s) => s.title)} icons={ALLIANCE_HUB_ICONS} compact centerContent />}>
            <DeckTitle highlight="Accredited Solution">Revenue Services Lesotho</DeckTitle>
            <DeckParagraphs paragraphs={rslAccreditationIntro} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 13:
      return (
        <DeckSlideFrame index={13} className="deck-slide--relevant-experience">
          <SlideEyebrow index={13} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[13]} visual={<DeckFeatureGrid variant="premium" items={mapDeckIcons([...relevantExperience], ALLIANCE_EXPERIENCE_ICONS)} />}>
            <DeckTitle highlight="Delivery Experience">Relevant</DeckTitle>
            <DeckParagraphs paragraphs={relevantExperienceIntro} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 14:
      return (
        <DeckSlideFrame index={14} className="deck-slide--team-capability">
          <SlideEyebrow index={14} />
          <DeckSlideBodySplit layout="horizontal" visualLabel={slideVisualLabels[14]} visual={<DeckFeatureGrid variant="premium" items={mapDeckIcons([...teamCapabilityHighlights], PROJECT_TEAM_ICONS)} />}>
            <DeckTitle highlight="Delivery Capability">Project Team &amp;</DeckTitle>
            <DeckParagraphs paragraphs={teamCapabilityPageIntro} />
            <DeckSectionLabel>Team Principles</DeckSectionLabel>
            <DeckBulletList compact items={[...projectPrinciples]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 15:
      return (
        <DeckSlideFrame index={15}>
          <SlideEyebrow index={15} />
          <DeckTitle highlight="Alliance Group">A Unified Compliance Platform for the</DeckTitle>
          <DeckParagraphs paragraphs={hubOverviewIntro} />
          <DeckSectionLabel>Core Platform Capabilities</DeckSectionLabel>
          <DeckFeatureGrid uniform items={mapDeckIcons([...coreCapabilities], ALLIANCE_OUTCOME_ICONS)} />
          <DeckSectionLabel>Business Benefits</DeckSectionLabel>
          <DeckBulletList compact items={[...hubOverviewBenefits]} />
        </DeckSlideFrame>
      );

    case 16:
      return (
        <DeckSlideFrame index={16} className="deck-slide--solution-architecture">
          <SlideEyebrow index={16} />
          <DeckSlideBodySplit
            layout="visual-bottom"
            className="deck-slide-body-split--solution-architecture"
            visualClassName="solution-architecture-panel-below"
            visualLabel={slideVisualLabels[16]}
            visual={<SolutionArchitectureStackVisual />}
          >
            <DeckTitle highlight="Business Environments">One Platform Supporting Multiple</DeckTitle>
            <DeckParagraphs paragraphs={multiEntityArchitectureIntro} />
            <DeckSectionLabel>Architectural Principles</DeckSectionLabel>
            <DeckBulletList compact items={[...architecturalPrinciples]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 17:
      return (
        <DeckSlideFrame index={17}>
          <SlideEyebrow index={17} />
          <DeckSlideBodySplit layout="visual-bottom" visualLabel={slideVisualLabels[17]} visual={<VerticalFlowDiagram items={propertiesIntegration.workflow} icons={ALLIANCE_HUB_ICONS.slice(0, 5)} compact centerContent />}>
            <DeckTitle highlight="Property Management">Integrating MDA/MRI</DeckTitle>
            <DeckParagraphs paragraphs={propertiesIntegration.intro} />
            <DeckSectionLabel>Integration Scope</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...propertiesIntegration.scope]} />
            <DeckSectionLabel>Integration Process</DeckSectionLabel>
            <DeckBulletList compact items={[...propertiesIntegration.process]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 18:
      return (
        <DeckSlideFrame index={18}>
          <SlideEyebrow index={18} />
          <DeckSlideBodySplit layout="visual-bottom" visualLabel={slideVisualLabels[18]} visual={<VerticalFlowDiagram items={lehaeIntegration.workflow} icons={ALLIANCE_ENTITY_ICONS} compact centerContent />}>
            <DeckTitle highlight="Operational Systems">Connecting Existing</DeckTitle>
            <DeckParagraphs paragraphs={lehaeIntegration.intro} />
            <DeckSectionLabel>Integration Features</DeckSectionLabel>
            <DeckBulletList compact items={[...lehaeIntegration.features]} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...lehaeIntegration.benefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 19:
      return (
        <DeckSlideFrame index={19}>
          <SlideEyebrow index={19} />
          <DeckSlideBodySplit layout="visual-bottom" visualLabel={slideVisualLabels[19]} visual={<VerticalFlowDiagram items={fincludeIntegration.workflow} icons={ALLIANCE_HUB_ICONS.slice(0, 4)} compact centerContent />}>
            <DeckTitle highlight="Cloud Accounting">Extending Compliance to</DeckTitle>
            <DeckParagraphs paragraphs={fincludeIntegration.intro} />
            <DeckSectionLabel>Integration Features</DeckSectionLabel>
            <DeckBulletList compact items={[...fincludeIntegration.features]} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...fincludeIntegration.benefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 20:
      return (
        <DeckSlideFrame index={20} className="deck-slide--billing-portal">
          <SlideEyebrow index={20} />
          <DeckSlideBodySplit
            layout="visual-bottom"
            className="deck-slide-body-split--billing-portal"
            visualClassName="billing-portal-panel-below"
            visualLabel={slideVisualLabels[20]}
            visual={<BillingPortalMockup />}
          >
            <DeckTitle highlight="Billing Solution">A Purpose-Built</DeckTitle>
            <DeckParagraphs paragraphs={agihcPortal.intro} />
            <DeckSectionLabel>Portal Features</DeckSectionLabel>
            <DeckBulletList
              compact
              items={agihcPortal.features.map((f) => ({
                ...f,
                inline: true,
              }))}
            />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...agihcPortal.benefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
      return renderAllianceSlidesExtended(index);

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
