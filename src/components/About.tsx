import { useEffect, useRef, useState } from "react";

interface AboutProps {
  aboutImage1: string;
  aboutImage2: string;
  aboutImage3: string;
}

const About = ({ aboutImage1, aboutImage2, aboutImage3 }: AboutProps) => {
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

    return () => observer.disconnect();
  }, []);

  const specializations = [
    "Bridal & Reception Makeup",
    "Movie / Cinematic Makeup",
    "Prosthetic & Character Makeup",
    "Party, Fashion & Editorial Makeup",
    "Traditional & Contemporary Looks",
  ];

  const whyChooseMe = [
    "Customized looks for every face & occasion",
    "Premium products & hygienic practices",
    "Calm, friendly, and professional approach",
    "On-location & studio services available",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-subtitle">MAKEUP ARTIST</p>
          <h2 className="section-title">Naresh Thogati</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="body-italic">
              I am a professional makeup artist with expertise across a wide range 
              of makeup styles, blending creativity, precision, and a deep understanding 
              of facial aesthetics. My passion lies in enhancing natural beauty while 
              bringing every client's vision to life.
            </p>

            <p className="font-body text-muted-foreground leading-relaxed">
              With hands-on experience in Bridal Makeup, Movie & Cinematic Makeup, 
              Prosthetic Makeup, Fashion & Party Looks, I work with high-quality 
              products and advanced techniques to deliver flawless, long-lasting 
              results for every occasion.
            </p>

            <p className="font-body text-muted-foreground leading-relaxed">
              From elegant bridal transformations to bold character-driven prosthetic 
              creations, I believe makeup is not just beauty—it's art, emotion, and 
              storytelling. Every face is a new canvas, and I approach each look with 
              care, professionalism, and attention to detail.
            </p>

            {/* Specializations */}
            <div className="pt-4">
              <h3 className="font-display text-xl text-primary mb-4 flex items-center gap-2">
                <span className="text-rose-gold">✨</span> Specializations
              </h3>
              <ul className="space-y-2">
                {specializations.map((item, index) => (
                  <li
                    key={index}
                    className="font-body text-muted-foreground flex items-center gap-3"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateX(0)" : "translateX(-10px)",
                      transition: `all 0.5s ease ${0.4 + index * 0.1}s`,
                    }}
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose Me */}
            <div className="pt-4">
              <h3 className="font-display text-xl text-primary mb-4 flex items-center gap-2">
                <span className="text-rose-gold">✨</span> Why Choose Me
              </h3>
              <ul className="space-y-2">
                {whyChooseMe.map((item, index) => (
                  <li
                    key={index}
                    className="font-body text-muted-foreground flex items-center gap-3"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateX(0)" : "translateX(-10px)",
                      transition: `all 0.5s ease ${0.7 + index * 0.1}s`,
                    }}
                  >
                    <span className="w-1.5 h-1.5 bg-rose-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            {/* Main Image */}
            <div
              className={`relative z-10 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <img
                src={aboutImage1}
                alt="Naresh Thogati - Makeup Artist"
                className="w-full max-w-md ml-auto rounded-lg shadow-elegant"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <p className="font-script text-lg text-foreground italic">
                  Naresh Thogati / Makeup Artist
                </p>
              </div>
            </div>

            {/* Secondary Images */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div
                className={`transition-all duration-700 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <img
                  src={aboutImage2}
                  alt="Makeup work sample"
                  className="w-full aspect-[3/4] object-cover rounded-lg shadow-soft hover:shadow-elegant transition-shadow duration-300"
                />
              </div>
              <div
                className={`transition-all duration-700 delay-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <img
                  src={aboutImage3}
                  alt="Makeup work sample"
                  className="w-full aspect-[3/4] object-cover rounded-lg shadow-soft hover:shadow-elegant transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
