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

export const metadata: Metadata = pageMetadata("Location | Hotel Ambassador Lahore", "Hotel Ambassador Lahore location, map placeholder, nearby landmarks, airport and railway access, and directions inquiry.", "/location");

const landmarks = ["Lahore business areas", "Cultural destinations", "Shopping districts", "Airport access inquiry", "Railway access inquiry", "Corporate destinations"];

export default function LocationPage() {
  return (
    <>
      <PageHero eyebrow="Location" title="Stay Connected to Lahore" subtitle="A central Lahore hotel location experience with address, map, and directions placeholders ready for verified details." image="/images/ambassador/ambassador-40.jpg" ctaHref={site.mapUrl} ctaLabel="Get Directions" />
      <AnimatedSection className="bg-light">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <Icon name="MapPin" className="h-6 w-6 text-accent" />
            <h2 className="mt-4 text-2xl font-black text-primary">Address</h2>
            <p className="mt-3 leading-7 text-muted">{site.addressSummary}</p>
            <ButtonLink href={site.mapUrl} className="mt-6" variant="gold">Get Directions</ButtonLink>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-primary shadow-lift">
            <HotelImage src="/images/ambassador/ambassador-26.jpg" alt="Hotel Ambassador Lahore driveway" />
            <div className="absolute inset-0 flex items-center justify-center bg-primary/55 text-center text-white">
              <div><p className="text-sm font-black uppercase tracking-[0.16em] text-gold">Google Map Placeholder</p><h2 className="mt-3 text-3xl font-black">Verified map embed goes here</h2></div>
            </div>
          </div>
        </Container>
      </AnimatedSection>
      <AnimatedSection>
        <Container>
          <SectionHeading eyebrow="Nearby Access" title="Business, Culture, and Travel Access" subtitle="Replace these placeholders with verified landmark distances before publishing." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {landmarks.map((item) => <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft"><Icon name="Navigation" className="h-5 w-5 text-accent" /><h2 className="mt-3 font-black text-primary">{item}</h2></div>)}
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
