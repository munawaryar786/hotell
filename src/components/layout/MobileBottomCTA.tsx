"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { hasPhone, hasWhatsApp, telUrl, whatsappUrl } from "@/lib/utils";

export function MobileBottomCTA() {
  const actions = [
    hasPhone ? { label: "Call", href: telUrl(), icon: "Phone" } : null,
    hasWhatsApp ? { label: "WhatsApp", href: whatsappUrl("Hello Hotel Ambassador Lahore, I want to inquire about room availability."), icon: "MessageCircle" } : null,
    { label: "Book", href: "/booking", icon: "CalendarCheck" }
  ].filter(Boolean) as Array<{ label: string; href: string; icon: string }>;

  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 grid overflow-hidden rounded-full border border-gold/25 bg-black/92 text-white shadow-lift backdrop-blur-xl lg:hidden" style={{ gridTemplateColumns: `repeat(${actions.length}, minmax(0, 1fr))` }} aria-label="Mobile quick actions">
      {actions.map((action) => {
        const content = <><Icon name={action.icon} className="h-4 w-4 text-gold" /><span>{action.label}</span></>;
        const classes = "focus-ring flex min-h-12 items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/10";
        return action.href.startsWith("/") ? <Link key={action.label} href={action.href} className={classes}>{content}</Link> : <a key={action.label} href={action.href} className={classes}>{content}</a>;
      })}
    </nav>
  );
}
