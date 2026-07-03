"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm({ subject = "General Inquiry" }: { subject?: string }) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name" name="name" />
        <Field label="Phone Number" name="phone" type="tel" />
        <Field label="Email Address" name="email" type="email" />
        <Field label="Subject" name="subject" defaultValue={subject} />
        <div className="md:col-span-2">
          <label htmlFor="message" className="text-sm font-bold text-primary">Message</label>
          <textarea id="message" name="message" required rows={5} className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm" />
        </div>
      </div>
      {sent ? <p className="mt-5 rounded-md border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">Thank you! Your inquiry has been received.</p> : null}
      <Button type="submit" className="mt-6" variant="gold">Send Inquiry</Button>
    </form>
  );
}

function Field({ label, name, type = "text", defaultValue }: { label: string; name: string; type?: string; defaultValue?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-bold text-primary">{label}</label>
      <input id={name} name={name} type={type} required defaultValue={defaultValue} className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm" />
    </div>
  );
}

