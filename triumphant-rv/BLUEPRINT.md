# Triumphant RV Solutions — Stage 2 Blueprint
**Page structure, features, content mapping & schema plan · Business Masters Enterprises**
*Approve or mark up. Nothing gets built until this is signed off.*

---

## SITEMAP (24 pages)

| # | Page | URL | Type |
|---|------|-----|------|
| 1 | Home | `/` | Core |
| 2 | About | `/about/` | Core |
| 3 | Maintenance Plans | `/plans/` | Core |
| 4 | Contact | `/contact/` | Core |
| 5 | Services Hub | `/services/` | Hub |
| 6 | A/C & Heating | `/services/ac-heating/` | Service |
| 7 | Water Heaters | `/services/water-heaters/` | Service |
| 8 | Tanks & Plumbing | `/services/tanks-plumbing/` | Service |
| 9 | Slide-Outs & Jacks | `/services/slide-outs-jacks/` | Service |
| 10 | Electrical Systems | `/services/electrical/` | Service |
| 11 | Preventive Maintenance | `/services/maintenance/` | Service |
| 12 | Service Areas Hub | `/service-areas/` | Hub |
| 13–24 | Gainesville · Lake Lanier · Buford · Flowery Branch · Dahlonega · Cleveland & Helen · Dawsonville · Cumming · Jefferson · Braselton · Commerce · Athens Area | `/service-areas/[slug]/` | Location |

**Nav (5 items):** Services ▾ · Service Areas ▾ · Plans · About · Contact — plus persistent **Call** button in header.
**Demo build:** static HTML at `coacht0dd.github.io/bme-demos/triumphant-rv/` mirroring these URLs as folders. Production port to TanStack Start in James's repo at SETUP-for-real.

---

## GLOBAL ELEMENTS (every page)

- **Header:** logo (red/black/white badge) · nav · phone `tel:` button `(770) 519-2828`
- **Mobile sticky bar:** Call · Text (`sms:`) · Request Service — thumb-reachable, always visible
- **Emergency ribbon** (thin, above header): "RV emergency? We come to you 24/7 — Call now" ⚠️ *lives everywhere because roadside searches land on random pages*
- **Footer:** NAP (name/address/phone, exact GBP match) · hours (M–F 9–5 office · 24/7 emergency) · service area list (links to all 12) · services list · GBP "Review us" link · FB/IG · veteran-owned + RVTAA/NRVTA badges
- **Schema (global):** `LocalBusiness` (RVRepairShop subtype) with `areaServed` = 12 named areas, `openingHours`, geo, sameAs (GBP/FB/IG). **No self-serving aggregateRating.**
- **Design system:** brand palette black `#111` / red `#d81818` / white; Lucide icons only; no pill badges over H1s, no gradient card stacks, no emoji

---

## PAGE BLUEPRINTS

### 1 · HOME
| Section | Content source | Notes |
|---|---|---|
| Hero | Mockup (approved) + "~1 hour of Gainesville" radius line | H1: mobile RV repair + Gainesville/North GA. Photo: James at work or rig hero. CTAs: Call · Request Service |
| Trust strip | Certs (RVTAA/NRVTA logos), Navy veteran, fully insured, 5.0★ Google | Stars displayed visually, linked to GBP |
| Emergency banner | 24/7 · day or night · extended radius | Red band, high contrast |
| Services grid (6) | Intake's six pillars, links to each service page | One-line benefit each, Lucide icons |
| Why Triumphant | Marketing Engine positioning: honest/certified/mobile-convenience ("keep your RV while we fix it") | 3–4 proof points |
| Reviews | 4 real Google reviews (Sigmon, Erath, Nottingham, Bowman) + "Review us" GBP link | Attributed, dated, 5★ shown |
| Meet James & Brenda teaser | Web banner photo + 2 lines → About | Veteran-owned, husband & wife |
| Service area teaser | Map/list of 12 areas → hub | "Serving RVers within about an hour of Gainesville" |
| FAQ (4 Qs) | AEO rules: answer-first, <60 words | Do you come to me? · Emergency? · Trip fee? · What do you fix? |
| Final CTA + form | Short form (name, phone, city/campground, issue) → Formspree → info@ | Phone-first layout |
| **Schema** | LocalBusiness + FAQPage | Title: "Mobile RV Repair Gainesville GA | Triumphant RV Solutions" |

### 2 · ABOUT
Hero (James & Brenda banner) · story section ⚠️ *James's intake answers; fallback = current site copy* · Navy veteran block (details as James provides) · certifications gallery (real cert photos pulled from Drive) · Barber Family paragraph + photo (no external link) · values (transparent pricing, honest work — from Marketing Treasure Chest) · CTA. **Schema:** AboutPage + Person (James).

