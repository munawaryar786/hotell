import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { branches } from "@/data/branches";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { telUrl, whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "Contact Kings Hostels",
  "Contact Kings Hostels for boys hostel inquiries, branch details, WhatsApp, call, and location information in Lahore.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Kings Hostels"
        subtitle="Call, WhatsApp, or send a message for Kings Hostel 1, Kings Hostel 2, or any available branch."
        image="/images/kings/poster-safety.jpeg"
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5">
            {[
              { title: "Call Now", value: `${site.phone} / ${site.altPhone}`, href: telUrl(), icon: "Phone" },
              { title: "WhatsApp", value: "Send a quick inquiry", href: whatsappUrl("Hello Kings Hostels, I want to contact the team."), icon: "MessageCircle" },
              { title: "Email", value: site.email, href: `mailto:${site.email}`, icon: "CheckCircle2" }
            ].map((item) => (
              <a key={item.title} href={item.href} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <Icon name={item.icon} className="h-7 w-7 text-accent" />
                <h2 className="mt-4 text-xl font-black text-primary">{item.title}</h2>
                <p className="mt-2 text-muted">{item.value}</p>
              </a>
            ))}
          </div>
          <ContactForm />
        </Container>
      </section>
      <section className="bg-light py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Addresses" title="Both Branch Addresses" subtitle={site.headline} />
          <div className="grid gap-5 md:grid-cols-2">
            {branches.map((branch) => (
              <div key={branch.id} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
                <Icon name="MapPin" className="h-7 w-7 text-accent" />
                <h3 className="mt-4 text-2xl font-black text-primary">{branch.name}</h3>
                <p className="mt-3 leading-7 text-muted">{branch.address}</p>
                <ButtonLink href={`/branches/${branch.slug}`} className="mt-6" variant="secondary">View Branch</ButtonLink>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Maps" title="Map Placeholders" subtitle="Replace these placeholders with live Google Maps embed URLs when available." />
          <div className="grid gap-6 md:grid-cols-2">
            {branches.map((branch) => (
              <MapEmbed key={branch.id} title={branch.name} label={branch.address} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
