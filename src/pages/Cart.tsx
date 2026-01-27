import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, COMPANY } from "@/config";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-lavender-light flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-primary" />
            </div>
            <h1 className="section-title mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Browse our beautiful handmade bouquets and add your favorites!
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 btn-primary"
            >
              Continue Shopping
            </Link>
          </div>
        </main>
        <FloatingWhatsApp />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="section-title mb-8">Shopping Cart</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="card-product p-4 flex gap-4"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-foreground truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.stalks} stalks
                  </p>
                  <p className="font-bold text-primary">
                    {formatPrice(item.price)}
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-2 border border-border rounded-lg">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-muted transition-colors rounded-l-lg"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-muted transition-colors rounded-r-lg"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card-product p-6 sticky top-24">
              <h2 className="font-heading font-semibold text-lg mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Items ({totalItems})</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between font-semibold text-lg">
                  <span>Subtotal</span>
                  <span className="text-primary">{formatPrice(subtotal)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/"
                className="w-full mt-3 py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 border border-border text-foreground hover:bg-muted transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </main>
      <FloatingWhatsApp />
    </div>
  );
};

export default Cart;
