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
    shortDescription: "A calm and comfortable room for practical Lahore stays.",
    fullDescription: "The Standard Room is presented for guests who want clean comfort, calm surroundings, and easy access to hotel services. Exact room inventory and amenities should be confirmed directly with the hotel reservation team.",
    image: "/images/ambassador/ambassador-48.jpg",
    gallery: ["/images/ambassador/ambassador-48.jpg", "/images/ambassador/ambassador-29.jpg", "/images/ambassador/ambassador-24.jpg"],
    capacity: "Up to 2 guests",
    bedType: "Queen or twin bedding, subject to availability",
    amenities: ["Wi-Fi availability can be confirmed", "Air-conditioning availability can be confirmed", "Private bathroom", "Guest assistance"],
    priceLabel: "Contact for Best Rate",
    recommendedFor: ["Solo travelers", "Business guests", "Short city stays"],
    policies: ["Valid guest identification may be required.", "Check-in and check-out times should be confirmed before arrival."]
  },
  {
    id: "deluxe-room",
    slug: "deluxe-room",
    title: "Deluxe Room",
    category: "Deluxe",
    shortDescription: "A refined room option for couples, executives, and city guests.",
    fullDescription: "The Deluxe Room pairs warm hospitality styling with a more relaxed room layout, suitable for guests who prefer extra comfort while staying connected to Lahore.",
    image: "/images/ambassador/ambassador-32.jpg",
    gallery: ["/images/ambassador/ambassador-32.jpg", "/images/ambassador/ambassador-47.jpg", "/images/ambassador/ambassador-43.jpg"],
    capacity: "Up to 2 guests",
    bedType: "King, queen, or twin bedding, subject to availability",
    amenities: ["Comfort seating", "Room service availability can be confirmed", "Wardrobe space", "Guest assistance"],
    priceLabel: "Contact for Best Rate",
    recommendedFor: ["Couples", "Executives", "Weekend stays"],
    policies: ["Rates vary by date and occupancy.", "Specific bed type should be requested during inquiry."]
  },
  {
    id: "executive-room",
    slug: "executive-room",
    title: "Executive Room",
    category: "Executive",
    shortDescription: "Business-friendly comfort with space to unwind between meetings.",
    fullDescription: "The Executive Room is positioned for corporate guests and business travelers who value quiet comfort, direct booking support, and access to hotel services.",
    image: "/images/ambassador/ambassador-46.jpg",
    gallery: ["/images/ambassador/ambassador-46.jpg", "/images/ambassador/ambassador-44.jpg", "/images/ambassador/ambassador-45.jpg"],
    capacity: "Up to 2 guests",
    bedType: "King or queen bedding, subject to availability",
    amenities: ["Work-friendly layout", "Television availability can be confirmed", "Laundry support on request", "Front desk assistance"],
    priceLabel: "Contact for Best Rate",
    recommendedFor: ["Corporate guests", "Business travelers", "Longer city stays"],
    policies: ["Corporate billing terms should be confirmed with reservations.", "Early check-in is subject to availability."]
  },
  {
    id: "family-room",
    slug: "family-room",
    title: "Family Room",
    category: "Family",
    shortDescription: "Flexible rooming for families seeking a comfortable Lahore base.",
    fullDescription: "The Family Room is presented for guests traveling together who need flexible sleeping arrangements and a practical, comfortable base in Lahore.",
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
    id: "business-suite",
    slug: "business-suite",
    title: "Business Suite",
    category: "Suites",
    shortDescription: "A more spacious stay for corporate guests and longer visits.",
    fullDescription: "The Business Suite is presented for senior business guests, corporate stays, and visitors who prefer additional space with a more private lounge feel.",
    image: "/images/ambassador/ambassador-36.jpg",
    gallery: ["/images/ambassador/ambassador-36.jpg", "/images/ambassador/ambassador-45.jpg", "/images/ambassador/ambassador-46.jpg"],
    capacity: "Up to 3 guests",
    bedType: "Suite bedding, subject to availability",
    amenities: ["Separate sitting area where available", "Business stay support", "Room service inquiry", "Guest assistance"],
    priceLabel: "Contact for Best Rate",
    recommendedFor: ["Business stays", "Senior executives", "Extended city visits"],
    policies: ["Suite availability is limited and should be confirmed in advance.", "Special requests are subject to hotel confirmation."]
  },
  {
    id: "ambassador-suite",
    slug: "ambassador-suite",
    title: "Ambassador Suite",
    category: "Suites",
    shortDescription: "A premium suite-style experience for special stays and occasions.",
    fullDescription: "The Ambassador Suite is positioned as the most premium rooming concept in this demo, ideal for guests who want extra comfort, privacy, and refined hospitality support.",
    image: "/images/ambassador/ambassador-52.jpg",
    gallery: ["/images/ambassador/ambassador-52.jpg", "/images/ambassador/ambassador-36.jpg", "/images/ambassador/ambassador-39.jpg"],
    capacity: "Up to 3 guests",
    bedType: "Premium suite bedding, subject to availability",
    amenities: ["Premium guest support", "Lounge-style seating where available", "Dining inquiry support", "Event guest support"],
    priceLabel: "Contact for Best Rate",
    recommendedFor: ["Premium stays", "Special occasions", "Executive visits"],
    policies: ["Suite availability should be confirmed in advance.", "Special arrangements are subject to hotel confirmation."]
  }
];

export const roomCategories = ["All", "Standard", "Deluxe", "Executive", "Family", "Suites"] as const;

export function getRoom(slug: string) {
  return rooms.find((room) => room.slug === slug);
}
