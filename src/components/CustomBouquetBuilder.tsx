import { useState } from "react";
import { Plus, Minus, ShoppingBag, Check, X } from "lucide-react";
import { flowerStalks, wrappingColors, PRICE_PER_STALK, FlowerStalk } from "@/data/customBouquet";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/config";
import customBouquetImage from "@/assets/custom-bouquet-flowers.jpg";

interface SelectedStalk {
  stalk: FlowerStalk;
  quantity: number;
}

const CustomBouquetBuilder = () => {
  const [selectedStalks, setSelectedStalks] = useState<SelectedStalk[]>([]);
  const [selectedWrapping, setSelectedWrapping] = useState(wrappingColors[0].id);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const totalStalks = selectedStalks.reduce((sum, s) => sum + s.quantity, 0);
  const totalPrice = totalStalks * PRICE_PER_STALK;

  const addStalk = (stalk: FlowerStalk) => {
    setSelectedStalks((prev) => {
      const existing = prev.find((s) => s.stalk.id === stalk.id);
      if (existing) {
        return prev.map((s) =>
          s.stalk.id === stalk.id ? { ...s, quantity: s.quantity + 1 } : s
        );
      }
      return [...prev, { stalk, quantity: 1 }];
    });
  };

  const removeStalk = (stalkId: string) => {
    setSelectedStalks((prev) => {
      const existing = prev.find((s) => s.stalk.id === stalkId);
      if (existing && existing.quantity > 1) {
        return prev.map((s) =>
          s.stalk.id === stalkId ? { ...s, quantity: s.quantity - 1 } : s
        );
      }
      return prev.filter((s) => s.stalk.id !== stalkId);
    });
  };

  const clearStalk = (stalkId: string) => {
    setSelectedStalks((prev) => prev.filter((s) => s.stalk.id !== stalkId));
  };

  const handleAddToCart = () => {
    if (totalStalks === 0) return;

    const wrapping = wrappingColors.find((w) => w.id === selectedWrapping);
    const stalkSummary = selectedStalks
      .map((s) => `${s.quantity}x ${s.stalk.name}`)
      .join(", ");

    // Add custom bouquet to cart with details in name
    addToCart({
      id: `custom-${Date.now()}`, // Unique ID for each custom order
      name: `Custom Bouquet (${wrapping?.name} wrap)`,
      price: totalPrice,
      image: customBouquetImage,
      stalks: totalStalks,
    });

    setAdded(true);
    setSelectedStalks([]);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <article className="card-product overflow-hidden flex flex-col lg:col-span-2 xl:col-span-3">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-muted rounded-lg">
          <img
            src={customBouquetImage}
            alt="Custom bouquet flower options"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Builder Section */}
        <div className="p-4 flex flex-col">
          <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
            Build Your Own Bouquet
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4">
            Select individual flower stalks and we'll arrange them beautifully for you. 
            Trust our florists to create a stunning arrangement!
          </p>

          <p className="text-lg font-bold text-primary mb-4">
            {formatPrice(PRICE_PER_STALK)} per stalk
          </p>

          {/* Flower Stalk Selection */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-foreground mb-2">Choose Your Flowers:</h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {flowerStalks.map((stalk) => {
                const selected = selectedStalks.find((s) => s.stalk.id === stalk.id);
                return (
                  <button
                    key={stalk.id}
                    type="button"
                    onClick={() => addStalk(stalk)}
                    className="relative flex flex-col items-center p-2 border border-border rounded-lg hover:border-primary transition-colors group"
                  >
                    <div
                      className="w-6 h-6 rounded-full mb-1 border border-border shadow-sm"
                      style={{ backgroundColor: stalk.color }}
                    />
                    <span className="text-xs text-center leading-tight">{stalk.name}</span>
                    {selected && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center font-medium">
                        {selected.quantity}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Stalks Summary */}
          {selectedStalks.length > 0 && (
            <div className="mb-4 p-3 bg-muted rounded-lg">
              <h4 className="text-sm font-medium text-foreground mb-2">Your Selection:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedStalks.map(({ stalk, quantity }) => (
                  <div
                    key={stalk.id}
                    className="flex items-center gap-1 bg-background px-2 py-1 rounded-md text-sm"
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: stalk.color }}
                    />
                    <span>{stalk.name}</span>
                    <div className="flex items-center gap-1 ml-1">
                      <button
                        type="button"
                        onClick={() => removeStalk(stalk.id)}
                        className="p-0.5 hover:bg-muted rounded"
                        aria-label={`Remove one ${stalk.name}`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-4 text-center font-medium">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => addStalk(stalk)}
                        className="p-0.5 hover:bg-muted rounded"
                        aria-label={`Add one ${stalk.name}`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => clearStalk(stalk.id)}
                        className="p-0.5 hover:bg-destructive hover:text-destructive-foreground rounded ml-1"
                        aria-label={`Remove all ${stalk.name}`}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wrapping Color Selection */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-foreground mb-2">Wrapping Color:</h4>
            <div className="flex flex-wrap gap-2">
              {wrappingColors.map((color) => (
                <button
                  key={color.id}
                  type="button"
                  onClick={() => setSelectedWrapping(color.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
                    selectedWrapping === color.id
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full ${color.colorClass}`} />
                  <span className="text-sm">{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Total & Add to Cart */}
          <div className="mt-auto pt-4 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground">
                {totalStalks} stalk{totalStalks !== 1 ? "s" : ""} selected
              </span>
              <span className="text-xl font-bold text-primary">
                {formatPrice(totalPrice)}
              </span>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={added || totalStalks === 0}
              className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                added
                  ? "bg-sage text-secondary-foreground"
                  : totalStalks === 0
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  Add Custom Bouquet to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CustomBouquetBuilder;
