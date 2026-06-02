import lavenderLilyBouquet from "@/assets/lavender-lily-bouquet.jpg";
import babyBlueLilyBouquet from "@/assets/baby-blue-lily-bouquet.jpg";
import purpleDaisyTulipBouquet from "@/assets/purple-daisy-tulip-bouquet.jpg";
import pastelWhisper from "@/assets/pastel-whisper.jpeg";

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
    description: "A tender pastel bouquet of blush pink and soft blue blooms, whispering romance and gentle love",
    stalks: 6,
    price: 30,
    image: lavenderLilyBouquet,
  },
  {
    id: "baby-blue-lily",
    name: "Frosted Petals",
    description: "Pastel blue bouquet, perfect for birthdays, baby showers, special someone or occasion",
    stalks: 6,
    price: 30,
    image: babyBlueLilyBouquet,
  },
  {
    id: "purple-daisy-tulip",
    name: "Pink Serenity",
    description: "A romantic bouquet of soft rose‑pink blooms, delicately wrapped and expressing sweet affection and quiet devotion",
    stalks: 7,
    price: 33,
    image: purpleDaisyTulipBouquet,
  },
    {
    id: "pastel-whisper",
    name: "Pastel Whispers",
    description: "Quiet notes of pastel colours, delicately wrapped in honeycomb",
    stalks: 9,
    price: 45,
    image: pastelWhisper,
  },
];
