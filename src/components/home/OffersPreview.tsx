import { offers } from "@/data/offers";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function OffersPreview() {
  return (
    <Container>
      <div className="relative overflow-hidden rounded-lg bg-black p-8 text-white shadow-lift md:p-12">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[url('/images/ambassador/ambassador-36.jpg')] bg-cover bg-center opacity-35 lg:block" />
        <div className="relative max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">Exclusive Offers</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-6xl">Exclusive Offers</h2>
          <p className="mt-5 text-lg leading-8 text-white/70">Contact Hotel Ambassador Lahore for current room, dining, family stay, business stay, and event packages.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {offers.slice(0, 5).map((offer) => <div key={offer.title} className="rounded-lg border border-white/10 bg-white/5 p-4"><h3 className="font-display text-xl font-semibold">{offer.title}</h3><p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-gold">Contact for current rates</p></div>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/offers" variant="gold">View Current Offers</ButtonLink><ButtonLink href="/contact" variant="light">Contact Reservations</ButtonLink></div>
        </div>
      </div>
    </Container>
  );
}
