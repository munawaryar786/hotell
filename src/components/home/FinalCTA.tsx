import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section className="bg-primary py-16 text-white">
      <Container className="text-center">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-gold">Hotel Ambassador Lahore</p>
        <h2 className="mt-4 text-4xl font-black">Ready to Experience Ambassador Hospitality?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/booking" variant="gold">Book Your Stay</ButtonLink>
          <ButtonLink href="/banquets-events" variant="light">Plan an Event</ButtonLink>
          <ButtonLink href="/contact" variant="outline">Contact Reservations</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
