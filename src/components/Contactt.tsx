import { useEffect, useRef, useState } from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";

const Contactt = () => {
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

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/sminkupofficial/",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500",
      hoverText: "hover:text-white"
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/sminkupofficial/",
      color: "hover:bg-blue-600",
      hoverText: "hover:text-white"
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-primary text-primary-foreground mt-40 "
    >
      {/* Google Maps Section - Full Width with White Background */}
      <div className="w-full bg-white py-0">
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4842598749756!2d78.43569207516609!3d17.436521183459114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb912d9e57dd37%3A0xdbfdb6e05b895c1e!2sSminkUp%20Makeup%20Studio!5e0!3m2!1sen!2sin!4v1767172090421!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SminkUp Makeup Studio Location"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 mt-6 ">
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
            className={`grid md:grid-cols-3 gap-8 mt-12  transition-all duration-700 delay-200 ${
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
              <a href="tel:+919948623938" className="font-script text-lg hover:opacity-80 transition-opacity">
                +91 9948623938
              </a>
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
              <a href="mailto:Naresh.Thogati@outlook.com" className="font-script text-lg hover:opacity-80 transition-opacity break-all">
                Naresh.Thogati@outlook.com
              </a>
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
              <p className="font-script text-base leading-relaxed">
                #8-3-222/1/D, Metro Pillar No: C1481,
                Madhura Nagar Metro Station Exit Gate-A,
                Madhura Nagar, Ameerpet, Hyderabad, TS-500873.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div
            className={` mt-12 flex justify-center gap-1 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14  flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:border-transparent ${social.color} group`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Icon 
                    className={`w-6 h-6 text-primary-foreground transition-colors duration-300 ${social.hoverText}`}
                    strokeWidth={2}
                  />
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div
            className={`mt-16 mb-12 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    
    // WhatsApp URL
    const whatsappURL = `https://wa.me/919948623938?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h3 className="font-display text-3xl md:text-4xl font-normal text-primary-foreground mb-2">
          Send Us a Message
        </h3>
        <p className="text-primary-foreground/70 text-sm">
          Fill out the form below and we'll get back to you shortly
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-primary-foreground/20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary-foreground mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-primary-foreground/30 rounded-lg text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-primary-foreground/60 focus:ring-2 focus:ring-primary-foreground/20 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-foreground mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-primary-foreground/30 rounded-lg text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-primary-foreground/60 focus:ring-2 focus:ring-primary-foreground/20 transition-all"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-primary-foreground mb-2">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-primary-foreground/30 rounded-lg text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-primary-foreground/60 focus:ring-2 focus:ring-primary-foreground/20 transition-all"
                placeholder="+91 1234567890"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-primary-foreground mb-2">
                Service *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-primary-foreground/30 rounded-lg text-primary-foreground focus:outline-none focus:border-primary-foreground/60 focus:ring-2 focus:ring-primary-foreground/20 transition-all"
              >
                <option value="" className="bg-primary text-primary-foreground">Select a service</option>
                <option value="Bridal Makeup" className="bg-primary text-primary-foreground">Bridal Makeup</option>
                <option value="Party Makeup" className="bg-primary text-primary-foreground">Party Makeup</option>
                <option value="Engagement Makeup" className="bg-primary text-primary-foreground">Engagement Makeup</option>
                <option value="Pre-Wedding Shoot" className="bg-primary text-primary-foreground">Pre-Wedding Shoot</option>
                <option value="Makeup Academy" className="bg-primary text-primary-foreground">Makeup Academy</option>
                <option value="Other" className="bg-primary text-primary-foreground">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary-foreground mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-white/5 border border-primary-foreground/30 rounded-lg text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-primary-foreground/60 focus:ring-2 focus:ring-primary-foreground/20 transition-all resize-none"
              placeholder="Tell us about your requirements..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-primary font-medium py-4 px-6 rounded-lg hover:bg-primary-foreground/90 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactt;