"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";
import { AcuityEmbed } from "@/components/public/acuity-embed";
import { buttonLinkClass } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  scheduleUrl: string;
  scheduleTitle: string;
};

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function ProgramBookingScheduler({ scheduleUrl, scheduleTitle }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const reveal = useCallback(() => {
    setOpen(true);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open || !panelRef.current) return;

    const frame = requestAnimationFrame(() => {
      const el = panelRef.current;
      if (!el) return;
      const headerOffset = 88;
      const { top, bottom } = el.getBoundingClientRect();
      const partiallyHidden =
        top < headerOffset || bottom > window.innerHeight - 16;
      if (partiallyHidden) {
        el.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "nearest",
        });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [open, reducedMotion]);

  return (
    <div className="mt-8 border-t border-neutral-800 pt-8">
      {!open ? (
        <button
          type="button"
          onClick={reveal}
          className={cn(
            buttonLinkClass("default", "lg"),
            "group font-display uppercase tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80",
          )}
        >
          Book onboarding call
          <ArrowRight
            className="size-5 transition-transform motion-safe:group-hover:translate-x-0.5"
            aria-hidden
          />
        </button>
      ) : null}

      {open && mounted ? (
        <div
          ref={panelRef}
          id="program-scheduler-panel"
          className={cn("mt-6", !reducedMotion && "motion-reveal")}
        >
          {scheduleUrl ? (
            <AcuityEmbed
              scheduleUrl={scheduleUrl}
              title={scheduleTitle}
              compact
            />
          ) : null}

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setMounted(false);
            }}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 transition hover:text-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
          >
            <ChevronUp className="size-3.5" aria-hidden />
            Hide scheduler
          </button>
        </div>
      ) : null}
    </div>
  );
}
