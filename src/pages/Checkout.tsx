import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, COMPANY } from "@/config";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

interface FormData {
  customerName: string;
  phone: string;
  email: string;
  recipientName: string;
  deliveryAddress: string;
  specialMessage: string;
}

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    customerName: "",
    phone: "",
    email: "",
    recipientName: "",
    deliveryAddress: "",
    specialMessage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const orderData = {
      ...formData,
      items: JSON.stringify(items.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        stalks: item.stalks,
      }))),
      subtotal: subtotal.toString(),
      currency: COMPANY.currency,
      timestamp: new Date().toISOString(),
    };

    // Convert to URL-encoded form data for Google Apps Script compatibility
    const formDataEncoded = new URLSearchParams();
    Object.entries(orderData).forEach(([key, value]) => {
      formDataEncoded.append(key, value);
    });

    try {
      await fetch(COMPANY.webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataEncoded.toString(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting order:", error);
      // Still show success since we're using no-cors mode
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppPayment = () => {
    const message = encodeURIComponent(
      `Hi ${COMPANY.name}! I have completed my payment via PayNow.\n\nName: ${formData.customerName}\nOrder Total: ${formatPrice(subtotal)}\n\nPlease confirm my order. Thank you!`
    );
    window.open(`${COMPANY.whatsappLink}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  if (items.length === 0 && !submitted) {
    navigate("/cart");
    return null;
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sage-light flex items-center justify-center">
              <span className="text-4xl">✓</span>
            </div>
            <h1 className="section-title mb-4">Order Submitted!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your order. Please complete your payment to finalize.
            </p>

            {/* PayNow Instructions */}
            <div className="card-product p-6 mb-6 text-left">
              <h2 className="font-heading font-semibold text-lg mb-4">
                Payment Instructions (PayNow)
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <div className="p-4 bg-lavender-light rounded-lg">
                  <p className="font-semibold text-foreground mb-1">PayNow Number</p>
                  <p className="text-2xl font-bold text-primary">{COMPANY.paynowNumber}</p>
                </div>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Open your banking app and select PayNow</li>
                  <li>Enter the PayNow number above</li>
                  <li>Pay the total amount: <strong className="text-foreground">{formatPrice(subtotal)}</strong></li>
                  <li>Screenshot your successful payment</li>
                  <li>WhatsApp us the screenshot with your name</li>
                </ol>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppPayment}
                className="w-full mt-6 btn-whatsapp flex items-center justify-center gap-2"
              >
                WhatsApp Payment Confirmation
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                clearCart();
                navigate("/");
              }}
              className="btn-primary"
            >
              Back to Shop
            </button>
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
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cart
        </Link>

        <h1 className="section-title mb-8">Checkout</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Information */}
              <div className="card-product p-6">
                <h2 className="font-heading font-semibold text-lg mb-4">
                  Customer Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="customerName" className="block text-sm font-medium mb-2">
                      Your Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="input-field"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      maxLength={20}
                      className="input-field"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength={255}
                      className="input-field"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              {/* Recipient Information */}
              <div className="card-product p-6">
                <h2 className="font-heading font-semibold text-lg mb-4">
                  Recipient Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="recipientName" className="block text-sm font-medium mb-2">
                      Recipient Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="recipientName"
                      name="recipientName"
                      value={formData.recipientName}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="input-field"
                      placeholder="Who is this gift for?"
                    />
                  </div>
                  <div>
                    <label htmlFor="deliveryAddress" className="block text-sm font-medium mb-2">
                      Delivery Address <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="deliveryAddress"
                      name="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={handleChange}
                      required
                      maxLength={500}
                      rows={3}
                      className="input-field resize-none"
                      placeholder="Enter full delivery address"
                    />
                  </div>
                  <div>
                    <label htmlFor="specialMessage" className="block text-sm font-medium mb-2">
                      Special Message (optional)
                    </label>
                    <textarea
                      id="specialMessage"
                      name="specialMessage"
                      value={formData.specialMessage}
                      onChange={handleChange}
                      maxLength={500}
                      rows={3}
                      className="input-field resize-none"
                      placeholder="Add a personal message to include with the bouquet"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-lg font-medium flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting Order...
                  </>
                ) : (
                  "Place Order"
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card-product p-6 sticky top-24">
              <h2 className="font-heading font-semibold text-lg mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-3 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-primary">{formatPrice(subtotal)}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FloatingWhatsApp />
    </div>
  );
};

export default Checkout;
