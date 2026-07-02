export type GalleryImage = {
  src: string;
  title: string;
  category: string[];
  branch: "Branch 1" | "Branch 2" | "Both";
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/kings/logo.jpeg", title: "Kings Hostels Logo", category: ["Branding"], branch: "Both" },
  { src: "/images/kings/exterior-corner.jpeg", title: "Kings Hostel exterior", category: ["Exterior", "Branch 1"], branch: "Branch 1" },
  { src: "/images/kings/exterior-side.jpeg", title: "Branch exterior side view", category: ["Exterior", "Branch 1"], branch: "Branch 1" },
  { src: "/images/kings/exterior-wide.jpeg", title: "Exterior with solar panels", category: ["Exterior", "Branch 1"], branch: "Branch 1" },
  { src: "/images/kings/entrance.jpeg", title: "Branch entrance", category: ["Exterior", "Corridors / Interior", "Branch 1"], branch: "Branch 1" },
  { src: "/images/kings/corridor.jpeg", title: "Clean corridor", category: ["Corridors / Interior", "Branch 1"], branch: "Branch 1" },
  { src: "/images/kings/stairs.jpeg", title: "Interior stairs", category: ["Corridors / Interior", "Branch 1"], branch: "Branch 1" },
  { src: "/images/kings/interior-entry.jpeg", title: "Interior entry", category: ["Corridors / Interior", "Branch 1"], branch: "Branch 1" },
  { src: "/images/kings/room-twin.jpeg", title: "Twin room", category: ["Rooms", "Branch 1"], branch: "Branch 1" },
  { src: "/images/kings/room-twin-2.jpeg", title: "Furnished twin room", category: ["Rooms", "Branch 1"], branch: "Branch 1" },
  { src: "/images/kings/room-study.jpeg", title: "Room with study desk", category: ["Rooms", "Branch 2"], branch: "Branch 2" },
  { src: "/images/kings/room-sharing.jpeg", title: "Shared room", category: ["Rooms", "Branch 2"], branch: "Branch 2" },
  { src: "/images/kings/room-blue.jpeg", title: "Blue bedding room", category: ["Rooms", "Branch 2"], branch: "Branch 2" },
  { src: "/images/kings/bathroom.jpeg", title: "Bathroom facility", category: ["Facilities"], branch: "Both" },
  { src: "/images/kings/water-filter.jpeg", title: "Water filtration", category: ["Facilities", "Appliances"], branch: "Both" },
  { src: "/images/kings/microwave.jpeg", title: "Microwave", category: ["Facilities", "Appliances"], branch: "Both" },
  { src: "/images/kings/washing-machine.jpeg", title: "Washing machine", category: ["Facilities", "Appliances"], branch: "Both" },
  { src: "/images/kings/iron.jpeg", title: "Ironing support", category: ["Facilities", "Appliances"], branch: "Both" },
  { src: "/images/kings/geyser.jpeg", title: "Water heating support", category: ["Facilities", "Appliances"], branch: "Both" },
  { src: "/images/kings/poster-power.jpeg", title: "Power backup brand visual", category: ["Branding", "Facilities"], branch: "Both" },
  { src: "/images/kings/poster-safety.jpeg", title: "Safety brand visual", category: ["Branding", "Facilities"], branch: "Both" },
  { src: "/images/kings/poster-facilities.jpeg", title: "Facility brand visual", category: ["Branding", "Facilities"], branch: "Both" }
];

export const galleryCategories = ["All", "Exterior", "Branding", "Rooms", "Corridors / Interior", "Facilities", "Appliances", "Branch 1", "Branch 2"];
