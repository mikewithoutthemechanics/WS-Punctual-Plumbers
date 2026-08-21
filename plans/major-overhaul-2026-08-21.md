# PP-EDIT1 Major Overhaul Plan

## Objective
Redesign the Punctual Plumbers website with premium styling, remove all emojis, add new pages (blog, legal), fix calculator logic, and improve overall UX — without breaking the build.

---

## 1. Architecture & Import Safety

### Problem to Avoid
Circular dependencies caused by components importing shared data from `App.tsx` while `App.tsx` imports those components.

### Solution
- Create `src/data/gardenImages.ts` — single source of truth for image URLs
- Create `src/components/Icons.tsx` — all premium SVG icons
- No component imports from `App.tsx`; `App.tsx` only imports from `components/` and `pages/`

---

## 2. Remove All Emojis Site-Wide

### Files Affected
- `src/App.tsx` — services array, trust ribbon, nav, footer
- `src/components/TestimonialsSection.tsx` — star ratings, quote icon
- `src/components/CoverageMap.tsx` — map pins, labels
- `src/pages/BlogPage.tsx` — post tags, dates
- `src/pages/PrivacyPolicyPage.tsx` — contact icons
- `src/pages/TermsOfServicePage.tsx` — contact icons

### Replacement Strategy
Replace emojis with inline SVG components from `src/components/Icons.tsx`:
- 🔧 → `Icons.Wrench`
- 🚿 → `Icons.ShowerHead`
- 🌊 → `Icons.DropletSearch`
- 🏗️ → `Icons.Building`
- 🔥 → `Icons.Flame`
- 🧹 → `Icons.Wind`
- 💧 → `Icons.Filter`
- 🚨 → `Icons.AlertTriangle`
- ⭐ → `Icons.Star`
- 🏆 → `Icons.Award`
- 🛡️ → `Icons.Shield`
- 📞 → `Icons.Phone`
- ✉️ → `Icons.Mail`
- 📱 → `Icons.Smartphone`
- 🏠 → `Icons.Home`

---

## 3. Premium Icon System

### New File: `src/components/Icons.tsx`
- 20+ premium SVG icons (stroke-based, consistent 1.8px width)
- Each icon: `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`
- Exported as named components: `Icons.Wrench`, `Icons.Shield`, etc.
- Color-coded via `text-aqua` or inline `style={{ color: "..." }}`

### Icons to Create
| Emoji | Icon Name | Use Case |
|-------|-----------|----------|
| 🔧 | Wrench | General Plumbing service card |
| 🚿 | ShowerHead | Bathroom Renovations |
| 🌊 | DropletSearch | Leak Detection |
| 🏗️ | Building | New Installations |
| 🔥 | Flame | Geyser Repairs |
| 🧹 | Wind | Drain Cleaning |
| 💧 | Filter | Water Filtration |
| 🚨 | AlertTriangle | Emergency Callouts |
| ⭐ | Star | Testimonial ratings |
| 🏆 | Award | Trust badges |
| 🛡️ | Shield | Guarantees/certifications |
| 📞 | Phone | Contact details |
| ✉️ | Mail | Email contact |
| 📱 | Smartphone | WhatsApp button |
| 🏠 | Home | Service areas |
| 🗺️ | MapPin | Coverage map |
| 💬 | MessageCircle | Testimonials quote |
| 📋 | Clipboard | Jobs completed stats |
| 🔄 | RefreshCw | Carousel/rotation |
| ⚡ | Zap | Fast response/emergency |

---

## 4. Site-Wide Background Color Change

### Current
- Hero gradient: `rgba(7,14,26,...)` to `rgba(16,19,38,1)`
- Sections: `#0A1A2E`, `#072641`, `#141425`
- Footer: `#111428`

### New Premium Palette
| Element | Current | New |
|---------|---------|-----|
| Primary bg | `#0A1A2E` | `#0B1120` |
| Secondary bg | `#072641` | `#0F1729` |
| Tertiary bg | `#141425` | `#0A1220` |
| Footer bg | `#111428` | `#0F1729` |
| Card bg | `rgba(10,22,40,...)` | `rgba(15,25,45,...)` |
| Text primary | `#f6f6f6` | `#f0f4f8` |
| Text secondary | `white/60` | `white/50` |

