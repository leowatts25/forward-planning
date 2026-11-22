"use client";

import Script from "next/script";

export function CalendlyEmbed({ url }: { url: string }) {
  if (!url) {
    return (
      <div className="rounded-2xl border border-border p-8 text-center">
        <p className="text-sm font-medium text-foreground">
          Book a free consultation
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Scheduling link coming soon — in the meantime, reach out by email.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
