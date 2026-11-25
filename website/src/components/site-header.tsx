import { site } from "@/data/site";
import { PillButton } from "./ui/pill-button";

/** Transparent header on the hero (not sticky): just the "Download CV" pill, top right. */
export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 flex justify-end px-4 py-6 lg:px-8">
      <span className="mask-reveal [--reveal-delay:300ms]">
        <PillButton href={site.cv.href} download={site.cv.fileName}>
          {site.cv.label}
        </PillButton>
      </span>
    </header>
  );
}
