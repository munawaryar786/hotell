import { site } from "@/data/site";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function whatsappUrl(message: string) {
  if (!site.whatsapp) return "/contact";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telUrl(phone = site.phone) {
  if (!phone) return "/contact";
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function mailUrl(subject = "Hotel Ambassador Lahore Inquiry") {
  if (!site.email) return "/contact";
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

export const hasPhone = Boolean(site.phone);
export const hasWhatsApp = Boolean(site.whatsapp);
export const hasEmail = Boolean(site.email);
