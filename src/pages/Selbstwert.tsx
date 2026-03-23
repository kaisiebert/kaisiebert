import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import zenCircle from "@/assets/zen-circle-abstract.png";
import zenFlow from "@/assets/zen-flow-abstract.png";
import ensoLogo from "@/assets/enso-logo.png";

const Selbstwert = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO — Sofortige emotionale Resonanz */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.15]">
             <img src={zenCircle} alt="" className="w-[550px] h-[550px] object-contain animate-float" />
           </div>
          <div className="container-narrow relative z-10 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight opacity-0 animate-fade-in-up">
              Du musst nicht selbstbewusster werden.
              <br />
              <span className="text-brand-green">Du musst aufhören, gegen dich zu arbeiten.</span>
            </h1>

            <p className="text-lg md:text-xl text-text-body mb-6 max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-200 text-justify-clean">
              Selbstwert lässt sich nicht aufbauen wie eine Fähigkeit.
              Er war immer da – verdeckt von Bewertung, Druck und dem Versuch, jemand zu sein.
            </p>

            <div className="h-px w-16 bg-brand-green/30 mx-auto my-10 opacity-0 animate-fade-in-up animation-delay-400" />

            <p className="text-text-body leading-relaxed max-w-lg mx-auto mb-12 opacity-0 animate-fade-in-up animation-delay-400 text-justify-clean">
              Psychologische Beratung und Coaching für Menschen,
              die aufhören wollen zu funktionieren – und anfangen wollen, sich zu spüren.
            </p>

            <a
              href="#kontakt-selbstwert"
              className="inline-block px-8 py-4 bg-brand-green text-primary-foreground font-medium tracking-wide rounded-lg hover:bg-brand-green/90 transition-all duration-300 opacity-0 animate-fade-in-up animation-delay-600"
            >
              Erstgespräch vereinbaren
            </a>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-brand-green/30 to-transparent animate-breathe" />
          </div>
        </section>

        {/* PROBLEM-VERSTÄNDNIS — Nutzer fühlt sich verstanden */}
        <section className="section-spacing bg-card/50">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-center whitespace-nowrap">
              Vielleicht kennst du das
            </h2>
            <p className="text-text-body text-justify-clean mb-16 max-w-2xl mx-auto">
              Du funktionierst. Du leistest. Aber innerlich bleibt ein Zweifel, der nicht aufhört.
            </p>

            <div className="space-y-8 max-w-2xl mx-auto">
              {[
                "Du bist kompetent – und trotzdem unsicher, ob du \u201Erichtig\u201C bist.",
                "Du bewertest dich ständig. Jede Entscheidung, jedes Wort, jeden Auftritt.",
                "Du trägst Verantwortung, aber innerlich fehlt dir der Boden.",
                "Du optimierst dich seit Jahren – und es reicht trotzdem nie.",
                "Du weißt, dass etwas fehlt. Aber du kannst es nicht benennen.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 p-6 rounded-lg bg-background border border-border/30"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-green/50 mt-2 shrink-0" />
                  <p className="text-text-body leading-relaxed text-justify-clean">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-foreground font-serif text-xl leading-relaxed max-w-xl mx-auto">
                Das ist kein Defizit. Das ist ein Muster. Und Muster lassen sich verstehen.
              </p>
            </div>
          </div>
        </section>

         {/* Zen Flow Grafik als Trenner */}
         <div className="flex justify-center py-8">
           <img src={zenFlow} alt="" className="w-64 md:w-80 opacity-40" />
         </div>

         {/* PSYCHOLOGISCHE KLARHEIT — Aha-Moment */}
        <section className="section-spacing">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-center whitespace-nowrap">
              Selbstwert kann man nicht aufbauen
            </h2>
            <p className="text-text-body text-justify-clean mb-16 max-w-2xl mx-auto">
              Das klingt irritierend. Aber genau hier beginnt echte Veränderung.
            </p>

            <div className="space-y-12 max-w-2xl mx-auto">
              <div>
                <h3 className="font-serif text-xl text-foreground mb-4 whitespace-nowrap">
                  Der Unterschied zwischen Selbst und Selbstbild
                </h3>
                <p className="text-text-body leading-relaxed text-justify-clean">
                  Dein Selbstbild ist das, was du über dich denkst – geformt durch Erfahrungen, Erwartungen und Vergleiche.
                  Dein Selbst ist das, was darunter liegt: unbewertete Präsenz. Lebendig, vollständig, still.
                  Die meisten Menschen verwechseln beides. Sie arbeiten am Bild – und wundern sich, warum sich nichts ändert.
                </p>
              </div>

              <div className="h-px w-full bg-border/30" />

              <div>
                <h3 className="font-serif text-xl text-foreground mb-4 whitespace-nowrap">
                  Warum Bewertung das eigentliche Problem ist
                </h3>
                <p className="text-text-body leading-relaxed text-justify-clean">
                  Nicht der Mangel an Selbstwert ist das Problem – sondern die ständige Bewertung.
                  Du bewertest dich in jeder Situation: bin ich gut genug, klug genug, stark genug?
                  Diese Bewertung erzeugt Unsicherheit. Nicht, weil dir etwas fehlt – sondern weil du dich ständig misst.
                </p>
              </div>

              <div className="h-px w-full bg-border/30" />

              <div>
                <h3 className="font-serif text-xl text-foreground mb-4 whitespace-nowrap">
                  Der Zugang, den du suchst
                </h3>
                <p className="text-text-body leading-relaxed text-justify-clean">
                  Dein Selbstwert fehlt nicht. Du hast nur den Zugang verloren.
                  Unter dem Lärm der Gedanken, unter den Erwartungen, unter dem Druck zu funktionieren –
                  liegt etwas, das nie beschädigt wurde. Die Arbeit besteht nicht im Aufbauen. Sondern im Freilegen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RADIKALE AKZEPTANZ — Wendepunkt */}
        <section className="section-spacing bg-card/50">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-center whitespace-nowrap">
              Veränderung beginnt mit Nicht-Verändern
            </h2>
            <p className="text-text-body text-justify-clean mb-16 max-w-2xl mx-auto">
              Das ist keine Resignation. Es ist der radikalste Schritt, den du gehen kannst.
            </p>

            <div className="max-w-2xl mx-auto space-y-8">
              <p className="text-text-body leading-relaxed text-justify-clean">
                Solange du versuchst, dich zu reparieren, bestätigst du, dass etwas kaputt ist.
                Solange du gegen deine Unsicherheit kämpfst, gibst du ihr Macht.
                Solange du nach Bestätigung suchst, bleibt die innere Leere bestehen.
              </p>

              <div className="p-8 rounded-lg bg-background border border-brand-green/15">
                <p className="font-serif text-xl text-foreground text-center leading-relaxed">
                  Der Wendepunkt liegt nicht in einem neuen Werkzeug.
                  <br />
                  Er liegt in der Bereitschaft, das zu sehen, was bereits da ist.
                </p>
              </div>

              <p className="text-text-body leading-relaxed text-justify-clean">
                Radikale Akzeptanz bedeutet: aufhören, gegen die eigene Erfahrung zu arbeiten.
                Nicht, weil alles gut ist. Sondern weil erst in der Annahme von dem, was ist,
                ein neuer Umgang möglich wird. Das ist keine Theorie. Es ist eine Erfahrung –
                und sie lässt sich begleiten.
              </p>
            </div>
          </div>
        </section>

         {/* Zen Circle als Trenner */}
         <div className="flex justify-center py-8">
           <img src={zenCircle} alt="" className="w-24 md:w-32 opacity-30" />
         </div>

         {/* WAS SICH VERÄNDERT — Zukunftsbild */}
        <section className="section-spacing">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-center whitespace-nowrap">
              Was sich verändern kann
            </h2>
            <p className="text-text-body text-justify-clean mb-16 max-w-2xl mx-auto">
              Keine Versprechen. Aber klare Erfahrungen aus der Arbeit mit Menschen.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                {
                  title: "Innere Ruhe",
                  text: "Die ständige Bewertung wird leiser. Du hörst auf, dich für alles zu rechtfertigen – auch vor dir selbst.",
                },
                {
                  title: "Klare Entscheidungen",
                  text: "Wenn der innere Lärm nachlässt, wird spürbar, was wirklich stimmt. Entscheidungen werden einfacher.",
                },
                {
                  title: "Belastbare Beziehungen",
                  text: "Wer sich nicht ständig beweisen muss, kann echte Nähe zulassen – ohne Kontrolle, ohne Maske.",
                },
                {
                  title: "Selbstvertrauen ohne Leistung",
                  text: "Ein Vertrauen, das nicht an Ergebnisse gebunden ist. Kein aufgesetztes Selbstbewusstsein – sondern stille Sicherheit.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-8 rounded-lg bg-card/50 border border-border/30"
                >
                  <h3 className="font-serif text-xl text-foreground mb-3 whitespace-nowrap">
                    {item.title}
                  </h3>
                  <p className="text-text-body text-sm leading-relaxed text-justify-clean">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARBEITSWEISE — Vertrauen + Klarheit */}
        <section className="section-spacing bg-card/50">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-center whitespace-nowrap">
              Wie ich arbeite
            </h2>
            <p className="text-text-body text-justify-clean mb-16 max-w-2xl mx-auto">
              Kein Programm. Kein Schema. Sondern ein Raum, der sich nach Ihnen richtet.
            </p>

            <div className="space-y-8 max-w-2xl mx-auto">
              <p className="text-text-body leading-relaxed text-justify-clean">
                Ich arbeite mit den Mitteln der angewandten Psychologie, des systemischen Coachings
                und einer Haltung, die von der Zen-Philosophie geprägt ist. Das bedeutet: Klarheit statt Methoden-Overload.
                Zuhören statt Diagnostizieren. Und immer wieder die Frage: Was zeigt sich, wenn wir aufhören, dagegen zu arbeiten?
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { label: "Erstgespräch", detail: "30 Min · kostenfrei" },
                  { label: "Einzelgespräch", detail: "60 Min · 120 €" },
                  { label: "Begleitprozess", detail: "5 Gespräche · 550 €" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-background border border-border/30 text-center"
                  >
                    <p className="font-serif text-lg text-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-text-body leading-relaxed text-justify-clean">
                Die Gespräche finden persönlich in Nürnberg oder per Video statt.
                Im Erstgespräch klären wir gemeinsam, ob und wie eine Zusammenarbeit sinnvoll ist – ohne Verpflichtung.
              </p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section id="kontakt-selbstwert" className="section-spacing">
          <div className="container-narrow text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 whitespace-nowrap">
              Ein Gespräch reicht oft
            </h2>

            <p className="text-text-body mb-12 max-w-lg mx-auto text-justify-clean">
              Nicht, um alles zu klären. Aber um zu spüren, ob dieser Weg stimmig ist.
              Ohne Druck, ohne Verpflichtung.
            </p>

            <div className="space-y-6 mb-12">
              <a
                href="mailto:info@kaisiebert.de"
                className="inline-block px-10 py-4 bg-brand-green text-primary-foreground font-medium tracking-wide rounded-lg hover:bg-brand-green/90 transition-all duration-300"
              >
                Erstgespräch anfragen
              </a>
              <p className="text-muted-foreground text-sm">
                Per E-Mail oder telefonisch: <a href="tel:+4917551813" className="text-foreground hover:text-brand-green transition-colors">0175 518 13 13</a>
              </p>
            </div>

            <div className="mt-16 p-8 rounded-lg bg-card/50 border border-border/30">
              <p className="text-text-body text-sm text-justify-clean">
                <span className="text-foreground">Wichtiger Hinweis:</span> Meine Arbeit ersetzt keine Psychotherapie oder ärztliche Behandlung.
                Bei akuten psychischen Krisen wenden Sie sich bitte an einen Arzt oder Therapeuten.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Selbstwert;