### Files to Update
- `src/App.tsx` — colors object, all section backgrounds
- `src/components/KnowledgeCarousel.tsx` — section background
- `src/components/TestimonialsSection.tsx` — section + card backgrounds
- `src/components/CoverageMap.tsx` — section + card backgrounds
- `src/components/WaterCalculator.tsx` — section + card backgrounds
- `src/pages/BlogPage.tsx` — all backgrounds
- `src/pages/PrivacyPolicyPage.tsx` — all backgrounds
- `src/pages/TermsOfServicePage.tsx` — all backgrounds

---

## 5. Carousel Redesign (Auto-Rotate Only)

### Current Problems
- Has left/right arrow controls (user wants removed)
- Has click-to-select interaction (user wants removed)
- Has hover-pause (user wants removed)
- Uses emoji for fact icons
- Background too transparent on side cards

### New Design
- **Auto-rotate every 5 seconds** — smooth 0.8s ease transitions
- **Keep minimal indicator dots** — user requested dots
- **No arrows, no hover interaction**
- **Premium icons** — each fact gets an SVG icon from `Icons.tsx`
- **New section background** — `#0B1120` → `#0F1729` gradient
- **Side card opacity** — `0.9` base (was 0.7), decrement `0.1` (was 0.2)
- **Background alpha** — `rgba(10,22,40,0.98)` (was 0.94)

### New File: `src/components/KnowledgeCarousel.tsx`
```tsx
export function KnowledgeCarousel() {
  const [flowIdx, setFlowIdx] = useState(1);
  
  // Auto-rotate only, no hover pause
  useEffect(() => {
    const id = setInterval(() => {
      setFlowIdx(i => i >= paddedFlow.length - 2 ? 1 : i + 1);
    }, 5000);
    return () => clearInterval(id);
  }, [paddedFlow.length]);
  
  // NO: onMouseEnter, onMouseLeave, onClick handlers
  // NO: arrow buttons
  // YES: minimal indicator dots
}
```

### Fact Cards Data (No Emojis)
```tsx
const carouselFacts = [
  { icon: <Icons.WaterDrop />, fact: "Copper pipes last 50+ years...", tag: "MATERIALS" },
  { icon: <Icons.DropletSearch />, fact: "A dripping tap wastes...", tag: "WASTE" },
  { icon: <Icons.DropletSearch />, fact: "Thermal leak detection...", tag: "TECH" },
  { icon: <Icons.Wind />, fact: "70% of Plett homes...", tag: "ROOTS" },
  { icon: <Icons.Shield />, fact: "Our 7-year guarantee...", tag: "GUARANTEE" },
];
```

---

## 6. Testimonials Section Redesign

### Current
- Background: `colors.sand` (`#F5F0E8`) — light beige
- Cards: white with blue borders
- Emoji stars: `⭐⭐⭐⭐⭐`
- Quote icon: emoji-style

### New Design
- **Background**: `#0F1729` (dark navy, matches site)
- **Heading**: gradient text `linear-gradient(98deg, #bdf7ff, #00D2FF, #4ff0b2)`
- **Cards**: dark glass morphism
  - Background: `linear-gradient(170deg, rgba(23,48,76,0.95), rgba(8,24,44,0.95))`
  - Border: `1px solid rgba(0,210,255,0.15)`
  - Quote icon: `Icons.MessageCircle` in aqua/30 opacity
- **Star ratings**: 5× `Icons.Star` in `#00D2FF`
- **Trust badges**: `Icons.Award`, `Icons.Shield`, `Icons.Certificate` in aqua
- **Text colors**: `text-white/90` for names, `text-white/50` for metadata

### New File: `src/components/TestimonialsSection.tsx`

---

## 7. Coverage Map — Spread Town Dots

