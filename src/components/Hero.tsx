import ensoLogo from "@/assets/enso-logo.webp";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

      {/* Floating Enso background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]">
        <img src={ensoLogo} alt="" className="w-[600px] h-[600px] object-contain animate-float" />
      </div>

      <div className="container-narrow relative z-10 text-center">
        <div className="flex justify-center mb-12">
          <img 
            src={ensoLogo} 
            alt="Enso Logo" 
            className="w-28 h-28 md:w-36 md:h-36 object-contain opacity-90 animate-fade-in-up"
          />
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 opacity-0 animate-fade-in-up animation-delay-200">
          Kai Siebert
        </h1>

        <p className="text-lg md:text-xl text-text-body mb-4 opacity-0 animate-fade-in-up animation-delay-400 tracking-wide">
          Psychologische Beratung & Coaching
        </p>

        <div className="h-px w-16 bg-primary/30 mx-auto my-10 opacity-0 animate-fade-in-up animation-delay-600" />

        <p className="text-text-body leading-relaxed max-w-lg mx-auto opacity-0 animate-fade-in-up animation-delay-600">
          Ein Raum für das, was Sie bewegt.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-breathe" />
      </div>
    </section>
  );
};

export default Hero;
