import { contactHref } from "@/data/site";

type Props = {
  children: React.ReactNode;
  size?: "md" | "sm";
};

const base =
  "inline-flex items-center justify-center rounded-full bg-ink text-white transition duration-300 ease-out-expo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const sizes = {
  md: "button-md px-5 py-2",
  sm: "button-sm px-3 py-2",
};

/** Primary contact action. Renders disabled until a contact email is set in src/data/site.ts. */
export function ContactButton({ children, size = "md" }: Props) {
  const className = `${base} ${sizes[size]}`;

  if (!contactHref) {
    return (
      <span
        aria-disabled="true"
        title="Contact email not set yet"
        className={`${className} cursor-not-allowed opacity-50`}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={contactHref}
      className={`${className} hover:-translate-y-0.5 hover:bg-ink-soft active:translate-y-0 active:scale-98`}
    >
      {children}
    </a>
  );
}
