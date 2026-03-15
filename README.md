# Academic Portfolio Template

[![Next.js](https://img.shields.io/badge/Next.js_16-000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-0ea5e9?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deploy](https://img.shields.io/badge/GitHub_Pages-ready-success)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A clean, fast, and fully static academic portfolio for researchers and PhD students. One config file drives the entire site. Push to `main` and it deploys.

**Live:** [momodawoud.github.io](https://momodawoud.github.io)

Built by [Mohamed Moustafa Dawoud](https://momodawoud.github.io) and [Claude Code](https://claude.ai/claude-code).

---

## Why This Template

Most academic websites are either clunky WordPress sites or bare-bones HTML pages. This template sits in between: polished design, instant load times (fully static, no server), and minutes to customize.

- **One config file** gets you 80% there — name, bio, links, university, everything
- **No backend** — pure static HTML/CSS/JS deployed free on GitHub Pages
- **Accessible** — keyboard navigation, screen reader support, skip links, semantic HTML
- **Print-ready CV** — renders cleanly in print with a downloadable PDF option

## Features

| Category | Details |
|----------|---------|
| **Pages** | Home, Publications, CV, Teaching, Service, Recognition, Blog, Journey, News |
| **Blog** | MDX with syntax highlighting (Shiki), reading time, tag filtering |
| **Publications** | Thumbnails, venue badges, author highlighting, PDF/DOI/code links |
| **CV** | Education, experience with bullet points, talks, service, ongoing projects, PDF download |
| **Search** | Full-text fuzzy search (Cmd/Ctrl+K) across all pages and blog posts |
| **Theming** | Dark/light mode with smooth circular wipe transition, fully driven by CSS variables |
| **SEO** | Open Graph, JSON-LD structured data (Person + ScholarlyArticle), sitemap, robots.txt, canonical URLs |
| **Animations** | Scroll-triggered fade-ins, magnetic hover, 3D tilt cards, cursor glow, confetti easter egg |
| **Performance** | Static export, optimized fonts (Inter + Geist Mono + Source Serif), zero client-side data fetching |
| **Deploy** | GitHub Actions workflow included — push to `main` and it's live |

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js 16](https://nextjs.org/) | Framework (App Router, static export) |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark/light mode |
| [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) | Blog rendering |
| [Shiki](https://shiki.style/) | Syntax highlighting |
| [Fuse.js](https://www.fusejs.io/) | Fuzzy search |
| [Lucide](https://lucide.dev/) | Icons |

## Quick Start

### 1. Fork or clone

Click **"Use this template"** on GitHub, or:

```bash
git clone https://github.com/MoMoDawoud/momodawoud.github.io.git my-site
cd my-site
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

### 2. Edit the config

Everything starts in **`src/data/site-config.ts`**:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  university: "Your University",
  email: "you@university.edu",
  advisor: {
    name: "Prof. Advisor Name",
    url: "https://advisor-website.com",
  },
  social: {
    github: "https://github.com/yourusername",
    googleScholar: "https://scholar.google.com/...",
    linkedin: "https://linkedin.com/in/...",
  },
  bio: {
    short: "Your one-liner bio.",
    intro: "Your detailed bio...",
  },
};
```

### 3. Update content

| What | File |
|------|------|
| Bio & homepage | `src/components/sections/home-content.tsx` |
| Publications | `src/data/publications.ts` |
| CV | `src/app/cv/cv-content.tsx` |
| Journey timeline | `src/app/journey/journey-content.tsx` |
| Teaching | `src/app/teaching/teaching-content.tsx` |
| Service & outreach | `src/app/service/service-content.tsx` |
| Recognition | `src/app/recognition/recognition-content.tsx` |
| News feed | `src/app/news/news-content.tsx` |
| Profile photo | Replace `public/profile_pic.jpeg` |
| OG image | Replace `public/og-card.png` (1200x630) |
| CV PDF | Replace `public/cv.pdf` |
| Theme colors | `src/app/globals.css` (`:root` and `.dark` blocks) |

### 4. Write blog posts

Create a `.mdx` file in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2026-01-15"
description: "A brief summary."
tags: ["Research", "AI"]
---

Your content here. Supports **bold**, *italic*, [links](https://example.com),
code blocks, images, and any JSX components.
```

Then add a matching entry in `src/data/blog-index.ts`.

### 5. Deploy

1. Create a GitHub repo named `yourusername.github.io`
2. Push to `main`
3. Go to **Settings → Pages → Source → GitHub Actions**
4. Your site is live at `https://yourusername.github.io`

The included workflow (`.github/workflows/deploy.yml`) handles building and deploying on every push.

## Project Structure

```
src/
├── app/                        # Pages (each has page.tsx + content component)
│   ├── blog/                   # Blog list + dynamic [slug] routes
│   ├── cv/                     # Curriculum Vitae with PDF download
│   ├── journey/                # Academic timeline
│   ├── news/                   # News archive with mood labels
│   ├── publications/           # Papers with thumbnails & links
│   ├── recognition/            # Awards & honors
│   ├── service/                # Service & outreach
│   ├── teaching/               # Teaching experience
│   ├── globals.css             # Theme colors & typography
│   ├── layout.tsx              # Root layout (nav, footer, providers)
│   ├── sitemap.ts              # Auto-generated sitemap
│   └── page.tsx                # Homepage
├── components/
│   ├── animations/             # Fade-in, stagger effects
│   ├── interactive/            # Magnetic hover, tilt cards, cursor glow, confetti
│   ├── layout/                 # Navigation (desktop + mobile), footer
│   ├── sections/               # Homepage content sections
│   ├── global-search.tsx       # Cmd+K fuzzy search modal
│   ├── scroll-progress.tsx     # Reading progress bar
│   ├── back-to-top.tsx         # Scroll-to-top button
│   ├── structured-data.tsx     # JSON-LD (Person, ScholarlyArticle)
│   └── ui/                     # Button, shared primitives
├── data/                       # Site config, publications, blog index
├── lib/                        # Blog parser, utilities
content/
└── blog/                       # MDX blog posts
public/
├── publications/               # Paper thumbnails & PDFs
├── cv.pdf                      # Downloadable CV
├── og-card.png                 # Open Graph image (1200x630)
├── robots.txt                  # Search engine directives
└── profile_pic.jpeg            # Profile photo
```

## Customization

### Colors

All colors are CSS custom properties in `src/app/globals.css`. The template uses a four-level text hierarchy for visual depth. Edit `:root` for light mode and `.dark` for dark mode:

```css
:root {
  --background: #FFFFFF;
  --foreground: #000000;          /* Primary text */
  --foreground-secondary: #0F172A; /* Subheadings, body */
  --foreground-tertiary: #334155;  /* Supporting text */
  --foreground-quaternary: #475569;/* Captions, dates */
  --accent: #115E59;               /* Links, highlights */
  --border: #E2E8F0;
}

.dark {
  --background: #0B0F1A;
  --foreground: #E2E8F0;
  --accent: #5EEAD4;
}
```

### Fonts

Three font families loaded via `next/font/google` in `src/app/layout.tsx`:

| Variable | Font | Usage |
|----------|------|-------|
| `--font-inter` | Inter | Body text (sans-serif) |
| `--font-geist-mono` | Geist Mono | Code, labels, dates |
| `--font-serif` | Source Serif 4 | Section headings |

### Adding a page

1. Create `src/app/your-page/page.tsx` (metadata export)
2. Create `src/app/your-page/your-page-content.tsx` (client component)
3. Add it to `navItems` in `src/components/layout/navigation.tsx`

### Navigation

Edit the `navItems` array in `src/components/layout/navigation.tsx`:

```typescript
const navItems = [
  { name: "Home", href: "/" },
  { name: "Publications", href: "/publications" },
  { name: "CV", href: "/cv" },
  // Add or remove pages here
];
```

### News mood labels

The homepage news feed supports colored mood indicators:

```typescript
const news = [
  { date: "Mar 2026", text: "Paper accepted at CHI", mood: "good" },    // green dot
  { date: "Feb 2026", text: "Paper rejected from IMC", mood: "bad" },   // red dot
  { date: "Jan 2026", text: "Started new collaboration" },               // neutral gray dot
];
```

## Contributing

Contributions welcome. Open an issue or submit a PR.

If you use this template, a link back is appreciated but not required.

## Authors

- [Mohamed Moustafa Dawoud](https://momodawoud.github.io)
- [Claude Code](https://claude.ai/claude-code) by Anthropic

## License

[MIT](LICENSE) — use it freely for your own academic website.
