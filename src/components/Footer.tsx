const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card/30 border-t border-border/30">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p className="font-serif text-foreground">Kai Siebert</p>

          <div className="flex items-center gap-6">
            <a
              href="#impressum"
              className="hover:text-foreground transition-colors"
            >
              Impressum
            </a>
            <a
              href="#datenschutz"
              className="hover:text-foreground transition-colors"
            >
              Datenschutz
            </a>
          </div>

          <p>© {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
