import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);
      if (location.pathname === "/") {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-2 sm:py-3 md:py-4"
          : "bg-transparent py-3 sm:py-4 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <nav className="flex items-center justify-between min-h-[48px] sm:min-h-[56px] md:min-h-[64px]">
          {/* Logo */}
          <Link
            to="/"
            className="transition-opacity duration-300 hover:opacity-80 relative z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <img 
              src="https://i.ibb.co/SwgvBhqh/sminkup-logommm-removebg-preview.png"
              alt="Logo"
              className={`transition-all duration-300 ${
                isScrolled 
                  ? "h-8 sm:h-10 md:h-12 lg:h-16" 
                  : "h-10 sm:h-12 md:h-16 lg:h-20"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith("/#") ? (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="elegant-link font-body text-sm xl:text-base tracking-wide font-medium whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="elegant-link font-body text-sm xl:text-base tracking-wide font-medium whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center z-50 touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 sm:w-7 h-[2px] bg-primary transition-all duration-300 ease-smooth ${
                isMenuOpen ? "rotate-45 translate-y-[1px]" : "-translate-y-1.5 sm:-translate-y-2"
              }`}
            />
            <span
              className={`block h-[2px] bg-primary transition-all duration-300 ease-smooth ${
                isMenuOpen ? "opacity-0 w-0" : "opacity-100 w-3 sm:w-4"
              }`}
            />
            <span
              className={`block w-6 sm:w-7 h-[2px] bg-primary transition-all duration-300 ease-smooth ${
                isMenuOpen ? "-rotate-45 -translate-y-[1px]" : "translate-y-1.5 sm:translate-y-2"
              }`}
            />
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed left-0 right-0 bottom-0 lg:hidden transition-all duration-500 ${
          isScrolled 
            ? "bg-background backdrop-blur-md" 
            : "bg-background/98 backdrop-blur-lg"
        } ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ 
          top: isScrolled ? '60px' : '72px',
          height: isScrolled ? 'calc(100vh - 60px)' : 'calc(100vh - 72px)'
        }}
      >
        <div className="flex flex-col items-center justify-center h-full px-6 sm:px-8 pb-20">
          {/* Logo in mobile menu */}
          <div className={`mb-8 sm:mb-12 transition-all duration-500 ${
            isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
            <img 
              src="https://i.ibb.co/SwgvBhqh/sminkup-logommm-removebg-preview.png"
              alt="Logo"
              className="h-12 sm:h-16 md:h-20"
            />
          </div>
          
          {/* Navigation Links */}
          <ul className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-md">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className={`w-full text-center transition-all duration-500 ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMenuOpen ? `${index * 0.1}s` : "0s" }}
              >
                {link.href.startsWith("/#") ? (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="font-display text-xl sm:text-2xl md:text-3xl text-foreground hover:text-primary transition-colors duration-300 block py-2 sm:py-3"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="font-display text-xl sm:text-2xl md:text-3xl text-foreground hover:text-primary transition-colors duration-300 block py-2 sm:py-3"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;