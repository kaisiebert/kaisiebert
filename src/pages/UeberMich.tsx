import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useSeo from "@/hooks/use-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import kaiSiebert from "@/assets/kai-siebert.jpg";
import ensoLogo from "@/assets/enso-logo.webp";

const UeberMich = () => {
  useSeo({
    title: "Über mich · Kai Siebert",
    description:
      "Psychologe, Coach und Sicherheitsexperte. Ich verbinde psychologisches Verständnis mit praktischer Gefahrenabwehr – für Privatpersonen und Unternehmen.",
    canonical: "https://kaisiebert.de/ueber-mich",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header variant="split" />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-narrow">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl opacity-50" />
                  <img
                    src={kaiSiebert}
                    alt="Kai Siebert"
                    className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-top border-2 border-primary/10 shadow-lg"
                  />
                </div>
              </div>

              <div>
                <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                  Kai Siebert
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Psychologe, Coach und Sicherheitsexperte. Ich verbinde
                  psychologisches Verständnis mit praktischer Gefahrenabwehr.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hintergrund */}
        <section className="section-spacing bg-card/50">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Mein Hintergrund
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Mein Name ist Kai Siebert, geboren 1969 in Hamburg. Ich arbeite
                als Psychologe mit Menschen aus den unterschiedlichsten
                Kontexten. In der wissenschaftlichen Forschung widme ich mich der
                ICH-Struktur und dem Bewusstsein.
              </p>
              <p>
                Neben zahlreichen beruflichen Weiterbildungen im Bereich der
                Psychologie widme ich mich der ZEN-Philosophie. Als Psychologe
                und Coach arbeite ich lösungsorientiert, respektvoll und nah am
                Menschen.
              </p>
              <p>
                Parallel dazu habe ich über viele Jahre umfassende Erfahrung in
                sicherheitskritischen Kontexten gesammelt – von der
                Luftsicherheit über die Terrorprävention bis hin zur
                Organisationsberatung. Diese beiden Welten ergänzen sich: Wer
                menschliches Verhalten versteht, kann Risiken besser erkennen,
                bewerten und managen.
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
              <p className="text-sm text-muted-foreground">
                Experte für Luftsicherheit & Gefahrenabwehr
              </p>
            </div>
          </div>
        </section>

        {/* Zwei Welten */}
        <section className="section-spacing">
          <div className="container-narrow">
            <div className="flex justify-center mb-10">
              <img
                src={ensoLogo}
                alt=""
                className="w-16 h-16 object-contain opacity-40"
              />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-center">
              Zwei Welten – ein Verständnis
            </h2>
            <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
              Psychologische Tiefe und sicherheitsrelevante Praxis sind kein
              Widerspruch. Sie sind zwei Seiten derselben Kompetenz.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Link
                to="/beratung"
                className="group p-8 rounded-xl border border-border/50 hover:border-primary/30 bg-card/50 transition-all duration-500"
              >
                <h3 className="font-serif text-xl text-foreground mb-3">
                  Für Privatpersonen
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Psychologische Beratung, Coaching und Counseling – für
                  Menschen, die Klarheit, Stabilität und echte Entwicklung
                  suchen.
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all duration-300">
                  Zur Beratung <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                to="/unternehmen"
                className="group p-8 rounded-xl border border-border/50 hover:border-[hsl(var(--security-accent))]/30 bg-card/50 transition-all duration-500"
              >
                <h3 className="font-serif text-xl text-foreground mb-3">
                  Für Unternehmen
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Sicherheitsberatung, Terrorprävention und Schulungen – für
                  Organisationen, die Verantwortung in Sicherheit übersetzen.
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-[hsl(var(--security-accent))] group-hover:gap-3 transition-all duration-300">
                  Zur Sicherheitsberatung <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UeberMich;
