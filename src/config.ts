// FuzzFloral Company Configuration
// All company data must be imported from this file

export const COMPANY = {
  name: "FuzzFloral",
  whatsapp: "91440756",
  whatsappLink: "https://wa.me/91440756",
  paynowNumber: "91440756",
  currency: "SGD",
  tagline: "Everlasting flowers",
  webhookUrl: "https://script.google.com/macros/s/AKfycbyc6IuORUNcfc9PONa4BFdJwLB3e9_puWWX8XYM8PrWuvqu7JB3SCU0xnr2aakOHZ2ZDg/exec"
};

export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)} ${COMPANY.currency}`;
};
