import type { Metadata } from "next";
import { offers } from "@/data/offers";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Offers & Packages | Hotel Ambassador Lahore", "Business stay, family stay, weekend stay, event package, and corporate booking offers at Hotel Ambassador Lahore.", "/offers");

export default function OffersPage() {
  return (
    <>
      <PageHero eyebrow="Offers" title="Offers and Packages" subtitle="Business stay, family stay, weekend stay, event package, and corporate booking concepts. Contact for current rates." image="/images/ambassador/ambassador-36.jpg" ctaHref="/contact" ctaLabel="Contact for Current Rates" />
      <AnimatedSection className="bg-light">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <article key={offer.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent/70">
                <span className="rounded-full bg-light px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-primary">{offer.tag}</span>
                <h2 className="mt-4 text-xl font-black text-primary">{offer.title}</h2>
                <p className="mt-3 leading-7 text-muted">{offer.description}</p>
                <div className="mt-5 grid gap-2">
                  {offer.inclusions.map((item) => <p key={item} className="flex items-center gap-2 text-sm text-muted"><Icon name="CheckCircle2" className="h-4 w-4 text-accent" /> {item}</p>)}
                </div>
                <p className="mt-5 font-black text-primary">Contact for Current Rates</p>
                <ButtonLink href="/contact" className="mt-5" variant="gold">Inquire Now</ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
