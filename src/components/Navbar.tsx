import { Link, useLocation } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/fuzzfloral-logo.png";

const Navbar = () => {
  const { totalItems } = useCart();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src={logo} alt="FuzzFloral" className="h-20 w-auto" />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                location.pathname === "/" 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Shop
            </Link>
            
            {/* Cart Link */}
            <Link
              to="/cart"
              className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="font-medium">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-accent text-accent-foreground text-xs font-bold rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
