import { rooms } from "@/data/rooms";
import { RoomCard } from "@/components/rooms/RoomCard";

export function RelatedRooms({ currentSlug }: { currentSlug: string }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {rooms.filter((room) => room.slug !== currentSlug).slice(0, 3).map((room) => <RoomCard key={room.slug} room={room} />)}
    </div>
  );
}
