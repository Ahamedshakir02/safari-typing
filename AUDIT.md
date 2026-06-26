# Safari Typing Services — Full Website Audit

Reviewed: 25 June 2026. Scope: the entire React/Vite codebase (`safari-typing/`) — SEO, design, front-end engineering, content, and accuracy for an Ajman government-typing centre. Written from four points of view: the SEO engineer, the senior designer, the senior developer, and you, the owner.

> **Correction (26 June 2026):** the centre is in **Ajman**, not Sharjah (confirmed by the owner and on-site photos showing Ajman Sewerage, Government of Ajman, DED Ajman and Residency Affairs – Ajman). This **supersedes the utility/immigration notes in §6**: the correct utility is **FEWA** (drop the Dubai-only "DEWA") with **Ajman Sewerage** for sewerage — *not* SEWA. And because an **Amer** service logo is displayed in-shop, the **"Amer" copy is accurate and stays**. The Sharjah → Ajman copy/SEO/JSON-LD fixes have been applied.

---

## 1. The owner's reaction (the honest gut check)

If I owned this company and saw this site, my first reaction would be: *"This looks far more expensive and trustworthy than my competitors' sites — but I can't put it live tomorrow, because half of what it says about my business isn't confirmed and two services are described wrong."*

The craftsmanship is genuinely high. The layout, typography, spacing, and calm "editorial" tone are better than 95% of typing-centre websites in the UAE, which are usually cluttered, neon, and template-y. That is a real competitive advantage.

But it is a **beautiful shell that is not yet truthful**. Every photo is a grey placeholder. Every statistic ("12+ years", "15,000+ applications", "5000+ happy customers") is a made-up number flagged `[CONFIRM]`. Every testimonial is fake (Ahmed, Priya, محمد… all marked `placeholder: true`). The numbers even contradict each other from page to page. And it describes two services using the wrong UAE government systems for Sharjah. So as the owner I'd be proud of the look and **nervous about going live as-is** — publishing invented reviews and stats is a trust and compliance risk, not just a polish issue.

**Verdict: a strong "yes, this is a good one" on design and structure — roughly 8.5/10 as a template. But only about 5/10 as a *finished, launch-ready site*, because the real content, photos, and facts aren't in yet.** The gap between those two numbers is your to-do list, and almost all of it is content you supply, not code anyone needs to rewrite.

---

## 2. SEO engineer's audit

**The big structural issue: this is a client-rendered single-page app with no pre-rendering.** Titles, meta descriptions, canonical tags, and the LocalBusiness/FAQ JSON-LD are all injected by JavaScript *after* the page loads (`useDocumentMeta.js`). Google can usually render JavaScript, but it does so on a slower second pass, and many crawlers and link previewers (Bing, WhatsApp, Facebook, LinkedIn, X) often do **not** run JS. They'll only see the static `index.html`, which has a single hard-coded title and OG image for the whole site. Net effect: your per-page titles and descriptions may never be seen by social scrapers, and your local-SEO structured data is at the mercy of JS rendering. For a six-page brochure site this is very fixable — add static pre-rendering (e.g. `vite-plugin-prerender`, `react-snap`, or migrate the routes to a static export) so every route ships real HTML.

**Deployment trap that will cause 404s.** There is no SPA fallback config (`_redirects`, `vercel.json`, `netlify.toml`, or a `404.html`). On most static hosts, if someone opens `safaritypingservices.ae/services` directly or refreshes it, they'll get a hard 404 because the host looks for a `/services` file that doesn't exist. You must add a rewrite rule sending all paths to `index.html`. This is the single most likely "the site is broken" bug at launch.

**Keyword targeting is weak for local intent.** The headings are poetic ("Government paperwork, handled with quiet care", "A calm counter for complicated paperwork") but they don't contain the phrases people actually search: *typing centre near me, Tasheel Sharjah, Emirates ID renewal Sharjah, attestation Sharjah, visa typing Nazir Plaza*. The brand name "Safari Typing Services" barely appears in an H1. I'd keep the elegant voice but make at least the homepage and Services H1/H2s carry "Sharjah" + the core service nouns, and add the city to the `<title>` (currently the static title says "UAE", not "Sharjah").

**Structured data is good but thin.** The `LocalBusiness` JSON-LD is present and sensibly avoids fake awards — good. But it's missing `openingHoursSpecification`, `addressRegion`, `postalCode`, and `sameAs` (social links are empty `#`). Add opening hours and real social profiles once known. Do **not** add `aggregateRating` until you have real, verifiable reviews — fake review markup can get you a Google manual penalty.

