# CLAUDE.md — Portfolio site for WRIT 107C

## What this is

A freelance portfolio website for a UCSB student in WRIT 107C. Built with
Next.js (App Router, JavaScript, plain CSS, no Tailwind), deployed on
Vercel. All pages are static. The site targets small business
owner-operators first and recruiters second.

## Deployment

- Live: https://portfolio-site-two-sand-64.vercel.app
- GitHub: https://github.com/alexandergadulshin/portfolio-site (branch `main`)
- The Vercel project `portfolio-site` is connected to the repo. Every
  push to `main` deploys to production on its own. `vercel --prod` from
  the CLI also works.
- Run `npm run build` before pushing. The build must stay fully static.

## Placeholders the user fills later

- `lib/site.js` is the single config file: name, email, booking URL, the
  Syrex GMV figure, location, and the public URL. Bracketed values render
  on the live site until replaced.
- `.todo` blocks (cream boxes with a coral left border) sit in
  `app/work/syrex/`, `app/about/`, and `app/contact/`. The user will
  paste real content there.
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

## Design system

The look is the "Alpha" template by HTML5 UP (https://html5up.net/alpha,
CC BY 3.0). The user chose it on 2026-09-06 after rejecting the earlier
dark design as "black and empty and heartless". Keep the footer credit
"Design: HTML5 UP"; the license requires it.

- `app/vendor/alpha.css` is the template stylesheet, edited only to drop
  its two `@import` lines and localize asset paths. Do not restyle inside
  it. Overrides and additions go in `app/globals.css`.
- `app/vendor/fontawesome.css` and `app/vendor/webfonts/` supply the
  icons (Font Awesome Free 5.15.4). An icon circle is
  `<span className="icon solid major fa-NAME accentN">`.
- Palette is the template's: cream ground `#f5f5f5`, white boxes, body
  text `#777`, headings `#646464`, coral `#e89980` for links, primary
  buttons, and the CTA band. Icon circles use accent2 coral, accent3 mint
  `#7fcdb8`, accent4 steel `#90b0ba`, accent5 sand `#e5cb95`. Do not add
  colors.
- Typeface is Source Sans 3 via the Google Fonts link in
  `app/layout.jsx`, weights 300, 400, and 600.
- Building blocks: `#banner` (home hero over the warm photo), `.box` and
  `.box.special` (white cards), `.box.features` with `.features-row`
  (2x2 icon grid), `.row` with `.col-6.col-12-narrower` (two cards side
  by side), `#cta` (coral band), `#footer`. `.cover` panels, defined in
  `globals.css`, stand in wherever the template expects a photo.
- "Book a call" is `.button.primary` (coral) in content. In the header
  and the CTA band it is plain `.button`, which the template styles for
  those two contexts. The label never changes.
- `components/SiteHeader.jsx` renders the template's `#header`, with the
  transparent `.alt` state on the home page. `components/MobileNav.jsx`
  replaces the template's jQuery panel below 840px by toggling
  `navPanel-visible` on `body`. Nav links live in `lib/nav.js`.
- The home page sets `.landing-banner` and `.landing-main` itself, since
  the template's `body.landing` hook is not available per page.
- No motion beyond the template's own transitions.

## Structure

- `/` home: banner with the GMV proof sentence, proof headline card, 2x2
  services grid, two case-study cards, coral CTA band
- `/work` index, `/work/syrex` (the lead case study, proof-first
  structure), `/work/client-websites` (honest in-progress stub)
- `/services`, `/about`, `/contact`
- `app/not-found.jsx` gives direction in site voice, no apology
- The Writing section and its two paper pages were removed on 2026-09-06
  at the user's request.

## Boundaries

- Keep the site static. No databases, no localStorage, no new
  dependencies without asking.
- Do not rename routes.
- Small, reviewable changes. The user iterates in rounds of feedback.
