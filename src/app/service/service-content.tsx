"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { PageHeader } from "@/components/page-header";

const communityBuilding = [
  {
    role: "Co-founder, Egyptians in CS Research",
    org: "egyptians-in-cs.github.io",
    year: "2026",
    link: "https://egyptians-in-cs.github.io",
    description:
      "Community directory of 262 Egyptian computer science researchers across 16 research tracks worldwide. Originally created by Badr AlKhamissi as Egyptians in AI Research, I reached out and we started collaborating — expanding it beyond AI to include all of computer science: security, systems, theory, HCI, and more. The goal is simple: show students from non-traditional paths that frontier research is real, possible, and within reach.",
    blogLink: "https://medium.com/p/b8e5f358c559",
  },
];

const advocacyAndPolicy = [
  {
    role: "AAAS CASE Workshop Delegate",
    org: "Washington, D.C.",
    year: "2025",
    description:
      "One of four graduate students selected to represent Dartmouth College at the AAAS Catalyzing Advocacy in Science and Engineering Workshop; engaged with policymakers on science, technology, and public policy.",
  },
  {
    role: "Conference Volunteer",
    org: "IEEE Secure Development Conference (SecDev)",
    year: "2023",
    description:
      "Supported session logistics and attendee coordination at IEEE SecDev 2023, Atlanta, GA.",
  },
];

const mentees = [
  {
    name: "Faris H. Rizk",
    role: "Undergraduate Researcher & Research Lead at Brownian Labs",
    institution: "Delta Higher Institute for Engineering and Technology, Egypt",
    focus: "Interpretable computer vision, generative models, vision-language learning",
    link: "https://faris-hamdi.github.io",
    cycle: "2025–2026",
  },
];

interface ServiceItem {
  role: string;
  org: string;
  year: string;
  link?: string;
  description?: string;
  blogLink?: string;
}

function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <div className="border border-border rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
        <h3 className="text-sm font-medium text-foreground">
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              {item.role}
            </a>
          ) : (
            item.role
          )}
        </h3>
        <span className="font-mono text-xs text-foreground-quaternary shrink-0">
          {item.year}
        </span>
      </div>
      <p className="text-xs text-foreground-tertiary">{item.org}</p>
      {item.description && (
        <p className="mt-2 text-xs text-foreground-secondary leading-relaxed">
          {item.description}
        </p>
      )}
      {item.blogLink && (
        <a
          href={item.blogLink}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent text-xs mt-2 inline-block"
        >
          Read the full story &rarr;
        </a>
      )}
    </div>
  );
}

export function ServiceContent() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Service & Outreach"
          description="Professional service, community building, and mentorship."
        />

        {/* Community Building */}
        <FadeIn direction="none">
          <section className="mb-16">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Community Building
            </h2>
            <div className="space-y-4">
              {communityBuilding.map((item, i) => (
                <ServiceCard key={i} item={item} />
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Advocacy & Policy */}
        <FadeIn direction="none" delay={0.05}>
          <section className="mb-16">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Advocacy & Policy
            </h2>
            <div className="space-y-4">
              {advocacyAndPolicy.map((item, i) => (
                <ServiceCard key={i} item={item} />
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Mentorship */}
        <FadeIn direction="none" delay={0.1}>
          <section className="mb-16">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Mentorship
            </h2>
            <div className="space-y-4 text-sm text-foreground-secondary leading-relaxed max-w-prose">
              <p>
                Each application cycle, I mentor a select cohort of prospective PhD applicants in
                Computer Science. I provide personalized feedback on statements of purpose, research
                statements, CVs, research positioning, program selection, and overall application
                strategy. I also guide undergraduates exploring research directions in security and
                privacy.
              </p>
              <p className="text-foreground-tertiary text-xs">
                If you&apos;re applying to PhD programs and think I can help, feel free to{" "}
                <a href="mailto:mdawoud@ucsc.edu" className="link-accent">
                  reach out
                </a>
                .
              </p>
            </div>

            <h3 className="font-mono text-xs tracking-widest uppercase text-foreground-quaternary mt-10 mb-6">
              Current & Past Mentees
            </h3>
            <div className="space-y-4">
              {mentees.map((mentee, i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg p-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h4 className="text-sm font-medium text-foreground">
                      <a
                        href={mentee.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-accent"
                      >
                        {mentee.name}
                      </a>
                    </h4>
                    <span className="font-mono text-xs text-foreground-quaternary">
                      {mentee.cycle}
                    </span>
                  </div>
                  <p className="text-xs text-foreground-secondary">{mentee.role}</p>
                  <p className="text-xs text-foreground-tertiary">{mentee.institution}</p>
                  <p className="text-xs text-foreground-quaternary mt-2">
                    Research: {mentee.focus}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
