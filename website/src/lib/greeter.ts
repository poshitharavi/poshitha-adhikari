/** Timing for the hero greeter. Plain module so server and client components can share it. */
export const START_MS = 500;
export const TYPE_MS = 90; // greeting, one character
export const INTRO_MS = 38; // intro sentence, one character
export const DELETE_MS = 45;
export const LINE_PAUSE_MS = 300;
export const HOLD_MS = 2200; // how long each greeting stays

/** Splits text into what a reader sees as characters, so Sinhala and Tamil letters type cleanly. */
export function graphemes(text: string, lang: string): string[] {
  try {
    return Array.from(new Intl.Segmenter(lang, { granularity: "grapheme" }).segment(text), (s) => s.segment);
  } catch {
    return Array.from(text);
  }
}

/** The intro as one string; lines are joined by a space. */
export function introText(lines: readonly string[]) {
  return lines.join(" ");
}

/** When the first greeting and the intro have finished typing. */
export function introTypedMs(firstGreeting: string, lines: readonly string[]) {
  return (
    START_MS +
    graphemes(`${firstGreeting},`, "en").length * TYPE_MS +
    LINE_PAUSE_MS +
    introText(lines).length * INTRO_MS
  );
}
