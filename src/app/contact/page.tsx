import type { Metadata } from "next";
import { site } from "@/data/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { hasEmail, hasPhone, hasWhatsApp, mailUrl, telUrl, whatsappUrl } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Contact Hotel Ambassador Lahore", "Contact Hotel Ambassador Lahore for reservations, room booking inquiries, event inquiries, address, and directions.", "/contact");

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Contact Hotel Ambassador Lahore" subtitle="Reach reservations, submit a room inquiry, or request banquet and event support." image="/images/ambassador/ambassador-28.jpg" />
      <AnimatedSection className="bg-light">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            {hasPhone ? <ContactCard icon="Phone" title="Reservations" text={site.phone} href={telUrl()} /> : null}
            {hasWhatsApp ? <ContactCard icon="MessageCircle" title="WhatsApp" text="Room and event inquiries" href={whatsappUrl("Hello Hotel Ambassador Lahore, I want to inquire about room availability.")} /> : null}
            {hasEmail ? <ContactCard icon="Mail" title="Email" text={site.email} href={mailUrl()} /> : null}
            {!hasPhone && !hasWhatsApp && !hasEmail ? <ContactCard icon="Mail" title="Contact Hotel" text="Use the inquiry form for reservations, room availability, dining, meetings, and event support." href="#contact-form" /> : null}
            <div className="rounded-lg border border-black/10 bg-white p-5 shadow-soft">
              <Icon name="MapPin" className="h-5 w-5 text-accent" />
              <h2 className="mt-3 font-display text-2xl font-semibold text-primary">Address</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{site.addressSummary}</p>
            </div>
          </div>
          <div id="contact-form"><ContactForm /></div>
        </Container>
      </AnimatedSection>
      <AnimatedSection>
        <Container className="text-center">
          <h2 className="font-display text-4xl font-semibold text-primary">Need Event Support?</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-muted">Send a banquet, wedding, or meeting inquiry and the hotel team can confirm space, menus, dates, and coordination details.</p>
          <div className="mt-6 flex justify-center gap-3"><ButtonLink href="/banquets-events" variant="gold">Event Inquiry</ButtonLink><ButtonLink href="/booking" variant="outline">Room Booking</ButtonLink></div>
        </Container>
      </AnimatedSection>
    </>
  );
}

function ContactCard({ icon, title, text, href }: { icon: string; title: string; text: string; href: string }) {
  return (
    <a href={href} className="focus-ring rounded-lg border border-black/10 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-accent/70">
      <Icon name={icon} className="h-5 w-5 text-accent" />
      <h2 className="mt-3 font-display text-2xl font-semibold text-primary">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
    </a>
  );
}
