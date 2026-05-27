const games = [
  {
    title: "Zombie Hunters",
    description: "Survive an endless zombie horde in this 2D roguelike. Build your loadout from collected skills and buffs — how long can you last?",
    genre: "2D Roguelike · Survival",
    tags: ["Unity", "C#", "2D", "WebGL"],
    url: "https://dfwrizzo.itch.io/zombie-hunters",
    playLabel: "Play in Browser",
    accent: "#ef4444",
    border: "border-red-900/40",
    glow: "rgba(239,68,68,0.12)",
    gradient: "from-red-950/80 via-orange-950/40 to-transparent",
    span: "lg:col-span-2",
    icon: "zombie",
  },
  {
    title: "Purgatory",
    description: "3D speedrunning shooter. Master fluid movement and momentum-based combat.",
    genre: "3D Action · Shooter",
    tags: ["Unity", "C#", "3D", "WebGL"],
    url: "https://dfwrizzo.itch.io/purgatory",
    playLabel: "Play in Browser",
    accent: "#a78bfa",
    border: "border-purple-900/40",
    glow: "rgba(124,58,237,0.12)",
    gradient: "from-purple-950/80 via-slate-950/40 to-transparent",
    span: "lg:col-span-1",
    icon: "shooter",
  },
  {
    title: "Pokemon Top Trumps",
    description: "Pick your deck, compare stats, and battle your way to the top trainer spot.",
    genre: "Card Game · 2D",
    tags: ["Unity", "C#", "2D", "WebGL"],
    url: "https://dfwrizzo.itch.io/pokemon-top-trumps-version",
    playLabel: "Play in Browser",
    accent: "#fbbf24",
    border: "border-yellow-900/40",
    glow: "rgba(234,179,8,0.12)",
    gradient: "from-yellow-950/80 via-red-950/40 to-transparent",
    span: "lg:col-span-1",
    icon: "card",
  },
  {
    title: "CodeQuest",
    description: "Learn Unity C# through a 3D puzzle-combat hybrid. My capstone project — I led the team from design doc to delivery.",
    genre: "3D Puzzle · Educational",
    tags: ["Unity", "C#", "3D", "Team Lead", "Capstone"],
    url: "https://dfwrizzo.itch.io/codequest",
    playLabel: "Download",
    accent: "#22d3ee",
    border: "border-cyan-900/40",
    glow: "rgba(6,182,212,0.12)",
    gradient: "from-cyan-950/80 via-blue-950/40 to-transparent",
    span: "lg:col-span-2",
    icon: "puzzle",
  },
];

export default function Projects() {
  return (
    <section id="games" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-red-400 mb-2">Portfolio</p>
            <h2 className="text-3xl font-bold text-white">
              My <span className="gradient-text">Games</span>
            </h2>
          </div>
          <a
            href="https://dfwrizzo.itch.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-white text-sm transition-colors"
          >
            All projects on itch.io
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        {/* Bento: alternating col-span-2 + col-span-1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GameCard({ game }: { game: typeof games[number] }) {
  return (
    <article
      className={`relative rounded-2xl bg-[#0f0f16] border overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 ${game.border} ${game.span}`}
      style={{ boxShadow: `inset 0 0 0 0 ${game.glow}` }}
    >
      {/* Header gradient zone */}
      <div className={`bg-gradient-to-br ${game.gradient} p-6 flex items-center justify-between min-h-[96px]`}>
        <span style={{ color: game.accent }}>
          <GameIcon type={game.icon} />
        </span>
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full bg-black/30 border"
          style={{ borderColor: `${game.accent}40`, color: game.accent }}
        >
          {game.playLabel}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-bold text-lg mb-1">{game.title}</h3>
        <p className="text-xs font-medium mb-3" style={{ color: game.accent }}>{game.genre}</p>
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{game.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {game.tags.map((tag) => (
            <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 text-slate-500 border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={game.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border text-sm font-semibold transition-all hover:bg-white/5"
          style={{ borderColor: `${game.accent}40`, color: game.accent }}
        >
          <ItchIcon />
          Play on itch.io
        </a>
      </div>
    </article>
  );
}

function GameIcon({ type }: { type: string }) {
  const p = { width: 36, height: 36, viewBox: "0 0 24 24", fill: "none" as const, stroke: "currentColor", strokeWidth: 1.5 };
  if (type === "zombie") return (
    <svg {...p}>
      <circle cx="12" cy="8" r="4"/>
      <path d="M8 8h1m6 0h1M10 10s.5 1 2 1 2-1 2-1"/>
      <path d="M5 20c0-4 3-6 7-6s7 2 7 6"/>
      <path d="M3 14l2 2M21 14l-2 2"/>
    </svg>
  );
  if (type === "shooter") return (
    <svg {...p}>
      <path d="M3 12h10M17 8l4 4-4 4M13 12h4"/>
      <circle cx="7" cy="12" r="2"/>
    </svg>
  );
  if (type === "puzzle") return (
    <svg {...p}>
      <path d="M7 3h4v3a1 1 0 001 1h2a1 1 0 001-1V3h4v4h-3a1 1 0 00-1 1v2a1 1 0 001 1h3v4h-4v-3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H7v-4h3a1 1 0 001-1v-2a1 1 0 00-1-1H7V3z"/>
    </svg>
  );
  return (
    <svg {...p}>
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <path d="M8 12h2M9 11v2M14 12h2"/>
    </svg>
  );
}

function ItchIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.325 0 2.426-1.102 2.426-2.41 0 1.308 1.07 2.41 2.395 2.41 1.326 0 2.36-1.102 2.36-2.41 0 1.308 1.1 2.41 2.424 2.41h.024c1.324 0 2.424-1.102 2.424-2.41 0 1.308 1.034 2.41 2.36 2.41 1.326 0 2.394-1.102 2.394-2.41 0 1.308 1.1 2.41 2.425 2.41C22.78 8.43 24 7.283 24 5.98V4.95c-.02-.622-2.08-2.99-3.13-3.612C19.22.8 12.753.74 12 .74c-.754 0-7.22.06-8.87.598zm8.87 11.232c-1.307 0-2.522.11-3.465.326-1.79.412-2.067.965-2.067 1.71v.878h11.064v-.878c0-.745-.277-1.298-2.067-1.71-.943-.217-2.16-.326-3.465-.326zm-5.532 3.45v1.09h11.064v-1.09zm0 1.636v3.274h2.533l.568-2.068h4.862l.568 2.068H18.4v-3.274H6.468z"/>
    </svg>
  );
}