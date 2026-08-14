"use client";

import type { ReactElement, ReactNode } from "react";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import {
  Award,
  BarChart3,
  BookOpen,
  CalendarDays,
  Briefcase,
  Building2,
  ClipboardCheck,
  Compass,
  FileText,
  Flag,
  Handshake,
  Layers,
  LayoutTemplate,
  Palette,
  PenTool,
  Route,
  Search,
  Server,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { DeckParagraphs } from "@/components/deck/DeckParagraphs";
import { DeckLinkedText } from "@/components/deck/DeckLinkedText";
import { DeckSectionedTableOfContents } from "@/components/deck/DeckSectionedToc";
import { SlideEyebrow, getSlideIcon } from "@/components/deck/SlideEyebrow";
import {
  DeckBody,
  DeckBulletList,
  DeckFeatureGrid,
  DeckInsight,
  DeckOutcomeCardList,
  DeckSectionLabel,
  DeckSlideBodySplit,
  DeckSlideFrame,
  DeckTable,
  DeckTitle,
  DeckVisualPanel,
} from "@/components/deck/DeckSlideFrame";
import {
  GanttChart,
  HubSpokeDiagram,
  SplitCompareDiagram,
  ValueCardsVisual,
  VerticalFlowDiagram,
} from "@/components/deck/visuals/ProposalDiagrams";
import { DeckIconTile, mapDeckIcons } from "@/components/deck/deck-icons";
import {
  approachFacts,
  assumptionsIntro,
  assumptionsList,
  brandPerception,
  collaborationPoints,
  commercialConsiderations,
  commercialExclusions,
  commercialIntro,
  consultantProfile,
  coverLetter,
  dependenciesList,
  ecosystemNodes,
  formatPhaseEstimate,
  formatUsd,
  formatUsdRange,
  inmindCase,
  mediapalCase,
  paymentMilestoneIntro,
  phase1ResponseParagraphs,
  paymentMilestones,
  phase1Gantt,
  phase1QuotationIntro,
  phase1QuotationLines,
  phase1Timeline,
  phase1Total,
  phaseEstimatesIntro,
  fullProgrammeHigh,
  fullProgrammeLow,
  programmeBudgetaryHigh,
  programmeBudgetaryLow,
  phase1Workstreams,
  phaseEstimatesHighLevel,
  portfolioHighlights,
  portfolioIntro,
  programmeRoadmap,
  programmeRoadmapIntro,
  proposalCover,
  recommendations,
  references,
  proposedTeamRoles,
  tableOfContentsSections,
  teamIntro,
  workingModelSteps,
  thirdPartyToolsTemplate,
  torQualificationMap,
  understandingIntro,
  understandingOutcomes,
} from "@/lib/enhancesoft-proposal-content";
import { SLIDE_COUNT, slideTitles } from "@/lib/enhancesoft-deck-content";

const CREDENTIAL_ICONS = [Award, Briefcase, Workflow, Handshake, Layers, LayoutTemplate] as const;
const RECOMMENDATION_ICONS = [Sparkles, Target, Route, FileText] as const;
const PORTFOLIO_ICONS = [Briefcase, Building2, Workflow, Layers, Award, Target] as const;
const INMIND_ICONS = [Search, Sparkles, Layers, BarChart3] as const;
const MEDIAPAL_ICONS = [Target, Users, LayoutTemplate, Layers] as const;
const COMPARE_LEFT_ICONS = [Layers, Building2, Users, Server, Palette] as const;
const COMPARE_RIGHT_ICONS = [Route, Sparkles, Building2, Layers, FileText] as const;
const WORKSTREAM_ICONS = [Compass, PenTool, FileText, Handshake] as const;
const WEEK_ICONS = [Flag, Search, FileText, PenTool, BookOpen, LayoutTemplate, ClipboardCheck] as const;
const PROGRAMME_ICONS = [Building2, Layers, Server, LayoutTemplate, Palette] as const;

function EsHeaderBrand() {
  return (
    <div className="es-header-brand gms-eyebrow inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase backdrop-blur">
      <img
        src={ASSETS.brands.evolveLinkFavicon}
        alt=""
        className="es-header-brand__mark"
        aria-hidden
      />
      <span>Brian Kimathi | Enhancesoft Proposal</span>
      <img
        src={ASSETS.brands.enhancesoftLogo}
        alt=""
        className="es-header-brand__mark"
        aria-hidden
      />
    </div>
  );
}

function EsCornerBadge({ index = 0 }: { index?: number }) {
  const Icon = getSlideIcon(index);
  return (
    <div className="deck-corner-badge gms-eyebrow inline-flex items-center rounded-full uppercase">
      <Icon className="deck-corner-badge__icon" aria-hidden />
      <span className="deck-corner-badge__label font-semibold">
        Branding · Web · Digital Experience
      </span>
    </div>
  );
}

function EsFooterBrand() {
  return (
    <span className="es-footer-brand">
      <img
        src={ASSETS.brands.evolveLinkFavicon}
        alt=""
        className="es-footer-brand__mark"
        aria-hidden
      />
      {proposalCover.preparedBy} |{" "}
      <a
        href="https://www.evolve-link.com/"
        className="es-footer-brand__link"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => event.stopPropagation()}
      >
        EVOLVE-LINK
      </a>
    </span>
  );
}

