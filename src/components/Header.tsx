import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ensoLogo from "@/assets/enso-logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide py-5 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img src={ensoLogo} alt="Kai Siebert Logo" className="h-10 w-10 object-contain" />
          <span className="font-serif text-xl tracking-wide text-foreground">Kai Siebert</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {[
            { id: "ueber", label: "Über mich" },
            { id: "themen", label: "Themen" },
            { href: "/selbstwert", label: "Selbstwert" },
            { id: "angebot", label: "Angebot" },
            { id: "kontakt", label: "Kontakt" },
          ].map((item) => (
            item.href ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm text-text-body hover:text-foreground transition-colors tracking-wide"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-text-body hover:text-foreground transition-colors tracking-wide"
              >
                {item.label}
              </button>
            )
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
