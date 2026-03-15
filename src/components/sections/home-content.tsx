"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { FadeIn } from "@/components/animations/fade-in";
import { motion, useReducedMotion } from "framer-motion";
import { TiltCard } from "@/components/interactive/tilt-card";

/* ─────────────────────────────────────────
   DATA
   ───────────────────────────────────────── */

const news = [
  { date: "Mar 2026", text: "Completed my Master of Science in Computer Science & Engineering at UC Santa Cruz, en route to the PhD" },
  { date: "Mar 2026", text: "Attended the 4th Annual Bay Area HCI Gathering at Santa Clara University, connecting with ~150 researchers" },
  { date: "Mar 2026", text: "Now recruiting for the AI Privacy & Regulation Study with UC Santa Cruz and Stanford University — interviewing practitioners on privacy under emerging AI regulations" },
  { date: "Feb 2026", text: "Presented at USEC 2026 (co-located with NDSS) in San Diego — our paper on AI-enabled NSFW deepfakes on Fiverr" },
  { date: "Feb 2026", text: "Paper on AI-enabled deepfakes accepted at USEC 2026, co-located with NDSS (~32% acceptance rate)" },
  { date: "Feb 2026", text: "Launched Egyptians in CS Research with Badr AlKhamissi — 262 researchers across 16 tracks worldwide" },
  { date: "Dec 2025", text: "Released PaperClerk AI — a local, privacy-preserving assistant for managing research paper libraries" },
  { date: "Jun 2025", text: "Joined UC Santa Cruz as a PhD student, advised by Prof. Ram Sundara Raman" },
  { date: "Apr 2025", text: "Featured in Dartmouth Guarini School Student Spotlight — profiled on research, the journey from Zefta to Dartmouth, and STEM advocacy" },
  { date: "Feb 2025", text: "Selected as AAAS CASE Workshop Delegate — representing Dartmouth in Washington, D.C." },
  { date: "Feb 2025", text: "Attended NDSS 2025 and the USEC workshop on human factors of security in San Diego" },
  { date: "Jan 2025", text: "RaaS paper published in Computers in Human Behavior — analyzing vendor communication themes in darknet ransomware advertisements" },
  { date: "Jan 2025", text: "Started as Lead Graduate Teaching Assistant at Dartmouth for COSC 55: Security & Privacy" },
  { date: "Sep 2024", text: "Joined MBZUAI as Research Associate — research on combating deepfakes and responsible AI" },
  { date: "Aug 2024", text: "DVa paper published at the 33rd USENIX Security Symposium" },
];

