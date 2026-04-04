import useSeo from "@/hooks/use-seo";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Themes from "@/components/Themes";
import Offerings from "@/components/Offerings";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Beratung = () => {
  useSeo({
    title: "Psychologische Beratung & Coaching · Kai Siebert",
    description:
      "Psychologische Beratung, Coaching und Counseling für Selbstwahrnehmung und persönliche Entwicklung in Nürnberg. Ein Raum für das, was Sie bewegt.",
    canonical: "https://kaisiebert.de/beratung",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Kai Siebert – Psychologische Beratung & Coaching",
      description:
        "Psychologische Beratung und Coaching für Selbstwahrnehmung und persönliche Entwicklung.",
      url: "https://kaisiebert.de/beratung",
      telephone: "+4917551813",
      email: "info@kaisiebert.de",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nürnberg",
        addressCountry: "DE",
      },
      areaServed: "Nürnberg",
      priceRange: "€€",
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Header variant="beratung" />
      <main>
        <Hero />
        <About />
        <Themes />
        <Offerings />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Beratung;
