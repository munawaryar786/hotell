import type { Metadata } from "next";
import { BookingForm } from "@/components/forms/BookingForm";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { telUrl, whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "Book Your Seat",
  "Send a hostel seat inquiry for Student Point Hostel in Lahore. Call or WhatsApp 0325-0012727 for current seat availability.",
  "/booking"
);

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Book Your Seat at Student Point Hostel"
        subtitle="Submit a hostel seat inquiry for current availability, room preference, move-in date, and student accommodation details."
        image="/images/student-point-hostel/boys-hostel-poster.jpg"
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <BookingForm />
          <aside className="grid content-start gap-5">
            <div className="rounded-lg border border-slate-200 bg-light p-6">
              <Icon name="MessageCircle" className="h-8 w-8 text-accent" />
              <h2 className="mt-4 text-2xl font-black text-primary">Need Faster Help?</h2>
              <p className="mt-3 leading-7 text-muted">Contact Student Point Hostel directly by WhatsApp or call to ask about current seat availability.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={whatsappUrl("Hello Student Point Hostel, I want to inquire about seat availability.")}>WhatsApp Inquiry</ButtonLink>
                <ButtonLink href={telUrl()} variant="outline">Call Now</ButtonLink>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-black text-primary">Contact Number</h3>
              <p className="mt-3 text-muted">{site.phone}</p>
              <p className="mt-4 text-sm leading-6 text-muted">{site.addressSummary}</p>
            </div>
          </aside>
        </Container>
      </section>
      <section className="bg-light py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Before Booking" title="What to Confirm" subtitle="A quick inquiry helps confirm seat availability, room preference, move-in timing, nearby institute, duration of stay, and visit timing." />
          <div className="grid gap-4 md:grid-cols-3">
            {["Seat availability", "Room preference", "Move-in date"].map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
                <Icon name="CheckCircle2" className="h-6 w-6 text-accent" />
                <h3 className="mt-4 text-xl font-black text-primary">{item}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
