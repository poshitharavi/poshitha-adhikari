"use client";

import { useEffect, useState } from "react";
import {
  DELETE_MS,
  HOLD_MS,
  INTRO_MS,
  LINE_PAUSE_MS,
  START_MS,
  TYPE_MS,
  graphemes,
  introText,
} from "@/lib/greeter";

type Greeting = { readonly text: string; readonly lang: string; readonly label: string };

/** Blinking copper text cursor. Solid while typing, blinks while waiting. */
function Caret({ idle }: { idle: boolean }) {
  return <span className="typer-caret" data-idle={idle || undefined} />;
}

/**
 * Hero greeter: a cursor types the first greeting, then the intro sentence, then returns to
 * the greeting and cycles it through other languages forever.
 * Decorative (aria-hidden): the hero's h1 carries the full text for screen readers and search.
 * Reduced motion: shows the English greeting and the full intro, no typing.
 */
export function Greeter({
  greetings,
  intro,
}: {
  greetings: readonly Greeting[];
  intro: readonly string[];
}) {
  const full = introText(intro);
  const [index, setIndex] = useState(0);
  const [greet, setGreet] = useState("");
  const [typed, setTyped] = useState(0);
  const [line, setLine] = useState<1 | 2>(1);
  const [idle, setIdle] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let alive = true;
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = setTimeout(resolve, ms);
      });

    const typeGreeting = async (g: Greeting) => {
      const parts = graphemes(`${g.text},`, g.lang);
      for (let i = 1; i <= parts.length && alive; i++) {
        setGreet(parts.slice(0, i).join(""));
        await wait(TYPE_MS);
      }
    };
    const deleteGreeting = async (g: Greeting) => {
      const parts = graphemes(`${g.text},`, g.lang);
      for (let i = parts.length - 1; i >= 0 && alive; i--) {
        setGreet(parts.slice(0, i).join(""));
        await wait(DELETE_MS);
      }
    };

    const run = async () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        await wait(0);
        setGreet(`${greetings[0].text},`);
        setTyped(full.length);
        setLine(2);
        return;
      }

      await wait(START_MS);
      setIdle(false);
      await typeGreeting(greetings[0]);

      await wait(LINE_PAUSE_MS);
      setLine(2);
      for (let i = 1; i <= full.length && alive; i++) {
        setTyped(i);
        await wait(INTRO_MS);
      }

      let current = 0;
      while (alive) {
        setIdle(true);
        await wait(HOLD_MS);
        if (!alive) break;
        setLine(1);
        setIdle(false);
        await deleteGreeting(greetings[current]);
        current = (current + 1) % greetings.length;
        setIndex(current);
        await typeGreeting(greetings[current]);
      }
    };

    run();
    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, [greetings, full]);

  const g = greetings[index];

  // Each intro line keeps its own range of the typed string; lines are separated by one space.
  const lines = intro.map((text, i) => {
    const start = intro.slice(0, i).reduce((sum, t) => sum + t.length + 1, 0);
    return { text, start, shown: text.slice(0, Math.max(0, typed - start)) };
  });

  return (
    <div aria-hidden className="flex flex-col items-center text-center">
      <p key={index} className="eyebrow reveal text-bark">
        {g.label}
      </p>

      <p lang={g.lang} className="display-1 mt-2 text-espresso">
        {greet || "​"}
        {line === 1 && <Caret idle={idle} />}
      </p>

      <p className="intro mt-4 grid max-w-[680px] text-espresso lg:mt-6">
        {/* Invisible copy of the full intro reserves the space, so nothing shifts while typing. */}
        <span className="invisible col-start-1 row-start-1">
          {intro.map((text) => (
            <span key={text} className="lg:block">
              {text}{" "}
            </span>
          ))}
        </span>
        <span className="col-start-1 row-start-1">
          {lines.map((l, i) => (
            <span key={l.text} className="lg:block">
              {l.shown}
              {line === 2 && typed >= l.start && typed <= l.start + l.text.length && (
                <Caret idle={idle || typed === full.length} />
              )}
              {i < lines.length - 1 && typed > l.start + l.text.length && " "}
            </span>
          ))}
        </span>
      </p>
    </div>
  );
}
