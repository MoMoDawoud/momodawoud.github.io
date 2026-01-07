"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  GraduationCap,
  ExternalLink,
  FileText,
  MapPin,
  Award,
  Newspaper,
  Mic,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

// Venue colors for publications
const venueColors: Record<string, string> = {
  "USENIX Security": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "Computers in Human Behavior": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "USEC": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  "CHI": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  "IEEE S&P": "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  "CCS": "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  "NDSS": "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
};

// News type icons
const newsIcons: Record<string, typeof Award> = {
  publication: BookOpen,
  award: Award,
  talk: Mic,
  media: Newspaper,
  milestone: GraduationCap,
};

const news = [
  { date: "Jun 2025", text: "Joined UC Santa Cruz as a PhD student, advised by Prof. Ram Sundara Raman", type: "milestone", highlight: true },
  { date: "2026", text: "Paper on AI abuse services on Fiverr accepted at USEC 2026 (co-located with NDSS)", type: "publication" },
  { date: "Apr 2025", text: "Featured in Guarini School Student Spotlight after attending AAAS CASE 2025 in Washington, D.C.", type: "media" },
  { date: "Feb 2025", text: "Attended NDSS 2025 in San Diego and the USEC workshop on human factors of security", type: "talk" },
  { date: "2025", text: "Paper on Ransomware-as-a-Service marketing published in Computers in Human Behavior", type: "publication" },
];

const publications = [
  {
    title: "The Rise of NSFW Generative AI Services on Mainstream Marketplaces: A Case Study of Fiverr",
    authors: ["Mohamed Moustafa Dawoud", "Alejandro Cuevas", "Ramakrishnan (Ram) Sundara Raman"],
    venue: "USEC",
    year: "2026",
    abstract: "A mixed-methods empirical study analyzing how the mainstream gig platform Fiverr enables AI-driven abuse and NCII-related services. First systematic measurement of AI abuse-as-a-service on a commercial gig marketplace.",
    link: "#",
    tags: ["AI Abuse", "Platform Safety", "NCII"],
  },
  {
    title: "Vendor communication themes in darknet Ransomware-as-a-Service (RaaS) advertisements",
    authors: ["Taylor Fisher", "Zacharias Pieri", "C. Jordan Howell", "Roberta O'Malley", "Lauren Tremblay", "Mohamed Dawoud"],
    venue: "Computers in Human Behavior",
    year: "2025",
    abstract: "This study analyzes how Ransomware-as-a-Service (RaaS) is marketed on darknet marketplaces. We examine vendor communication themes, seller strategies, pricing models, and customer engagement tactics.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0747563225000184",
    tags: ["Cybercrime", "Dark Web", "RaaS"],
  },
];

const affiliations = [
  { name: "UC Santa Cruz", role: "PhD Student, advised by Prof. Ram Sundara Raman", period: "Jun 2025 - Present", location: "Santa Cruz, CA", current: true },
  { name: "Dartmouth College", role: "Lead Graduate Teaching Assistant", period: "Jan - Jun 2025", location: "Hanover, NH" },
  { name: "MBZUAI", role: "Research Associate", period: "Sep - Dec 2024", location: "Abu Dhabi, UAE" },
  { name: "Georgia Tech", role: "Research Intern", period: "Oct 2023 - Feb 2024", location: "Atlanta, GA" },
  { name: "University of South Florida", role: "Undergraduate Research Assistant", period: "Jan - Aug 2023", location: "Remote" },
  { name: "German International University", role: "B.Sc. Informatics & CS (Merit Scholar)", period: "2021 - 2024", location: "Cairo, Egypt" },
];

