import { useEffect, useRef, useState } from "react";

interface Service {
  title: string;
  image: string;
}

const ServicesDemo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [services] = useState<Service[]>([
    {
      title: "Bridal Makeup",
      image: "https://i.ibb.co/G4QFgX5w/Naresh-Thogati-5.jpg"
    },
    {
      title: "Cinematic Makeup",
      image: "https://i.ibb.co/FbKYyYfD/Whats-App-Image-2025-12-29-at-4-22-40-PM-1.jpg"
    },
    {
      title: "Prosthetic Transformations",
      image: "https://i.ibb.co/0dHsTCz/Whats-App-Image-2025-12-29-at-4-22-43-PM.jpg"
    },
    {
      title: "Fashion Shoots",
      image: "https://i.ibb.co/5hZDDkpK/Whats-App-Image-2025-12-29-at-4-25-19-PM.jpg"
    },
    {
      title: "Half Saree Makeup",
      image: "https://i.ibb.co/XRCjvqC/Whats-App-Image-2025-12-29-at-4-25-18-PM-1.jpg"
    },
    {
      title: "Model Shoots",
      image: "https://i.ibb.co/MDzNSTrG/Whats-App-Image-2025-12-29-at-4-22-42-PM.jpg"
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
      className="py-24 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-semibold text-rose-600 tracking-widest uppercase mb-4">WHAT WE DO</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Services</h2>
          <p className="text-lg text-gray-600 italic max-w-2xl mx-auto">
            Our main services include bridal makeup, cinematic makeup, prosthetic 
            transformations, fashion shoots, and occasion-based looks for every celebration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Title Tag - Attached to Top Border */}
              <div className="absolute top-0 left-6 bg-white px-4 py-1.5 shadow-md rounded-b-md">
                <p className="font-serif text-sm text-rose-600 font-semibold tracking-wide">
                  {service.title}
                </p>
              </div>

              {/* Bottom Overlay on Hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-bold text-xl text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Professional {service.title.toLowerCase()} services tailored to your unique style and needs.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDemo;