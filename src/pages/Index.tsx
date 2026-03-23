import useSeo from "@/hooks/use-seo";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AviationHint from "@/components/AviationHint";
import About from "@/components/About";
import Themes from "@/components/Themes";
import Offerings from "@/components/Offerings";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AviationHint />
        <About />
        <Themes />
        <Offerings />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
