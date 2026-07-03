import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "Location",
  "Student Point Hostel is located at Gulbahar Colony, Academy Road, near Gulberg III, Lahore, near Cavalry Ground, Hajvery University, PAC Gulberg, and 7Up Phattak.",
  "/location"
);

const nearbyPlaces = ["Cavalry Ground", "Hajvery University", "PAC Gulberg", "7Up Phattak", "Gulberg III", "Academy Road"];

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Location"
        title="Easy Access to Nearby Study & City Areas"
        subtitle="Student Point Hostel is located at Gulbahar Colony, Academy Road, near Gulberg III, Lahore."
        image="/images/student-point-hostel/student-point-seats-available.jpg"
        ctaHref="/booking"
        ctaLabel="Book Your Seat"
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading centered={false} eyebrow="Address" title="Student Point Hostel" subtitle={site.addressSummary} />
            <div className="grid gap-3">
              {nearbyPlaces.map((place) => (
                <p key={place} className="flex items-center gap-2 font-semibold text-primary">
                  <Icon name="MapPin" className="h-5 w-5 text-accent" />
                  {place}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={whatsappUrl("Hello Student Point Hostel, please share directions to the hostel.")}>Get Directions</ButtonLink>
              <ButtonLink href="/booking" variant="outline">Book Your Seat</ButtonLink>
            </div>
          </div>
          <MapEmbed title="Student Point Hostel Map" label={site.addressSummary} />
        </Container>
      </section>
    </>
  );
}
