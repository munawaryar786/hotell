export type GalleryImage = {
  src: string;
  title: string;
  category: string[];
  branch: "Student Point Hostel";
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/kings/exterior-corner.jpeg", title: "Hostel exterior view", category: ["Exterior", "Location"], branch: "Student Point Hostel" },
  { src: "/images/kings/exterior-side.jpeg", title: "Hostel side exterior", category: ["Exterior", "Location"], branch: "Student Point Hostel" },
  { src: "/images/kings/exterior-wide.jpeg", title: "Hostel wide exterior", category: ["Exterior", "Location"], branch: "Student Point Hostel" },
  { src: "/images/kings/entrance.jpeg", title: "Hostel entrance area", category: ["Exterior", "Location"], branch: "Student Point Hostel" },
  { src: "/images/kings/corridor.jpeg", title: "Clean corridor", category: ["Facilities"], branch: "Student Point Hostel" },
  { src: "/images/kings/stairs.jpeg", title: "Interior stairs", category: ["Facilities"], branch: "Student Point Hostel" },
  { src: "/images/kings/room-twin.jpeg", title: "Shared student room", category: ["Rooms / Accommodation"], branch: "Student Point Hostel" },
  { src: "/images/kings/room-twin-2.jpeg", title: "Comfortable student room", category: ["Rooms / Accommodation"], branch: "Student Point Hostel" },
  { src: "/images/kings/room-study.jpeg", title: "Room with study desk", category: ["Rooms / Accommodation", "Facilities"], branch: "Student Point Hostel" },
  { src: "/images/kings/room-sharing.jpeg", title: "Shared room option", category: ["Rooms / Accommodation"], branch: "Student Point Hostel" },
  { src: "/images/kings/bathroom.jpeg", title: "Bathroom facility", category: ["Facilities"], branch: "Student Point Hostel" },
  { src: "/images/kings/geyser.jpeg", title: "Electric geyser facility", category: ["Facilities"], branch: "Student Point Hostel" },
  { src: "/images/student-point-hostel/student-point-logo.jpg", title: "Student Point Hostel Logo", category: ["Branding"], branch: "Student Point Hostel" },
  { src: "/images/student-point-hostel/student-point-poster-main.jpg", title: "Boys hostel facilities poster", category: ["Hostel Posters", "Facilities", "Rooms / Accommodation"], branch: "Student Point Hostel" },
  { src: "/images/student-point-hostel/boys-hostel-poster.jpg", title: "Student Point Hostel contact poster", category: ["Hostel Posters", "Facilities", "Location"], branch: "Student Point Hostel" },
  { src: "/images/student-point-hostel/student-point-seats-available.jpg", title: "Seats available notice", category: ["Hostel Posters", "Branding", "Location"], branch: "Student Point Hostel" },
  { src: "/images/student-point-hostel/student-point-facilities.jpg", title: "Facilities and seat availability poster", category: ["Facilities", "Rooms / Accommodation", "Hostel Posters"], branch: "Student Point Hostel" }
];

export const galleryCategories = ["All", "Exterior", "Branding", "Hostel Posters", "Facilities", "Location", "Rooms / Accommodation"];