**Smaller SEO items:** `sitemap.xml` has no `<lastmod>` dates; there's no `.ico` favicon (only SVG, which older crawlers/Windows ignore); `theme-color`/OG image are fine but the OG image is a 30 KB banner JPEG — confirm it's at least 1200×630 so it doesn't render tiny in shares; and there's no analytics (GA4, Plausible, or similar), so you'll be flying blind on what converts. Add analytics before launch, not after.

---

## 3. Senior designer's audit

Aesthetically this is the strongest part of the project, and I'd change very little about the *visual* system. The "quiet editorial" palette (warm sand, sage-green action colour, deep ink), the EB Garamond + Figtree pairing, the arch-radius image frames, the generous whitespace, and the restrained UAE-flag accents all hang together. Someone with taste built this. The colour tokens even carry comments showing contrast was deliberately deepened for readability — that's a designer who cares.

The problems are about *finish*, not taste:

**Every image is a placeholder.** The home "Inside Shop 4" band, the process steps, the Services and About hero bands all render the grey "ADD A PHOTO HERE" slot. Right now the site looks like a designer's mockup, not a live business. Nothing communicates trust to a walk-in customer like real photos of the actual shop, the counter, the team, and the UAE/government context. This is the highest-impact design fix and it costs you a phone camera, not a developer.

**The voice may be too quiet for the audience.** "Unhurried steps", "calm counter", "quiet care" is lovely brand writing — but a stressed resident whose visa expires in three days wants to read *"Fast, same-day visa typing. WhatsApp us now."* The elegance is a differentiator; just make sure the calm tone doesn't bury the urgency and the price. Consider letting the hero say plainly what you do and how fast, then keep the poetry for the lower sections.

**Arabic is an afterthought in an Arabic-first market.** The site is English-primary with a few decorative Arabic phrases. A large share of a Sharjah typing centre's customers are Arabic-first (and your own copy lists Arabic and Urdu as RTL languages). There's no real Arabic version and no RTL layout. A proper Arabic toggle would meaningfully widen your market and is worth planning even if it's phase two.

Minor: the floating WhatsApp button and the bottom CTA can crowd each other on small screens; the contact form's success state ("Thank you") appears even if the WhatsApp pop-up is blocked, which can confuse users.

---

## 4. Senior developer's audit

The engineering is clean and modern: React + Vite, code-split lazy routes, a sensible component library, IntersectionObserver reveals with `prefers-reduced-motion` respected, a skip link, labelled form inputs, and titled map iframes. Accessibility awareness is above average. Good foundation.

Issues, in priority order:

