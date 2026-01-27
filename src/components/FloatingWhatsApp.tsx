import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/config";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open(
      `${COMPANY.whatsappLink}?text=${encodeURIComponent(
        `Hi ${COMPANY.name}! I have a question about your handmade flower bouquets.`
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default FloatingWhatsApp;
