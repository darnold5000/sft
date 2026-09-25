"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonLinkClass } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const INTEREST_OPTIONS = [
  { value: "adult", label: "Adult Training" },
  { value: "athlete", label: "Athlete Performance" },
  { value: "other", label: "Something Else" },
] as const;

type Interest = (typeof INTEREST_OPTIONS)[number]["value"];

type FormFields = {
  name: string;
  email: string;
  phone: string;
  interest: Interest | "";
  message: string;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;

const initialFields: FormFields = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

function validate(fields: FormFields): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.name.trim()) errors.name = "Please enter your name.";
  if (!fields.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (fields.phone.trim() && !/^[\d\s().+-]{7,}$/.test(fields.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!fields.interest) errors.interest = "Please select an interest.";
  if (!fields.message.trim()) {
    errors.message = "Please tell us what you're looking for.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Please add a bit more detail (at least 10 characters).";
  }
  return errors;
}

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground";

function fieldClass(hasError: boolean) {
  return cn(
    "w-full border bg-ink/60 px-4 py-3.5 text-base text-foreground-soft transition",
    "placeholder:text-neutral-500",
    "hover:border-neutral-500",
    "focus:border-foreground-soft focus:outline-none focus:ring-2 focus:ring-white/15",
    "disabled:cursor-not-allowed disabled:opacity-50",
    hasError ? "border-neutral-400" : "border-border",
  );
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormFields>(key: K, value: FormFields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(fields);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    // UI-only until a server handler is wired (see README / contact page notes).
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="flex min-h-full flex-col justify-center border border-border bg-card/80 p-8 sm:p-10 lg:p-12"
        role="status"
      >
        <CheckCircle2 className="size-10 text-foreground-soft" aria-hidden />
        <h3 className="mt-6 font-display text-2xl font-semibold uppercase tracking-tight text-foreground">
          Message received
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          Thanks for reaching out. Sam and the SFT team will follow up soon to
          help you find the right next step.
        </p>
        <button
          type="button"
          className={cn(buttonLinkClass("secondary"), "mt-8 w-fit")}
          onClick={() => {
            setSubmitted(false);
            setFields(initialFields);
            setErrors({});
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-border bg-card/80 p-8 sm:p-10 lg:p-12"
      noValidate
    >
      <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-foreground sm:text-3xl">
        Start a conversation
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Share a few details and we will get back to you about adult training,
        athlete performance, or general questions.
      </p>

      <div className="mt-10 space-y-6">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            className={fieldClass(Boolean(errors.name))}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            disabled={submitting}
          />
          {errors.name ? (
            <p id="contact-name-error" className="mt-2 text-sm text-neutral-300">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={fields.email}
              onChange={(e) => update("email", e.target.value)}
              className={fieldClass(Boolean(errors.email))}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={
                errors.email ? "contact-email-error" : undefined
              }
              disabled={submitting}
            />
            {errors.email ? (
              <p
                id="contact-email-error"
                className="mt-2 text-sm text-neutral-300"
              >
                {errors.email}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              Phone
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={fields.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={fieldClass(Boolean(errors.phone))}
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={
                errors.phone ? "contact-phone-error" : undefined
              }
              disabled={submitting}
            />
            {errors.phone ? (
              <p
                id="contact-phone-error"
                className="mt-2 text-sm text-neutral-300"
              >
                {errors.phone}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="contact-interest" className={labelClass}>
            Interest
          </label>
          <select
            id="contact-interest"
            name="interest"
            value={fields.interest}
            onChange={(e) =>
              update("interest", e.target.value as FormFields["interest"])
            }
            className={cn(fieldClass(Boolean(errors.interest)), "appearance-none")}
            aria-invalid={errors.interest ? true : undefined}
            aria-describedby={
              errors.interest ? "contact-interest-error" : undefined
            }
            disabled={submitting}
          >
            <option value="" disabled className="bg-ink text-neutral-400">
              Select one
            </option>
            {INTEREST_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-ink">
                {opt.label}
              </option>
            ))}
          </select>
          {errors.interest ? (
            <p
              id="contact-interest-error"
              className="mt-2 text-sm text-neutral-300"
            >
              {errors.interest}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Tell us what you&apos;re looking for
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={fields.message}
            onChange={(e) => update("message", e.target.value)}
            className={cn(fieldClass(Boolean(errors.message)), "resize-y min-h-[8rem]")}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            disabled={submitting}
          />
          {errors.message ? (
            <p
              id="contact-message-error"
              className="mt-2 text-sm text-neutral-300"
            >
              {errors.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className={cn(
            buttonLinkClass("default", "lg"),
            "group w-full sm:w-auto",
          )}
        >
          <span className="uppercase tracking-wider">
            {submitting ? "Sending…" : "Send message"}
          </span>
          {!submitting ? (
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          ) : null}
        </button>
      </div>
    </form>
  );
}
