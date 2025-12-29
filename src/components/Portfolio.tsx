import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
}

interface PortfolioProps {
  items: PortfolioItem[];
}

const Portfolio = ({ items }: PortfolioProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Show only first 3 items on homepage
  const displayItems = items.slice(0, 3);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="section-subtitle">MY WORK</p>
            <h2 className="section-title">Portfolio</h2>
            <p className="body-italic mt-4 max-w-xl">
              A glimpse into the transformations and artistry that define my work.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 font-body text-sm tracking-widest uppercase text-primary hover:text-accent transition-colors duration-300"
          >
            View All Work
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-lg bg-card shadow-soft hover:shadow-elegant transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${0.1 + index * 0.15}s` }}
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
                  <h3 className="font-display text-xl text-primary-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-body text-sm tracking-widest uppercase transition-all duration-500 hover:bg-primary/90 hover:shadow-elegant"
          >
            Read More
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
