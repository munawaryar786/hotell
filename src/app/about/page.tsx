import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("About Hotel Ambassador Lahore", "About Hotel Ambassador Lahore, a premium city hotel proposal for business travelers, families, event guests, corporate clients, and city visitors.", "/about");

const guestTypes = ["Business travelers", "Families", "Event guests", "Corporate clients", "City visitors"];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Premium Lahore Hospitality, Presented with Confidence" subtitle="A polished hotel website proposal for guests who value comfort, convenience, professional service, and direct booking support." image="/images/ambassador/ambassador-40.jpg" />
      <AnimatedSection>
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading centered={false} eyebrow="Hotel Story" title="A City Hotel for Modern Lahore Stays" subtitle="Hotel Ambassador Lahore is positioned as a premium city hotel for comfortable stays, dining, meetings, events, and family hospitality. This demo avoids unverified claims and uses inquiry-driven wording until hotel details are confirmed." />
            <div className="grid gap-3">
              {guestTypes.map((item) => <p key={item} className="flex items-center gap-2 text-muted"><Icon name="CheckCircle2" className="h-5 w-5 text-accent" /> {item}</p>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/rooms" variant="gold">Explore Rooms</ButtonLink>
              <ButtonLink href="/booking" variant="outline">Book Your Stay</ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lift"><HotelImage src="/images/ambassador/ambassador-28.jpg" alt="Hotel Ambassador Lahore reception" /></div>
        </Container>
      </AnimatedSection>
    </>
  );
}
