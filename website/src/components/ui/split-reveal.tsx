/**
 * Reveals words letter by letter: each letter slides up from behind its word's edge
 * with a small tilt (CSS only, see globals.css "Split reveal"). Letters lift on hover.
 * Decorative: mark the parent aria-hidden and give screen readers the full text.
 */
export const CHAR_STAGGER_MS = 40;
const CHAR_DURATION_MS = 900;

/** When the last letter of `words` has settled. */
export function splitRevealEndMs(words: readonly string[], startMs: number) {
  return startMs + (words.join("").length - 1) * CHAR_STAGGER_MS + CHAR_DURATION_MS;
}

export function SplitReveal({
  words,
  startMs,
  className = "",
}: {
  words: readonly string[];
  startMs: number;
  /** Layout of the words, e.g. "flex flex-col items-center lg:block" to stack on phones. */
  className?: string;
}) {
  const offsets = words.map((_, wi) => words.slice(0, wi).join("").length);

  return (
    <span className={className}>
      {words.map((word, wi) => (
        <span key={wi}>
          <span className="split-word">
            {Array.from(word).map((ch, ci) => (
              <span
                key={ci}
                className="split-char"
                style={{ "--d": `${startMs + (offsets[wi] + ci) * CHAR_STAGGER_MS}ms` } as React.CSSProperties}
              >
                <span>{ch}</span>
              </span>
            ))}
          </span>
          {wi < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}
