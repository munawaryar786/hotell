import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { telUrl, whatsappUrl } from "@/lib/utils";

export function MobileBottomCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-2 shadow-[0_-12px_30px_rgba(0,0,0,0.10)] backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a href={telUrl()} className="focus-ring flex min-h-12 flex-col items-center justify-center rounded-md bg-primary text-xs font-bold text-white">
          <Icon name="Phone" className="mb-1 h-4 w-4" />
          Call
        </a>
        <a
          href={whatsappUrl("Hello Kings Hostels, I want to inquire about rooms.")}
          className="focus-ring flex min-h-12 flex-col items-center justify-center rounded-md bg-[#128C7E] text-xs font-bold text-white"
        >
          <Icon name="MessageCircle" className="mb-1 h-4 w-4" />
          WhatsApp
        </a>
        <Link href="/booking" className="focus-ring flex min-h-12 flex-col items-center justify-center rounded-md bg-accent text-xs font-bold text-white">
          <Icon name="CalendarCheck" className="mb-1 h-4 w-4" />
          Book
        </Link>
      </div>
    </div>
  );
}
