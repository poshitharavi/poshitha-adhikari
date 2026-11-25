type Props = {
  href?: string | null;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  /** File name to save as. Makes the link download instead of navigate. */
  download?: string;
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center rounded-full transition duration-300 ease-out-expo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const variants = {
  primary: "bg-ink text-cream",
  secondary: "border border-espresso text-espresso",
};

const hovers = {
  primary: "hover:bg-ink-soft",
  secondary: "hover:bg-espresso hover:text-cream",
};

const sizes = {
  md: "button-md px-5 py-2",
  sm: "button-sm px-3 py-2",
};

/**
 * Design system button, rendered as a link.
 * With no href it renders visibly disabled, so there are never dead links.
 */
export function Button({
  href,
  variant = "primary",
  size = "md",
  download,
  className = "",
  children,
}: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (!href) {
    return (
      <span aria-disabled="true" className={`${cls} cursor-not-allowed opacity-50`}>
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      download={download}
      className={`${cls} ${hovers[variant]} hover:-translate-y-0.5 active:translate-y-0 active:scale-98`}
    >
      {children}
    </a>
  );
}
