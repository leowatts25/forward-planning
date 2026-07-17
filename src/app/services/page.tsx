import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";
import { ServiceIcon } from "@/components/service-icon";

export const metadata: Metadata = {
  title: "How We Help | Forward Planning",
  description:
    "Strategic advisory, entrepreneur mentorship, impact measurement, and situational assessment for entrepreneurs and nonprofits.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
        How We Help
      </p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-primary">
        Ways we work together
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        Every entrepreneur, organization, and mission is at a different
        stage. Whether you&apos;re exploring an idea or scaling impact, we
        offer hands-on support tailored to where you are.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.slug}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <div className="p-8">
              <ServiceIcon name={service.icon} />
              <h2 className="mt-5 font-serif text-xl font-semibold text-primary">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {service.description}
              </p>
              <dl className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Format:</dt>
                  <dd className="text-muted-foreground">{service.format}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Best for:</dt>
                  <dd className="text-muted-foreground">{service.bestFor}</dd>
                </div>
              </dl>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-muted p-8 text-center sm:p-12">
        <h2 className="font-serif text-2xl font-semibold text-primary">
          Not sure where to start?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Book a free consultation and we&apos;ll help you figure out the
          right fit.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Book a Free Consultation
        </Link>
      </div>
    </div>
  );
}
