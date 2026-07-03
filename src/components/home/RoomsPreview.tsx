import { rooms } from "@/data/rooms";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { LuxuryCarousel } from "@/components/ui/LuxuryCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function RoomsPreview() {
  return (
    <Container>
      <SectionHeading eyebrow="Accommodation" title="Accommodation" subtitle="Choose from comfortable room categories designed for business travelers, families, and city guests." />
      <LuxuryCarousel>
        {rooms.map((room) => (
          <article key={room.slug} className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
            <div className="relative aspect-[4/5] overflow-hidden">
              <HotelImage src={room.image} alt={`${room.title} at Hotel Ambassador Lahore`} sizes="(min-width: 1024px) 34vw, 86vw" className="transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">{room.priceLabel}</p>
                <h3 className="mt-2 font-display text-3xl font-semibold">{room.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="min-h-12 text-sm leading-6 text-muted">{room.shortDescription}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <ButtonLink href={`/rooms/${room.slug}`} variant="outline">Discover More</ButtonLink>
                <ButtonLink href="/booking" variant="gold">Reserve Now</ButtonLink>
              </div>
            </div>
          </article>
        ))}
      </LuxuryCarousel>
    </Container>
  );
}

