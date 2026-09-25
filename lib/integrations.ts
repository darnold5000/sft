/**
 * Acuity URLs are loaded from env. Squarespace embeds these dynamically on the
 * live site; nothing reliable was present in static HTML (data-acuity-url="").
 */
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
