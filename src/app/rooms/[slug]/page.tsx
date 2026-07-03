import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoom, rooms } from "@/data/rooms";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { RoomDetail } from "@/components/rooms/RoomDetail";
import { RelatedRooms } from "@/components/rooms/RelatedRooms";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const room = getRoom(params.slug);
  if (!room) return pageMetadata("Room Details", "Room details at Hotel Ambassador Lahore.");
  return pageMetadata(`${room.title} | Hotel Ambassador Lahore`, room.shortDescription, `/rooms/${room.slug}`);
}

export default function RoomDetailPage({ params }: { params: { slug: string } }) {
  const room = getRoom(params.slug);
  if (!room) notFound();

  return (
    <>
      <PageHero eyebrow={room.category} title={room.title} subtitle={room.shortDescription} image={room.image} ctaHref="/booking" ctaLabel="Book This Room" />
      <AnimatedSection className="bg-light">
        <Container>
          <RoomDetail room={room} />
        </Container>
      </AnimatedSection>
      <AnimatedSection>
        <Container>
          <SectionHeading eyebrow="Related Rooms" title="More Ways to Stay" subtitle="Compare other room categories and send a direct booking inquiry." />
          <RelatedRooms currentSlug={room.slug} />
        </Container>
      </AnimatedSection>
    </>
  );
}
