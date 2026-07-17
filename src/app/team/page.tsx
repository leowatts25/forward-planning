import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team | Forward Planning",
  description:
    "Meet the Forward Planning team: Dr. Doric Earle, Dr. Owen Lynch, Leo Watts, and Aidan Earle.",
};

export default function TeamPage() {
  return (
    <div>
      <div className="relative h-56 w-full sm:h-72">
        <Image
          src={siteConfig.teamBannerImage}
          alt={siteConfig.teamBannerImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Team
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-primary-foreground">
            Who we are
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-12">
          {team.map((member) => (
            <article
              key={member.slug}
              className="grid grid-cols-1 gap-6 border-t border-border pt-10 sm:grid-cols-[200px_1fr]"
            >
              <div>
                <div className="aspect-square w-full rounded-2xl bg-muted" />
                <h2 className="mt-4 font-serif text-lg font-semibold text-primary">
                  {member.name}
                </h2>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
              <div>
                <p className="text-base leading-7 text-muted-foreground">
                  {member.bio}
                </p>
                {member.credentials && (
                  <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                    {member.credentials.map((credential) => (
                      <li key={credential}>{credential}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
