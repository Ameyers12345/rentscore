# RentScore MVP

Netlify-ready Next.js MVP scaffold for the RentScore product vision.

## Included pages

- `/` branded landing page
- `/dashboard` founder demo dashboard
- `/tenant/passport` tenant Trust Passport
- `/landlords/[slug]` verified landlord profile
- `/reviews` mutual reviews hub
- `/properties/[id]` property profile
- `/properties/[id]/maintenance` maintenance workflow
- `/agreements` AI tenancy agreement generator
- `/insurance` insurance / rent guarantee monetisation page
- `/signup` onboarding / waitlist page

## Stack

- Next.js 14 App Router
- Tailwind CSS
- Netlify plugin config included
- Mock data today, Supabase-ready structure tomorrow

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Netlify

1. Create a new site from your Git repo.
2. Netlify will detect `netlify.toml`.
3. Add environment variables from `.env.example`.
4. Swap mock data for Supabase tables and storage.

## Recommended next integrations

- **Auth + DB:** Supabase or Firebase
- **Identity / liveness:** Onfido or Yoti
- **Open Banking affordability:** TrueLayer
- **AI agreements:** OpenAI Responses API or Anthropic
- **Payments / subscriptions:** Stripe
- **Analytics:** PostHog or Mixpanel

## Notes

This is a deployable MVP shell, not a fully regulated production workflow. Legal, compliance, moderation, GDPR controls and scoring logic still need implementation before launch.
