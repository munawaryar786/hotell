import { ButtonLink } from "@/components/ui/Button";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";

export function EventCard({ event }: { event: { title: string; icon: string; image: string; description: string; cta: string } }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:border-accent/70 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden"><HotelImage src={event.image} alt={event.title} className="transition duration-500 group-hover:scale-105" /></div>
      <div className="p-5">
        <Icon name={event.icon} className="h-6 w-6 text-accent" />
        <h3 className="mt-4 text-xl font-black text-primary">{event.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{event.description}</p>
        <ButtonLink href="/contact" className="mt-5" variant="outline">{event.cta}</ButtonLink>
      </div>
    </article>
  );
}
