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
    id: "student-point-hostel",
    slug: "student-point-hostel",
    name: "Student Point Hostel",
    shortName: "Main Hostel",
    title: "Student Point Hostel near Gulberg III",
    address: "Gulbahar Colony, Academy Road, near Gulberg III, Lahore",
    mapLabel: "Academy Road, near Gulberg III, Lahore",
    description:
      "A boys hostel in Lahore built for student routines, practical comfort, secure living, and easy access to nearby study and city areas.",
    nearby: "Near Cavalry Ground, Hajvery University, PAC Gulberg, 7Up Phattak, Gulberg III, and Academy Road.",
    bestFor: "Male students and outstation students who need a clean, secure, and study-friendly hostel near Gulberg III.",
    image: "/images/kings/exterior-corner.jpeg",
    poster: "/images/student-point-hostel/boys-hostel-poster.jpg",
    highlights: [
      "Neat and clean rooms for comfortable student living",
      "Peaceful environment for study and rest",
      "High-speed internet service",
      "Parking garage support subject to available space",
      "24-hours security camera support"
    ],
    amenities: [
      "24-Hours Security Cameras",
      "Parking Garage",
      "Neat and Clean Rooms",
      "Fully Relaxed Environment Perfect for Study",
      "High-Speed Internet Service",
      "Electric Geyser Facility",
      "Comfortable Rooms",
      "Call / WhatsApp Inquiry Support"
    ],
    gallery: [
      "/images/kings/exterior-corner.jpeg",
      "/images/kings/exterior-side.jpeg",
      "/images/kings/entrance.jpeg",
      "/images/kings/corridor.jpeg",
      "/images/kings/room-twin.jpeg",
      "/images/kings/room-study.jpeg",
      "/images/kings/geyser.jpeg",
      "/images/student-point-hostel/student-point-logo.jpg",
      "/images/student-point-hostel/student-point-poster-main.jpg",
      "/images/student-point-hostel/boys-hostel-poster.jpg",
      "/images/student-point-hostel/student-point-seats-available.jpg",
      "/images/student-point-hostel/student-point-facilities.jpg"
    ]
  }
];

export function getBranch(slug: string) {
  return branches.find((branch) => branch.slug === slug);
}
