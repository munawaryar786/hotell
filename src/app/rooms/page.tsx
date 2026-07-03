import type { Metadata } from "next";
import { RoomFilters } from "@/components/rooms/RoomFilters";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Rooms & Suites | Hotel Ambassador Lahore", "Explore rooms and suites at Hotel Ambassador Lahore with direct inquiry support and contact for best rates.", "/rooms");

export default function RoomsPage() {
  return (
    <>
      <PageHero eyebrow="Rooms & Suites" title="Rooms Designed for Comfort, Business, and Family Stays" subtitle="Browse standard, deluxe, executive, family, and suite-style options. Availability, rates, and room configuration should be confirmed directly with reservations." image="/images/ambassador/ambassador-32.jpg" ctaHref="/booking" ctaLabel="Book Your Stay" />
      <AnimatedSection className="bg-light">
        <Container>
          <RoomFilters />
        </Container>
      </AnimatedSection>
    </>
  );
}
