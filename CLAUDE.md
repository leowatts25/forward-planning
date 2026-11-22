# Forward Planning website

Marketing site for Forward Planning LLC (forwardplanning.org), a consulting firm run by Dr. Doric Earle. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS 4. Hosted on Vercel. Content is managed in Sanity.

## Rules (read these first)

1. **Never push to `main`.** Always create a branch and open a pull request. Every push to `main` goes live on forwardplanning.org within about a minute. Vercel builds a preview link for each pull request, and Leo reviews and merges.
2. **Pull the latest `main` before starting any work**, so you are not editing an old copy.
3. **Keep each pull request small and about one thing.** Describe in plain English what changed and why.
4. **Ask before big changes** such as new pages, redesigns, new dependencies, or anything that touches hosting or accounts. Doric or Leo should confirm first.
5. **Do not commit secrets.** `.env*` files are gitignored on purpose.

## Where things live

Most editable text is **not in this repo**. It lives in Sanity (project `uhovvxal`, dataset `production`):

| Content | Where to change it |
|---|---|
| Team bios, photos, credentials | Sanity: "Team Member" |
| Blog posts | Sanity: "Blog Post" |
| Portfolio entries | Sanity: "Portfolio Item" |
| The four "How We Help" services | Sanity: "Service" |
| Contact email, Facebook/LinkedIn/podcast links, Calendly booking link | Sanity: "Site Settings" |

Editing those through code will not change the live site. Use Sanity (`https://forward-planning-consulting.sanity.studio/`) or the Sanity MCP connector. Edits are drafts until published.

What **is** in this repo:

- `src/lib/content.ts`: site name and tagline, hero/banner images, nav links, press logos, podcast teaser text
- `src/app/`: pages (home, services, portfolio, team, blog, contact)
- `src/components/`: header, footer, logo, service icons, Calendly embed
- `src/sanity/`: Sanity schemas, queries, and data-fetching helpers
- `public/images/`: static images

## Running it locally

```bash
cp .env.example .env.local   # required: the site will not build without these
npm install
npm run dev                  # http://localhost:3000
npm run build                # run this before opening a pull request
```

## Design

- Colors are tokens in `src/app/globals.css` (forest green primary, sage secondary, amber accent). Use the tokens, not raw hex values.
- Headings use Fraunces; body text uses Inter; the logo wordmark uses Playfair Display.
- Pages revalidate every 60 seconds, so Sanity edits appear on the site within about a minute of publishing.
- Photos from Wikimedia Commons are credited in the footer. If you add or swap an image, keep its credit accurate.

## Known open items

- Booking: the "Booking Link (Calendly)" field in Sanity Site Settings is empty until a Calendly account exists. The contact page shows a "coming soon" message until then.
- Testimonials: none yet.
- Restorative Farms and Hatcher Station photos are stand-in stock photos, not the real sites.
