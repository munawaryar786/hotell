import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[url('/images/ambassador/ambassador-03.jpg')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/86 to-primary/72" />
      <Container className="relative text-center">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">Hotel Ambassador Lahore</p>
        <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl">Ready to Experience Ambassador Hospitality?</h2>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/booking" variant="gold">Book Your Stay</ButtonLink>
          <ButtonLink href="/banquets-events" variant="light">Plan an Event</ButtonLink>
          <ButtonLink href="/contact" variant="outline" className="border-white/35 bg-white/5 text-white hover:border-gold">Contact Hotel</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
