import type { Metadata } from "next";
import { amenities } from "@/data/amenities";
import { roomTypes } from "@/data/rooms";
import { BookingForm } from "@/components/forms/BookingForm";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Rooms & Facilities",
  "Explore Kings Hostels rooms, selected AC room options, shared utilities, cleanliness, and daily convenience facilities.",
  "/rooms-facilities"
);

export default function RoomsFacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Rooms & Facilities"
        title="Comfortable Rooms and Practical Shared Facilities"
        subtitle="A clear overview of room styles, selected AC room options, shared utilities, and daily student convenience across Kings Hostels branches."
        image="/images/kings/poster-ac-room.jpeg"
        ctaHref="/booking"
        ctaLabel="Ask About Availability"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Rooms" title="Room Styles" subtitle="Room availability and sharing preference should be confirmed for the selected branch." />
          <div className="grid gap-6 md:grid-cols-3">
            {roomTypes.map((room) => (
              <article key={room.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/3]">
                  <HotelImage src={room.image} alt={room.title} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-primary">{room.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{room.description}</p>
                  <div className="mt-5 grid gap-2">
                    {room.features.map((feature) => (
                      <span key={feature} className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <Icon name="CheckCircle2" className="h-4 w-4 text-accent" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-light py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              centered={false}
              eyebrow="AC Rooms"
              title="Selected AC Room Availability"
              subtitle="AC room options are represented in the provided Kings Hostels visuals, but availability can vary by branch and date."
            />
            <ButtonLink href="/booking">Confirm AC Room</ButtonLink>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lift">
            <HotelImage src="/images/kings/poster-ac-room.jpeg" alt="Kings Hostels AC room visual" />
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Facilities" title="What You May Get" subtitle="Only visible or owner-intended facilities are represented. Availability can vary by branch." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {amenities.map((amenity) => (
              <div key={amenity.title} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <HotelImage src={amenity.image} alt={`${amenity.title} at Kings Hostels`} sizes="(min-width: 1024px) 20vw, 50vw" className="transition duration-500 group-hover:scale-105" />
                  <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-gold shadow-soft">
                    <Icon name={amenity.icon} className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-primary">{amenity.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{amenity.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-primary py-16 text-white">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading centered={false} inverse eyebrow="Inquiry" title="Confirm Branch-Based Availability" subtitle="Send a quick inquiry so the team can confirm room type, sharing preference, AC availability, and shared facility details." />
          </div>
          <BookingForm compact />
        </Container>
      </section>
    </>
  );
}
