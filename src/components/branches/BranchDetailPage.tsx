import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookingForm } from "@/components/forms/BookingForm";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { branches, getBranch } from "@/data/branches";
import { roomTypes } from "@/data/rooms";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/utils";

type Props = { params: { slug?: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug ?? "";
  const branch = getBranch(slug);
  if (!branch) return pageMetadata("Kings Hostels Branch", "Kings Hostels branch details.");
  return pageMetadata(branch.name, `${branch.name} details, address, rooms, facilities, and booking inquiry.`, `/branches/${branch.slug}`);
}

export function generateStaticParams() {
  return branches.map((branch) => ({ slug: branch.slug }));
}

export default function BranchDetailPage({ params }: Props) {
  const slug = params.slug ?? "";
  const branch = getBranch(slug);
  if (!branch) notFound();
  const related = branches.find((item) => item.id !== branch.id);

  return (
    <>
      <PageHero eyebrow={branch.shortName} title={branch.title} subtitle={branch.description} image={branch.image} ctaHref="/booking" ctaLabel="Inquire for This Branch" />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading centered={false} eyebrow="Address" title={branch.name} subtitle={branch.address} />
            <p className="leading-8 text-muted">{branch.nearby}</p>
            <div className="mt-7 grid gap-3">
              {branch.highlights.map((highlight) => (
                <p key={highlight} className="flex items-start gap-2 font-semibold text-primary">
                  <Icon name="CheckCircle2" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {highlight}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/booking">Book This Branch</ButtonLink>
              <ButtonLink href={whatsappUrl(`Hello Kings Hostels, I want to inquire about ${branch.name}.`)} variant="outline">
                WhatsApp CTA
              </ButtonLink>
            </div>
          </div>
          <MapEmbed title={`${branch.name} map`} label={branch.address} />
        </Container>
      </section>
      <section className="bg-light py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Branch Gallery" title={`${branch.name} Images`} subtitle="Selected real Kings Hostels photos and branch visuals." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {branch.gallery.map((image) => (
              <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
                <HotelImage src={image} alt={`${branch.name} gallery image`} />
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Rooms & Facilities" title="Branch Room Preview" subtitle="Availability can vary by branch and should be confirmed through inquiry." />
          <div className="grid gap-5 md:grid-cols-3">
            {roomTypes.map((room) => (
              <div key={room.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
                <div className="relative aspect-[4/3]">
                  <HotelImage src={room.image} alt={room.title} />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-black text-primary">{room.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{room.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {branch.amenities.map((amenity) => (
              <div key={amenity} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-primary shadow-soft">
                {amenity}
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-light py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading centered={false} eyebrow="Related Branch" title={related ? `Also View ${related.name}` : "Explore Branches"} subtitle="Both locations belong to the same Kings Hostels brand." />
            {related ? (
              <ButtonLink href={`/branches/${related.slug}`} variant="secondary">
                View {related.name}
              </ButtonLink>
            ) : null}
          </div>
          <BookingForm compact />
        </Container>
      </section>
    </>
  );
}
