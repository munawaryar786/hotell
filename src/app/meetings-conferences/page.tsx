import type { Metadata } from "next";
import { EventInquiryForm } from "@/components/events/EventInquiryForm";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Meetings & Conferences | Hotel Ambassador Lahore", "Business meeting rooms, conference support, corporate inquiry, presentation spaces, and meeting coordination at Hotel Ambassador Lahore.", "/meetings-conferences");

const support = ["Meeting room options", "Corporate gatherings", "Presentation-ready spaces", "Event coordination inquiry"];

export default function MeetingsPage() {
  return (
    <>
      <PageHero eyebrow="Meetings" title="Business Meetings and Conference Support" subtitle="A business-focused website experience for meeting rooms, corporate gatherings, presentations, and direct meeting-space inquiry." image="/images/ambassador/ambassador-21.jpg" ctaHref="#meeting-inquiry" ctaLabel="Request Meeting Space" />
      <AnimatedSection className="bg-light">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lift"><HotelImage src="/images/ambassador/ambassador-19.jpg" alt="Conference at Hotel Ambassador Lahore" /></div>
          <div>
            <SectionHeading centered={false} eyebrow="Corporate" title="Presentation-Ready Meeting Concepts" subtitle="Meeting capacities, seating layouts, AV support, and refreshment options should be confirmed during the corporate inquiry process." />
            <div className="grid gap-3">
              {support.map((item) => <p key={item} className="flex items-center gap-2 text-muted"><Icon name="Presentation" className="h-5 w-5 text-accent" /> {item}</p>)}
            </div>
          </div>
        </Container>
      </AnimatedSection>
      <AnimatedSection id="meeting-inquiry">
        <Container className="max-w-4xl"><EventInquiryForm /></Container>
      </AnimatedSection>
    </>
  );
}
