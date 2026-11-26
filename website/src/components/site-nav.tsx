"use client";

import { useEffect, useState } from "react";

type Section = { readonly id: string; readonly label: string };

const link =
  "relative block text-bark transition-colors duration-300 ease-out-expo hover:text-espresso after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-500 after:ease-out-expo hover:after:origin-left hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

/**
 * Section links printed on the wall: no surface, no border, no blur. Sits at the top of the
 * hero and scrolls away with it. Below 1024px a "Menu" text toggle opens a full height panel.
 */
export function SiteNav({ sections }: { sections: readonly Section[] }) {
  const [open, setOpen] = useState(false);

  // Close the panel with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="reveal absolute inset-x-0 top-0 z-50 flex justify-center px-4 py-6 [--reveal-delay:300ms] lg:py-8">
        <nav aria-label="Sections">
          {/* Desktop: a single row of tracked caps on the wall */}
          <ul className="eyebrow hidden items-center gap-8 lg:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={link}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile: text toggle, no surface */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className={`eyebrow relative z-10 flex items-center gap-3 py-2 lg:hidden ${open ? "text-espresso" : "text-bark"} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink`}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span aria-hidden className="relative block h-2.5 w-4">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-500 ease-out-expo ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-500 ease-out-expo ${
                  open ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Outside the header: its entrance animation would otherwise trap the fixed panel inside it. */}
      <nav aria-label="Sections menu">
        {open && (
          <div id="mobile-menu" className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-xl lg:hidden">
            <ul className="flex h-full flex-col items-center justify-center gap-4">
              {sections.map((s, i) => (
                <li
                  key={s.id}
                  className="menu-link"
                  style={{ "--reveal-delay": `${Math.min(i * 60, 400)}ms` } as React.CSSProperties}
                >
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="display-2 block text-espresso focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
