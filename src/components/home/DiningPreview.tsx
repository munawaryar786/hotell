import { media } from "@/data/media";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { LuxuryCarousel } from "@/components/ui/LuxuryCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";

const dining = [
  { title: "Restaurant", text: "A composed setting for guest meals and warm Lahore hospitality." },
  { title: "Breakfast", text: "Begin the day with breakfast service details confirmed by the hotel." },
  { title: "Room Service", text: "Enjoy private in-room dining when service is available." },
  { title: "Family Dining", text: "Comfortable dining for families, visitors, and hotel guests." },
  { title: "Private Dining", text: "Intimate meal settings and private gathering inquiries." }
];

export function DiningPreview() {
  return (
    <Container>
      <SectionHeading eyebrow="Restaurants & Dining" title="Restaurants & Dining" subtitle="Dining, breakfast, room service, and guest meals presented with the quiet confidence of premium hospitality." />
      <LuxuryCarousel>
        {dining.map((item, index) => (
          <article key={item.title} className="group overflow-hidden rounded-lg bg-black text-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
            <div className="relative aspect-[4/5] overflow-hidden">
              <HotelImage src={media.diningImages[index]} alt={`${item.title} at Hotel Ambassador Lahore`} className="transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/18 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">Dining</p>
                <h3 className="mt-2 font-display text-3xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/72">{item.text}</p>
                <ButtonLink href="/dining" variant="gold" className="mt-5">Discover More</ButtonLink>
              </div>
            </div>
          </article>
        ))}
      </LuxuryCarousel>
    </Container>
  );
}
