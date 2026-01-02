import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section on homepage
      if (location.pathname === "/") {
        const sections = ["about", "contact"];
        const scrollPosition = window.scrollY + 100;
        
        let currentSection = "";
        sections.forEach(sectionId => {
          const element = document.getElementById(sectionId);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              currentSection = sectionId;
            }
          }
        });
        
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

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
    { name: "About", href: "/About" },
    { name: "Services", href: "/Services" },
    { name: "Gallery", href: "/Gallery" },
    { name: "Academy", href: "/Academy" },
    { name: "Contact", href: "/Contactt" },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/sminkupofficial/', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Instagram, href: 'https://www.instagram.com/sminkupofficial/', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Youtube, href: 'https://www.youtube.com/sminkup', label: 'YouTube', color: 'hover:text-red-600' },
  ];

  const PinterestIcon = () => (
    <svg
      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  );

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

  const isActive = (link: { name: string; href: string }) => {
    // Check if it's a direct page match
    if (link.href === location.pathname) {
      return true;
    }
    
    // Check if it's a hash link and we're on the homepage
    if (link.href.startsWith("/#")) {
      const sectionId = link.href.substring(2);
      return location.pathname === "/" && activeSection === sectionId;
    }
    
    return false;
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
        {/* Top Bar - Matches header background */}
        <div className="py-1 sm:py-1 ">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center text-xs text-gray-600">
              {/* <span className="font-medium">Follow us</span> */}
            </div>

            <div className="flex items-center gap-0.5 sm:gap-1 ml-auto">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-1.5 rounded-full text-gray-600 ${social.color} transition-all duration-300 hover:bg-gray-100 transform hover:scale-110`}
                >
                  <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              ))}
              
              <a
                href="https://in.pinterest.com/sminkupofficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="p-1.5 rounded-full text-gray-600 hover:text-red-700 transition-all duration-300 hover:bg-gray-100 transform hover:scale-110"
              >
                <PinterestIcon />
              </a>
            </div>
          </div>
        </div>

        <nav className="flex items-center justify-between min-h-[48px] sm:min-h-[56px] md:min-h-[64px]">
          {/* Logo */}
        <Link
            to="/"
            className="transition-opacity duration-300 hover:opacity-80 relative -mt-10 z-50 flex flex-col items-center"
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
            <span className={`font-bold text-gray-800 tracking-wider transition-all duration-300 ${
              isScrolled 
                ? "text-[0.45rem] sm:text-[0.55rem] md:text-xs" 
                : "text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm"
            }`}>
              MAKEUP STUDIO & ACADEMY
            </span>
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
                    className={`elegant-link font-body text-sm xl:text-base tracking-wide font-medium whitespace-nowrap transition-colors duration-300 ${
                      isActive(link) 
                        ? "text-primary border-b-2 border-primary" 
                        : ""
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className={`elegant-link font-body text-sm xl:text-base tracking-wide font-medium whitespace-nowrap transition-colors duration-300 ${
                      isActive(link) 
                        ? "text-primary border-b-2 border-primary" 
                        : ""
                    }`}
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
                    className={`font-display text-xl sm:text-2xl md:text-3xl transition-colors duration-300 block py-2 sm:py-3 ${
                      isActive(link)
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className={`font-display text-xl sm:text-2xl md:text-3xl transition-colors duration-300 block py-2 sm:py-3 ${
                      isActive(link)
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary"
                    }`}
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