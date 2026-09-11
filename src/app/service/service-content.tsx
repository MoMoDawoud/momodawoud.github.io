"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/data/site-config";

const communityBuilding = [
  {
    role: "Co-founder, Egyptians in CS Research",
    org: "egyptians-in-cs.github.io",
    year: "2026",
    link: "https://egyptians-in-cs.github.io",
    description:
      "Community directory of 262 Egyptian computer science researchers across 16 research tracks worldwide. Originally created by Badr AlKhamissi as Egyptians in AI Research, I reached out and we started collaborating — expanding it beyond AI to include all of computer science: security, systems, theory, HCI, and more. The goal is simple: show students from non-traditional paths that frontier research is real, possible, and within reach.",
    blogLink: "/blog/egyptians-in-cs-research",
  },
];

const policyAndAdvocacy = [
  {
    role: "AAAS CASE Workshop Delegate",
    org: "Washington, D.C.",
    year: "2025",
    description:
      "One of four graduate students selected to represent Dartmouth College at the AAAS Catalyzing Advocacy in Science and Engineering Workshop; engaged with policymakers on science, technology, and public policy.",
  },
];

const academicService = [
  {
    role: "Conference Volunteer",
    org: "IEEE Secure Development Conference (SecDev)",
    year: "2023",
    description:
      "Supported session logistics and attendee coordination at IEEE SecDev 2023, Atlanta, GA.",
  },
];


const awardsAndMedia = [
  {
    role: "Student Spotlight: Mohamed Moustafa Dawoud",
    org: "Dartmouth Guarini School of Graduate and Advanced Studies",
    year: "2025",
    link: "https://guarinigrad.dartmouth.edu/blog/2025/04/28/student-spotlight-mohamed-moustafa-dawoud/",
    description:
      "Featured discussing research in human-centered security and privacy, the journey from Zefta, Egypt to Dartmouth, and advocacy for international students in STEM policy.",
  },
  {
    role: "Full Merit Scholarship",
    org: "German International University, Cairo",
    year: "2021-2024",
    description:
      "Full tuition scholarship for the B.Sc. in Informatics and Computer Science, awarded for ranking 18th out of 600,000+ students nationwide in Egypt's Thanawya Amma mathematics exam (408/410, 99.51%).",
  },
];

const mentees: {
  name: string;
  role?: string;
  institution?: string;
  now?: string;
  links?: { label: string; href: string }[];
}[] = [
  {
    name: "Faris H. Rizk",
    role: "B.E. Electrical & Communications Engineering",
    institution: "DHIET, Egypt",
    now: "PhD student at Clemson",
    links: [
      { label: "Website", href: "https://faris-hamdi.github.io" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/faris-hamdi-ibrahim/" },
    ],
  },
  {
    name: "Elisa Christina Simons",
    role: "M.S. Computer Science & Cybersecurity",
    institution: "Georgia Tech",
    links: [
      { label: "Website", href: "https://elisasimons.github.io" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/elisasimons/" },
    ],
  },
  {
    name: "Kelvin Chan",
    role: "B.S. Computer Science",
    institution: "UC Santa Cruz",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/kelvinchan27/" }],
  },
  {
    name: "Anvie Swaroop",
    role: "B.S. Computer Science",
    institution: "UC Santa Cruz",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/anvie-swaroop/" }],
  },
  {
    name: "Isa Abello",
    role: "Computer Science",
    institution: "UC Santa Cruz (alum)",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/isa-a-43a205279" },
    ],
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
      {item.blogLink &&
        (item.blogLink.startsWith("http") ? (
          <a
            href={item.blogLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent text-xs mt-2 inline-block"
          >
            Read the full story &rarr;
          </a>
        ) : (
          <Link href={item.blogLink} className="link-accent text-xs mt-2 inline-block">
            Read the full story &rarr;
          </Link>
        ))}
    </div>
  );
}

export function ServiceContent() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Mentorship & Service"
          description="Mentoring students, building community, and professional service."
        />

        {/* Mentorship */}
        <FadeIn direction="none">
          <section id="mentorship" className="mb-16 scroll-mt-20">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Mentorship
            </h2>
            <div className="space-y-4 text-sm text-foreground-secondary leading-relaxed max-w-[68ch]">
              <p>
                I&rsquo;ve had the opportunity to work with a variety of talented students: some
                through the graduate application mentoring I run each cycle, and others through
                research mentoring at UC Santa Cruz.
              </p>
              <p>
                I&rsquo;m always happy to discuss mentoring of any kind, whether that is research,
                careers, graduate applications, or simply finding your footing on this path. This is
                open to everyone, and I especially hope to reach students who have had limited
                access to research mentorship and guidance, as I once did.
              </p>
            </div>

            {/* The only route to apply used to be a lnkd.in shortlink buried
                mid-paragraph in a blog post. This is the underlying form. */}
            <div className="mt-6 rounded-lg border border-accent/30 bg-accent-subtle p-4 max-w-[68ch]">
              <p className="text-sm text-foreground-secondary leading-relaxed mb-3">
                Applying this cycle to graduate programs in Computer Science or a related field, and
                think I might be able to help?
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs">
                <a
                  href="https://forms.gle/vv5HXf15Fu3ZthQr5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center min-h-[44px] px-3 rounded-md bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
                >
                  Fill out the mentoring form
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="link-accent inline-flex items-center min-h-[44px]"
                >
                  Or email me
                </a>
                <a
                  href="https://www.linkedin.com/posts/mohamedmostafadawod_phd-application-season-is-coming-around-again-activity-7499954507871604736-_U1s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-tertiary hover:text-foreground transition-colors inline-flex items-center min-h-[44px]"
                >
                  Read the announcement &rarr;
                </a>
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-x-10 mt-10">
              {mentees.map((mentee, i) => (
                <li
                  key={i}
                  className="py-3 border-t border-border first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-sm font-medium text-foreground">
                      {mentee.name}
                    </span>
                    {mentee.links && mentee.links.length > 0 && (
                      <span className="flex gap-2 font-mono text-[0.65rem] flex-shrink-0">
                        {mentee.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-accent"
                          >
                            {l.label}
                          </a>
                        ))}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-foreground-tertiary mt-0.5">
                    {[mentee.role, mentee.institution].filter(Boolean).join(", ")}
                  </p>
                  {mentee.now && (
                    <p className="text-xs text-accent mt-0.5">Now: {mentee.now}</p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>
        <FadeIn direction="none" delay={0.05}>
          <section id="community" className="mb-16 scroll-mt-20">
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

        {/* Policy & Advocacy */}
        <FadeIn direction="none" delay={0.075}>
          <section id="policy" className="mb-16 scroll-mt-20">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Policy &amp; Advocacy
            </h2>
            <div className="space-y-4">
              {policyAndAdvocacy.map((item, i) => (
                <ServiceCard key={i} item={item} />
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Academic Service */}
        <FadeIn direction="none" delay={0.09}>
          <section id="academic-service" className="mb-16 scroll-mt-20">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Academic Service
            </h2>
            <div className="space-y-4">
              {academicService.map((item, i) => (
                <ServiceCard key={i} item={item} />
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Awards & Media */}
        <FadeIn direction="none" delay={0.1}>
          <section id="awards" className="mb-16 scroll-mt-20">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Awards &amp; Media
            </h2>
            <div className="space-y-4">
              {awardsAndMedia.map((item, i) => (
                <ServiceCard key={i} item={item} />
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Mentorship */}
      </div>
    </div>
  );
}
