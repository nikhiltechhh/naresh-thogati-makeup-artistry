const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="logo-text text-primary-foreground">
            Naresh
            <span className="text-base align-top ml-1 not-italic font-body tracking-widest text-primary-foreground/60">
              MAKEUP
            </span>
          </div>
          <p className="font-body text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Naresh Thogati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
