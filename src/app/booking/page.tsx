import type { Metadata } from "next";
import { BranchComparison } from "@/components/branches/BranchComparison";
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
  "Booking Inquiry",
  "Send a demo inquiry for Kings Hostel 1, Kings Hostel 2, or any available Kings Hostels branch in Lahore.",
  "/booking"
);

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Send a Hostel Booking Inquiry"
        subtitle="Choose Kings Hostel 1, Kings Hostel 2, or Any Available Branch. This is a frontend demo inquiry form only."
        image="/images/kings/poster-room.jpeg"
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <BookingForm />
          <aside className="grid content-start gap-5">
            <div className="rounded-lg border border-slate-200 bg-light p-6">
              <Icon name="MessageCircle" className="h-8 w-8 text-accent" />
              <h2 className="mt-4 text-2xl font-black text-primary">Need Faster Help?</h2>
              <p className="mt-3 leading-7 text-muted">Contact Kings Hostels directly by WhatsApp or call to ask about current room availability.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={whatsappUrl("Hello Kings Hostels, I want to inquire about booking a room.")}>WhatsApp CTA</ButtonLink>
                <ButtonLink href={telUrl()} variant="outline">Call Now</ButtonLink>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-black text-primary">Contact Numbers</h3>
              <p className="mt-3 text-muted">{site.phone}</p>
              <p className="mt-1 text-muted">{site.altPhone}</p>
            </div>
          </aside>
        </Container>
      </section>
      <section className="bg-light py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Branch Help" title="Not Sure Which Branch to Choose?" subtitle="Compare both branches before submitting your inquiry." />
          <BranchComparison />
        </Container>
      </section>
    </>
  );
}
