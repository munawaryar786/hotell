import Image from "next/image";
import Link from "next/link";
import { navItems, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { mailUrl, telUrl, whatsappUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-primary pb-24 text-white lg:pb-0">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.3fr_0.8fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-14 w-14 overflow-hidden rounded-full border border-white/15 bg-white p-1">
              <Image src={site.logo} alt="Hotel Ambassador Lahore logo" fill sizes="56px" className="object-contain" />
            </span>
            <div>
              <h2 className="text-2xl font-black">{site.name}</h2>
              <p className="text-sm font-bold uppercase text-gold">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-slate-300">
            A premium website proposal for Hotel Ambassador Lahore, designed for room bookings, dining inquiries, banquets, meetings, family stays, and business travel.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/booking" variant="gold">Book Your Stay</ButtonLink>
            <ButtonLink href="/banquets-events" variant="light">Plan an Event</ButtonLink>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-gold">Quick Links</h3>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/faq" className="text-sm text-slate-300 transition hover:text-white">FAQ</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-gold">Location</h3>
          <Link href="/location" className="mt-4 block rounded-md border border-white/10 p-3 text-sm text-slate-300 transition hover:border-white/60">
            <span className="block font-bold text-white">Central Lahore Hospitality</span>
            <span className="mt-1 block leading-6">{site.addressSummary}</span>
          </Link>
        </div>

        <div>
          <h3 className="font-bold text-gold">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <a className="flex items-center gap-2 hover:text-white" href={telUrl()}>
              <Icon name="Phone" className="h-4 w-4" />
              {site.phone}
            </a>
            <a className="flex items-center gap-2 hover:text-white" href={whatsappUrl("Hello Hotel Ambassador Lahore, I want to inquire about room availability.")}>
              <Icon name="MessageCircle" className="h-4 w-4" />
              WhatsApp Inquiry
            </a>
            <a className="flex items-center gap-2 hover:text-white" href={mailUrl()}>
              <Icon name="Mail" className="h-4 w-4" />
              {site.email}
            </a>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        (c) 2026 Hotel Ambassador Lahore website proposal/demo. Replace placeholders with verified hotel details before publishing.
      </div>
    </footer>
  );
}
