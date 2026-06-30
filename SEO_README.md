# SEO Playbook — Safari Typing Services (Ajman)

A practical, do-this-next guide to get **safaritypingservices.com** ranking — and
specifically to win the local searches in **Ajman** where a competitor currently
sits at the top. Ordered from **basic → advanced**. Each item says **who** does it
(👤 = business owner, 🛠️ = developer, 🧑‍💼 = the SEO agency/worker) and **why it matters**.

> **Note on roles:** the **SEO agency (you)** drives almost everything here once you have
> delegated access — see *"Working as the SEO agency — access you need"* below. The
> **owner** is only needed to grant that access and to handle Google **re-verification**
> if it's triggered. Items tagged 👤 are things the agency does *on the owner's behalf*
> once access is granted.

> **Last updated:** 1 July 2026 · domain confirmed `.com` · site is pre-rendered (SSG), so
> the on-page/technical SEO foundation is already in good shape. The biggest remaining
> wins are **off-page local SEO**, not code.

---

## ⭐ Read this first — why a competitor outranks you in Ajman

When someone searches **"typing center Ajman"**, **"tasheel typing near me"**, or
**"visa typing Ajman"**, Google shows **two different things**:

1. **The Map Pack (Local Pack)** — the box with 3 businesses + a map at the top.
   This is powered by **Google Business Profile (GBP)**, *not* your website. This is
   almost certainly where the competitor is beating you.
2. **The blue links (organic results)** — powered by your website. This is what the
   code in this repo controls.

**You can have a perfect website and still lose**, because ~70% of local clicks go to
the Map Pack. So the single highest-impact action is **owning and optimising your
Google Business Profile**. The website supports it; it doesn't replace it.

> **The 3 levers that decide local ranking, in order of impact:**
> 1. **Google Business Profile** (claimed, complete, correct category, active)
> 2. **Reviews** (quantity, recency, rating, replies) — the competitor likely has more
> 3. **NAP consistency + citations** (your Name/Address/Phone identical everywhere online)
>
> The website (this repo) reinforces all three but is roughly lever #4.

---

## Working as the SEO agency — access you need (🧑‍💼 do this first of all)

You don't own the business or its Google account, and **you don't need to**. The owner
keeps his account and **grants you delegated access** so you can do the work properly.
Get these three before anything else — without them you're blocked.

### 1. Google Business Profile → ask to be added as a **Manager**
Ask for **Manager**, *not* Owner. Manager lets you do everything SEO needs — fix the pin,
set categories, edit info, post, reply to reviews, upload photos, read Performance/insights.
Only the Primary Owner can delete the listing or change users; that stays with the client.

**Send the owner these exact steps:**
> 1. Open your Business Profile (search your business name in Google while signed in, or go to business.google.com).
> 2. Go to **Menu / Business Profile settings → "People and access"**.
> 3. Click **Add**, enter this email: `__your-agency-gmail@gmail.com__`, set the role to **Manager**, and click **Invite**.
> 4. That's it — I'll accept the invite from my side.

### 2. Google Search Console → ask to be added as a **user**
This is where you submit the sitemap and track "Ajman" rankings.
> Owner: in Search Console → **Settings → Users and permissions → Add user** → enter my email → permission **Full**.

### 3. Analytics (Plausible / GA4) → ask for view access
So you can see which pages get traffic and what's converting.

### Do's & don'ts
- ✅ Use a **dedicated agency Gmail** for all clients — clean handover, nothing tied to your personal account.
- ✅ Ask for **Manager**, not Owner — professional norm; keeps the client in control.
- ❌ **Never** log in with the owner's password or have him hand over credentials. Delegated
  access is safer, Google-compliant, and survives his password changes.
- 🔁 One step only the **owner** can do: if Google asks to **re-verify** after the pin move
  (postcard / video / phone), that may land on his device — keep him on standby for it.

Once you're a **Manager**, every 👤 item below (fix the pin, category, photos, reviews,
posts) is something **you** can do directly.

---

## 🚨 Critical fixes (do these this week)

These are known issues that actively hurt local ranking right now.

| # | Issue | Who | Action |
|---|-------|-----|--------|
| C1 | **Google Maps pin is in the wrong country (showing in California).** A wrong pin destroys local ranking and sends customers nowhere. | 👤 | In Google Business Profile → **Edit profile → Location → move the pin** to the real shop at Nazir Plaza, Al Mowaihat 3, Ajman. Then request re-verification if asked. |
| C2 | **Exact coordinates are placeholders** in the code (`CONTACT.geo` in `src/data/site.js`, marked `[CONFIRM]`). | 🛠️ | Get the real lat/lng from Google Maps (right-click the shop → copy coordinates) and replace `geo: { lat, lng }`. The same numbers feed the `LocalBusiness` schema + map. |
| C3 | **No reviews / fewer reviews than the competitor.** The on-site testimonials are placeholders and are correctly hidden until real ones exist. | 👤 | Start collecting Google reviews now (see Level 2). This is the #1 reason competitors win the Map Pack. |
| C4 | **Business Profile may be unclaimed or incomplete.** | 👤 | Claim/verify it, set the primary category to **"Typing service"** (and add secondary categories — see Level 1). |

