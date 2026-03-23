const offerings = [
  {
    title: "Einzelgespräch",
    duration: "60 Minuten",
    price: "120 €",
    description:
      "Ein geschützter Raum für das, was gerade bewegt. Für Klärung, Wahrnehmung, innere Ausrichtung.",
  },
  {
    title: "Begleitprozess",
    duration: "5 Gespräche",
    price: "550 €",
    description:
      "Kontinuierliche Begleitung über mehrere Wochen. Für tiefere Arbeit an wiederkehrenden Themen.",
  },
  {
    title: "Erstgespräch",
    duration: "30 Minuten",
    price: "kostenfrei",
    description:
      "Ein erstes Kennenlernen. Ohne Verpflichtung. Um zu spüren, ob der Rahmen stimmig ist.",
  },
];

const Offerings = () => {
  return (
    <section id="angebot" className="section-spacing bg-card/50">
      <div className="container-wide">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Angebot
          </h2>
          <p className="text-text-body max-w-lg mx-auto text-center">
            Coaching und Beratung. Persönlich oder per Videogespräch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="p-8 md:p-10 rounded-lg bg-background border border-border/50 hover:border-primary/20 transition-all duration-500 flex flex-col"
            >
              <h3 className="font-serif text-2xl text-foreground mb-2">
                {offering.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {offering.duration}
              </p>
              <p className="text-text-body text-sm leading-relaxed flex-grow text-justify-clean">
                {offering.description}
              </p>
              <div className="mt-8 pt-6 border-t border-border/50">
                <span className="font-serif text-xl text-primary">
                  {offering.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-lg bg-secondary/50 border border-border/30">
          <p className="text-center text-text-body text-sm text-justify-clean">
            <span className="text-foreground">Wichtiger Hinweis:</span> Meine
            Arbeit ersetzt keine Psychotherapie oder ärztliche Behandlung. Bei
            akuten psychischen Krisen wenden Sie sich bitte an einen Arzt oder
            Therapeuten.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
