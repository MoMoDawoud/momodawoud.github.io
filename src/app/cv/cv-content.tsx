"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations/fade-in";
import { siteConfig } from "@/data/site-config";

const education = [
  {
    degree: "Ph.D. in Computer Science & Engineering",
    institution: "University of California, Santa Cruz",
    period: "Jun 2025 - Present",
    advisor: "Prof. Ramakrishnan (Ram) Sundara Raman",
    focus: "Human-Centered Security, Privacy, and Responsible AI",
  },
  {
    degree: "M.S. in Computer Science & Engineering",
    institution: "University of California, Santa Cruz",
    period: "Jun 2025 - Mar 2026",
    advisor: "Prof. Ramakrishnan (Ram) Sundara Raman",
    focus: "Thesis committee: Prof. Ram Sundara Raman (Chair), Prof. Alvaro A. Cardenas, Prof. David T. Lee, Dr. Alejandro Cuevas",
  },
  {
    degree: "B.Sc. in Informatics and Computer Science",
    institution: "German International University (GIU), Cairo",
    period: "Apr 2021 - Jul 2024",
    advisor: null,
    focus: "Excellent with High Honors · Major: Information Security · Full Merit Scholarship",
  },
];

const experience = [
  {
    title: "Graduate Student Researcher",
    organization: "University of California, Santa Cruz",
    period: "Jun 2025 - Present",
    location: "Santa Cruz, CA",
    description:
      "Research on human-centered security, privacy, and AI governance under Prof. Ram Sundara Raman. Leading the AI Privacy & Regulation Study with Stanford University.",
  },
  {
    title: "Graduate Teaching Assistant",
    organization: "Dartmouth College",
    period: "Jan 2025 - Jun 2025",
    location: "Hanover, NH",
    description:
      "Lead GTA for COSC 55: Security & Privacy. Designed AI-integrated teaching model with oral evaluations for 28 students.",
  },
  {
    title: "Research Associate",
    organization: "Mohamed bin Zayed University of AI (MBZUAI)",
    period: "Sep 2024 - Dec 2024",
    location: "Abu Dhabi, UAE",
    description:
      "Research on combating deepfakes and responsible AI. Investigated user mental models with AI-generated content.",
  },
  {
    title: "Research Intern",
    organization: "Georgia Institute of Technology",
    period: "Oct 2023 - Feb 2024",
    location: "Atlanta, GA",
    description:
      "Systems security research under Prof. Brendan D. Saltaformaggio. Contributed to USENIX Security 2024 publication.",
  },
  {
    title: "Undergraduate Research Assistant",
    organization: "University of South Florida",
    period: "Jan 2023 - Aug 2023",
    location: "Remote",
    description:
      "Cybercrime research with Prof. C. Jordan Howell on RaaS marketplaces. Published in Computers in Human Behavior.",
  },
  {
    title: "Information Security Intern",
    organization: "The German University in Cairo (GUC)",
    period: "Sep 2021 - Jan 2023",
    location: "Cairo, Egypt",
    description:
      "Applied security research on cryptography and IoT/IoMT security under Prof. Wassim Alexan. Published multiple papers.",
  },
];

const presentations = [
  {
    title: "AI-Enabled NSFW Deepfakes on Fiverr",
    event: "USEC 2026 (co-located with NDSS 2026)",
    location: "San Diego, CA",
    year: "2026",
    type: "Workshop Talk",
  },
];

const ongoingProjects = [
  {
    title: "AI Privacy & Regulation Study",
    collaborators: "UC Santa Cruz (RANDLab) & Stanford University",
    description:
      "Qualitative study examining how practitioners navigate privacy challenges and emerging regulations (EU AI Act, CCPA, GDPR) when building and deploying AI products. Conducting confidential interviews with professionals across privacy, compliance, engineering, and risk roles.",
    link: "https://randlab.engineering.ucsc.edu/aigov-study/",
  },
];

const service = [
  {
    title: "Co-founder & Lead Maintainer, Egyptians in CS Research",
    organization: "egyptians-in-cs.github.io",
    year: "2026",
    description: "Community directory of 262 Egyptian computer science researchers across 16 research tracks worldwide. Expanded scope from AI to all of CS in collaboration with the original creator Badr AlKhamissi.",
    link: "https://egyptians-in-cs.github.io",
  },
  {
    title: "AAAS CASE Workshop Delegate",
    organization: "Washington, D.C.",
    year: "2025",
    description: "One of four graduate students selected to represent Dartmouth College at the AAAS Catalyzing Advocacy in Science and Engineering Workshop; engaged with policymakers on science, technology, and public policy.",
  },
  {
    title: "Conference Volunteer",
    organization: "IEEE Secure Development Conference (SecDev)",
    year: "2023",
    description: "Supported session logistics and attendee coordination at IEEE SecDev 2023, Atlanta, GA.",
  },
  {
    title: "PhD Application Mentorship",
    organization: "Ongoing",
    year: "Ongoing",
    description: "Mentor a select cohort of prospective PhD applicants in Computer Science and related fields each application cycle. Provide personalized feedback on application materials (SoP, research statements, CVs), help define research focus and target programs, and advise on overall application strategy.",
  },
  {
    title: "Dartmouth Guarini School Student Spotlight",
    organization: "Dartmouth College",
    year: "2025",
    description: "Featured by Dartmouth's Guarini School of Graduate and Advanced Studies, discussing research in human-centered security and privacy, the journey from Zefta, Egypt to Dartmouth, and advocacy for international students in STEM policy.",
    link: "https://guarinigrad.dartmouth.edu/blog/2025/04/28/student-spotlight-mohamed-moustafa-dawoud/",
  },
];

