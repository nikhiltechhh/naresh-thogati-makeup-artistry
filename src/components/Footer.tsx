import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo className="h-12" inverted />
          <p className="font-body text-sm text-background/60">
            © {new Date().getFullYear()} Sminkup by Naresh Thogati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
