import { Display, Eyebrow, Text } from "./ui/typography";

/**
 * Placeholder for a section that is not built yet, so navigation links have a real target.
 * Replace each one with the real section (see docs/sections.md).
 */
export function SectionStub({ id, index, label }: { id: string; index: number; label: string }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="flex min-h-[70svh] scroll-mt-24 flex-col items-center justify-center gap-4 border-t border-bark/15 px-4 py-24 text-center"
    >
      <Eyebrow>{String(index).padStart(2, "0")}</Eyebrow>
      <Display id={`${id}-heading`} level={2}>
        {label}
      </Display>
      <Text className="text-clay">Coming next on the build list.</Text>
    </section>
  );
}
