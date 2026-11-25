import { getImageProps } from "next/image";
import { site } from "@/data/site";
import { ScrollCue } from "./scroll-cue";
import { SplitReveal, splitRevealEndMs } from "./ui/split-reveal";
import { Display, Eyebrow, Script } from "./ui/typography";

const alt =
  "A figure in a cap and hoodie sits with head bowed on a chair against a pale wall";

/**
 * Art directed background: the wide photo from 1024px up, the tall photo below.
 * Only the matching source is downloaded by the browser.
 */
function HeroBackground() {
  const common = { alt, sizes: "100vw", fetchPriority: "high" as const };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: "/images/hero-pale-desktop.jpg",
    width: 2752,
    height: 1536,
    quality: 80,
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: "/images/hero-pale-mobile.jpg",
    width: 1696,
    height: 2528,
    quality: 75,
  });

  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktop} />
      <source srcSet={mobile} />
      <img
        {...rest}
        alt={alt}
        className="absolute inset-0 -z-10 size-full object-cover object-center lg:object-[center_70%]"
      />
    </picture>
  );
}

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

/** Entrance schedule: greeting writes on, the name builds letter by letter, then the role and scroll cue. */
const GREETING_MS = 200;
const NAME_START_MS = 700; // starts as the greeting finishes writing

/**
 * Poster style hero in the empty wall above the figure: "Hi, I'm" writes itself on, the name
 * builds letter by letter, the role slides up after it, and a cue on the floor invites scrolling.
 * Min heights keep the text clear of the figure's head on short screens.
 */
export function Hero() {
  const { greeting, name, role, scrollCue } = site.hero;
  const nameDone = splitRevealEndMs(name, NAME_START_MS);
  const typed = nameDone - 500; // role starts while the last letters settle

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[max(100svh,44rem)] overflow-hidden bg-sand lg:min-h-[max(100svh,50rem)]"
    >
      <HeroBackground />

      <div className="flex flex-col items-center px-4 pt-24 text-center lg:pt-20">
        <h1 id="hero-heading" className="flex flex-col items-center">
          <span className="sr-only">
            {greeting} {name.join(" ")}
          </span>
          <Script aria-hidden className="relative z-10 -mb-2 -rotate-3 lg:-mb-6">
            {/* Writes itself on left to right, like a pen stroke. */}
            <span className="write-on" style={delay(GREETING_MS)}>
              <span>{greeting}</span>
            </span>
          </Script>
          <Display aria-hidden as="span" level={1} className="block">
            {/* Stacked on phones, one line on desktop so the text clears the figure's head. */}
            <SplitReveal words={name} startMs={NAME_START_MS} className="flex flex-col items-center lg:block" />
          </Display>
        </h1>
        <Eyebrow className="mt-3 flex flex-col items-center lg:mt-4 lg:flex-row lg:gap-2">
          <span className="mask-reveal" style={delay(typed + 150)}>
            <span>{role[0]}</span>
          </span>
          <span aria-hidden className="reveal hidden lg:block" style={delay(typed + 230)}>
            ·
          </span>
          <span className="mask-reveal" style={delay(typed + 230)}>
            <span>{role[1]}</span>
          </span>
        </Eyebrow>
      </div>

      <ScrollCue label={scrollCue} style={delay(typed + 450)} />
    </section>
  );
}
