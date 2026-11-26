import { Hero } from "@/components/hero";
import { SectionStub } from "@/components/section-stub";
import { SiteNav } from "@/components/site-nav";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <SiteNav sections={site.sections} />
      <main id="main">
        <Hero />
        {/* Placeholders until each section is built (docs/sections.md). */}
        {site.sections.map((s, i) => (
          <SectionStub key={s.id} id={s.id} index={i + 1} label={s.label} />
        ))}
      </main>
    </>
  );
}
