"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
      <h2 className="text-2xl font-black text-primary">Send a Message</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <Field label="Full name" name="name" />
        <Field label="Phone number" name="phone" type="tel" />
        <Field label="Email optional" name="email" type="email" />
        <div>
          <label className="text-sm font-bold text-primary" htmlFor="branch">
            Branch
          </label>
          <select id="branch" name="branch" className="focus-ring mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm">
            <option>Kings Hostel 1</option>
            <option>Kings Hostel 2</option>
            <option>Any Available Branch</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-bold text-primary" htmlFor="message">
            Message
          </label>
          <textarea id="message" name="message" rows={5} className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm" />
        </div>
      </div>
      {sent ? <p className="mt-4 rounded-md bg-green-50 p-4 text-sm font-semibold text-green-700">Thank you! Your message has been received.</p> : null}
      <Button type="submit" className="mt-6">
        Send message
      </Button>
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-bold text-primary" htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} type={type} required={name !== "email"} className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm" />
    </div>
  );
}
