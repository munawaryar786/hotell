"use client";

import { FormEvent, useState } from "react";
import { rooms } from "@/data/rooms";
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
    const required = compact ? ["checkIn", "checkOut", "adults", "roomType"] : ["fullName", "phone", "email", "checkIn", "checkOut", "adults", "roomType", "rooms"];

    required.forEach((field) => {
      if (!String(data.get(field) || "").trim()) nextErrors[field] = "This field is required.";
    });

    const phone = String(data.get("phone") || "").trim();
    if (!compact && phone.length < 7) nextErrors.phone = "Enter a valid phone number.";

    const adults = Number(data.get("adults") || 0);
    if (adults < 1) nextErrors.adults = "Adults must be at least 1.";

    const checkIn = String(data.get("checkIn") || "");
    const checkOut = String(data.get("checkOut") || "");
    if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
      nextErrors.checkOut = "Check-out date must be after check-in.";
    }

    if (!compact && !data.get("consent")) nextErrors.consent = "Please agree to be contacted about your inquiry.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSuccess(true);
      form.reset();
    } else {
      setSuccess(false);
    }
  }

  if (compact) {
    return (
      <form onSubmit={submit} className="rounded-md bg-ivory p-4">
        <div className="grid gap-3 lg:grid-cols-[1fr_1fr_0.8fr_0.8fr_1.1fr_auto] lg:items-end">
          <Field label="Check-in" name="checkIn" type="date" error={errors.checkIn} compact />
          <Field label="Check-out" name="checkOut" type="date" error={errors.checkOut} compact />
          <Field label="Adults" name="adults" type="number" min="1" defaultValue="1" error={errors.adults} compact />
          <Field label="Children" name="children" type="number" min="0" defaultValue="0" compact />
          <Select label="Room Type" name="roomType" error={errors.roomType} compact>
            <option value="">Select room</option>
            {rooms.map((room) => <option key={room.slug}>{room.title}</option>)}
          </Select>
          <Button type="submit" variant="gold" className="h-12 whitespace-nowrap px-6">Check Availability</Button>
        </div>
        {success ? <div className="mt-4 rounded-md border border-green-200 bg-green-50 p-3 text-sm font-semibold text-green-700">Thank you! Your booking inquiry has been received. Our reservation team will contact you soon.</div> : null}
      </form>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-black/10 bg-white p-6 shadow-lift">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-gold">
          <Icon name="CalendarCheck" className="h-5 w-5" />
        </span>
        <div>
          <h2 className="font-display text-2xl font-semibold text-primary">Room Booking Inquiry</h2>
          <p className="text-sm text-muted">Submit your inquiry and the reservation team can contact you soon.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name" name="fullName" error={errors.fullName} />
        <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
        <Field label="Email Address" name="email" type="email" error={errors.email} />
        <Field label="Check-in Date" name="checkIn" type="date" error={errors.checkIn} />
        <Field label="Check-out Date" name="checkOut" type="date" error={errors.checkOut} />
        <Field label="Adults" name="adults" type="number" min="1" defaultValue="1" error={errors.adults} />
        <Field label="Children" name="children" type="number" min="0" defaultValue="0" />
        <Select label="Room Type" name="roomType" error={errors.roomType}>
          <option value="">Select room type</option>
          {rooms.map((room) => <option key={room.slug}>{room.title}</option>)}
        </Select>
        <Field label="Number of Rooms" name="rooms" type="number" min="1" defaultValue="1" error={errors.rooms} />
        <div className="md:col-span-2">
          <label className="text-sm font-bold text-primary" htmlFor="request">Special Request</label>
          <textarea id="request" name="request" rows={5} className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm" />
        </div>
        <label className="flex gap-3 text-sm text-muted md:col-span-2">
          <input name="consent" type="checkbox" className="mt-1 h-4 w-4 accent-accent" />
          I agree to be contacted by Hotel Ambassador Lahore about this inquiry.
        </label>
        {errors.consent ? <p className="text-xs font-semibold text-red-700 md:col-span-2">{errors.consent}</p> : null}
      </div>

      {success ? <div className="mt-5 rounded-md border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">Thank you! Your booking inquiry has been received. Our reservation team will contact you soon.</div> : null}
      <Button type="submit" className="mt-6 w-full md:w-auto" variant="gold">Submit Booking Inquiry</Button>
    </form>
  );
}

function Field({ label, name, type = "text", error, compact = false, ...props }: { label: string; name: string; type?: string; error?: string; min?: string; defaultValue?: string; compact?: boolean }) {
  return (
    <div>
      <label className="text-xs font-black uppercase tracking-[0.14em] text-primary" htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} className={`focus-ring mt-2 w-full rounded-md border border-black/10 bg-white px-4 text-sm ${compact ? "h-12 py-2" : "py-3"}`} {...props} />
      {error ? <p className="mt-1 text-xs font-semibold text-red-700">{error}</p> : null}
    </div>
  );
}

function Select({ label, name, error, children, compact = false }: { label: string; name: string; error?: string; children: React.ReactNode; compact?: boolean }) {
  return (
    <div>
      <label className="text-xs font-black uppercase tracking-[0.14em] text-primary" htmlFor={name}>{label}</label>
      <select id={name} name={name} className={`focus-ring mt-2 w-full rounded-md border border-black/10 bg-white px-4 text-sm ${compact ? "h-12 py-2" : "py-3"}`}>
        {children}
      </select>
      {error ? <p className="mt-1 text-xs font-semibold text-red-700">{error}</p> : null}
    </div>
  );
}

