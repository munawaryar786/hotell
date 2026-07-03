import type { Metadata } from "next";
import { facilities } from "@/data/facilities";
import { site } from "@/data/site";

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const fullTitle = title === site.name ? "Hotel Ambassador Lahore | Premium Hotel in Lahore" : title.includes(site.name) ? title : `${title} | ${site.name}`;
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

export function hotelJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: site.name,
    alternateName: site.alternateName,
    description: "Premium hotel in Lahore for rooms, dining, meetings, banquets, business travel, family stays, and central city hospitality.",
    url: site.url,
    telephone: site.phone,
    image: `${site.url}${site.heroImage}`,
    priceRange: "Contact for current rates",
    checkinTime: site.checkIn,
    checkoutTime: site.checkOut,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Lahore",
      addressCountry: "PK"
    },
    amenityFeature: facilities.map((facility) => ({ "@type": "LocationFeatureSpecification", name: facility.title, value: true }))
  };
}
