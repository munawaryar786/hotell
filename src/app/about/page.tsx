import type { Metadata } from "next";
import { BranchCards } from "@/components/branches/BranchCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "About Kings Hostels",
  "Learn about Kings Hostels, a boys hostel and student living brand with two branches in Lahore.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Student Living with a Clear, Trusted Branch Model"
        subtitle="Kings Hostels is built for boys who need comfortable rooms, practical facilities, secure surroundings, and a peaceful study-friendly routine in Lahore."
        image="/images/kings/poster-corridor.jpeg"
      />
      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading centered={false} eyebrow="Brand Concept" title="One Brand, Two Separate Branches" subtitle={site.headline} />
            <p className="leading-8 text-muted">
              Kings Hostels presents Kings Hostel 1 and Kings Hostel 2 as part of one unified boys hostel brand while keeping each branch address, images, and details separate. That makes it easier for students and parents to compare locations before sending an inquiry.
            </p>
            <div className="mt-7 grid gap-3">
              {["Comfortable student living", "Clean and organized spaces", "Secure, peaceful environment", "Daily convenience facilities"].map((item) => (
                <p key={item} className="flex items-center gap-2 font-semibold text-primary">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-accent" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lift">
            <HotelImage src="/images/kings/poster-facilities.jpeg" alt="Kings Hostels facility brand visual" />
          </div>
        </Container>
      </section>
      <section className="bg-light py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Mission" title="Comfort, Focus, and Practical Support" subtitle="The goal is simple: make hostel living feel organized, reliable, and suitable for student life." />
          <div className="grid gap-5 md:grid-cols-3">
            {["Student living focus", "Parent-friendly clarity", "Branch-based availability"].map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
                <Icon name="ShieldCheck" className="h-7 w-7 text-accent" />
                <h3 className="mt-4 text-xl font-black text-primary">{item}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Branches" title="Explore Both Branches" subtitle="Same Kings Hostels promise, two separate Lahore locations." />
          <BranchCards />
          <div className="mt-10 text-center">
            <ButtonLink href="/booking">Send Booking Inquiry</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
