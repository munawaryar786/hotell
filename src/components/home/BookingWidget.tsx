import { BookingForm } from "@/components/forms/BookingForm";
import { Container } from "@/components/ui/Container";

export function BookingWidget() {
  return (
    <section className="relative z-10 -mt-20 pb-8">
      <Container>
        <BookingForm compact />
      </Container>
    </section>
  );
}
