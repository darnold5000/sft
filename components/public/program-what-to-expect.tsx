import { Eyebrow } from "@/components/public/eyebrow";

export type WhatToExpectStep = {
  title: string;
  body: string;
};

export function ProgramWhatToExpect({ steps }: { steps: WhatToExpectStep[] }) {
  return (
    <div className="border-t border-neutral-800 pt-8">
      <Eyebrow tone="muted">What to expect</Eyebrow>
      <ol className="mt-6 space-y-6">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-b border-neutral-800/80 pb-6 last:border-0 last:pb-0"
          >
            <span
              className="font-display text-3xl font-bold leading-none tracking-tight text-neutral-600"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 pt-0.5">
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-white">
                {step.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
