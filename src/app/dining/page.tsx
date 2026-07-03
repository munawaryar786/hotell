import type { Metadata } from "next";
import { media } from "@/data/media";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Dining | Hotel Ambassador Lahore", "Dining at Hotel Ambassador Lahore with restaurant, breakfast, room service, family dining, and direct dining inquiry support.", "/dining");

const sections = ["Restaurant overview", "Breakfast service", "Room service", "Family dining"];

export default function DiningPage() {
  return (
    <>
      <PageHero eyebrow="Dining" title="Dining at Ambassador" subtitle="Restaurant, breakfast, room service, and family dining experiences with menu and availability confirmation through the hotel." image="/images/ambassador/ambassador-51.jpg" ctaHref="/contact" ctaLabel="Dining Inquiry" />
      <AnimatedSection>
        <Container>
          <SectionHeading eyebrow="Guest Dining" title="A Warm Dining Experience for Hotel Guests" subtitle="Dining availability and menus can be confirmed directly with the hotel." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sections.map((item, index) => (
              <article key={item} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
                <div className="relative aspect-[4/3]"><HotelImage src={media.diningImages[index]} alt={item} /></div>
                <div className="p-5"><h2 className="font-black text-primary">{item}</h2><p className="mt-2 text-sm leading-6 text-muted">Please confirm timings, menus, and service availability directly with the hotel.</p></div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center"><ButtonLink href="/contact" variant="gold">Dining Inquiry</ButtonLink></div>
        </Container>
      </AnimatedSection>
    </>
  );
}
