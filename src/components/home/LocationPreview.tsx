import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LocationPreview() {
  return (
    <Container className="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <SectionHeading centered={false} eyebrow="Location" title="Stay Connected to Lahore" subtitle="Hotel Ambassador Lahore is positioned as a city hotel with convenient access to business, cultural, and travel areas in Lahore." />
        <div className="grid gap-3">
          {["Business districts", "Cultural areas", "Travel connections"].map((item) => <p key={item} className="flex items-center gap-2 text-muted"><Icon name="MapPin" className="h-5 w-5 text-accent" /> {item}</p>)}
        </div>
        <ButtonLink href="/location" className="mt-7" variant="gold">Get Directions</ButtonLink>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lift"><HotelImage src="/images/ambassador/ambassador-40.jpg" alt="Hotel Ambassador Lahore entrance" /></div>
    </Container>
  );
}
