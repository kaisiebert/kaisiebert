import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
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
        <button
          onClick={() => scrollToSection("hero")}
          className="font-serif text-xl tracking-wide text-foreground hover:text-primary transition-colors"
        >
          Kai Siebert
        </button>

        <div className="hidden md:flex items-center gap-10">
          {[
            { id: "ueber", label: "Über mich" },
            { id: "themen", label: "Themen" },
            { id: "angebot", label: "Angebot" },
            { id: "kontakt", label: "Kontakt" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-text-body hover:text-foreground transition-colors tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
