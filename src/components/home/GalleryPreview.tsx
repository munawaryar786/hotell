import { media } from "@/data/media";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

const labels = ["Lobby", "Reception", "Rooms", "Dining", "Events", "Facilities"];

export function GalleryPreview() {
  return (
    <Container>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeading centered={false} eyebrow="Ambassador Moments" title="Ambassador Moments" subtitle="A visual story of rooms, dining, events, lobby, exterior, and guest facilities." className="mb-0" />
        <ButtonLink href="/gallery" variant="outline">View Full Gallery</ButtonLink>
      </div>
      <div className="grid gap-4 md:grid-cols-6">
        {media.galleryMoments.map((image, index) => (
          <div key={image} className={`group relative overflow-hidden rounded-lg shadow-soft ${index === 0 || index === 3 ? "aspect-[4/5] md:col-span-2 md:row-span-2" : "aspect-[4/3] md:col-span-2"}`}>
            <HotelImage src={image} alt={`${labels[index]} at Hotel Ambassador Lahore`} className="transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-90" />
            <h3 className="absolute bottom-4 left-4 font-display text-2xl font-semibold text-white">{labels[index]}</h3>
          </div>
        ))}
      </div>
    </Container>
  );
}
