import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { amenities, testimonials, whyChoose } from "@/data/amenities";
import { branches } from "@/data/branches";
import { faqs } from "@/data/faq";
import { site } from "@/data/site";
import { BranchCard } from "@/components/branches/BranchCard";
import { BranchComparison } from "@/components/branches/BranchComparison";
import { BookingForm } from "@/components/forms/BookingForm";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "Kings Hostels",
  "Comfortable student living at Kings Hostels. Two boys hostel branches in Lahore: Kings Hostel 1 and Kings Hostel 2."
);

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-35">
          <HotelImage src="/images/kings/exterior-corner.jpeg" alt="Kings Hostels building exterior" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/92 to-primary/55" />
        <Container className="relative grid min-h-[760px] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2">
              <span className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
                <Image src={site.logo} alt="Kings Hostels logo" fill sizes="40px" className="object-cover" priority />
              </span>
              <span className="text-xs font-black uppercase tracking-[0.16em] text-gold">Kings Hostels For Boys</span>
            </div>
            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-tight tracking-normal sm:text-6xl">
              Comfortable Student Living at Kings Hostels
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Two well-located boys hostel branches in Lahore offering a secure, clean, and student-friendly living experience.
            </p>
            <p className="mt-4 max-w-2xl text-base font-bold text-white">
              Choose Kings Hostel 1 or Kings Hostel 2 — one trusted brand, two convenient locations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/branches">Explore Branches</ButtonLink>
              <ButtonLink href="/booking" variant="gold">Book a Room</ButtonLink>
              <ButtonLink href={whatsappUrl("Hello Kings Hostels, I want to inquire about a room.")} variant="light">
                Contact on WhatsApp
              </ButtonLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Kings Hostel 1", "Kings Hostel 2", "Any Branch"].map((pill) => (
                <Link key={pill} href={pill === "Any Branch" ? "/booking" : `/branches/kings-hostel-${pill.endsWith("1") ? "1" : "2"}`} className="focus-ring rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white hover:border-gold">
                  {pill}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <HeroSelector href="/branches/kings-hostel-1" title="Kings Hostel 1" text="Near University of Lahore / Green University" image={branches[0].image} />
            <HeroSelector href="/branches/kings-hostel-2" title="Kings Hostel 2" text="Dream Avenue Branch" image={branches[1].image} />
            <HeroSelector href="/branches#compare" title="Compare Branches" text="See addresses, fit, amenities, and inquiry paths" image="/images/kings/poster-power.jpeg" />
          </div>
        </Container>
      </section>

      <AnimatedSection className="-mt-16 relative z-10 pt-0">
        <Container>
          <BookingForm compact />
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-light">
        <Container>
          <SectionHeading
            eyebrow="Why Students Choose Us"
            title="Why Choose Kings Hostels?"
            subtitle="Practical boys hostel living for students who need comfort, study focus, daily convenience, and clear branch options."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whyChoose.map((item, index) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-gold">
                  <Icon name={index % 3 === 0 ? "Building2" : index % 3 === 1 ? "ShieldCheck" : "BedDouble"} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-black text-primary">{item}</h3>
              </div>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection>
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              centered={false}
              eyebrow="About Kings Hostels"
              title="Built Around Student Comfort, Not Hotel Formality"
              subtitle="Kings Hostels is a boys hostel and student living brand in Lahore. The brand keeps both branches unified under one promise while making each branch easy to understand separately."
            />
            <div className="grid gap-3 text-muted">
              {["One trusted brand with two Lahore branches", "Clean, organized living spaces for students", "Peaceful atmosphere for study and daily routines"].map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-accent" />
                  {item}
                </p>
              ))}
            </div>
            <ButtonLink href="/about" className="mt-7">Learn More</ButtonLink>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lift">
            <HotelImage src="/images/kings/poster-corridor.jpeg" alt="Kings Hostels corridor brand visual" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-light">
        <Container>
          <SectionHeading eyebrow="Branches" title="Two Branches, One Kings Hostels Brand" subtitle={site.headline} />
          <div className="grid gap-6 md:grid-cols-2">
            {branches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection id="compare">
        <Container>
          <SectionHeading eyebrow="Compare" title="Compare Both Branches" subtitle="Choose the location that best matches your university access, daily commute, and room preference." />
          <BranchComparison />
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-primary text-white">
        <Container>
          <SectionHeading
            eyebrow="Facilities"
            title="Featured Facilities"
            subtitle="Facility availability can vary by branch. The inquiry form helps confirm current room and shared facility options."
            inverse
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {amenities.map((amenity) => (
              <div key={amenity.title} className="group overflow-hidden rounded-lg border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-gold/70">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <HotelImage src={amenity.image} alt={`${amenity.title} at Kings Hostels`} sizes="(min-width: 1024px) 20vw, 50vw" className="transition duration-500 group-hover:scale-105" />
                  <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-gold shadow-soft">
                    <Icon name={amenity.icon} className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-white">{amenity.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{amenity.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection>
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lift">
            <HotelImage src="/images/kings/poster-room.jpeg" alt="Kings Hostels room poster" />
          </div>
          <div>
            <SectionHeading
              centered={false}
              eyebrow="Student Life"
              title="A Place to Live, Learn & Grow"
              subtitle="Kings Hostels focuses on peaceful living, study routines, practical facilities, and a parent-friendly sense of organization."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {["Peaceful room environment", "Clean corridors and interiors", "Shared daily convenience", "Easy branch inquiry"].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
                  <Icon name="Star" className="h-5 w-5 text-accent" />
                  <h3 className="mt-3 font-black text-primary">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-light">
        <Container>
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading centered={false} eyebrow="Gallery" title="Real Kings Hostels Images" subtitle="Rooms, corridors, exterior areas, brand visuals, and shared facility photos." className="mb-0" />
            <ButtonLink href="/gallery" variant="outline">View Full Gallery</ButtonLink>
          </div>
          <GalleryGrid limit={6} />
        </Container>
      </AnimatedSection>

      <AnimatedSection>
        <Container>
          <SectionHeading eyebrow="Testimonials & Reviews" title="Why Students Prefer Kings Hostels" subtitle="Review-style experience highlights based on the hostel positioning and visible facilities. Replace these with verified student reviews when available." />
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="flex gap-1 text-gold" aria-label="Five star review-style rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon key={index} name="Star" className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 leading-7 text-muted">"{item.quote}"</p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <h3 className="font-black text-primary">{item.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-light">
        <Container>
          <SectionHeading eyebrow="Locations" title="Location Highlights" subtitle="Each branch has its own address and local context under the Kings Hostels brand." />
          <div className="grid gap-6 md:grid-cols-2">
            {branches.map((branch) => (
              <MapEmbed key={branch.id} title={branch.name} label={branch.address} />
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection>
        <Container>
          <SectionHeading eyebrow="FAQ" title="Common Questions" subtitle="Quick answers about branches, booking inquiry, rooms, and facilities." />
          <div className="mx-auto grid max-w-4xl gap-4">
            {faqs.slice(0, 7).map((faq) => (
              <details key={faq.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
                <summary className="cursor-pointer text-base font-black text-primary">{faq.question}</summary>
                <p className="mt-3 leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <ButtonLink href="/faq" variant="outline">View All FAQ</ButtonLink>
          </div>
        </Container>
      </AnimatedSection>

      <section className="bg-primary py-16 text-white">
        <Container className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-gold">{site.headline}</p>
          <h2 className="mt-4 text-4xl font-black">Ready to Inquire for a Room?</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/booking">Book Now</ButtonLink>
            <ButtonLink href={whatsappUrl("Hello Kings Hostels, I want to book a room.")} variant="light">WhatsApp Us</ButtonLink>
            <ButtonLink href="/branches" variant="gold">Explore Branches</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}

function HeroSelector({ href, title, text, image }: { href: string; title: string; text: string; image: string }) {
  return (
    <Link href={href} className="group grid grid-cols-[104px_1fr] overflow-hidden rounded-lg border border-white/15 bg-white/10 text-white shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-gold">
      <span className="relative min-h-28 overflow-hidden">
        <HotelImage src={image} alt={title} sizes="120px" className="transition duration-500 group-hover:scale-105" />
      </span>
      <span className="p-5">
        <span className="block text-xl font-black">{title}</span>
        <span className="mt-2 block text-sm leading-6 text-slate-200">{text}</span>
      </span>
    </Link>
  );
}
