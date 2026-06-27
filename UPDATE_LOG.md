# Update Log — Safari Typing Services

A running log of changes made to the site. Newest entries on top.

---

## 2026-06-27 — Service expansion (13 → 15 categories) + photo band fixes

Brand kept as **Safari Typing Services** (the "Al Manama" brochure was used only as
a content reference). Source of truth for services remains `src/data/content.js`.

### 1. Two new service categories (13 → 15)

Added as full categories — they auto-wire into the Home grid, footer, desktop
mega-menu, mobile menu, the Services hub, and their own `/services/:slug` pages.

| Category | Slug | Sub-services |
| --- | --- | --- |
| **Tax & Accounting** | `tax-accounting` | VAT registration, VAT deregistration, VAT return filing, Corporate tax registration, Accounting & bookkeeping |
| **Digital Marketing & IT** | `digital-marketing-it` | Website design & development, E-commerce, Social media management, Logo design & branding, SEO, Business email setup |

- Both placed in the **Business & Documents** mega-menu/footer group
  (`SERVICE_GROUPS` in `content.js`).
- `everyday-other` renumbered to `15`; new categories are `13` and `14`.

### 2. Brochure services folded into existing categories

These were clearly in the brochure but missing from the site:

- **Golden Visa assistance** → Visa & Immigration
- **Travel insurance** + **Hotel booking** (tag) → Travel Services
- **Courier & document delivery** and **Utility bill payments** → Everyday & Other

### 3. Supporting wiring

- `src/components/Icon.jsx` — added `calculator` and `monitor` glyphs.
- `src/components/illustrations/ServiceArt.jsx` — added brand-blue card
  illustrations for `tax-accounting` (calculator + % coin) and
  `digital-marketing-it` (monitor + rising chart).
- `src/pages/ContactPage.jsx` (via `ENQUIRY_SERVICES`) — added
  "Tax & accounting" and "Website & digital marketing" options.
- Fixed all hardcoded counts: stats `13` → `15`; "Thirteen service areas" →
  "Fifteen" on Home (`HOME.services.intro`) and `src/pages/Services.jsx`
  (SEO description + body); data-file header comments.
- `public/sitemap.xml` — added `/services/tax-accounting` and
  `/services/digital-marketing-it`; bumped `/services` lastmod to 2026-06-27.
- Memory updated: `service-architecture` + `MEMORY.md` now say 15 categories.

### 4. Photo band fixes (reported via screenshots)

Root cause: `team-three-dark.png` and `visa-services-dark.png` are **transparent
cut-out PNGs**, not "dark scenes with their own background" as the code assumed.
The About and Services bands rendered them `object-cover` (cropping heads/bodies)
with a visible border.

Fixes:

- `src/pages/About.jsx` — band now `photo-panel` + `object-contain`, **border
  removed**, aspect `16/10` (mobile) / `16/8` (desktop). Full team shows, no crop.
- `src/pages/Services.jsx` — same treatment for the visa-services band.
- `src/pages/Home.jsx` — removed the borders on the "Inside Shop 4" band and the
  three "How it works" step panels (already used `photo-panel` + `object-contain`).
- `src/data/content.js` — corrected the `PHOTOS` comment: all images are
  transparent cut-outs rendered `object-contain` on `.photo-panel` (no border);
  noted the "-dark" suffix is historical and must not be rendered `object-cover`.

### Verification

- `npm run build` — passes (83 modules, no errors).
- Browser check (localhost:5173): About and Services bands now show full,
  uncropped figures on the soft blue panel with no borders.

### Still open / to confirm before launch

- Arabic for all new copy is original MSA — needs a native **[AR review]**.
- Stats/figures still marked `[CONFIRM]`; reviews still `[PLACEHOLDER]`.
- Final domain (`.ae` vs `.com`) still `[CONFIRM]` in `src/data/site.js`.
