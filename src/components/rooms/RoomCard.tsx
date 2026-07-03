import { Room } from "@/data/rooms";
import { ButtonLink } from "@/components/ui/Button";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:border-accent/70 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <HotelImage src={room.image} alt={`${room.title} at Hotel Ambassador Lahore`} sizes="(min-width: 1024px) 33vw, 100vw" className="transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-gold">{room.category}</span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black text-primary">{room.title}</h3>
        <p className="mt-2 min-h-14 text-sm leading-6 text-muted">{room.shortDescription}</p>
        <div className="mt-4 grid gap-2 text-sm text-charcoal">
          <span className="flex items-center gap-2"><Icon name="Users" className="h-4 w-4 text-accent" /> {room.capacity}</span>
          <span className="flex items-center gap-2"><Icon name="BedDouble" className="h-4 w-4 text-accent" /> {room.bedType}</span>
        </div>
        <p className="mt-4 text-sm font-black text-primary">{room.priceLabel}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <ButtonLink href={`/rooms/${room.slug}`} variant="outline">View Details</ButtonLink>
          <ButtonLink href="/booking" variant="gold">Book Now</ButtonLink>
        </div>
      </div>
    </article>
  );
}
