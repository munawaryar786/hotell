export type Branch = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  title: string;
  address: string;
  mapLabel: string;
  description: string;
  nearby: string;
  bestFor: string;
  image: string;
  poster?: string;
  highlights: string[];
  amenities: string[];
  gallery: string[];
};

export const branches: Branch[] = [
  {
    id: "kings-hostel-1",
    slug: "kings-hostel-1",
    name: "Kings Hostel 1",
    shortName: "Hostel 1",
    title: "Kings Hostel 1 near Raiwind Road",
    address:
      "C62J+W8J Kings Hostel, 02 Raiwind Rd, near AL-Khan Hotel, near University of Lahore and Green University, Gul Nishan Society, Lahore",
    mapLabel: "Kings Hostel 1, Raiwind Road, Lahore",
    description:
      "A boys hostel branch built for student routines, practical comfort, secure living, and convenient access to nearby educational areas.",
    nearby: "Near University of Lahore, Green University, AL-Khan Hotel, and Raiwind Road access.",
    bestFor: "Students who want academic access around Raiwind Road and Gul Nishan Society.",
    image: "/images/kings/exterior-corner.jpeg",
    poster: "/images/kings/poster-location.jpeg",
    highlights: [
      "Well-located near major educational institutions",
      "Comfortable furnished room options",
      "Peaceful environment for study and rest",
      "Shared daily-living facilities",
      "CCTV-focused security setup"
    ],
    amenities: [
      "Furnished rooms",
      "Selected AC room options",
      "Water filtration access",
      "Microwave access",
      "Washing machine access",
      "Ironing support",
      "Water heating support",
      "CCTV surveillance"
    ],
    gallery: [
      "/images/kings/exterior-corner.jpeg",
      "/images/kings/exterior-side.jpeg",
      "/images/kings/entrance.jpeg",
      "/images/kings/corridor.jpeg",
      "/images/kings/room-twin.jpeg",
      "/images/kings/water-filter.jpeg"
    ]
  },
  {
    id: "kings-hostel-2",
    slug: "kings-hostel-2",
    name: "Kings Hostel 2",
    shortName: "Hostel 2",
    title: "Kings Hostel 2 in Dream Avenue",
    address: "Shaheen Grinding Rd, Dream Avenue, Lahore",
    mapLabel: "Kings Hostel 2, Dream Avenue, Lahore",
    description:
      "A second Kings Hostels branch for boys who want a clean, organized, student-friendly living option in another Lahore location.",
    nearby: "Dream Avenue and Shaheen Grinding Road area.",
    bestFor: "Students looking for another Kings Hostels location with the same brand standards.",
    image: "/images/kings/poster-room.jpeg",
    poster: "/images/kings/poster-tuck-shop.jpeg",
    highlights: [
      "Part of the unified Kings Hostels brand",
      "Comfortable student living setup",
      "Room and facility availability by inquiry",
      "Suitable for focused study routines",
      "Direct WhatsApp and call inquiry support"
    ],
    amenities: [
      "Furnished room options",
      "Selected AC room availability",
      "Shared convenience facilities",
      "Clean living spaces",
      "Peaceful study-friendly environment",
      "Branch-based facility confirmation"
    ],
    gallery: [
      "/images/kings/poster-room.jpeg",
      "/images/kings/poster-ac-room.jpeg",
      "/images/kings/room-study.jpeg",
      "/images/kings/room-sharing.jpeg",
      "/images/kings/microwave.jpeg",
      "/images/kings/washing-machine.jpeg"
    ]
  }
];

export function getBranch(slug: string) {
  return branches.find((branch) => branch.slug === slug);
}
