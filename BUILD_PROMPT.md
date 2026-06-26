# Build Prompt — Safari Typing Services Website

> Paste everything below the line into your AI website builder (Lovable, v0, Bolt, Claude, etc.). It is self-contained and directive. Anything marked **[CONFIRM]** is a real business fact the owner must verify before launch — keep it as a visible placeholder, do not invent a value.

---

## ROLE

You are a senior product designer + front-end engineer. Build a fast, premium, mobile-first marketing website for **Safari Typing Services**, a government documents & typing centre in **Ajman, United Arab Emirates**. Reference site for structure, depth, and conversion patterns: **sarmat.ae** (a Dubai typing centre). Match its information architecture and content depth, but **not** its colours — use the visual identity defined below. Do **not** copy sarmat's text; write original copy.

## BUSINESS PROFILE

- **Name:** Safari Typing Services · Arabic: سفاري لخدمات الطباعة
- **What it is:** A one-stop typing centre handling government, immigration, business and document formalities for residents and companies in Ajman and across the northern emirates.
- **Location:** Nazir Plaza Building, Shop 4, Ajman, UAE. **[CONFIRM exact street/area + map pin]**
- **Phones:** Landline +971 6 544 7665 · Mobile +971 50 405 7575 · Mobile +971 56 632 2299 **[CONFIRM]**
- **WhatsApp (primary conversion channel):** +971 50 405 7575 **[CONFIRM which line]**
- **Email:** safaritypingservices@gmail.com **[recommend a domain email: info@safaritypingservices.com]**
- **Hours:** Sat–Thu 8:00 AM–9:00 PM · Fri 2:00 PM–9:00 PM **[CONFIRM]**
- **Languages served:** English, Arabic, Hindi, Malayalam, Urdu
- **Domain:** https://www.safaritypingservices.com

## VISUAL IDENTITY (blend: Safari calm + sarmat boldness)

Keep Safari's calm, premium "editorial" base, but borrow sarmat's conversion energy: bold CTAs, icon service tiles, a mega-menu, dense-but-organized service pages, and a deep FAQ.

