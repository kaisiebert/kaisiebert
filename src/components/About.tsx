import kaiSiebert from "@/assets/kai-siebert.jpg";

const About = () => {
  return (
    <section id="ueber" className="section-spacing bg-card/50">
      <div className="container-narrow">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Portrait */}
          <div className="flex md:col-span-2 justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl opacity-50" />
              <img 
                src={kaiSiebert} 
                alt="Kai Siebert" 
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-top border-2 border-primary/10 shadow-lg"
              />
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