### Current Problem
Only 4 towns, clustered in middle of map:
- Knysna: lat 44, lon 54
- Plett: lat 38, lon 67
- Wilderness: lat 55, lon 37
- Sedgefield: lat 50, lon 45

### New Design
Keep the same 4 towns, but spread them more evenly along the coastline path:
| Town | Current lat | New lat | Current lon | New lon | Time |
|------|-----|-----|-----|-----|------|
| Mossel Bay | — | 52 | — | 28 | 35 min |
| Hartenbos | — | 50 | — | 31 | 33 min |
| George | — | 48 | — | 58 | 26 min |
| Knysna | 44 | 42 | 54 | 48 | 21 min |
| Sedgefield | 50 | 50 | 45 | 43 | 29 min |
| Wilderness | 55 | 55 | 37 | 35 | 24 min |
| Plettenberg Bay | 38 | 35 | 67 | 72 | 31 min |
| Storms River | — | 32 | — | 78 | 42 min |

### Visual Changes
- Coastline SVG path: extended from `M 70 355...` to `M 55 365...` to accommodate wider spread
- Pin size: `14px` (was 16px) for better density
- Label font: `10px` (was 10.4px)
- Active pin: copper `#CD7F32` (was aqua)
- Inactive pin: aqua `#00D2FF`

### New File: `src/components/CoverageMap.tsx`

---

## 8. Remove "Plumbing That's Actually Fun" Section

### File: `src/App.tsx`
- **Delete lines 641-701** (entire section)
- Removes:
  - Section heading "Plumbing that's actually fun."
  - Water Savings Calculator (will be replaced by new component)
  - Seasonal blog strip (will be moved to /blog page)

### Why Remove
User explicitly stated: "Plumbing that's actually fun is irrelevant and inappropriate"

---

## 9. Water Calculator — Fix Logic

### Current Logic (Broken)
```tsx
const base = people*210 + showers*9 + (garden?650:0);
const saved = Math.round(base * 0.37);
const rand = Math.round(saved * 84 / 1000);
return { litres: saved*30, rand: rand, co2: Math.round(saved*0.018) };
```
**Problems:**
- `showers*9` — 9L per shower is too low (should be ~90L for 10min shower)
- `garden?650:0` — 650L/day for garden is unrealistic for calculator
- `saved*30` — multiplies weekly savings by 30 days (should be ~30.4 days/month)
- `saved*84/1000` — opaque math, not clearly tied to SA water rates
- No breakdown of base consumption vs savings

### New Logic (SA-Based)
```tsx
// SA water usage benchmarks
const LITRES_PER_PERSON_PER_DAY = 210; // SA average
const LITRES_PER_SHOWER = 90; // 10 min @ 9L/min
const GARDEN_LITRES_PER_WEEK = 650; // irrigation weekly

const dailyLitres = people * LITRES_PER_PERSON_PER_DAY;
const showerLitresPerWeek = showersPerWeek * LITRES_PER_SHOWER;
const gardenLitresPerWeek = hasGarden ? GARDEN_LITRES_PER_WEEK : 0;

const weeklyLitres = dailyLitres * 7 + showerLitresPerWeek + gardenLitresPerWeek;
const savedWeekly = Math.round(weeklyLitres * 0.37); // 37% savings
const savedMonthly = savedWeekly * 4.33; // weeks per month

// SA water cost: ~R84 per kilolitre (Garden Route average)
const randPerKL = 84;
const randMonthly = Math.round((savedMonthly / 1000) * randPerKL);

// CO2: 0.018 kg per litre (water treatment + pumping)
const co2Monthly = Math.round(savedMonthly * 0.018);
```

### New File: `src/components/WaterCalculator.tsx`

---

## 10. New /blog Page with Individual Post Pages

### Why
User: "The seasonal tips should be on the /blog page for SEO and AEO not on the main page"

