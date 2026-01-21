import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card/30 border-t border-border/30">
      <div className="container-narrow">
        <div className="flex flex-col items-center gap-6 text-sm text-muted-foreground">
          <p className="font-serif text-foreground">Kai Siebert</p>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="mailto:info@kaisiebert.de"
              className="hover:text-foreground transition-colors"
            >
              info@kaisiebert.de
            </a>
            <span>·</span>
            <a
              href="tel:+4917551813"
              className="hover:text-foreground transition-colors"
            >
              0175 518 13 13
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/impressum"
              className="hover:text-foreground transition-colors"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="hover:text-foreground transition-colors"
            >
              Datenschutz
            </Link>
          </div>

          <p className="text-xs">© {currentYear} Kai Siebert. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
