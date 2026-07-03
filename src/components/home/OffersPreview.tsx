import { offers } from "@/data/offers";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OffersPreview() {
  return (
    <Container>
      <SectionHeading eyebrow="Offers" title="Packages and Direct Booking Concepts" subtitle="All packages use Contact for Current Offers / Contact for Current Rates until verified by the hotel." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {offers.map((offer) => (
          <article key={offer.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-accent/70">
            <span className="rounded-full bg-light px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-primary">{offer.tag}</span>
            <h3 className="mt-4 font-black text-primary">{offer.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{offer.description}</p>
            <p className="mt-4 text-sm font-black text-primary">Contact for Current Offers</p>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center"><ButtonLink href="/offers" variant="outline">View Packages</ButtonLink></div>
    </Container>
  );
}
