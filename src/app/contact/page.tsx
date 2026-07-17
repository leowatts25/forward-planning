import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";
import { CalendlyEmbed } from "@/components/calendly-embed";

export const metadata: Metadata = {
  title: "Contact | Forward Planning",
  description: "Get in touch with Forward Planning to book a free consultation.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
        Contact
      </p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-primary">
        Let&apos;s start a conversation
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
        We work with clients in Dallas and beyond. Reach out directly or book
        a free consultation.
      </p>

      <div className="mt-12">
        <p className="text-sm font-medium text-foreground">Email</p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-muted-foreground hover:text-primary"
        >
          {siteConfig.email}
        </a>
      </div>

      <div className="mt-10">
        <CalendlyEmbed />
      </div>
    </div>
  );
}
