import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldAlert, Brain, Radio, Users, AlertTriangle, Siren } from "lucide-react";
import useSeo from "@/hooks/use-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const seminare = [
  {
    icon: Siren,
    title: "Not- & Katastrophenschutz",
    subtitle: "Wenn plötzlich alles ausfällt – ist Ihr Unternehmen handlungsfähig?",
    link: "/notfallschutz",
    description:
      "Stromausfall, kein Wasser, kein Internet – Krisen entstehen oft schneller, als man denkt. In dieser Tagesschulung lernen die Teilnehmer, Gefahren frühzeitig zu erkennen, Warnmeldungen richtig einzuordnen und im Ernstfall sicher zu handeln.",
    topics: [
      "Gefahren frühzeitig erkennen",
      "Warnmeldungen richtig einordnen",
      "Im Ernstfall sicher handeln",
      "Haushalt oder Betrieb krisenfest aufstellen",
      "Vorräte & Notfallplanung",
      "Kommunikation ohne Netz",
    ],
    format: "Tagesschulung · Präsenz",
    highlight: "Praxisnah. Verständlich. Realistisch.",
  },
  {
    icon: Brain,
    title: "Sicherheitsbewusstsein & Awareness",
    subtitle: "Sicherheit beginnt im Kopf – nicht im Handbuch.",
    description:
      "Mitarbeiter sind die erste Verteidigungslinie einer Organisation. Diese Schulung schärft die Wahrnehmung für Risiken im Alltag und vermittelt psychologisch fundierte Strategien, um Bedrohungen frühzeitig zu erkennen.",
    topics: [
      "Psychologie der Risikowahrnehmung",
      "Social Engineering erkennen und abwehren",
      "Aufmerksamkeit gezielt steuern",
      "Sicherheitskultur im Team verankern",
      "Meldewege und Kommunikation im Ernstfall",
    ],
    format: "Halbtags- oder Ganztagesformat · Präsenz oder Online",
    highlight: "Psychologisch fundiert. Praxisnah. Nachhaltig.",
  },
  {
    icon: ShieldAlert,
    title: "Hybride Bedrohungslagen verstehen",
    subtitle: "Desinformation, Radikalisierung, Innentäter – die unsichtbaren Risiken.",
    description:
      "Moderne Bedrohungen sind komplex und schwer greifbar. Dieses Seminar vermittelt ein tiefes Verständnis für hybride Gefahrenlagen und befähigt Teilnehmer, Frühwarnsignale zu erkennen und angemessen zu reagieren.",
    topics: [
      "Desinformation & Manipulation erkennen",
      "Radikalisierungsprozesse verstehen",
      "Innentäterrisiken einschätzen",
      "Extremismus im Arbeitsumfeld begegnen",
      "Psychologische Frühwarnindikatoren",
    ],
    format: "Tagesschulung · Präsenz",
    highlight: "Vertraulich. Fundiert. Handlungsorientiert.",
  },
  {
    icon: Radio,
    title: "Krisenkommunikation",
    subtitle: "In der Krise zählt jedes Wort.",
    description:
      "Wie kommuniziert man unter Druck klar, ehrlich und beruhigend? Dieses Seminar trainiert Führungskräfte und Teams in der Kommunikation während und nach Krisensituationen.",
    topics: [
      "Grundlagen der Krisenkommunikation",
      "Stressresistenz und klare Sprache",
      "Interne vs. externe Kommunikation",
      "Umgang mit Medien und Öffentlichkeit",
      "Nachbereitung und Lessons Learned",
    ],
    format: "Halbtags- oder Ganztagesformat · Präsenz",
    highlight: "Praxisnah. Belastbar. Menschlich.",
  },
];

