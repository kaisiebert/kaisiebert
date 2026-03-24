import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "sw-problem", label: "Kennst du das" },
  { id: "sw-klarheit", label: "Klarheit" },
  { id: "sw-akzeptanz", label: "Akzeptanz" },
  { id: "sw-veraenderung", label: "Veränderung" },
  { id: "sw-arbeitsweise", label: "Arbeitsweise" },
  { id: "kontakt-selbstwert", label: "Kontakt" },
];

const SelbstwertNav = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed right-6 top-1/2 -translate-y-1/2 z-40 transition-opacity duration-500 hidden lg:flex flex-col items-end gap-3",
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-label="Seitennavigation"
    >
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="group flex items-center gap-3"
          aria-label={`Zu "${label}" scrollen`}
        >
          <span
            className={cn(
              "text-xs tracking-wide transition-all duration-300 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
              activeId === id
                ? "text-foreground opacity-100 translate-x-0"
                : "text-muted-foreground"
            )}
          >
            {label}
          </span>
          <span
            className={cn(
              "block rounded-full transition-all duration-300",
              activeId === id
                ? "w-2.5 h-2.5 bg-primary"
                : "w-1.5 h-1.5 bg-border group-hover:bg-muted-foreground"
            )}
          />
        </button>
      ))}
    </nav>
  );
};

export default SelbstwertNav;
