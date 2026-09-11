import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { mdxComponents } from "@/components/mdx-components";
import { formatPostDate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/blog/${slug}`,
      siteName: "Mohamed Moustafa Dawoud",
      locale: "en_US",
      publishedTime: new Date(`${post.date}T00:00:00Z`).toISOString(),
      authors: ["Mohamed Moustafa Dawoud"],
      images: [
        { url: "/og-card.png", width: 1200, height: 630, alt: post.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-card.png"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [rehypePrettyCode, { theme: "github-dark-dimmed", keepBackground: false }],
        ],
      },
    },
  });

  const formattedDate = formatPostDate(post.date);

  // getAllPosts() is date-sorted, so neighbours are simply adjacent.
  const all = getAllPosts();
  const i = all.findIndex((x) => x.slug === slug);
  const newer = i > 0 ? all[i - 1] : null;
  const older = i >= 0 && i < all.length - 1 ? all[i + 1] : null;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-foreground-tertiary hover:text-foreground transition-colors duration-150 mb-8"
        >
          <span aria-hidden>&larr;</span> Back to blog
        </Link>

        {/* Post header */}
        <header className="mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="font-mono text-xs text-foreground-quaternary tabular-nums">
              {formattedDate}
            </span>
            <span className="text-foreground-quaternary">·</span>
            <span className="font-mono text-xs text-foreground-quaternary">
              {post.readingTime} min read
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[0.65rem] font-mono text-foreground-quaternary bg-muted px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Post content */}
        <article className="prose">{content}</article>

        {/* Keep reading — every post used to dead-end here. */}
        <nav
          className="mt-16 pt-8 border-t border-border grid gap-4 sm:grid-cols-2"
          aria-label="More posts"
        >
          {older ? (
            <Link
              href={`/blog/${older.slug}`}
              className="group block p-4 rounded-lg border border-border hover:border-accent/30 hover:bg-accent-subtle transition-colors duration-150"
            >
              <span className="font-mono text-[0.65rem] uppercase tracking-wider text-foreground-quaternary">
                Older
              </span>
              <span className="block text-sm font-medium mt-1 group-hover:text-accent transition-colors duration-150">
                {older.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {newer && (
            <Link
              href={`/blog/${newer.slug}`}
              className="group block p-4 rounded-lg border border-border hover:border-accent/30 hover:bg-accent-subtle transition-colors duration-150 sm:text-right"
            >
              <span className="font-mono text-[0.65rem] uppercase tracking-wider text-foreground-quaternary">
                Newer
              </span>
              <span className="block text-sm font-medium mt-1 group-hover:text-accent transition-colors duration-150">
                {newer.title}
              </span>
            </Link>
          )}
        </nav>

        <p className="mt-10 text-sm text-foreground-tertiary">
          Applying to PhD programs, or thinking about it?{" "}
          <Link href="/service#mentorship" className="link-accent">
            I mentor a cohort each cycle
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
