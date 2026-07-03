import Link from "next/link";
import { branches, type Branch } from "@/data/branches";
import { ButtonLink } from "@/components/ui/Button";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";

export function BranchCard({ branch }: { branch: Branch }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-lift">
      <Link href={`/branches/${branch.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <HotelImage src={branch.image} alt={`${branch.name} image`} sizes="(min-width: 768px) 50vw, 100vw" className="transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-black uppercase text-gold">{branch.shortName}</span>
      </Link>
      <div className="p-6">
        <h3 className="text-2xl font-black text-primary">{branch.name}</h3>
        <p className="mt-2 text-sm font-bold text-accent">{branch.mapLabel}</p>
        <p className="mt-4 leading-7 text-muted">{branch.description}</p>
        <div className="mt-5 grid gap-2">
          {branch.highlights.slice(0, 3).map((highlight) => (
            <span key={highlight} className="flex items-start gap-2 text-sm text-slate-700">
              <Icon name="CheckCircle2" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {highlight}
            </span>
          ))}
        </div>
        <ButtonLink href={`/branches/${branch.slug}`} variant="secondary" className="mt-6">
          View Location
        </ButtonLink>
      </div>
    </article>
  );
}

export function BranchCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {branches.map((branch) => (
        <BranchCard key={branch.id} branch={branch} />
      ))}
    </div>
  );
}
