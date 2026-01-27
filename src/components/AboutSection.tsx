import { COMPANY } from "@/config";

const AboutSection = () => {
  return (
    <section className="py-16 bg-lavender-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6">About {COMPANY.name}</h2>
          
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              We create handmade pipe cleaner flower bouquets designed to last forever. 
              Each bouquet is carefully crafted with attention to detail, making it a 
              meaningful gift for birthdays, anniversaries, graduations, and special moments.
            </p>
            
            <p>
              Our flowers are a long-lasting alternative to fresh blooms — no wilting, 
              no maintenance, just lasting memories.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lavender"></span>
              Handcrafted with Love
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blush"></span>
              Lasts Forever
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sage"></span>
              No Maintenance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
