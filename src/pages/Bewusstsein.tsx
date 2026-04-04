import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useSeo from "@/hooks/use-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ensoLogo from "@/assets/enso-logo.webp";

const Bewusstsein = () => {
  useSeo({
    title: "Bewusstsein · Wahrnehmung, Risiko & menschliches Verhalten",
    description:
      "Bewusstsein ist die Grundlage für Sicherheit und persönliche Entwicklung. Kai Siebert verbindet psychologische Analyse mit Gefahrenabwehr.",
    canonical: "https://kaisiebert.de/bewusstsein",
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
          <div className="container-narrow text-center">
            <div className="flex justify-center mb-10">
              <img
                src={ensoLogo}
                alt=""
                className="w-20 h-20 object-contain opacity-60"
              />
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Bewusstsein ist der Anfang
              <br />
              <span className="text-primary">von allem.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ob persönliche Entwicklung oder organisationale Sicherheit – alles
              beginnt mit der Fähigkeit, wahrzunehmen, was wirklich geschieht.
            </p>
          </div>
        </section>

        {/* Wahrnehmung */}
        <section className="section-spacing bg-card/50">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Wahrnehmung und Risiko
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Menschen übersehen Gefahren nicht, weil sie dumm sind. Sie
                übersehen sie, weil ihr Bewusstsein in eine Richtung trainiert
                wurde: Funktionieren, Optimieren, Durchhalten. Was dabei
                verloren geht, ist die offene, urteilsfreie Wahrnehmung – die
                Fähigkeit, zu sehen, was tatsächlich da ist.
              </p>
              <p>
                In der Psychologie nennen wir das „Inattentional Blindness" –
                die Blindheit durch Unaufmerksamkeit. In der Sicherheitspraxis
                ist sie eine der größten Schwachstellen. In der persönlichen
                Entwicklung ist sie der Grund, warum Veränderung so schwer
                fällt.
              </p>
            </div>
          </div>
        </section>

        {/* Muster */}
        <section className="section-spacing">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Psychologische Muster hinter Gefahren
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Sicherheitsvorfälle entstehen selten durch technisches Versagen.
                Sie entstehen durch menschliches Verhalten: Routine, die blind
                macht. Stress, der Wahrnehmung verengt. Hierarchien, die
                kritisches Denken unterdrücken. Angst, die zum Wegschauen führt.
              </p>
              <p>
                Wer diese Muster versteht – psychologisch, systemisch,
                verhaltensbasiert – kann Risiken erkennen, bevor sie sich
                manifestieren. Nicht durch mehr Kontrolle, sondern durch mehr
                Bewusstsein.
              </p>
            </div>
          </div>
        </section>

        {/* Aufmerksamkeit */}
        <section className="section-spacing bg-card/50">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Aufmerksamkeit als Schlüsselkompetenz
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                In meiner Arbeit ist Aufmerksamkeit kein Soft Skill. Sie ist die
                zentrale Kompetenz – ob im Coaching-Gespräch oder im
                Sicherheitstraining. Wer aufmerksam ist, erkennt Muster,
                versteht Dynamiken und trifft bessere Entscheidungen.
              </p>
              <p>
                Die Zen-Philosophie nennt es „Achtsamkeit". Die Psychologie
                nennt es „bewusste Wahrnehmung". Die Sicherheitsbranche nennt es
                „Situational Awareness". Es ist dieselbe Fähigkeit – angewandt
                auf unterschiedliche Kontexte.
              </p>
            </div>

            <div className="mt-12 p-8 rounded-xl bg-background border border-primary/15 text-center">
              <p className="font-serif text-xl text-foreground leading-relaxed">
                „Sicherheit beginnt im Menschen. Entwicklung auch."
              </p>
            </div>
          </div>
        </section>

        {/* Verbindung */}
        <section className="section-spacing">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
              Individuum und Organisation
            </h2>
            <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
              Der Mensch steht im Zentrum – ob als Individuum auf der Suche nach
              Klarheit oder als Teil einer Organisation, die sicher handeln
              will.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Link
                to="/beratung"
                className="group p-8 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-500"
              >
                <h3 className="font-serif text-xl text-foreground mb-3">
                  Bewusstsein für sich selbst
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Psychologische Beratung für Menschen, die aufhören wollen zu
                  funktionieren und anfangen, sich selbst zu verstehen.
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all duration-300">
                  Zur Beratung <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                to="/unternehmen"
                className="group p-8 rounded-xl border border-border/50 hover:border-[hsl(var(--security-accent))]/30 transition-all duration-500"
              >
                <h3 className="font-serif text-xl text-foreground mb-3">
                  Bewusstsein für Sicherheit
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Trainings und Beratung für Organisationen, die Sicherheit
                  nicht dem Zufall überlassen.
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

export default Bewusstsein;
