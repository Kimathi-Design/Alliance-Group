import type { ReactNode } from "react";

const LINK_RE =
  /(https?:\/\/[^\s]+|www\.[^\s]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;

function splitTrail(value: string) {
  let core = value;
  let trail = "";
  while (/[.,;:!?)\]]$/.test(core)) {
    trail = core.slice(-1) + trail;
    core = core.slice(0, -1);
  }
  return { core, trail };
}

function hrefFor(core: string) {
  if (core.includes("@") && !core.startsWith("http")) {
    return `mailto:${core}`;
  }
  if (core.startsWith("www.")) {
    return `https://${core}`;
  }
  return core;
}

export function DeckLinkedText({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const parts: ReactNode[] = [];
  let last = 0;
  const text = children;
  const matches = text.matchAll(LINK_RE);

  for (const match of matches) {
    const raw = match[0];
    const index = match.index ?? 0;
    if (index > last) {
      parts.push(text.slice(last, index));
    }
    const { core, trail } = splitTrail(raw);
    const href = hrefFor(core);
    const external = href.startsWith("http");
    parts.push(
      <a
        key={`${href}-${index}`}
        href={href}
        className={`deck-inline-link${className ? ` ${className}` : ""}`}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={(event) => event.stopPropagation()}
      >
        {core}
      </a>,
    );
    if (trail) {
      parts.push(trail);
    }
    last = index + raw.length;
  }

  if (last < text.length) {
    parts.push(text.slice(last));
  }

  return <>{parts.length ? parts : text}</>;
}
