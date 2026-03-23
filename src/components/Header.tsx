import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ensoLogo from "@/assets/enso-logo.webp";

const navItems = [
  { id: "ueber", label: "Über mich" },
  { id: "themen", label: "Themen" },
  { href: "/selbstwert", label: "Selbstwert" },
  { id: "angebot", label: "Angebot" },
  { id: "kontakt", label: "Kontakt" },
] as const;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderNavItem = (item: typeof navItems[number], mobile = false) => {
    const baseClass = mobile
      ? "block text-lg font-serif text-foreground hover:text-primary transition-colors tracking-wide py-3"
      : "text-sm text-text-body hover:text-foreground transition-colors tracking-wide";

    if ("href" in item && item.href) {
      return (
        <Link
          key={item.label}
          to={item.href}
          className={baseClass}
          onClick={() => setMobileOpen(false)}
        >
          {item.label}
        </Link>
      );
    }
    const id = "id" in item ? item.id : undefined;
    return (
      <button
        key={id}
        onClick={() => scrollToSection(id!)}
        className={baseClass}
      >
        {item.label}
      </button>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "bg-background/90 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <nav className="container-wide py-5 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            onClick={() => setMobileOpen(false)}
          >
            <img src={ensoLogo} alt="Kai Siebert Logo" className="h-10 w-10 object-contain" />
            <span className="font-serif text-xl tracking-wide text-foreground">Kai Siebert</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => renderNavItem(item))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay — rendered outside header for correct stacking */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-background z-[100]">
          <div className="flex flex-col items-center gap-2 pt-16 px-8">
            {navItems.map((item) => renderNavItem(item, true))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
