"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(5,5,5,0.9)", "rgba(5,5,5,0.98)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0.1)", "rgba(212,175,55,0.32)"]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <motion.div style={{ backgroundColor: bg, borderColor: border }} className="border-b backdrop-blur-xl">
          <Container className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3 lg:h-20 lg:gap-6 xl:grid-cols-[1fr_auto_1fr]">
            <div className="flex min-w-0 items-center gap-4">
              <button
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
                className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/18 bg-white/5 text-white transition hover:border-gold hover:text-gold lg:h-12 lg:w-12"
              >
                <Icon name="Menu" className="h-5 w-5" />
              </button>
              <nav className="hidden min-w-0 items-center gap-4 xl:flex" aria-label="Primary navigation">
                {navItems.slice(0, 4).map((item) => (
                  <Link key={item.href} href={item.href} className="nav-link text-xs font-bold uppercase tracking-[0.12em] text-white/90 transition hover:text-gold">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <Link href="/" className="focus-ring mx-auto flex min-w-0 max-w-[12rem] shrink-0 items-center justify-center gap-2 rounded-md text-center sm:max-w-none lg:gap-3 xl:px-4" aria-label="Hotel Ambassador Lahore home">
              <span className="relative hidden h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white p-1 sm:block">
                <Image src={site.logo} alt="Hotel Ambassador Lahore logo" fill sizes="44px" className="object-contain" priority />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-[15px] font-semibold leading-[1.05] text-white sm:text-xl lg:whitespace-nowrap">
                  <span className="block sm:inline">Hotel Ambassador</span>
                  <span className="block sm:inline"> Lahore</span>
                </span>
                <span className="mt-1 hidden text-[10px] font-bold uppercase tracking-[0.18em] text-gold sm:block">{site.tagline}</span>
              </span>
            </Link>

            <div className="flex min-w-0 items-center justify-end gap-4">
              <nav className="hidden min-w-0 items-center gap-4 xl:flex" aria-label="Secondary navigation">
                {navItems.slice(4).map((item) => (
                  <Link key={item.href} href={item.href} className="nav-link text-xs font-bold uppercase tracking-[0.12em] text-white/90 transition hover:text-gold">
                    {item.label}
                  </Link>
                ))}
              </nav>
              <ButtonLink href="/booking" variant="gold" className="h-11 min-h-0 min-w-[104px] rounded-xl px-4 py-0 text-[11px] font-black uppercase tracking-[0.08em] shadow-lg shadow-black/20 hover:-translate-y-0.5 lg:h-12 lg:min-w-[142px] lg:px-7 lg:text-xs">
                Book Now
              </ButtonLink>
            </div>
          </Container>
        </motion.div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[9999] h-[100dvh] overflow-y-auto overscroll-contain bg-black/92 pb-10 text-white backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/72 via-black/92 to-black" />
            <Container className="relative flex min-h-[100dvh] flex-col py-5 pb-10">
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-white/10 pb-5">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-gold hover:text-gold"
                >
                  <Icon name="X" className="h-5 w-5" />
                </button>
                <div className="min-w-0 text-center">
                  <p className="font-display text-xl font-semibold leading-tight text-white sm:text-2xl">Hotel Ambassador Lahore</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{site.tagline}</p>
                </div>
                <ButtonLink href="/booking" variant="gold" onClick={() => setOpen(false)} className="h-11 min-h-0 rounded-xl px-4 py-0 text-[11px] uppercase tracking-[0.08em]">
                  Book
                </ButtonLink>
              </div>

              <nav className="grid flex-none gap-3 py-6 sm:grid-cols-2 lg:grid-cols-4" aria-label="Expanded navigation">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring flex min-h-16 items-center rounded-xl border border-white/10 bg-white/[0.04] px-5 text-sm font-bold uppercase tracking-[0.12em] text-white/90 transition hover:border-gold/70 hover:bg-gold/10 hover:text-gold"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto border-t border-white/10 pt-5">
                <ButtonLink href="/booking" variant="gold" onClick={() => setOpen(false)} className="h-14 w-full rounded-xl text-sm uppercase tracking-[0.1em]">
                  Book Your Stay
                </ButtonLink>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

