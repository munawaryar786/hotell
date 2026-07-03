"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { media } from "@/data/media";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => setActive((value) => (value + 1) % media.heroSliderImages.length), 6200);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  return (
    <section className="relative min-h-[82vh] overflow-hidden bg-black text-white md:min-h-screen" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <AnimatePresence mode="wait">
        <motion.div key={media.heroSliderImages[active]} initial={reduceMotion ? false : { opacity: 0, scale: 1.02 }} animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }} exit={reduceMotion ? undefined : { opacity: 0 }} transition={{ duration: 1.35, ease: "easeOut" }} className="absolute inset-0">
          <Image src={media.heroSliderImages[active]} alt="Hotel Ambassador Lahore luxury hospitality" fill priority={active === 0} sizes="100vw" className="object-cover" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-primary/58 to-black/18" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/80 to-transparent" />
      <Container className="relative flex min-h-[82vh] items-center pt-20 md:min-h-screen">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl py-20">
          <div className="mb-7 h-px w-20 bg-gold" />
          <p className="text-xs font-black uppercase tracking-[0.28em] text-gold">Hotel Ambassador Lahore</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-normal sm:text-7xl lg:text-8xl">A Premium Stay in the Heart of Lahore</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            Experience refined comfort, elegant accommodation, dining, events, and warm hospitality at Hotel Ambassador Lahore.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/booking" variant="gold">Book Your Stay</ButtonLink>
            <ButtonLink href="/rooms" variant="light">Explore Rooms</ButtonLink>
            <ButtonLink href="/banquets-events" variant="outline" className="border-white/35 bg-white/5 text-white hover:border-gold hover:text-white">Plan an Event</ButtonLink>
          </div>
        </motion.div>
      </Container>
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3" aria-label="Hero slider controls">
        {media.heroSliderImages.map((_, index) => (
          <button key={index} type="button" onClick={() => setActive(index)} aria-label={`Show hero image ${index + 1}`} className={cn("h-2 rounded-full transition-all", active === index ? "w-10 bg-gold" : "w-2 bg-white/55 hover:bg-white")} />
        ))}
      </div>
    </section>
  );
}
