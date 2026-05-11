# Success Metrics

The Future Soldier 2030 dossier is a portfolio / design-doctrine study, not a transactional product. Page-view counts are weak signal. The metrics below are what actually matter.

## Tracked events

Wired through `scripts/analytics.js` → Vercel Analytics. No cookies, no PII.

| Event | Trigger | What it tells us |
|---|---|---|
| `doctrine-switch` | Click on Doctrine A / B toggle | Is the system's dual-doctrine concept being *understood*, not just consumed? |
| `tab-change` | Click on hardware tab or folder tab | Are visitors exploring beyond the hero, and which doctrine pulls deeper engagement? |
| `mute-toggle` | Click on Sound · On/Off | Does the Web Audio earn its cost? High mute rate = noise. |
| `stamp-applied` | Click on manila folder surface | Are visitors discovering and using the interactive stamp affordance? |
| `outbound-click` | Click on a conversion-block link | Which exit converts: mailto, GitHub, PDF, or /system? |

## Primary KPIs

These are the only numbers worth chasing.

### 1. Doctrine switch rate
**Definition:** `unique visitors with ≥1 doctrine-switch / total unique visitors`
**Target:** ≥ 25%
**Why:** The most distinctive thing about this work is the two-doctrine system. If a visitor never switches, they haven't seen the work. Switch rate is the proxy for whether the concept lands.

### 2. Outbound click rate
**Definition:** `unique visitors with ≥1 outbound-click / total unique visitors`
**Target:** ≥ 15%
**Why:** Real intent. Either they want to talk (mailto), inspect (GitHub), keep the artifact (PDF), or dig into the system (/system). Bounce without click = visitor admired and left.

### 3. PDF download rate
**Definition:** `archive-pdf clicks / total unique visitors`
**Target:** ≥ 8%
**Why:** The PDF is the most portable artifact. A download is a high-signal save — the visitor is taking the work somewhere else.

### 4. /system page visit rate
**Definition:** `unique visitors who reach /system / total unique visitors on /`
**Target:** ≥ 10%
**Why:** Tells us the visitor cared enough about the *system* (vs. just the *artifact*) to keep going. This is the audience that might want to license, fork, or hire.

## Secondary metrics

- **Stamp-applied rate** — playfulness signal. Healthy if 5-15% of Doctrine-B viewers stamp at least once.
- **Mute rate** — should stay below 20% on first visit. Higher means audio is intrusive.
- **Speed Insights LCP, FID, CLS** — performance baseline. Wired via `@vercel/speed-insights` script.

## What we are NOT measuring

- **Time on page** — meaningless for a single-screen visual piece
- **Bounce rate** — many visitors bounce *and* convert (PDF download counts as engagement before bounce)
- **Scroll depth** — already captured by tab-change events
- **Geolocation / device fingerprinting** — out of scope for a privacy-respecting portfolio

## Review cadence

Check the Vercel dashboard:
- **First 24h after launch:** sanity-check that events fire
- **Weekly for 4 weeks:** establish baselines
- **Monthly after that:** track movement vs. targets above

## Dashboard URL

`https://vercel.com/researchdirector/soldier-1/analytics`
