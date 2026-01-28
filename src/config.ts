// FuzzFloral Company Configuration
// All company data must be imported from this file

export const COMPANY = {
  name: "FuzzFloral",
  whatsapp: "91440756",
  whatsappLink: "https://wa.me/91440756",
  paynowNumber: "91440756",
  currency: "SGD",
  tagline: "Everlasting flowers",
  webhookUrl: "https://script.google.com/macros/s/AKfycbzm3u1El45Zq6LhAvE7u7h7imbyNO0xF0j020-gFOHDKGR-MjBeIBgiRlhXDKBKnJSB2Q/exec"
};

export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)} ${COMPANY.currency}`;
};
