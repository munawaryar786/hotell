"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { media } from "@/data/media";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

const highlights = ["Rooms & Suites", "Dining", "Banquets & Events", "Business Stay", "Central Lahore Location"];

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => setActive((value) => (value + 1) % media.heroSliderImages.length), 5200);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  return (
    <section className="relative overflow-hidden bg-primary text-white">
      {media.heroVideo ? (
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster={media.heroPoster} preload="metadata">
          <source src={media.heroVideo} type="video/mp4" />
        </video>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div key={media.heroSliderImages[active]} initial={reduceMotion ? false : { opacity: 0 }} animate={reduceMotion ? undefined : { opacity: 1 }} exit={reduceMotion ? undefined : { opacity: 0 }} transition={{ duration: 1.1 }} className="absolute inset-0">
            <Image src={media.heroSliderImages[active]} alt="Hotel Ambassador Lahore premium hospitality" fill priority={active === 0} sizes="100vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/82 to-primary/30" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/90 to-transparent" />
      <Container className="relative grid min-h-[760px] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-gold">Premium Hotel in Lahore</span>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-tight tracking-normal sm:text-6xl">A Premium Stay in the Heart of Lahore</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
            Experience refined comfort, elegant rooms, dining, events, and warm hospitality at Hotel Ambassador Lahore.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/booking" variant="gold">Book Your Stay</ButtonLink>
            <ButtonLink href="/rooms" variant="light">Explore Rooms</ButtonLink>
            <ButtonLink href="/banquets-events" variant="outline">Plan an Event</ButtonLink>
          </div>
          <button type="button" onClick={() => setPaused((value) => !value)} className="focus-ring mt-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white">
            {paused ? "Resume media" : "Pause media"}
          </button>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <Link key={item} href={index === 0 ? "/rooms" : index === 1 ? "/dining" : index === 2 ? "/banquets-events" : index === 3 ? "/meetings-conferences" : "/location"} className="focus-ring rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-gold/80">
              <Icon name={index === 0 ? "BedDouble" : index === 1 ? "Utensils" : index === 2 ? "Sparkles" : index === 3 ? "Monitor" : "MapPin"} className="h-6 w-6 text-gold" />
              <span className="mt-4 block text-lg font-black">{item}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
