export interface FlowerStalk {
  id: string;
  name: string;
  color: string;
}

export interface WrappingColor {
  id: string;
  name: string;
  colorClass: string; // Tailwind color class for preview
}

export const PRICE_PER_STALK = 8;

export const flowerStalks: FlowerStalk[] = [
  { id: "light-blue", name: "Light Blue", color: "#8FDBFF" },
  { id: "tulip-red", name: "Red Tulip", color: "#DC2626" },
  { id: "poppy-orange", name: "Orange Poppy", color: "#F97316" },
  { id: "poppy-yellow", name: "Yellow Poppy", color: "#FACC15" },
  { id: "sunflower", name: "Sunflower", color: "#EAB308" },
  { id: "carnation-red", name: "Red Carnation", color: "#B91C1C" },
  { id: "lavender", name: "Lavender", color: "#A78BFA" },
  { id: "daisy-white", name: "White Daisy", color: "#F5F5F4" },
  { id: "daisy-pink", name: "Pink Daisy", color: "#F9A8D4" },
  { id: "daisy-blue", name: "Blue Daisy", color: "#60A5FA" },
  { id: "hydrangea", name: "Purple Hydrangea", color: "#C4B5FD" },
  { id: "rose-pink", name: "Pink Rose", color: "#FDA4AF" },
];

export const wrappingColors: WrappingColor[] = [
  { id: "black", name: "black", colorClass: "bg-black border border-border" },
  { id: "white", name: "White", colorClass: "bg-white border border-border" },
];
