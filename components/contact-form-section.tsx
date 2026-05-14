"use client";

import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { useRef, useState } from "react";
import { SITE_CONTACT } from "../lib/site";
import { ActionButton, Container, SectionHeading, SurfaceCard } from "./ui";

const states = [
  "Massachusetts",
  "Connecticut",
  "Rhode Island",
  "New York",
  "New Hampshire",
  "Maine"
] as const;

type FieldProps = {
  label: string;
  children: ReactNode;
  className?: string;
  required?: boolean;
};

function Field({ label, children, className, required = false }: FieldProps) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-medium text-white">
        {label}
        {required ? (
          <span className="ml-1 text-[var(--color-primary)]">*</span>
        ) : null}
      </span>
      {children}
    </label>
  );
}

const inputClassName =
  "w-full rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(8,18,34,0.86)] px-4 py-3 text-sm text-white caret-[var(--color-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] outline-none transition duration-300 placeholder:text-[rgba(151,172,205,0.7)] hover:border-[rgba(130,168,255,0.2)] hover:bg-[rgba(9,20,37,0.92)] focus:border-[rgba(78,148,255,0.48)] focus:bg-[rgba(9,21,39,0.96)] focus:shadow-[0_0_0_1px_rgba(78,148,255,0.2),0_0_0_10px_rgba(33,147,255,0.08),inset_0_1px_0_rgba(255,255,255,0.04)]";

export function ContactFormSection() {
  const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim() ?? "";
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  function resetStatusIfNeeded() {
    setStatus((current) => (current === "idle" ? current : "idle"));
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setSelectedFileName(file?.name ?? null);
    resetStatusIfNeeded();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formEndpoint) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "Northeast Energy Consultants website inquiry");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setSelectedFileName(null);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-shell py-20 md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-12">
        <div className="max-w-xl">
          <SectionHeading
            eyebrow="Contact"
            title="Request a free bill review."
            description="Send a recent utility bill and we'll review available supplier options for your business."
          />
          <div className="mt-6 grid gap-3">
            <a
              href={`mailto:${SITE_CONTACT.email}`}
              className="inline-flex w-fit items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:border-[rgba(78,148,255,0.28)] hover:text-[var(--color-primary)]"
            >
              {SITE_CONTACT.email}
            </a>
            <a
              href={SITE_CONTACT.phoneHref}
              className="inline-flex w-fit items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:border-[rgba(78,148,255,0.28)] hover:text-[var(--color-primary)]"
            >
              {SITE_CONTACT.phoneLabel}
            </a>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-[var(--color-muted)]">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] shadow-[0_0_14px_rgba(33,147,255,0.55)]" />
              <span>No-obligation commercial energy review</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] shadow-[0_0_14px_rgba(33,147,255,0.55)]" />
              <span>Commercial electricity and natural gas accounts only</span>
            </div>
          </div>
        </div>

        <SurfaceCard className="border-[rgba(130,168,255,0.18)] bg-[linear-gradient(155deg,rgba(12,27,49,0.96),rgba(8,18,34,0.96))] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.42)] sm:p-7">
          <div className="mb-7">
            <h3 className="font-[var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-white">
              Send us your account details
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
              Send a recent utility bill and we'll review available supplier
              options for your business.
            </p>
          </div>

          <form
            className="grid gap-4 md:grid-cols-2"
            onChange={resetStatusIfNeeded}
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
          >
            <Field label="Full name" required>
              <input
                type="text"
                name="full_name"
                placeholder="Jane Smith"
                required
                className={inputClassName}
              />
            </Field>
            <Field label="Business name" required>
              <input
                type="text"
                name="business_name"
                placeholder="Acme Manufacturing"
                required
                className={inputClassName}
              />
            </Field>
            <Field label="Email" required>
              <input
                type="email"
                name="email"
                placeholder="jane@company.com"
                required
                className={inputClassName}
              />
            </Field>
            <Field label="Phone" required>
              <input
                type="tel"
                name="phone"
                placeholder="(978) 555-1234"
                required
                className={inputClassName}
              />
            </Field>
            <Field label="State" required>
              <select
                name="state"
                defaultValue=""
                required
                className={`${inputClassName} appearance-none pr-10`}
              >
                <option value="" disabled>
                  Select state
                </option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Utility provider" required>
              <input
                type="text"
                name="utility_provider"
                placeholder="Eversource, National Grid, NYSEG, Unitil..."
                required
                className={inputClassName}
              />
            </Field>
            <Field label="Message" className="md:col-span-2" required>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your location, renewal timing, or what you'd like us to review."
                required
                className={`${inputClassName} resize-none`}
              />
            </Field>
            <div className="md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-white">
                Upload utility bill
              </span>
              <input
                ref={fileInputRef}
                type="file"
                name="utility_bill"
                accept=".pdf,.png,.jpg,.jpeg"
                className="sr-only"
                onChange={handleFileChange}
              />
              <div className="rounded-[1.5rem] border border-dashed border-[rgba(130,168,255,0.28)] bg-[rgba(8,18,34,0.62)] p-4 transition duration-300 hover:border-[rgba(78,148,255,0.35)] hover:bg-[rgba(9,20,37,0.72)]">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-medium text-white">
                      Add a recent utility bill
                    </div>
                    <div className="mt-1 text-sm text-[var(--color-muted)]">
                      PDF, PNG, or JPG.
                    </div>
                    <div className="mt-2 text-xs leading-5 text-[var(--color-muted)]">
                      Utility bill upload is optional. You can submit the form
                      first and send documents later.
                    </div>
                    {selectedFileName ? (
                      <div className="mt-2 text-xs font-medium text-[var(--color-primary)]">
                        Selected file: {selectedFileName}
                      </div>
                    ) : null}
                  </div>
                  <ActionButton
                    type="button"
                    variant="secondary"
                    className="px-5 py-2.5 text-[13px]"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {selectedFileName ? "Change Utility Bill" : "Upload Utility Bill"}
                  </ActionButton>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col gap-4 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="text-sm leading-6 text-[var(--color-muted)]">
                  Send a recent utility bill and we'll review available
                  supplier options for your business.
                </p>
                <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">
                  Your information is used only to review your commercial
                  energy options. We do not sell your information or share it
                  with utilities without your permission.
                </p>
                <div aria-live="polite" className="mt-3 min-h-6 text-sm">
                  {status === "success" ? (
                    <p className="text-[var(--color-primary)]">
                      Thanks &mdash; your request was sent. We&apos;ll follow up
                      shortly.
                    </p>
                  ) : null}
                  {status === "error" ? (
                    <p className="text-[#f0b4b4]">
                      Something went wrong. Please email{" "}
                      <a
                        href={`mailto:${SITE_CONTACT.email}`}
                        className="font-medium text-white transition duration-300 hover:text-[var(--color-primary)]"
                      >
                        {SITE_CONTACT.email}
                      </a>{" "}
                      or call/text{" "}
                      <a
                        href={SITE_CONTACT.phoneHref}
                        className="font-medium text-white transition duration-300 hover:text-[var(--color-primary)]"
                      >
                        {SITE_CONTACT.phoneDisplay}
                      </a>
                      .
                    </p>
                  ) : null}
                </div>
              </div>
              <ActionButton
                type="submit"
                disabled={status === "submitting"}
                className="px-6 py-3"
              >
                {status === "submitting"
                  ? "Sending..."
                  : "Request Free Bill Review"}
              </ActionButton>
            </div>
          </form>
        </SurfaceCard>
      </Container>
    </section>
  );
}