const Seminare = () => {
  useSeo({
    title: "Seminare & Schulungen · Sicherheit, Krisenvorsorge & Awareness",
    description:
      "Praxisnahe Seminare und Schulungen von Kai Siebert: Not- & Katastrophenschutz, Sicherheitsbewusstsein, hybride Bedrohungslagen und Krisenkommunikation.",
    canonical: "https://kaisiebert.de/seminare",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      name: "Seminare & Schulungen – Kai Siebert",
      description:
        "Praxisnahe Seminare und Schulungen zu Sicherheit, Krisenvorsorge und Awareness.",
      url: "https://kaisiebert.de/seminare",
      provider: {
        "@type": "Person",
        name: "Kai Siebert",
        url: "https://kaisiebert.de",
      },
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-security-bg text-security-fg">
      <Header variant="unternehmen" />

      <main id="main-content">
        {/* HERO */}
        <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-security-bg via-security-bg to-security-card" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(var(--security-accent)/0.06)_0%,_transparent_60%)]" />

          <div className="container-wide relative z-10 text-center py-20">
            <p className="text-xs uppercase tracking-[0.3em] text-security-accent mb-6 opacity-0 animate-fade-in-up">
              Seminare & Schulungen
            </p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-security-fg mb-8 leading-tight opacity-0 animate-fade-in-up animation-delay-200">
              Wissen, das schützt.
              <br />
              <span className="text-security-accent">
                Kompetenz, die bleibt.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-security-muted max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up animation-delay-400 text-justify-clean">
              Praxisnahe Schulungen für Menschen und Organisationen, die
              Sicherheit nicht dem Zufall überlassen wollen.
            </p>

            <a
              href="#seminare-uebersicht"
              className="inline-flex items-center gap-2 px-8 py-4 bg-security-accent text-security-bg font-medium tracking-wide rounded-lg hover:bg-security-accent/90 transition-all duration-300 opacity-0 animate-fade-in-up animation-delay-600"
            >
              Seminare entdecken
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* SEMINARE */}
        <section id="seminare-uebersicht" className="py-24 md:py-32">
          <div className="container-wide">
            <div className="text-center mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-security-fg mb-6">
                Seminarangebot
              </h2>
              <p className="text-security-muted max-w-2xl mx-auto text-justify-clean">
                Jedes Seminar wird individuell auf Ihre Organisation und Ihre
                Anforderungen zugeschnitten. Die Themen können als
                Einzelschulungen oder in Kombination gebucht werden.
              </p>
            </div>

            <div className="space-y-16">
              {seminare.map((seminar, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-security-border bg-security-card/50 p-8 md:p-10 hover:border-security-accent/30 transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left: Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-security-accent/10 flex items-center justify-center">
                          <seminar.icon className="w-6 h-6 text-security-accent" />
                        </div>
                        <p className="text-xs uppercase tracking-[0.2em] text-security-accent">
                          {seminar.format}
                        </p>
                      </div>

                      <h3 className="font-serif text-2xl md:text-3xl text-security-fg mb-2">
                        {seminar.title}
                      </h3>
                      <p className="text-security-accent font-medium text-sm mb-4 italic">
                        „{seminar.subtitle}"
                      </p>
                      <p className="text-security-muted leading-relaxed text-justify-clean">
                        {seminar.description}
                      </p>

                      <p className="mt-6 text-sm text-security-accent font-medium tracking-wide">
                        {seminar.highlight}
                      </p>
                      {"link" in seminar && seminar.link && (
                        <Link
                          to={seminar.link}
                          className="inline-flex items-center gap-2 mt-4 text-sm text-security-accent hover:gap-3 transition-all duration-300"
                        >
                          Mehr erfahren
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>

                    {/* Right: Topics */}
                    <div className="lg:w-80 shrink-0">
                      <p className="text-xs uppercase tracking-[0.2em] text-security-muted mb-4">
                        Inhalte
                      </p>
                      <ul className="space-y-3">
                        {seminar.topics.map((topic, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-security-fg/85"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-security-accent shrink-0" />
                            <span className="text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HINWEIS */}
        <section className="py-16 md:py-20">
          <div className="container-narrow">
            <div className="rounded-xl border border-security-border bg-security-bg p-8 md:p-10 text-center">
              <Users className="w-8 h-8 text-security-accent mx-auto mb-4" />
              <h3 className="font-serif text-xl text-security-fg mb-3">
                Individuell anpassbar
              </h3>
              <p className="text-security-muted max-w-xl mx-auto text-justify-clean text-sm leading-relaxed">
                Alle Seminare werden auf Ihre spezifischen Anforderungen
                zugeschnitten – ob für kleine Teams, ganze Abteilungen oder
                branchenspezifische Szenarien. Termine, Dauer und Schwerpunkte
                nach Absprache.
              </p>
            </div>
          </div>
        </section>

        {/* CTA / KONTAKT */}
        <section id="kontakt-seminare" className="py-24 md:py-32">
          <div className="container-narrow text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-security-fg mb-6">
              Interesse an einem Seminar?
            </h2>
            <p className="text-security-muted mb-12 max-w-lg mx-auto text-justify-clean">
              Lassen Sie uns über Ihre Anforderungen sprechen. Ich berate Sie
              gerne – unverbindlich und vertraulich.
            </p>

            <div className="space-y-6 mb-12">
              <a
                href="mailto:info@kaisiebert.de"
                className="block text-lg text-security-fg hover:text-security-accent transition-colors"
              >
                info@kaisiebert.de
              </a>
              <a
                href="tel:+4917551813"
                className="block text-lg text-security-fg hover:text-security-accent transition-colors"
              >
                0175 518 13 13
              </a>
            </div>

            <Link
              to="/unternehmen"
              className="inline-flex items-center gap-2 text-sm text-security-muted hover:text-security-accent transition-colors"
            >
              ← Zurück zur Unternehmensberatung
            </Link>
          </div>
        </section>
      </main>

      <Footer variant="unternehmen" />
    </div>
  );
};

export default Seminare;
