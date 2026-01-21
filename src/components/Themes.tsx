const themes = [
  {
    title: "Beziehung",
    description: "Die Schwierigkeit, sich zu zeigen. Die Angst vor Nähe oder Verlust.",
  },
  {
    title: "Grenzen",
    description: "Das Ringen um eigene Grenzen. Das Spüren, was stimmig ist.",
  },
  {
    title: "Leere",
    description: "Innere Leere oder anhaltende Unruhe, die sich nicht erklären lässt.",
  },
  {
    title: "Identität",
    description: "Das Gefühl, sich selbst verloren zu haben. Nicht mehr zu wissen, wer man ist.",
  },
  {
    title: "Sinn",
    description: "Fragen, die keine schnellen Antworten haben. Und die dennoch gehört werden wollen.",
  },
];

const Themes = () => {
  return (
    <section id="themen" className="section-spacing">
      <div className="container-wide">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Was Menschen zu mir führt
          </h2>
          <p className="text-text-body font-light max-w-xl mx-auto">
            Es braucht keine Diagnose. Nur das Gespür, dass etwas nach
            Aufmerksamkeit ruft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg bg-card/50 border border-transparent hover:border-border/50 transition-all duration-500"
            >
              <div className="w-2 h-2 rounded-full bg-primary/40 mb-6 group-hover:bg-primary transition-colors duration-500" />
              <h3 className="font-serif text-xl text-foreground mb-3">
                {theme.title}
              </h3>
              <p className="text-text-body font-light text-sm leading-relaxed text-justify-clean">
                {theme.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm font-light italic">
            Diese Themen sind Einladungen, keine Etiketten.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Themes;
