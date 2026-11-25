import { Eyebrow } from "./typography";

/** Ornament line: ── “ ── or ── ” ── */
function Rule({ mark }: { mark: string }) {
  return (
    <span aria-hidden className="flex items-center gap-3 text-bark">
      <span className="h-px w-8 bg-bark/60 lg:w-10" />
      <span className="font-display text-lg leading-none">{mark}</span>
      <span className="h-px w-8 bg-bark/60 lg:w-10" />
    </span>
  );
}

/** Poster style quote: tracked caps between two ornament rules. Use <br /> to break lines. */
export function Quote({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure className={`flex flex-col items-center gap-2 text-center ${className}`}>
      <Rule mark={"\u201C"} />
      <Eyebrow as="blockquote">{children}</Eyebrow>
      <Rule mark={"\u201D"} />
    </figure>
  );
}
