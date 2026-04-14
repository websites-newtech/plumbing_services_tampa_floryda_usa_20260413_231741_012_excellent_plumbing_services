# Design Decisions — Excellent Plumbing Services

## Tech Stack

**Chosen: Static HTML + Alpine.js (via CDN)**

**Reasoning:**
- 8 pages → falls in the 6–15 page range
- No build tools needed → instant deployment to GitHub Pages, Netlify, or any host
- Alpine.js handles: mobile menu toggle, form submission state — lightweight at ~15KB
- No backend required — contact form can be upgraded to Formspree/Netlify Forms with one attribute change
- Zero dependencies to maintain long-term

---

## Design Philosophy

### Aesthetic Direction: Industrial Dark + Copper

**Rejected:** Generic blue plumbing site (literally every competitor uses blue + white)

**Chosen:** 
- **Primary:** Near-black `#1C1C1E` — conveys reliability, strength, seriousness
- **Accent:** Copper/amber `#C87941` — distinctive, warm, premium, industrial
- **Background:** Warm off-white `#F8F6F2` — not sterile pure white; adds character

**Rationale:** Tampa's commercial clients (hotels, restaurants, property managers) are sophisticated buyers. They want a partner that looks as professional as they are. The industrial-dark aesthetic communicates "we take your business seriously" — not "we're your friendly neighborhood plumber."

---

## Typography

**Display font:** Fraunces (serif) — editorial, warm, distinctive
- Headings at font-weight 900 with tight letter-spacing (-0.02 to -0.03em)
- Creates strong visual hierarchy and brand character

**Body font:** DM Sans — clean, highly readable, modern
- 400/500/600 weights for hierarchy
- 1.65–1.7 line-height for comfortable reading

**Why this pairing:**
- Fraunces has personality without being decorative/fussy
- The serif/sans-serif contrast creates editorial sophistication
- Zero overlap with competitor sites in the Tampa plumbing space

---

## Pages Structure

| File | Purpose |
|------|---------|
| `index.html` | Homepage with hero, trust bar, services preview, industries, why us, CTA |
| `about.html` | Company story, values, stats |
| `services.html` | Full service detail with alternating image/text layout |
| `property-managers.html` | Dedicated landing for PM audience (major revenue segment) |
| `contact.html` | Contact form + info + hours |
| `privacy.html` | Privacy policy (legal requirement) |

---

## Key Design Choices

### Hero
- Full-viewport dark overlay on real job photo
- Copper eyebrow label + massive Fraunces 900 headline
- 24/7 badge with green pulse animation (trust signal, immediately visible)
- Stagger animation: eyebrow → headline → body → CTA (100ms increments)

### Trust Bar
- Immediately below hero, full dark background
- 4 key stats in large Fraunces numerals: 24/7, <60min, 100%, 2017
- Copper accent color on numbers — brand consistent

### Services Grid (Dark Section)
- Dark section creates rhythm/contrast in page flow
- Cards with subtle border + hover transform
- Copper icon color throughout

### Property Managers Page
- Dedicated page reflects this is a major B2B segment
- Pain-point framing → solution framing structure
- Specific benefit list (8 items) + specific services grid

### Contact Form
- Alpine.js handles success state (no page reload)
- Service type + property type dropdowns help qualify leads
- Emergency notice prominent — drives phone calls for urgent jobs

---

## Animations

All using custom easing:
- `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` — snappy deceleration
- `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)` — smooth transitions
- `--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)` — spring feel

| Element | Animation | Duration |
|---------|-----------|----------|
| Hero elements | slideUp stagger | 600ms |
| Scroll elements | fade + translateY | 450ms |
| Buttons hover | translateY(-2px) | 120ms |
| Buttons active | scale(0.97) | 80ms |
| Service cards hover | translateY(-4px) | 200ms |
| PM service top border | scaleX | 250ms |

All animations respect `prefers-reduced-motion`.

---

## Accessibility

- Skip link on every page
- `aria-current="page"` on active nav links
- `aria-label` on all icon-only buttons
- `aria-expanded` on mobile menu toggle
- `aria-required` on required form fields
- All images have descriptive `alt` text
- Decorative SVGs have `aria-hidden="true"`
- Focus-visible ring: 2px copper, offset 3px
- Min touch targets: 44×44px (buttons, links)
- Color contrast: dark text on warm off-white (>7:1)

---

## Contact Information (From Old Site)

- **Phone:** (813) 734-9192
- **Email:** excellent@excellentplumbingservices.com
- **Instagram:** @excellentplumbingservices
- **Facebook:** /excellentplumbingserv
- **Hours:** Mon–Fri 8:30am–5:00pm, Sat–Sun Emergency Only
- **Founded:** 2017
- **Service area:** Tampa Bay Area, FL

---

## What to Upgrade Next

1. **Form backend:** Add `action="https://formspree.io/f/YOUR_ID"` to form tag + `method="POST"` — free tier handles 50 submissions/month
2. **Google Maps embed:** Add real embed on contact page (coordinates known: Tampa area)
3. **Real photos:** Replace placeholder image refs with actual job photos
4. **Google Analytics:** Add GA4 tracking snippet before `</head>`
5. **Favicon:** Create SVG favicon based on the copper pipe logo mark
6. **Reviews section:** Add Google review widget or hardcode 3–5 testimonials