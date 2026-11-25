/**
 * Scroll cue: outlined circle with a down arrow that keeps sliding through it (Lusion),
 * next to the label in curly brackets (GSAP signature). Brackets in copper.
 */
export function ScrollCue({ label, style }: { label: string; style?: React.CSSProperties }) {
  return (
    <div className="reveal absolute inset-x-0 bottom-6 flex justify-center lg:bottom-8" style={style}>
      <p className="body-sm flex items-center gap-3 text-ink">
        <span
          aria-hidden
          className="relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-ink/40"
        >
          <svg viewBox="0 0 16 16" className="arrow-loop size-4" fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M8 2v11M3.5 8.5 8 13l4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span>
          <span aria-hidden className="text-copper">
            {"{ "}
          </span>
          {label}
          <span aria-hidden className="text-copper">
            {" }"}
          </span>
        </span>
      </p>
    </div>
  );
}
