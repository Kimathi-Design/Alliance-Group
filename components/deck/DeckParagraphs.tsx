import { DeckBody } from "@/components/deck/DeckSlideFrame";

export function DeckParagraphs({
  paragraphs,
}: {
  paragraphs: readonly string[];
}) {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="deck-type-body">
          {paragraph}
        </p>
      ))}
    </>
  );
}
