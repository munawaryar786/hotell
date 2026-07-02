import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Gallery",
  "View Kings Hostels images by category: exterior, branding, rooms, corridors, facilities, appliances, Branch 1, and Branch 2.",
  "/gallery"
);

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Kings Hostels Gallery"
        subtitle="Browse real images from rooms, interiors, exterior areas, brand visuals, and shared facilities."
        image="/images/kings/exterior-corner.jpeg"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Filter by Category" subtitle="Use the gallery filters to view branch images, rooms, facilities, appliances, branding, and interior spaces." />
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
