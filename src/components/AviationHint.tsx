import { Shield } from "lucide-react";

const AviationHint = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-8 md:p-10 rounded-lg border border-border/50 bg-card/30">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
          </div>

          <div className="flex-grow text-center md:text-left">
            <p className="text-foreground text-sm leading-relaxed text-justify-clean">
              Kai Siebert ist neben seiner Tätigkeit im Bereich Coaching und Persönlichkeitsentwicklung auch als Experte für Luftsicherheit tätig.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="https://aviation-security.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 text-sm text-primary border border-primary/30 rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Mehr zur Luftsicherheit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AviationHint;
