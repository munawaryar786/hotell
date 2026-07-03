import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { telUrl, whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "Contact Student Point Hostel Lahore",
  "Contact Student Point Hostel for boys hostel inquiries, WhatsApp, call, booking, and location information in Lahore.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Student Point Hostel"
        subtitle="Call, WhatsApp, or send a message for seat availability, facilities, visit timing, and location details."
        image="/images/student-point-hostel/student-point-seats-available.jpg"
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5">
            {[
              { title: "Call Now", value: site.phone, href: telUrl(), icon: "Phone" },
              { title: "WhatsApp Inquiry", value: "Send a quick seat inquiry", href: whatsappUrl("Hello Student Point Hostel, I want to contact the team."), icon: "MessageCircle" },
              { title: "Get Directions", value: site.addressSummary, href: "/location", icon: "MapPin" },
              { title: "Book Your Seat", value: "Submit hostel seat inquiry", href: "/booking", icon: "CalendarCheck" }
            ].map((item) => (
              <ButtonCard key={item.title} {...item} />
            ))}
          </div>
          <ContactForm />
        </Container>
      </section>
      <section className="bg-light py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Address" title="Student Point Hostel Location" subtitle={site.addressSummary} />
          <MapEmbed title="Student Point Hostel Map" label={site.addressSummary} />
        </Container>
      </section>
    </>
  );
}

function ButtonCard({ title, value, href, icon }: { title: string; value: string; href: string; icon: string }) {
  const content = (
    <>
      <Icon name={icon} className="h-7 w-7 text-accent" />
      <h2 className="mt-4 text-xl font-black text-primary">{title}</h2>
      <p className="mt-2 text-muted">{value}</p>
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className="focus-ring rounded-lg border border-slate-200 bg-white p-6 text-left shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      {content}
    </a>
  );
}
