import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { ButtonLink } from "@/components/ui/Button";
import { HeroSection } from "@/components/home/HeroSection";
import { BookingWidget } from "@/components/home/BookingWidget";
import { AboutPreview } from "@/components/home/AboutPreview";
import { RoomsPreview } from "@/components/home/RoomsPreview";
import { DiningPreview } from "@/components/home/DiningPreview";
import { EventsPreview } from "@/components/home/EventsPreview";
import { WhyChoose } from "@/components/home/WhyChoose";
import { FacilitiesPreview } from "@/components/home/FacilitiesPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { LocationPreview } from "@/components/home/LocationPreview";
import { OffersPreview } from "@/components/home/OffersPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Hotel Ambassador Lahore",
  "Hotel Ambassador Lahore premium website proposal for rooms, dining, banquets, meetings, family stays, and business travel in Lahore."
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BookingWidget />
      <AnimatedSection className="bg-white"><AboutPreview /></AnimatedSection>
      <AnimatedSection className="bg-light"><RoomsPreview /></AnimatedSection>
      <AnimatedSection className="bg-white"><ExperienceSection /></AnimatedSection>
      <AnimatedSection className="bg-white"><DiningPreview /></AnimatedSection>
      <AnimatedSection className="bg-primary text-white"><EventsPreview /></AnimatedSection>
      <AnimatedSection className="bg-light"><WhyChoose /></AnimatedSection>
      <AnimatedSection className="bg-white"><FacilitiesPreview /></AnimatedSection>
      <AnimatedSection className="bg-light"><GalleryPreview /></AnimatedSection>
      <AnimatedSection className="bg-white"><LocationPreview /></AnimatedSection>
      <AnimatedSection className="bg-light"><OffersPreview /></AnimatedSection>
      <FinalCTA />
    </>
  );
}

function ExperienceSection() {
  return (
    <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-lift">
        <HotelImage src="/images/ambassador/ambassador-03.jpg" alt="Experience Hotel Ambassador Lahore" />
        <div className="absolute inset-0 bg-primary/25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/50 bg-white/20 text-2xl font-black text-white backdrop-blur">Play</span>
        </div>
      </div>
      <div>
        <p className="text-sm font-black uppercase tracking-[0.16em] text-accent">Experience Ambassador</p>
        <h2 className="mt-4 text-3xl font-black text-primary sm:text-4xl">Experience Hotel Ambassador Lahore</h2>
        <p className="mt-4 text-lg leading-8 text-muted">Explore the comfort, hospitality, dining, events, and guest spaces that define the Ambassador experience. This section is ready for a future hotel video and currently uses a cinematic image collage placeholder.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/booking" variant="gold">Book Your Stay</ButtonLink>
          <ButtonLink href="/banquets-events" variant="outline">Plan an Event</ButtonLink>
        </div>
      </div>
    </Container>
  );
}
