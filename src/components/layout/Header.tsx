"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { navItems, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(5,5,5,0.86)", "rgba(5,5,5,0.96)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0.08)", "rgba(212,175,55,0.28)"]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div style={{ backgroundColor: bg, borderColor: border }} className="border-b backdrop-blur-xl">
        <Container className="relative flex h-16 items-center justify-between gap-4 lg:h-20">
          <div className="flex min-w-0 items-center gap-3 lg:w-1/3">
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-gold hover:text-gold"
            >
              <Icon name={open ? "X" : "Menu"} className="h-5 w-5" />
            </button>
            <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
              {navItems.slice(0, 4).map((item) => (
                <Link key={item.href} href={item.href} className="nav-link text-xs font-bold uppercase tracking-[0.16em] text-white/78 transition hover:text-gold">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link href="/" className="focus-ring absolute left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-md text-center" aria-label="Hotel Ambassador Lahore home">
            <span className="relative hidden h-11 w-11 overflow-hidden rounded-full bg-white p-1 sm:block">
              <Image src={site.logo} alt="Hotel Ambassador Lahore logo" fill sizes="44px" className="object-contain" priority />
            </span>
            <span>
              <span className="block font-display text-lg font-semibold leading-none text-white sm:text-xl">Hotel Ambassador Lahore</span>
              <span className="mt-1 hidden text-[10px] font-bold uppercase tracking-[0.22em] text-gold sm:block">{site.tagline}</span>
            </span>
          </Link>

          <div className="flex items-center justify-end gap-3 lg:w-1/3">
            <nav className="hidden items-center gap-5 xl:flex" aria-label="Secondary navigation">
              {navItems.slice(4).map((item) => (
                <Link key={item.href} href={item.href} className="nav-link text-xs font-bold uppercase tracking-[0.16em] text-white/78 transition hover:text-gold">
                  {item.label}
                </Link>
              ))}
            </nav>
            <ButtonLink href="/booking" variant="gold" className="min-h-10 px-4 py-2 text-xs uppercase tracking-[0.14em]">
              Book Now
            </ButtonLink>
          </div>
        </Container>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.24 }}
            className="border-b border-gold/20 bg-black/96 text-white shadow-lift backdrop-blur-xl"
          >
            <Container className="grid gap-2 py-5 sm:grid-cols-2 lg:grid-cols-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn("focus-ring rounded-md border border-white/10 px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white/85 transition hover:border-gold hover:text-gold")}
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink href="/booking" variant="gold" onClick={() => setOpen(false)} className="sm:col-span-2 lg:col-span-4">
                Book Your Stay
              </ButtonLink>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
