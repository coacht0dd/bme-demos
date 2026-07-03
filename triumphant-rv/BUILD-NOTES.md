# Triumphant RV Solutions — Demo Build Status
Updated: July 3, 2026 · Session: full demo build (archived chat)
Demo: coacht0dd.github.io/bme-demos/triumphant-rv/ · Todd's repo (NOT client's — production port pending)

## STATUS: Demo functionally complete. Awaiting Todd's Stage 6 sign-off → James review → production port.

## BUILT & LIVE (29 pages)
- Home, About, Plans, Contact, Services hub +6, Service Areas hub +12, Campgrounds hub, Blog +3 posts
- Generator: /home/claude/gen/*.py pattern (data/layout/core_pages/content_pages/local_info) — regenerate + push; NOT in repo (session-local; production port rebuilds in TanStack anyway)
- Hero: LOCKED = hero-c.jpg (Todd's AI "wide-spacing" campfire image; comparison pages retired). Scrim: 82% left → clear right, img opacity .88
- Nav logo: logo-nav.png (line-art wrench-fist, transparent) 70px/52px mobile; old badge = footer/favicon
- About: we/our voice, James & Brenda's preserved wording, james-portrait.jpg (340px), 7-cert auto-scroll marquee (Todd's edited landscape versions), TBF graphic → barberfamilymusic.com, RVTAA logo, RVHelp link
- Campgrounds hub: 19 parks, photo-card backgrounds (Places API + white fade), "Campground Info ↗" buttons (Google place links), lazy Leaflet map w/ clickable pins
- 12 location pages: Things to Do sections (verified links from research report in project files), RV stops, area photos, geo-cluster cross-links (lanier/mountains/i85/athens)
- Homepage: dark static map w/ red 1-hr ring, GBP roof photo, 4 real Google reviews (excl. Todd's own)
- Mobile: topbar 2-line w/ phone on line 2; menu = scrollable, collapsed accordions (+/− toggles), 17.5px, 110px sticky-bar clearance. Hover-open = desktop-only (iOS sticky-hover bug fixed w/ #nav + !important)

## KEY DECISIONS
- Demo is NOINDEXED (remove at production). Forms in demo mode (fake success; wire Formspree/CRM at launch)
- Team voice sitewide ("we/our certified technicians"); James appears only About/reviews/TBF
- Radius: ~1 hour from Gainesville (NOT 35mi). Trip fee: structure only published; recommend to James ~$3/mi past 25mi, emergency ~$150+mileage
- SEO/AEO Stage 7 audit DEFERRED to production build (Todd's call)
- .nojekyll added — fixes recurring stuck GitHub Pages builds. If Pages hangs again: Todd flips Settings→Pages→GitHub Actions

## PENDING
1. Todd: Stage 6 sign-off (mobile menu fix was last item)
2. James review: 15-pt checklist scoped in archived chat — offer open to make Google Doc
3. James intake confirms: story, plan tier pricing, trip fee, domain registrar, Navy details, GBP roof-photo ownership, GBP hours fix ("Open 24hrs" → real hours + 24/7 emergency as service)
4. Blog list for Argeline: DONE → Drive doc 1RaJq-el6gawjJ_CvZRy4NYZNqyd-ktEvgJSC5ynHFrg (20 topics, 3 tiers)
5. Production port: client-owned Lovable+GitHub via remix (NEVER copy repo — breaks sync), rebuild TanStack, then Stage 7 audit + launch sequence
6. Revoke demo PAT after build complete
7. Prefilled intake doc in Drive folder (1O4UrSktRKYpwMMyXF0XbJQ2hk5gZFWNz), doc id 1gPch9jX3Xd67aIngxyyixNaDzsX5tJewY50KUO1-DR8

## VERIFIED FACTS (do not re-research)
(770) 519-2828 call+text · info@triumphantrv.com · 4131 Ashford Way Gainesville 30507 · est. 2025 · RVTAA+NRVTA · Navy vet · 5.0/5 Google (feature: Sigmon, Erath, Nottingham, Bowman) · Honors 10% · Bronze 5/Silver 10/Gold 15 · GBP place_id ChIJ8Zk_tu_x9YgRWpt2nXr2Ubo · rvhelp.com/providers/triumphant-rv-solutions-llc · Atlanta Dragway CLOSED · Commerce KOA → Commerce Station RV Resort
