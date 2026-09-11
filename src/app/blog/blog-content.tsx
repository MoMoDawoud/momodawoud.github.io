"use client";

import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { StaggerChildren, StaggerItem } from "@/components/animations/fade-in";
import { formatPostDate } from "@/lib/utils";
import { substackPosts } from "@/data/substack";

interface PostSummary {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: number;
}

interface Entry {
  key: string;
  title: string;
  date: string;
  description?: string;
  href: string;
  external: boolean;
  readingTime?: number;
}

export function BlogContent({ posts }: { posts: PostSummary[] }) {
  // Substack essays are posts too, so they belong in the same reverse-chronological
  // list. They stay linked out rather than mirrored, so each piece keeps one
  // canonical URL.
  const entries: Entry[] = [
    ...posts.map((p) => ({
      key: p.slug,
      title: p.title,
      date: p.date,
      description: p.description,
      href: `/blog/${p.slug}`,
      external: false,
      readingTime: p.readingTime,
    })),
    ...substackPosts.map((p) => ({
      key: p.href,
      title: p.title,
      date: p.date,
      description: p.subtitle,
      href: p.href,
      external: true,
    })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  const cardClass =
    "group card-hover block px-4 py-4 rounded-xl border border-border hover:border-accent/30 hover:bg-accent-subtle border-l-2 border-l-transparent hover:border-l-accent";

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader title="Blog" />


        <StaggerChildren className="space-y-3">
          {entries.map((entry) => {
            const meta = (
              <>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                  <span className="font-mono text-xs text-foreground-quaternary tabular-nums">
                    {formatPostDate(entry.date, "short")}
                  </span>
                  {entry.readingTime != null && (
                    <>
                      <span className="text-foreground-quaternary">·</span>
                      <span className="font-mono text-xs text-foreground-quaternary">
                        {entry.readingTime} min read
                      </span>
                    </>
                  )}
                  {entry.external && (
                    <>
                      <span className="text-foreground-quaternary">·</span>
                      <span className="font-mono text-[0.65rem] uppercase tracking-wider text-accent">
                        Substack
                      </span>
                    </>
                  )}
                </div>
                <h2 className="text-base font-semibold leading-snug group-hover:text-accent transition-colors duration-150 mb-1">
                  {entry.title}
                </h2>
                {entry.description && (
                  <p className="text-sm text-foreground-tertiary leading-relaxed">
                    {entry.description}
                  </p>
                )}
              </>
            );

            return (
              <StaggerItem key={entry.key}>
                {entry.external ? (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {meta}
                  </a>
                ) : (
                  <Link href={entry.href} className={cardClass}>
                    {meta}
                  </Link>
                )}
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        {entries.length === 0 && (
          <p className="text-foreground-tertiary text-sm py-12 text-center">
            No posts found.
          </p>
        )}
      </div>
    </div>
  );
}
