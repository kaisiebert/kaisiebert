const About = () => {
  return (
    <section id="ueber" className="section-spacing bg-card/50">
      <div className="container-narrow">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Decorative element */}
          <div className="hidden md:flex md:col-span-2 justify-center pt-4">
            <div className="w-32 h-32 rounded-full border border-primary/20 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent" />
            </div>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Über mich
            </h2>

            <div className="space-y-6 text-text-body font-light leading-relaxed">
              <p>
                Seit über 14 Jahren begleite ich Menschen in Prozessen der
                Selbstwahrnehmung und persönlichen Entwicklung.
              </p>

              <p>
                Meine Arbeit gründet auf psychologischem Fachwissen, gelebter
                Erfahrung und einer tiefen Achtung vor dem, was jeder Mensch
                bereits in sich trägt.
              </p>

              <p>
                Ich biete keinen schnellen Wandel. Keine Optimierung. Keine
                Lösung von außen.
              </p>

              <p className="text-foreground">
                Sondern einen Raum, in dem Sie sich selbst begegnen können – mit
                allem, was da ist.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Psychologischer Berater · Keine Heilbehandlung · Keine Therapie
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
