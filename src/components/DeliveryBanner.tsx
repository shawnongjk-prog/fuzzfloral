import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "deliveryBannerDismissed";

const DeliveryBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
  };

  if (!isVisible) return null;

  return (
    <div className="bg-primary/75 text-primary-foreground py-2 px-4 relative">
      <div className="container mx-auto text-center text-sm font-medium">
        🚚 Free Islandwide Delivery for orders over $70!
      </div>
      <button
        onClick={handleClose}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-primary-foreground/20 rounded-full transition-colors"
        aria-label="Close banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default DeliveryBanner;
