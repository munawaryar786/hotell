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
  "Accommodation",
  "Explore Student Point Hostel accommodation, available hostel seats, shared room options, room facilities, and seat availability inquiry.",
  "/rooms-facilities"
);

export default function RoomsFacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Accommodation"
        title="Available Hostel Seats and Comfortable Student Rooms"
        subtitle="A clear overview of hostel seat inquiry, shared room options, daily facilities, and student-friendly accommodation at Student Point Hostel."
        image="/images/kings/room-sharing.jpeg"
        ctaHref="/booking"
        ctaLabel="Ask About Seat Availability"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Hostel Rooms" title="Accommodation Options" subtitle="Seat availability should be confirmed directly by call, WhatsApp, or the inquiry form." />
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
              eyebrow="Room Facilities"
              title="Comfortable Student Accommodation"
              subtitle="Student Point Hostel focuses on clean rooms, study-friendly surroundings, internet service, security camera support, and practical daily living."
            />
            <ButtonLink href="/booking">Contact for Seat Availability</ButtonLink>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lift">
            <HotelImage src="/images/kings/room-twin-2.jpeg" alt="Student Point Hostel accommodation visual" />
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Facilities" title="Facilities Included in the Hostel Experience" subtitle="These facilities support student comfort, security, study, and daily routine." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((amenity) => (
              <div key={amenity.title} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <HotelImage src={amenity.image} alt={`${amenity.title} at Student Point Hostel`} sizes="(min-width: 1024px) 25vw, 50vw" className="transition duration-500 group-hover:scale-105" />
                  <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-white shadow-soft">
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
            <SectionHeading centered={false} inverse eyebrow="Seat Inquiry" title="Confirm Current Availability" subtitle="Send a quick inquiry so the team can confirm seat availability, room preference, move-in date, and facility details." />
          </div>
          <BookingForm compact />
        </Container>
      </section>
    </>
  );
}
