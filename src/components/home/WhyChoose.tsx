import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = ["Premium City Location", "Comfortable Rooms & Suites", "Dining & Guest Services", "Banquets & Events", "Business Travel Friendly", "Family Stay Friendly", "Professional Hospitality", "Direct Booking Support", "Easy Access to Lahore Attractions", "Event Inquiry Support"];

export function WhyChoose() {
  return (
    <Container>
      <SectionHeading eyebrow="Why Choose" title="Why Choose Hotel Ambassador Lahore" subtitle="Built around comfort, direct inquiry support, business readiness, and warm Lahore hospitality." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item, index) => (
          <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-accent/70">
            <Icon name={index % 3 === 0 ? "MapPin" : index % 3 === 1 ? "Sparkles" : "CheckCircle2"} className="h-5 w-5 text-accent" />
            <h3 className="mt-4 text-sm font-black text-primary">{item}</h3>
          </div>
        ))}
      </div>
    </Container>
  );
}
