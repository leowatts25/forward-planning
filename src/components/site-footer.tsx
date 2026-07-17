import Link from "next/link";
import { navLinks, portfolio, siteConfig, team } from "@/lib/content";

const photoCredits = Array.from(
  new Set([
    siteConfig.heroImageCredit,
    siteConfig.teamBannerImageCredit,
    ...portfolio.map((item) => item.imageCredit),
    ...team.filter((member) => member.photoCredit).map((member) => member.photoCredit as string),
  ])
);

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:justify-between">
        <div className="max-w-sm">
          <p className="font-serif text-lg font-semibold text-primary">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
            {siteConfig.email}
          </a>
          <div className="mt-2 flex gap-4">
            <a href={siteConfig.facebook} className="hover:text-primary">
              Facebook
            </a>
            <a href={siteConfig.linkedin} className="hover:text-primary">
              LinkedIn
            </a>
            <a href={siteConfig.podcast} className="hover:text-primary">
              Podcast
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name} LLC. All rights reserved.
        <span className="mt-1 block">
          Photos: {photoCredits.join(" · ")}
        </span>
      </div>
    </footer>
  );
}
