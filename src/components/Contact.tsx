import { useEffect, useRef, useState } from "react";

const Contact = () => {
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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div
            className={`mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-2">
              GET IN TOUCH
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-primary-foreground mb-6">
              Let's Create Something Beautiful
            </h2>
            <p className="font-script text-xl italic text-primary-foreground/80 max-w-2xl mx-auto">
              Ready to transform your look? Let's connect and create a look that 
              makes you feel confident, radiant, and unforgettable.
            </p>
          </div>

          {/* Contact Info */}
          <div
            className={`grid md:grid-cols-3 gap-8 mt-12 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col items-center gap-3 p-6 border border-primary-foreground/20 rounded-lg hover:border-primary-foreground/40 transition-colors duration-300">
              <svg
                className="w-8 h-8 text-primary-foreground/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h3 className="font-body text-sm tracking-widest uppercase">Phone</h3>
              <p className="font-script text-lg">+91 XXXXX XXXXX</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 border border-primary-foreground/20 rounded-lg hover:border-primary-foreground/40 transition-colors duration-300">
              <svg
                className="w-8 h-8 text-primary-foreground/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="font-body text-sm tracking-widest uppercase">Email</h3>
              <p className="font-script text-lg">contact@sminkup.com</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 border border-primary-foreground/20 rounded-lg hover:border-primary-foreground/40 transition-colors duration-300">
              <svg
                className="w-8 h-8 text-primary-foreground/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h3 className="font-body text-sm tracking-widest uppercase">Location</h3>
              <p className="font-script text-lg">Hyderabad, India</p>
            </div>
          </div>

          {/* Social Links */}
          <div
            className={`mt-12 flex justify-center gap-6 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {["Instagram", "Facebook", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300"
              >
                <span className="font-body text-xs">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
