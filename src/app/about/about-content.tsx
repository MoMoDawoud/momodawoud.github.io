"use client";

import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { FadeIn } from "@/components/animations/fade-in";
import { siteConfig } from "@/data/site-config";

/*
 * The long-form prose in site-config.ts had no consumer: eight of nine `bio`
 * fields were dead, including the only description anywhere of the Princeton
 * CITP collaboration and the CCPA audit. This page is where they live.
 */

function Section({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <FadeIn direction="none" delay={delay}>
      <section className="mb-14">
        <h2 className="font-serif text-xl font-semibold tracking-tight mb-5 pb-2 border-b border-border">
          {title}
        </h2>
        <div className="space-y-4 max-w-[68ch] text-sm text-foreground-secondary leading-relaxed">
          {children}
        </div>
      </section>
    </FadeIn>
  );
}

export function AboutContent() {
  const { bio } = siteConfig;

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader title="About" description={bio.short} />

        {/* Portrait + the one-paragraph version */}
        <FadeIn direction="none">
          <div className="flex flex-col sm:flex-row gap-6 mb-14">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-xl overflow-hidden border border-border bg-muted">
              <Image
                src="/profile_pic.jpeg"
                alt={siteConfig.name}
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <div className="space-y-3 text-sm text-foreground-secondary leading-relaxed">
              <p>{bio.intro}</p>
              <p className="font-mono text-xs text-foreground-tertiary">
                {siteConfig.location.building}
                <br />
                {siteConfig.location.address}, {siteConfig.location.city}
              </p>
            </div>
          </div>
        </FadeIn>

        <Section title="Research">
          <p>{bio.main}</p>
          <p>{bio.research}</p>
          <p>{bio.ai}</p>
          <p className="text-xs text-foreground-tertiary">
            The published work is on the{" "}
            <Link href="/publications" className="link-accent">
              publications page
            </Link>
            .
          </p>
        </Section>

        <Section title="Where I Come From" delay={0.05}>
          <p>
            I proudly come from Zefta, Egypt, a city that once declared itself
            the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Zefta"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              Zefta Republic
            </a>{" "}
            during the 1919 revolution, a bold act of defiance that continues to
            inspire me with its legacy of resilience and independence. That
            spirit shaped my own journey: as a high school student I ranked 18th
            out of more than 600,000 students nationwide in Egypt&rsquo;s
            Thanawya Amma mathematics exam, which earned me a full merit
            scholarship to study Computer Science (Information Security) at the
            German International University in Cairo.
          </p>
          <p>{bio.journey}</p>
        </Section>

        <Section title="Community" delay={0.1}>
          <p>{bio.community}</p>
          <p className="text-xs text-foreground-tertiary">
            More on this on the{" "}
            <Link href="/service" className="link-accent">
              service &amp; outreach page
            </Link>
            .
          </p>
        </Section>

        <Section title="Beyond Research" delay={0.15}>
          <p>
            When I&rsquo;m not buried in research, you&rsquo;ll probably catch me
            at the gym, walking along the California coast, wandering through
            redwood forests, or chasing down the next great coffee shop.
          </p>
          <p>
            I tell myself these moments are breaks from research, but truthfully,
            even while sipping coffee or hiking a trail, my mind drifts back to
            the same question:{" "}
            <span className="text-foreground font-medium">
              how can I leave the world better than I found it?
            </span>
          </p>
          <p>
            Sometimes that means pushing my research forward, sometimes it means
            dreaming about building impactful startups, and sometimes it simply
            means working hard to be kind and present with the people around me.
          </p>
        </Section>

        <FadeIn direction="none" delay={0.2}>
          <p className="text-sm text-foreground-tertiary">
            Best way to reach me is{" "}
            <a href={`mailto:${siteConfig.email}`} className="link-accent">
              {siteConfig.email}
            </a>
            .
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
