import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GalleryPreview() {
  return (
    <Container>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeading centered={false} eyebrow="Gallery" title="A Visual Preview of Ambassador Hospitality" subtitle="Exterior, lobby, rooms, dining, event, meeting, and facility imagery organized for a premium hotel presentation." className="mb-0" />
        <ButtonLink href="/gallery" variant="outline">View Full Gallery</ButtonLink>
      </div>
      <GalleryGrid limit={9} featuredOnly />
    </Container>
  );
}
