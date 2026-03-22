const themes = [
  {
    title: "Angewandte Psychologie",
    description:
      "Wissenschaftliche Erkenntnisse verbunden mit praktischen Methoden, die im echten Leben Wirkung zeigen. Sie hilft, innere Muster, Reaktionen und Bedürfnisse besser zu verstehen.",
  },
  {
    title: "Psychologische Beratung",
    description:
      "Unterstützung dabei, innere Klarheit zu gewinnen, Belastungen einzuordnen und neue Perspektiven zu entwickeln. Professionell, verständlich und nah am Menschen.",
  },
  {
    title: "Counseling",
    description:
      "Ein geschützter Raum, in dem Belastungen, Zweifel oder Überforderung Platz haben dürfen. Mit klarer Struktur und menschlicher Begleitung entsteht wieder innere Ordnung.",
  },
  {
    title: "Systemisches Coaching",
    description:
      "Wir betrachten nicht nur das Symptom, sondern das ganze Bild. Beziehungen, Muster und Rollen werden sichtbar – und damit auch neue Wege, sich selbst wirksam zu führen.",
  },
  {
    title: "Selbst & ICH",
    description:
      "Das Selbst und das ICH bilden unsere innere Grundlage. Ich unterstütze dabei, Klarheit über die eigene Identität zu gewinnen und ein gesundes Gefühl von Selbstvertrauen zu entwickeln.",
  },
];

const Themes = () => {
  return (
    <section id="themen" className="section-spacing">
      <div className="container-wide">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Psychologie
          </h2>
          <p className="text-text-body max-w-2xl mx-auto text-justify-clean">
            Psychologische Beratung, Coaching und Counseling – für Menschen, die Klarheit, Stärke und Balance suchen.
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
              <p className="text-text-body text-sm leading-relaxed text-justify-clean">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;