const jumpLinks = [
  { id: "education", label: "Education" },
  { id: "ongoing", label: "Ongoing Projects" },
  { id: "experience", label: "Experience" },
  { id: "presentations", label: "Talks" },
  { id: "service", label: "Service" },
];

export function CVContent() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader title="Curriculum Vitae" description="Last updated: March 2026">
          <div className="flex gap-2 mt-4 print:hidden">
            <Button size="sm" onClick={() => window.print()}>
              <Download className="mr-2 h-4 w-4" />
              Print / Save as PDF
            </Button>
          </div>
        </PageHeader>

        {/* Jump Navigation */}
        <nav className="mb-10 print:hidden" aria-label="CV sections">
          <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
            {jumpLinks.map((section, i) => (
              <span key={section.id} className="inline-flex items-center">
                <a
                  href={`#${section.id}`}
                  className="font-mono text-xs tracking-wide text-foreground-tertiary hover:text-foreground transition-colors"
                >
                  {section.label}
                </a>
                {i < jumpLinks.length - 1 && (
                  <span className="mx-2 text-foreground-quaternary select-none">&middot;</span>
                )}
              </span>
            ))}
          </div>
        </nav>

        {/* Contact Info */}
        <FadeIn>
          <div className="mb-16">
            <p className="font-mono text-sm text-foreground-secondary">{siteConfig.name}</p>
            <p className="font-mono text-xs text-foreground-tertiary mt-1">{siteConfig.title}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 font-mono text-xs text-foreground-tertiary">
              <a href={`mailto:${siteConfig.email}`} className="link-accent">
                {siteConfig.email}
              </a>
              <span>{siteConfig.location.city}</span>
              <a href="https://momodawoud.github.io" className="link-accent">
                momodawoud.github.io
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Education */}
        <section id="education" className="mb-12 scroll-mt-20">
          <h2 className="font-mono text-xs tracking-widest uppercase text-foreground-quaternary mb-6">
            EDUCATION
          </h2>
          <StaggerChildren className="space-y-6">
            {education.map((edu) => (
              <StaggerItem key={edu.degree}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="text-sm font-medium">{edu.degree}</h3>
                    <p className="text-sm text-foreground-secondary">{edu.institution}</p>
                    {edu.advisor && (
                      <p className="text-sm text-foreground-tertiary mt-1">Advisor: {edu.advisor}</p>
                    )}
                    <p className="text-sm text-foreground-tertiary">Focus: {edu.focus}</p>
                  </div>
                  <span className="font-mono text-xs text-foreground-quaternary shrink-0">
                    {edu.period}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        <hr className="my-8" />

        {/* Ongoing Projects */}
        <section id="ongoing" className="mb-12 scroll-mt-20">
          <h2 className="font-mono text-xs tracking-widest uppercase text-foreground-quaternary mb-6">
            ONGOING PROJECTS
          </h2>
          <StaggerChildren className="space-y-5">
            {ongoingProjects.map((project) => (
              <StaggerItem key={project.title}>
                <div>
                  <h3 className="text-sm font-medium">
                    {"link" in project && project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-accent">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="text-sm text-foreground-secondary">{project.collaborators}</p>
                  <p className="text-sm text-foreground-tertiary mt-1">{project.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        <hr className="my-8" />

        {/* Experience */}
        <section id="experience" className="mb-12 scroll-mt-20">
          <h2 className="font-mono text-xs tracking-widest uppercase text-foreground-quaternary mb-6">
            EXPERIENCE
          </h2>
          <StaggerChildren className="space-y-6">
            {experience.map((exp) => (
              <StaggerItem key={exp.title + exp.organization}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="text-sm font-medium">{exp.title}</h3>
                    <p className="text-sm text-foreground-secondary">{exp.organization}</p>
                    {exp.location && (
                      <p className="text-xs text-foreground-tertiary mt-0.5">{exp.location}</p>
                    )}
                    <p className="text-sm text-foreground-tertiary mt-1">{exp.description}</p>
                  </div>
                  <span className="font-mono text-xs text-foreground-quaternary shrink-0">
                    {exp.period}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        <hr className="my-8" />

        {/* Presentations */}
        <section id="presentations" className="mb-12 scroll-mt-20">
          <h2 className="font-mono text-xs tracking-widest uppercase text-foreground-quaternary mb-6">
            TALKS & PRESENTATIONS
          </h2>
          <StaggerChildren className="space-y-5">
            {presentations.map((talk) => (
              <StaggerItem key={talk.title}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="text-sm font-medium">{talk.title}</h3>
                    <p className="text-sm text-foreground-secondary">{talk.event}</p>
                    <p className="text-xs text-foreground-tertiary">
                      {talk.location} &middot; {talk.type}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-foreground-quaternary shrink-0">
                    {talk.year}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        <hr className="my-8" />

        {/* Service */}
        <section id="service" className="mb-12 scroll-mt-20">
          <h2 className="font-mono text-xs tracking-widest uppercase text-foreground-quaternary mb-6">
            SERVICE & OUTREACH
          </h2>
          <StaggerChildren className="space-y-5">
            {service.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="text-sm font-medium">
                      {"link" in item && item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="link-accent">
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <p className="text-sm text-foreground-secondary">{item.organization}</p>
                    <p className="text-sm text-foreground-tertiary">{item.description}</p>
                  </div>
                  <span className="font-mono text-xs text-foreground-quaternary shrink-0">
                    {item.year}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        <hr className="my-8" />

        {/* Publications CTA */}
        <div className="text-center py-8 print:hidden">
          <h3 className="font-serif text-lg font-semibold mb-1">Publications</h3>
          <p className="text-sm text-foreground-tertiary mb-4">
            See my full list of publications with links to papers and code.
          </p>
          <Button variant="outline" size="sm" asChild>
            <Link href="/publications">
              View Publications
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
