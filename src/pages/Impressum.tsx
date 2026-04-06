import useSeo from "@/hooks/use-seo";

const Impressum = () => {
  useSeo({
    title: "Impressum",
    description: "Impressum von Kai Siebert – Psychologische Beratung & Coaching in Nürnberg.",
    canonical: "https://still-presence-space.lovable.app/impressum",
  });

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
              Berufsrechtliche Angaben
            </h2>
            <div className="space-y-1">
              <p>
                Erlaubnis zur berufsmäßigen Ausübung der Heilkunde ohne Bestallung
                (Psychotherapie), erteilt durch das Gesundheitsamt der Stadt Nürnberg.
              </p>
              <p>Gesetzliche Berufsbezeichnung: Heilpraktiker (Psychotherapie)</p>
              <p>Zuständige Aufsichtsbehörde: Gesundheitsamt der Stadt Nürnberg</p>
              <p>
                Es gelten die Regelungen des Heilpraktikergesetzes (HeilPrG) sowie
                die erste Durchführungsverordnung zum Heilpraktikergesetz
                (1.&nbsp;DVO-HeilPrG).
              </p>
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
              EU-Streitschlichtung
            </h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
              Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
              Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
              permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
              konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>
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
