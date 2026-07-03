import { rooms } from "@/data/rooms";
import { RoomCard } from "@/components/rooms/RoomCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function RoomsPreview() {
  return (
    <Container>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeading centered={false} eyebrow="Rooms & Suites" title="Comfortable Rooms for Business and Family Stays" subtitle="Choose from standard, deluxe, executive, family, and suite-style options. Rates and availability can be confirmed directly with reservations." className="mb-0" />
        <ButtonLink href="/rooms" variant="outline">View All Rooms</ButtonLink>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {rooms.slice(0, 3).map((room) => <RoomCard key={room.slug} room={room} />)}
      </div>
    </Container>
  );
}
