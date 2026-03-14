"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { PageHeader } from "@/components/page-header";

const courses = [
  {
    semester: "Spring 2025",
    role: "Lead Graduate Teaching Assistant",
    code: "COSC 55",
    title: "Security & Privacy",
    institution: "Dartmouth College",
    instructor: "Prof. Sami Saydjari",
    highlights: [
      "Designed AI-integrated teaching model with oral evaluations for 28 students",
      "Full ownership of lab design, grading, and weekly 1-on-1 check-ins",
      "Created project-based curriculum embracing AI tools while demanding understanding",
    ],
  },
];

export function TeachingContent() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Teaching"
          description="Courses, teaching philosophy, and classroom experience."
        />

        {/* Teaching */}
        <FadeIn direction="none">
          <section className="mb-16">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Teaching
            </h2>
            {courses.map((course) => (
              <div key={course.code} className="mb-8">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="font-semibold text-sm">
                    <span className="font-mono">{course.code}</span>: &lsquo;{course.title}&rsquo;
                  </h3>
                  <span className="font-mono text-xs text-foreground-tertiary">{course.semester}</span>
                </div>
                <p className="text-sm text-foreground-secondary mb-1">
                  {course.role} — {course.institution}
                </p>
                <p className="font-mono text-xs text-foreground-quaternary mb-3">
                  Instructor: {course.instructor}
                </p>
                <ul className="space-y-1.5 text-sm text-foreground-secondary">
                  {course.highlights.map((h, i) => (
                    <li key={i} className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-foreground-quaternary">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </FadeIn>

        {/* Course Photo */}
        <FadeIn direction="none" delay={0.05}>
          <div className="rounded-lg overflow-hidden mb-16 border border-border">
            <Image
              src="/prof_sami.jpg"
              alt="Teaching session with Prof. Sami Saydjari at Dartmouth"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </FadeIn>

        {/* Teaching Philosophy */}
        <FadeIn direction="none" delay={0.1}>
          <section className="mb-16">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Teaching Philosophy
            </h2>
            <div className="space-y-4 text-sm text-foreground-secondary leading-relaxed max-w-prose">
              <p>
                I believe AI is reshaping how students learn — and our teaching must evolve with it. Instead of pretending students aren&apos;t using tools like ChatGPT and GitHub Copilot, I redesigned part of the course to embrace AI coding assistants while holding students to a higher standard of understanding.
              </p>
              <p>
                Students had full freedom in system design. AI tools were allowed — but used mindfully. Every week, I met each student or team for oral check-ins to probe real understanding. Each project ended with a final oral evaluation. If you used AI, great — but you had to explain, justify, and defend your choices.
              </p>
            </div>

            {/* Student Quote */}
            <div className="my-10 py-8 px-6 text-center">
              <blockquote className="font-serif italic text-lg sm:text-xl text-foreground-secondary mb-4 max-w-lg mx-auto">
                &ldquo;This is the best way to force real understanding. I wish more courses at Dartmouth did this.&rdquo;
              </blockquote>
              <p className="font-mono text-xs text-foreground-quaternary tracking-wide">
                — Student feedback, final oral evaluation
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Photos */}
        <FadeIn direction="none" delay={0.15}>
          <div className="space-y-6 mb-16">
            <div className="rounded-lg overflow-hidden border border-border">
              <Image
                src="/teaching_2.jpg"
                alt="Lab session with students at Dartmouth"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-border">
              <Image
                src="/teaching_1.jpg"
                alt="Classroom discussion at Dartmouth"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn direction="none" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <a
              href="https://www.linkedin.com/posts/mohamedmostafadawod_cybersecurity-aiineducation-privacy-activity-7338998254958764035-AywP"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent font-medium"
            >
              Read my LinkedIn reflection &rarr;
            </a>
            <span className="text-foreground-quaternary">&middot;</span>
            <a href="mailto:mdawoud@ucsc.edu" className="link-accent font-medium">
              Discuss collaboration
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