---

## Is the Google Business Profile already claimed? (read before Level 1)

If a profile already exists, first work out **who controls it** — the next steps differ.

### Case A — it's already claimed by *you* (the real owner) ✅
Good news: the hardest gate (claim + verification) is done, so **skip "claim it" and go
straight to optimising**. "Claimed" ≠ "ranking" — the wins still come from completeness,
reviews and activity. On the existing profile:
- [ ] **Fix the pin first** — Edit profile → Location → drag the pin to the real shop
      (this is where the "showing in California" problem lives; see C1).
- [ ] **Primary category = "Typing service"** + add secondaries (a wrong/weak category
      is a top reason a competitor outranks you even when you own the profile).
- [ ] Confirm **NAP matches the website character-for-character**.
- [ ] Fill in **hours, photos, all 15 services, attributes, description**.
- [ ] **Manage users** → make sure *you* are the **primary owner**; remove any old
      agency or ex-employee who still has access.
- [ ] Then continue with Level 2 (reviews) and Level 3 (posts/activity).

### Case B — it's claimed by *someone else* (ex-employee, past agency, squatter)
Get control back **before** optimising:
- [ ] On the listing → **"Own this business?" / "Request access."** Google emails the
      current manager; they have 7 days to respond.
- [ ] If they don't respond, you can **claim it after the waiting period**; if they
      refuse, use Google's **dispute/appeal** flow (prove ownership with trade licence,
      storefront photos, a utility bill, etc.).
- [ ] If it's a **duplicate** created by a competitor/spammer, report it via
      **"Suggest an edit."**

> **Reality check:** even a perfectly owned + optimised profile can sit *below* a
> competitor because of **(1) more/older reviews** and **(2) proximity** (Google ranks
> partly on how close the searcher is to your address). You can't change proximity, but
> out-reviewing them and staying more complete/active is what closes the gap.

---

## Level 1 — Basics (foundation: get found at all)

### A. Google Business Profile (👤 — most important)
> If the profile already exists, see **"Is it already claimed?"** above first — you may
> skip claiming and jump to the optimisation items below.

