import { AllianceFooterLogo } from "@/components/deck/IbdMark";
import { SlideSectionCorner } from "@/components/deck/SlideEyebrow";
import { coverMeta } from "@/lib/deck-content";

const PREPARED_BY_LINES = [
  {
    icon: "📍",
    lines: [coverMeta.preparedByDisplay, coverMeta.address],
  },
  {
    icon: "🌐",
    label: "Website",
    value: coverMeta.website,
    href: `https://${coverMeta.website}`,
  },
  {
    icon: "✉️",
    label: "Email",
    value: coverMeta.email,
    href: `mailto:${coverMeta.email}`,
  },
  {
    icon: "📞",
    label: "Tel",
    value: coverMeta.phone1,
  },
] as const;

function ContactRow({
  icon,
  label,
  value,
  lines,
  href,
}: {
  icon: string;
  label?: string;
  value?: string;
  lines?: readonly string[];
  href?: string;
}) {
  return (
    <div className="deck-cover-footer__row">
      <span className="deck-cover-footer__icon" aria-hidden>
        {icon}
      </span>
      {lines ? (
        <div className="deck-cover-footer__text-block">
          {lines.map((line) => (
            <p key={line} className="deck-cover-footer__text">
              {line}
            </p>
          ))}
        </div>
      ) : (
        <p className="deck-cover-footer__text">
          {label && <span className="deck-cover-footer__inline-label">{label}: </span>}
          {href ? (
            <a href={href} className="deck-cover-footer__link">
              {value}
            </a>
          ) : (
            value
          )}
        </p>
      )}
    </div>
  );
}

export function DeckCoverFooter() {
  return (
    <footer className="deck-cover-footer">
      <div className="deck-cover-footer__card">
        <div className="deck-cover-footer__col deck-cover-footer__col--by">
          <p className="deck-cover-footer__label deck-cover-footer__label--by">Prepared By</p>
          <div className="deck-cover-footer__lines">
            {PREPARED_BY_LINES.map((line, index) => (
              <ContactRow
                key={`${line.icon}-${index}`}
                icon={line.icon}
                label={"label" in line ? line.label : undefined}
                value={"value" in line ? line.value : undefined}
                lines={"lines" in line ? line.lines : undefined}
                href={"href" in line ? line.href : undefined}
              />
            ))}
          </div>
        </div>

        <div className="deck-cover-footer__divider" aria-hidden />

        <div className="deck-cover-footer__col deck-cover-footer__col--for">
          <p className="deck-cover-footer__label deck-cover-footer__label--for">Prepared For</p>
          <div className="deck-cover-footer__lines">
            <div className="deck-cover-footer__client-row">
              <div className="deck-cover-footer__client-logo">
                <AllianceFooterLogo className="h-10" />
              </div>
              <p className="deck-cover-footer__client">{coverMeta.preparedFor}</p>
            </div>
            <p className="deck-cover-footer__meta-line">
              <span className="deck-cover-footer__inline-label">Date:</span> {coverMeta.date}
            </p>
            <p className="deck-cover-footer__meta-line deck-cover-footer__meta-line--reference">
              <span className="deck-cover-footer__inline-label">Proposal Reference:</span>{" "}
              {coverMeta.reference}
            </p>
            <p className="deck-cover-footer__subject">
              <span className="deck-cover-footer__subject-label">Subject:</span>{" "}
              <span className="deck-cover-footer__subject-text">
                {coverMeta.subjectLines.map((line, lineIndex) => (
                  <span key={line} className="deck-cover-footer__subject-line">
                    {lineIndex > 0 && <br />}
                    {line}
                  </span>
                ))}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="deck-cover-footer__badge-row">
        <SlideSectionCorner />
      </div>
    </footer>
  );
}
