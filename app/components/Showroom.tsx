type ShowroomItem = {
  title: string;
  description: string;
  tags: string[];
  videoUrl?: string;
  accent: string;
  gradient: string;
  span?: string;
};

const items: ShowroomItem[] = [
  {
    title: "Zombie Hunters — Gameplay",
    description: "Roguelike progression system in action — skill drops, horde scaling, and the survival loop from early game to endgame chaos.",
    tags: ["Zombie Hunters", "2D Roguelike", "Gameplay"],
    accent: "#ef4444",
    gradient: "from-red-950 to-[#060101]",
    span: "lg:col-span-2",
    // videoUrl: "https://www.youtube.com/embed/YOUR_ID",
  },
  {
    title: "Purgatory — Movement Demo",
    description: "Fluid 3D movement and momentum-based speedrunning mechanics.",
    tags: ["Purgatory", "3D Shooter"],
    accent: "#a78bfa",
    gradient: "from-purple-950 to-[#02010a]",
    // videoUrl: "https://www.youtube.com/embed/YOUR_ID",
  },
  {
    title: "CodeQuest — Team Showcase",
    description: "Full walkthrough of our capstone — from design doc to delivery. Led a team of developers through the full production cycle.",
    tags: ["CodeQuest", "3D Puzzle", "Team Lead"],
    accent: "#22d3ee",
    gradient: "from-cyan-950 to-[#01080c]",
    span: "lg:col-span-2",
    // videoUrl: "https://www.youtube.com/embed/YOUR_ID",
  },
  {
    title: "Pokemon Top Trumps — Overview",
    description: "Card battle mechanics, deck selection system, and stat comparison gameplay.",
    tags: ["Pokemon Top Trumps", "Card Game"],
    accent: "#fbbf24",
    gradient: "from-yellow-950 to-[#080400]",
    // videoUrl: "https://www.youtube.com/embed/YOUR_ID",
  },
];

export default function Showroom() {
  return (
    <section id="showroom" className="py-20 px-6 bg-[#08080f]">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Showroom</p>
            <h2 className="text-3xl font-bold text-white">
              In <span className="gradient-text">Action</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-xs text-right">
            Gameplay footage and dev breakdowns — drop a YouTube embed URL to activate any slot.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <article
              key={item.title}
              className={`rounded-2xl bg-[#0c0c14] border border-white/5 overflow-hidden flex flex-col group hover:border-white/10 transition-all duration-300 ${item.span ?? ""}`}
            >
              {/* 16:9 video area */}
              <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                <div className="absolute inset-0">
                  {item.videoUrl ? (
                    <iframe
                      src={item.videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <VideoPlaceholder
                      word={item.title.split("—")[0].trim().split(" ")[0]}
                      gradient={item.gradient}
                      accent={item.accent}
                    />
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-bold text-sm mb-1.5 leading-snug">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5"
                      style={{ color: item.accent, borderColor: `${item.accent}20` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoPlaceholder({ word, gradient, accent }: { word: string; gradient: string; accent: string }) {
  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}
    >
      {/* Faded watermark */}
      <span
        className="absolute font-black select-none leading-none tracking-tighter"
        style={{ fontSize: "clamp(4rem, 14vw, 9rem)", color: accent, opacity: 0.04 }}
      >
        {word}
      </span>

      {/* Scan-line overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
        }}
      />

      {/* Play button */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div
          className="w-14 h-14 rounded-full border flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ borderColor: `${accent}50`, background: `${accent}12` }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={accent} style={{ opacity: 0.75, marginLeft: 3 }}>
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        <span
          className="text-[10px] font-bold tracking-[0.25em] uppercase"
          style={{ color: accent, opacity: 0.35 }}
        >
          Video Coming Soon
        </span>
      </div>

      {/* Corner accent dot */}
      <div
        className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full"
        style={{ background: accent, opacity: 0.3 }}
      />
    </div>
  );
}