export const company = {
  name: "Yolda Tours",
  short: "Yolda",
  location: "Manaus, Brazil",
  region: "South America",
  guide: "Hossein Amini",
} as const;

export const androidApk = {
  href: "/downloads/YoldaTours.apk",
  fileName: "YoldaTours.apk",
  version: "1.0",
} as const;

export const iosApp = {
  href: "/downloads/YoldaTours-iOS.zip",
  fileName: "YoldaTours-iOS.zip",
  version: "1.0",
} as const;

export const contacts = [
  {
    id: "hossein",
    name: "Hossein Amini",
    role: "Founder · Expedition photographer",
    phone: "+98 930 676 7371",
    wa: "https://wa.me/989306767371",
    instagram: "https://www.instagram.com/yoldaaaaa",
    bio: "Award-winning photographer. He walks the trail with you, not behind a desk. Based in Manaus — out in the field most of the year.",
  },
] as const;

export const whatsappPrefill =
  "Hi Yolda Tours & Hossein! I'd like to inquire about a South America photography tour.";

export type TourId =
  | "amazon"
  | "river"
  | "iguazu"
  | "uyuni"
  | "carnival"
  | "machu";

export type Tour = {
  id: TourId;
  name: string;
  place: string;
  kicker: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const tours: Tour[] = [
  {
    id: "amazon",
    name: "Amazon jungle",
    place: "Amazon Basin, Brazil",
    kicker: "Jaguar, macaw, flooded forest",
    description:
      "The full Amazon: canoe, canopy, night walks. Jaguars if the river is kind. Scarlet macaws whether it is or not. Hossein shoots with you.",
    image: "/images/jaguar.jpg",
    imageAlt: "A jaguar in the Amazon photographed on a Yolda expedition",
  },
  {
    id: "river",
    name: "Amazon riverboat",
    place: "Brazil, Peru & Colombia",
    kicker: "Three countries, one river",
    description:
      "A riverboat into indigenous territories. Pink dolphins, anacondas, remote communities. The light on the Rio Negro at the meeting of waters.",
    image: "/images/canoe.jpg",
    imageAlt: "A canoe on an Amazon tributary at first light",
  },
  {
    id: "iguazu",
    name: "Iguazú Falls",
    place: "Brazil & Argentina",
    kicker: "Devil's Throat from the air",
    description:
      "The falls as a photograph, not a postcard. Aerial of Devil's Throat, the rainforest around it, the spray that eats a lens if you're careless.",
    image: "/images/iguazu.jpg",
    imageAlt: "Aerial view of Iguazú Falls and the surrounding rainforest",
  },
  {
    id: "uyuni",
    name: "Salar de Uyuni",
    place: "Uyuni, Bolivia",
    kicker: "Mirror, flamingos, milky way",
    description:
      "Salt at sunrise, geysers at dawn, pink flamingos on altiplano lagoons, and the darkest sky you'll shoot. World-class astrophotography.",
    image: "/images/uyuni.jpg",
    imageAlt: "Salar de Uyuni reflecting the sky at dusk",
  },
  {
    id: "carnival",
    name: "Rio Carnival",
    place: "Rio de Janeiro, Brazil",
    kicker: "Sambadrome, city light",
    description:
      "Carnival as work, not a party ticket. Samba schools in the Sambadrome, street blocos, the city at night. Colour that does not wait.",
    image: "/images/carnival.jpg",
    imageAlt: "Rio Carnival dancers in the Sambadrome",
  },
  {
    id: "machu",
    name: "Machu Picchu",
    place: "Sacred Valley, Peru",
    kicker: "Sunrise on the citadel",
    description:
      "The Inca Trail to the lost city. Sunrise over the stones, the Sacred Valley, Andean light that does the work if you wait for it. Galápagos and Patagonia on request.",
    image: "/images/hammocks.jpg",
    imageAlt: "Lodge hammocks at sunset on a Yolda expedition",
  },
];

export type GalleryItem = {
  id: string;
  src: string;
  title: string;
  caption: string;
};

export const gallery: GalleryItem[] = [
  {
    id: "jaguar",
    src: "/images/jaguar.jpg",
    title: "Wild jaguar",
    caption: "Amazon Basin, Brazil",
  },
  {
    id: "macaw",
    src: "/images/macaw.jpg",
    title: "Scarlet macaw",
    caption: "Amazon jungle canopy",
  },
  {
    id: "canoe",
    src: "/images/canoe.jpg",
    title: "Canoe at first light",
    caption: "Guided jungle waterway",
  },
  {
    id: "hammocks",
    src: "/images/hammocks.jpg",
    title: "Hammock life at sunset",
    caption: "Lodge evening, Amazon",
  },
  {
    id: "river",
    src: "/images/river.jpg",
    title: "Rio Negro sunset",
    caption: "Meeting of Waters",
  },
  {
    id: "canopy",
    src: "/images/canopy.jpg",
    title: "Rainforest canopy",
    caption: "Pristine Amazon",
  },
  {
    id: "anaconda",
    src: "/images/anaconda.jpg",
    title: "Giant anaconda",
    caption: "Night jungle walk",
  },
  {
    id: "iguazu",
    src: "/images/iguazu.jpg",
    title: "Devil's Throat",
    caption: "Iguazú, aerial",
  },
  {
    id: "uyuni",
    src: "/images/uyuni.jpg",
    title: "Salar mirror",
    caption: "Uyuni, Bolivia",
  },
  {
    id: "carnival",
    src: "/images/carnival.jpg",
    title: "Rio Carnival",
    caption: "Sambadrome, Brazil",
  },
];

export const process = [
  {
    number: "01",
    title: "Tell us the photograph you want",
    body: "Jaguar. Salt flats. A citadel at dawn. WhatsApp is enough. Hossein will say if the season is right.",
  },
  {
    number: "02",
    title: "He walks it with you",
    body: "Small groups. A private day is $450 USD. Every journey includes a professional album of the trip, delivered digitally.",
  },
  {
    number: "03",
    title: "You leave with the pictures",
    body: "Not a folder of iPhone files. A body of work from the expedition — yours to keep, print, and remember by.",
  },
] as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/tours", label: "Tours" },
  { to: "/gallery", label: "Gallery" },
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
