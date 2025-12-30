import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const galleryImages: string[] = [
  "https://i.ibb.co/Mkv59w8D/Whats-App-Image-2025-12-29-at-4-25-18-PM.jpg",
  "https://i.ibb.co/5hFV4JWm/Smink-Up-WV-Add.jpg",
  "https://i.ibb.co/XRCjvqC/Whats-App-Image-2025-12-29-at-4-25-18-PM-1.jpg",
  "https://i.ibb.co/MDzNSTrG/Whats-App-Image-2025-12-29-at-4-22-42-PM.jpg",
  "https://i.ibb.co/FbKYyYfD/Whats-App-Image-2025-12-29-at-4-22-40-PM-1.jpg",
  "https://i.ibb.co/6JZr9WrN/Whats-App-Image-2025-12-29-at-4-25-17-PM.jpg",
];

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="gallery"
        ref={sectionRef}
        className="py-24 lg:py-32 bg-background"
      >
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div
            className={`mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <p className="section-subtitle">PORTFOLIO</p>
              <h2 className="section-title">Our Gallery</h2>
            </div>

            <Link
              to="/gallery"
              className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-primary hover:text-accent transition"
            >
              View All
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition"
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

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`group relative overflow-hidden rounded-lg cursor-pointer aspect-square transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition" />

                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center shadow-elegant">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div
            className={`mt-12 text-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-primary/90 hover:shadow-elegant transition"
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
