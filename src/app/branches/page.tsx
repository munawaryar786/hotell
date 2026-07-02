import type { Metadata } from "next";
import { BranchCards } from "@/components/branches/BranchCard";
import { BranchComparison } from "@/components/branches/BranchComparison";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { branches } from "@/data/branches";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Branches",
  "Compare Kings Hostel 1 and Kings Hostel 2, two boys hostel branches in Lahore under the Kings Hostels brand.",
  "/branches"
);

export default function BranchesPage() {
  return (
    <>
      <PageHero
        eyebrow="Branches"
        title="One Kings Hostels Brand, Two Lahore Branches"
        subtitle="Kings Hostel 1 and Kings Hostel 2 are separate branch locations under one trusted student living brand."
        image="/images/kings/exterior-wide.jpeg"
        ctaHref="/booking"
        ctaLabel="Ask for Availability"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Choose Your Branch" subtitle="Each branch has its own location, images, and details so students can make a clear choice." />
          <BranchCards />
        </Container>
      </section>
      <section id="compare" className="bg-light py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Side by Side" title="Branch Comparison" subtitle="Use this overview to decide which location suits your routine." />
          <BranchComparison />
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Best Fit" title="Which Branch Suits You?" />
          <div className="grid gap-5 md:grid-cols-2">
            {branches.map((branch) => (
              <div key={branch.id} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
                <Icon name="MapPin" className="h-7 w-7 text-accent" />
                <h3 className="mt-4 text-2xl font-black text-primary">{branch.name}</h3>
                <p className="mt-3 leading-7 text-muted">{branch.bestFor}</p>
                <ButtonLink href={`/branches/${branch.slug}`} className="mt-6" variant="secondary">
                  View {branch.shortName}
                </ButtonLink>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-light py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Maps" title="Branch Location Placeholders" subtitle="Google Maps embed areas are ready for the final live map links." />
          <div className="grid gap-6 md:grid-cols-2">
            {branches.map((branch) => (
              <MapEmbed key={branch.id} title={branch.name} label={branch.address} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/booking">Shared Booking Inquiry</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
