import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  image: string;
}

interface PortfolioPageProps {
  items: PortfolioItem[];
}

const PortfolioPage = ({ items }: PortfolioPageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const categories = ["All", ...new Set(items.map((item) => item.category))];

  const filteredItems =
    activeFilter === "All"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            className={`max-w-3xl transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="section-subtitle">MY WORK</p>
            <h1 className="section-title mb-6">Portfolio</h1>
            <p className="body-italic">
              Explore my complete collection of makeup transformations, from elegant 
              bridal looks to dramatic cinematic creations. Each project represents 
              a unique story of beauty and artistry.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`font-body text-sm tracking-widest uppercase px-6 py-2 transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.title}
                onClick={() => setSelectedImage(item.image)}
                className={`group relative overflow-hidden rounded-lg bg-card shadow-soft hover:shadow-elegant cursor-pointer transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${0.05 + index * 0.08}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-body text-xs tracking-widest uppercase text-primary-foreground/70 mb-2">
                      {item.category}
                    </p>
                    <h3 className="font-display text-xl text-primary-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-primary-foreground/80 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 flex items-center justify-center transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 text-primary-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Portfolio preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-elegant animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
