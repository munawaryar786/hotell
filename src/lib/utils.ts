import { site } from "@/data/site";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telUrl(phone = site.phone) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function mailUrl(subject = "Hotel Ambassador Lahore Inquiry") {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
