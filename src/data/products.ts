import lavenderLilyBouquet from "@/assets/lavender-lily-bouquet.jpg";
import babyBlueLilyBouquet from "@/assets/baby-blue-lily-bouquet.jpg";
import purpleDaisyTulipBouquet from "@/assets/purple-daisy-tulip-bouquet.jpg";

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
    name: "Petal Poems",
    description: "Handmade pipe cleaner bouquet featuring soft lavender lilies with delicate filler flowers",
    stalks: 5,
    price: 30,
    image: lavenderLilyBouquet,
  },
  {
    id: "baby-blue-lily",
    name: "Frosted Petals",
    description: "Minimal pastel blue bouquet, perfect for birthdays or baby showers",
    stalks: 7,
    price: 30,
    image: babyBlueLilyBouquet,
  },
  {
    id: "purple-daisy-tulip",
    name: "Pink Serenity",
    description: "Cheerful handmade bouquet with purple daisies and tulips",
    stalks: 6,
    price: 33,
    image: purpleDaisyTulipBouquet,
  },
];