- **Palette:** warm sand page `#f1eadd`; raised cards `#faf6ee`; deep ink `#1d2839` (headings, dark bands); sage-green primary action `#5e7257`; hairline borders `#e2d9c8`; body text `#46423a`. UAE accents (green `#007a3d`, red `#ce1126`) used sparingly (flag, tiny details). WhatsApp green for the floating button.
- **Type:** Display serif **EB Garamond**; body sans **Figtree**. Self-host the fonts (don't rely on render-blocking Google Fonts). Add **IBM Plex Sans Arabic** for the Arabic version.
- **Shape language:** soft rounded cards (20–28px), an "arch" radius for hero images (`280px 280px 28px 28px`), soft shadows, generous whitespace.
- **Motion:** subtle scroll-reveal and hover lifts only; fully disabled under `prefers-reduced-motion`.
- **Tone of voice:** confident and clear first, calm and warm second. Lead with what you do and how fast ("Same-day typing & submission"), then the reassuring brand voice. Don't bury urgency or price under poetry.

## INFORMATION ARCHITECTURE

Top nav with a **mega-menu** under "Services" (grouped like sarmat). Routes:

`/` · `/services` (hub) · one page per category below (with in-page anchors per sub-service) · `/about` · `/pricing` · `/faq` · `/contact` · `/privacy-policy` · `/terms` · `*` 404.

**Service categories (each = a page; bullets = anchored sub-sections + tag chips):**

1. **Business Setup & PRO** — Mainland company formation · Free-zone formation · Trade licence (new / renewal / amendment) · Local sponsor arrangement · Business consultancy · PRO services & government liaison.
2. **Visa & Immigration** — Family visa (entry permit, status change, renewal, cancellation) · Company/employment visa (employee visa, employee insurance, entry permit, cancellation) · Amer services · ICP e-Channel submissions · Overstay fine settlement.
3. **Emirates ID** — New ID · Renewal · Replacement (lost) · Mobile-number update · Data correction.
4. **Tasheel & MOHRE (Government / Labour)** — Tasheel services · Labour contracts · Offer letters · Work permits & quota · WPS · Absconding cases · Renewals & cancellations.
5. **Medical Services** — Medical fitness test · Family medical · Health card · Marriage (pre-marriage) medical.
6. **Documentation & Attestation** — Certificate attestation · **MOFA attestation** · Apostille · Educational certificates · Legal documents · Embassy services.
7. **Translation & Court Works** — Legal translation · Medical translation · Power of attorney · Court documentation.
8. **Vehicle & Driving Licence** — Driving licence services · **Ajman transport / RTA transactions** · **EVG (Emirates Vehicle Gate) services** · Traffic fine payment · Vehicle registration.
9. **Passport Services** — New passport · Renewal · Amendments · Lost passport · Home-country national ID services.
10. **Online Registrations & Utilities** — **FEWA connection** · **Ajman Sewerage registration** · Tenancy contract registration (Ajman Municipality) · Civil Defence · Ministry services.
11. **Insurance** — Health insurance · Vehicle insurance · Home insurance.
12. **Travel Services** — Visit visa (30 / 60 / 90 days) · Air-ticket booking · Tour packages · Desert safari.
13. **Everyday & Other Services** — Domestic worker (maid) visa services · **Police Clearance Certificate (Good Conduct)** · Printing, photocopy & scanning · Online government form submission.

## PAGE-BY-PAGE BUILD

**Home** (model the section rhythm on sarmat, with Safari's look):
1. Sticky header + mega-menu; "Call now" + WhatsApp CTAs; mobile drawer.
2. Hero: clear H1 with the keyword and city (e.g. *"Ajman's one-stop typing centre for visas, Emirates ID & government services"*), one-line subhead, two CTAs (Call / WhatsApp), a small UAE-flag trust line. Hero image of the actual shop **[ADD PHOTO]**.
3. Official-channels strip: ICP e-Channel · Tasheel (MOHRE) · Amer · MOFA attestation (accurate, defensible badges — not "Government Authorised").
4. Stats band (4 figures) — **[CONFIRM every number; do not invent]**.
5. Services grid: 13 icon tiles linking to category pages (sarmat-style tile + 2–3 word descriptor).
6. "Inside Shop 4" image + value copy band **[ADD PHOTO]**.
7. Why Safari: 6 feature cards (fast turnaround, knows the process, multilingual, one roof, WhatsApp-from-home, fair Ajman rates).
8. How it works: 3 steps.
9. Languages served (5).
10. Testimonials — **real Google reviews only [CONFIRM]; ship the section empty/hidden until real ones exist.**
11. FAQ teaser → link to full FAQ.
12. Final CTA band (Call / WhatsApp / Visit).
13. Footer: mega link list, hours, address, phones, email, socials **[CONFIRM]**, legal links.

**Category pages** (×13): hero (title + 1-line intro + keyword), credentials strip, an intro paragraph, the sub-services as anchored blocks with tag chips and short accurate descriptions, a "what to bring" note, and a CTA band. Each sub-service anchor must be linkable from the mega-menu.

**About:** story (a small typing desk grown into a full centre), values (accuracy, honesty, presence), stats **[CONFIRM]**, location block with embedded Google Map (exact pin) and hours.

**Pricing:** 3 indicative tiers (Document typing / Visa & labour / Business & PRO) with "from AED __" **[CONFIRM]**, each with a clear note: *"Service charges only — official government fees are separate and charged at cost, confirmed before we start."*

**FAQ:** accordion of 8–12 questions with genuinely useful, **long, keyword-rich answers** (what to bring, turnaround times, sending docs on WhatsApp, pricing model, individuals vs companies, hours, remote processing, data privacy). Add `FAQPage` JSON-LD.

**Contact:** WhatsApp card (fastest), call/email/visit rows, embedded map, and an enquiry form that composes a pre-filled WhatsApp message (no backend) with an email fallback. Validate name + phone (`required`). Link the privacy policy under the form.

**Privacy Policy + Terms:** real pages (UAE PDPL-aware), linked in footer and from the form.

## CONVERSION

WhatsApp is the primary channel: floating WhatsApp button on every page, WhatsApp CTAs in header/hero/footer, and the contact form deep-links to `wa.me` with the enquiry pre-filled. Phone (`tel:`) everywhere. No appointment required messaging.

## TECH REQUIREMENTS

- React + Vite + Tailwind (or equivalent), component-driven, mobile-first.
- **Server-render or pre-render every route** (SSG/prerender) so titles, meta, OG tags and JSON-LD ship in the static HTML — not injected by JS only. This is critical for SEO and social previews.
- **Add an SPA fallback** for the host (`_redirects` / `vercel.json` / `netlify.toml` → all paths to `index.html`) so deep links and refresh don't 404.
- Pin a **stable** build toolchain (avoid bleeding-edge/experimental versions).
- Performance: self-hosted fonts, lazy-loaded images (real WebP/JPEG, sized ≥1200px for heroes), code-split routes, Lighthouse ≥ 90 mobile.
- Analytics: include GA4 or Plausible from day one.

## SEO REQUIREMENTS

- Unique `<title>` + meta description per page, each containing the service + **"Ajman"**.
- `LocalBusiness` JSON-LD on Home with name, address (Ajman, AE, postal/region), geo (exact pin), phones, **`openingHoursSpecification`**, `areaServed` (Ajman + northern emirates), `availableLanguage`, and real `sameAs` social links. **No `aggregateRating` until real reviews exist.**
- `FAQPage` JSON-LD on the FAQ.
- `sitemap.xml` (with `<lastmod>`) + `robots.txt` + canonical tags.
- Favicon set incl. `.ico`; OG share image ≥ 1200×630.
- Keyword targets to weave into H1/H2/body naturally: *typing centre Ajman, visa typing Ajman, Emirates ID renewal Ajman, Tasheel Ajman, attestation Ajman, MOFA attestation, FEWA registration Ajman, PRO services Ajman, trade licence Ajman, Nazir Plaza typing centre.*

## CONTENT & ACCURACY RULES (Ajman — get these right)

- The centre is in **Ajman**, not Dubai or Sharjah. Use Ajman/northern-emirates systems:
  - **Utility = FEWA** (Federal Electricity & Water Authority). **Do NOT use DEWA (Dubai) or SEWA (Sharjah).**
  - **Sewerage = Ajman Sewerage.**
  - **Tenancy registration = Ajman Municipality** system. **Do NOT call it "Ejari" (that is Dubai-only).**
  - **Vehicle = Ajman transport / EVG.** Immigration = **ICP** (federal) and **Amer** where applicable (Amer is offered here — keep it).
- **No fabricated content.** Do not invent statistics, years in business, customer counts, or testimonials. Use a visible **[CONFIRM]** placeholder for any unverified number, and hide the reviews section until real Google reviews are supplied.
- Trust claims must stay **defensible**: "ICP e-Channel submissions", "Tasheel (MOHRE) services" — never unqualified "Government Authorised".
- Pricing copy must always separate **service charge** from **official government fees (at cost)**.
- Keep one **single source of truth** for stats/contact info so numbers never contradict across pages.

## MULTILINGUAL

Build English-first with a proper **Arabic (RTL) version** (full layout mirroring, IBM Plex Sans Arabic), plus a language toggle. Arabic is a primary market language in Ajman — treat it as a real locale, not decoration. (Hindi/Malayalam/Urdu can be mentioned as "spoken at the counter" without full translations.)

## ACCEPTANCE CRITERIA

- All 13 service categories reachable from the mega-menu, each sub-service anchor-linkable.
- Every route returns real HTML with correct meta/JSON-LD; deep links don't 404.
- WhatsApp + call reachable from every page; contact form composes a pre-filled WhatsApp message and validates inputs.
- Zero fabricated stats/reviews shipped; all `[CONFIRM]` items clearly flagged.
- Ajman-correct terminology (FEWA, Ajman Sewerage, Ajman Municipality tenancy, Amer/ICP) everywhere.
- Lighthouse mobile ≥ 90 (Performance, SEO, Accessibility); fully responsive; reduced-motion respected.
- Privacy policy + terms present and linked.
- EN + Arabic (RTL) both functional.
