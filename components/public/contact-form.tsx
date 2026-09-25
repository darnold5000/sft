"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonLinkClass } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const INTEREST_OPTIONS = [
  { value: "adult", label: "Adult Training" },
  { value: "athlete", label: "Athlete Performance" },
  { value: "member", label: "Current Member Question" },
  { value: "general", label: "General Question" },
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
  if (!fields.interest) errors.interest = "Please select an option.";
  if (!fields.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Please add a bit more detail (at least 10 characters).";
  }
  return errors;
}

const labelClass =
  "mb-1.5 block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-500";

function fieldClass(hasError: boolean) {
  return cn(
    "w-full rounded-sm border bg-[#181818] px-3 py-2.5 text-sm text-[#f2f2f2] transition",
    "placeholder:text-neutral-500",
    "hover:border-[#4a4a4a]",
    "focus:border-[#c4c4c4] focus:outline-none focus:ring-0",
    "disabled:cursor-not-allowed disabled:opacity-50",
    hasError ? "border-neutral-400" : "border-[#3a3a3a]",
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
    // UI-only until a server handler is wired (see README).
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-4" role="status">
        <CheckCircle2 className="size-8 text-neutral-300" aria-hidden />
        <h2 className="mt-4 font-display text-xl font-semibold uppercase tracking-tight text-white">
          Message received
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-400">
          Thanks for reaching out. Sam and the SFT team will follow up soon.
        </p>
        <button
          type="button"
          className={cn(buttonLinkClass("outline", "sm"), "mt-6")}
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
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
          <p id="contact-name-error" className="mt-1.5 text-xs text-neutral-400">
            {errors.name}
          </p>
        ) : null}
      </div>

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
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          disabled={submitting}
        />
        {errors.email ? (
          <p id="contact-email-error" className="mt-1.5 text-xs text-neutral-400">
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
          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          disabled={submitting}
        />
        {errors.phone ? (
          <p id="contact-phone-error" className="mt-1.5 text-xs text-neutral-400">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-interest" className={labelClass}>
          I&apos;m interested in
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
          <option value="" disabled className="bg-neutral-950 text-neutral-500">
            Select one
          </option>
          {INTEREST_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-neutral-950">
              {opt.label}
            </option>
          ))}
        </select>
        {errors.interest ? (
          <p
            id="contact-interest-error"
            className="mt-1.5 text-xs text-neutral-400"
          >
            {errors.interest}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={fields.message}
          onChange={(e) => update("message", e.target.value)}
          className={cn(fieldClass(Boolean(errors.message)), "min-h-[6.5rem] resize-y")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          disabled={submitting}
        />
        {errors.message ? (
          <p
            id="contact-message-error"
            className="mt-1.5 text-xs text-neutral-400"
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className={cn(
          buttonLinkClass("default", "default"),
          "group mt-2 w-full font-display uppercase tracking-wider focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 sm:w-auto",
        )}
      >
        {submitting ? "Sending…" : "Send message"}
        {!submitting ? (
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        ) : null}
      </button>
    </form>
  );
}
