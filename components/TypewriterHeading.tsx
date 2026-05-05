"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterHeadingProps {
  text: string;
  className?: string;
  /** Characters per second. */
  cps?: number;
  /** Delay before typing begins, in ms. */
  startDelay?: number;
}

/**
 * Letter-by-letter reveal of a headline.
 *
 * Renders an <h1> with the same visual styling as the static version: the
 * parent decides font, size, weight, and color via `className`. Each character
 * occupies layout from the start (opacity transitions, not DOM insertion), so
 * surrounding content does not shift while typing. Words (including their
 * trailing punctuation) are wrapped in non-breaking spans so characters never
 * split across lines — e.g. a trailing period always stays with its word.
 *
 * Respects `prefers-reduced-motion`: when reduced motion is requested, the
 * full text is shown immediately.
 */
export default function TypewriterHeading({
  text,
  className,
  cps = 22,
  startDelay = 250,
}: TypewriterHeadingProps) {
  const [progress, setProgress] = useState(0); // fractional chars revealed
  const rafRef = useRef<number | null>(null);

  // Typing loop
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setProgress(text.length);
      return;
    }

    const startAt = performance.now() + startDelay;
    const tick = (now: number) => {
      const elapsed = Math.max(0, (now - startAt) / 1000);
      const p = Math.min(text.length, elapsed * cps);
      setProgress(p);
      if (p >= text.length) {
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, cps, startDelay]);

  const revealedCount = Math.floor(progress);
  const frac = progress - revealedCount; // 0..1 into the next char

  // Split into runs so spaces remain normal text nodes that can wrap.
  // Each non-space chunk (a word + any attached punctuation) renders inside a
  // whiteSpace: "nowrap" wrapper so its characters never break across lines.
  const chunks = text.split(/( )/);
  let idx = 0;
  const nodes: React.ReactNode[] = [];

  chunks.forEach((chunk, ci) => {
    if (chunk === " ") {
      const i = idx++;
      const isRevealed = i < revealedCount;
      nodes.push(
        <span
          key={`sp-${ci}`}
          style={{ opacity: isRevealed ? 1 : 0 }}
        >
          {" "}
        </span>
      );
      return;
    }
    if (!chunk.length) return;

    const letters: React.ReactNode[] = [];
    chunk.split("").forEach((ch, li) => {
      const i = idx++;
      const isRevealed = i < revealedCount;
      const isNext = i === revealedCount;
      const op = isRevealed
        ? 1
        : isNext
          ? Math.min(1, frac * 2.2 + 0.15)
          : 0;
      const dy = isRevealed
        ? 0
        : isNext
          ? (1 - Math.min(1, frac * 2)) * 6
          : 6;
      letters.push(
        <span
          key={`l-${ci}-${li}`}
          style={{
            display: "inline-block",
            opacity: op,
            transform: `translateY(${dy}px)`,
            willChange: "transform, opacity",
          }}
        >
          {ch}
        </span>
      );
    });

    nodes.push(
      <span
        key={`w-${ci}`}
        style={{ whiteSpace: "nowrap" }}
      >
        {letters}
      </span>
    );
  });

  return (
    <h1 className={className} aria-label={text}>
      <span aria-hidden="true">{nodes}</span>
    </h1>
  );
}
