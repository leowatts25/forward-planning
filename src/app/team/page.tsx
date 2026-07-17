import type { Metadata } from "next";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team | Forward Planning",
  description:
    "Meet the Forward Planning team: Dr. Doric Earle, Leo Watts, and Aidan Earle.",
};

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
        Team
      </p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-primary">
        Who we are
      </h1>

      <div className="mt-14 space-y-12">
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
  );
}
