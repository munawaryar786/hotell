import { Icon } from "@/components/ui/Icon";

export function MapEmbed({ title, label }: { title: string; label: string }) {
  const query = encodeURIComponent(label);
  const mapSrc = `https://www.google.com/maps?q=${query}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
      <div className="relative h-[360px] bg-light">
        <iframe
          title={title}
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
          allowFullScreen
        />
      </div>
      <div className="flex flex-col gap-4 border-t border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-black text-primary">
            <Icon name="MapPin" className="h-5 w-5 text-accent" />
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{label}</p>
        </div>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-secondary"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}