### Structure
- **Listing route**: `/blog`
- **Individual post route**: `/blog/:slug`
- **Layout**: Full page with hero + grid of article cards
- **Articles**: 6 seasonal tips (moved from homepage)
  1. "Knysna pipe freeze protection — 7 low-cost checks" (WINTER)
  2. "Load-shedding geyser timers that actually save" (SUMMER)
  3. "Why Plett homes need copper — not PVC — within 800m of sea" (COASTAL)
  4. "Garden Route water quality report 2025" (WATER QUALITY)
  5. "Forest root intrusion: The silent destroyer of Plett drainage" (DRAINAGE)
  6. "Copper vs PEX for coastal homes: The complete comparison" (MATERIALS)

### Card Design
- Dark glass morphism cards
- Tag badge in aqua
- Title, excerpt, read time, date
- "Read more" link with `Icons.ChevronRight`

### New Files
- `src/pages/BlogPage.tsx` — listing
- `src/pages/BlogPostPage.tsx` — individual post template

---

## 11. Privacy Policy Page

### Requirements
- POPIA compliant (South Africa)
- Covers: Punctual Plumbers, Agentcy.co.za, Integr8 AI
- Covers: employees, owners, contractors, agents
- Must include:
  - Information we collect
  - How we use information
  - POPIA rights (access, correction, erasure, objection, portability, complain)
  - Information sharing/disclosure
  - Data security measures
  - Data retention periods
  - Cookies and tracking
  - Third-party services
  - Contact Information Regulator details

### Route: `/privacy-policy`

### New File: `src/pages/PrivacyPolicyPage.tsx`

---

## 12. Terms of Service Page

### Requirements
- SA Consumer Protection Act 68 of 2008 compliant
- Covers: Punctual Plumbers, Agentcy.co.za, Integr8 AI
- Must include:
  - Services description
  - Quotes and estimates validity
  - Payment terms (residential, commercial, emergency)
  - Warranties and guarantees (7-year workmanship, 10-year coastal)
  - Limitation of liability
  - Client responsibilities
  - Cancellation/rescheduling policy
  - Intellectual property
  - Website use terms
  - Indemnification
  - Governing law (South Africa)
  - Contact information

### Route: `/terms-of-service`

### New File: `src/pages/TermsOfServicePage.tsx`

---

## 13. Footer Updates

### Current Footer (4 columns)
1. Logo + description
2. Services list
3. Route offices (4 locations)
4. Certified

### New Footer (4 columns)
1. Logo + description + **"Website created and managed by Agentcy.co.za"** + **"AI integrations by Integr8 AI"**
2. Services list
3. Contact — single "Garden Route – 083 237 9132" + "Emergency 24/7 – same number"
4. Legal — links to `/privacy-policy` and `/terms-of-service`

### Bottom Bar
- Copyright: `© 2009–2026 Punctual Plumbers (Pty) Ltd | All rights reserved`
- Credit: `Designed & developed by Agentcy.co.za | AI by Integr8 AI`

---

## 14. Routing Setup

### New File: `src/App.tsx` (updated)
- Wrap entire app in `BrowserRouter`
- Add `Routes` and `Route` for:
  - `/` — homepage (existing)
- `/blog` — `BlogPage` (listing)
- `/blog/:slug` — `BlogPostPage` (individual post)
- `/privacy-policy` — `PrivacyPolicyPage`
- `/terms-of-service` — `TermsOfServicePage`
- Update nav links: "Journal" → `/blog`
- Update mobile menu: "Journal" → `/blog`

---

## 15. Implementation Order (Safe Sequence)

### Phase 1: Foundation (No circular deps)
1. Create `src/data/gardenImages.ts`
2. Create `src/components/Icons.tsx`
3. Update `src/App.tsx` imports

### Phase 2: Components (Independent)
4. Create `src/components/KnowledgeCarousel.tsx`
5. Create `src/components/TestimonialsSection.tsx`
6. Create `src/components/CoverageMap.tsx`
7. Create `src/components/WaterCalculator.tsx`

### Phase 3: Pages (Depend on components)
8. Create `src/pages/BlogPage.tsx` — listing
9. Create `src/pages/BlogPostPage.tsx` — individual post template
10. Create `src/pages/PrivacyPolicyPage.tsx`
11. Create `src/pages/TermsOfServicePage.tsx`

