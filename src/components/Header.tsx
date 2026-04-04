import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ensoLogo from "@/assets/enso-logo.webp";

type NavItem = { label: string } & (
  | { href: string; id?: never }
  | { id: string; href?: never }
);

const beratungNav: NavItem[] = [
  { id: "ueber", label: "Über mich" },
  { id: "themen", label: "Themen" },
  { href: "/selbstwert", label: "Selbstwert" },
  { id: "angebot", label: "Angebot" },
  { id: "kontakt", label: "Kontakt" },
];

const unternehmenNav: NavItem[] = [
  { href: "/unternehmen", label: "Leistungen" },
  { href: "/bewusstsein", label: "Bewusstsein" },
  { href: "/ueber-mich?context=unternehmen", label: "Über mich" },
  { id: "kontakt-unternehmen", label: "Kontakt" },
];

const splitNav: NavItem[] = [
  { href: "/beratung", label: "Für Privatpersonen" },
  { href: "/unternehmen", label: "Für Unternehmen" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/bewusstsein", label: "Bewusstsein" },
];

interface HeaderProps {
  variant?: "beratung" | "unternehmen" | "split";
}

const Header = ({ variant = "beratung" }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isUnternehmen = variant === "unternehmen";

  const navItems =
    variant === "unternehmen"
      ? unternehmenNav
      : variant === "split"
        ? splitNav
        : beratungNav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    // For beratung variant, scroll within /beratung page
    const basePath = variant === "beratung" ? "/beratung" : variant === "unternehmen" ? "/unternehmen" : "/";
    if (location.pathname !== basePath) {
      window.location.href = `${basePath}#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderNavItem = (item: NavItem, mobile = false) => {
    const baseClass = mobile
      ? "block text-lg font-serif hover:opacity-70 transition-colors tracking-wide py-3"
      : `text-sm hover:opacity-70 transition-colors tracking-wide`;

    const colorClass = isUnternehmen
      ? "text-security-fg"
      : mobile
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground";

    if (item.href) {
      return (
        <Link
          key={item.label}
          to={item.href}
          className={`${baseClass} ${colorClass}`}
          onClick={() => setMobileOpen(false)}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id!)}
        className={`${baseClass} ${colorClass}`}
      >
        {item.label}
      </button>
    );
  };

  const bgClasses = isUnternehmen
    ? scrolled || mobileOpen
      ? "bg-security-bg/95 backdrop-blur-md border-b border-security-border/50"
      : "bg-transparent"
    : scrolled || mobileOpen
      ? "bg-background/90 backdrop-blur-md border-b border-border/50"
      : "bg-transparent";

  const overlayBg = isUnternehmen ? "bg-security-bg" : "bg-background";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClasses}`}
      >
        <nav className="container-wide py-5 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            onClick={() => setMobileOpen(false)}
          >
            <img
              src={ensoLogo}
              alt="Kai Siebert Logo"
              className="h-10 w-10 object-contain"
            />
            <span
              className={`font-serif text-xl tracking-wide ${
                isUnternehmen ? "text-security-fg" : "text-foreground"
              }`}
            >
              Kai Siebert
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => renderNavItem(item))}
          </div>

          <button
            className={`md:hidden p-2 transition-colors ${
              isUnternehmen
                ? "text-security-fg hover:text-security-accent"
                : "text-foreground hover:text-primary"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div
          className={`md:hidden fixed inset-0 top-[73px] ${overlayBg} z-[100]`}
        >
          <div className="flex flex-col items-center gap-2 pt-16 px-8">
            {navItems.map((item) => renderNavItem(item, true))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
