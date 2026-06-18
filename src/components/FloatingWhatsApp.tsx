import { Instagram } from "lucide-react";
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
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center hover:scale-105"
      style={{
        background: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
      }}

      aria-label="Contact us on Instagram"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default FloatingWhatsApp;
