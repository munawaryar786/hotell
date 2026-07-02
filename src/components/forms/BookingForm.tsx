"use client";

import { FormEvent, useState } from "react";
import { branches } from "@/data/branches";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

type Errors = Record<string, string>;

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Errors = {};
    const required = compact
      ? ["fullName", "phone", "branch", "roomPreference"]
      : ["fullName", "phone", "branch", "roomPreference", "moveIn", "message"];

    required.forEach((field) => {
      if (!String(data.get(field) || "").trim()) nextErrors[field] = "This field is required.";
    });
    if (String(data.get("phone") || "").trim().length < 7) nextErrors.phone = "Enter a valid phone number.";
    if (!compact && !data.get("consent")) nextErrors.consent = "Please agree to be contacted about your inquiry.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSuccess(true);
      form.reset();
    } else {
      setSuccess(false);
    }
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-gold">
          <Icon name="CalendarCheck" className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-xl font-black text-primary">{compact ? "Quick Booking Inquiry" : "Hostel Booking Inquiry"}</h2>
          <p className="text-sm text-muted">Demo form only. The team can contact you after submission.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" name="fullName" error={errors.fullName} />
        <Field label="Phone number" name="phone" type="tel" error={errors.phone} />
        {!compact ? <Field label="Email optional" name="email" type="email" /> : null}
        <Select label="Preferred branch" name="branch" error={errors.branch}>
          <option value="">Select branch</option>
          {branches.map((branch) => (
            <option key={branch.id}>{branch.name}</option>
          ))}
          <option>Any Available Branch</option>
        </Select>
        <Select label="Room preference" name="roomPreference" error={errors.roomPreference}>
          <option value="">Select preference</option>
          <option>Shared Room</option>
          <option>Twin Sharing</option>
          <option>AC Room Option</option>
          <option>Any Available Room</option>
        </Select>
        <Field label="Move-in date" name="moveIn" type="date" error={errors.moveIn} />
        {!compact ? (
          <>
            <Select label="Duration of stay optional" name="duration">
              <option value="">Select duration</option>
              <option>1 month</option>
              <option>3 months</option>
              <option>6 months</option>
              <option>Long term</option>
            </Select>
            <Select label="I am optional" name="residentType">
              <option value="">Select type</option>
              <option>Student</option>
              <option>Working professional</option>
              <option>Parent / guardian inquiring</option>
            </Select>
          </>
        ) : null}
        <div className="md:col-span-2">
          <label className="text-sm font-bold text-primary" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={compact ? 3 : 5}
            className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm"
            placeholder="Tell us your preferred branch, room type, and move-in needs."
          />
          {errors.message ? <p className="mt-1 text-xs font-semibold text-accent">{errors.message}</p> : null}
        </div>
        {!compact ? (
          <label className="flex gap-3 text-sm text-muted md:col-span-2">
            <input name="consent" type="checkbox" className="mt-1 h-4 w-4 accent-accent" />
            I agree to be contacted by Kings Hostels about this inquiry.
          </label>
        ) : null}
        {errors.consent ? <p className="text-xs font-semibold text-accent md:col-span-2">{errors.consent}</p> : null}
      </div>

      {success ? (
        <div className="mt-5 rounded-md border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">
          {compact
            ? "Thank you! Your inquiry has been received. Our team will contact you soon."
            : "Thank you! Your hostel inquiry has been received. Our team will contact you shortly."}
        </div>
      ) : null}
      <Button type="submit" className="mt-6 w-full md:w-auto">
        Submit inquiry
      </Button>
    </form>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="text-sm font-bold text-primary" htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} type={type} className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm" />
      {error ? <p className="mt-1 text-xs font-semibold text-accent">{error}</p> : null}
    </div>
  );
}

function Select({ label, name, error, children }: { label: string; name: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-sm font-bold text-primary" htmlFor={name}>
        {label}
      </label>
      <select id={name} name={name} className="focus-ring mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm">
        {children}
      </select>
      {error ? <p className="mt-1 text-xs font-semibold text-accent">{error}</p> : null}
    </div>
  );
}
