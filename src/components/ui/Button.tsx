import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "light" | "gold";

export function buttonClasses(variant: Variant = "primary", className?: string) {
  const base =
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 active:translate-y-0";
  const variants: Record<Variant, string> = {
    primary: "bg-accent text-white shadow-red hover:bg-secondary hover:shadow-xl",
    secondary: "bg-primary text-white shadow-lg shadow-black/15 hover:bg-secondary hover:shadow-xl",
    outline: "border border-slate-300 bg-white text-primary hover:border-accent hover:text-accent hover:shadow-md",
    light: "bg-white text-primary shadow-lg shadow-black/10 hover:shadow-xl",
    gold: "bg-gold text-primary shadow-lg shadow-primary/10 hover:bg-white hover:shadow-xl"
  };
  return cn(base, variants[variant], className);
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode; variant?: Variant }) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} className={buttonClasses(variant, className)} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClasses(variant, className)} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; variant?: Variant }) {
  return (
    <button className={buttonClasses(variant, className)} {...props}>
      {children}
    </button>
  );
}
