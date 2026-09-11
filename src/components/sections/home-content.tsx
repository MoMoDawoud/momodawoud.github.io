"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { formatPostDate } from "@/lib/utils";
import { publications } from "@/data/publications";
import { substackPosts } from "@/data/substack";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/animations/fade-in";

/* ─────────────────────────────────────────
   DATA
   ───────────────────────────────────────── */

const news: { date: string; text: string; mood?: "good" | "bad" }[] = [
  { date: "Aug 2026", text: "PrivAudit accepted at ACM CCS 2026: a dual-lens framework for auditing website privacy under the CCPA, pairing LLM analysis of privacy policies with automated measurement of real tracking behavior", mood: "good" },
  { date: "Jun 2026", text: "Joined the California Privacy Protection Agency as a Research Technologist Intern in the Audits Division", mood: "good" },
  { date: "Mar 2026", text: "Paper rejected from IMC '26 — back to the drawing board", mood: "bad" },
  { date: "Mar 2026", text: "Completed my Master of Science in Computer Science & Engineering at UC Santa Cruz, en route to the PhD", mood: "good" },
  { date: "Mar 2026", text: "Attended the 4th Annual Bay Area HCI Gathering at Santa Clara University, connecting with ~150 researchers" },
  { date: "Feb 2026", text: "Presented at USEC 2026 (co-located with NDSS) in San Diego — our paper on AI-enabled NSFW deepfakes on Fiverr", mood: "good" },
  { date: "Feb 2026", text: "Paper on AI-enabled deepfakes accepted at USEC 2026, co-located with NDSS (~32% acceptance rate)", mood: "good" },
  { date: "Feb 2026", text: "Launched Egyptians in CS Research with Badr AlKhamissi — 262 researchers across 16 tracks worldwide", mood: "good" },
  { date: "Nov 2025", text: "Paper rejected from PETS. Not this cycle; reviews went back into the next version", mood: "bad" },
  { date: "Jun 2025", text: "Joined UC Santa Cruz as a PhD student, advised by Prof. Ram Sundara Raman", mood: "good" },
  { date: "Apr 2025", text: "Featured in Dartmouth Guarini School Student Spotlight — profiled on research, the journey from Zefta to Dartmouth, and STEM advocacy", mood: "good" },
  { date: "Feb 2025", text: "Selected as AAAS CASE Workshop Delegate — representing Dartmouth in Washington, D.C.", mood: "good" },
  { date: "Feb 2025", text: "Attended NDSS 2025 and the USEC workshop on human factors of security in San Diego" },
  { date: "Jan 2025", text: "RaaS paper published in Computers in Human Behavior — analyzing vendor communication themes in darknet ransomware advertisements", mood: "good" },
  { date: "Jan 2025", text: "Started as Lead Graduate Teaching Assistant at Dartmouth for COSC 55: Security & Privacy", mood: "good" },
  { date: "Sep 2024", text: "Joined MBZUAI as Research Associate — research on combating deepfakes and responsible AI" },
  { date: "Aug 2024", text: "DVa paper published at the 33rd USENIX Security Symposium", mood: "good" },
];

const selectedPublications = publications.filter((p) => p.selected);

/* ─────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────── */

// Bold only the site owner. Matching on "mohamed" alone bolds co-authors who
// share the given name, so require a surname match too — same predicate as
// publications-content.tsx. Splits on ", " because the homepage stores authors
// as one string rather than the string[] in publications.ts.
function isOwner(author: string) {
  const a = author.toLowerCase();
  return a.includes("mohamed") && (a.includes("dawoud") || a.includes("moustafa"));
}

function highlightName(authors: string) {
  const parts = authors.split(", ");
  return parts.map((author, i) => (
    <span key={i}>
      <span className={isOwner(author) ? "font-semibold" : ""}>{author}</span>
      {i < parts.length - 1 && ", "}
    </span>
  ));
}


