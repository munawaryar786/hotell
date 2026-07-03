import { facilities } from "@/data/facilities";
import { media } from "@/data/media";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { LuxuryCarousel } from "@/components/ui/LuxuryCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";

const featured = ["Event Spaces", "Business Support", "Restaurant / Dining", "Parking", "24/7 Front Desk", "Room Service", "Free Wi-Fi", "Laundry / Dry Cleaning", "Elevator", "Guest Assistance"];

export function FacilitiesPreview() {
  const items = featured.map((title) => facilities.find((facility) => facility.title === title)).filter(Boolean) as typeof facilities;

  return (
    <Container>
      <SectionHeading eyebrow="Featured Amenities" title="Featured Amenities" subtitle="A premium preview of guest facilities and hotel services. Availability can be confirmed directly with the hotel." />
      <LuxuryCarousel>
        {items.map((facility, index) => (
          <article key={facility.title} className="group overflow-hidden rounded-lg bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
            <div className="relative aspect-[4/3] overflow-hidden">
              <HotelImage src={media.amenityImages[index % media.amenityImages.length]} alt={`${facility.title} at Hotel Ambassador Lahore`} className="transition duration-700 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">Amenity</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-primary">{facility.title}</h3>
              <p className="mt-3 min-h-16 text-sm leading-6 text-muted">{facility.note}</p>
              <ButtonLink href="/facilities" variant="outline" className="mt-5">Discover More</ButtonLink>
            </div>
          </article>
        ))}
      </LuxuryCarousel>
    </Container>
  );
}
