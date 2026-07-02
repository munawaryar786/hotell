import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "FAQ",
  "Frequently asked questions about Kings Hostels, Kings Hostel 1, Kings Hostel 2, AC rooms, facilities, and booking inquiries.",
  "/faq"
);

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Answers about the Kings Hostels brand, both branches, room inquiries, shared facilities, and visiting before booking."
        image="/images/kings/poster-facilities.jpeg"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Everything Students and Parents Ask First" />
          <div className="mx-auto grid max-w-4xl gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
                <summary className="cursor-pointer text-base font-black text-primary">{faq.question}</summary>
                <p className="mt-3 leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/booking">Send Booking Inquiry</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
