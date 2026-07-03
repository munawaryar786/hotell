import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { amenities, testimonials, whyChoose } from "@/data/amenities";
import { faqs } from "@/data/faq";
import { site } from "@/data/site";
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
import { telUrl, whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "Student Point Hostel",
  "Student Point Hostel offers boys hostel accommodation in Lahore with clean rooms, security cameras, high-speed internet, parking support, and a peaceful study environment."
);

const heroHighlights = [
  "24-Hours Security Cameras",
  "Neat & Clean Rooms",
  "High-Speed Internet",
  "Parking Garage",
  "Peaceful Study Environment"
];

const nearbyPlaces = ["Cavalry Ground", "Hajvery University", "PAC Gulberg", "7Up Phattak", "Gulberg III", "Academy Road"];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-40">
          <HotelImage src={site.heroImage} alt="Student Point Hostel boys hostel poster" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary/92 to-primary/50" />
        <Container className="relative grid min-h-[760px] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2">
              <span className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
                <Image src={site.logo} alt="Student Point Hostel logo" fill sizes="40px" className="object-cover" priority />
              </span>
              <span className="text-xs font-black uppercase tracking-[0.16em] text-gold">Student Point Hostel - Boys Hostel</span>
            </div>
            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-tight tracking-normal sm:text-6xl">
              Boys Hostel in Lahore for Comfortable Student Living
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
              Student Point Hostel offers a clean, secure, and peaceful living environment for students, with essential facilities, high-speed internet, parking support, and easy access to nearby educational and city areas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/booking">Book Your Seat</ButtonLink>
              <ButtonLink href={telUrl()} variant="gold">Call Now</ButtonLink>
              <ButtonLink href={whatsappUrl("Hello Student Point Hostel, I want to inquire about seat availability.")} variant="light">
                WhatsApp Inquiry
              </ButtonLink>
              <ButtonLink href="/location" variant="outline">View Location</ButtonLink>
            </div>
            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {heroHighlights.map((pill, index) => (
                <div key={pill} className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white">
                  <Icon name={index === 0 ? "ShieldCheck" : index === 1 ? "Sparkles" : index === 2 ? "Wifi" : index === 3 ? "Car" : "BookOpen"} className="h-5 w-5 text-gold" />
                  {pill}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <HeroSelector href="/facilities" title="Facilities We Provide" text="Security cameras, internet, parking, clean rooms, and geyser support." image="/images/student-point-hostel/student-point-facilities.jpg" />
            <HeroSelector href="/rooms-facilities" title="Available Hostel Seats" text="Contact directly to confirm current seat availability." image="/images/student-point-hostel/student-point-seats-available.jpg" />
            <HeroSelector href="/location" title="Near Key Lahore Areas" text="Gulberg III, Academy Road, Cavalry Ground, Hajvery University, and PAC Gulberg." image="/images/student-point-hostel/boys-hostel-poster.jpg" />
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
            title="Why Choose Student Point Hostel?"
            subtitle="Practical boys hostel living for students who need comfort, study focus, daily convenience, and a parent-friendly sense of security."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, index) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                  <Icon name={index % 4 === 0 ? "ShieldCheck" : index % 4 === 1 ? "BookOpen" : index % 4 === 2 ? "Sparkles" : "Wifi"} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-black text-primary">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{amenities[index]?.note}</p>
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
              eyebrow="About Student Point Hostel"
              title="A Place to Live, Learn & Grow"
              subtitle="Student Point Hostel is a boys hostel in Lahore designed for students who need a secure, clean, and peaceful place to live. The hostel focuses on practical comfort, study-friendly surroundings, and essential daily facilities for a better student living experience."
            />
            <div className="grid gap-3 text-muted">
              {["Clean student accommodation near Gulberg III", "Relaxed environment perfect for study", "Direct call and WhatsApp inquiry support"].map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-accent" />
                  {item}
                </p>
              ))}
            </div>
            <ButtonLink href="/about" className="mt-7">Learn More</ButtonLink>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lift">
            <HotelImage src="/images/kings/corridor.jpeg" alt="Student Point Hostel clean corridor" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-primary text-white">
        <Container>
          <SectionHeading
            eyebrow="Facilities"
            title="Hostel Facilities for Daily Student Life"
            subtitle="Facilities are focused on comfort, safety, study routine, and practical student living."
            inverse
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((amenity) => (
              <div key={amenity.title} className="group overflow-hidden rounded-lg border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/70">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <HotelImage src={amenity.image} alt={`${amenity.title} at Student Point Hostel`} sizes="(min-width: 1024px) 25vw, 50vw" className="transition duration-500 group-hover:scale-105" />
                  <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-white shadow-soft">
                    <Icon name={amenity.icon} className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-white">{amenity.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{amenity.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection>
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lift">
            <HotelImage src="/images/kings/exterior-wide.jpeg" alt="Student Point Hostel location exterior" />
          </div>
          <div>
            <SectionHeading
              centered={false}
              eyebrow="Nearby Places"
              title="Easy Access to Nearby Study & City Areas"
              subtitle="Located at Gulbahar Colony, Academy Road, near Gulberg III, Lahore, with convenient access to important nearby places."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {nearbyPlaces.map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
                  <Icon name="MapPin" className="h-5 w-5 text-accent" />
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
            <SectionHeading centered={false} eyebrow="Gallery" title="Student Point Hostel Images" subtitle="Branding, hostel posters, facilities, location, and accommodation visuals from the provided Student Point Hostel assets." className="mb-0" />
            <ButtonLink href="/gallery" variant="outline">View Full Gallery</ButtonLink>
          </div>
          <GalleryGrid limit={5} />
        </Container>
      </AnimatedSection>

      <AnimatedSection>
        <Container>
          <SectionHeading eyebrow="Students & Parents" title="Designed for Confidence Before You Visit" subtitle="Review-style highlights based on the hostel positioning and listed facilities. Replace these with verified student reviews when available." />
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="flex gap-1 text-accent" aria-label="Five star review-style rating">
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
          <SectionHeading eyebrow="Location" title="Gulbahar Colony, Academy Road" subtitle={site.addressSummary} />
          <MapEmbed title="Student Point Hostel Location" label={site.addressSummary} />
          <div className="mt-8 text-center">
            <ButtonLink href="/location" variant="outline">Get Directions</ButtonLink>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection>
        <Container>
          <SectionHeading eyebrow="FAQ" title="Common Questions" subtitle="Quick answers about seat booking, rooms, internet, parking, security cameras, and nearby areas." />
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
          <h2 className="mt-4 text-4xl font-black">Ready to Inquire for a Seat?</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/booking">Book Your Seat</ButtonLink>
            <ButtonLink href={whatsappUrl("Hello Student Point Hostel, I want to inquire about seat availability.")} variant="light">WhatsApp Inquiry</ButtonLink>
            <ButtonLink href={telUrl()} variant="gold">Call Now</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}

function HeroSelector({ href, title, text, image }: { href: string; title: string; text: string; image: string }) {
  return (
    <Link href={href} className="focus-ring group grid min-h-28 grid-cols-[104px_1fr] overflow-hidden rounded-lg bg-white text-left text-primary shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <span className="relative min-h-28 overflow-hidden">
        <HotelImage src={image} alt={title} sizes="120px" className="transition duration-500 group-hover:scale-105" />
      </span>
      <span className="p-5">
        <span className="block text-xl font-black">{title}</span>
        <span className="mt-2 block text-sm leading-6 text-muted">{text}</span>
      </span>
    </Link>
  );
}
