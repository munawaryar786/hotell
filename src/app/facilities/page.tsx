import type { Metadata } from "next";
import { amenities } from "@/data/amenities";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Facilities",
  "Facilities at Student Point Hostel Lahore including 24-hours security cameras, neat and clean rooms, high-speed internet, parking garage, and electric geyser facility.",
  "/facilities"
);

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="Facilities at Student Point Hostel Lahore"
        subtitle="Essential hostel facilities for comfort, security, study focus, internet access, parking support, and daily student living."
        image="/images/kings/corridor.jpeg"
        ctaHref="/booking"
        ctaLabel="Book Your Seat"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Facilities We Provide" subtitle="A boys hostel should make daily life easier, safer, and more focused. These are the key Student Point Hostel facilities." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((amenity) => (
              <article key={amenity.title} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <HotelImage src={amenity.image} alt={`${amenity.title} at Student Point Hostel`} className="transition duration-500 group-hover:scale-105" />
                  <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                    <Icon name={amenity.icon} className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="font-black text-primary">{amenity.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">{amenity.note}</p>
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
              eyebrow="Study-Friendly"
              title="Fully Relaxed Environment Perfect for Study"
              subtitle="The hostel is positioned around practical student living, with peaceful surroundings, clean spaces, and easy inquiry support for students and parents."
            />
            <ButtonLink href="/booking">Submit Seat Inquiry</ButtonLink>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lift">
            <HotelImage src="/images/kings/room-study.jpeg" alt="Student Point Hostel study-friendly room" />
          </div>
        </Container>
      </section>
    </>
  );
}
