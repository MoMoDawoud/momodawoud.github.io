import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  h4: (props) => <h4 {...props} />,
  p: (props) => <p {...props} />,
  // Only external links get a new tab; in-site links stayed on the page and
  // spawned a tab regardless.
  a: ({ href, ...props }) => {
    const external = typeof href === "string" && /^https?:\/\//.test(href);
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    ) : (
      <a href={href} {...props} />
    );
  },
  blockquote: (props) => <blockquote {...props} />,
  ul: (props) => <ul {...props} />,
  ol: (props) => <ol {...props} />,
  li: (props) => <li {...props} />,
  code: (props) => <code {...props} />,
  pre: (props) => <pre {...props} />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={props.alt ?? "Image"} {...props} />
  ),
};
