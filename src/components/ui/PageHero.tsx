import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { site } from "@/data/site";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image = "/images/student-point-hostel/student-point-poster-main.jpg",
  ctaHref,
  ctaLabel
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-24">
      <div className="absolute inset-0 opacity-42">
        <HotelImage src={image} alt={title} priority sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/88 to-primary/45" />
      <Container className="relative">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2">
          <span className="relative h-9 w-9 overflow-hidden rounded-full bg-white">
            <Image src={site.logo} alt="" fill sizes="36px" className="object-cover" />
          </span>
          <span className="text-xs font-black uppercase tracking-[0.16em] text-gold">{eyebrow}</span>
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-normal sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{subtitle}</p>
        {ctaHref && ctaLabel ? (
          <ButtonLink href={ctaHref} className="mt-8">
            {ctaLabel}
          </ButtonLink>
        ) : null}
      </Container>
    </section>
  );
}
