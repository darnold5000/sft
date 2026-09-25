import { Eyebrow } from "@/components/public/eyebrow";
import { Section } from "@/components/public/section";
import { buttonLinkClass } from "@/components/ui/button";
import { ACUITY } from "@/lib/integrations";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Member Login",
    description:
      "Existing Strength For Today members — access your account to book sessions and manage appointments.",
    path: "/member-login",
  }),
  robots: { index: false, follow: false },
};

export default function MemberLoginPage() {
  const memberSchedulerUrl = ACUITY.memberLogin;

  return (
    <Section className="bg-black pb-24 pt-16 sm:pb-28 sm:pt-20">
      <div className="mx-auto max-w-xl">
        <Eyebrow tone="muted">Clients</Eyebrow>
        <h1
          className="mt-3 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl"
        >
          Member login
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Already an SFT member? Access your account to book sessions and manage
          your appointments.
        </p>

        {memberSchedulerUrl ? (
          <>
            <a
              href={memberSchedulerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonLinkClass("default", "lg")} mt-10 font-display uppercase tracking-wide`}
            >
              Open member login
              <ArrowRight className="size-5" aria-hidden />
            </a>
            <p className="mt-5 text-sm leading-relaxed text-neutral-500">
              On the scheduling page, select &ldquo;Login&rdquo; in the
              upper-right to access your account.
            </p>
          </>
        ) : (
          <p className="mt-8 text-sm text-muted-foreground">
            Member scheduling is not configured yet. Please contact SFT for
            help signing in.
          </p>
        )}
      </div>
    </Section>
  );
}
