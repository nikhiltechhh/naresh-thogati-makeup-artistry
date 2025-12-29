import { useEffect, useRef, useState } from "react";

interface Service {
  title: string;
  image: string;
}

interface ServicesProps {
  services: Service[];
}

const Services = ({ services }: ServicesProps) => {
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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-subtitle">WHAT WE DO</p>
          <h2 className="section-title">Services</h2>
          <p className="body-italic mt-6 max-w-2xl">
            Our main services include bridal makeup, cinematic makeup, prosthetic 
            transformations, fashion shoots, and occasion-based looks for every celebration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Title Tab */}
              <div className="absolute top-4 -right-2 bg-secondary/90 backdrop-blur-sm py-3 px-4 shadow-soft">
                <p
                  className="font-script text-sm text-foreground italic tracking-wide"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {service.title}
                </p>
              </div>

              {/* Bottom Overlay on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-xl text-primary-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-primary-foreground/80">
                  Professional {service.title.toLowerCase()} services tailored to your needs.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
