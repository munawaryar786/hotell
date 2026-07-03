import { branches } from "@/data/branches";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const rows = [
  { label: "Address", value: (index: number) => branches[index].address },
  { label: "Seat availability", value: () => "Shared and comfortable room options by inquiry" },
  { label: "Geyser facility", value: () => "Electric geyser facility where available" },
  { label: "Shared amenities", value: (index: number) => branches[index].amenities.slice(0, 5).join(", ") },
  { label: "Best for", value: (index: number) => branches[index].bestFor },
  { label: "Nearby landmarks", value: (index: number) => branches[index].nearby }
];

export function BranchComparison() {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
      <div className="grid bg-primary text-white md:grid-cols-[220px_1fr_1fr]">
        <div className="hidden p-5 text-sm font-black uppercase tracking-[0.12em] text-gold md:block">Compare</div>
        {branches.map((branch) => (
          <div key={branch.id} className="border-t border-white/10 p-5 md:border-l md:border-t-0">
            <h3 className="text-xl font-black">{branch.name}</h3>
            <p className="mt-1 text-sm text-slate-300">{branch.shortName}</p>
          </div>
        ))}
      </div>
      {rows.map((row) => (
        <div key={row.label} className="grid border-t border-slate-200 md:grid-cols-[220px_1fr_1fr]">
          <div className="bg-light p-5 text-sm font-black uppercase tracking-[0.08em] text-primary">{row.label}</div>
          {branches.map((branch, index) => (
            <div key={branch.id} className="border-t border-slate-200 p-5 text-sm leading-6 text-muted md:border-l md:border-t-0">
              {row.value(index)}
            </div>
          ))}
        </div>
      ))}
      <div className="grid gap-3 border-t border-slate-200 p-5 md:grid-cols-2">
        {branches.map((branch) => (
          <ButtonLink key={branch.id} href={`/branches/${branch.slug}`} variant="outline">
            <Icon name="MapPin" className="h-4 w-4" />
            Inquire for {branch.name}
          </ButtonLink>
        ))}
      </div>
    </div>
  );
}
