import ascatLogo from "@/assets/ascat-logo.png";

const AviationHint = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="w-full">
        <div className="relative px-6 md:px-16 lg:px-24 py-10 md:py-12 bg-gradient-to-br from-card via-card to-secondary/30 border-y border-border shadow-sm hover:shadow-md transition-shadow duration-500">
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
            <div className="flex-shrink-0">
              <img src={ascatLogo} alt="ASCAT Logo" className="w-14 h-14 object-contain" />
            </div>

            <div className="flex-grow text-center md:text-left">
              <p className="text-xs uppercase tracking-widest text-ascat-blue mb-1 whitespace-nowrap">Weiterer Tätigkeitsbereich</p>
              <p className="text-deep-charcoal leading-relaxed text-justify-clean">
                Neben meiner Tätigkeit im Bereich Coaching und Persönlichkeitsentwicklung bin ich auch als Experte für Luftsicherheit tätig.
              </p>
              <p className="text-deep-charcoal leading-relaxed mt-2">
                Hier geht es zur Website von Kai Siebert Aviation-Security Consulting &amp; Training:
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="https://aviation-security.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium text-white bg-[#2b7cb5] rounded-md hover:bg-[#246a9e] transition-all duration-300 shadow-sm whitespace-nowrap"
              >
                Mehr zur Luftsicherheit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AviationHint;
