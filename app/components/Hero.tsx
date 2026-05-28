export default function Hero() {
  const stackChips = ["Unity", "C#", "Firebase", "Vercel", "GitHub", "WebGL"];

  return (
    <section id="hero" className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-red-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-center">

          {/* Left — content */}
          <div>
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-slate-300 text-xs font-medium tracking-wide">Open to opportunities</span>
            </div>

            {/* Name */}
            <h1 className="font-black leading-[0.88] mb-5 tracking-tight" style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}>
              <span className="gradient-text">Angelo</span>
              <br />
              <span className="text-white">Castillo</span>
            </h1>

            {/* Role */}
            <p className="text-slate-400 font-medium mb-5 text-lg">
              Unity Game Developer &nbsp;&middot;&nbsp; Game Designer
            </p>

            {/* Tagline */}
            <p className="text-slate-500 max-w-md mb-9 leading-relaxed">
              Building 2D &amp; 3D games with Unity and C# — from browser roguelikes to 3D desktop shooters.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#games"
                className="btn-glow px-6 py-3 rounded-lg bg-white hover:bg-slate-100 text-black font-semibold text-sm transition-colors"
              >
                View Games
              </a>
              <a
                href="#contact"
                className="btn-outline-glow px-6 py-3 rounded-lg border border-white/15 hover:border-white/30 text-white font-semibold text-sm transition-colors"
              >
                Get in Touch
              </a>
            </div>

            {/* Stack pills */}
            <div className="flex flex-wrap gap-2">
              {stackChips.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/8 text-slate-400 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="hidden lg:flex flex-col gap-3">
            {[
              { value: "4+",    label: "Games Shipped" },
              { value: "3+",    label: "Years with Unity" },
              { value: "C#",    label: "Primary Language" },
              { value: "2D/3D", label: "Game Types" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-[#0c0c14] px-5 py-4 flex items-center justify-between transition-all duration-200 hover:bg-[#111119]"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderRight: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", borderLeft: "2px solid #ffffff" }}
              >
                <span className="text-slate-500 text-sm">{s.label}</span>
                <span className="text-xl font-black text-white">{s.value}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}