type Step = { title: string; body: string };

export function ProgramStepsList({
  steps,
  ordered = true,
}: {
  steps: Step[];
  ordered?: boolean;
}) {
  const ListTag = ordered ? "ol" : "ul";
  const listClass = ordered
    ? "list-decimal space-y-6 pl-5"
    : "list-disc space-y-3 pl-5";

  return (
    <ListTag className={`${listClass} text-muted-foreground`}>
      {steps.map((step) => (
        <li key={step.title}>
          <strong className="font-display text-base font-semibold uppercase tracking-wide text-foreground-soft">
            {step.title}
          </strong>
          <p className="mt-2 text-base leading-relaxed">{step.body}</p>
        </li>
      ))}
    </ListTag>
  );
}
