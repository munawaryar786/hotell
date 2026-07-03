import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { site } from "@/data/site";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image = "/images/ambassador/ambassador-03.jpg",
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
    <section className="relative overflow-hidden bg-primary pb-20 pt-32 text-white sm:pb-24 sm:pt-36">
      <div className="absolute inset-0 opacity-50">
        <HotelImage src={image} alt={title} priority sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/88 to-primary/35" />
      <Container className="relative">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2">
          <span className="relative h-9 w-9 overflow-hidden rounded-full bg-white p-1">
            <Image src={site.logo} alt="" fill sizes="36px" className="object-contain" />
          </span>
          <span className="text-xs font-black uppercase tracking-[0.16em] text-gold">{eyebrow}</span>
        </div>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold tracking-normal sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{subtitle}</p>
        {ctaHref && ctaLabel ? (
          <ButtonLink href={ctaHref} className="mt-8" variant="gold">
            {ctaLabel}
          </ButtonLink>
        ) : null}
      </Container>
    </section>
  );
}

