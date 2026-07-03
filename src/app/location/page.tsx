import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Location | Hotel Ambassador Lahore", "Hotel Ambassador Lahore location, nearby access, travel guidance, and directions inquiry.", "/location");

const access = ["Business access", "Cultural city access", "Shopping access", "Airport guidance on request", "Railway guidance on request", "Corporate destination support"];

export default function LocationPage() {
  return (
    <>
      <PageHero eyebrow="Location" title="Stay Connected to Lahore" subtitle="A convenient Lahore hospitality address for rooms, dining, events, and business travel." image="/images/ambassador/ambassador-40.jpg" ctaHref={site.mapUrl} ctaLabel="Get Directions" />
      <AnimatedSection className="bg-light">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-black/10 bg-white p-6 shadow-soft">
            <Icon name="MapPin" className="h-6 w-6 text-accent" />
            <h2 className="mt-4 font-display text-3xl font-semibold text-primary">Address</h2>
            <p className="mt-3 leading-7 text-muted">{site.addressSummary}</p>
            <p className="mt-3 text-sm leading-6 text-muted">For exact directions, contact the hotel or use the map link.</p>
            <ButtonLink href={site.mapUrl} className="mt-6" variant="gold">Get Directions</ButtonLink>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-primary shadow-lift">
            <HotelImage src="/images/ambassador/ambassador-26.jpg" alt="Hotel Ambassador Lahore driveway" />
            <div className="absolute inset-0 flex items-center justify-center bg-primary/55 text-center text-white">
              <div><p className="text-sm font-black uppercase tracking-[0.16em] text-gold">Map & Directions</p><h2 className="mt-3 font-display text-3xl font-semibold">Lahore, Pakistan</h2></div>
            </div>
          </div>
        </Container>
      </AnimatedSection>
      <AnimatedSection>
        <Container>
          <SectionHeading eyebrow="Nearby Access" title="Business, Culture, and Travel Access" subtitle="Nearby access details can be confirmed directly with the hotel before arrival." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {access.map((item) => <div key={item} className="rounded-lg border border-black/10 bg-white p-5 shadow-soft"><Icon name="Navigation" className="h-5 w-5 text-accent" /><h2 className="mt-3 font-display text-xl font-semibold text-primary">{item}</h2></div>)}
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
