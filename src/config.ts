// FuzzFloral Company Configuration
// All company data must be imported from this file

export const COMPANY = {
  name: "FuzzFloral",
  whatsapp: "91440756",
  whatsappLink: "https://wa.me/91440756",
  paynowNumber: "91440756",
  currency: "SGD",
  tagline: "Handmade flowers that last forever",
  webhookUrl: "https://script.google.com/macros/s/AKfycbwq8NESV4i8piIWBNf4hta-FNh6ZxYy30RNsF5Wf6XJEhhGofAUyXqrZmLKyR6LsI4nHA/exec"
};

export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)} ${COMPANY.currency}`;
};
