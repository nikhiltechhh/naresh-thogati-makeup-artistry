import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-12 bg-white text-black border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img 
            src="https://i.ibb.co/SwgvBhqh/sminkup-logommm-removebg-preview.png" 
            alt="Sminkup Logo" 
            className="h-12 w-auto"
          />
          <p className="font-body text-sm text-black/60 text-center md:text-right">
            © {new Date().getFullYear()} Sminkup by Naresh Thogati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
