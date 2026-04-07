import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Brain,
  Users,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Building2,
  UserCheck,
  ChevronDown,
  ChevronUp,
  Radio,
  Target,
} from "lucide-react";
import useSeo from "@/hooks/use-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-security-border/50">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-medium text-security-fg pr-4">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-security-accent shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-security-muted shrink-0" />
        )}
      </button>
      {open && (
        <p className="pb-5 text-security-muted text-sm leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

const Notfallschutz = () => {
  useSeo({
    title: "Not- & Katastrophenschutz · Seminar für Unternehmen",
    description:
      "Notfallschulung für Unternehmen: Krisenvorsorge, Notfallplanung und Verhalten im Ernstfall. 1-Tages-Seminar als Inhouse-Schulung oder offenes Seminar.",
    canonical: "https://kaisiebert.de/notfallschutz",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Not- & Katastrophenschutz – Seminar für Unternehmen",
      description:
        "Praxisnahes 1-Tages-Seminar zu Krisenvorsorge, Notfallplanung und Verhalten im Ernstfall für Organisationen und Unternehmen.",
      url: "https://kaisiebert.de/notfallschutz",
      provider: {
        "@type": "Person",
        name: "Kai Siebert",
        url: "https://kaisiebert.de",
      },
      courseMode: ["onsite", "blended"],
      duration: "P1D",
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-security-bg text-security-fg">
      <Header variant="unternehmen" />

      <main id="main-content">
        {/* ─── 1. HERO ─── */}
        <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-security-bg via-security-bg to-security-card" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--security-accent)/0.08)_0%,_transparent_60%)]" />

          <div className="container-wide relative z-10 text-center py-20">
            <p className="text-xs uppercase tracking-[0.3em] text-security-accent mb-6 opacity-0 animate-fade-in-up">
              Seminar · Not- & Katastrophenschutz
            </p>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-security-fg mb-8 leading-tight opacity-0 animate-fade-in-up animation-delay-200 max-w-4xl mx-auto">
              Wenn plötzlich alles ausfällt –
              <br />
              <span className="text-security-accent">
                ist Ihr Unternehmen handlungsfähig?
              </span>
            </h1>

            <p className="text-lg md:text-xl text-security-muted max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up animation-delay-400 text-justify-clean">
              Stromausfall. IT-Ausfall. Kommunikationsausfall. Lieferkettenbruch.
              Krisen entstehen oft schneller, als Notfallpläne greifen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-3 text-security-fg/90">
                <ShieldCheck className="w-5 h-5 text-security-accent" />
                <span className="text-sm">Handlungsfähigkeit im Ernstfall sichern</span>
              </div>
              <div className="flex items-center gap-3 text-security-fg/90">
                <Brain className="w-5 h-5 text-security-accent" />
                <span className="text-sm">Klare Entscheidungen unter Druck</span>
              </div>
              <div className="flex items-center gap-3 text-security-fg/90">
                <Target className="w-5 h-5 text-security-accent" />
                <span className="text-sm">Notfallstrukturen etablieren</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-600">
              <a
                href="#kontakt-notfall"
                className="inline-flex items-center gap-2 px-8 py-4 bg-security-accent text-security-bg font-medium tracking-wide rounded-lg hover:bg-security-accent/90 transition-all duration-300"
              >
                Inhouse-Seminar anfragen
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#formate"
                className="inline-flex items-center gap-2 px-8 py-4 border border-security-border text-security-fg font-medium tracking-wide rounded-lg hover:border-security-accent/50 transition-all duration-300"
              >
                Seminartermin sichern
              </a>
            </div>
          </div>
        </section>

        {/* ─── 2. PROBLEMVERSTÄRKUNG ─── */}
        <section className="py-24 md:py-32 border-t border-security-border/30">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-security-fg mb-6 text-center">
              Warum Unternehmen Krisen unterschätzen
            </h2>
            <p className="text-security-muted text-center mb-16 max-w-2xl mx-auto text-justify-clean">
              Die meisten Organisationen verlassen sich darauf, dass Behörden
              im Ernstfall helfen. Die Realität sieht anders aus: Die ersten
              Minuten und Stunden entscheiden über Schaden, Stabilität und
              Handlungsfähigkeit – und in dieser Zeit ist jedes Unternehmen
              auf sich gestellt.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-xl border border-security-border bg-security-card/30 p-6">
                <AlertTriangle className="w-6 h-6 text-security-accent mb-4" />
                <p className="text-security-fg font-medium mb-2">
                  „Das betrifft uns nicht."
                </p>
                <p className="text-sm text-security-muted leading-relaxed">
                  Stromausfälle, Cyberangriffe und Extremwetter treffen
                  Unternehmen jeder Größe. Die Frage ist nicht ob, sondern wann.
                </p>
              </div>
              <div className="rounded-xl border border-security-border bg-security-card/30 p-6">
                <AlertTriangle className="w-6 h-6 text-security-accent mb-4" />
                <p className="text-security-fg font-medium mb-2">
                  „Dafür gibt es Behörden."
                </p>
                <p className="text-sm text-security-muted leading-relaxed">
                  Behörden brauchen Zeit. In den ersten Stunden einer Krise
                  sind Ihre Mitarbeitenden die erste Verteidigungslinie –
                  wenn sie wissen, was zu tun ist.
                </p>
              </div>
              <div className="rounded-xl border border-security-border bg-security-card/30 p-6">
                <AlertTriangle className="w-6 h-6 text-security-accent mb-4" />
                <p className="text-security-fg font-medium mb-2">
                  „Wir haben einen Notfallplan."
                </p>
                <p className="text-sm text-security-muted leading-relaxed">
                  Ein Plan im Ordner schützt niemanden. Entscheidend ist, ob
                  Ihre Teams den Plan kennen, verstehen und unter Stress
                  umsetzen können.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. LÖSUNG ─── */}
        <section className="py-24 md:py-32 bg-security-card/20">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-security-fg mb-6 text-center">
              Ein Seminar, das vorbereitet – nicht nur informiert
            </h2>
            <p className="text-security-muted text-center mb-12 max-w-2xl mx-auto text-justify-clean">
              Dieses 1-Tages-Seminar verbindet konkrete Notfallplanung mit
              psychologischem Verständnis für Entscheidungsverhalten unter Druck.
              Die Teilnehmenden verlassen das Seminar mit klaren Strukturen,
              erprobten Abläufen und dem Wissen, worauf es im Ernstfall ankommt.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <ShieldCheck className="w-8 h-8 text-security-accent mx-auto mb-4" />
                <p className="text-security-fg font-medium mb-2">
                  Handlungsfähigkeit
                </p>
                <p className="text-sm text-security-muted">
                  Klare Abläufe und Zuständigkeiten für den Ernstfall –
                  abgestimmt auf Ihre Organisation.
                </p>
              </div>
              <div className="text-center p-6">
                <Target className="w-8 h-8 text-security-accent mx-auto mb-4" />
                <p className="text-security-fg font-medium mb-2">Struktur</p>
                <p className="text-sm text-security-muted">
                  Notfallpläne, die verstanden und umgesetzt werden können –
                  nicht nur dokumentiert.
                </p>
              </div>
              <div className="text-center p-6">
                <Brain className="w-8 h-8 text-security-accent mx-auto mb-4" />
                <p className="text-security-fg font-medium mb-2">
                  Entscheidungsfähigkeit
                </p>
                <p className="text-sm text-security-muted">
                  Psychologisch fundiertes Training für klare Entscheidungen
                  unter Unsicherheit und Zeitdruck.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. LERNINHALTE ─── */}
        <section className="py-24 md:py-32">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-security-fg mb-4 text-center">
              Was Ihre Mitarbeitenden lernen
            </h2>
            <p className="text-security-muted text-center mb-16 max-w-xl mx-auto">
              Konkrete Kompetenzen für den Ernstfall – praxisnah und sofort
              anwendbar.
            </p>

            <div className="space-y-6 max-w-2xl mx-auto">
              {[
                {
                  title: "Gefahren und Lageentwicklungen frühzeitig erkennen",
                  desc: "Warnsignale wahrnehmen, bevor eine Situation eskaliert – im eigenen Betrieb und im Umfeld.",
                },
                {
                  title: "Warnmeldungen richtig einordnen und bewerten",
                  desc: "Offizielle Warnsysteme verstehen und für die eigene Organisation interpretieren.",
                },
                {
                  title: "Im Ernstfall strukturiert und sicher handeln",
                  desc: "Klare Handlungsabläufe, die auch unter Stress funktionieren – ohne Panik, ohne Chaos.",
                },
                {
                  title:
                    "Kommunikation bei Ausfall von IT und Netzen sicherstellen",
                  desc: "Rückfallebenen für die interne und externe Kommunikation, wenn digitale Systeme versagen.",
                },
                {
                  title: "Notfallpläne für Betrieb und Teams entwickeln",
                  desc: "Gemeinsam erarbeitete Strukturen, die auf Ihr Unternehmen zugeschnitten sind und im Alltag verankert werden.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 p-5 rounded-xl border border-security-border/50 bg-security-card/20"
                >
                  <CheckCircle2 className="w-6 h-6 text-security-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-security-fg font-medium mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-security-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="#kontakt-notfall"
                className="inline-flex items-center gap-2 px-8 py-4 bg-security-accent text-security-bg font-medium tracking-wide rounded-lg hover:bg-security-accent/90 transition-all duration-300"
              >
                Seminar für Ihr Team anfragen
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ─── 5. ABLAUF ─── */}
        <section className="py-24 md:py-32 bg-security-card/20">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-security-fg mb-4 text-center">
              Ablauf des Seminars
            </h2>
            <p className="text-security-muted text-center mb-16 max-w-xl mx-auto">
              Ein Tag. Drei Schwerpunkte. Kein Frontalunterricht.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-xl border border-security-border bg-security-card/30 p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-security-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-security-accent" />
                </div>
                <p className="text-security-fg font-medium mb-2">
                  Realistische Szenarien
                </p>
                <p className="text-sm text-security-muted leading-relaxed">
                  Situationen, die tatsächlich eintreten können – zugeschnitten
                  auf Ihre Branche und Ihre Risiken.
                </p>
              </div>
              <div className="rounded-xl border border-security-border bg-security-card/30 p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-security-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-security-accent" />
                </div>
                <p className="text-security-fg font-medium mb-2">
                  Praktische Übungen
                </p>
                <p className="text-sm text-security-muted leading-relaxed">
                  Entscheidungen treffen, kommunizieren, handeln – in
                  simulierten Stresssituationen mit direktem Feedback.
                </p>
              </div>
              <div className="rounded-xl border border-security-border bg-security-card/30 p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-security-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-security-accent" />
                </div>
                <p className="text-security-fg font-medium mb-2">
                  Konkrete Notfallplanung
                </p>
                <p className="text-sm text-security-muted leading-relaxed">
                  Erarbeitung von Abläufen und Strukturen, die Ihr Unternehmen
                  direkt übernehmen kann.
                </p>
              </div>
            </div>

            <p className="text-center mt-10 text-sm text-security-accent font-medium tracking-wide">
              Keine reine Theorieveranstaltung. Jeder Inhalt ist auf
              Umsetzbarkeit ausgelegt.
            </p>
          </div>
        </section>

        {/* ─── 6. PSYCHOLOGISCHER MEHRWERT ─── */}
        <section className="py-24 md:py-32">
          <div className="container-narrow">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.3em] text-security-accent mb-4">
                  Differenzierung
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-security-fg mb-6">
                  Warum Menschen unter Stress falsch entscheiden
                </h2>
                <p className="text-security-muted mb-6 text-justify-clean leading-relaxed">
                  Unter Zeitdruck, Unsicherheit und Informationsmangel greift
                  das Gehirn auf Muster zurück, die im Alltag funktionieren –
                  aber in Krisensituationen zu Fehlentscheidungen führen.
                  Abwarten, wo Handeln nötig wäre. Aktionismus, wo Ruhe
                  gebraucht wird.
                </p>
                <p className="text-security-muted text-justify-clean leading-relaxed">
                  Dieses Seminar macht diese Mechanismen sichtbar und trainiert
                  gezielt die Fähigkeit, auch unter Druck klar, strukturiert und
                  besonnen zu handeln. Nicht durch Theorie – sondern durch
                  Erfahrung in realistischen Szenarien.
                </p>
              </div>
              <div className="md:w-80 shrink-0 space-y-4">
                <div className="rounded-xl border border-security-border bg-security-card/30 p-5">
                  <Brain className="w-5 h-5 text-security-accent mb-3" />
                  <p className="text-sm text-security-fg font-medium mb-1">
                    Stressreaktion verstehen
                  </p>
                  <p className="text-xs text-security-muted">
                    Wie Zeitdruck und Unsicherheit Wahrnehmung und
                    Urteilsvermögen verändern.
                  </p>
                </div>
                <div className="rounded-xl border border-security-border bg-security-card/30 p-5">
                  <Radio className="w-5 h-5 text-security-accent mb-3" />
                  <p className="text-sm text-security-fg font-medium mb-1">
                    Kommunikation unter Druck
                  </p>
                  <p className="text-xs text-security-muted">
                    Klar und ruhig kommunizieren, wenn es darauf ankommt.
                  </p>
                </div>
                <div className="rounded-xl border border-security-border bg-security-card/30 p-5">
                  <ShieldCheck className="w-5 h-5 text-security-accent mb-3" />
                  <p className="text-sm text-security-fg font-medium mb-1">
                    Entscheidungsfähigkeit
                  </p>
                  <p className="text-xs text-security-muted">
                    Trainierte Routinen für Situationen, in denen es keine
                    Routine gibt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 7. FÜR WEN / FÜR WEN NICHT ─── */}
        <section className="py-24 md:py-32 bg-security-card/20">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-security-fg mb-12 text-center">
              Für wen ist dieses Seminar?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-security-accent/30 bg-security-card/30 p-8">
                <UserCheck className="w-6 h-6 text-security-accent mb-4" />
                <p className="text-security-fg font-medium mb-4">
                  Geeignet für
                </p>
                <ul className="space-y-3">
                  {[
                    "Organisationen mit Verantwortung für Mitarbeitende und Betrieb",
                    "Geschäftsführung, HR und Sicherheitsverantwortliche",
                    "Behörden und öffentliche Einrichtungen",
                    "Unternehmen, die vorbereitet sein wollen – nicht erst reagieren",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-security-accent mt-0.5 shrink-0" />
                      <span className="text-security-fg/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-security-border bg-security-card/30 p-8">
                <AlertTriangle className="w-6 h-6 text-security-muted mb-4" />
                <p className="text-security-fg font-medium mb-4">
                  Nicht geeignet für
                </p>
                <ul className="space-y-3">
                  {[
                    "Rein theoretisches Interesse ohne Umsetzungsabsicht",
                    "\u201EWird schon nicht passieren\u201C-Haltung",
                    "Organisationen, die eine Pflichtveranstaltung ohne Tiefgang suchen",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="w-4 h-4 flex items-center justify-center text-security-muted mt-0.5 shrink-0">
                        ×
                      </span>
                      <span className="text-security-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8. FORMATE ─── */}
        <section id="formate" className="py-24 md:py-32">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-security-fg mb-12 text-center">
              Zwei Formate – ein Ziel
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-security-accent/30 bg-security-card/40 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-security-accent text-security-bg text-xs font-medium rounded-bl-lg">
                  Empfohlen
                </div>
                <Building2 className="w-8 h-8 text-security-accent mb-4" />
                <h3 className="font-serif text-2xl text-security-fg mb-3">
                  Inhouse-Seminar
                </h3>
                <p className="text-security-muted text-sm leading-relaxed mb-6">
                  Durchführung direkt in Ihrem Unternehmen. Die Inhalte werden
                  auf Ihre spezifischen Risiken, Strukturen und
                  Branchenanforderungen angepasst.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Auf Ihr Unternehmen zugeschnitten",
                    "Ihre Räumlichkeiten, Ihre Szenarien",
                    "Teams trainieren gemeinsam",
                    "Termin individuell planbar",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-security-fg/85"
                    >
                      <CheckCircle2 className="w-4 h-4 text-security-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt-notfall"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-security-accent text-security-bg font-medium text-sm rounded-lg hover:bg-security-accent/90 transition-all duration-300"
                >
                  Inhouse-Seminar anfragen
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="rounded-2xl border border-security-border bg-security-card/40 p-8">
                <Users className="w-8 h-8 text-security-accent mb-4" />
                <h3 className="font-serif text-2xl text-security-fg mb-3">
                  Offenes Seminar
                </h3>
                <p className="text-security-muted text-sm leading-relaxed mb-6">
                  Teilnahme einzelner Personen möglich. Austausch mit
                  Teilnehmenden aus verschiedenen Organisationen und Branchen.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Einzelne Teilnehmende willkommen",
                    "Branchenübergreifender Austausch",
                    "Feste Termine",
                    "Kompaktes Tagesformat",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-security-fg/85"
                    >
                      <CheckCircle2 className="w-4 h-4 text-security-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt-notfall"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-security-border text-security-fg font-medium text-sm rounded-lg hover:border-security-accent/50 transition-all duration-300"
                >
                  Termin abstimmen
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 9. HARD FACTS ─── */}
        <section className="py-16 md:py-20 bg-security-card/20">
          <div className="container-narrow">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
              <div>
                <Clock className="w-6 h-6 text-security-accent mx-auto mb-2" />
                <p className="text-security-fg font-medium">Dauer</p>
                <p className="text-sm text-security-muted">1 Tag</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-security-border" />
              <div>
                <Building2 className="w-6 h-6 text-security-accent mx-auto mb-2" />
                <p className="text-security-fg font-medium">Durchführung</p>
                <p className="text-sm text-security-muted">
                  Inhouse oder offenes Seminar
                </p>
              </div>
              <div className="hidden md:block w-px h-12 bg-security-border" />
              <div>
                <Target className="w-6 h-6 text-security-accent mx-auto mb-2" />
                <p className="text-security-fg font-medium">Termine</p>
                <p className="text-sm text-security-muted">
                  Auf Anfrage · individuell planbar
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10. VERTRAUEN ─── */}
        <section className="py-24 md:py-32">
          <div className="container-narrow text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-security-fg mb-8">
              Worauf Sie sich verlassen können
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Praxisnah", desc: "Realistische Szenarien statt Folienvorträge" },
                { label: "Verständlich", desc: "Klare Sprache, keine Fachsimpelei" },
                { label: "Realistisch", desc: "Ehrliche Einschätzungen, kein Alarmismus" },
                { label: "Umsetzbar", desc: "Ergebnisse, die im Alltag funktionieren" },
              ].map((item, i) => (
                <div key={i} className="p-5">
                  <p className="text-security-accent font-medium mb-2">
                    {item.label}
                  </p>
                  <p className="text-sm text-security-muted">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-security-muted mt-10 text-sm max-w-xl mx-auto">
              Über 15 Jahre Erfahrung in sicherheitskritischen Kontexten –
              von Luftsicherheit und KRITIS bis zu psychologischer
              Gefahrenanalyse.
            </p>
          </div>
        </section>

        {/* ─── SELBSTPRÜFUNG ─── */}
        <section className="py-16 md:py-20 bg-security-card/20">
          <div className="container-narrow">
            <div className="rounded-xl border border-security-border bg-security-bg p-8 md:p-10">
              <h3 className="font-serif text-2xl text-security-fg mb-6 text-center">
                Ist Ihr Unternehmen vorbereitet?
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {[
                  "Wissen Ihre Mitarbeitenden, was bei einem Stromausfall zu tun ist?",
                  "Gibt es eine funktionierende Kommunikationskette ohne IT?",
                  "Kennt Ihr Team die Sammelplätze und Notfallabläufe?",
                  "Wurde Ihr Notfallplan jemals praktisch erprobt?",
                  "Wissen Ihre Führungskräfte, wie sie unter Druck entscheiden?",
                  "Gibt es Rückfallebenen für kritische Betriebsprozesse?",
                ].map((q, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg"
                  >
                    <span className="w-5 h-5 rounded border border-security-border flex items-center justify-center shrink-0 mt-0.5 text-xs text-security-muted">
                      ?
                    </span>
                    <p className="text-sm text-security-fg/85">{q}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-8 text-sm text-security-muted">
                Wenn Sie bei mehr als zwei Fragen zögern, ist dieses Seminar
                der richtige nächste Schritt.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-24 md:py-32">
          <div className="container-narrow">
            <h2 className="font-serif text-3xl md:text-4xl text-security-fg mb-12 text-center">
              Häufige Fragen
            </h2>
            <div className="max-w-2xl mx-auto">
              <FaqItem
                question="Wie viele Teilnehmende können an einem Inhouse-Seminar teilnehmen?"
                answer="Die optimale Gruppengröße liegt bei 8–20 Personen. So ist genügend Raum für praktische Übungen und individuelle Fragen. Bei größeren Teams können mehrere Termine vereinbart werden."
              />
              <FaqItem
                question="Wird das Seminar auf unsere Branche angepasst?"
                answer="Ja. Im Vorfeld besprechen wir die spezifischen Risiken und Strukturen Ihres Unternehmens. Die Szenarien, Übungen und Empfehlungen werden darauf abgestimmt."
              />
              <FaqItem
                question="Brauchen die Teilnehmenden Vorkenntnisse?"
                answer="Nein. Das Seminar richtet sich an alle Mitarbeitenden – von der Geschäftsführung bis zum operativen Team. Die Inhalte sind verständlich, praxisnah und ohne Fachvoraussetzungen zugänglich."
              />
              <FaqItem
                question="Was nehmen wir konkret mit?"
                answer="Neben dem Training selbst erhalten Sie eine Zusammenfassung der erarbeiteten Notfallstrukturen und Empfehlungen, die direkt in Ihre bestehenden Prozesse integriert werden können."
              />
              <FaqItem
                question="Wie kurzfristig kann ein Termin vereinbart werden?"
                answer="In der Regel sind Termine mit 4–6 Wochen Vorlauf planbar. Bei dringendem Bedarf sprechen Sie mich an – oft lässt sich eine schnellere Lösung finden."
              />
            </div>
          </div>
        </section>

        {/* ─── 11. CTA / KONTAKT ─── */}
        <section
          id="kontakt-notfall"
          className="py-24 md:py-32 bg-security-card/20"
        >
          <div className="container-narrow text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-security-fg mb-6">
              Lassen Sie uns über Ihren Bedarf sprechen.
            </h2>
            <p className="text-security-muted mb-12 max-w-lg mx-auto text-justify-clean">
              Ein kurzes Gespräch klärt, welches Format zu Ihrer Organisation
              passt. Unverbindlich, vertraulich, konkret.
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@kaisiebert.de?subject=Anfrage%20Inhouse-Seminar%20Not-%20%26%20Katastrophenschutz"
                className="inline-flex items-center gap-2 px-8 py-4 bg-security-accent text-security-bg font-medium tracking-wide rounded-lg hover:bg-security-accent/90 transition-all duration-300"
              >
                Inhouse-Seminar anfragen
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@kaisiebert.de?subject=Anfrage%20Offenes%20Seminar%20Not-%20%26%20Katastrophenschutz"
                className="inline-flex items-center gap-2 px-8 py-4 border border-security-border text-security-fg font-medium tracking-wide rounded-lg hover:border-security-accent/50 transition-all duration-300"
              >
                Termin abstimmen
              </a>
            </div>

            <Link
              to="/seminare"
              className="inline-flex items-center gap-2 text-sm text-security-muted hover:text-security-accent transition-colors mt-10"
            >
              ← Alle Seminare im Überblick
            </Link>
          </div>
        </section>
      </main>

      <Footer variant="unternehmen" />
    </div>
  );
};

export default Notfallschutz;
