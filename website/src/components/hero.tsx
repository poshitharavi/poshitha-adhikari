import { getImageProps } from "next/image";
import { site } from "@/data/site";
import { introText } from "@/lib/greeter";
import { Greeter } from "./greeter";

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

/**
 * Welcome hero in the empty wall above the figure: a cursor types a greeting and a short intro,
 * then keeps greeting the visitor in other languages. The section links sit on the wall above it. Min heights keep the text clear of the figure's head on short screens.
 */
export function Hero() {
  const { greetings, intro } = site.hero;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[max(100svh,44rem)] overflow-hidden bg-sand lg:min-h-[max(100svh,50rem)]"
    >
      <HeroBackground />

      <div className="flex flex-col items-center px-4 pt-24 text-center lg:pt-20">
        {/* Full text for screen readers and search; the typed version below is decorative. */}
        <h1 id="hero-heading" className="sr-only">
          {greetings[0].text}, I&apos;m {site.name}, a {site.role.toLowerCase()} based in Sri Lanka.
        </h1>
        <Greeter greetings={greetings} intro={intro} />
        <noscript>
          <p className="display-1 text-espresso">{greetings[0].text},</p>
          <p className="intro mt-4 text-espresso">{introText(intro)}</p>
        </noscript>
      </div>

    </section>
  );
}
