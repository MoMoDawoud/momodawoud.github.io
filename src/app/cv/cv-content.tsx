"use client";

import { motion } from "framer-motion";
import {
  Download,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  Code,
  Globe,
  Mail,
  MapPin,
  ExternalLink,
  Users,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations/fade-in";
import { siteConfig } from "@/data/site-config";

const education = [
  {
    degree: "Ph.D. in Computer Science & Engineering",
    institution: "University of California, Santa Cruz",
    period: "2025 - Present",
    advisor: "Prof. Ramakrishnan (Ram) Sundara Raman",
    focus: "Human-Centered Security, Privacy, and Responsible AI",
  },
  {
    degree: "B.Sc. in Informatics and Computer Science",
    institution: "German International University, Cairo",
    period: "2021 - 2024",
    advisor: null,
    focus: "Full Merit Scholarship • 18th nationwide in Thanawya Amma Mathematics (408/410, 99.51%)",
  },
];

const experience = [
  {
    title: "Graduate Student Researcher",
    organization: "University of California, Santa Cruz",
    period: "Jun 2025 - Present",
    location: "Santa Cruz, CA",
    description:
      "Research on human-centered security, privacy, and AI governance under Prof. Ram Sundara Raman. Leading qualitative studies of AI governance practices and large-scale measurements of AI abuse-as-a-service on gig marketplaces.",
  },
  {
    title: "Graduate Teaching Assistant",
    organization: "Dartmouth College",
    period: "Jan 2025 - Jun 2025",
    location: "Hanover, NH",
    description:
      "Lead GTA for COSC 55: Security & Privacy (Prof. Sami Saydjari). Designed AI-integrated teaching model with oral evaluations for 28 students. Created labs emphasizing system design freedom and critical thinking.",
  },
  {
    title: "Research Associate",
    organization: "Mohamed bin Zayed University of AI (MBZUAI)",
    period: "Sep 2024 - Dec 2024",
    location: "Abu Dhabi, UAE",
    description:
      "Research on combating deepfakes and responsible AI. Investigated user mental models and trust judgments with AI-generated content. Developed prototype systems for detecting and explaining AI-generated content.",
  },
  {
    title: "Research Intern",
    organization: "Georgia Institute of Technology",
    period: "Oct 2023 - Feb 2024",
    location: "Atlanta, GA",
    description:
      "Systems security research under Prof. Brendan D. Saltaformaggio. Investigated LLMs for Android malware static analysis. Contributed to USENIX Security publication on accessibility malware.",
  },
  {
    title: "Undergraduate Research Assistant",
    organization: "University of South Florida",
    period: "Jan 2023 - Aug 2023",
    location: "Remote",
    description:
      "Cybercrime research with Prof. C. Jordan Howell on RaaS marketplaces. Led threat-intelligence component including data collection and analysis. Published in Computers in Human Behavior.",
  },
  {
    title: "Information Security Intern",
    organization: "German University in Cairo",
    period: "Sep 2021 - Jan 2023",
    location: "Cairo, Egypt",
    description:
      "Applied security research with Prof. Wassim Alexan on cryptography and IoT/IoMT security. Published multiple papers on encryption and security systems.",
  },
];

const awards = [
  {
    title: "AAAS CASE Workshop Delegate",
    organization: "Washington, DC",
    year: "2025",
    description: "Selected to represent Dartmouth at the AAAS Catalyzing Advocacy in Science and Engineering Workshop",
  },
  {
    title: "18th National Rank",
    organization: "Egypt Thanawya Amma Mathematics Exam",
    year: "2019",
    description: "Ranked 18th out of 600,000+ students nationwide (408/410, 99.51%)",
  },
  {
    title: "Full Merit Scholarship",
    organization: "German International University, Cairo",
    year: "2019",
    description: "Four-year undergraduate scholarship for top-ranked national students",
  },
];

const service = [
  {
    title: "Conference Volunteer",
    organization: "IEEE Secure Development Conference (SecDev)",
    year: "2023",
    description: "Supported session logistics and attendee coordination",
  },
  {
    title: "Community Mentorship",
    organization: "Ongoing",
    year: "2023-Present",
    description: "Mentor prospective CS PhD applicants on research focus, materials, and strategy",
  },
];

const skills = {
  research: [
    "Internet Measurements",
    "User Studies",
    "Survey Design",
    "Qualitative Analysis",
    "Statistical Analysis",
  ],
  technical: [
    "Python",
    "JavaScript/TypeScript",
    "React/Next.js",
    "Machine Learning",
    "Network Analysis",
    "Android Security",
  ],
  tools: [
    "Git",
    "Docker",
    "LaTeX",
    "Jupyter",
    "Linux",
  ],
};

export function CVContent() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                  Curriculum Vitae
                </h1>
                <p className="text-muted-foreground">
                  Last updated: January 2025
                </p>
              </div>
              <Button className="rounded-full" asChild>
                <a href="/Mohamed_Dawoud_CV.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.1}>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-2">{siteConfig.name}</h2>
              <p className="text-lg text-accent mb-4">{siteConfig.title}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {siteConfig.location.city}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  momodawoud.github.io
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Education */}
        <section className="mb-12">
          <FadeIn>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-accent" />
              Education
            </h2>
          </FadeIn>

          <StaggerChildren className="space-y-6">
            {education.map((edu) => (
              <StaggerItem key={edu.degree}>
                <div className="pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <Badge variant="outline">{edu.period}</Badge>
                  </div>
                  <p className="text-accent">{edu.institution}</p>
                  {edu.advisor && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Advisor: {edu.advisor}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    Focus: {edu.focus}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        <Separator className="my-8" />

        {/* Experience */}
        <section className="mb-12">
          <FadeIn>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-accent" />
              Experience
            </h2>
          </FadeIn>

          <StaggerChildren className="space-y-6">
            {experience.map((exp) => (
              <StaggerItem key={exp.title + exp.organization}>
                <div className="pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold">{exp.title}</h3>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                  <p className="text-accent">{exp.organization}</p>
                  {exp.location && (
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">
                    {exp.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        <Separator className="my-8" />

        {/* Awards */}
        <section className="mb-12">
          <FadeIn>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              Awards & Honors
            </h2>
          </FadeIn>

          <StaggerChildren className="space-y-4">
            {awards.map((award) => (
              <StaggerItem key={award.title}>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <Badge className="mt-0.5">{award.year}</Badge>
                  <div>
                    <h3 className="font-semibold">{award.title}</h3>
                    <p className="text-sm text-accent">{award.organization}</p>
                    <p className="text-sm text-muted-foreground">
                      {award.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        <Separator className="my-8" />

        {/* Service & Outreach */}
        <section className="mb-12">
          <FadeIn>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              Service & Outreach
            </h2>
          </FadeIn>

          <StaggerChildren className="space-y-4">
            {service.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <Badge className="mt-0.5">{item.year}</Badge>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-accent">{item.organization}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        <Separator className="my-8" />

        {/* Skills */}
        <section className="mb-12">
          <FadeIn>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Code className="h-5 w-5 text-accent" />
              Skills
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="p-4 rounded-xl bg-card border border-border">
                <h3 className="font-semibold mb-3 text-accent">Research</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.research.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-4 rounded-xl bg-card border border-border">
                <h3 className="font-semibold mb-3 text-accent">Technical</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-4 rounded-xl bg-card border border-border">
                <h3 className="font-semibold mb-3 text-accent">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Publications Link */}
        <FadeIn delay={0.3}>
          <div className="text-center p-8 rounded-2xl bg-accent/5 border border-accent/20">
            <BookOpen className="h-8 w-8 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Publications</h3>
            <p className="text-muted-foreground mb-4">
              See my full list of publications with links to papers and code.
            </p>
            <Button variant="outline" className="rounded-full" asChild>
              <a href="/publications">
                View Publications
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
