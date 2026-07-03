import type { Metadata } from "next";
import { BookingForm } from "@/components/forms/BookingForm";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { whatsappUrl } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Booking | Hotel Ambassador Lahore", "Submit a room booking inquiry for Hotel Ambassador Lahore with check-in, check-out, guests, room type, and special request details.", "/booking");

export default function BookingPage() {
  return (
    <>
      <PageHero eyebrow="Booking" title="Room Booking Inquiry" subtitle="Submit your room inquiry. This demo does not process payments or confirmed reservations online." image="/images/ambassador/ambassador-37.jpg" />
      <AnimatedSection className="bg-light">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.55fr]">
          <BookingForm />
          <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <Icon name="MessageCircle" className="h-7 w-7 text-accent" />
            <h2 className="mt-4 text-2xl font-black text-primary">Prefer WhatsApp?</h2>
            <p className="mt-3 leading-7 text-muted">Use the prefilled room availability message for a faster direct inquiry.</p>
            <ButtonLink href={whatsappUrl("Hello Hotel Ambassador Lahore, I want to inquire about room availability.")} className="mt-6" variant="gold">WhatsApp Reservation Inquiry</ButtonLink>
          </aside>
        </Container>
      </AnimatedSection>
    </>
  );
}