### 3 · MAINTENANCE PLANS
Bronze/Silver/Gold cards (current % discounts, "call for pricing") ⚠️ *new tier pricing pending intake §7* · what's included per tier · Honors Program (10% military/veteran/police/fire/teacher) · referral program · seasonal urgency copy ("book spring de-winterization") · FAQ (3 Qs) · CTA. **Schema:** Service + FAQPage.

### 4 · CONTACT
Click-to-call hero · text option · request form (same as Home, full width) · hours · base location + "we come to you" explainer · service radius statement · GBP map embed · emergency instructions. **Schema:** ContactPage.

### 5 · SERVICES HUB
Intro (mobile = we come to you) · 6 service cards with photo/icon → pages · emergency call-out · how it works (call → diagnose → fix at your site) · reviews strip · CTA.

### 6–11 · SERVICE PAGES (template ×6)
| Section | Source |
|---|---|
| H1 + answer block | "[Service] repair & service — at your campsite or driveway, anywhere within about an hour of Gainesville." AEO-first |
| Symptoms list | "Call us when…" — from old site's technical copy + Marketing Engine pain points |
| What we do | Old site detail (anode rods, two-step flush, struvite removal, etc.) — real expertise copy |
| Why mobile matters | No towing, no dealer 6-week wait — Treasure Chest hot buttons |
| Related review | AC pages get Sigmon/Nottingham quotes; others rotate |
| FAQ (3, AEO) | Service-specific |
| Cross-links | Related services + top 3 location pages |
| **Schema** | Service + FAQPage + Breadcrumb |

Notes: fridge/furnace/awning work folds into **Preventive Maintenance** + **A/C & Heating** copy (no extra pages). Emergency jack/slide retraction featured on **Slide-Outs & Jacks**.

### 12 · SERVICE AREAS HUB
Radius statement (~1 hr of Gainesville; farther for emergencies) · 12 area cards → pages · trip fee explainer (structure only: "included within 25 miles; distance-based beyond — quoted when you call") ⚠️ *final numbers pending James* · emergency radius note · CTA.

### 13–24 · LOCATION PAGES (template ×12, each genuinely differentiated)
| Section | Differentiation per city |
|---|---|
| H1 + answer block | "Mobile RV repair in [City] — we come to your campsite, storage lot, or driveway." |
| Local anchor paragraph | Named campgrounds/parks/marinas per area (e.g., Lake Lanier: Margaritaville, Bald Ridge, Shoal Creek; Helen: Unicoi; Athens: Sandy Creek) — real places, verified at build |
| Drive time from Gainesville | Honest estimate each |
| Services in [City] | 6 pillars, city woven naturally |
| Local FAQ (3) | e.g., "Do you service RVs at Lake Lanier campgrounds?" — AEO format |
| Review strip | Real reviews (no fake city attribution) |
| CTA + form | Same relay |
| **Schema** | Service w/ areaServed=[City] + FAQPage + Breadcrumb |

**Anti-doorway rule:** no two location pages share body copy. Each writes to its own campgrounds, landmarks, drive time.

---

## FEATURES & WIRING
- **Forms:** Formspree relay → info@triumphantrv.com (demo + launch; CRM swap later is one commit)
- **Click-to-call / text:** `tel:` + `sms:` → (770) 519-2828, every page
- **GBP:** review link in footer + reviews section; map embed on Contact
- **Booking:** form-as-service-request at launch; scheduler = future quote
- **SEO:** unique titles/meta/OG all 24 pages · sitemap.xml · robots.txt · canonicals
- **AEO:** answer blocks on all service + location pages · FAQPage schema sitewide · entity-consistent NAP

## ⚠️ PENDING (flagged in copy, non-blocking)
1. James's story answers (About) — fallback copy ready
2. Plan tier pricing (§7) — % discounts shown meanwhile
3. Trip fee exact numbers — structure-only copy meanwhile
4. RV Owner Classes — **held for later** unless James says launch
5. GBP hours flip to real hours (Todd/James, next GBP session)
6. Navy details beyond "U.S. Navy Veteran"

## BUILD ORDER (Stage 5)
1. Global shell (header/footer/sticky bar/design tokens)
2. Home (port mockup into system)
3. Service template → 6 pages
4. Location template → 12 pages
5. About · Plans · Contact · hubs
6. Schema/sitemap/robots pass → QA (Stage 6)

*Approve as-is or mark changes. Copy drafts (Stage 4) come next gate.*
