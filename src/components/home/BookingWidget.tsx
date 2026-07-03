import { BookingForm } from "@/components/forms/BookingForm";
import { Container } from "@/components/ui/Container";

export function BookingWidget() {
  return (
    <section className="relative z-20 -mt-10 pb-10 md:-mt-16">
      <Container>
        <div className="luxury-panel rounded-lg p-3 shadow-lift md:p-4">
          <BookingForm compact />
        </div>
      </Container>
    </section>
  );
}
