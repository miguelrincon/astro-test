# Stillwater Hypnotherapy

A bilingual (English / Dutch) brochure website for a hypnotherapist, built with **Astro 7**, **Markdown content collections** and **Pages CMS**. Deploys as static HTML to Cloudflare Pages, Netlify, GitHub Pages or any static host.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # preview the production build
npm run check    # Astro + TypeScript checks
```

## What is included

- 13 pages per language: home, about, hypnotherapy, services, conditions, process, pricing, FAQ, testimonials, contact, booking, privacy, terms.
- English at `/`, Dutch at `/nl/` with Dutch-language URLs (e.g. `/over-mij`, `/nl/tarieven`).
- SEO: canonical URLs, hreflang pairs, Open Graph/Twitter tags, sitemap, robots.txt, LocalBusiness JSON-LD and FAQPage JSON-LD.
- Zero client JavaScript by default (mobile menu uses native `<details>`).
- Services, FAQs and testimonials are separate collections, reused across pages.
- `.pages.yml` configuration for browser-based editing with [Pages CMS](https://pagescms.org).

## Before launch — replace these placeholders

1. **Domain** — in `astro.config.mjs`, change `site` from `https://example.com` to the real domain. Update the sitemap URL in `public/robots.txt` too.
2. **Practice details** — edit `src/data/site.json` (name, therapist, email, phone, address, hours, socials, booking link). This file is editable in Pages CMS under **Site settings**.
3. **Booking link** — `bookingUrl` in `src/data/site.json` currently points to a sample Calendly URL.
4. **Contact form** — `formEndpoint` is a Formspree placeholder. Create a form at [formspree.io](https://formspree.io) and paste the endpoint. Until then, the form shows a small setup note.
5. **Images** — everything in `public/images/` is a placeholder pulled from Unsplash. Replace with real photography (keep the same file names, or update the image paths in content). `public/images/og.jpg` is the 1200×630 social preview; regenerate it if you replace the hero image.
6. **Copy, credentials and testimonials** — the text and credentials are illustrative. Replace with accurate professional information. Testimonials must be real, shared with permission and anonymised.
7. **Legal pages** — have the privacy policy and terms checked for your jurisdiction and professional association.

## Editing content

### With Pages CMS (recommended for non-technical editors)

1. Push this repository to GitHub.
2. Go to [app.pagescms.org](https://app.pagescms.org), sign in with GitHub and select the repository.
3. Pages CMS reads `.pages.yml`, so editors get separate English/Dutch collections for pages, services, FAQs and testimonials, plus a site settings form.
4. Saving commits to the repository, which triggers a new deploy.

### Manually

Content lives in `src/content/`:

```
src/content/
├── pages/en/*.md          # one Markdown file per page
├── pages/nl/*.md
├── services/en/*.md
├── services/nl/*.md
├── faqs/en/*.md
├── faqs/nl/*.md
└── testimonials/en/*.md
    testimonials/nl/*.md
```

Each English page must have a Dutch counterpart with the same `translationKey`. That key powers the language switcher and hreflang tags. `urlSlug` controls the URL and can differ per language. (It is called `urlSlug` rather than `slug` because Astro reserves `slug` for content entry IDs.)

Page frontmatter:

```yaml
title: Page title for search results
navTitle: Short label in the menu
description: Meta description (~150–160 characters)
urlSlug: url-slug
translationKey: about
eyebrow: Small label above the heading
hero:
  heading: Large heading
  subheading: Supporting sentence
  image: /images/example.jpg
  imageAlt: Description of the image
# seoTitle: Optional override
# noindex: false
```

The Markdown body is the main page copy. Pages showing services, pricing, FAQs or testimonials also render those collections automatically.

## Structure

```
src/
├── components/     # Header, Hero, cards, forms, page renderer
├── content/        # Markdown content collections
├── data/site.json  # Practice/contact settings
├── layouts/        # HTML shell, SEO tags, JSON-LD
├── lib/            # i18n strings and route helpers
├── pages/          # /, /nl/, catch-all route, 404
└── styles/         # Design system and responsive layout
```

## Deployment

### Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22.23.4 or newer (24 LTS recommended; see `.nvmrc`)

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

## Design notes

- Fonts: Fraunces (display) and DM Sans (body), loaded from Google Fonts.
- Palette: evergreen, warm paper, terracotta and muted gold.
- No UI framework, no client-side router, no analytics by default.
- Accessibility: skip link, visible focus states, semantic landmarks, reduced-motion support and accessible accordions.
