# Academic Portfolio Template

A modern, minimal academic portfolio website designed for researchers, PhD students, and academics. Built with Next.js, Tailwind CSS, and Framer Motion. Deploys to GitHub Pages with zero configuration.

**Live demo:** [momodawoud.github.io](https://momodawoud.github.io)

Created by [Mohamed Moustafa Dawoud](https://momodawoud.github.io) and [Claude](https://claude.ai) (Anthropic).

---

## Features

- **Single config file** — edit `src/data/site-config.ts` and the entire site updates: name, bio, links, research interests, everything
- **Blog with MDX** — write posts in Markdown with JSX support, syntax highlighting, and automatic reading time
- **Publications page** — list papers with thumbnails, venues, author highlighting, and PDF links
- **CV page** — education, experience, talks, service, and ongoing projects with print-friendly layout
- **Journey timeline** — visual chronological timeline of your academic path
- **News feed** — announcements and updates on the homepage
- **Dark / light mode** — with smooth circular wipe transition
- **Full-text search** — fuzzy search across all pages and blog posts
- **SEO ready** — Open Graph tags, structured data, sitemap, robots.txt
- **Responsive** — mobile-first design with slide-out navigation
- **Animations** — scroll-triggered fade-ins, magnetic hover effects, 3D tilt cards
- **Static export** — generates a fully static site, no server required
- **GitHub Pages deployment** — push to main and it's live

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js 16](https://nextjs.org/) | Framework (App Router, static export) |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark/light mode |
| [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) | Blog rendering |
| [shiki](https://shiki.style/) | Syntax highlighting |
| [Fuse.js](https://www.fusejs.io/) | Fuzzy search |
| [Lucide](https://lucide.dev/) | Icons |

## Quick Start

### 1. Use this template

Click **"Use this template"** on GitHub, or clone directly:

```bash
git clone https://github.com/MoMoDawoud/momodawoud.github.io.git my-academic-site
cd my-academic-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 2. Make it yours

Edit **one file** to start: `src/data/site-config.ts`

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
    // ...
  },
  bio: {
    short: "Your one-liner bio.",
    intro: "Your detailed bio...",
    // ...
  },
  researchInterests: ["Area 1", "Area 2", "Area 3"],
};
```

### 3. Update content

| What | Where |
|------|-------|
| **Bio & homepage** | `src/components/sections/home-content.tsx` |
| **Publications** | `src/data/publications.ts` |
| **CV** | `src/app/cv/cv-content.tsx` |
| **Journey timeline** | `src/app/journey/journey-content.tsx` |
| **Teaching** | `src/app/teaching/teaching-content.tsx` |
| **Service & outreach** | `src/app/service/service-content.tsx` |
| **Recognition** | `src/app/recognition/recognition-content.tsx` |
| **Profile photo** | Replace `public/profile_pic.jpeg` |
| **Theme colors** | `src/app/globals.css` (CSS variables in `:root` and `.dark`) |

### 4. Add blog posts

Create a `.mdx` file in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2026-01-15"
description: "A brief summary."
tags: ["Research", "AI"]
---

Your markdown content here. **Bold**, *italic*, [links](https://example.com), and code blocks all work.
```

Then add a matching entry in `src/data/blog-index.ts`.

### 5. Deploy to GitHub Pages

1. Create a repo named `yourusername.github.io`
2. Push your code to `main`
3. Go to **Settings > Pages > Source > GitHub Actions**
4. Done — the included workflow (`.github/workflows/deploy.yml`) handles the rest

Your site will be live at `https://yourusername.github.io`.

## Project Structure

```
src/
├── app/                        # Pages
│   ├── blog/                   # Blog (list + dynamic [slug])
│   ├── cv/                     # Curriculum Vitae
│   ├── journey/                # Timeline
│   ├── news/                   # News archive
│   ├── publications/           # Papers
│   ├── recognition/            # Awards & recognition
│   ├── service/                # Service & outreach
│   ├── teaching/               # Teaching
│   ├── globals.css             # Theme (colors, typography)
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage
├── components/
│   ├── animations/             # Fade-in, scroll effects
│   ├── interactive/            # Magnetic hover, tilt cards, cursor glow
│   ├── layout/                 # Navigation, footer
│   ├── sections/               # Homepage sections
│   └── ui/                     # Button, etc.
├── data/                       # Site config, publications, blog index
├── lib/                        # Blog parser, utilities
content/
└── blog/                       # MDX blog posts
public/
├── publications/               # Paper thumbnails + PDFs
└── ...                         # Profile photo, OG image, etc.
```

## Customization Guide

### Colors

All colors are CSS custom properties in `src/app/globals.css`. Change the `:root` block for light mode and `.dark` block for dark mode:

```css
:root {
  --background: #FFFFFF;
  --foreground: #1A1110;
  --accent: #E04108;        /* Your accent color */
  --border: #EDEBE9;
  /* ... */
}
```

### Adding pages

Each page follows the same pattern:

1. Create `src/app/your-page/page.tsx` (metadata + layout)
2. Create `src/app/your-page/your-page-content.tsx` (client component with content)
3. Add it to the nav in `src/components/layout/navigation.tsx`

### Navigation

Edit the `navItems` array in `src/components/layout/navigation.tsx`:

```typescript
const navItems = [
  { name: "Home", href: "/" },
  { name: "Publications", href: "/publications" },
  // Add or remove pages here
];
```

## Contributing

Contributions are welcome. If you use this template, a link back is appreciated but not required.

## Authors

- **Mohamed Moustafa Dawoud** — design, content, and direction ([momodawoud.github.io](https://momodawoud.github.io))
- **Claude** (Anthropic) — co-author and implementation ([claude.ai](https://claude.ai))

## License

MIT License. Use it freely for your own academic website.
