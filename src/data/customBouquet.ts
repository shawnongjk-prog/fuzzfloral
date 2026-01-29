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
  { id: "tulip-pink", name: "Pink Tulip", color: "#E88B9C" },
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
  { id: "kraft", name: "Kraft Brown", colorClass: "bg-amber-200" },
  { id: "white", name: "White", colorClass: "bg-white border border-border" },
  { id: "pink", name: "Blush Pink", colorClass: "bg-pink-200" },
  { id: "lavender", name: "Lavender", colorClass: "bg-purple-200" },
  { id: "sage", name: "Sage Green", colorClass: "bg-emerald-200" },
  { id: "cream", name: "Cream", colorClass: "bg-amber-50" },
];
