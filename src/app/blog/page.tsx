import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | Forward Planning",
  description: "Notes on social entrepreneurship, community development, and reinvention from Forward Planning.",
};

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
        Blog
      </p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-primary">
        Notes on reinvention & community impact
      </h1>

      <div className="mt-14 divide-y divide-border border-t border-border">
        {blogPosts.map((post) => (
          <article key={post.slug} className="py-8">
            <p className="text-xs font-medium uppercase tracking-wide text-secondary">
              {formatDate(post.date)} · {post.author}
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-primary">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
