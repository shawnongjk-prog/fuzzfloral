import { products } from "@/data/products";
import { COMPANY } from "@/config";
import Navbar from "@/components/Navbar";
import DeliveryBanner from "@/components/DeliveryBanner";
import ProductCard from "@/components/ProductCard";
import CustomBouquetBuilder from "@/components/CustomBouquetBuilder";
import AboutSection from "@/components/AboutSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DeliveryBanner />
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-khaki-light to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-brand text-5xl md:text-7xl text-primary mb-4">
            {COMPANY.name}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            {COMPANY.tagline}
          </p>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-10">Our Bouquets</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Custom Bouquet Builder */}
          <div className="mt-10">
            <h2 className="section-title text-center mb-6">Create Your Own</h2>
            <CustomBouquetBuilder />
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="font-brand text-2xl text-primary mb-2">{COMPANY.name}</p>
          <p className="text-sm text-muted-foreground">
            Handcrafted with love in Singapore
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