const publications = [
  {
    year: 2026,
    title: "From Underground to Mainstream Marketplaces: Measuring AI-Enabled NSFW Deepfakes on Fiverr",
    authors: "Mohamed Moustafa Dawoud, Alejandro Cuevas, Ram Sundara Raman",
    venue: "USEC 2026, co-located with NDSS",
    description: "We investigate whether AI-enabled NSFW services have moved into mainstream gig marketplaces. Through keyword searches, sitemap analysis, and snowball sampling, we identify 593 AI-enabled NSFW gigs on Fiverr — 82.8% expose deepfake-enabling features, 74.9% of sellers joined in 2025, and sellers disproportionately target platforms like OnlyFans and Instagram.",
    link: "https://www.ndss-symposium.org/ndss-paper/from-underground-to-mainstream-marketplaces-measuring-ai-enabled-nsfw-deepfakes-on-fiverr/",
    image: "/publications/fiverr-deepfakes.png",
  },
  {
    year: 2025,
    title: "Vendor Communication Themes in Darknet Ransomware-as-a-Service (RaaS) Advertisements",
    authors: "Taylor Fisher, Zacharias Pieri, C. Jordan Howell, Roberta O'Malley, Lauren Tremblay, Mohamed Dawoud",
    venue: "Computers in Human Behavior",
    description: "A thematic analysis of RaaS advertisements on darknet markets. The most common theme was victimization, appearing in 70% of the dataset, revealing the strategic mechanisms vendors employ to attract both novice and experienced cybercriminals through the commodification of ransomware.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0747563225000184",
    image: "/publications/raas-darknet.png",
  },
  {
    year: 2024,
    title: "DVa: Extracting Victims and Abuse Vectors from Android Accessibility Malware",
    authors: "Haichuan Xu, Mingxuan Yao, Runze Zhang, Mohamed Moustafa Dawoud, Jeman Park, Brendan Saltaformaggio",
    venue: "USENIX Security 2024",
    description: "We developed DVa, a malware analysis pipeline using dynamic victim-guided execution and symbolic analysis, to uncover accessibility malware's targeted victims and abuse vectors. Deployed on 9,850 a11y malware samples, DVa uncovered 215 unique victims targeted with an average of 13.9 abuse routines.",
    link: "https://www.usenix.org/conference/usenixsecurity24/presentation/xu-haichuan",
    image: "/publications/dva-malware.png",
  },
  {
    year: 2022,
    title: "Social Engineering and Technical Security Fusion",
    authors: "Wassim Alexan, Eyad Mamdouh, Mohamed ElBeltagy, Ahmed Ashraf, Mohamed Moustafa, Hashem Al-Qurashi",
    venue: "ITC-Egypt 2022",
    description: "A message security scheme fusing traditional cryptographic algorithms and LSB steganography with ideas from social engineering. The scheme ensures secure transmission of sensitive messages over unsecured networks, defending against advances in cryptanalysis and growing computing power.",
    link: "https://ieeexplore.ieee.org/document/9855761",
    image: "/publications/social-engineering.png",
  },
  {
    year: 2022,
    title: "Image Encryption Through Rössler System, PRNG S-Box and Recamán's Sequence",
    authors: "Mohamed ElBeltagy, Wassim Alexan, Abdelrahman Elkhamry, Mohamed Moustafa, Hisham H. Hussein",
    venue: "IEEE CCWC 2022",
    description: "A lightweight three-stage image encryption scheme using the Rössler chaotic attractor, a PRNG-based S-Box, and Recamán's sequence. Performance metrics show comparable security to existing schemes at very low processing cost, making it suitable for real-time image security applications.",
    link: "https://ieeexplore.ieee.org/abstract/document/9720905",
    image: "/publications/rossler-encryption.png",
  },
  {
    year: 2021,
    title: "IoMT Security: SHA3-512, AES-256, RSA and LSB Steganography",
    authors: "Wassim Alexan, Ahmed Ashraf, Eyad Mamdouh, Sarah Mohamed, Mohamed Moustafa",
    venue: "NICS 2021",
    description: "An information security scheme for the Internet of Medical Things utilizing AES-256, RSA, SHA3-512, and LSB embedding in medical scans. The scheme guarantees secure transmission of medical data while satisfying user authentication and confidentiality requirements.",
    link: "https://ieeexplore.ieee.org/abstract/document/9701567",
    image: "/publications/iomt-security.png",
  },
];

const ongoingProjects = [
  {
    title: "AI Privacy & Regulation Study",
    collaborators: ["RANDLab (UCSC)", "Stanford University"],
    summary: "How do practitioners navigate privacy when building AI products under emerging regulations?",
    highlights: [
      "Confidential one-hour interviews with industry professionals",
      "Covering the EU AI Act, CCPA, GDPR, and evolving US state laws",
      "Participants span privacy, compliance, engineering, and risk roles",
      "Centering practitioner experience to inform policy recommendations",
    ],
    status: "Recruiting Participants",
    tags: ["AI Governance", "Privacy", "Regulation", "Practitioner Study"],
    link: "https://randlab.engineering.ucsc.edu/aigov-study/",
    irb: "UC Santa Cruz IRB HS-FY2026-108",
  },
];

/* ─────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────── */

