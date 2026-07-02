import { Icon } from "@/components/ui/Icon";

export function MapEmbed({ title, label }: { title: string; label: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
      <div className="flex h-[320px] items-center justify-center bg-[linear-gradient(135deg,#F8FAFC,#fff_45%,#fee2e2)] p-6 text-center">
        <div>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-gold">
            <Icon name="MapPin" className="h-7 w-7" />
          </div>
          <h3 className="mt-4 text-xl font-black text-primary">{title}</h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted">{label}</p>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-accent">Google Maps embed placeholder</p>
        </div>
      </div>
    </div>
  );
}
