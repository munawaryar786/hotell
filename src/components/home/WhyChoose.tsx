import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = ["Premium Hospitality", "Comfortable Rooms", "Dining & Room Service", "Banquets & Events", "Business Friendly", "Family Friendly", "Direct Booking Support", "Central Lahore Access"];

export function WhyChoose() {
  return (
    <Container>
      <SectionHeading eyebrow="Why Choose" title="Why Choose Hotel Ambassador Lahore?" subtitle="Quiet luxury, professional service, and direct inquiry support for every stay and gathering." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div key={item} className="rounded-lg border border-black/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent/70">
            <Icon name={index % 4 === 0 ? "Sparkles" : index % 4 === 1 ? "BedDouble" : index % 4 === 2 ? "Utensils" : "CheckCircle2"} className="h-6 w-6 text-accent" />
            <h3 className="mt-4 font-display text-xl font-semibold text-primary">{item}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">Designed for guests who value comfort, clarity, and attentive hospitality.</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
