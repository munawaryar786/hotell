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
import { MeetingsPreview } from "@/components/home/MeetingsPreview";
import { WhyChoose } from "@/components/home/WhyChoose";
import { FacilitiesPreview } from "@/components/home/FacilitiesPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { LocationPreview } from "@/components/home/LocationPreview";
import { OffersPreview } from "@/components/home/OffersPreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Hotel Ambassador Lahore",
  "Hotel Ambassador Lahore premium website for rooms, dining, banquets, meetings, family stays, and business travel in Lahore."
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BookingWidget />
      <AnimatedSection className="bg-ivory"><AboutPreview /></AnimatedSection>
      <AnimatedSection className="bg-beige"><RoomsPreview /></AnimatedSection>
      <AnimatedSection className="bg-ivory"><DiningPreview /></AnimatedSection>
      <AnimatedSection className="bg-beige"><FacilitiesPreview /></AnimatedSection>
      <AnimatedSection className="bg-black text-white"><EventsPreview /></AnimatedSection>
      <AnimatedSection className="bg-ivory"><MeetingsPreview /></AnimatedSection>
      <AnimatedSection className="bg-beige"><GalleryPreview /></AnimatedSection>
      <AnimatedSection className="bg-ivory"><LocationPreview /></AnimatedSection>
      <AnimatedSection className="bg-beige"><OffersPreview /></AnimatedSection>
      <AnimatedSection className="bg-ivory"><WhyChoose /></AnimatedSection>
      <AnimatedSection className="bg-beige"><FAQPreview /></AnimatedSection>
      <AnimatedSection className="bg-ivory"><ExperienceSection /></AnimatedSection>
      <FinalCTA />
    </>
  );
}

function ExperienceSection() {
  return (
    <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="grid grid-cols-2 gap-4">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lift"><HotelImage src="/images/ambassador/ambassador-35.jpg" alt="Hotel Ambassador Lahore lounge" /></div>
        <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-lg shadow-lift"><HotelImage src="/images/ambassador/ambassador-51.jpg" alt="Dining at Hotel Ambassador Lahore" /></div>
      </div>
      <div>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">Experience Ambassador</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary sm:text-5xl">Experience Hotel Ambassador Lahore</h2>
        <p className="mt-5 text-lg leading-8 text-muted">Explore the comfort, hospitality, dining, events, and guest spaces that define the Ambassador experience.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/booking" variant="gold">Book Your Stay</ButtonLink>
          <ButtonLink href="/banquets-events" variant="outline">Plan an Event</ButtonLink>
        </div>
      </div>
    </Container>
  );
}
