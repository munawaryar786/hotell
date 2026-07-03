import { facilities } from "@/data/facilities";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FacilitiesPreview() {
  return (
    <Container>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeading centered={false} eyebrow="Facilities" title="Guest Facilities and Hotel Services" subtitle="Availability may vary. Please confirm specific facilities directly with the hotel before arrival." className="mb-0" />
        <ButtonLink href="/facilities" variant="outline">View Facilities</ButtonLink>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {facilities.slice(0, 8).map((facility) => (
          <div key={facility.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
            <Icon name={facility.icon} className="h-6 w-6 text-accent" />
            <h3 className="mt-4 font-black text-primary">{facility.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{facility.note}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
