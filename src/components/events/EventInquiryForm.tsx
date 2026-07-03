"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

export function EventInquiryForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-lift">
      <h2 className="text-2xl font-black text-primary">Event Inquiry</h2>
      <p className="mt-2 text-sm leading-6 text-muted">Share your event type, expected guests, and preferred date. The hotel team can confirm availability, setup, and menus.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <Field label="Full Name" name="name" />
        <Field label="Phone Number" name="phone" type="tel" />
        <Field label="Event Date" name="eventDate" type="date" />
        <div>
          <label htmlFor="eventType" className="text-sm font-bold text-primary">Event Type</label>
          <select id="eventType" name="eventType" required className="focus-ring mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm">
            <option value="">Select event type</option>
            <option>Wedding Event</option>
            <option>Corporate Event</option>
            <option>Private Gathering</option>
            <option>Conference</option>
          </select>
        </div>
        <Field label="Expected Guests" name="guests" type="number" />
        <Field label="Email Address" name="email" type="email" />
        <div className="md:col-span-2">
          <label htmlFor="message" className="text-sm font-bold text-primary">Event Notes</label>
          <textarea id="message" name="message" rows={5} className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm" />
        </div>
      </div>
      {sent ? <p className="mt-5 rounded-md border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">Thank you! Your event inquiry has been received.</p> : null}
      <Button type="submit" className="mt-6" variant="gold">Submit Event Inquiry</Button>
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-bold text-primary">{label}</label>
      <input id={name} name={name} type={type} required className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm" />
    </div>
  );
}
