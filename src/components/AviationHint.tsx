const AscarLogo = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stylized "A" inspired by ASCAT branding */}
    <rect width="40" height="40" rx="8" fill="hsl(var(--primary))" />
    <path
      d="M20 8L10 32H15L17 26H23L25 32H30L20 8ZM18.5 22L20 16L21.5 22H18.5Z"
      fill="hsl(var(--primary-foreground))"
    />
    {/* Small plane silhouette */}
    <path
      d="M28 10L32 12L28 14L29 12L28 10Z"
      fill="hsl(var(--primary-foreground))"
      opacity="0.7"
    />
  </svg>
);

const AviationHint = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container-narrow">
        <div className="relative p-10 md:p-12 rounded-xl bg-gradient-to-br from-card via-card to-secondary/30 border border-border shadow-sm hover:shadow-md transition-shadow duration-500">
          {/* Subtle top accent line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <AscarLogo />
            </div>

            <div className="flex-grow text-center md:text-left">
              <p className="text-xs uppercase tracking-widest text-primary mb-3">
                Weiterer Tätigkeitsbereich
              </p>
              <p className="text-foreground leading-relaxed text-justify-clean">
                Kai Siebert ist neben seiner Tätigkeit im Bereich Coaching und Persönlichkeitsentwicklung auch als Experte für Luftsicherheit tätig.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="https://aviation-security.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:opacity-90 transition-all duration-300 shadow-sm"
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
