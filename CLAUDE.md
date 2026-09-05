# CLAUDE.md — Portfolio site for WRIT 107C

## What this is

A freelance portfolio website for a UCSB student in WRIT 107C. Built with
Next.js (App Router, JavaScript, plain CSS, no Tailwind), deployed on
Vercel. All pages are static. The site targets small business
owner-operators first and recruiters second. It was scaffolded in a
Claude.ai session; this file carries that context.

## Immediate task: deploy and return the live URL

1. Run `npm install`, then `npm run build` to confirm the project builds
   (it built clean when scaffolded: 11 static routes).
2. Initialize git, commit everything, and create a GitHub repo named
   `portfolio-site` under the user's account (use `gh repo create
   portfolio-site --source=. --push` if the gh CLI is authenticated,
   otherwise plain git with a remote the user provides).
3. Deploy to Vercel production. Prefer connecting the GitHub repo through
   Vercel so pushes auto-deploy; `vercel --prod` from the CLI is also
   fine for tonight.
4. Print the live production URL clearly at the end. The user must paste
   it into a course discussion post due tonight.

Do not wait to fill placeholders before deploying. Work in progress is
the expected state. Deploy first, edit after.

## Placeholders the user fills later

- `lib/site.js` is the single config file: name, email, booking URL, the
  Syrex GMV figure, and location. Bracketed values render on the live
  site until replaced.
- `.todo` blocks (gold left-border boxes) sit in `app/work/syrex/`,
  `app/about/`, and both pages under `app/writing/`. The user will paste
  real content there, including two full MLA papers into the writing
  pages.
- Never invent values for these. No fabricated metrics, client names, or
  biography. Ask the user or leave the placeholder.

## Voice rules for any copy you write or edit

The site follows a course voice chart with three principles:

- **Plain**: short sentences, no hype, no jargon. Say what a thing is.
- **Proof-first**: evidence leads. The Syrex GMV figure opens the home
  page and its case study. Headlines state the metric and stop.
- **Inviting**: name the next step without pressure. The one CTA is
  "Book a call" and that exact label never changes anywhere (button
  matches page title, per Podmajersky's title-button symmetry).

Hard constraints from the course's "Stop Slop" audit, applied to all
site copy:

- No em dashes. Use commas, periods, or parentheses.
- No -ly adverbs, softeners, or intensifiers.
- No three-item rhythm lists in prose. Use two items or restructure.
- Active voice. Sentence case everywhere, including headings and
  buttons.
- No lazy extremes (every, always, never) as false authority.

## Design system (do not drift)

Tokens live in `app/globals.css`. The palette encodes the project's site
map: gold (`--gold`) marks identity and wayfinding (the Home hub, the
logomark disc, current nav section), and green (`--green`) is reserved
for exactly one job, the booking action. Do not add accent colors, do
not use green for anything except "Book a call", and do not add motion
beyond the existing hover transitions. Serif (`Source Serif 4` via
Google Fonts link in `app/layout.jsx`) carries headings and body; system
sans is for nav, buttons, and meta text only.

## Structure

- `/` home: hero with GMV proof sentence, services, proof list, writing
  list, closing CTA
- `/work` index, `/work/syrex` (the lead case study, proof-first
  structure), `/work/client-websites` (honest in-progress stub)
- `/services`, `/writing` plus two paper pages, `/about`, `/contact`
- `app/not-found.jsx` gives direction in site voice, no apology
- `components/SiteNav.jsx` is a client component using `usePathname` for
  the gold current-section state

## Boundaries

- Keep the site static. No databases, no localStorage, no new
  dependencies without asking.
- Do not restructure pages or rename routes; the layout mirrors a graded
  site map document.
- Small, reviewable changes. The user iterates in rounds of feedback.
