import { getImageProps } from "next/image";
import { site } from "@/data/site";
import { Quote } from "./ui/quote";
import { Display, Script } from "./ui/typography";

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

function Lines({ lines }: { lines: readonly string[] }) {
  return lines.map((line, i) => (
    <span key={line} className="block">
      {line}
      {i < lines.length - 1 && " "}
    </span>
  ));
}

/**
 * Poster style hero: script accent over a display headline in the empty wall
 * above the figure, quotes in the side space on desktop.
 * Min heights keep the headline clear of the figure's head on short screens.
 */
export function Hero() {
  const { script, display, quotes } = site.hero;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[max(100svh,44rem)] overflow-hidden bg-sand lg:min-h-[max(100svh,50rem)]"
    >
      <HeroBackground />

      <div className="flex flex-col items-center px-4 pt-16 text-center">
        <h1 id="hero-heading" className="flex flex-col items-center">
          <Script className="reveal relative z-10 -mb-2 -rotate-3 [--reveal-delay:120ms] lg:-mb-6">
            {script}
          </Script>{" "}
          <Display as="span" level={1} className="reveal block [--reveal-delay:200ms]">
            <Lines lines={display} />
          </Display>
        </h1>
      </div>

      <Quote className="reveal absolute top-1/2 left-16 hidden [--reveal-delay:400ms] lg:flex">
        <Lines lines={quotes.left} />
      </Quote>
      <Quote className="reveal absolute top-1/2 right-16 hidden [--reveal-delay:480ms] lg:flex">
        <Lines lines={quotes.right} />
      </Quote>
    </section>
  );
}
