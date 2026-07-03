import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";

export function AboutPreview() {
  return (
    <Container className="text-center">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">Welcome</p>
      <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight text-primary sm:text-6xl">Welcome to Hotel Ambassador Lahore</h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
        A refined hospitality experience in Lahore for guests seeking comfort, convenience, dining, events, and professional service.
      </p>
      <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
        {["/images/ambassador/ambassador-28.jpg", "/images/ambassador/ambassador-35.jpg", "/images/ambassador/ambassador-40.jpg"].map((image, index) => (
          <div key={image} className={`relative overflow-hidden rounded-lg shadow-soft ${index === 1 ? "aspect-[4/5] md:-mt-8" : "aspect-[4/4]"}`}>
            <HotelImage src={image} alt="Hotel Ambassador Lahore hospitality" />
          </div>
        ))}
      </div>
      <ButtonLink href="/about" variant="gold" className="mt-9">Discover More</ButtonLink>
    </Container>
  );
}
