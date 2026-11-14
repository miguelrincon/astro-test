# Website build prompt

Act as a senior web designer and Astro developer. Build a complete, production-ready
bilingual (English/Dutch) static brochure website for a hypnotherapy practice called
"Stillwater Hypnotherapy", run by therapist "Robin van Dijk" in Rotterdam, Netherlands.
Deliver the full working project, not snippets.

## Tech stack

- Astro 7 + TypeScript, static output.
- No React/Vue/Svelte, no Tailwind, no client-side JavaScript. Use native `<details>`
  for the mobile nav and FAQ accordions.
- Hand-written CSS in `src/styles/global.css` using CSS custom properties.
- Astro content collections with Zod schemas. Site-wide settings in `src/data/site.json`.
- Pages CMS config in `.pages.yml` so a non-technical editor can edit pages, services,
  FAQs, testimonials, site settings, and images.
- npm scripts: `dev`, `build`, `preview`, `check`. Node 22+.
- GitHub Pages-ready: configurable `site` and `base` via environment variables,
  GitHub Actions deploy workflow, sitemap, generated `robots.txt`, trailing slashes.

## Design direction

- Calm, premium, editorial, quietly confident — not clinical or "wellness cliché".
- Warm paper background (`#f6f1e8`), deep green brand (`#204a41`), terracotta accent
  (`#c4694a`), soft gold details, dark green ink (`#1e2b27`).
- Display font: Fraunces (serif). Body font: DM Sans (sans). Load via Google Fonts.
- Generous spacing, large rounded image cards, subtle shadows, restrained borders.
- Rounded buttons, clear hover/focus states, small uppercase eyebrows.
- Responsive from 320px to large desktop. No horizontal overflow at 320/360/390px.
- Use local, warm, natural photography with accurate alt text. Optimise JPEGs
  (max width 1400px, quality ~80). Include a branded 1200x630 OG image.

## Pages (EN / NL)

EN: `/`, `/about/`, `/hypnotherapy/`, `/services/`, `/conditions/`, `/process/`,
`/pricing/`, `/faq/`, `/testimonials/`, `/booking/`, `/contact/`, `/privacy/`,
`/terms/`

NL: `/nl/`, `/nl/over-mij/`, `/nl/hypnotherapie/`, `/nl/diensten/`, `/nl/klachten/`,
`/nl/traject/`, `/nl/tarieven/`, `/nl/veelgestelde-vragen/`, `/nl/ervaringen/`,
`/nl/afspraak/`, `/nl/contact/`, `/nl/privacy/`, `/nl/voorwaarden/`

Plus a custom 404 page.

Each page needs a translated pair linked by `translationKey`. Include:

- Home: hero, trust badges, services preview, process, testimonials, FAQ preview, CTA.
- About: approach, credentials, training, personal note, CTA.
- Hypnotherapy: explanation, myths, what it feels like, evidence-informed framing.
- Services: intro plus 6 service cards.
- Conditions: anxiety/panic, stress/burnout, sleep/insomnia, confidence/self-esteem,
  phobias/fears, habits/behaviour change; plus a "when it is not the right fit" section.
- Process: before we meet, free intake, typical 60-minute session, aftercare, between sessions.
- Pricing: free 20-minute intake; single session €95; 3 sessions €270; 6 sessions €510;
  payment, cancellation, insurance, reduced-fee note.
- FAQ: 7 questions per language (what it is, safety, number of sessions, online,
  medical boundaries, awareness/control, cancellation).
- Testimonials: 3 per language with quote, author, Rotterdam location, service, 5 stars.
- Booking: how to book, what happens next, direct calendar link.
- Contact: contact details, map link, Formspree form, practical info.
- Privacy and Terms: realistic placeholder legal copy, Dutch law, Rotterdam jurisdiction.

## Data model

- pages: `title`, `navTitle?`, `description`, `urlSlug`, `translationKey`, `eyebrow?`,
  `hero{heading, subheading, image?, imageAlt?}`, `seoTitle?`, `noindex`.
- services: `title`, `translationKey`, `summary`, `duration`, `price`, `order`,
  `image?`, `imageAlt?`.
- faqs: `question`, `answer`, `order`.
- testimonials: `quote`, `author`, `location?`, `service?`, `rating`, `order`.
- `site.json`: practice name, therapist, email, phone, WhatsApp, address, maps URL,
  opening hours, booking URL, form endpoint, social links.

Important: the frontmatter field must be `urlSlug`, not `slug`, because Astro reserves
`slug` for entry IDs.

## Site settings / placeholders

- Practice: Stillwater Hypnotherapy
- Therapist: Robin van Dijk
- Email: hello@stillwaterhypnotherapy.com
- Phone: +31 6 12 34 56 78
- Address: Westblaak 123, 3012 KL Rotterdam, Netherlands
- Hours: Mon–Thu 09:00–19:00, Fri 09:00–15:00, Sat by appointment
- Booking: https://calendly.com/stillwater-hypnotherapy/intake
- Form: https://formspree.io/f/REPLACE_ME
- Social links: placeholder Instagram/LinkedIn/Facebook
- All copy, credentials and testimonials are fictional placeholders and must be
  clearly flagged in the README for replacement/review.

## Components

- Sticky header: brand, desktop nav, language switch, booking CTA; mobile `<details>`
  nav. Hide the brand name at ≤359px to prevent overflow.
- Hero with optional image, eyebrow, heading, subheading, badges, primary/secondary CTA.
- PageHeader for pages without images.
- SectionHead, CTA band, ServiceCard, TestimonialCard, FaqList, ContactForm,
  ContactDetails, Footer, Icon set.
- Contact form: Formspree action, `_gotcha` honeypot, consent checkbox, and a visible
  setup note while the endpoint contains `REPLACE_ME`.
- Email links should wrap cleanly at the `@` on narrow screens using `<wbr>`.
- Footer: practice blurb, explore links, contact details, socials, legal links, copyright.

## SEO

- Per-page title and meta description, optional `seoTitle`.
- Canonical URLs, hreflang `en`/`nl`/`x-default`, Open Graph and Twitter cards.
- JSON-LD `LocalBusiness`/`HealthAndBeautyBusiness` with address, hours, `areaServed`,
  and `FAQPage` JSON-LD on FAQ pages.
- Sitemap integration, generated `robots.txt`, `noindex` on 404.
- `trailingSlash: 'always'`; internal URLs must match sitemap/canonical exactly.

## Accessibility

- Semantic landmarks, one H1 per page, logical heading order.
- Skip link, visible focus states, keyboard-operable nav/FAQ, aria labels where needed.
- Sufficient contrast (including ghost buttons on dark backgrounds).
- Respect `prefers-reduced-motion`.

## GitHub Pages

- Support deployment both at a domain root and under a project subpath
  (e.g. `/astro-test/`) using `BASE_PATH` and `SITE_URL`.
- Prefix all internal links, images, favicon, canonical and OG URLs with the base path.
- Add `.github/workflows/deploy.yml` using `configure-pages`, `upload-pages-artifact`
  and `deploy-pages`. Build with `npm ci && npm run build`, output `dist`.

## Acceptance criteria

- `npm run build` succeeds and generates all pages.
- `npm run check` reports 0 errors and 0 warnings.
- No broken internal links or missing images.
- No horizontal overflow at 320, 360, 390, or 1440px.
- Site builds correctly at both `/` and `/astro-test/`.
- Pages CMS loads and exposes editable page/service/FAQ/testimonial/site content.
