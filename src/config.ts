// FuzzFloral Company Configuration
// All company data must be imported from this file

export const COMPANY = {
  name: "FuzzFloral",
  whatsapp: "91440756",
  whatsappLink: "https://wa.me/91440756",
  paynowNumber: "91440756",
  currency: "SGD",
  tagline: "Everlasting flowers",
  webhookUrl: "https://script.google.com/macros/s/AKfycbzvNNcGUEQan4PulQk3QsaRCPpt-KdlkKKFJcp5dKDo0o6UQrISoP0HGLlLXGszuAq0pw/exec"
};

export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)} ${COMPANY.currency}`;
};
