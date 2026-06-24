# Safari Typing Services — Website

Marketing website for **Safari Typing Services** (سفاري لخدمات الطباعة), a government
typing & document-services centre in **Sharjah, UAE** (Nazir Plaza Building, Shop 4).

Built with **React + Vite + Tailwind CSS + React Router**. Multi-page, mobile-first,
English-primary with bilingual (Arabic) brand accents. No backend — the contact form
opens a pre-filled WhatsApp message (with an email fallback). Conventional, fast, and
accessible: light CSS / IntersectionObserver motion only, all of it disabled under
`prefers-reduced-motion`.

## Run it

```bash
npm install      # install dependencies
npm run dev      # start the dev server (Vite prints the local URL)
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

Requires Node 18+.

## Project structure

```
index.html                 App shell + base SEO / Open Graph tags
public/
  safari-logo.jpeg          Brand logo (header, footer, hero, 404)
  safari-banner.jpeg        Bilingual banner lockup (About page, OG image)
  favicon.svg
src/
  main.jsx                  React entry + font imports
  App.jsx                   Routes + layout (Header / Footer / floating buttons)
  index.css                 Tailwind layers, base styles, reveal/marquee utilities
  data/
    site.js                 Contact, nav, stats, copy, JSON-LD — EDIT CONTENT HERE
    services.js             The 14 services (cards + detail pages)
  lib/                      Hooks/helpers (SEO meta, WhatsApp links, scroll, reveal)
  components/               Header, Footer, TopBar, UaeFlag, Logo, ServiceCard, …
  sections/                 Home-page sections (Hero, Services, WhyUs, …)
  pages/                    Home, About, Services, ServiceDetail, Contact, NotFound
tailwind.config.js          Brand colour tokens + fonts
```

### Routes
`/` · `/about` · `/services` · `/services/:slug` (per-service detail) · `/contact` · `*` (404)

## Brand

Colours are sampled from the logo and defined as Tailwind tokens in `tailwind.config.js`:

| Token  | Hex       | Use                              |
| ------ | --------- | -------------------------------- |
| `navy` | `#16233F` | headings, body text, structure   |
| `red`  | `#E62F2A` | primary CTA / accent             |
| `blue` | `#1F54A6` | secondary accent (from the mark) |

Fonts (self-hosted via `@fontsource`): **Space Grotesk** (display), **Inter** (body),
**IBM Plex Sans Arabic** (Arabic). If the font packages can't be fetched in your build
environment, remove the `@fontsource` imports in `src/main.jsx` and uncomment the Google
Fonts `<link>` in `index.html`.

The **UAE flag** is shown in the top utility bar and the hero, per the client requirement.

## ⚠️ Content to confirm before launch

All placeholders live in **`src/data/site.js`** (search for `[CONFIRM]`).

- [ ] **City / address** — assumed **Sharjah** (corroborated by the `+971 6` Sharjah
      landline). Confirm the full address & emirate.
- [ ] **Opening hours** — currently a placeholder (Sat–Thu 9:00 AM–9:00 PM, Fri 3:00–9:00 PM).
- [ ] **WhatsApp number** — set to **+971 56 632 2299**. Confirm which line is WhatsApp.
- [ ] **Map pin** — uses a name search ("Nazir Plaza Building, Sharjah"). Replace
      `CONTACT.mapsQuery` / `geo` with the exact location once verified.
- [ ] **Reviews** — `REVIEWS` are placeholders; replace with real Google reviews.
- [ ] **Stats** — `STATS` (years, customers) are placeholders; set real figures.
- [ ] **Social links** — `CONTACT.socials` point to `#`; add real handles or remove.
- [ ] **Domain** — `SITE_URL` (used for canonical/OG/JSON-LD) is a placeholder.
- [ ] **Services** — the 14 services use Sharjah-accurate terminology; trim/adjust to
      exactly what the centre offers.
- [ ] **og-image / favicon** — currently the banner JPEG and a generated SVG mark;
      swap for a purpose-made share image / `.ico` if desired.

## Notes

- The contact form has **no backend**: "Send on WhatsApp" opens `wa.me` with the details
  pre-filled; "Email us instead" opens a `mailto:` to the business inbox.
- Trust claims are intentionally accurate (e.g. "ICP e-Channel Submissions", not
  unqualified "Government Authorised").
