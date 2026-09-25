import { IntakePage } from "@/components/public/intake-page";
import { ACUITY } from "@/lib/integrations";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Adult Program Onboarding",
  description:
    "Book your Adult Program Onboarding Call with Strength For Today Training.",
  path: "/adults-intake-1",
});

const steps = [
  {
    title: "Book Adult Program Onboarding Call",
    body:
      "Answer a few basic questions, then book a time for us to connect by phone.",
  },
  {
    title: "Onboarding call",
    body:
      "Sam will call at your scheduled time to get to know you and schedule your starting point session.",
  },
  {
    title: "Starting point session (30–40 minutes)",
    body:
      "No workout — a conversation about you, your goals, and how SFT can help. If you join, we build your progress plan and get you ready to train.",
  },
  {
    title: "30-day Jumpstart",
    body:
      "New adult members begin with a Jumpstart package before longer-term membership fit.",
  },
];

export default function AdultsIntakePage() {
  return (
    <IntakePage
      title="Adult onboarding"
      intro="How sign up works for the adult program at Strength For Today."
      steps={steps}
      scheduleUrl={ACUITY.adultOnboarding}
      scheduleTitle="Adult Program Onboarding Call"
    />
  );
}
