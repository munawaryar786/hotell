import Image from "next/image";
import Link from "next/link";
import { navItems, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { telUrl, whatsappUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-primary pb-24 text-white lg:pb-0">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.35fr_0.9fr_1.15fr_1.15fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-14 w-14 overflow-hidden rounded-full border border-white/15 bg-white">
              <Image src={site.logo} alt="Student Point Hostel logo" fill sizes="56px" className="object-cover" />
            </span>
            <div>
              <h2 className="text-2xl font-black">{site.name}</h2>
              <p className="text-sm font-bold uppercase text-gold">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-slate-300">
            Boys hostel and student accommodation in Lahore near Gulberg III, Academy Road, Cavalry Ground, Hajvery University, PAC Gulberg, and 7Up Phattak.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/booking">Book Your Seat</ButtonLink>
            <ButtonLink href={whatsappUrl("Hello Student Point Hostel, I want to inquire about seat availability.")} variant="light">
              WhatsApp
            </ButtonLink>
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
            <Link href="/faq" className="text-sm text-slate-300 transition hover:text-white">
              FAQ
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-gold">Location</h3>
          <div className="mt-4 grid gap-4 text-sm text-slate-300">
            <Link href="/location" className="group rounded-md border border-white/10 p-3 transition hover:border-white/60">
              <span className="block font-bold text-white group-hover:text-gold">Student Point Hostel</span>
              <span className="mt-1 block leading-6">{site.addressSummary}</span>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-gold">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <a className="flex items-center gap-2 hover:text-white" href={telUrl()}>
              <Icon name="Phone" className="h-4 w-4" />
              {site.phone}
            </a>
            <a className="flex items-center gap-2 hover:text-white" href={whatsappUrl("Hello Student Point Hostel, I want to inquire.")}>
              <Icon name="MessageCircle" className="h-4 w-4" />
              WhatsApp Inquiry
            </a>
            <Link className="flex items-center gap-2 hover:text-white" href="/location">
              <Icon name="MapPin" className="h-4 w-4" />
              Get Directions
            </Link>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        © 2026 Student Point Hostel. Favicon recommendation: use the Student Point Hostel logo.
      </div>
    </footer>
  );
}