### Phase 4: Integration
12. Update `src/App.tsx`:
    - Add routing
    - Remove old sections (carousel, testimonials, map, calculator, "fun plumbing")
    - Insert new components
    - Update footer
13. Remove old inline code blocks

### Phase 5: Verification
14. Run `npm run build` — must succeed
15. Run `npm run dev` — test all routes in browser
16. Check for:
    - No console errors
    - No emojis remaining
    - All routes accessible
    - Mobile responsive

### Phase 6: Deploy
17. Commit to new branch
18. Create PR
19. Deploy to new Vercel project (not overwriting JMS)

---

## 16. Files to Create/Modify

### New Files
| File | Purpose |
|------|---------|
| `src/data/gardenImages.ts` | Shared image URLs |
| `src/components/Icons.tsx` | Premium SVG icon library |
| `src/components/KnowledgeCarousel.tsx` | Auto-rotate carousel |
| `src/components/TestimonialsSection.tsx` | Redesigned testimonials |
| `src/components/CoverageMap.tsx` | Map with existing 4 towns spread evenly along coastline |
| `src/components/WaterCalculator.tsx` | Fixed SA calculator |
| `src/pages/BlogPage.tsx` | Blog listing page |
| `src/pages/BlogPostPage.tsx` | Individual blog post template |
| `src/pages/PrivacyPolicyPage.tsx` | POPIA privacy policy |
| `src/pages/TermsOfServicePage.tsx` | SA ToS |

### Modified Files
| File | Changes |
|------|---------|
| `src/App.tsx` | Routing, emoji removal, component integration, footer update, section removal |
| `src/components/TestimonialsSection.tsx` | Replace emoji stars with `Icons.Star` |
| `src/components/CoverageMap.tsx` | Import `gardenImages` from `../data/gardenImages` |
| `src/pages/PrivacyPolicyPage.tsx` | Replace emoji contacts with `Icons.Phone`/`Icons.Mail` |
| `src/pages/TermsOfServicePage.tsx` | Replace emoji contacts with `Icons.Phone`/`Icons.Mail` |

---

## 17. Risk Mitigation

### Circular Dependencies
- **Rule**: No component imports from `App.tsx`
- **Solution**: Shared data → `src/data/` folder

### Missing Imports
- **Rule**: Every React hook used must be imported explicitly
- **Check**: Run `npm run build` after each phase

### Emoji Leaks
- **Rule**: Grep for emoji ranges after each phase
- **Command**: `grep -r $'[\x{1F300}-\x{1FAFF}]' src/`

### Vercel Deployment
- **Rule**: Always deploy to NEW project, never overwrite
- **Check**: `vercel ls` before deploying

---

## 18. Approval Checklist

Please approve each section before I start:

- [ ] Section 1: Architecture & Import Safety
- [ ] Section 2: Remove All Emojis
- [ ] Section 3: Premium Icon System
- [ ] Section 4: Site-Wide Background Color Change
- [ ] Section 5: Carousel Redesign
- [ ] Section 6: Testimonials Redesign
- [ ] Section 7: Coverage Map Spread
- [ ] Section 8: Remove "Fun Plumbing" Section
- [ ] Section 9: Water Calculator Fix
- [ ] Section 10: New /blog Page
- [ ] Section 11: Privacy Policy Page
- [ ] Section 12: Terms of Service Page
- [ ] Section 13: Footer Updates
- [ ] Section 14: Routing Setup
- [ ] Section 15: Implementation Order
- [ ] Section 17: Risk Mitigation

---

## 19. User Answers

1. **Carousel controls**: Keep minimal indicator dots, remove arrows and hover interaction
2. **Blog URL structure**: Individual pages at `/blog/:slug` plus listing at `/blog`
3. **Company registration number**: Use placeholder `[Company Registration Number]`
4. **Vercel project name**: Create new project (name TBD during deployment)
5. **Git branch**: Create new branch for this overhaul