function EsFrame({
  index,
  children,
  className = "",
  layout = "default",
  hideFooter = false,
  darkBackground = false,
  backgroundImage,
}: {
  index: number;
  children: ReactNode;
  className?: string;
  layout?: "default" | "full";
  hideFooter?: boolean;
  darkBackground?: boolean;
  backgroundImage?: string;
}) {
  const PageIcon = getSlideIcon(index);
  return (
    <DeckSlideFrame
      index={index}
      className={`deck-slide--es ${className}`.trim()}
      layout={layout}
      hideFooter={hideFooter}
      darkBackground={darkBackground}
      backgroundImage={backgroundImage}
      slideCount={SLIDE_COUNT}
      headerBrand={<EsHeaderBrand />}
      footerBrand={<EsFooterBrand />}
      cornerBadge={<EsCornerBadge index={index} />}
      pagePillMark={<PageIcon className="h-4 w-4 text-deck-accent" aria-hidden />}
      slideTitle={slideTitles[index]}
      tocSection={null}
    >
      {layout !== "full" ? (
        <SlideEyebrow index={index} label={slideTitles[index]} />
      ) : null}
      {children}
    </DeckSlideFrame>
  );
}

function EsCoverTitle({
  title = proposalCover.title,
  part,
  subtitle = proposalCover.subtitle,
  tagline = proposalCover.tagline,
  lede,
}: {
  title?: string;
  part?: string;
  subtitle?: string | null;
  tagline?: string;
  lede?: string;
} = {}) {
  return (
    <>
      <h1 className="deck-cover-hero__title">{title}</h1>
      {part ? <p className="deck-cover-hero__subtitle">{part}</p> : null}
      {subtitle ? (
        <p className="deck-cover-hero__subtitle deck-cover-hero__subtitle--accent">{subtitle}</p>
      ) : null}
      <p className="deck-cover-hero__tagline">{tagline}</p>
      {lede ? <p className="es-cover-lede">{lede}</p> : null}
    </>
  );
}

function EsSignPortrait() {
  return (
    <img
      src={ASSETS.consultantPortrait}
      alt="Brian Kimathi"
      className="es-sign__portrait"
    />
  );
}

