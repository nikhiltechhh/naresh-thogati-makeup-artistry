import { useEffect, useRef, useState } from "react";

interface Service {
  title: string;
  image: string;
  description: string;
  features: string[];
}

const ServicesDemo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [services] = useState<Service[]>([
    {
      title: "Bridal Makeup",
      image: "https://i.ibb.co/G4QFgX5w/Naresh-Thogati-5.jpg",
      description: "Transform into the radiant bride of your dreams with our exquisite bridal makeup services. We create timeless, elegant looks that capture your unique beauty.",
      features: ["Traditional & Contemporary Styles", "Long-lasting HD Makeup", "Pre-bridal Consultations", "Touch-up Services"]
    },
    {
      title: "Cinematic Makeup",
      image: "https://i.ibb.co/FbKYyYfD/Whats-App-Image-2025-12-29-at-4-22-40-PM-1.jpg",
      description: "Bring characters to life with our professional cinematic makeup expertise. Perfect for film, television, and theatrical productions.",
      features: ["Character Design", "Special Effects Makeup", "Period-specific Looks", "High-definition Ready"]
    },
    {
      title: "Prosthetic Transformations",
      image: "https://i.ibb.co/0dHsTCz/Whats-App-Image-2025-12-29-at-4-22-43-PM.jpg",
      description: "Experience dramatic transformations with our advanced prosthetic makeup techniques. We specialize in creating realistic aging, fantasy, and horror effects.",
      features: ["Custom Prosthetics", "Silicone Applications", "Creature Design", "Injury & Aging Effects"]
    },
    {
      title: "Fashion Shoots",
      image: "https://i.ibb.co/5hZDDkpK/Whats-App-Image-2025-12-29-at-4-25-19-PM.jpg",
      description: "Elevate your fashion photography with editorial makeup that's bold, creative, and camera-ready. Perfect for magazines, portfolios, and campaigns.",
      features: ["Editorial Looks", "Runway Ready", "Avant-garde Styles", "Color Coordination"]
    },
    {
      title: "Half Saree Makeup",
      image: "https://i.ibb.co/XRCjvqC/Whats-App-Image-2025-12-29-at-4-25-18-PM-1.jpg",
      description: "Celebrate this beautiful tradition with makeup that enhances your natural grace and complements your half saree ensemble perfectly.",
      features: ["Traditional Elegance", "Age-appropriate Looks", "Cultural Elements", "Long-lasting Finish"]
    },
    {
      title: "Model Shoots",
      image: "https://i.ibb.co/MDzNSTrG/Whats-App-Image-2025-12-29-at-4-22-42-PM.jpg",
      description: "Professional makeup services for portfolio shoots, catalog work, and commercial modeling. We understand lighting, angles, and what works on camera.",
      features: ["Portfolio Development", "Commercial Work", "Natural to Glam", "Professional Standards"]
    }
  ]);
  
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
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 mt-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`mb-12 md:mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs sm:text-sm font-semibold text-rose-600 tracking-widest uppercase mb-3 md:mb-4">WHAT WE DO</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Our Services</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Our main services include bridal makeup, cinematic makeup, prosthetic 
            transformations, fashion shoots, and occasion-based looks for every celebration.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12 md:space-y-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 md:gap-8 lg:gap-12 items-center`}>
                {/* Image Section */}
                <div className="w-full lg:w-5/12">
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
                    <div className="relative aspect-[5/4] sm:aspect-[6/5] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                    
                    {/* Title Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <p className="font-serif text-xs sm:text-sm text-rose-600 font-semibold tracking-wide">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-7/12 px-4 sm:px-0">
                  <div className="max-w-xl">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 md:space-y-4">
                      <h4 className="text-sm font-semibold text-rose-600 uppercase tracking-wider mb-3 md:mb-4">
                        What's Included
                      </h4>
                      <ul className="space-y-2 md:space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 md:w-6 md:h-6 text-rose-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm md:text-base text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6 md:mt-8">
                      <button
  onClick={() =>
    window.open(
      "https://wa.me/919948623938", // Your number with country code, no "+" or dashes
      "_blank" // Opens in new tab / WhatsApp app
    )
  }
  className="px-6 md:px-8 py-2.5 md:py-3 bg-rose-600 text-white font-semibold text-sm md:text-base rounded-full hover:bg-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
>
  Book Now
</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDemo;