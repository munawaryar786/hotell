import type { Metadata } from "next";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("FAQ | Hotel Ambassador Lahore", "Frequently asked questions for Hotel Ambassador Lahore room booking, events, dining, corporate booking, family stays, parking, contact, and location.", "/faq");

export default function FAQPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Common Questions" subtitle="Answers about room booking, events, dining, corporate booking, family stays, parking, contact, and location." image="/images/ambassador/ambassador-35.jpg" />
      <AnimatedSection className="bg-light">
        <Container className="max-w-4xl">
          <FAQAccordion />
        </Container>
      </AnimatedSection>
    </>
  );
}
