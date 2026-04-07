import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Eye, Users, FileCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import useSeo from "@/hooks/use-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Shield,
    title: "Hybride Bedrohungslagen erkennen & verstehen",
    description:
      "Fundierte Beratung zur Erkennung und Prävention komplexer Bedrohungsszenarien – von Desinformation und Social Engineering über Extremismus und Radikalisierung bis hin zu Cyberbedrohungen, Innentäterrisiken und organisierter Gewalt. Psychologisch fundiert, praxisnah und auf Ihr Umfeld abgestimmt.",
    keywords: ["Hybride Bedrohungen", "Desinformation", "Social Engineering"],
  },
  {
    icon: Eye,
    title: "Sicherheitsbewusstsein & Awareness",
    description:
      "Schulungen und Trainings für Mitarbeiter, die ein nachhaltiges Bewusstsein für Sicherheitsrisiken schaffen – praxisnah und psychologisch fundiert.",
    keywords: ["Awareness-Training", "Verhaltenspsychologie", "Mitarbeiterschulung"],
  },
  {
    icon: Users,
    title: "Sicherheitskultur aufbauen",
    description:
      "Begleitung beim Aufbau einer organisationalen Sicherheitskultur, die über Compliance hinausgeht und in den Alltag integriert ist.",
    keywords: ["Organisationsentwicklung", "Kulturwandel", "Nachhaltigkeit"],
  },
  {
    icon: FileCheck,
    title: "Audits & Compliance",
    description:
      "Systematische Überprüfung Ihrer Sicherheitsprozesse und -strukturen. Identifikation von Schwachstellen und Entwicklung konkreter Maßnahmen.",
    keywords: ["Sicherheitsaudit", "Gap-Analyse", "Maßnahmenkatalog"],
  },
];

const differentiators = [
  "Psychologisch fundierte Sicherheitsberatung",
  "Über 15 Jahre Erfahrung in sicherheitskritischen Kontexten",
  "Verbindung von Verhaltenspsychologie und Gefahrenabwehr",
  "Praxisnahe Trainings statt theoretischer Vorträge",
  "Individuelle Konzepte statt Standardlösungen",
];