**Two competing sources of truth for the stats — and they disagree.** `src/data/site.js` exports `STATS`, `HERO`, `ABOUT`, `TRUST_BADGES`, `HOW_IT_WORKS`, `CONTACT_CTA` — and **none of them are imported anywhere** (I grepped; they're dead code). The pages actually read `HOME_STATS` and `ABOUT_STATS` from `content.js`. Because there are two sets, the numbers contradict: `HOME_STATS` says *12+ years / 15,000+ applications*, `ABOUT_STATS` says *12+ years / 15k+ / 7 service areas*, while the orphaned `STATS` says *10+ years / 5000+ customers / 14+ services*. Delete the dead exports and keep one stats object as the single source of truth — this also fixes the content inconsistency in section 5.

**Build toolchain is bleeding-edge.** `package.json` pins `vite@^8` (rolldown-based). That's experimental tooling; the build failed in a clean Linux environment because the rolldown native binary wasn't present for the platform (it works on your Windows machine, where `dist/` exists). For a brochure site I'd pin to a stable, widely-deployed Vite (6.x) to avoid host/CI surprises — many static-hosting build images won't have the rolldown native binary either.

**The README is stale and will mislead the next developer.** It describes Space Grotesk / Inter / IBM Plex Arabic fonts via `@fontsource`, a `services.js` file with *14* services, a `sections/` folder, a `ServiceDetail` page, and a `/services/:slug` route. None of those exist — the real site uses EB Garamond + Figtree via a Google Fonts `<link>`, a `content.js` with *10* services, and flat routes. Rewrite the README to match reality.

**Contact form has no validation.** Name and phone aren't `required`, so a user can submit an empty enquiry and still hit the "Thank you" state. Add basic `required`/pattern validation. (No backend is fine for this model — just guard the inputs.)

Smaller: Google Fonts are render-blocking (self-hosting would shave first-paint); no `.env`/`SITE_URL` is still the placeholder domain; and there's no error boundary around the lazy routes.

---

## 5. Content audit

**Nothing factual is confirmed yet.** Years in business, applications handled, customer counts, opening hours, which number is WhatsApp, the exact map pin, and the prices are all `[CONFIRM]` placeholders. Several are also internally contradictory (the stats above; and the README's hours differ from the live `8 AM–9 PM` hours). Pick the true numbers, make them consistent everywhere, or remove the stat band entirely until you have real figures.

**The testimonials are fabricated and must not go live as real.** All five reviews carry `placeholder: true`. Publishing invented customer reviews is both a trust risk and, under UAE consumer-protection norms, a real liability. Replace them with genuine Google reviews (ideally pulled live or quoted with names/initials you actually have), or pull the section until you do.

**A Gmail business address undercuts the premium look.** `safaritypingservices@gmail.com` is functional but reads as small/unofficial next to this polished design. A `info@safaritypingservices.ae` mailbox on your own domain is a cheap, high-trust upgrade.

**No privacy policy / terms, despite collecting personal data.** The contact form gathers name, phone, and free-text ("By sending you agree to be contacted") with no privacy policy linked. With the UAE's Personal Data Protection Law in force, add a short privacy policy page and link it under the form and in the footer.

**The pricing page is good but legally sensitive.** "From AED 25 / 75 / 250" with the clear "excludes government fees, charged at cost" note is exactly the right framing. Just confirm those service-charge figures are real and current, since typing-centre charges can be scrutinised.

---

## 6. Typing-centre accuracy — two factual errors to fix before launch

This is the part a generic web auditor would miss, and it matters most because it makes the business look like it doesn't know its own field.

**"Amer & immigration" is the wrong system name for Sharjah.** *Amer* is the **Dubai** GDRFA visa channel. Sharjah and the northern emirates process residency/immigration through the federal **ICP** (and historically Sharjah's own channels), not Amer. Your trust badges and JSON-LD correctly say "ICP e-Channel", but Service 02, the pricing note, and the contact dropdown all say "Amer". Unless you genuinely also run Dubai visas, rename this to "ICP / immigration & visa services" so it's accurate for a Sharjah centre.

**"DEWA / FEWA connection" is the wrong utility for Sharjah.** *DEWA* is Dubai's utility; *FEWA* serves the northern emirates (Ajman, RAK, Fujairah, UAQ). Sharjah's utility is **SEWA**. Service 06's tags list "DEWA / FEWA connection", yet one of your own placeholder reviews correctly says "SEWA registration". For a Sharjah shop this should read **"SEWA connection"**. As written, a local customer will immediately notice it's wrong.

Both are one-line fixes in `src/data/content.js`, but they're the difference between "these people know the process" and "this site was written by someone who doesn't work here."

---

## 7. Prioritized action plan

**P0 — must fix before the site goes live**

- [ ] Add an SPA host rewrite (all routes → `index.html`) so deep links/refresh don't 404.
- [ ] Replace the two wrong system names: "Amer" → ICP/immigration, and "DEWA/FEWA" → SEWA (`content.js`).
- [ ] Replace or remove the fake testimonials; do not publish invented reviews.
- [ ] Confirm and de-duplicate all stats, hours, phones, WhatsApp line, address, and the exact map pin; make numbers consistent across pages.
- [ ] Confirm/register the real domain and set `SITE_URL`.

**P1 — do soon after / alongside launch**

- [ ] Add real photos (shop, counter, team) to replace every `ImagePlaceholder`.
- [ ] Add static pre-rendering so per-page titles, descriptions, and JSON-LD ship in HTML for social/search crawlers.
- [ ] Add a privacy policy page and link it on the contact form + footer.
- [ ] Add analytics (GA4 or Plausible) and Google Business Profile + verify the site.
- [ ] Strengthen local-SEO headings/titles with "Ajman" + core service keywords.
- [ ] Add `required`/validation to the contact form.
- [ ] Move email to the business domain.

**P2 — polish and growth**

- [ ] Pin Vite to a stable (6.x) build; rewrite the stale README.
- [ ] Delete the dead exports in `site.js`; keep one stats source of truth.
- [ ] Plan a full Arabic / RTL version of the site.
- [ ] Add `lastmod` to the sitemap; ship a `.ico` favicon; confirm OG image ≥ 1200×630; self-host fonts.

---

*Bottom line: the design and code are a genuinely good foundation — better than the competition. It is not yet launch-ready because the real facts, photos, and two service descriptions still need to be made true. Fix the P0 list and you have a site you can be proud to put your name on.*
