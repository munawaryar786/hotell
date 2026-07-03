import Image from "next/image";
import Link from "next/link";
import { navItems, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { hasEmail, hasPhone, hasWhatsApp, mailUrl, telUrl, whatsappUrl } from "@/lib/utils";

export function Footer() {
  const rooms = ["Standard Room", "Deluxe Room", "Executive Room", "Family Room", "Business Suite", "Ambassador Suite"];

  return (
    <footer className="bg-black pb-24 text-white lg:pb-0">
      <Container className="grid gap-10 py-16 md:grid-cols-[1.25fr_0.75fr_0.75fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-14 w-14 overflow-hidden rounded-full border border-gold/30 bg-white p-1">
              <Image src={site.logo} alt="Hotel Ambassador Lahore logo" fill sizes="56px" className="object-contain" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-semibold">{site.name}</h2>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm leading-7 text-white/65">
            A refined hospitality experience in Lahore for elegant accommodation, dining, events, business travel, and family stays.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/booking" variant="gold">Book Your Stay</ButtonLink>
            <ButtonLink href="/banquets-events" variant="light">Plan an Event</ButtonLink>
          </div>
        </div>

        <div>
          <h3 className="font-bold uppercase tracking-[0.16em] text-gold">Explore</h3>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/65 transition hover:text-gold">{item.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold uppercase tracking-[0.16em] text-gold">Rooms</h3>
          <div className="mt-5 grid gap-3">
            {rooms.map((room) => <Link key={room} href="/rooms" className="text-sm text-white/65 transition hover:text-gold">{room}</Link>)}
          </div>
        </div>

        <div>
          <h3 className="font-bold uppercase tracking-[0.16em] text-gold">Contact</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/65">
            <Link className="flex items-center gap-2 hover:text-gold" href="/location"><Icon name="MapPin" className="h-4 w-4 text-gold" /> {site.addressSummary}</Link>
            {hasPhone ? <a className="flex items-center gap-2 hover:text-gold" href={telUrl()}><Icon name="Phone" className="h-4 w-4 text-gold" /> {site.phone}</a> : null}
            {hasWhatsApp ? <a className="flex items-center gap-2 hover:text-gold" href={whatsappUrl("Hello Hotel Ambassador Lahore, I want to inquire about room availability.")}><Icon name="MessageCircle" className="h-4 w-4 text-gold" /> WhatsApp Reservations</a> : null}
            {hasEmail ? <a className="flex items-center gap-2 hover:text-gold" href={mailUrl()}><Icon name="Mail" className="h-4 w-4 text-gold" /> {site.email}</a> : null}
            {!hasPhone && !hasWhatsApp && !hasEmail ? <Link className="flex items-center gap-2 hover:text-gold" href="/contact"><Icon name="Mail" className="h-4 w-4 text-gold" /> Contact hotel for details</Link> : null}
          </div>
          <div className="mt-7 rounded-lg border border-white/10 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Guest Notes</p>
            <p className="mt-2 text-sm leading-6 text-white/60">Room, dining, meeting, and event details can be confirmed directly with the hotel team.</p>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
        (c) 2026 Hotel Ambassador Lahore. Website proposal/demo for premium hospitality presentation.
      </div>
    </footer>
  );
}
