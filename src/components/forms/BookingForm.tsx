"use client";

import { FormEvent, useState } from "react";
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
      ? ["fullName", "phone", "moveIn", "roomPreference", "residentType"]
      : ["fullName", "phone", "moveIn", "roomPreference", "residentType", "message"];

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
          <h2 className="text-xl font-black text-primary">{compact ? "Quick Seat Inquiry" : "Book Your Seat at Student Point Hostel"}</h2>
          <p className="text-sm text-muted">Submit a hostel seat inquiry and the team can contact you soon.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name" name="fullName" error={errors.fullName} />
        <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
        {!compact ? <Field label="WhatsApp Number optional" name="whatsapp" type="tel" /> : null}
        <Field label="Move-in Date" name="moveIn" type="date" error={errors.moveIn} />
        <Select label="Room Preference" name="roomPreference" error={errors.roomPreference}>
          <option value="">Select preference</option>
          <option>Available Hostel Seats</option>
          <option>Shared Room</option>
          <option>Comfortable Student Room</option>
          <option>Any Available Option</option>
        </Select>
        <Select label={compact ? "Student / Professional" : "Student / Working Professional"} name="residentType" error={errors.residentType}>
          <option value="">Select type</option>
          <option>Student</option>
          <option>Working Professional</option>
          <option>Parent / Guardian Inquiring</option>
        </Select>
        {!compact ? (
          <>
            <Field label="Nearby Institute / University optional" name="institute" />
            <Select label="Duration of stay optional" name="duration">
              <option value="">Select duration</option>
              <option>1 month</option>
              <option>3 months</option>
              <option>6 months</option>
              <option>Long term</option>
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
            placeholder="Tell us your room preference, move-in needs, and any nearby institute."
          />
          {errors.message ? <p className="mt-1 text-xs font-semibold text-accent">{errors.message}</p> : null}
        </div>
        {!compact ? (
          <label className="flex gap-3 text-sm text-muted md:col-span-2">
            <input name="consent" type="checkbox" className="mt-1 h-4 w-4 accent-accent" />
            I agree to be contacted by Student Point Hostel about this inquiry.
          </label>
        ) : null}
        {errors.consent ? <p className="text-xs font-semibold text-accent md:col-span-2">{errors.consent}</p> : null}
      </div>

      {success ? (
        <div className="mt-5 rounded-md border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">
          Thank you! Your hostel seat inquiry has been received. Our team will contact you soon.
        </div>
      ) : null}
      <Button type="submit" className="mt-6 w-full md:w-auto">
        Submit Inquiry
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
