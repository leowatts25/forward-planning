import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/content";

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Forward Planning`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/blog"
        className="text-sm font-medium text-primary hover:underline"
      >
        ← Back to blog
      </Link>

      <p className="mt-6 text-xs font-medium uppercase tracking-wide text-secondary">
        {formatDate(post.date)} · {post.author}
      </p>
      <h1 className="mt-2 font-serif text-4xl font-semibold text-primary">
        {post.title}
      </h1>

      <div className="mt-8 space-y-5">
        {post.body.map((paragraph, index) => (
          <p key={index} className="text-base leading-7 text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      {post.externalSource && (
        <a
          href={post.externalSource.url}
          className="mt-8 inline-block text-sm font-medium text-primary hover:underline"
        >
          {post.externalSource.label} →
        </a>
      )}
    </article>
  );
}
