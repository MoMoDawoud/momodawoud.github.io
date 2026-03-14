"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { PageHeader } from "@/components/page-header";

const fellowships = [
  {
    year: "2021–2024",
    title: "Full Merit Scholarship",
    org: "German International University, Cairo",
    detail: "Full tuition scholarship for B.Sc. in Informatics and Computer Science with a specialization in Information Security. Awarded for ranking 18th out of 600,000+ students nationwide in Egypt's Thanawya Amma mathematics exam (408/410, 99.51%).",
  },
];

const mediaCoverage = [
  {
    date: "Apr 2025",
    title: "Student Spotlight: Mohamed Moustafa Dawoud",
    outlet: "Dartmouth Guarini School of Graduate and Advanced Studies",
    description:
      "Featured discussing research in human-centered security and privacy, the journey from Zefta, Egypt to Dartmouth, and advocacy for international students in STEM policy.",
    link: "https://guarinigrad.dartmouth.edu/blog/2025/04/28/student-spotlight-mohamed-moustafa-dawoud/",
  },
];

export function RecognitionContent() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Recognition"
          description="Fellowships, media coverage, and features."
        />

        {/* Fellowships */}
        <FadeIn direction="none">
          <section className="mb-16">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Fellowships
            </h2>
            <div className="space-y-4">
              {fellowships.map((item, i) => (
                <div key={i} className="border border-border rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                    <span className="font-mono text-xs text-foreground-quaternary shrink-0">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-xs text-foreground-tertiary">{item.org}</p>
                  {item.detail && (
                    <p className="mt-2 text-xs text-foreground-secondary leading-relaxed">
                      {item.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Media Coverage */}
        <FadeIn direction="none" delay={0.05}>
          <section className="mb-16">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Media Coverage
            </h2>
            <div className="space-y-4">
              {mediaCoverage.map((item, i) => (
                <div key={i} className="border border-border rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="text-sm font-medium text-foreground">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-accent"
                        >
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <span className="font-mono text-xs text-foreground-quaternary shrink-0">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-xs text-foreground-tertiary">{item.outlet}</p>
                  {item.description && (
                    <p className="mt-2 text-xs text-foreground-secondary leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
