import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { coverMeta } from "@/lib/deck-content";

const CONTACT_LINES = [
  { icon: "📍", label: "Location", value: coverMeta.location },
  { icon: "🌐", label: "Website", value: coverMeta.website, href: `https://${coverMeta.website}` },
  {
    icon: "📞",
    label: "Contact",
    value: `${coverMeta.phone1} | ${coverMeta.phone2}`,
  },
  { icon: "✉️", label: "Email", value: coverMeta.email, href: `mailto:${coverMeta.email}` },
  { icon: "🏛️", label: "TIN", value: coverMeta.tin },
] as const;

export function IbdContactCard() {
  return (
    <div className="deck-ibd-contact-card">
      <div className="deck-ibd-contact-card__logo">
        <Image
          src={ASSETS.brands.ibdLogo}
          alt="Infinity Business Dynamics"
          width={2560}
          height={424}
          className="h-auto w-full"
        />
      </div>
      <div className="deck-ibd-contact-card__body">
        <div className="deck-ibd-contact-card__rows">
          {CONTACT_LINES.map((line) => (
            <div key={line.label} className="deck-ibd-contact-card__row">
              <span className="deck-ibd-contact-card__icon-wrap" aria-hidden>
                <span className="deck-ibd-contact-card__icon">{line.icon}</span>
              </span>
              <p className="deck-ibd-contact-card__line">
                <span className="deck-ibd-contact-card__line-label">{line.label}:</span>{" "}
                {"href" in line && line.href ? (
                  <a
                    href={line.href}
                    className="deck-ibd-contact-card__link"
                    target={line.label === "Website" ? "_blank" : undefined}
                    rel={line.label === "Website" ? "noopener noreferrer" : undefined}
                  >
                    {line.value}
                  </a>
                ) : (
                  line.value
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
