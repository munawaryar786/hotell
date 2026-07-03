import { events } from "@/data/events";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EventsPreview() {
  return (
    <Container>
      <SectionHeading eyebrow="Banquets & Events" title="Plan Weddings, Conferences, and Private Gatherings" subtitle="A polished event inquiry experience for wedding events, corporate events, private gatherings, conferences, and banquet coordination." inverse />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {events.map((event) => (
          <article key={event.title} className="group overflow-hidden rounded-lg border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-gold/70">
            <div className="relative aspect-[4/3] overflow-hidden"><HotelImage src={event.image} alt={event.title} className="transition duration-500 group-hover:scale-105" /></div>
            <div className="p-5">
              <Icon name={event.icon} className="h-6 w-6 text-gold" />
              <h3 className="mt-4 text-lg font-black text-white">{event.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{event.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center"><ButtonLink href="/banquets-events" variant="gold">Plan Your Event</ButtonLink></div>
    </Container>
  );
}
