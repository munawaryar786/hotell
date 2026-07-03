import { faqs } from "@/data/faqs";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQPreview() {
  return (
    <Container className="max-w-5xl">
      <SectionHeading eyebrow="FAQ" title="Guest Questions" subtitle="Quick answers about booking, events, dining, corporate stays, families, parking, and location." />
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.slice(0, 4).map((faq) => (
          <details key={faq.question} className="group rounded-lg border border-black/10 bg-white p-5 shadow-soft">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-primary">
              {faq.question}
              <Icon name="ChevronDown" className="h-5 w-5 text-accent transition group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
          </details>
        ))}
      </div>
      <div className="mt-8 text-center"><ButtonLink href="/faq" variant="outline">View All Questions</ButtonLink></div>
    </Container>
  );
}
