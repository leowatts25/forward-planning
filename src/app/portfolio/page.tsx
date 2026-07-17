import type { Metadata } from "next";
import Image from "next/image";
import { portfolio } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio | Forward Planning",
  description:
    "Ventures we've helped launch and grow, including Restorative Farms, Hatcher Station Community Garden Training Farm, The Hatchery, and the SMU Impact Lab.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
        Portfolio
      </p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-primary">
        Work in the community
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        Beyond advising, we build. Here are ventures we&apos;ve helped launch
        and grow in Dallas and beyond.
      </p>

      <div className="mt-14 space-y-10">
        {portfolio.map((item, index) => (
          <article
            key={item.slug}
            className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border sm:grid-cols-2"
          >
            <div
              className={`relative h-64 w-full sm:h-full ${
                index % 2 === 1 ? "sm:order-2" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-wide text-secondary">
                {item.category}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-primary">
                {item.name}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {item.summary}
              </p>
              <ul className="mt-6 space-y-2 border-t border-border pt-6">
                {item.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
