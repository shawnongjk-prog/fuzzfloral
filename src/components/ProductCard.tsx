import { useState } from "react";
import { Plus, Minus, ShoppingBag, Check } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/config";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        stalks: product.stalks,
      });
    }
    setAdded(true);
    setQuantity(1);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <article className="card-product overflow-hidden flex flex-col">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
          {product.name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-2 flex-1">
          {product.description}
        </p>

        <p className="text-sm text-sage font-medium mb-3">
          {product.stalks} stalks
        </p>

        <p className="text-xl font-bold text-primary mb-4">
          {formatPrice(product.price)}
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-muted-foreground">Qty:</span>
          <div className="flex items-center gap-2 border border-border rounded-lg">
            <button
              type="button"
              onClick={handleDecrement}
              className="p-2 hover:bg-muted transition-colors rounded-l-lg"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-medium">{quantity}</span>
            <button
              type="button"
              onClick={handleIncrement}
              className="p-2 hover:bg-muted transition-colors rounded-r-lg"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={added}
          className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
            added
              ? "bg-sage text-secondary-foreground"
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
              Add to Cart
            </>
          )}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
