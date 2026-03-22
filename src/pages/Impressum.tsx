const Impressum = () => {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container-narrow">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-12">
          Impressum
        </h1>

        <div className="space-y-10 text-text-body font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              Angaben gemäß § 5 DDG
            </h2>
            <div className="space-y-1">
              <p>Kai Siebert</p>
              <p>c/o IP-Management #6765</p>
              <p>Ludwig-Erhard-Straße 18</p>
              <p>20459 Hamburg</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              Standort
            </h2>
            <p>Nürnberg</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              Kontakt
            </h2>
            <div className="space-y-1">
              <p>Telefon: 09181-5436701</p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@kaisiebert.de"
                  className="text-primary hover:underline"
                >
                  info@kaisiebert.de
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              Berufsbezeichnung
            </h2>
            <div className="space-y-1">
              <p>MSc Angewandte Psychologie</p>
              <p>Heilpraktiker für Psychotherapie</p>
              <p>Systemischer Coach (DCV)</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
              DE322968657
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              Wirtschafts-ID
            </h2>
            <p>235/274/31417</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              Vertreten durch
            </h2>
            <p>Kai Siebert</p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50">
          <a
            href="/"
            className="text-primary hover:underline text-sm font-light"
          >
            ← Zurück zur Startseite
          </a>
        </div>
      </div>
    </main>
  );
};

export default Impressum;
