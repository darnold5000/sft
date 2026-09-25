import Link from "next/link";
import { AcuityEmbed } from "@/components/public/acuity-embed";
import { Eyebrow } from "@/components/public/eyebrow";
import { Section } from "@/components/public/section";
import { ACUITY } from "@/lib/integrations";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Member Login",
    description:
      "Existing Strength For Today clients — sign in to book training and manage appointments.",
    path: "/member-login",
  }),
  robots: { index: false, follow: false },
};

export default function MemberLoginPage() {
  return (
    <>
      <Section className="border-b border-neutral-800 bg-black pb-8 pt-12 sm:pt-16">
        <div className="mx-auto max-w-3xl">
          <Eyebrow tone="muted">Clients</Eyebrow>
          <h1
            className="mt-3 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl"
          >
            Member login
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            If you already train with Strength For Today, use the{" "}
            <strong className="font-semibold text-foreground-soft">Login</strong>{" "}
            control in the scheduler below with the email and password you set up
            in Acuity. You can book sessions and manage your appointments from
            there.
          </p>
        </div>
      </Section>

      <Section className="bg-neutral-950 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <AcuityEmbed
            scheduleUrl={ACUITY.memberSchedulerEmbed}
            title="Strength For Today member scheduling"
            compact
          />
        </div>
      </Section>

      <Section className="border-t border-neutral-800 bg-ink py-10">
        <div className="mx-auto max-w-3xl text-center sm:text-left">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Having trouble?
          </p>
          {ACUITY.memberLogin ? (
            <a
              href={ACUITY.memberLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-display text-lg font-semibold uppercase tracking-wide text-white hover:text-neutral-200"
            >
              Open member login in a new window
              <ArrowRight className="size-5" aria-hidden />
            </a>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">
              Contact{" "}
              <Link href="/contact-us" className="text-white underline-offset-2 hover:underline">
                SFT
              </Link>{" "}
              if you need help signing in.
            </p>
          )}
        </div>
      </Section>
    </>
  );
}
