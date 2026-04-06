import { Link } from "react-router-dom";
import { ArrowRight, Shield, Heart, Plane } from "lucide-react";
import useSeo from "@/hooks/use-seo";
import Footer from "@/components/Footer";
import ensoLogo from "@/assets/enso-logo.webp";

const Index = () => {
  useSeo({
    title: "Kai Siebert · Psychologische Kompetenz trifft Sicherheitsrealität",
    description:
      "Psychologische Beratung & Coaching für Privatpersonen. Sicherheitsberatung, Terrorprävention & Schulungen für Unternehmen. Zwei Welten – eine Kompetenz.",
    canonical: "https://kaisiebert.de/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Kai Siebert",
      jobTitle: "Psychologe & Sicherheitsberater",
      url: "https://kaisiebert.de",
      email: "info@kaisiebert.de",
      telephone: "+4917551813",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nürnberg",
        addressCountry: "DE",
      },
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Minimal Top Bar */}
      <header className="w-full py-6 px-6 md:px-12 flex items-center justify-between z-50">
        <div className="flex items-center gap-3">
          <img
            src={ensoLogo}
            alt="Kai Siebert Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-serif text-xl tracking-wide text-foreground">
            Kai Siebert
          </span>
        </div>
      </header>

      {/* Hero Split Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 md:px-12 py-8 md:py-0">
        {/* Central Headline */}
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-tight opacity-0 animate-fade-in-up">
            Sicherheit beginnt im Menschen.
          </h1>
          <p className="text-base md:text-xl text-muted-foreground opacity-0 animate-fade-in-up animation-delay-200">
            Für Sie persönlich. Für Ihre Organisation.
          </p>
          <div className="h-px w-20 bg-primary/30 mx-auto mt-6 opacity-0 animate-fade-in-up animation-delay-400" />
        </div>

        {/* Two Paths */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl w-full">
          {/* Privatpersonen */}
          <Link
            to="/beratung"
            className="group relative p-8 md:p-10 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-500 flex flex-col opacity-0 animate-fade-in-up animation-delay-600"
          >
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
              <Heart className="w-4 h-4 text-primary" />
            </div>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Klarheit. Stabilität. Entwicklung.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
              Psychologische Beratung, Coaching und Counseling für Menschen, die
              sich selbst besser verstehen und gezielt weiterentwickeln wollen.
            </p>

            <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
              Zur Beratung
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Unternehmen */}
          <Link
            to="/unternehmen"
            className="group relative p-8 md:p-10 rounded-2xl border border-border/50 bg-[hsl(var(--deep-charcoal))]/5 hover:border-[hsl(var(--security-accent))]/30 hover:bg-[hsl(var(--deep-charcoal))]/10 transition-all duration-500 flex flex-col opacity-0 animate-fade-in-up animation-delay-800"
          >
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[hsl(var(--security-accent))]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-10 h-10 rounded-full bg-[hsl(var(--security-accent))]/10 flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--security-accent))]/20 transition-colors duration-500">
              <Shield className="w-4 h-4 text-[hsl(var(--security-accent))]" />
            </div>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Sicherheit durch Bewusstsein.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
              Schulungen, Beratung und Audits zur Prävention von Bedrohungen und
              zum Aufbau einer belastbaren Sicherheitskultur.
            </p>

            <div className="flex items-center gap-2 text-[hsl(var(--security-accent))] font-medium text-sm group-hover:gap-3 transition-all duration-300">
              Zur Sicherheitsberatung
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
