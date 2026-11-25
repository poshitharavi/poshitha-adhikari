import { Plus } from "./plus";

type Props = {
  href: string;
  /** File name to save as. Makes the link download instead of navigate. */
  download?: string;
  className?: string;
  children: string;
};

/**
 * Pill action: outlined hairline pill (GSAP style), uppercase label and "+" (Lusion style).
 * Hover: the label rolls up and a copy rolls in from below, the "+" turns a quarter.
 * Transform only; reduced motion keeps just the opacity change.
 */
export function PillButton({ href, download, className = "", children }: Props) {
  return (
    <a
      href={href}
      download={download}
      className={`group caps inline-flex items-center gap-3 rounded-full border border-ink/70 px-4 py-3 whitespace-nowrap sm:px-6 text-ink transition duration-300 ease-out-expo hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink active:scale-98 ${className}`}
    >
      <Plus className="transition-transform duration-500 ease-out-expo group-hover:rotate-90 motion-reduce:transition-none" />
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-out-expo group-hover:-translate-y-full motion-reduce:transition-none">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-out-expo group-hover:translate-y-0 motion-reduce:transition-none"
        >
          {children}
        </span>
      </span>
    </a>
  );
}
