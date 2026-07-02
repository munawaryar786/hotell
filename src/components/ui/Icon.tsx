import {
  Bath,
  BedDouble,
  BookOpen,
  Building2,
  CalendarCheck,
  Car,
  CheckCircle2,
  Clock,
  CookingPot,
  Droplets,
  Flame,
  Home,
  Image as ImageIcon,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Shirt,
  Snowflake,
  Sparkles,
  Star,
  Users,
  WashingMachine,
  Wifi,
  X,
  type LucideIcon
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Bath,
  BedDouble,
  BookOpen,
  Building2,
  CalendarCheck,
  Car,
  CheckCircle2,
  Clock,
  CookingPot,
  Droplets,
  Flame,
  Home,
  ImageIcon,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Shirt,
  Snowflake,
  Sparkles,
  Star,
  Users,
  WashingMachine,
  Wifi,
  X
};

export function Icon({ name, className, "aria-hidden": ariaHidden = true }: { name: string; className?: string; "aria-hidden"?: boolean }) {
  const Component = icons[name] ?? CheckCircle2;
  return <Component aria-hidden={ariaHidden} className={className} />;
}
