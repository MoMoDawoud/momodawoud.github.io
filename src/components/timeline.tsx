"use client";

import { ReactNode, useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { StaggerChildren, StaggerItem } from "@/components/animations/fade-in";

interface TimelineItem {
  date: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  variant?: "minimal" | "card";
}

function ScrollLine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(1);
      return;
    }

    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = rect.top + window.scrollY - windowH * 0.8;
      const end = rect.bottom + window.scrollY - windowH * 0.3;
      const scrollY = window.scrollY;
      const p = Math.min(1, Math.max(0, (scrollY - start) / (end - start)));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  return (
    <div ref={containerRef} className="absolute left-[13px] top-2 bottom-2 w-px">
      {/* Track */}
      <div className="absolute inset-0 bg-border" />
      {/* Fill */}
      <motion.div
        className="absolute top-0 left-0 right-0 bg-accent origin-top"
        style={{ height: `${progress * 100}%` }}
        transition={{ duration: 0 }}
      />
    </div>
  );
}

export function Timeline({ items, variant = "minimal" }: TimelineProps) {
  return (
    <div className="relative pl-10 sm:pl-10">
      <ScrollLine />

      <StaggerChildren className="space-y-8">
        {items.map((item, index) => (
          <StaggerItem key={index}>
            <div className="relative">
              {/* Dot on the line */}
              <div className="absolute -left-10 top-1.5 w-[7px] h-[7px] rounded-full bg-accent z-10" />
              {/* Year marker — inline on mobile, absolute on desktop */}
              <div className="hidden sm:block absolute -left-[72px] top-0.5 w-[50px] text-right">
                <span className="font-mono text-xs text-foreground-quaternary">
                  {item.date}
                </span>
              </div>
              <span className="sm:hidden font-mono text-xs text-foreground-quaternary block mb-1">
                {item.date}
              </span>

              <div
                className={
                  variant === "card"
                    ? "p-4 rounded-lg bg-card border border-border"
                    : ""
                }
              >
                <h3 className="font-serif text-sm font-semibold mb-1">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {item.description}
                  </p>
                )}
                {item.children}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}
