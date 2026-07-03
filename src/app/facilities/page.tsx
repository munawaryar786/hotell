import type { Metadata } from "next";
import { facilities } from "@/data/facilities";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Facilities | Hotel Ambassador Lahore", "Guest comfort, business services, dining services, event services, family services, parking, and access at Hotel Ambassador Lahore.", "/facilities");

export default function FacilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Facilities" title="Hotel Facilities for Comfort, Business, and Events" subtitle="Facilities are presented with availability-aware wording. Please confirm specific services directly with the hotel." image="/images/ambassador/ambassador-27.jpg" ctaHref="/booking" ctaLabel="Book Your Stay" />
      <AnimatedSection className="bg-light">
        <Container>
          <SectionHeading eyebrow="Services" title="Guest Facilities" subtitle="Availability may vary. Please confirm directly with the hotel." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility) => (
              <article key={facility.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
                <Icon name={facility.icon} className="h-6 w-6 text-accent" />
                <h2 className="mt-4 font-black text-primary">{facility.title}</h2>
                <p className="mt-2 text-sm font-bold text-primary/70">{facility.group}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{facility.note}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid items-center gap-8 rounded-lg bg-white p-6 shadow-soft lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg"><HotelImage src="/images/ambassador/ambassador-02.jpg" alt="Hotel Ambassador Lahore pool facility" /></div>
            <div>
              <h2 className="text-2xl font-black text-primary">Guest Comfort, Parking, Dining, and Access</h2>
              <p className="mt-4 leading-7 text-muted">Use the contact form to confirm facility availability for your travel dates, room category, meeting, or event package.</p>
              <ButtonLink href="/contact" className="mt-6" variant="gold">Ask About Facilities</ButtonLink>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
