import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";

export function LocationPreview() {
  return (
    <Container className="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">Location</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary sm:text-5xl">Stay Connected to Lahore</h2>
        <p className="mt-5 text-lg leading-8 text-muted">A convenient Lahore hospitality address for rooms, dining, events, and business travel.</p>
        <div className="mt-7 grid gap-3">
          {["Hotel Ambassador Lahore", "Lahore, Pakistan", "Directions available through the hotel inquiry team"].map((item) => <p key={item} className="flex items-center gap-2 text-muted"><Icon name="MapPin" className="h-5 w-5 text-accent" /> {item}</p>)}
        </div>
        <ButtonLink href="/location" className="mt-8" variant="gold">Get Directions</ButtonLink>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lift"><HotelImage src="/images/ambassador/ambassador-40.jpg" alt="Hotel Ambassador Lahore entrance" /></div>
    </Container>
  );
}
