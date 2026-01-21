import Enso from "./Enso";

const Contact = () => {
  return (
    <section id="kontakt" className="section-spacing">
      <div className="container-narrow text-center">
        <div className="flex justify-center mb-10">
          <Enso size={80} className="text-primary/50" animated={false} />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
          Kontakt
        </h2>

        <p className="text-text-body font-light mb-12 max-w-md mx-auto">
          Wenn etwas in Ihnen nach Klärung ruft, lade ich Sie ein, sich zu
          melden.
        </p>

        <div className="space-y-4 mb-12">
          <a
            href="mailto:kontakt@kaisiebert.de"
            className="block text-lg text-foreground hover:text-primary transition-colors"
          >
            kontakt@kaisiebert.de
          </a>
          <p className="text-muted-foreground text-sm">
            Ich melde mich innerhalb weniger Tage.
          </p>
        </div>

        <div className="pt-12 border-t border-border/30">
          <p className="text-muted-foreground text-sm font-light">
            Termine nach Vereinbarung · Präsenz oder Video
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
