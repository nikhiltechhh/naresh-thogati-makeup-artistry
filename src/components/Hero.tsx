import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  heroImage: string;
}

const Hero = ({ heroImage }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-6 lg:px-12 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-4">
              <h1 className="hero-title">Naresh Thogati</h1>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-primary font-light">
                Makeup Artist
              </h2>
            </div>

            <p
              className="body-italic max-w-lg transition-all duration-1000 delay-200"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              Hello, I'm Naresh Thogati! I believe every face is a canvas, and my passion
              is creating looks that make you feel confident, radiant, and unforgettable.
            </p>

            {/* 🔽 ONLY CHANGE IS HERE */}
            <button
              onClick={() => navigate("/services")}
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-body text-sm tracking-widest uppercase transition-all duration-500 hover:bg-primary/90 hover:shadow-elegant"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "0.4s",
              }}
            >
              Our Services
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
            </button>
          </div>

          {/* Right Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 border border-primary/20 rounded-full" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full" />

              <img
                src="https://i.ibb.co/N6JnYKbH/Naresh-Thogati-2.jpg"
                alt="Professional Makeup Artist"
                className="relative z-10 w-full max-w-lg mx-auto object-cover max-h-[600px] rounded-tl-[100px] rounded-br-[100px] shadow-elegant"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
