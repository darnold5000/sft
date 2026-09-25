"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { buttonLinkClass } from "@/components/ui/button";

type Props = {
  scheduleUrl: string;
  title: string;
};

declare global {
  interface Window {
    AcuityScheduling?: {
      embed: (opts: { url: string; iframe?: string }) => void;
    };
  }
}

export function AcuityEmbed({ scheduleUrl, title }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!scheduleUrl || !iframeRef.current) return;

    const scriptId = "acuity-embed-script";
    const existing = document.getElementById(scriptId);
    const run = () => {
      window.AcuityScheduling?.embed({
        url: scheduleUrl,
        iframe: iframeRef.current?.id,
      });
    };

    if (existing) {
      run();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://embed.acuityscheduling.com/js/embed.js";
    script.async = true;
    script.onload = run;
    document.body.appendChild(script);
  }, [scheduleUrl]);

  if (!scheduleUrl) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
        <p className="mb-4">
          Scheduling is not configured yet. Add the public Acuity URL to{" "}
          <code className="rounded bg-muted px-1">NEXT_PUBLIC_ACUITY_ADULT_URL</code>{" "}
          or{" "}
          <code className="rounded bg-muted px-1">NEXT_PUBLIC_ACUITY_ATHLETE_URL</code>{" "}
          in <code className="rounded bg-muted px-1">.env.local</code>. Squarespace
          loads these URLs dynamically, so they are not available from static HTML.
        </p>
        <Link href="/contact-us" className={buttonLinkClass("secondary")}>
          Contact us for help scheduling
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <iframe
        ref={iframeRef}
        id={`acuity-${title.replace(/\s+/g, "-").toLowerCase()}`}
        title={title}
        width="100%"
        height={800}
        className="min-h-[min(800px,80vh)] w-full border-0"
        allow="payment"
      />
    </div>
  );
}
