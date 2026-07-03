"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { navItems, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { cn, telUrl, whatsappUrl } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0.92)", "rgba(255,255,255,0.98)"]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary text-white">
        <Container className="flex min-h-9 flex-wrap items-center justify-center gap-x-5 gap-y-1 py-2 text-xs sm:justify-between sm:text-sm">
          {site.topBar.map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {item}
            </span>
          ))}
        </Container>
      </div>
      <motion.div style={{ backgroundColor: bg }} className="border-b border-slate-200/90 backdrop-blur">
        <Container className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="focus-ring flex items-center gap-3 rounded-md" aria-label="Student Point Hostel home">
            <span className="relative h-12 w-12 overflow-hidden rounded-full border border-slate-200 bg-primary shadow-soft">
              <Image src={site.logo} alt="Student Point Hostel logo" fill sizes="48px" className="object-cover" priority />
            </span>
            <span>
              <span className="block text-lg font-black leading-none text-primary">{site.name}</span>
              <span className="mt-1 block text-xs font-bold uppercase text-accent">{site.tagline}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link text-sm font-semibold text-slate-800 transition hover:text-accent">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink href={whatsappUrl("Hello Student Point Hostel, I want to inquire about seat availability.")} variant="outline">
              <Icon name="MessageCircle" className="h-4 w-4" />
              WhatsApp
            </ButtonLink>
            <ButtonLink href="/booking">
              <Icon name="CalendarCheck" className="h-4 w-4" />
              Book Your Seat
            </ButtonLink>
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-primary lg:hidden"
          >
            <Icon name={open ? "X" : "Menu"} className="h-5 w-5" />
          </button>
        </Container>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-b border-slate-200 bg-white shadow-soft lg:hidden"
          >
            <Container className="grid gap-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn("focus-ring rounded-md px-3 py-3 text-sm font-bold text-primary hover:bg-light")}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <ButtonLink href={telUrl()} variant="secondary" onClick={() => setOpen(false)}>
                  <Icon name="Phone" className="h-4 w-4" />
                  Call
                </ButtonLink>
                <ButtonLink href="/booking" onClick={() => setOpen(false)}>
                  Book Seat
                </ButtonLink>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
