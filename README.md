# Mohamed Dawoud - Academic Portfolio

A modern academic portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Fonts**: Geist Sans, Playfair Display (serif)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

This generates a static export in the `out` folder.

## Deployment to GitHub Pages

1. Push this repository to GitHub
2. Go to Settings > Pages
3. Set Source to "GitHub Actions"
4. Create `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── cv/                # CV page
│   ├── journey/           # My Journey page
│   ├── publications/      # Publications page
│   ├── research/          # Research page
│   └── teaching/          # Teaching page
├── components/
│   ├── layout/            # Navigation, Footer
│   ├── sections/          # Page content components
│   ├── ui/                # shadcn/ui components
│   └── animations/        # Animation components
├── data/                  # Site configuration
└── lib/                   # Utilities
```

## Customization

- **Site config**: Edit `src/data/site-config.ts` for personal information
- **Content**: Edit components in `src/components/sections/`
- **Styling**: Modify `src/app/globals.css` for theme colors
- **Profile photo**: Replace `public/profile.jpg`

## License

MIT
