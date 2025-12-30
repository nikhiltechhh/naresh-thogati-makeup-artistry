import { useEffect, useRef, useState } from "react";

const Specializations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const specializations = [
    "Bridal & Reception Makeup",
    "Movie / Cinematic Makeup",
    "Prosthetic & Character Makeup",
    "Party, Fashion & Editorial Makeup",
    "Traditional & Contemporary Looks",
  ];

  return (
    <section
      ref={sectionRef}
      id="specializations"
      className="relative py-16 sm:py-20 lg:py-32 min-h-screen overflow-hidden"
    >
      {/* Background Image with Enhanced Overlay for Mobile */}
      <div 
        className="absolute inset-0 bg-cover bg-center lg:bg-fixed"
        style={{
          backgroundImage: "url('https://www.sminkup.com/resources/theme/img/slider/slider_04.jpg')",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Darker overlay on mobile for better text readability */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50 lg:bg-black/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-start lg:items-center">
          {/* Left Side - Title */}
          <div className="lg:sticky lg:top-32">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <p className="text-rose-500 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
                Expertise
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Specializations
              </h2>
              <div className="mt-3 sm:mt-4 w-20 sm:w-24 h-1 bg-white rounded-full"></div>
              
              {/* Optional description for better mobile context */}
              <p className="mt-4 sm:mt-6 text-white/80 text-sm sm:text-base leading-relaxed lg:hidden">
                Expertise across diverse makeup artistry domains
              </p>
            </div>
          </div>

          {/* Right Side - List Items */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-7">
            {specializations.map((item, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
                style={{
                  transitionDelay: `${300 + index * 150}ms`,
                }}
              >
                {/* Item Text */}
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white leading-tight group-hover:text-rose-300 transition-colors duration-300 cursor-default">
                  {item}
                </h3>
                
                {/* Underline Effect */}
                <div className="mt-2 sm:mt-3 h-0.5 bg-white/30 rounded-full">
                  <div className="h-full bg-white rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements - Hidden on small mobile for performance */}
      <div className="hidden sm:block absolute top-10 right-10 w-48 sm:w-64 h-48 sm:h-64 bg-rose-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-20 left-10 w-64 sm:w-80 h-64 sm:h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Specializations;