# CLAUDE.md — Portfolio site for WRIT 107C

## What this is

A freelance portfolio website for a UCSB student in WRIT 107C, deployed
on Vercel. All pages are static. The site targets small business
owner-operators first and recruiters second.

Since 2026-09-07 the site runs on the "Cunnet" Next.js template by
Theme_Pure (Aqlova), bought through the user's Envato Elements
subscription. The user picked its Modern Agency layout after rejecting
two earlier designs, and asked that no photo of their face appear on the
site. Keep both decisions.

## Deployment

- Live: https://portfolio-site-two-sand-64.vercel.app
- GitHub: https://github.com/alexandergadulshin/portfolio-site (branch `main`)
- The Vercel project `portfolio-site` is connected to the repo. Every
  push to `main` deploys to production on its own.
- Run `npm run build` before pushing. The build must stay fully static.
- `.npmrc` sets `legacy-peer-deps=true`; the template's dependency tree
  needs it. Keep it.

## Stack

- Next.js 16 App Router, React 19, TypeScript, Bootstrap 5, Sass, GSAP
  (ScrollSmoother, ScrollTrigger, SplitText), Framer Motion, Swiper.
  These come with the template. Do not add Tailwind or new UI libraries
  without asking.
- Source lives in `src/`. Routes are in `src/app/(site)/`; the shared
  page shell (providers, header, footer) is `src/components/layout/SiteShell.tsx`.
- Template styles: `src/app/globals.scss` forwards the template's CSS and
  SCSS from `public/assets/`. Site-specific overrides sit at the bottom of
  `globals.scss` under "Site additions". Put new styles there, not in the
  template's SCSS.
- Unused template components, data files, and images remain in
  `src/components`, `src/data`, and `public/assets` for future use.
  Deleting them is fine but not required.

## Placeholders the user fills later

- `src/config/site.ts` is the single config file: name, email, booking
  URL, the Syrex GMV figure, location, and the public URL. Bracketed
  values render on the live site until replaced.
- No `<Todo>` placeholders remain on the live site. The component in
  `src/components/site/Todo.tsx` stays for future drafts.
- Never invent values for these. No fabricated metrics, client names, or
  biography. Ask the user or leave the placeholder.

## Voice rules for any copy you write or edit

The site follows a course voice chart with three principles:

- **Plain**: short sentences, no hype, no jargon. Say what a thing is.
- **Proof-first**: evidence leads. The Syrex GMV figure opens the home
  page's proof band and the case study. Headlines state the metric and stop.
- **Inviting**: name the next step without pressure. The one CTA is
  "Book a call" and that exact label never changes anywhere.

Hard constraints from the course's "Stop Slop" audit, applied to all
site copy:

- No em dashes. Use commas, periods, or parentheses.
- No -ly adverbs, softeners, or intensifiers.
- No three-item rhythm lists in prose. Use two items or restructure.
- Active voice. Sentence case everywhere, including headings and
  buttons. The template capitalizes buttons and uppercases labels by
  default; `globals.scss` overrides that. The giant name wordmark on the
  home page keeps the template's uppercase treatment on purpose.
- No lazy extremes (every, always, never) as false authority.

## Design system

- Palette is the template's: white ground, near-black `#09090b`
  sections and buttons, and four accents used on tiles and step markers:
  red `#ff292b`, green `#88e74e`, blue `#176afd`, pink `#ef4687`. Do not
  add colors.
- Type: Sequel Sans (local webfonts in `public/assets/fonts`, classes
  `tp-ff-sequel-*`) for display, Inter for the hero title and buttons.
- Images: the template ships gray placeholder images only. Every visual
  the site uses is a generated tile in `public/assets/img/site/` (flat
  color, Sequel type, no people). The closing call to action uses the
  template's chrome 3D shapes from `public/assets/img/cta/`. Never add a
  photo of the user.
- Animations come from the template: `src/config/animationConfig.ts`
  maps routes to GSAP setups. Elements with `tp_fade_anim`,
  `tp-char-animation`, and `reveal-text` start hidden and animate in,
  so a headless screenshot taken at load will look empty. Verify with a
  real-time capture (DevTools protocol with a wait) or in a browser.
- The home wordmark renders `site.name` as two lines, first name and last
  name, sized from the viewport (`.site-wordmark` in `globals.scss`) so it
  never clips or breaks mid-word. It is not split into per-letter spans;
  that would lose the font's kerning.
- The closing call to action sits in `.site-cta-seat`, whose lower half is
  the footer color so the card's rounded bottom corners read as overlap.
- Header: text brand mark from `site.name`, an inline nav (Work, Services,
  About, Writing) from 1024px, a "Book a call" button, and below 1024px a
  menu button that opens the overlay panel with the four links, the red
  "Book a call" pill, and a contact block. Nav links live in
  `src/data/MenuRenderer/menu-light.ts`. The overlay locks page scroll
  and pauses ScrollSmoother while open. `SmartLink` leaves `mailto:` and other scheme links alone;
  use it or a plain `<a>` for email links, never a bare relative string.

## Structure

- `/` home: hero with tiles and the name wordmark, dark proof band with
  the GMV sentence, recent work cards, four project steps, two services,
  closing call to action
- `/work` index with four cards in this order: `/work/syrex` (the lead
  case study), `/work/product-radar` and `/work/video-bot` (added
  2026-09-11 from a brief with hard rules: no client names, no dollar
  figures, no model or vendor names, no product screenshots on those two
  pages), `/work/client-websites` (in-progress stub). The home page
  features Syrex and the dashboard. `src/components/site/MoreWork.tsx`
  renders the other case studies under each one.
- `/services`, `/about` (500+ words, copy fixed by the user's brief of
  2026-09-11, do not rewrite), `/contact`
- `/writing` index with one entry, `/writing/myanimelist-analysis`, which
  carries the full paper; `src/components/site/PaperPage.tsx` is the
  layout. The Chess.com comparison paper was cut for good on 2026-09-11.
  Do not recreate it.
- `src/app/not-found.tsx` gives direction in site voice, no apology
- Case-study cards and steps are data: `src/data/work-data.ts`,
  `src/data/process-data.ts`

## Boundaries

- Keep the site static. No databases, no localStorage.
- Do not rename routes.
- Small, reviewable changes. The user iterates in rounds of feedback.
