"use client";

import { ReactNode } from "react";
import { FadeIn } from "@/components/animations/fade-in";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="mb-12">
      <FadeIn direction="none">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
          {title}
        </h1>
        <div className="w-8 h-0.5 bg-accent rounded-full mb-4" />
        {description && (
          <p className="text-foreground-secondary max-w-xl leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </FadeIn>
    </div>
  );
}