/* ─────────────────────────────────────────
   SECTION HEADING WITH "VIEW ALL" LINK
   ───────────────────────────────────────── */

function SectionHeading({ title, href, id }: { title: string; href?: string; id?: string }) {
  return (
    <div className="flex items-baseline justify-between mb-6">
      <h2 id={id} className="text-xl font-bold tracking-tight">{title}</h2>
      {href && (
        <Link
          href={href}
          className="text-xs font-mono text-foreground-tertiary hover:text-accent transition-colors duration-150 flex items-center gap-1"
        >
          View all <ArrowRight className="h-3 w-3" />
        </Link>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN
   ───────────────────────────────────────── */

interface RecentPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  readingTime: number;
}

export function HomeContent({ recentPosts = [] }: { recentPosts?: RecentPost[] }) {
  const [showAllNews, setShowAllNews] = useState(false);
  const visibleNews = showAllNews ? news : news.slice(0, 4);

  return (
    <div className="pt-16 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════════════════════════════════════
            PROFILE
            ═══════════════════════════════════════ */}
        <FadeIn direction="none">
          <section className="pb-12 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            {/* Profile photo with 3D tilt */}
            <div className="flex-shrink-0">
              <div className="w-52 h-52 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-border">
                <Image
                  src="/profile_pic.jpeg"
                  alt={siteConfig.name}
                  width={288}
                  height={288}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">
                {siteConfig.name}
              </h1>

              {/* Affiliation badge */}
              <p className="font-mono text-xs text-foreground-quaternary tracking-wide mb-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-1.5 align-middle" />
                PhD Student · UC Santa Cruz
              </p>


              <div className="space-y-3 max-w-[68ch] text-base text-foreground-secondary leading-relaxed">
                <p>
                  I am a PhD student in Computer Science & Engineering at{" "}
                  <a href="https://www.ucsc.edu" target="_blank" rel="noopener noreferrer" className="gradient-link">
                    UC Santa Cruz
                  </a>
                  , working with{" "}
                  <a href={siteConfig.advisor.url} target="_blank" rel="noopener noreferrer" className="gradient-link">
                    Prof. Ram Sundara Raman
                  </a>
                  . I study the sociotechnical dimensions of AI-enabled privacy risks and abuse, and how they impact people and society. I am particularly interested in how AI facilitates new forms of harm — such as non-consensual deepfakes, synthetic media generation, and the commodification of abuse services — and in how the stakeholders affected by these threats understand, misinterpret, and struggle to keep pace with them: how everyday users form mental models of digital protections, how engineers and practitioners weigh privacy trade-offs under regulatory pressure, and how policymakers interpret ambiguous or conflicting frameworks. I use large-scale internet measurements, qualitative interviews, and controlled experiments to surface these misalignments. I am equally driven by the complementary question: can AI itself be turned into a tool for defense? I explore how the same technology that enables harm can also empower users to recognize and resist threats, help practitioners build safer systems under regulatory uncertainty, and provide policymakers with the empirical grounding they need to act.
                </p>
              </div>

              {/* Social links — moved up into bio */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-4 text-sm justify-center sm:justify-start">
                <a href={siteConfig.social.googleScholar} target="_blank" rel="noopener noreferrer" className="gradient-link text-foreground-tertiary">
                  Scholar
                </a>
                <span className="text-foreground-quaternary">&middot;</span>
                <a href={siteConfig.social.substack} target="_blank" rel="noopener noreferrer" className="gradient-link text-foreground-tertiary">
                  Substack
                </a>
                <span className="text-foreground-quaternary">&middot;</span>
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="gradient-link text-foreground-tertiary">
                  GitHub
                </a>
                <span className="text-foreground-quaternary">&middot;</span>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="gradient-link text-foreground-tertiary">
                  LinkedIn
                </a>
                <span className="text-foreground-quaternary">&middot;</span>
                <a
                  href="/Mohamed_Dawoud_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-link text-foreground-tertiary"
                >
                  CV
                </a>
                <span className="text-foreground-quaternary">&middot;</span>
                <a href={`mailto:${siteConfig.email}`} className="gradient-link text-foreground-tertiary">
                  Email
                </a>
              </div>
            </div>
          </section>
        </FadeIn>


        {/* ═══════════════════════════════════════
            NEWS
            ═══════════════════════════════════════ */}
        <FadeIn direction="none" delay={0.05}>
          <section className="mb-16" aria-labelledby="section-news">
            <SectionHeading title="News" id="section-news" />
            <div className="space-y-1">
              {visibleNews.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed -mx-3 px-3 py-2 rounded-lg hover:bg-accent-subtle transition-colors duration-150"
                >
                  <span className="flex items-center gap-2 text-foreground-quaternary flex-shrink-0 w-24">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      item.mood === "bad"
                        ? "bg-red-500"
                        : item.mood === "good"
                          ? "bg-emerald-500"
                          : "bg-foreground-quaternary"
                    }`} />
                    <span className="font-mono text-xs tabular-nums">{item.date}</span>
                  </span>
                  <span className="text-foreground-secondary">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            {news.length > 4 && (
              <button
                onClick={() => setShowAllNews(!showAllNews)}
                className="mt-3 text-sm gradient-link font-medium"
                aria-expanded={showAllNews}
                aria-label={showAllNews ? "Show fewer news items" : "Show all news items"}
              >
                {showAllNews ? "Show Less" : "See More"}
              </button>
            )}
          </section>
        </FadeIn>

        {/* ═══════════════════════════════════════
            WORK IN PROGRESS
            ═══════════════════════════════════════ */}
        <FadeIn direction="none" delay={0.08}>
          <section className="mb-16" aria-labelledby="section-wip">
            <SectionHeading title="Work in Progress" id="section-wip" />
            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="p-4 rounded-xl border border-border"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1">
                    <h3 className="text-base font-semibold leading-snug">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[0.6rem] uppercase tracking-wider text-accent border border-accent/40 rounded px-1.5 py-0.5 flex-shrink-0">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-xs text-foreground-tertiary leading-relaxed mb-2">
                    {highlightName(project.authors.join(", "))}
                  </p>
                  <p className="text-xs text-foreground-secondary leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.6rem] text-foreground-quaternary bg-muted px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ── divider ── */}
        <hr className="border-border mb-16" />

        {/* ═══════════════════════════════════════
            PUBLICATIONS
            ═══════════════════════════════════════ */}
        <section className="mb-16" aria-labelledby="section-publications">
          <SectionHeading title="Publications" href="/publications" id="section-publications" />

          <div className="space-y-4">
            {selectedPublications.map((pub) => (
              <FadeIn key={pub.id} direction="none" delay={0.02}>
                {/* A div, not a wrapping <a>: the footer carries more than one
                    link, and anchors cannot nest. */}
                <div className="group card-hover flex flex-col sm:flex-row gap-5 p-4 rounded-xl border border-border hover:border-accent/30 hover:bg-accent-subtle">
                  {/* Thumbnail */}
                  <a
                    href={pub.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="relative block w-full sm:w-56 sm:flex-shrink-0 aspect-[16/10] rounded-lg overflow-hidden bg-muted border border-border"
                  >
                    <Image
                      src={pub.image ?? ''}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 224px"
                    />
                  </a>

                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-xs text-foreground-quaternary tabular-nums">
                      {pub.year}
                    </span>
                    <h3 className="text-base font-semibold leading-snug mb-1">
                      <a
                        href={pub.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group-hover:text-accent transition-colors duration-150"
                      >
                        {pub.title}
                      </a>
                    </h3>
                    <p className="text-xs text-foreground-tertiary leading-relaxed mb-1">
                      {highlightName(pub.authors.join(', '))}
                    </p>
                    <p className="text-xs italic text-foreground-quaternary mb-2">
                      {pub.shortVenue ?? pub.venue}
                      {pub.status && (
                        <span className="not-italic font-mono uppercase tracking-wider text-[0.6rem] text-accent ml-2">
                          {pub.status}
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-foreground-secondary leading-relaxed mb-2">
                      {pub.summary ?? pub.abstract}
                    </p>
                    <div className="flex flex-wrap gap-x-3 text-xs font-mono">
                      <a
                        href={pub.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gradient-link"
                      >
                        [Paper]
                      </a>
                      {pub.links.code && (
                        <a
                          href={pub.links.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gradient-link"
                        >
                          [Code]
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── divider ── */}
        <hr className="border-border mb-16" />

        {/* ═══════════════════════════════════════
            RECENT POSTS
            ═══════════════════════════════════════ */}
        <FadeIn direction="none" delay={0.09}>
          <section className="mb-16" aria-labelledby="section-posts">
            <SectionHeading title="Recent Posts" href="/blog" id="section-posts" />
            <div className="space-y-2">
              {[
                ...recentPosts.map((p) => ({
                  key: p.slug,
                  title: p.title,
                  date: p.date,
                  description: p.description,
                  href: `/blog/${p.slug}`,
                  external: false,
                  readingTime: p.readingTime as number | undefined,
                })),
                ...substackPosts.map((p) => ({
                  key: p.href,
                  title: p.title,
                  date: p.date,
                  description: p.subtitle,
                  href: p.href,
                  external: true,
                  readingTime: undefined as number | undefined,
                })),
              ]
                .sort((a, b) => b.date.localeCompare(a.date))
                .slice(0, 5)
                .map((post) => {
                  const body = (
                    <>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                        <span className="font-mono text-xs text-foreground-quaternary tabular-nums">
                          {formatPostDate(post.date, "short")}
                        </span>
                        {post.readingTime != null && (
                          <>
                            <span className="text-foreground-quaternary">·</span>
                            <span className="font-mono text-xs text-foreground-quaternary">
                              {post.readingTime} min read
                            </span>
                          </>
                        )}
                        {post.external && (
                          <>
                            <span className="text-foreground-quaternary">·</span>
                            <span className="font-mono text-[0.6rem] uppercase tracking-wider text-accent">
                              Substack
                            </span>
                          </>
                        )}
                      </div>
                      <h3 className="text-sm font-semibold leading-snug group-hover:text-accent transition-colors duration-150">
                        {post.title}
                      </h3>
                      {post.description && (
                        <p className="text-xs text-foreground-tertiary leading-relaxed mt-1">
                          {post.description}
                        </p>
                      )}
                    </>
                  );
                  const cls =
                    "group block -mx-3 px-3 py-3 rounded-lg hover:bg-accent-subtle transition-colors duration-150";
                  return post.external ? (
                    <a
                      key={post.key}
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cls}
                    >
                      {body}
                    </a>
                  ) : (
                    <Link key={post.key} href={post.href} className={cls}>
                      {body}
                    </Link>
                  );
                })}
            </div>
          </section>
        </FadeIn>

        {/* ── divider ── */}
        <hr className="border-border mb-16" />

        {/* ═══════════════════════════════════════
            LET'S COLLABORATE
            ═══════════════════════════════════════ */}
        <FadeIn direction="none" delay={0.1}>
          <section className="mb-16" aria-labelledby="section-collaborate">
            <h2 id="section-collaborate" className="text-xl font-bold tracking-tight mb-3">
              Let&apos;s Collaborate
            </h2>
            <p className="text-sm text-foreground-secondary leading-relaxed mb-5 max-w-xl">
              I welcome research collaborations and enjoy mentoring students finding their path. If something here resonated, I&apos;d love to connect.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent/30 text-sm font-medium transition-colors duration-150 hover:bg-accent-subtle"
            >
              Get in touch <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </section>
        </FadeIn>

      </div>
    </div>
  );
}
