import Link from "next/link";
import { portfolio, services, siteConfig } from "@/lib/content";

const credentials = [
  { stat: "30+", label: "years in executive & technology consulting" },
  { stat: "3", label: "active community & economic development ventures" },
  { stat: "Ph.D.", label: "Public Affairs, University of Texas at Dallas" },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            Strategic consulting for entrepreneurs & nonprofits
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Whether you&apos;re launching a business, scaling an organization, or
            navigating a crossroads — Forward Planning gives you the strategy,
            tools, and expertise to move forward with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              See how we help
            </Link>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3">
          {credentials.map((item) => (
            <div key={item.label}>
              <dt className="font-serif text-3xl font-semibold text-primary">
                {item.stat}
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">{item.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-2xl font-semibold text-primary sm:text-3xl">
            Ways we work together
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Every entrepreneur, organization, and mission is at a different
            stage. Whether you&apos;re exploring an idea or scaling impact, we
            offer hands-on support tailored to where you are.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.slug}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-accent">
                  Best for: {service.bestFor}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/services"
            className="mt-8 inline-block text-sm font-medium text-primary hover:underline"
          >
            View all services →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-2xl font-semibold text-primary sm:text-3xl">
          Work in the community
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Beyond advising, we build. A look at ventures we&apos;ve helped launch
          and grow.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {portfolio.map((item) => (
            <div key={item.slug} className="rounded-2xl border border-border p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-accent">
                {item.category}
              </p>
              <h3 className="mt-2 font-serif text-lg font-semibold text-primary">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.summary}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/portfolio"
          className="mt-8 inline-block text-sm font-medium text-primary hover:underline"
        >
          View full portfolio →
        </Link>
      </section>

      <section className="bg-primary py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-serif text-2xl font-semibold text-primary-foreground">
            Ready to move forward?
          </h2>
          <Link
            href="/contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
