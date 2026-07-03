"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { hasPhone, hasWhatsApp, telUrl, whatsappUrl } from "@/lib/utils";

const hiddenOn = ["/booking", "/contact", "/banquets-events", "/meetings-conferences"];

export function MobileBottomCTA() {
  const pathname = usePathname();
  if (hiddenOn.some((path) => pathname === path || pathname.startsWith(`${path}/`))) return null;

  const actions = [
    hasPhone ? { label: "Call", href: telUrl(), icon: "Phone" } : null,
    hasWhatsApp ? { label: "WhatsApp", href: whatsappUrl("Hello Hotel Ambassador Lahore, I want to inquire about room availability."), icon: "MessageCircle" } : null,
    { label: "Book", href: "/booking", icon: "CalendarCheck" }
  ].filter(Boolean) as Array<{ label: string; href: string; icon: string }>;

  return (
    <nav
      className="fixed left-4 right-4 z-[999] grid h-16 overflow-hidden rounded-full border border-[#D4AF37]/70 bg-[#050505] text-white shadow-[0_18px_45px_rgba(0,0,0,0.35)] lg:hidden"
      style={{ bottom: "calc(16px + env(safe-area-inset-bottom))", gridTemplateColumns: `repeat(${actions.length}, minmax(0, 1fr))` }}
      aria-label="Mobile quick actions"
    >
      {actions.map((action) => {
        const content = <><Icon name={action.icon} className="h-5 w-5 text-[#D4AF37]" /><span>{action.label}</span></>;
        const classes = "focus-ring flex h-full items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:-translate-y-px hover:border-[#D4AF37] hover:bg-[#071D36]";
        return action.href.startsWith("/") ? <Link key={action.label} href={action.href} className={classes}>{content}</Link> : <a key={action.label} href={action.href} className={classes}>{content}</a>;
      })}
    </nav>
  );
}
