import ensoLogo from "@/assets/enso-logo.webp";

const Contact = () => {
  return (
    <section id="kontakt" className="section-spacing">
      <div className="container-narrow text-center">
        <div className="flex justify-center mb-10">
          <img src={ensoLogo} alt="" className="w-16 h-16 object-contain opacity-50" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
          Kontakt
        </h2>

        <p className="text-text-body mb-12 max-w-md mx-auto text-center">
          Gemeinsam schaffen wir Raum für Entwicklung, innere Stabilität und echte Veränderung – Schritt für Schritt, in Ihrem Tempo.
        </p>

        <div className="space-y-6 mb-12">
          <div>
            <a
              href="mailto:info@kaisiebert.de"
              className="block text-lg text-foreground hover:text-primary transition-colors"
            >
              info@kaisiebert.de
            </a>
          </div>
          <div>
            <a
              href="tel:+4917551813"
              className="block text-lg text-foreground hover:text-primary transition-colors"
            >
              0175 518 13 13
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            Ich melde mich innerhalb weniger Tage.
          </p>
        </div>

        <div className="pt-12 border-t border-border/30">
          <p className="text-muted-foreground text-sm font-light">
            Termine nach Vereinbarung · Präsenz oder Video
          </p>
          <p className="text-muted-foreground text-sm font-light mt-2">
            Standort: Nürnberg
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
