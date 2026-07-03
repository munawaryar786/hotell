import { Room } from "@/data/rooms";
import { BookingForm } from "@/components/forms/BookingForm";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";

export function RoomDetail({ room }: { room: Room }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="grid gap-4 sm:grid-cols-2">
          {room.gallery.map((image, index) => (
            <div key={image} className={`relative overflow-hidden rounded-lg shadow-soft ${index === 0 ? "aspect-[16/10] sm:col-span-2" : "aspect-[4/3]"}`}>
              <HotelImage src={image} alt={`${room.title} gallery ${index + 1}`} priority={index === 0} />
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-primary">Room Overview</h2>
          <p className="mt-4 leading-8 text-muted">{room.fullDescription}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Info icon="Users" title="Capacity" text={room.capacity} />
            <Info icon="BedDouble" title="Bed Type" text={room.bedType} />
          </div>
          <h3 className="mt-8 text-xl font-black text-primary">Amenities</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {room.amenities.map((amenity) => <p key={amenity} className="flex items-center gap-2 text-sm text-muted"><Icon name="CheckCircle2" className="h-4 w-4 text-accent" /> {amenity}</p>)}
          </div>
          <h3 className="mt-8 text-xl font-black text-primary">Ideal For</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {room.recommendedFor.map((item) => <span key={item} className="rounded-full bg-light px-3 py-1 text-sm font-bold text-primary">{item}</span>)}
          </div>
          <h3 className="mt-8 text-xl font-black text-primary">Policies</h3>
          <div className="mt-4 grid gap-3">
            {room.policies.map((policy) => <p key={policy} className="text-sm leading-6 text-muted">{policy}</p>)}
          </div>
        </div>
      </div>
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <BookingForm />
      </aside>
    </div>
  );
}

function Info({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="rounded-lg bg-light p-4">
      <Icon name={icon} className="h-5 w-5 text-accent" />
      <h3 className="mt-3 font-black text-primary">{title}</h3>
      <p className="mt-1 text-sm text-muted">{text}</p>
    </div>
  );
}
