import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPreview() {
  return (
    <Container className="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <SectionHeading centered={false} eyebrow="Welcome" title="Welcome to Hotel Ambassador Lahore" subtitle="Hotel Ambassador Lahore is presented as a premium city hotel designed for guests who value comfort, convenience, hospitality, and easy access to Lahore's key business and cultural areas." />
        <ButtonLink href="/about" variant="gold">Discover More</ButtonLink>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lift"><HotelImage src="/images/ambassador/ambassador-28.jpg" alt="Hotel Ambassador Lahore reception" /></div>
        <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-lg shadow-lift"><HotelImage src="/images/ambassador/ambassador-35.jpg" alt="Hotel Ambassador Lahore lounge" /></div>
      </div>
    </Container>
  );
}
