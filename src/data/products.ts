import lavenderLilyBouquet from "@/assets/lavender-lily-bouquet.jpg";
import babyBlueLilyBouquet from "@/assets/baby-blue-lily-bouquet.jpg";
import purpleDaisyTulipBouquet from "@/assets/purple-daisy-tulip-bouquet.jpg";
import pinkDaisyLavenderBouquet from "@/assets/pink-daisy-lavender-bouquet.webp";
import orangeTulipWhiteDaisyBouquet from "@/assets/orange-tulip-white-daisy-bouquet.webp";

export interface Product {
  id: string;
  name: string;
  description: string;
  stalks: number;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "lavender-lily",
    name: "Lavender Lily Bouquet",
    description: "Handmade pipe cleaner bouquet featuring soft lavender lilies with delicate filler flowers",
    stalks: 5,
    price: 30,
    image: lavenderLilyBouquet,
  },
  {
    id: "baby-blue-lily",
    name: "Baby Blue Lily Bouquet",
    description: "Minimal pastel blue bouquet, perfect for birthdays or baby showers",
    stalks: 7,
    price: 36,
    image: babyBlueLilyBouquet,
  },
  {
    id: "purple-daisy-tulip",
    name: "Purple Daisy & Tulip Bouquet",
    description: "Cheerful handmade bouquet with purple daisies and tulips",
    stalks: 6,
    price: 33,
    image: purpleDaisyTulipBouquet,
  },
  {
    id: "pink-daisy-lavender",
    name: "Pink Daisy & Lavender Bouquet",
    description: "Romantic daisy and lavender gift, perfect for anniversaries",
    stalks: 5,
    price: 30,
    image: pinkDaisyLavenderBouquet,
  },
  {
    id: "orange-tulip-white-daisy",
    name: "Orange Tulip & White Daisy Bouquet",
    description: "Summer flower artisanal layout with vibrant tulips and daisies",
    stalks: 6,
    price: 33,
    image: orangeTulipWhiteDaisyBouquet,
  },
];
