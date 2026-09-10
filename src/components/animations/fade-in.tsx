import { ReactNode, CSSProperties } from "react";

/*
 * CSS-driven entrance animations.
 *
 * These were framer-motion components. Under `output: "export"` framer
 * serializes `initial` into the static HTML, so real content — including the
 * hero and several page <h1>s — shipped as `style="opacity:0"` and stayed
 * invisible until the JS bundle hydrated, or forever if it never did.
 *
 * The keyframes live in globals.css, where the existing
 * prefers-reduced-motion block already collapses duration and delay. Same
 * exported names and props, so no call site changes. No "use client" needed —
 * these are now plain server-renderable elements.
 */

const OFFSET = "12px";

const directions: Record<string, CSSProperties> = {
  up: { "--fade-y": OFFSET } as CSSProperties,
  down: { "--fade-y": `-${OFFSET}` } as CSSProperties,
  left: { "--fade-x": OFFSET } as CSSProperties,
  right: { "--fade-x": `-${OFFSET}` } as CSSProperties,
  none: {},
};

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.35,
  direction = "up",
  className = "",
}: FadeInProps) {
  return (
    <div
      className={`anim-fade-in ${className}`}
      style={{
        ...directions[direction],
        animationDelay: delay ? `${delay}s` : undefined,
        animationDuration: duration !== 0.35 ? `${duration}s` : undefined,
      }}
    >
      {children}
    </div>
  );
}

export function StaggerChildren({
  children,
  className = "",
  staggerDelay,
}: {
  children: ReactNode;
  className?: string;
  /** Kept for call-site compatibility; the cadence is set in CSS. */
  staggerDelay?: number;
}) {
  void staggerDelay;
  return <div className={`anim-stagger ${className}`}>{children}</div>;
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  // Delay comes from :nth-child on the .anim-stagger parent, so this needs no
  // index prop — which is just as well, since no call site passes one.
  return <div className={className}>{children}</div>;
}
