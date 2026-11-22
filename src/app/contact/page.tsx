import type { Metadata } from "next";
import { getSiteSettings } from "@/sanity/lib/data";
import { CalendlyEmbed } from "@/components/calendly-embed";

export const metadata: Metadata = {
  title: "Contact | Forward Planning",
  description: "Get in touch with Forward Planning to book a free consultation.",
};

export const revalidate = 60;

export default async function ContactPage() {
  const settings = await getSiteSettings();

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
          href={`mailto:${settings.email}`}
          className="text-muted-foreground hover:text-primary"
        >
          {settings.email}
        </a>
      </div>

      <div className="mt-10">
        <CalendlyEmbed url={settings.calendlyUrl} />
      </div>
    </div>
  );
}
