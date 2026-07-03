import type { Metadata } from "next";
import { branches } from "@/data/branches";
import { site } from "@/data/site";

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const fullTitle = title === site.name ? `${site.name} | Boys Hostel in Lahore` : `${title} | ${site.name}`;
  const url = `${site.url}${path}`;

  return {
    metadataBase: new URL(site.url),
    title: fullTitle,
    description,
    keywords: site.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      images: [site.heroImage],
      locale: "en_PK",
      type: "website"
    }
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: site.name,
    description: "Boys hostel and student accommodation in Lahore near Gulberg III and Academy Road.",
    url: site.url,
    telephone: site.phone,
    image: `${site.url}${site.heroImage}`,
    priceRange: "Contact for current rates",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK"
    },
    department: branches.map((branch) => ({
      "@type": "LodgingBusiness",
      name: branch.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: branch.address,
        addressLocality: "Lahore",
        addressCountry: "PK"
      },
      image: `${site.url}${branch.image}`
    })),
    amenityFeature: [
      "24-hours security cameras",
      "Neat and clean rooms",
      "High-speed internet",
      "Parking garage",
      "Electric geyser facility",
      "Study-friendly environment"
    ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true }))
  };
}
