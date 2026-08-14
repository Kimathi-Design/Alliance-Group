import { DeckLinkedText } from "@/components/deck/DeckLinkedText";

export function DeckParagraphs({
  paragraphs,
}: {
  paragraphs: readonly string[];
}) {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="deck-type-body">
          <DeckLinkedText>{paragraph}</DeckLinkedText>
        </p>
      ))}
    </>
  );
}
