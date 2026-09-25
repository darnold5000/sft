import { IntakePage } from "@/components/public/intake-page";
import { ACUITY } from "@/lib/integrations";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Athlete Program Onboarding",
  description:
    "Start athlete onboarding with Strength For Today — intake, call, and assessment.",
  path: "/athletes-intake",
});

const steps = [
  {
    title: "Athlete intake form",
    body: "Parent contact information and athlete details (parent info, not the athlete’s).",
  },
  {
    title: "Schedule your call",
    body: "Review intake answers and book your athlete’s assessment.",
  },
  {
    title: "Assessment & consultation",
    body:
      "35–40 minutes of testing and training, then discuss results and membership options.",
  },
];

export default function AthletesIntakePage() {
  return (
    <IntakePage
      title="Athlete onboarding"
      intro="How sign up works for youth and high school athletes at Strength For Today."
      steps={steps}
      scheduleUrl={ACUITY.athleteOnboarding}
      scheduleTitle="Athlete Program Onboarding Call"
    />
  );
}
