export type GalleryCategory = "Exterior" | "Lobby" | "Reception" | "Rooms" | "Suites" | "Bathrooms" | "Dining" | "Banquets" | "Meetings" | "Facilities" | "Corridors" | "Parking";

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
  featured: boolean;
  pageUsage?: string;
};

const item = (n: number, title: string, category: GalleryCategory, featured = false, pageUsage?: string): GalleryItem => ({
  src: `/images/ambassador/ambassador-${String(n).padStart(2, "0")}.jpg`,
  alt: `${title} at Hotel Ambassador Lahore`,
  title,
  category,
  featured,
  pageUsage
});

export const galleryItems: GalleryItem[] = [
  item(3, "Hotel Exterior at Dusk", "Exterior", true, "hero"),
  item(40, "Main Entrance", "Exterior", true, "location"),
  item(34, "Night Exterior", "Exterior", true, "hero"),
  item(28, "Reception Desk", "Reception", true, "about"),
  item(35, "Styled Lounge", "Lobby", true, "about"),
  item(39, "Lounge Seating", "Lobby", true),
  item(33, "Guest Floor Lobby", "Lobby"),
  item(30, "Guest Corridor", "Corridors", true),
  item(32, "Deluxe King Room", "Rooms", true, "rooms"),
  item(37, "Twin Room", "Rooms", true, "rooms"),
  item(38, "Premium Twin Room", "Rooms", true, "rooms"),
  item(41, "Executive Twin Room", "Rooms", true, "rooms"),
  item(46, "Warm Executive Room", "Rooms", true),
  item(47, "Classic Room", "Rooms"),
  item(48, "Standard Room", "Rooms"),
  item(52, "Suite Room", "Suites", true, "rooms"),
  item(36, "Suite Lounge", "Suites", true),
  item(43, "Private Sitting Area", "Suites"),
  item(44, "Suite Bedroom", "Suites"),
  item(45, "Suite Living Area", "Suites"),
  item(24, "Bathroom Detail", "Bathrooms", false, "facilities"),
  item(51, "Restaurant Seating", "Dining", true, "dining"),
  item(8, "Buffet Dessert Display", "Dining", true, "dining"),
  item(13, "Buffet Presentation", "Dining", true, "dining"),
  item(23, "Breakfast Tray", "Dining"),
  item(10, "Chef Presentation", "Dining"),
  item(11, "Culinary Team", "Dining"),
  item(25, "Event Dining Setup", "Banquets", true, "events"),
  item(21, "Conference Seating", "Meetings", true, "meetings"),
  item(19, "Presentation Event", "Meetings", true),
  item(12, "Banquet Buffet Line", "Banquets"),
  item(2, "Swimming Pool", "Facilities", true, "facilities"),
  item(27, "Pool Aerial View", "Facilities", true),
  item(50, "Pool Deck", "Facilities"),
  item(22, "Outdoor Seating", "Facilities"),
  item(26, "Hotel Driveway", "Parking", true, "location"),
  item(49, "Historic Pool View", "Facilities"),
  item(6, "Ambassador Building", "Exterior"),
  item(7, "Illuminated Signage", "Exterior"),
  item(20, "Hotel Entrance Canopy", "Exterior"),
  item(5, "Interior Corridor", "Corridors"),
  item(29, "Simple Guest Room", "Rooms"),
  item(31, "Poolside Landmark View", "Facilities"),
  item(42, "Classic Exterior Sign", "Exterior")
];

export const galleryCategories = ["All", "Exterior", "Lobby", "Reception", "Rooms", "Dining", "Banquets", "Meetings", "Facilities"] as const;
