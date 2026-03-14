// Keep this in sync with content/blog/*.mdx

export interface BlogIndexEntry {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export const blogIndex: BlogIndexEntry[] = [
  {
    slug: "fiverr-deepfakes-blog",
    title: "AI-Generated NSFW Services Are Entering Mainstream Marketplaces",
    date: "2026-02-23",
    description: "A summary of our RANDLab blog post on how AI-enabled NSFW deepfake services have quietly moved into Fiverr, a platform with 3.5 million active buyers.",
    tags: ["Research", "Deepfakes", "AI"],
  },
  {
    slug: "ndss-2026-experience",
    title: "My First Research Talk at USEC / NDSS 2026",
    date: "2026-02-27",
    description: "Reflections on delivering my first research talk at USEC 2026, presenting our work on AI-enabled NSFW deepfakes hiding in plain sight on Fiverr.",
    tags: ["Conference", "Research", "Deepfakes"],
  },
  {
    slug: "egyptians-in-cs-research",
    title: "Egyptian Researchers in Computer Science",
    date: "2026-01-19",
    description: "Someone did it. So can you. On building a directory of 262 Egyptian CS researchers — and why visibility matters for non-traditional paths into research.",
    tags: ["Community", "Personal"],
  },
  {
    slug: "paperclerk-ai",
    title: "PaperClerk AI: Taming the PDF Graveyard",
    date: "2025-12-15",
    description: "I built a lightweight, local, AI-powered assistant to finally keep my research paper library under control.",
    tags: ["Tools", "AI", "Productivity"],
  },
  {
    slug: "on-intensity-and-the-phd",
    title: "On Intensity and the PhD",
    date: "2025-11-15",
    description: "Why I believe in bringing everything you've got to the PhD journey — and why settling for mediocrity is harder than aiming high.",
    tags: ["PhD", "Personal"],
  },
  {
    slug: "from-zefta-to-research",
    title: "From Zefta to Research: On Language, Transitions, and Finding Your Path",
    date: "2025-11-01",
    description: "Reflections on growing up in a small Egyptian village, studying in Arabic, and navigating the transition to doing a PhD in the U.S.",
    tags: ["Personal", "Advice"],
  },
  {
    slug: "phd-application-advice",
    title: "Paying It Forward: PhD Application Mentoring",
    date: "2025-10-20",
    description: "Why I offer personalized feedback to PhD applicants, and reflections on what made the difference in my own application journey.",
    tags: ["PhD", "Advice", "Personal"],
  },
];
