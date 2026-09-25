"use client";

import Link from "next/link";
import { useEffect, useId } from "react";
import { buttonLinkClass } from "@/components/ui/button";

type Props = {
  scheduleUrl: string;
  title: string;
  /** Slightly shorter default height for program pages above the fold */
  compact?: boolean;
};

const EMBED_SCRIPT_BASE = "https://embed.acuityscheduling.com/js/embed.js";

/**
 * Acuity's embed.js only resizes iframes that already load a scheduler URL in `src`.
 * It does not expose AcuityScheduling.embed() — see developers.acuityscheduling.com.
 */
function loadAcuityEmbedScript() {
  const script = document.createElement("script");
  script.src = `${EMBED_SCRIPT_BASE}?_${Date.now()}`;
  script.async = true;
  document.body.appendChild(script);
}

export function AcuityEmbed({ scheduleUrl, title, compact = false }: Props) {
  const reactId = useId().replace(/:/g, "");
  const iframeId = `acuity-iframe-${reactId}`;

  useEffect(() => {
    if (!scheduleUrl) return;

    const frame = requestAnimationFrame(() => {
      loadAcuityEmbedScript();
    });
    return () => cancelAnimationFrame(frame);
  }, [scheduleUrl]);

  if (!scheduleUrl) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
        <p className="mb-4">
          Scheduling is not configured yet. Add the public Acuity URL to{" "}
          <code className="rounded bg-muted px-1">NEXT_PUBLIC_ACUITY_ADULT_URL</code>{" "}
          or{" "}
          <code className="rounded bg-muted px-1">NEXT_PUBLIC_ACUITY_ATHLETE_URL</code>{" "}
          in <code className="rounded bg-muted px-1">.env.local</code> or Vercel.
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
        key={scheduleUrl}
        id={iframeId}
        src={scheduleUrl}
        title={title}
        width="100%"
        height={compact ? 720 : 800}
        className={
          compact
            ? "min-h-[min(720px,72vh)] w-full border-0 bg-white"
            : "min-h-[min(800px,80vh)] w-full border-0 bg-white"
        }
        allow="payment"
      />
    </div>
  );
}
