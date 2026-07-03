import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "About Student Point Hostel",
  "Learn about Student Point Hostel, a boys hostel in Lahore for clean, secure, and study-friendly student living.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Student Living in Lahore with Comfort, Security, and Peace"
        subtitle="Student Point Hostel is built for boys who need clean rooms, practical facilities, secure surroundings, and a peaceful study-friendly routine in Lahore."
        image="/images/kings/exterior-side.jpeg"
      />
      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading centered={false} eyebrow="Brand Concept" title="A Dedicated Boys Hostel for Student Life" subtitle={site.headline} />
            <p className="leading-8 text-muted">
              Student Point Hostel is a boys hostel in Lahore designed for students who need a secure, clean, and peaceful place to live. The hostel focuses on practical comfort, study-friendly surroundings, and essential daily facilities for a better student living experience.
            </p>
            <div className="mt-7 grid gap-3">
              {["Student-friendly accommodation", "Neat and clean rooms", "24-hours security camera support", "High-speed internet service"].map((item) => (
                <p key={item} className="flex items-center gap-2 font-semibold text-primary">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-accent" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lift">
            <HotelImage src="/images/kings/corridor.jpeg" alt="Student Point Hostel clean corridor" />
          </div>
        </Container>
      </section>
      <section className="bg-light py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Mission" title="Comfort, Focus, and Practical Support" subtitle="The goal is simple: make hostel living feel organized, reliable, and suitable for student life." />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: "Student Living Focus", icon: "BookOpen" },
              { title: "Parent-Friendly Clarity", icon: "ShieldCheck" },
              { title: "Seat Availability by Inquiry", icon: "CalendarCheck" }
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <Icon name={item.icon} className="h-7 w-7 text-accent" />
                <h3 className="mt-4 text-xl font-black text-primary">{item.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lift">
            <HotelImage src="/images/student-point-hostel/student-point-seats-available.jpg" alt="Seats available at Student Point Hostel" />
          </div>
          <div>
            <SectionHeading centered={false} eyebrow="Location" title="Near Gulberg III and Academy Road" subtitle="The hostel is positioned for students who need access to nearby study and city areas." />
            <p className="leading-8 text-muted">{site.addressSummary}</p>
            <ButtonLink href="/location" className="mt-7" variant="outline">View Location</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
