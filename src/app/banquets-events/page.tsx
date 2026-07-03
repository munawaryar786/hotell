import type { Metadata } from "next";
import { events } from "@/data/events";
import { EventCard } from "@/components/events/EventCard";
import { EventInquiryForm } from "@/components/events/EventInquiryForm";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Banquets & Events | Hotel Ambassador Lahore", "Plan wedding events, corporate events, private gatherings, and banquet inquiries at Hotel Ambassador Lahore.", "/banquets-events");

export default function EventsPage() {
  return (
    <>
      <PageHero eyebrow="Banquets & Events" title="Elegant Event Inquiry for Lahore Celebrations" subtitle="Wedding events, corporate events, private gatherings, conferences, banquet showcase, and event coordination inquiry." image="/images/ambassador/ambassador-25.jpg" ctaHref="#event-inquiry" ctaLabel="Plan Your Event" />
      <AnimatedSection className="bg-light">
        <Container>
          <SectionHeading eyebrow="Event Spaces" title="Banquet and Event Possibilities" subtitle="Capacities, dates, menus, and layouts should be confirmed directly with the hotel." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {events.map((event) => <EventCard key={event.title} event={event} />)}
          </div>
        </Container>
      </AnimatedSection>
      <AnimatedSection id="event-inquiry">
        <Container className="max-w-4xl">
          <EventInquiryForm />
        </Container>
      </AnimatedSection>
    </>
  );
}
