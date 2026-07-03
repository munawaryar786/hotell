import { media } from "@/data/media";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DiningPreview() {
  return (
    <Container className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="grid grid-cols-2 gap-4">
        {media.diningImages.map((image) => <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft"><HotelImage src={image} alt="Dining at Ambassador" /></div>)}
      </div>
      <div>
        <SectionHeading centered={false} eyebrow="Dining" title="Dining at Ambassador" subtitle="Restaurant service, breakfast, room service, family dining, and guest dining experiences are presented with direct inquiry support. Dining availability and menus can be confirmed directly with the hotel." />
        <ButtonLink href="/dining" variant="gold">Dining Inquiry</ButtonLink>
      </div>
    </Container>
  );
}
