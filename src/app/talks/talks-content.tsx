"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { PageHeader } from "@/components/page-header";
import { talks, guestLectures } from "@/data/talks";

export function TalksContent() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Talks"
          description="Research talks and guest lectures."
        />

        {/* Talks */}
        <FadeIn direction="none">
          <section className="mb-16" aria-labelledby="section-talks">
            <h2 id="section-talks" className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Talks
            </h2>
            <ul className="space-y-6">
              {talks.map((talk) => (
                <li key={`${talk.date}-${talk.venue}`} className="text-sm">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-xs text-foreground-tertiary tabular-nums">{talk.date}</span>
                    {talk.href ? (
                      <a href={talk.href} target="_blank" rel="noopener noreferrer" className="font-medium link-accent">
                        {talk.title}
                      </a>
                    ) : (
                      <span className="font-medium">{talk.title}</span>
                    )}
                  </div>
                  <p className="text-foreground-secondary mt-1">
                    {talk.venue} &middot; {talk.location}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* Guest Lectures */}
        <FadeIn direction="none" delay={0.05}>
          <section className="mb-16" aria-labelledby="section-guest-lectures">
            <h2 id="section-guest-lectures" className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Guest Lectures
            </h2>
            {guestLectures.map((course) => (
              <div key={`${course.code}-${course.semester}`} className="mb-8">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="font-semibold text-sm">
                    <span className="font-mono">{course.code}</span>: &lsquo;{course.title}&rsquo;
                  </h3>
                  <span className="font-mono text-xs text-foreground-tertiary">{course.semester}</span>
                </div>
                <p className="text-sm text-foreground-secondary mb-1">
                  Guest Lecturer — {course.institution}
                </p>
                <p className="font-mono text-xs text-foreground-quaternary mb-3">
                  Instructor: {course.instructor}
                </p>
                <ul className="space-y-1.5 text-sm text-foreground-secondary">
                  {course.lectures.map((lecture) => (
                    <li key={lecture.date} className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-foreground-quaternary">
                      <span className="font-mono text-xs text-foreground-tertiary mr-2">{lecture.date}</span>
                      {lecture.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
