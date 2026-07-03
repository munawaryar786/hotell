export type Room = {
  id: string;
  slug: string;
  title: string;
  category: "Standard" | "Deluxe" | "Executive" | "Family" | "Suites";
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  capacity: string;
  bedType: string;
  amenities: string[];
  priceLabel: string;
  recommendedFor: string[];
  policies: string[];
};

export const rooms: Room[] = [
  {
    id: "standard-room",
    slug: "standard-room",
    title: "Standard Room",
    category: "Standard",
    shortDescription: "A comfortable city room for short business trips and practical Lahore stays.",
    fullDescription:
      "The Standard Room is presented for guests who want a clean, calm, and convenient stay with essential comfort. Exact room inventory and amenities should be confirmed directly with the hotel reservation team.",
    image: "/images/ambassador/ambassador-48.jpg",
    gallery: ["/images/ambassador/ambassador-48.jpg", "/images/ambassador/ambassador-29.jpg", "/images/ambassador/ambassador-24.jpg"],
    capacity: "Up to 2 guests",
    bedType: "Queen or twin bedding, subject to availability",
    amenities: ["Wi-Fi availability may vary", "Air-conditioning availability may vary", "Private bathroom", "Guest assistance"],
    priceLabel: "Contact for Best Rate",
    recommendedFor: ["Solo travelers", "Business guests", "Short city stays"],
    policies: ["Valid guest identification may be required.", "Check-in and check-out times should be confirmed before arrival."]
  },
  {
    id: "deluxe-room",
    slug: "deluxe-room",
    title: "Deluxe Room",
    category: "Deluxe",
    shortDescription: "A refined room option with generous comfort for couples, executives, and families.",
    fullDescription:
      "The Deluxe Room pairs warm hospitality styling with a more relaxed room layout, suitable for guests who prefer extra comfort while staying connected to Lahore.",
    image: "/images/ambassador/ambassador-32.jpg",
    gallery: ["/images/ambassador/ambassador-32.jpg", "/images/ambassador/ambassador-47.jpg", "/images/ambassador/ambassador-43.jpg"],
    capacity: "Up to 2 guests",
    bedType: "King, queen, or twin bedding, subject to availability",
    amenities: ["Comfort seating", "Room service availability may vary", "Wardrobe space", "Guest assistance"],
    priceLabel: "Contact for Best Rate",
    recommendedFor: ["Couples", "Executives", "Weekend stays"],
    policies: ["Rates vary by date and occupancy.", "Specific bed type should be requested during inquiry."]
  },
  {
    id: "executive-room",
    slug: "executive-room",
    title: "Executive Room",
    category: "Executive",
    shortDescription: "Business-friendly comfort with space to unwind between meetings and city commitments.",
    fullDescription:
      "The Executive Room is positioned for corporate guests and business travelers who value quiet comfort, direct booking support, and access to hotel services.",
    image: "/images/ambassador/ambassador-46.jpg",
    gallery: ["/images/ambassador/ambassador-46.jpg", "/images/ambassador/ambassador-44.jpg", "/images/ambassador/ambassador-45.jpg"],
    capacity: "Up to 2 guests",
    bedType: "King or queen bedding, subject to availability",
    amenities: ["Work-friendly layout", "Television availability may vary", "Laundry support on request", "Front desk assistance"],
    priceLabel: "Contact for Best Rate",
    recommendedFor: ["Corporate guests", "Business travelers", "Longer city stays"],
    policies: ["Corporate billing terms should be confirmed with reservations.", "Early check-in is subject to availability."]
  },
  {
    id: "family-room",
    slug: "family-room",
    title: "Family Room",
    category: "Family",
    shortDescription: "Flexible rooming for families seeking a comfortable Lahore hotel base.",
    fullDescription:
      "The Family Room is presented for guests traveling together who need flexible sleeping arrangements and a practical, comfortable base in Lahore.",
    image: "/images/ambassador/ambassador-37.jpg",
    gallery: ["/images/ambassador/ambassador-37.jpg", "/images/ambassador/ambassador-38.jpg", "/images/ambassador/ambassador-41.jpg"],
    capacity: "Up to 3 guests",
    bedType: "Twin or multi-bed setup, subject to availability",
    amenities: ["Family-friendly rooming", "Extra bedding on request", "Guest assistance", "Dining inquiry support"],
    priceLabel: "Contact for Best Rate",
    recommendedFor: ["Families", "Small groups", "Wedding guests"],
    policies: ["Children and extra bedding policies should be confirmed directly.", "Room configuration may vary."]
  },
  {
    id: "suite",
    slug: "suite",
    title: "Suite",
    category: "Suites",
    shortDescription: "A spacious suite-style stay for guests who prefer extra room and a private lounge feel.",
    fullDescription:
      "The Suite is presented as a more spacious hospitality experience with a separate lounge feel, ideal for premium leisure stays, senior business guests, and special occasions.",
    image: "/images/ambassador/ambassador-36.jpg",
    gallery: ["/images/ambassador/ambassador-36.jpg", "/images/ambassador/ambassador-52.jpg", "/images/ambassador/ambassador-39.jpg"],
    capacity: "Up to 3 guests",
    bedType: "King or suite bedding, subject to availability",
    amenities: ["Separate sitting area where available", "Premium guest support", "Room service inquiry", "Event guest support"],
    priceLabel: "Contact for Best Rate",
    recommendedFor: ["Premium stays", "Senior executives", "Special occasions"],
    policies: ["Suite availability is limited and should be confirmed in advance.", "Special requests are subject to hotel confirmation."]
  }
];

export const roomCategories = ["All", "Standard", "Deluxe", "Executive", "Family", "Suites"] as const;

export function getRoom(slug: string) {
  return rooms.find((room) => room.slug === slug);
}
