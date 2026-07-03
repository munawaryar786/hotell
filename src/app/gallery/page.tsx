import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Gallery | Hotel Ambassador Lahore", "Hotel Ambassador Lahore gallery with categorized exterior, lobby, rooms, dining, banquets, meetings, and facilities images.", "/gallery");

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Explore Hotel Ambassador Lahore" subtitle="Browse categorized hotel images with filters and an accessible lightbox." image="/images/ambassador/ambassador-03.jpg" />
      <AnimatedSection className="bg-light">
        <Container><GalleryGrid /></Container>
      </AnimatedSection>
    </>
  );
}