export function HomeContent() {
  const [expandedPub, setExpandedPub] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* ==================== PROFILE SECTION ==================== */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header with Photo and Basic Info */}
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-xl overflow-hidden border-2 border-border shadow-lg flex-shrink-0"
              >
                <Image
                  src="/profile.jpg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Name, Title, Contact */}
              <div className="flex-1">
                <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-1">{siteConfig.name}</h1>
                <p className="text-lg text-accent font-medium mb-1">
                  PhD Student in Computer Science & Engineering
                </p>
                <p className="text-muted-foreground mb-4">
                  <a href="https://www.ucsc.edu" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    University of California, Santa Cruz
                  </a>
                </p>

                {/* Location & Contact Row */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-accent" />
                    Santa Cruz, CA
                  </span>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
                    <Mail className="h-4 w-4" />
                    {siteConfig.email}
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-2">
                  {[
                    { icon: Github, href: siteConfig.social.github, label: "GitHub" },
                    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                    { icon: GraduationCap, href: siteConfig.social.googleScholar, label: "Google Scholar" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/cv"
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                    >
                      <FileText className="h-4 w-4" />
                      CV
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-[15px] leading-relaxed">
              <p>
                I am a PhD student advised by{" "}
                <a href="https://ramakrishnansr.com" className="text-accent hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                  Prof. Ram Sundara Raman
                </a>
                . My research lies at the intersection of <strong>privacy, AI, and human-centered security</strong>. It is motivated by a simple conviction: the Internet threat landscape is evolving faster than ever in the age of AI, and protecting users now requires treating security and privacy as deeply socio-technical problems.
              </p>

              <p className="text-muted-foreground">
                Technical defenses alone are insufficient. We must understand how AI is deployed, interpreted, and misused across the systems and institutions that shape everyday digital life. My work aims to illuminate these dynamics through empirical, human-centered investigation.
              </p>

              <p className="text-muted-foreground">
                My current projects include studying <strong className="text-foreground">AI governance frameworks</strong> in collaboration with Stanford, measuring <strong className="text-foreground">AI-abuse services</strong> on mainstream platforms with Princeton CITP, and auditing <strong className="text-foreground">privacy law compliance</strong> (CCPA) through combined LLM policy analysis and tracking measurements.
              </p>

              <p className="text-muted-foreground">
                Before starting my PhD, I worked as a research associate at <strong className="text-foreground">MBZUAI</strong>, a research intern at <strong className="text-foreground">Georgia Tech</strong>, and collaborated with researchers at <strong className="text-foreground">USF</strong>. I earned my B.Sc. from the German International University in Cairo as a merit scholar after ranking 18th nationally in Egypt&apos;s mathematics exam.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ==================== WHAT I WORK ON ==================== */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="font-serif text-2xl font-semibold mb-6 pb-2 border-b border-border">What I Work On</h2>

            <div className="grid gap-4">
              {/* Research Theme 1 */}
              <motion.div
                whileHover={{ x: 4 }}
                className="group flex gap-4 p-4 rounded-xl border border-border hover:border-accent/30 bg-card transition-all"
              >
                <div className="flex-shrink-0 w-1 rounded-full bg-purple-500" />
                <div>
                  <h3 className="font-medium mb-1 group-hover:text-accent transition-colors">
                    Human-Centered Security & Privacy
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    How do users, engineers, and policymakers understand security and privacy? I use surveys, interviews, and behavioral experiments to uncover where mental models diverge—and where those gaps create real-world vulnerabilities.
                  </p>
                </div>
              </motion.div>

              {/* Research Theme 2 */}
              <motion.div
                whileHover={{ x: 4 }}
                className="group flex gap-4 p-4 rounded-xl border border-border hover:border-accent/30 bg-card transition-all"
              >
                <div className="flex-shrink-0 w-1 rounded-full bg-blue-500" />
                <div>
                  <h3 className="font-medium mb-1 group-hover:text-accent transition-colors">
                    AI Governance & Accountable Deployment
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    How do organizations govern AI responsibly under emerging regulations? I study how engineers interpret ambiguous rules, how organizations deploy generative models, and where governance intentions diverge from implementation realities.
                  </p>
                </div>
              </motion.div>

              {/* Research Theme 3 */}
              <motion.div
                whileHover={{ x: 4 }}
                className="group flex gap-4 p-4 rounded-xl border border-border hover:border-accent/30 bg-card transition-all"
              >
                <div className="flex-shrink-0 w-1 rounded-full bg-emerald-500" />
                <div>
                  <h3 className="font-medium mb-1 group-hover:text-accent transition-colors">
                    Human-AI Interaction, Trust & Misuse
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I study how AI-abuse services emerge on mainstream platforms—from deepfake production to synthetic identities—and how users form trust judgments when interacting with AI-generated content.
                  </p>
                </div>
              </motion.div>

              {/* Research Theme 4 */}
              <motion.div
                whileHover={{ x: 4 }}
                className="group flex gap-4 p-4 rounded-xl border border-border hover:border-accent/30 bg-card transition-all"
              >
                <div className="flex-shrink-0 w-1 rounded-full bg-orange-500" />
                <div>
                  <h3 className="font-medium mb-1 group-hover:text-accent transition-colors">
                    Empirical & Data-Driven Auditing
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I combine Internet-scale measurement, LLM-based policy analysis, and tracking measurements to audit privacy law compliance and uncover misalignments between user expectations, platform behavior, and regulatory intent.
                  </p>
                </div>
              </motion.div>
            </div>

            <Link href="/research" className="inline-flex items-center gap-1 mt-6 text-sm text-accent hover:underline font-medium">
              Explore my research →
            </Link>
          </motion.div>
        </section>

        {/* ==================== NEWS ==================== */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-serif text-2xl font-semibold mb-4 pb-2 border-b border-border">News</h2>
            <ul className="space-y-3">
              {news.map((item, i) => {
                const Icon = newsIcons[item.type] || Newspaper;
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.05 }}
                    className={`flex gap-4 text-sm p-3 rounded-lg transition-colors ${
                      item.highlight
                        ? 'bg-accent/5 border border-accent/20'
                        : 'hover:bg-muted/50'
                    }`}
                  >
                    <Icon className={`h-4 w-4 flex-shrink-0 mt-0.5 ${item.highlight ? 'text-accent' : 'text-muted-foreground'}`} />
                    <span className="text-muted-foreground w-20 flex-shrink-0 font-medium">{item.date}</span>
                    <span className={item.highlight ? 'text-foreground font-medium' : ''}>{item.text}</span>
                  </motion.li>
                );
              })}
            </ul>
            <Link href="/journey" className="inline-flex items-center gap-1 mt-4 text-sm text-accent hover:underline font-medium">
              Full timeline →
            </Link>
          </motion.div>
        </section>

        {/* ==================== SELECTED PUBLICATIONS ==================== */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h2 className="font-serif text-2xl font-semibold mb-4 pb-2 border-b border-border">Selected Publications</h2>
            <div className="space-y-4">
              {publications.map((pub) => {
                const isExpanded = expandedPub === pub.title;
                const venueColor = venueColors[pub.venue] || "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20";

                return (
                  <motion.div
                    key={pub.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group p-4 rounded-xl border border-border hover:border-accent/30 hover:shadow-md transition-all bg-card"
                  >
                    {/* Venue Badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${venueColor}`}>
                        {pub.venue}
                      </span>
                      <span className="text-xs text-muted-foreground">{pub.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-1"
                      >
                        {pub.title}
                        <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </h3>

                    {/* Authors */}
                    <p className="text-sm text-muted-foreground mb-3">
                      {pub.authors.map((author, i) => (
                        <span key={author}>
                          <span className={author.toLowerCase().includes("mohamed") && (author.toLowerCase().includes("dawoud") || author.toLowerCase().includes("moustafa")) ? "text-foreground font-medium" : ""}>
                            {author}
                          </span>
                          {i < pub.authors.length - 1 && ", "}
                        </span>
                      ))}
                    </p>

                    {/* Expandable Abstract */}
                    <button
                      onClick={() => setExpandedPub(isExpanded ? null : pub.title)}
                      className="flex items-center gap-1 text-xs text-accent hover:underline mb-2"
                    >
                      {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                      {isExpanded ? "Hide abstract" : "Show abstract"}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-muted-foreground mb-3 p-3 bg-muted/50 rounded-lg">
                            {pub.abstract}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {pub.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-xs bg-muted rounded text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <Link href="/publications" className="inline-flex items-center gap-1 mt-6 text-sm text-accent hover:underline font-medium">
              All publications →
            </Link>
          </motion.div>
        </section>

        {/* ==================== AFFILIATIONS TIMELINE ==================== */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="font-serif text-2xl font-semibold mb-6 pb-2 border-b border-border">Academic Journey</h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-accent via-purple-500 to-muted" />

              <div className="space-y-0">
                {affiliations.map((aff, i) => (
                  <motion.div
                    key={aff.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + i * 0.08 }}
                    className="relative flex gap-4 pb-6 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className={`relative z-10 flex-shrink-0 w-4 h-4 rounded-full border-2 mt-1 ${
                      aff.current
                        ? 'bg-accent border-accent shadow-[0_0_8px_rgba(99,102,241,0.5)]'
                        : 'bg-background border-muted-foreground/40'
                    }`}>
                      {aff.current && (
                        <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
                      )}
                    </div>

                    {/* Content */}
                    <div className={`flex-1 -mt-0.5 pb-4 ${i !== affiliations.length - 1 ? 'border-b border-border/50' : ''}`}>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                        <h3 className={`font-medium ${aff.current ? 'text-accent' : ''}`}>{aff.name}</h3>
                        <span className="text-xs text-muted-foreground">{aff.period}</span>
                        {aff.current && (
                          <span className="px-1.5 py-0.5 text-[10px] font-medium rounded bg-accent/10 text-accent">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{aff.role}</p>
                      {aff.location && (
                        <p className="text-xs text-muted-foreground/70 mt-1 flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {aff.location}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ==================== CONTACT FOOTER ==================== */}
        <section className="pt-8 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-center"
          >
            <h2 className="font-serif text-xl font-semibold mb-3">Let&apos;s Connect</h2>
            <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
              Interested in collaborating or discussing research? I&apos;m always happy to connect with fellow researchers and practitioners in security and privacy.
            </p>
            <div className="flex justify-center gap-3">
              <motion.a
                href={`mailto:${siteConfig.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/journey"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  Read My Story
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
