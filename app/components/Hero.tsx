export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tag */}
        <div className="fade-in fade-in-delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-700/50 bg-red-950/30 text-red-300 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          Unity Game Developer & Game Designer
        </div>

        {/* Name */}
        <h1 className="fade-in fade-in-delay-2 text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-none">
          Angelo{" "}
          <span className="gradient-text">Castillo</span>
        </h1>

        {/* Subtitle */}
        <p className="fade-in fade-in-delay-3 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building immersive 2D &amp; 3D games with{" "}
          <span className="text-red-400">Unity</span> and{" "}
          <span className="text-white">C#</span>. From roguelikes to
          speedrunners — every game tells a story.
        </p>

        {/* CTAs */}
        <div className="fade-in fade-in-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="btn-glow px-8 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm tracking-wide transition-colors duration-200"
          >
            View My Games
          </a>
          <a
            href="#contact"
            className="btn-outline-glow px-8 py-3 rounded-full border border-white/20 text-white font-semibold text-sm tracking-wide"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats row */}
        <div className="fade-in fade-in-delay-5 mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {[
            { value: "4+", label: "Games Shipped" },
            { value: "3+", label: "Years with Unity" },
            { value: "C#", label: "Primary Language" },
            { value: "2D/3D", label: "Game Types" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-slate-600 uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-red-600/60 to-transparent" />
      </div>
    </section>
  );
}