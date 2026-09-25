/** Acuity / Squarespace Scheduling URLs from Vercel env (see `.env.example`). */
export const ACUITY = {
  adultOnboarding:
    process.env.NEXT_PUBLIC_ACUITY_ADULT_URL?.trim() || "",
  athleteOnboarding:
    process.env.NEXT_PUBLIC_ACUITY_ATHLETE_URL?.trim() || "",
  memberLogin:
    process.env.NEXT_PUBLIC_ACUITY_MEMBER_LOGIN_URL?.trim() || "",
} as const;

export const ONBOARDING_PATHS = {
  adultIntake: "/adults-intake-1",
  athleteIntake: "/athletes-intake",
} as const;

/** In-page scheduler anchors on program marketing pages */
export const ONBOARDING_SECTION_IDS = {
  adult: "book-adult-onboarding",
  athlete: "book-athlete-onboarding",
} as const;
