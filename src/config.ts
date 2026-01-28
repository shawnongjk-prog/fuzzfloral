// FuzzFloral Company Configuration
// All company data must be imported from this file

export const COMPANY = {
  name: "FuzzFloral",
  whatsapp: "91440756",
  whatsappLink: "https://wa.me/91440756",
  paynowNumber: "91440756",
  currency: "SGD",
  tagline: "Everlasting flowers",
  webhookUrl: "https://script.google.com/macros/s/AKfycbwqF6dCp4aSlxk_H-SVKgniuFzSEfEMuLked3xOo1ja8Z_Jr0dbOKRtE2sSERaz3yTskg/exec"
};

export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)} ${COMPANY.currency}`;
};