- [ ] **Claim & verify** the profile at [business.google.com](https://business.google.com)
      *(skip if already owned by you — Case A above)*.
- [ ] **Primary category: "Typing service"**. Add relevant **secondary categories**:
      *Visa consultant, Business management consultant, Translator, Notary public,
      Insurance agency, Tax consultant.* (Categories are a top-3 ranking factor —
      match what the competitor uses, then add more.)
- [ ] **Name** = exactly `Safari Typing Services` (don't stuff keywords into the name —
      it can get you suspended; categories do that job).
- [ ] **Address** = `Nazir Plaza Building, Shop 4, Al Mowaihat 3, Ajman` — identical to the website.
- [ ] **Phone** = `+971 6 544 7665` (the landline used on the site as primary).
- [ ] **Website** = `https://www.safaritypingservices.com`.
- [ ] **Hours** = match the site exactly (Mon–Thu 8–2 & 5–10, Fri 8–12 & 5–10,
      Sat 9–2 & 5–10, **Sun closed**).
- [ ] **Photos**: add 10+ real photos — storefront, the Shop 4 sign, counter, team,
      logo. Profiles with photos get far more calls/clicks.
- [ ] **Services**: list all 15 service areas (matches the website's categories).
- [ ] **Attributes**: languages (English, Arabic, Hindi, Malayalam, Urdu), "online
      appointments", "on-site services", etc.

### B. Search Console & Bing (👤/🛠️)
- [ ] Verify the site in **Google Search Console** (`search.google.com/search-console`).
- [ ] Submit the sitemap: `https://www.safaritypingservices.com/sitemap.xml`.
- [ ] Repeat in **Bing Webmaster Tools** (Bing/Edge + ChatGPT search pull from here).
- [ ] In Search Console, use **URL Inspection → Request indexing** for the homepage
      and the top service pages so they get crawled quickly.

### C. Technical on-page (🛠️ — already done in this repo ✅)
These are already implemented — listed so you know the foundation is solid:
- ✅ **Pre-rendering (SSG)** — every route ships real HTML with its own `<head>` + JSON-LD.
- ✅ **Per-page titles & descriptions**, all keyworded with "Ajman".
- ✅ **Canonical tags**, Open Graph + Twitter cards, 1200×630 share image.
- ✅ **Sitemap.xml** (22 URLs) + **robots.txt** pointing at it.
- ✅ **Structured data**: `LocalBusiness` (with hours, geo, languages), `BreadcrumbList`,
      `FAQPage`, `Service` per category page, and now an `OfferCatalog` of all 15 services.
- ✅ **Analytics** (Plausible) wired in `index.html` — *create the property in the
      Plausible dashboard so it records.*

---

## Level 2 — Intermediate (start winning Ajman)

### D. Reviews — the lever that beats the competitor (👤)
- [ ] **Get your Google review short link**: GBP → "Ask for reviews" → copy link.
- [ ] **Ask every happy customer**, every day. A small printed **QR code** at the
      counter + a WhatsApp follow-up message is the easiest system.
- [ ] **Aim to out-pace the competitor**: if they have 40 reviews, plan to pass them.
      Recency and steady flow matter as much as the total.
- [ ] **Reply to every review** (good and bad), ideally mentioning the service +
      "Ajman" naturally ("Thank you for choosing our Ajman typing centre for your
      Emirates ID renewal").
- [ ] **Never buy fake reviews** — Google detects and penalises them, and the site
      correctly refuses to publish invented testimonials.
- [ ] Once you have real reviews, paste a few into `REVIEWS` in `src/data/site.js`
      and set `placeholder: false` so they appear on the homepage (🛠️).

### E. NAP consistency & citations (👤)
"NAP" = **N**ame, **A**ddress, **P**hone. Google trusts a business whose details are
**identical everywhere**. Inconsistent listings split your authority.
- [ ] Use this exact block everywhere online:
      ```
      Safari Typing Services
      Nazir Plaza Building, Shop 4, Al Mowaihat 3, Ajman, UAE
      +971 6 544 7665
      https://www.safaritypingservices.com
      ```
- [ ] **Create/claim listings** on UAE directories: Yalla.ae, Connect.ae,
      Yellowpages.ae, Dubizzle (business), Google Maps, Apple Maps, Bing Places,
      Facebook, Instagram (already linked in the footer).
- [ ] Make sure the **phone and address match the website character-for-character**
      (the site is the single source of truth — `src/data/site.js`).

### F. On-page content tuning (🛠️/👤)
- [ ] **Keep the keyworded titles** but consider also targeting the American spelling
      **"Typing Center"** (UAE searchers use both "Centre" and "Center"). The schema
      now includes `alternateName: "Safari Typing Center"` to catch this — good.
- [ ] **Add a short "Serving Ajman" paragraph** to the homepage or About page naming
      nearby areas you serve (Al Mowaihat, Al Jurf, Al Nuaimiya, Rashidiya, Ajman
      Industrial Area) — local landmark/neighbourhood terms help neighbourhood searches.
- [ ] **Internal links**: the service pages already cross-link — keep that. Link from
      blog/FAQ answers to the relevant service page using descriptive anchor text.
- [ ] **Image alt text**: keep alts descriptive and natural (already done well); where
      sensible, mention Ajman / the service.

### G. Tracking what works (👤/🛠️)
- [ ] Confirm **Plausible** (or swap to GA4) is recording. Watch which pages get traffic.
- [ ] In Search Console → **Performance**, track impressions/clicks for "Ajman" queries
      monthly. This tells you if you're climbing.
- [ ] In GBP → **Performance**, track calls, direction requests and "how customers find you".

---

## Level 3 — Advanced (pull ahead and stay ahead)

### H. Google Business Profile, ongoing (👤)
- [ ] **Post weekly** to GBP (offers, "did you know", service spotlights). Active
      profiles rank better and look alive.
- [ ] **Q&A**: seed and answer common questions on the profile (same ones as the site FAQ).
- [ ] **Products/Services** with prices or "from" pricing where you're comfortable.
- [ ] Enable **messaging** and respond fast (mirrors your WhatsApp-first approach).

### I. Content / local authority (👤/🛠️)
- [ ] Add a simple **blog or "Guides" section** answering real questions:
      "How to renew Emirates ID in Ajman", "Documents for a family visa in the UAE",
      "FEWA connection in Ajman — step by step". These rank for long-tail searches and
      pull people into your service pages.
- [ ] Each guide should **target one keyword**, link to the matching service page, and
      mention Ajman naturally.
- [ ] Write in the site's existing **Title-Case voice** and keep Arabic terms accurate
      (FEWA, Tasheel, Amer, Ajman Sewerage — not Dubai/Sharjah equivalents).

### J. Backlinks (👤 — slow but powerful)
- [ ] Get listed/linked by **local Ajman business directories, chambers, partner
      businesses** (the insurance, travel, attestation partners you work with).
- [ ] Sponsor or get mentioned by a **local community group / school / mosque newsletter**.
- [ ] Each genuine link from a UAE/Ajman site raises your authority vs the competitor.

### K. Performance & Core Web Vitals (🛠️)
- [ ] Run **Lighthouse** (mobile) and **PageSpeed Insights**; aim Performance ≥ 90,
      CLS < 0.1. The site already self-hosts fonts and serves WebP — keep images sized.
- [ ] Make sure the **hero/LCP image loads eagerly** and below-fold images stay lazy.

### L. Advanced schema & entity SEO (🛠️ — partly done ✅)
- ✅ `LocalBusiness` now includes `alternateName`, `description`, `slogan`,
      `knowsLanguage`, `currenciesAccepted`, `hasMap`, expanded `areaServed`, and a
      `hasOfferCatalog` listing all 15 Ajman services.
- [ ] After you have **genuine** Google reviews, you *may* add `aggregateRating` to the
      schema — **only with real numbers**, never invented ones.
- [ ] Validate everything in the **[Rich Results Test](https://search.google.com/test/rich-results)**
      and **[Schema Markup Validator](https://validator.schema.org/)** after each change.
- [ ] Consider splitting EN/AR into separate URLs with `hreflang` *only if* you build a
      full Arabic version (not needed while Arabic is inline).

---

## 🎯 The "beat the competitor in Ajman" checklist (priority order)

Do these in order — each one is higher-impact than the website tweaks:

1. **Fix the Google Maps pin** (it's currently wrong — see C1). Nothing else matters
   until customers and Google can find the real location.
2. **Claim + fully complete the Google Business Profile** with the right category.
3. **Out-review the competitor** — set up a daily review-ask habit (QR + WhatsApp).
4. **Make NAP identical everywhere** and build directory citations.
5. **Post to GBP weekly** and reply to every review.
6. **Submit the sitemap** in Search Console and request indexing.
7. **Add a few local guides/blog posts** targeting Ajman service keywords.
8. **Build a handful of local backlinks.**

If you do 1–4, you'll typically start moving up the Map Pack within a few weeks.

---

## Target keywords (Ajman-focused)

Primary (Map Pack + homepage):
- typing center / centre Ajman · typing services Ajman · typing near me Ajman
- tasheel typing Ajman · amer typing Ajman · government typing Ajman

Service pages (already targeted via each category's `keyword`):
- visa typing Ajman · Emirates ID renewal Ajman · MOHRE / Tasheel labour Ajman
- attestation Ajman / MOFA attestation Ajman · legal translation Ajman
- driving licence services Ajman · FEWA registration Ajman · business setup Ajman
- VAT / corporate tax registration Ajman · PRO services Ajman

Long-tail (blog/FAQ):
- "how to renew Emirates ID in Ajman" · "documents for family visa UAE"
- "FEWA connection Ajman" · "Ajman tenancy contract registration"

---

## Maintenance cadence

| How often | What |
|-----------|------|
| **Daily** | Ask 1–2 happy customers for a Google review; reply to any new review. |
| **Weekly** | One GBP post; check WhatsApp/GBP messages; reply to Q&A. |
| **Monthly** | Check Search Console + GBP performance for "Ajman" queries; add one blog/guide. |
| **Quarterly** | Re-validate schema; refresh photos; audit NAP across directories; check Core Web Vitals. |

---

## What changed in the codebase for this update (🛠️)

These on-page relevance signals were added on 1 July 2026 to support the Ajman ranking goal:

- **`src/data/site.js` → `LOCAL_BUSINESS_JSONLD`**: added `alternateName`
  (incl. "Safari Typing Center" American spelling + Arabic name), a keyword-rich
  `description`, `slogan`, `logo`, `knowsLanguage`, `currenciesAccepted`, `hasMap`,
  and expanded `areaServed` to Ajman + the Northern Emirates.
- **`src/pages/Home.jsx`**: the homepage now emits an enriched `LocalBusiness`
  with a **`hasOfferCatalog`** listing all 15 services (each tied to Ajman and its
  own page) — a strong "this business offers everything, here in Ajman" signal.
- Build verified (`npm run build`) and the schema confirmed in the prerendered
  `dist/index.html`.

> Items still marked `[CONFIRM]` in the code (exact map coordinates, domain email)
> need the owner's real values — see the Critical fixes table above.

---

### Quick reference — where things live in the repo
- Site config / contact / `LocalBusiness` schema → `src/data/site.js`
- Service data + FAQs + keywords → `src/data/content.js`
- Per-page `<head>` / meta / canonical / JSON-LD → `src/components/Seo.jsx`
- Per-page SEO usage → each file in `src/pages/`
- Sitemap → `public/sitemap.xml` · Robots → `public/robots.txt`
- Analytics snippet → `index.html`