function highlightName(authors: string) {
  return authors.split(/(Mohamed\s+(?:Moustafa\s+)?(?:Dawoud)?)/i).map((part, i) =>
    /mohamed/i.test(part) ? (
      <span key={i} className="font-semibold">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
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
    <div className="min-h-screen pt-16 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════════════════════════════════════
            PROFILE
            ═══════════════════════════════════════ */}
        <FadeIn direction="none">
          <section className="pb-12 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            {/* Profile photo with 3D tilt */}
            <TiltCard className="flex-shrink-0" maxTilt={8}>
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
            </TiltCard>

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


              <div className="space-y-3 text-base text-foreground-secondary leading-relaxed">
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
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="gradient-link text-foreground-tertiary">
                  GitHub
                </a>
                <span className="text-foreground-quaternary">&middot;</span>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="gradient-link text-foreground-tertiary">
                  LinkedIn
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
            <SectionHeading title="News" href="/news" id="section-news" />
            <div className="space-y-1">
              {visibleNews.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed -mx-3 px-3 py-2 rounded-lg hover:bg-accent-subtle transition-colors duration-150"
                >
                  <span className="flex items-center gap-2 text-foreground-quaternary flex-shrink-0 w-24">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      item.text.toLowerCase().includes("paper") || item.text.toLowerCase().includes("accepted") || item.text.toLowerCase().includes("published")
                        ? "bg-accent"
                        : item.text.toLowerCase().includes("talk") || item.text.toLowerCase().includes("attended") || item.text.toLowerCase().includes("gathering")
                          ? "bg-foreground"
                          : "bg-foreground-tertiary"
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

        {/* ── divider ── */}
        <hr className="border-border mb-16" />

        {/* ═══════════════════════════════════════
            ONGOING PROJECTS
            ═══════════════════════════════════════ */}
        <FadeIn direction="none" delay={0.08}>
          <section className="mb-16" aria-labelledby="section-projects">
            <SectionHeading title="Ongoing Projects" id="section-projects" />

            <div className="space-y-6">
              {ongoingProjects.map((project) => (
                <a
                  key={project.title}
                  href={project.link || "#"}
                  target={project.link ? "_blank" : undefined}
                  rel={project.link ? "noopener noreferrer" : undefined}
                  className="group card-hover block rounded-xl border border-border hover:border-accent/30 hover:bg-accent-subtle overflow-hidden"
                >
                  {/* Header bar */}
                  <div className="px-5 py-4 border-b border-border bg-muted/30">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
                        <h3 className="text-base font-semibold tracking-tight group-hover:text-accent transition-colors duration-150">
                          {project.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-accent font-medium tracking-wide uppercase">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-foreground-secondary mt-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Body */}
                  <div className="px-5 py-4 space-y-4">
                    {/* Highlights */}
                    <ul className="space-y-2">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-foreground-secondary">
                          <span className="w-1 h-1 rounded-full bg-foreground-quaternary mt-2 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Footer: collaborators + tags */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border">
                      <div className="flex flex-wrap items-center gap-2">
                        {project.collaborators.map((c, i) => (
                          <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-md bg-muted text-xs font-mono text-foreground-tertiary">
                            {c}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs text-foreground-quaternary">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
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
            {publications.map((pub) => (
              <FadeIn key={pub.title} direction="none" delay={0.02}>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-hover flex flex-col sm:flex-row gap-5 p-4 rounded-xl border border-border hover:border-accent/30 hover:bg-accent-subtle"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full sm:w-56 sm:flex-shrink-0 aspect-[16/10] rounded-lg overflow-hidden bg-muted border border-border">
                    <Image
                      src={pub.image}
                      alt={pub.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 224px"
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-xs text-foreground-quaternary tabular-nums">
                      {pub.year}
                    </span>
                    <h3 className="text-base font-semibold leading-snug mb-1 group-hover:text-accent transition-colors duration-150">
                      {pub.title}
                    </h3>
                    <p className="text-xs text-foreground-tertiary leading-relaxed mb-1">
                      {highlightName(pub.authors)}
                    </p>
                    <p className="text-xs italic text-foreground-quaternary mb-2">
                      {pub.venue}
                    </p>
                    <p className="text-xs text-foreground-secondary leading-relaxed mb-2">
                      {pub.description}
                    </p>
                    <span className="text-xs font-mono gradient-link">
                      [PDF]
                    </span>
                  </div>
                </a>
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
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block -mx-3 px-3 py-3 rounded-lg hover:bg-accent-subtle transition-colors duration-150"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-xs text-foreground-quaternary tabular-nums">
                      {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </span>
                    <span className="text-foreground-quaternary">·</span>
                    <span className="font-mono text-xs text-foreground-quaternary">
                      {post.readingTime} min read
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold leading-snug group-hover:text-accent transition-colors duration-150">
                    {post.title}
                  </h3>
                  <p className="text-xs text-foreground-tertiary leading-relaxed mt-1">
                    {post.description}
                  </p>
                </Link>
              ))}
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
              I am always interested in meeting new people and exploring ideas together.
              Whether you&apos;re a researcher looking to collaborate, a student exploring
              your path, or someone who just wants to talk — my inbox is open.
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
