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
| `NEXT_PUBLIC_ACUITY_MEMBER_LOGIN_URL` | Member gateway CTA — canonical Acuity scheduler (`/schedule/e4690836`) |
| `NEXT_PUBLIC_SQUARESPACE_STORE_URL` | Operational store (default: `https://sft-training.com/store`) |

### Contact form

The `/contact-us` form is **UI + client validation only** until a server route is added. To deliver submissions to `sam@sft-training.com`, wire a Server Action or `app/api/contact/route.ts` using Resend (or another provider), add `RESEND_API_KEY` and a verified sender domain in Vercel, and point the form `fetch` at that endpoint. Do not commit API keys.

Acuity URLs are read at build time from the vars above. Embeds use an iframe `src` plus `embed.acuityscheduling.com/js/embed.js` (see `components/public/acuity-embed.tsx`). Schedulers appear on `/adults` and `/athletes` and on legacy `/adults-intake-1` and `/athletes-intake`. `/member-login` embeds the member scheduler with a top-level Acuity fallback link.

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
