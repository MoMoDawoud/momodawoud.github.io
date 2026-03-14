"use client";

import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { StaggerChildren, StaggerItem } from "@/components/animations/fade-in";

interface PostSummary {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: number;
}

export function BlogContent({ posts }: { posts: PostSummary[] }) {
  const filtered = posts;

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Blog"
        />

        {/* Post list */}
        <StaggerChildren className="space-y-3">
          {filtered.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group card-hover block px-4 py-4 rounded-xl border border-border hover:border-accent/30 hover:bg-accent-subtle border-l-2 border-l-transparent hover:border-l-accent"
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="font-mono text-xs text-foreground-quaternary tabular-nums">
                    {formatDate(post.date)}
                  </span>
                  <span className="text-foreground-quaternary">·</span>
                  <span className="font-mono text-xs text-foreground-quaternary">
                    {post.readingTime} min read
                  </span>
                </div>
                <h2 className="text-base font-semibold leading-snug group-hover:text-accent transition-colors duration-150 mb-1">
                  {post.title}
                </h2>
                <p className="text-sm text-foreground-tertiary leading-relaxed mb-2.5">
                  {post.description}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {filtered.length === 0 && (
          <p className="text-foreground-tertiary text-sm py-12 text-center">
            No posts found.
          </p>
        )}
      </div>
    </div>
  );
}
