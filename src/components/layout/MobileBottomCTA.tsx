"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { telUrl, whatsappUrl } from "@/lib/utils";

export function MobileBottomCTA() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-slate-200 bg-white/96 shadow-lift backdrop-blur lg:hidden" aria-label="Mobile quick actions">
      <a href={telUrl()} className="focus-ring flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-black text-primary">
        <Icon name="Phone" className="h-5 w-5 text-accent" />
        Call
      </a>
      <a href={whatsappUrl("Hello Hotel Ambassador Lahore, I want to inquire about room availability.")} className="focus-ring flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-black text-primary">
        <Icon name="MessageCircle" className="h-5 w-5 text-accent" />
        WhatsApp
      </a>
      <Link href="/booking" className="focus-ring flex min-h-16 flex-col items-center justify-center gap-1 bg-primary text-xs font-black text-white">
        <Icon name="CalendarCheck" className="h-5 w-5 text-gold" />
        Book
      </Link>
    </nav>
  );
}
