import { Link } from "react-router-dom";

interface FooterProps {
  variant?: "default" | "unternehmen";
}

const Footer = ({ variant = "default" }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const isUnternehmen = variant === "unternehmen";

  const bgClass = isUnternehmen
    ? "bg-security-card border-t border-security-border/30"
    : "bg-card/30 border-t border-border/30";
  const textClass = isUnternehmen ? "text-security-muted" : "text-muted-foreground";
  const nameClass = isUnternehmen ? "text-security-fg" : "text-foreground";
  const hoverClass = isUnternehmen ? "hover:text-security-fg" : "hover:text-foreground";

  return (
    <footer className={`py-12 ${bgClass}`}>
      <div className="container-narrow">
        <div className={`flex flex-col items-center gap-6 text-sm ${textClass}`}>
          <p className={`font-serif ${nameClass}`}>Kai Siebert</p>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="mailto:info@kaisiebert.de"
              className={`${hoverClass} transition-colors`}
            >
              info@kaisiebert.de
            </a>
            <span>·</span>
            <a
              href="tel:+4917551813"
              className={`${hoverClass} transition-colors`}
            >
              0175 518 13 13
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/impressum"
              className={`${hoverClass} transition-colors`}
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className={`${hoverClass} transition-colors`}
            >
              Datenschutz
            </Link>
            <button
              type="button"
              onClick={() => {
                localStorage.removeItem("cookie-consent");
                window.location.reload();
              }}
              className={`${hoverClass} transition-colors cursor-pointer bg-transparent border-none p-0 text-sm font-inherit`}
            >
              Cookie-Einstellungen
            </button>
          </div>

          <p className="text-xs">
            © {currentYear} Kai Siebert. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
