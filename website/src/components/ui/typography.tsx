/**
 * Design system typography. Use these instead of styling text ad hoc.
 * Sizes, fonts and colours come from tokens in app/globals.css.
 */

type Props<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/** Heavy condensed uppercase headline (Anton). Level 1 is the hero. */
export function Display<T extends React.ElementType = "h2">({
  as,
  level = 2,
  className,
  children,
  ...rest
}: Props<T> & { level?: 1 | 2 | 3 }) {
  const Tag = as ?? "h2";
  const size = { 1: "display-1", 2: "display-2", 3: "display-3" }[level];
  return (
    <Tag className={cx(size, "text-espresso", className)} {...rest}>
      {children}
    </Tag>
  );
}

/** Signature accent word (script font, copper). One or two words, layered over a Display. */
export function Script<T extends React.ElementType = "span">({
  as,
  level = 1,
  className,
  children,
  ...rest
}: Props<T> & { level?: 1 | 2 }) {
  const Tag = as ?? "span";
  return (
    <Tag
      className={cx(level === 1 ? "script-1" : "script-2", "block text-copper", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Small tracked capitals for labels, kickers and quotes. */
export function Eyebrow<T extends React.ElementType = "p">({
  as,
  className,
  children,
  ...rest
}: Props<T>) {
  const Tag = as ?? "p";
  return (
    <Tag className={cx("eyebrow text-bark", className)} {...rest}>
      {children}
    </Tag>
  );
}

/** Running text. */
export function Text<T extends React.ElementType = "p">({
  as,
  size = "md",
  className,
  children,
  ...rest
}: Props<T> & { size?: "lg" | "md" | "sm" }) {
  const Tag = as ?? "p";
  const cls = { lg: "body-lg", md: "body", sm: "body-sm" }[size];
  return (
    <Tag className={cx(cls, "text-pretty text-bark", className)} {...rest}>
      {children}
    </Tag>
  );
}
