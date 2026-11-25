import { getImageProps } from "next/image";
import { site } from "@/data/site";

const alt =
  "A figure in a cap and hoodie sits with head bowed on a chair against a sunlit wall";

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
    src: "/images/hero-desktop.webp",
    width: 1671,
    height: 941,
    quality: 80,
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: "/images/hero-mobile.jpg",
    width: 1536,
    height: 2730,
    quality: 75,
  });

  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktop} />
      <source srcSet={mobile} />
      <img
        {...rest}
        alt={alt}
        className="absolute inset-0 size-full object-cover object-center lg:object-[center_70%]"
      />
    </picture>
  );
}

/** Full screen image hero. No visible text; the heading exists for screen readers and SEO only. */
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-svh overflow-hidden bg-sand"
    >
      <h1 id="hero-heading" className="sr-only">
        {site.name}, {site.role}
      </h1>
      <HeroBackground />
    </section>
  );
}
