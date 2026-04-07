import kaiSiebert from "@/assets/kai-siebert.webp";

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
                width={224}
                height={224}
                loading="lazy"
                decoding="async"
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-top border-2 border-primary/10 shadow-lg"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 whitespace-nowrap">
              Lernen wir uns kennen?
            </h2>

            <div className="space-y-5 text-text-body leading-relaxed text-justify-clean">
              <p>
                Mein Name ist Kai Siebert, geboren 1969 in Hamburg.
              </p>

              <p>
                Ich arbeite als Psychologe mit Menschen aus den unterschiedlichsten Kontexten. In der wissenschaftlichen Forschung widme ich mich der ICH-Struktur und dem Bewusstsein.
              </p>

              <p>
                Neben zahlreichen beruflichen Weiterbildungen im Bereich der Psychologie widme ich mich der ZEN-Philosophie.
              </p>

              <p className="text-foreground">
                Als Psychologe und Coach arbeite ich lösungsorientiert, respektvoll und nah am Menschen. Offenheit, Klarheit und eine wertschätzende Haltung bilden die Basis meiner Arbeit.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border/50 space-y-2">
              <p className="text-sm text-muted-foreground">
                MSc Angewandte Psychologie
              </p>
              <p className="text-sm text-muted-foreground">
                Heilpraktiker für Psychotherapie
              </p>
              <p className="text-sm text-muted-foreground">
                Systemischer Coach (DCV)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
