"use client";

import {
  type AnimationEvent,
  type ComponentProps,
  type CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

export interface TextGenerateEffectProps
  extends Omit<ComponentProps<"span">, "children"> {
  /** Whether each word comes into focus from a blur; `false` only fades it in. @default true */
  blur?: boolean;
  /**
   * How long one word takes to come into focus, in milliseconds; it's there
   * in the first half, sharp by the end.
   *
   * @default 1000
   */
  duration?: number;
  /** Called once the last word is in focus. */
  onComplete?: () => void;
  /** The time between one word appearing and the next, in milliseconds. @default 80 */
  stagger?: number;
  /** The text. Its line breaks (`\n`) are kept. */
  text: string;
  /**
   * When it plays: as soon as it's on the page, or once it scrolls into
   * view.
   *
   * @default "mount"
   */
  trigger?: "mount" | "view";
}

const SPACES = /(\s+)/;
const SPACE = /^\s+$/;

/** Words and the spaces between them, words numbered across the text. */
const wordsOf = (text: string) => {
  let words = 0;
  return text
    .split(SPACES)
    .filter(Boolean)
    .map((part, key) => {
      if (SPACE.test(part)) {
        return { key, part, word: -1 };
      }
      words += 1;
      return { key, part, word: words - 1 };
    });
};

/** Each word: `text-generate-effect` keyframes, delayed by its index. */
const WORD =
  "inline-block animate-text-generate-effect group-data-[view=out]/text-generate-effect:[animation-play-state:paused] motion-reduce:animate-none [@media(scripting:none)]:animate-none";

/**
 * Text that appears as if it were being generated: word after word in quick
 * succession, each one there at once but soft, then slowly coming into
 * focus where it stands. The `text-generate-effect` keyframes run on each
 * word, its opacity ahead of its blur, delayed by its index; nothing moves.
 * With reduced motion the text is simply there.
 *
 * @cssvar --text-generate-effect-blur The blur each word starts from (`8px`).
 * @cssvar --text-generate-effect-duration One word's focus.
 * @cssvar --text-generate-effect-stagger The time between one word and the next.
 */
export const TextGenerateEffect = (props: TextGenerateEffectProps) => {
  const {
    blur = true,
    duration,
    onComplete,
    stagger,
    text,
    trigger = "mount",
    className,
    ...rest
  } = props;
  const root = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(trigger === "mount");
  const completed = useRef(false);
  const words = wordsOf(text);
  // The last word, whose end is the whole text's.
  const last = Math.max(-1, ...words.map((word) => word.word));

  useEffect(() => {
    const node = root.current;
    if (trigger !== "view" || !node) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          setVisible(true);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [trigger]);

  // With reduced motion nothing plays, so nothing ends: it's complete once shown.
  useEffect(() => {
    if (
      visible &&
      !completed.current &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      completed.current = true;
      onComplete?.();
    }
  }, [visible, onComplete]);

  const animationEnd = (event: AnimationEvent<HTMLSpanElement>) => {
    if ((event.target as HTMLElement).dataset.last !== undefined) {
      onComplete?.();
    }
  };

  return (
    <span
      className={cn("group/text-generate-effect", className)}
      data-slot="text-generate-effect"
      data-view={visible ? "in" : "out"}
      ref={root}
      {...rest}
    >
      <span className="sr-only">{text}</span>
      <span
        aria-hidden="true"
        className="whitespace-pre-line"
        dir="auto"
        onAnimationEnd={animationEnd}
        style={
          {
            "--text-generate-effect-blur": blur ? undefined : "0px",
            "--text-generate-effect-duration":
              duration === undefined ? undefined : `${duration}ms`,
            "--text-generate-effect-stagger":
              stagger === undefined ? undefined : `${stagger}ms`,
          } as CSSProperties
        }
      >
        {words.map((word) =>
          word.word < 0 ? (
            word.part
          ) : (
            <span
              className={WORD}
              data-last={word.word === last ? "" : undefined}
              key={word.key}
              style={
                { "--text-generate-effect-index": word.word } as CSSProperties
              }
            >
              {word.part}
            </span>
          )
        )}
      </span>
    </span>
  );
};