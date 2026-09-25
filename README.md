# Strength For Today Training (SFT)

Customer-facing marketing site for [Strength For Today Training](https://sft-training.com). Phase 1: branded experience, preserved URL paths, static blog content, and handoffs to **Acuity** (scheduling) and **Squarespace Commerce** (merchandise).

## Setup

```bash
cd "c:\Web projects\sft"
npm install
cp .env.example .env.local
npm run dev
```

## Environment

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (production: `https://sft-training.com`) |
| `NEXT_PUBLIC_ALLOW_INDEXING` | `true` on production marketing deploys |
| `NEXT_PUBLIC_ACUITY_ADULT_URL` | Adult onboarding scheduler embed URL |
| `NEXT_PUBLIC_ACUITY_ATHLETE_URL` | Athlete onboarding scheduler embed URL |
| `NEXT_PUBLIC_ACUITY_MEMBER_LOGIN_URL` | Member login / book training |
| `NEXT_PUBLIC_SQUARESPACE_STORE_URL` | Operational store (default: `https://sft-training.com/store`) |

Acuity URLs are read at build time from the vars above (adult/athlete embed on `/adults-intake-1` and `/athletes-intake`; member login in the site header).

## Blog content

Posts are loaded from `content/blog/source.rss.xml` (exported from the live Squarespace RSS feed).

## Testimonials

Full library in `content/testimonials/data.json`, generated from `content/testimonials/source.txt`:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/build-testimonials-json.ps1
```

## Repository

- **This repo:** `c:\Web projects\sft` → [github.com/darnold5000/sft](https://github.com/darnold5000/sft)
- **DAWG** (`c:\Web projects\dawg`) is reference-only — do not modify for SFT work.

## Deploy

Connect the GitHub repo to Vercel, set env vars, and deploy. Preview deployments stay `noindex` unless `NEXT_PUBLIC_ALLOW_INDEXING=true`.
