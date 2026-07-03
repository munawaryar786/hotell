import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  inverse = false,
  className
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 max-w-3xl", centered && "mx-auto text-center", className)}>
      {eyebrow ? <Badge className={inverse ? "border-gold/40 bg-gold/10 text-gold" : undefined}>{eyebrow}</Badge> : null}
      <h2 className={cn("mt-4 font-display text-4xl font-semibold tracking-normal sm:text-5xl", inverse ? "text-white" : "text-primary")}>{title}</h2>
      {subtitle ? <p className={cn("mt-4 text-base leading-7 sm:text-lg", inverse ? "text-slate-300" : "text-muted")}>{subtitle}</p> : null}
    </div>
  );
}

