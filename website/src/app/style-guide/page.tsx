import type { Metadata } from "next";
import {
  Allison,
  Herr_Von_Muellerhoff,
  Monsieur_La_Doulaise,
} from "next/font/google";
import { Button } from "@/components/ui/button";
import { Quote } from "@/components/ui/quote";
import { Display, Eyebrow, Script, Text } from "@/components/ui/typography";

/*
 * Living reference for the design system (see website/DESIGN_SYSTEM.md).
 * When a token or component changes, update this page in the same commit.
 */

export const metadata: Metadata = {
  title: "Style guide",
  robots: { index: false, follow: false },
};

/* Alternative script fonts, loaded only on this page for comparison. */
const allison = Allison({ weight: "400", subsets: ["latin"] });
const monsieur = Monsieur_La_Doulaise({ weight: "400", subsets: ["latin"] });
const herr = Herr_Von_Muellerhoff({ weight: "400", subsets: ["latin"] });

const colors = [
  { name: "cream", hex: "#F1CFA1", use: "Page background", cls: "bg-cream" },
  { name: "sand", hex: "#D2AD7F", use: "Surfaces, cards", cls: "bg-sand" },
  { name: "clay", hex: "#8B6643", use: "Muted details, large text only", cls: "bg-clay" },
  { name: "copper", hex: "#A14B06", use: "Script accent, large text only", cls: "bg-copper" },
  { name: "bark", hex: "#553720", use: "Body text, eyebrows", cls: "bg-bark" },
  { name: "espresso", hex: "#491A01", use: "Headlines", cls: "bg-espresso" },
  { name: "ink", hex: "#131209", use: "Buttons, darkest text", cls: "bg-ink" },
];

const typeScale = [
  { name: "display-1", spec: "Anton · 48 → 60 → 96px", sample: "Display one", cls: "display-1 text-espresso" },
  { name: "display-2", spec: "Anton · 48 → 72px", sample: "Display two", cls: "display-2 text-espresso" },
  { name: "display-3", spec: "Anton · 36 → 48px", sample: "Display three", cls: "display-3 text-espresso" },
  { name: "script-1", spec: "Script · 72 → 128px", sample: "Building", cls: "script-1 text-copper" },
  { name: "script-2", spec: "Script · 48 → 72px", sample: "Building", cls: "script-2 text-copper" },
  { name: "eyebrow", spec: "Montserrat 500 · 12 → 14px · tracked caps", sample: "Discipline today. Freedom tomorrow.", cls: "eyebrow text-bark" },
  { name: "body-lg", spec: "Montserrat 400 · 18 / 28", sample: "Shipping web products end to end.", cls: "body-lg text-bark" },
  { name: "body", spec: "Montserrat 400 · 16 / 24", sample: "Shipping web products end to end.", cls: "body text-bark" },
  { name: "body-sm", spec: "Montserrat 400 · 14 / 20", sample: "Shipping web products end to end.", cls: "body-sm text-bark" },
  { name: "label", spec: "Montserrat 600 · 14 / 20", sample: "Selected projects", cls: "label text-espresso" },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="flex flex-col gap-8">
      <Display id={id} level={2}>
        {title}
      </Display>
      {children}
    </section>
  );
}

export default function StyleGuide() {
  return (
    <main id="main" className="mx-auto flex max-w-6xl flex-col gap-24 px-4 py-24 lg:px-8">
      {/* Composition */}
      <section aria-labelledby="sample" className="flex flex-col items-center gap-12">
        <Eyebrow className="text-clay">Design system · sample composition</Eyebrow>
        <h1 id="sample" className="flex flex-col items-center text-center">
          <Script className="relative z-10 -mb-2 -rotate-3 lg:-mb-6">Building</Script>{" "}
          <Display as="span" level={1} className="block">
            Software
            <br />
            that lasts
          </Display>
        </h1>
        <div className="grid w-full max-w-3xl gap-12 sm:grid-cols-2">
          <Quote>
            Clean code today.
            <br />
            Fewer fires tomorrow.
          </Quote>
          <Quote>
            Systems are built
            <br />
            one commit at a time.
          </Quote>
        </div>
        <Text size="lg" className="max-w-xl text-center">
          Senior full stack engineer shipping web products end to end, from the data model to the
          last pixel.
        </Text>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="#colors">Primary button</Button>
          <Button href="#colors" variant="secondary">
            Secondary button
          </Button>
          <Button>Disabled</Button>
        </div>
      </section>

      <Section id="type" title="Type scale">
        <ul className="flex flex-col divide-y divide-bark/20 rounded-2xl border border-bark/20">
          {typeScale.map((t) => (
            <li key={t.name} className="flex flex-col gap-3 p-6 lg:flex-row lg:items-center lg:gap-8">
              <div className="lg:w-64 lg:shrink-0">
                <p className="label text-espresso">{t.name}</p>
                <p className="body-sm text-bark">{t.spec}</p>
              </div>
              <p className={t.cls}>{t.sample}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="script-options" title="Script options">
        <Text className="max-w-xl">
          The poster script is a commercial font. These free fonts come close. Option A is
          currently in use.
        </Text>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "A · Mrs Saint Delafield", cls: "font-script" },
            { label: "B · Allison", cls: allison.className },
            { label: "C · Monsieur La Doulaise", cls: monsieur.className },
            { label: "D · Herr Von Muellerhoff", cls: herr.className },
          ].map((o) => (
            <div key={o.label} className="rounded-2xl bg-sand/40 p-6">
              <Eyebrow className="mb-4 text-clay">{o.label}</Eyebrow>
              <p className={`${o.cls} text-6xl leading-none text-copper`}>Building</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="colors" title="Colours">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {colors.map((c) => (
            <li key={c.name} className="overflow-hidden rounded-2xl border border-bark/20 bg-cream">
              <div className={`h-24 ${c.cls}`} />
              <div className="p-4">
                <p className="label text-espresso">
                  {c.name} <span className="font-normal text-bark">{c.hex}</span>
                </p>
                <p className="body-sm text-bark">{c.use}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
