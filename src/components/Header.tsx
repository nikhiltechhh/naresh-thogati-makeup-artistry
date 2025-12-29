import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Portfolio", href: "/portfolio" },
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
          ? "bg-background/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <Logo 
              className={`transition-all duration-300 ${
                isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith("/#") ? (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="elegant-link font-body text-sm tracking-wide font-medium"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="elegant-link font-body text-sm tracking-wide font-medium"
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
            className="lg:hidden relative w-8 h-6 flex flex-col justify-center items-center z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-primary transition-all duration-300 ease-smooth ${
                isMenuOpen ? "rotate-45 translate-y-[1px]" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`block h-[2px] bg-primary transition-all duration-300 ease-smooth ${
                isMenuOpen ? "opacity-0 w-0" : "opacity-100 w-3"
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-primary transition-all duration-300 ease-smooth ${
                isMenuOpen ? "-rotate-45 -translate-y-[1px]" : "translate-y-1.5"
              }`}
            />
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background/98 backdrop-blur-lg lg:hidden transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {/* Logo in mobile menu */}
          <Logo className="h-16 mb-8" />
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className={`transition-all duration-500 ${
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
                    className="font-display text-2xl text-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="font-display text-2xl text-foreground hover:text-primary transition-colors duration-300"
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
