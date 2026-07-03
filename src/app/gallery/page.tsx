import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Gallery",
  "View Student Point Hostel images by category: branding, hostel posters, facilities, location, and rooms or accommodation.",
  "/gallery"
);

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Student Point Hostel Gallery"
        subtitle="Browse provided Student Point Hostel branding, posters, facilities, location, and accommodation visuals."
        image="/images/kings/exterior-corner.jpeg"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Filter by Category" subtitle="Use the gallery filters to view branding, hostel posters, facilities, location, and accommodation images." />
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