const Unternehmen = () => {
  useSeo({
    title: "Sicherheitsberatung für Unternehmen · Kai Siebert",
    description:
      "Sicherheitsberatung, Gefahrenprävention und Awareness-Training für Unternehmen. Psychologisch fundierte Schulungen und Audits für eine belastbare Sicherheitskultur.",
    canonical: "https://kaisiebert.de/unternehmen",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Kai Siebert – Sicherheitsberatung",
      description:
        "Sicherheitsberatung, Gefahrenprävention und Awareness-Training für Unternehmen.",
      url: "https://kaisiebert.de/unternehmen",
      telephone: "+4917551813",
      email: "info@kaisiebert.de",
      areaServed: "Deutschland",
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
        <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-security-bg via-security-bg to-security-card" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--security-accent)/0.08)_0%,_transparent_60%)]" />

          <div className="container-wide relative z-10 text-center py-20">
            <p className="text-xs uppercase tracking-[0.3em] text-security-accent mb-6 opacity-0 animate-fade-in-up">
              Sicherheitsberatung für Unternehmen
            </p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-security-fg mb-8 leading-tight opacity-0 animate-fade-in-up animation-delay-200">
              Sicherheit ist kein Zufall.
              <br />
              <span className="text-security-accent">
                Sie ist eine Entscheidung.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-security-muted max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up animation-delay-400 text-center">
              Psychologisch fundierte Gefahrenprävention,
              Sicherheitsbewusstsein und Bedrohungserkennung – für
              Organisationen, die Verantwortung ernst nehmen.
            </p>

            <a
              href="#kontakt-unternehmen"
              className="inline-flex items-center gap-2 px-8 py-4 bg-security-accent text-security-bg font-medium tracking-wide rounded-lg hover:bg-security-accent/90 transition-all duration-300 opacity-0 animate-fade-in-up animation-delay-600"
            >
              Beratungsgespräch vereinbaren
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* LEISTUNGEN */}
        <section className="py-24 md:py-32">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-security-fg mb-6">
                Leistungen
              </h2>
              <p className="text-security-muted max-w-2xl mx-auto text-justify-clean">
                Von der Risikoanalyse bis zur Schulung – maßgeschneiderte
                Lösungen für Ihre Sicherheitsanforderungen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group p-8 md:p-10 rounded-xl bg-security-card border border-security-border hover:border-security-accent/30 transition-all duration-500"
                >
                  <service.icon className="w-8 h-8 text-security-accent mb-6" />
                  <h3 className="font-serif text-xl md:text-2xl text-security-fg mb-4">
                    {service.title}
                  </h3>
                  <p className="text-security-muted leading-relaxed mb-6 text-justify-clean">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-xs px-3 py-1 rounded-full bg-security-accent/10 text-security-accent"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFFERENZIERUNG */}
        <section className="py-24 md:py-32 bg-security-card">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-security-fg mb-6 text-center">
              Warum Kai Siebert
            </h2>
            <p className="text-security-muted text-center mb-12 max-w-xl mx-auto text-justify-clean">
              Die Verbindung von psychologischer Expertise und
              Sicherheitspraxis macht den Unterschied.
            </p>

            <div className="space-y-4 max-w-xl mx-auto">
              {differentiators.map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-2">
                  <CheckCircle2 className="w-5 h-5 text-security-accent mt-0.5 shrink-0" />
                  <p className="text-security-fg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 rounded-xl bg-security-bg border border-security-border text-center">
              <p className="font-serif text-xl text-security-fg leading-relaxed">
                „Psychologische Kompetenz trifft Sicherheitsrealität."
              </p>
              <p className="text-sm text-security-muted mt-3">
                Mein Ansatz verbindet die Tiefe psychologischer Analyse mit der
                Präzision professioneller Gefahrenabwehr.
              </p>
              <Link
                to="/bewusstsein"
                className="inline-flex items-center gap-2 text-sm text-security-accent mt-4 hover:gap-3 transition-all duration-300"
              >
                Mehr über meinen Ansatz
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SEMINARE TEASER */}
        <section className="py-20 md:py-24">
          <div className="container-wide">
            <div className="rounded-2xl border border-security-border bg-security-card/50 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.3em] text-security-accent mb-3">
                  Seminare & Schulungen
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-security-fg mb-4">
                  Wissen, das schützt.
                </h2>
                <p className="text-security-muted text-justify-clean">
                  Praxisnahe Schulungen zu Not- & Katastrophenschutz,
                  Sicherheitsbewusstsein, hybriden Bedrohungslagen und
                  Krisenkommunikation – individuell auf Ihre Organisation
                  zugeschnitten.
                </p>
              </div>
              <Link
                to="/seminare"
                className="inline-flex items-center gap-2 px-8 py-4 bg-security-accent text-security-bg font-medium tracking-wide rounded-lg hover:bg-security-accent/90 transition-all duration-300 shrink-0"
              >
                Seminare entdecken
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA / KONTAKT */}
        <section id="kontakt-unternehmen" className="py-24 md:py-32">
          <div className="container-narrow text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-security-fg mb-6">
              Lassen Sie uns sprechen.
            </h2>
            <p className="text-security-muted mb-12 max-w-lg mx-auto text-justify-clean">
              Ein erstes Gespräch klärt Ihren Bedarf. Unverbindlich,
              vertraulich, konkret.
            </p>

            <div className="space-y-6 mb-12">
              <a
                href="mailto:info@kaisiebert.de"
                className="block text-lg text-security-fg hover:text-security-accent transition-colors"
              >
                info@kaisiebert.de
              </a>
              <a
                href="tel:+491755181313"
                className="block text-lg text-security-fg hover:text-security-accent transition-colors"
              >
                0175 518 13 13
              </a>
            </div>

            <div className="pt-12 border-t border-security-border/30">
              <a
                href="https://aviation-security.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-security-muted hover:text-security-accent transition-colors"
              >
                Mehr zu Aviation-Security Consulting & Training →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="unternehmen" />
    </div>
  );
};

export default Unternehmen;
