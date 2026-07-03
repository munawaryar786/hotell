import { events } from "@/data/events";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";

export function EventsPreview() {
  return (
    <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">Weddings & Events</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-6xl">Weddings & Events</h2>
        <p className="mt-5 text-lg leading-8 text-white/70">Plan memorable gatherings, private events, corporate functions, and celebrations with Hotel Ambassador Lahore.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {events.map((event) => (
            <div key={event.title} className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-gold/60">
              <Icon name={event.icon} className="h-5 w-5 text-gold" />
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{event.title}</h3>
            </div>
          ))}
        </div>
        <ButtonLink href="/banquets-events" variant="gold" className="mt-8">Plan Your Event</ButtonLink>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lift"><HotelImage src="/images/ambassador/ambassador-25.jpg" alt="Wedding events at Hotel Ambassador Lahore" /></div>
        <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-lg shadow-lift"><HotelImage src="/images/ambassador/ambassador-21.jpg" alt="Corporate event at Hotel Ambassador Lahore" /></div>
      </div>
    </Container>
  );
}
