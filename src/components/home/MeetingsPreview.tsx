import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";

const cards = ["Meeting Rooms", "Conference Support", "Corporate Booking", "Business Stay"];

export function MeetingsPreview() {
  return (
    <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-lift">
        <HotelImage src="/images/ambassador/ambassador-19.jpg" alt="Meetings and conferences at Hotel Ambassador Lahore" />
      </div>
      <div>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">Meetings & Conferences</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary sm:text-5xl">Meetings & Conferences</h2>
        <p className="mt-5 text-lg leading-8 text-muted">Professional spaces for business meetings, corporate gatherings, presentations, and conference inquiries.</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {cards.map((card) => <div key={card} className="rounded-lg border border-black/10 bg-white p-4 shadow-soft"><Icon name="Presentation" className="h-5 w-5 text-accent" /><h3 className="mt-3 font-bold text-primary">{card}</h3></div>)}
        </div>
        <ButtonLink href="/meetings-conferences" variant="gold" className="mt-8">Request Meeting Space</ButtonLink>
      </div>
    </Container>
  );
}
