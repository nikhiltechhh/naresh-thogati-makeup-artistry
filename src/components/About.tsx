import { useEffect, useRef, useState } from "react";
import tmn from "@/assets/tmnn.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBottomImageVisible, setIsBottomImageVisible] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const bottomImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const bottomObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBottomImageVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (bottomImageRef.current) {
      bottomObserver.observe(bottomImageRef.current);
    }

    return () => {
      observer.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-b from-white to-rose-50 mt-32"
    >
      {/* Section Header */}
      <div
        className={`text-center mb-16 transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10"
        }`}
      >
        <p className="text-rose-500 font-semibold text-sm uppercase tracking-wider mb-2">
          MAKEUP ARTIST
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Naresh Thogati
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {/* Left Content */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              I am a professional makeup artist with expertise across a wide
              range of makeup styles, blending creativity, precision, and a deep
              understanding of facial aesthetics. My passion lies in enhancing
              natural beauty while bringing every client's vision to life.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              With hands-on experience in Bridal Makeup, Movie & Cinematic
              Makeup, Prosthetic Makeup, Fashion & Party Looks, I work with
              high-quality products and advanced techniques to deliver flawless,
              long-lasting results for every occasion.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              From elegant bridal transformations to bold character-driven
              prosthetic creations, I believe makeup is not just beauty—it's
              art, emotion, and storytelling. Every face is a new canvas, and I
              approach each look with care, professionalism, and attention to
              detail.
            </p>
          </div>

          {/* Right Images */}
          <div
            className={`lg:col-span-1 space-y-4 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Main Image */}
            <div className="relative rounded-xl overflow-hidden shadow-xl group">
              <img
                src="https://i.ibb.co/KpMKt7nH/Whats-App-Image-2025-12-29-at-4-22-38-PM-1.jpg"
                alt="Naresh Thogati - Makeup Artist"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Secondary Image */}
            <div className="rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://i.ibb.co/yn3dTs97/Naresh-Thogati-6.jpg"
                alt="Makeup Work 2"
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Bottom Featured Image */}
        <div
          ref={bottomImageRef}
          className={`mt-16 transition-all duration-1000 ${
            isBottomImageVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
        >
          <div className="relative overflow-hidden group">
            <img
              src={tmn}
              alt="Featured Makeup Work"
              className="w-full h-auto max-h-[800px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
