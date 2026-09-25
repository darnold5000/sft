import { AcuityEmbed } from "@/components/public/acuity-embed";
import { Section } from "@/components/public/section";
import { ACUITY } from "@/lib/integrations";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Member Login",
    description:
      "Existing Strength For Today members — sign in via Acuity to book sessions and manage appointments.",
    path: "/member-login",
  }),
  robots: { index: false, follow: false },
};

export default function MemberLoginPage() {
  const schedulerUrl = ACUITY.memberSchedulerEmbed;
  const fallbackUrl = ACUITY.memberLogin;

  return (
    <Section className="border-b border-neutral-900 bg-black py-10 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <h1
          className="font-display text-3xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-4xl"
        >
          Member login
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
          Existing members: select{" "}
          <strong className="font-semibold text-neutral-200">Login</strong> in
          the upper-right of the scheduler to access your account and manage
          appointments.
        </p>

        <div className="mt-8 max-w-4xl">
          <AcuityEmbed
            scheduleUrl={schedulerUrl}
            title="Strength For Today member scheduling"
            compact
          />
        </div>

        {fallbackUrl ? (
          <p className="mt-6 max-w-2xl text-sm text-neutral-500">
            <a
              href={fallbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-neutral-300 underline-offset-2 transition hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
            >
              Open Acuity in a new window
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <span className="text-neutral-600">
              {" "}
              if embedded login does not work on your device.
            </span>
          </p>
        ) : null}
      </div>
    </Section>
  );
}