export function renderEnhancesoftSlide(index: number): ReactElement {
  switch (index) {
    case 0:
      return (
        <EsFrame index={0} layout="full" hideFooter backgroundImage={ASSETS.enhancesoftCover}>
          <div className="deck-cover-content">
            <div className="deck-cover-lower es-cover-lower--front">
              <div className="deck-cover-title-stack">
                <EsHeaderBrand />
                <EsCoverTitle part={proposalCover.part} lede={proposalCover.lede} />
              </div>
            </div>
          </div>
        </EsFrame>
      );

    case 1:
      return (
        <EsFrame index={1}>
          <div className="es-letter flex flex-col">
            <div className="es-letter__meta">
              <div>
                <p className="deck-type-body font-bold">
                  <span className="text-[color:var(--gms-text-muted)]">To: </span>
                  {coverLetter.to}
                </p>
                <p className="deck-type-body font-bold">{coverLetter.toTitle}</p>
                <p className="deck-type-body font-bold">{coverLetter.toOrg}</p>
              </div>
              <div className="es-letter__from">
                <p className="deck-type-body">
                  <span className="text-[color:var(--gms-text-muted)]">Date: </span>
                  {coverLetter.dateLine}
                </p>
              </div>
            </div>
            <p className="deck-type-body font-semibold">{coverLetter.salutation}</p>
            <div className="es-letter__body">
              <DeckParagraphs paragraphs={coverLetter.paragraphs} />
            </div>
            <div className="es-letter__sign">
              <div className="es-sign__copy">
                <p className="es-letter__closing deck-type-body font-semibold">{coverLetter.closing}</p>
                <p className="deck-type-body font-semibold">{coverLetter.signatureName}</p>
                <p className="deck-type-body font-semibold text-[color:var(--gms-text-muted)]">
                  {coverLetter.signatureTagline}
                </p>
                <p className="deck-type-body">
                  <DeckLinkedText>{consultantProfile.email}</DeckLinkedText>
                  {" · "}
                  {consultantProfile.phone}
                </p>
                <p className="deck-type-body text-deck-accent">
                  <DeckLinkedText>{consultantProfile.portfolioUrl}</DeckLinkedText>
                </p>
              </div>
              <EsSignPortrait />
            </div>
          </div>
        </EsFrame>
      );

    case 2:
      return (
        <EsFrame index={2}>
          <div className="deck-toc-header flex w-full shrink-0 items-end justify-between">
            <p className="deck-title-lg">Proposal Outline</p>
            <span className="deck-title-lg">Page</span>
          </div>
          <DeckSectionedTableOfContents sections={tableOfContentsSections} />
        </EsFrame>
      );

    case 3:
      return (
        <EsFrame index={3} className="deck-slide--hub-spoke-below">
          <DeckTitle highlight="Assignment">Understanding the</DeckTitle>
          <DeckParagraphs paragraphs={understandingIntro} />
          <DeckSectionLabel>Desired Outcomes</DeckSectionLabel>
          <DeckBulletList compact items={[...understandingOutcomes]} />
          <DeckVisualPanel className="hub-spoke-panel-below" label="Ecosystem Overview">
            <HubSpokeDiagram
              center=""
              centerMark={
                <>
                  <Image
                    src={ASSETS.brands.enhancesoftLogo}
                    alt=""
                    width={512}
                    height={512}
                    aria-hidden
                    className="hub-spoke-visual__es-logo"
                  />
                  <Image
                    src={ASSETS.brands.enhancesoftWordmark}
                    alt="Enhancesoft"
                    width={300}
                    height={62}
                    className="hub-spoke-visual__es-wordmark"
                  />
                </>
              }
              showPartnerMarks={false}
              nodes={[...ecosystemNodes]}
              gateway="Unified Brand System"
              icons={[Layers, Workflow, Server, Building2]}
            />
          </DeckVisualPanel>
        </EsFrame>
      );

    case 4:
      return (
        <EsFrame index={4} className="deck-slide--es-about">
          <DeckSlideBodySplit
            layout="horizontal"
            visualLabel="Capability Snapshot"
            visual={
              <DeckFeatureGrid
                uniform
                items={mapDeckIcons([...consultantProfile.credentials], CREDENTIAL_ICONS)}
              />
            }
          >
            <DeckTitle highlight="Consultant">About the</DeckTitle>
            <DeckBody>
              {consultantProfile.name} · {consultantProfile.location} · {consultantProfile.focus.join(" · ")}
            </DeckBody>
            <DeckParagraphs
              paragraphs={[
                consultantProfile.summary,
                consultantProfile.deliveryStyle,
                consultantProfile.enhancesoftFit,
              ]}
            />
            <DeckSectionLabel>Aligned to ToR Qualifications</DeckSectionLabel>
            <DeckBulletList compact items={[...torQualificationMap]} />
            <DeckBody>
              {consultantProfile.email} · {consultantProfile.phone}
            </DeckBody>
          </DeckSlideBodySplit>
        </EsFrame>
      );

    case 5:
      return (
        <EsFrame index={5}>
          <DeckTitle highlight="Experience">Relevant</DeckTitle>
          <DeckParagraphs paragraphs={[...portfolioIntro]} />
          <div className="es-clients-table">
            <DeckTable
              compact
              headers={["Client", "Type", "Relevance to Enhancesoft"]}
              rows={portfolioHighlights.map((p) => [p.client, p.type, p.relevance])}
            />
          </div>
          <DeckVisualPanel className="es-clients-panel" label="What was delivered">
            <ValueCardsVisual
              items={portfolioHighlights.map((p) => ({
                title: p.client,
                description: p.delivered,
                logo: ASSETS.brands.clients[p.logo],
              }))}
              icons={[...PORTFOLIO_ICONS]}
            />
          </DeckVisualPanel>
        </EsFrame>
      );

    case 6:
      return (
        <EsFrame index={6} className="deck-slide--es-inmind">
          <DeckTitle highlight="InMind OS">Featured Case</DeckTitle>
          <DeckParagraphs paragraphs={[...inmindCase.intro]} />
          <div className="es-inmind-modules">
            {inmindCase.modules.map((item, i) => {
              const Icon = INMIND_ICONS[i] ?? Search;
              return (
                <div key={item.title} className="es-fill-card gms-card rounded-2xl">
                  <div className="es-inmind-module__head">
                    <p className="deck-type-card-title">{item.title}</p>
                    <DeckIconTile icon={Icon} size="compact" />
                  </div>
                  <p className="deck-type-card-body mt-2">{item.description}</p>
                </div>
              );
            })}
          </div>
          <DeckVisualPanel className="es-inmind-panel">
            <img
              src={ASSETS.inmindLive}
              alt="InMind OS live product"
              className="es-inmind-shot"
            />
          </DeckVisualPanel>
          <DeckInsight label="Relevance to Enhancesoft" className="es-insight--highlight">{inmindCase.relevance}</DeckInsight>
        </EsFrame>
      );

    case 7:
      return (
        <EsFrame index={7} className="deck-slide--es-inmind">
          <DeckTitle highlight="MediaPal">Featured Case</DeckTitle>
          <DeckParagraphs paragraphs={[...mediapalCase.intro]} />
          <div className="es-inmind-modules">
            {mediapalCase.modules.map((item, i) => {
              const Icon = MEDIAPAL_ICONS[i] ?? Target;
              return (
                <div key={item.title} className="es-fill-card gms-card rounded-2xl">
                  <div className="es-inmind-module__head">
                    <p className="deck-type-card-title">{item.title}</p>
                    <DeckIconTile icon={Icon} size="compact" />
                  </div>
                  <p className="deck-type-card-body mt-2">{item.description}</p>
                </div>
              );
            })}
          </div>
          <DeckVisualPanel className="es-inmind-panel">
            <img
              src={ASSETS.mediapalLive}
              alt="MediaPal live website"
              className="es-inmind-shot"
            />
          </DeckVisualPanel>
          <DeckInsight label="Relevance to Enhancesoft" className="es-insight--highlight">
            {mediapalCase.relevance}
          </DeckInsight>
        </EsFrame>
      );

    case 8:
      return (
        <EsFrame index={8} className="deck-slide--es-schedule">
          <DeckTitle highlight="Methodology">Approach &amp;</DeckTitle>
          <DeckBody>
            Phase 1 establishes the brand operating system that unlocks coherent delivery across
            corporate and product websites in later phases, without restarting discovery each
            time.
          </DeckBody>
          <div className="es-highlight-grid">
            {approachFacts.map((item) => (
              <div key={item.title} className="es-fill-card gms-card rounded-2xl">
                <p className="deck-type-card-title">{item.title}</p>
                <p className="deck-type-card-body mt-2">{item.description}</p>
              </div>
            ))}
          </div>
          <DeckVisualPanel className="es-gantt-panel" label="Phase 1 — 8-week schedule">
            <GanttChart
              weeks={8}
              title={null}
              rowLabel="Workstream"
              labelWidth="minmax(15.5rem, 18.5rem)"
              iconSize="sm"
              labelsOutside
              phases={phase1Gantt.map((t) => [t.phase, t.duration] as const)}
            />
          </DeckVisualPanel>
        </EsFrame>
      );

    case 9:
      return (
        <EsFrame index={9} className="deck-slide--business-challenges">
          <DeckTitle highlight="Recommendations">Brand Ecosystem</DeckTitle>
          <DeckSlideBodySplit
            layout="visual-bottom"
            className="deck-slide-body-split--business-challenges"
            visualClassName="business-challenges-panel-below"
            visualLabel="Perception vs Delivery"
            visual={
              <SplitCompareDiagram
                leftTitle="Desired Perception"
                rightTitle="How Phase 1 Responds"
                leftItems={brandPerception.map((b) => `${b.title} — ${b.description}`)}
                rightItems={[...phase1ResponseParagraphs]}
                leftIcons={[...COMPARE_LEFT_ICONS]}
                rightIcons={[...COMPARE_RIGHT_ICONS]}
                rightLayout="row"
              />
            }
          >
            <DeckOutcomeCardList
              items={recommendations.map((r) => ({
                title: r.title,
                description: r.description,
              }))}
              icons={[...RECOMMENDATION_ICONS]}
            />
          </DeckSlideBodySplit>
        </EsFrame>
      );

    case 10:
      return (
        <EsFrame index={10}>
          <DeckTitle highlight="Work Plan">Phase 1</DeckTitle>
          <div className="es-workstream-grid">
            {phase1Workstreams.map((ws, i) => {
              const Icon = WORKSTREAM_ICONS[i] ?? Compass;
              return (
                <div key={ws.title} className="es-workstream-card gms-card rounded-2xl">
                  <div className="es-workstream-card__head">
                    <div className="deck-flow-step-card__tile deck-flow-step-card__tile--default">
                      <Icon aria-hidden />
                    </div>
                    <div className="es-workstream-card__heading">
                      <p className="deck-type-card-title">{ws.title}</p>
                      <p className="es-workstream-card__summary">{ws.summary}</p>
                    </div>
                  </div>
                  <ul className="es-workstream-card__list">
                    {ws.outputs.map((output) => (
                      <li key={output}>{output}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <DeckSectionLabel>Indicative timeline</DeckSectionLabel>
          <div className="es-week-grid">
            {phase1Timeline.slice(0, 4).map((row, i) => {
              const Icon = WEEK_ICONS[i] ?? Flag;
              return (
                <div key={row.week} className="es-week-grid__card gms-card rounded-2xl">
                  <div className="es-week-grid__head">
                    <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact">
                      <Icon aria-hidden />
                    </div>
                    <p className="es-week-grid__week">Week {row.week}</p>
                  </div>
                  <p className="deck-type-card-body">{row.milestone}</p>
                </div>
              );
            })}
          </div>
          <div className="es-week-grid es-week-grid--tail">
            {phase1Timeline.slice(4).map((row, i) => {
              const Icon = WEEK_ICONS[i + 4] ?? ClipboardCheck;
              return (
                <div key={row.week} className="es-week-grid__card gms-card rounded-2xl">
                  <div className="es-week-grid__head">
                    <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact">
                      <Icon aria-hidden />
                    </div>
                    <p className="es-week-grid__week">Week {row.week}</p>
                  </div>
                  <p className="deck-type-card-body">{row.milestone}</p>
                </div>
              );
            })}
          </div>
          <DeckInsight label="Duration" className="es-insight--highlight">
            Indicative Phase 1 duration: <strong>6–8 weeks</strong>, subject to stakeholder
            availability and the review cadence agreed at kickoff. Week 8 is handover and
            sign-off, not a buffer for open design.
          </DeckInsight>
        </EsFrame>
      );

    case 11:
      return (
        <EsFrame index={11}>
          <DeckTitle highlight="Roadmap">Phases 2–6</DeckTitle>
          <DeckParagraphs paragraphs={[...programmeRoadmapIntro]} />
          <div className="es-roadmap-grid">
            {programmeRoadmap.map((row, i) => {
              const Icon = PROGRAMME_ICONS[i] ?? Layers;
              return (
                <div key={row.phase} className="es-roadmap-card gms-card rounded-2xl">
                  <div className="es-roadmap-card__head">
                    <div className="deck-flow-step-card__tile deck-flow-step-card__tile--default">
                      <Icon aria-hidden />
                    </div>
                    <div className="es-roadmap-card__heading">
                      <p className="es-roadmap-card__phase">{row.phase}</p>
                      <p className="deck-type-card-title">{row.title}</p>
                    </div>
                  </div>
                  <div className="es-roadmap-card__meta">
                    <div className="es-roadmap-card__fact">
                      <p className="es-roadmap-card__fact-label">Inherits</p>
                      <p className="es-roadmap-card__fact-body">{row.inherits}</p>
                    </div>
                    <div className="es-roadmap-card__fact">
                      <p className="es-roadmap-card__fact-label">Delivers</p>
                      <p className="es-roadmap-card__fact-body">{row.delivers}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <DeckInsight label="Phase 1 unlock" className="es-insight--highlight">
            Website and multimedia phases start from the signed-off kit: marks, tokens,
            guidelines, and architecture. Discovery is not restarted. Each later phase is a
            separate contract (ToR 8.1), evaluated on delivery quality before the next starts.
          </DeckInsight>
        </EsFrame>
      );

    case 12:
      return (
        <EsFrame index={12} className="deck-slide--es-team">
          <DeckTitle highlight="Collaboration">Team &amp;</DeckTitle>
          <DeckSlideBodySplit
            layout="horizontal"
            visualLabel="Working Model"
            visual={
              <VerticalFlowDiagram
                compact
                items={[...workingModelSteps]}
                icons={[Users, FileText, Target, Handshake]}
              />
            }
          >
            <DeckSectionLabel>Proposed project team</DeckSectionLabel>
            <DeckBody>
              <strong>Brian Kimathi</strong> — Lead Consultant. Nairobi. The named personnel for
              this phase.
            </DeckBody>
            <DeckParagraphs paragraphs={[...teamIntro]} />
            <DeckSectionLabel>Roles &amp; responsibilities</DeckSectionLabel>
            <DeckBulletList compact items={[...proposedTeamRoles]} />
            <DeckSectionLabel>Governance</DeckSectionLabel>
            <DeckBulletList compact items={[...collaborationPoints]} />
          </DeckSlideBodySplit>
        </EsFrame>
      );

    case 13:
      return (
        <EsFrame index={13}>
          <DeckTitle highlight="References">Assumptions &amp;</DeckTitle>
          <DeckParagraphs paragraphs={[...assumptionsIntro]} />
          <DeckSectionLabel>Assumptions</DeckSectionLabel>
          <DeckBulletList compact items={[...assumptionsList]} />
          <DeckSectionLabel>Dependencies</DeckSectionLabel>
          <DeckBulletList compact items={[...dependenciesList]} />
          <DeckSectionLabel>References</DeckSectionLabel>
          <DeckTable
            compact
            headers={["Referee", "Organisation", "Role", "Phone", "Email"]}
            rows={references.map((r) => [r.label, r.org, r.engagement, r.contact, r.email])}
          />
          <DeckInsight label="Available on request">
            Both referees may be contacted on the phone numbers and emails above to speak to
            similar brand and digital experience work. Additional case material:{" "}
            <DeckLinkedText>{consultantProfile.portfolioUrl}</DeckLinkedText>
          </DeckInsight>
        </EsFrame>
      );

    case 14:
      return (
        <EsFrame
          index={14}
          layout="full"
          hideFooter
          className="deck-slide--es-partb"
          backgroundImage={ASSETS.enhancesoftPartb}
        >
          <div className="es-partb">
            <div className="deck-cover-title-stack">
              <EsHeaderBrand />
              <EsCoverTitle
                title="Financial Proposal"
                part="Part B"
                subtitle={null}
                tagline="Phase 1 Focus — Fixed fee, then planning bands if awarded"
                lede="The fixed fee for the Phase 1 identity programme, then planning bands for the websites and multimedia if Enhancesoft proceeds. Tools, payment gates, and commercial terms complete the offer."
              />
            </div>
          </div>
        </EsFrame>
      );

    case 15:
      return (
        <EsFrame index={15} className="deck-slide--es-quote">
          <DeckTitle highlight="Quotation">Phase 1</DeckTitle>
          <DeckParagraphs paragraphs={[...phase1QuotationIntro]} />
          <div className="es-quote-table">
            <DeckTable
              headers={["Activity / deliverable", "Amount (USD)"]}
              rows={phase1QuotationLines.map((line) => [line.activity, formatUsd(line.amount)])}
            />
          </div>
          <div className="es-quote-total">
            <div>
              <p className="es-quote-total__label">Phase 1 total</p>
              <p className="es-quote-total__note">Fixed fee · USD · handover and knowledge transfer included</p>
            </div>
            <p className="es-quote-total__amount">{formatUsd(phase1Total)}</p>
          </div>
          <div className="es-quote-stats">
            <div className="es-quote-stat gms-card rounded-3xl">
              <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact es-quote-stat__icon">
                <FileText aria-hidden />
              </div>
              <p className="es-quote-stat__value">7</p>
              <p className="es-quote-stat__label">Deliverable lines</p>
              <p className="es-quote-stat__body">
                Discovery through handover: the breakdown requested, not a blended day rate.
              </p>
            </div>
            <div className="es-quote-stat gms-card rounded-3xl">
              <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact es-quote-stat__icon">
                <CalendarDays aria-hidden />
              </div>
              <p className="es-quote-stat__value">6–8 wks</p>
              <p className="es-quote-stat__label">Delivery window</p>
              <p className="es-quote-stat__body">
                Indicative Phase 1 duration. Week 8 is handover and sign-off, not leftover design
                time.
              </p>
            </div>
          </div>
        </EsFrame>
      );

    case 16:
      return (
        <EsFrame index={16} className="deck-slide--es-quote">
          <DeckTitle highlight="Estimates">Phases 2–6</DeckTitle>
          <DeckParagraphs paragraphs={[...phaseEstimatesIntro]} />
          <div className="es-quote-table">
            <DeckTable
              headers={["Phase / scope", "Duration", "Estimate (USD)"]}
              rows={phaseEstimatesHighLevel
                .filter((row) => row.phaseId > 1)
                .map((row) => [
                  `Phase ${row.phaseId} — ${row.name}`,
                  row.duration,
                  formatPhaseEstimate(row),
                ])}
            />
          </div>
          <div className="es-quote-total">
            <div>
              <p className="es-quote-total__label">Phases 2–6 planning band</p>
              <p className="es-quote-total__note">
                Budgetary only · USD · each awarded phase quoted under a separate contract
              </p>
            </div>
            <p className="es-quote-total__amount es-quote-total__amount--range">
              {formatUsdRange(programmeBudgetaryLow, programmeBudgetaryHigh)}
            </p>
          </div>
          <div className="es-quote-stats">
            <div className="es-quote-stat gms-card rounded-3xl">
              <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact es-quote-stat__icon">
                <FileText aria-hidden />
              </div>
              <p className="es-quote-stat__value">{formatUsd(phase1Total)}</p>
              <p className="es-quote-stat__label">Phase 1 already quoted</p>
              <p className="es-quote-stat__body">
                Fixed fee from the previous slide. Not included in this planning band.
              </p>
            </div>
            <div className="es-quote-stat gms-card rounded-3xl">
              <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact es-quote-stat__icon">
                <Layers aria-hidden />
              </div>
              <p className="es-quote-stat__value es-quote-stat__value--range">
                {formatUsdRange(fullProgrammeLow, fullProgrammeHigh)}
              </p>
              <p className="es-quote-stat__label">Programme if all awarded</p>
              <p className="es-quote-stat__body">
                {formatUsdRange(fullProgrammeLow, fullProgrammeHigh)} if every phase is awarded.
                Completion of Phase 1 does not select later phases (ToR 8.1).
              </p>
            </div>
          </div>
        </EsFrame>
      );

    case 17:
      return (
        <EsFrame index={17}>
          <DeckTitle highlight="Payment Milestones">Tools &amp;</DeckTitle>
          <DeckSectionLabel>Third-party software &amp; licences</DeckSectionLabel>
          <DeckTable
            compact
            headers={["Item", "Purpose", "Cost (USD)", "Justification"]}
            rows={thirdPartyToolsTemplate.map((t) => [
              t.name,
              t.purpose,
              t.costLabel,
              t.justification,
            ])}
          />
          <div className="es-pay-block">
            <DeckSectionLabel>Phase 1 payment milestones</DeckSectionLabel>
            <div className="es-pay-table">
              <DeckTable
                headers={["Milestone", "%", "USD"]}
                rows={paymentMilestones.map((m) => [m.milestone, m.pct, formatUsd(m.amount)])}
              />
            </div>
            <div className="es-pay-notes">
              <DeckParagraphs paragraphs={[...paymentMilestoneIntro]} />
            </div>
          </div>
        </EsFrame>
      );

    case 18:
      return (
        <EsFrame index={18}>
          <DeckTitle highlight="Closing">Commercial Terms &amp;</DeckTitle>
          <DeckParagraphs paragraphs={[...commercialIntro]} />
          <DeckSectionLabel>Commercial considerations</DeckSectionLabel>
          <DeckBulletList items={[...commercialConsiderations]} />
          <DeckSectionLabel>Exclusions</DeckSectionLabel>
          <DeckBulletList items={[...commercialExclusions]} />
          <DeckInsight label="Commitment" className="es-insight--highlight">
            I appreciate the opportunity to partner with Enhancesoft on this phased brand and
            digital experience programme, and welcome feedback ahead of final submission.
          </DeckInsight>
          <div className="es-close-sign mt-auto border-t border-[color:var(--gms-border)]">
            <div className="es-sign__copy">
              <p className="deck-type-body font-semibold">{coverLetter.signatureName}</p>
              <p className="deck-type-body text-[color:var(--gms-text-muted)]">
                {coverLetter.signatureTagline}
              </p>
              <p className="deck-type-body">
                <DeckLinkedText>{consultantProfile.email}</DeckLinkedText>
                {" · "}
                {consultantProfile.phone}
              </p>
              <p className="deck-type-body text-deck-accent">
                <DeckLinkedText>{consultantProfile.portfolioUrl}</DeckLinkedText>
              </p>
            </div>
            <EsSignPortrait />
          </div>
        </EsFrame>
      );

    case 19:
      return (
        <EsFrame index={19} layout="full" hideFooter backgroundImage={ASSETS.enhancesoftBack}>
          <div aria-hidden className="deck-cover-gradient pointer-events-none absolute inset-x-0 bottom-0 z-[2]" />
          <div className="deck-cover-content">
            <div className="deck-cover-lower">
              <div className="deck-cover-title-stack">
                <EsHeaderBrand />
                <EsCoverTitle
                  title="Thank You"
                  part={coverLetter.dateLine}
                  subtitle="Technical & Financial Proposal"
                  tagline="Phase 1 Focus — Ready to commence on signing"
                  lede="I look forward to partnering with Enhancesoft on the identity programme. The NDA is executed before work begins."
                />
              </div>
            </div>
          </div>
        </EsFrame>
      );

    default:
      return (
        <EsFrame index={index}>
          <DeckTitle>Slide {index + 1}</DeckTitle>
        </EsFrame>
      );
  }
}

export const ENHANCESOFT_SLIDE_COUNT = SLIDE_COUNT;
