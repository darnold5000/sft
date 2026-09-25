/** Acuity / Squarespace Scheduling URLs from Vercel env (see `.env.example`). */
export const ACUITY = {
  adultOnboarding:
    process.env.NEXT_PUBLIC_ACUITY_ADULT_URL?.trim() || "",
  athleteOnboarding:
    process.env.NEXT_PUBLIC_ACUITY_ATHLETE_URL?.trim() || "",
  memberLogin:
    process.env.NEXT_PUBLIC_ACUITY_MEMBER_LOGIN_URL?.trim() || "",
  /** Main business scheduler (all appointment types + client Login control) */
  memberSchedulerEmbed:
    process.env.NEXT_PUBLIC_ACUITY_MEMBER_SCHEDULER_EMBED_URL?.trim() ||
    "https://app.acuityscheduling.com/schedule/e4690836",
} as const;

export const ONBOARDING_PATHS = {
  adultIntake: "/adults-intake-1",
  athleteIntake: "/athletes-intake",
} as const;
