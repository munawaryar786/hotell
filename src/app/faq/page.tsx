import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "FAQ",
  "Frequently asked questions about Student Point Hostel, boys hostel accommodation, seat booking, rooms, internet, parking, security cameras, and nearby areas.",
  "/faq"
);

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Answers about Student Point Hostel, boys hostel living, seat inquiries, facilities, nearby places, and parent contact before booking."
        image="/images/kings/interior-entry.jpeg"
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
            <ButtonLink href="/booking">Send Seat Inquiry</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
