const games = [
  {
    title: "Zombie Hunters",
    description:
      "Survive against an endless horde of zombies in this 2D roguelike. Collect skills and buffs to build your loadout and see how long you can last.",
    genre: "2D Roguelike · Survival",
    tags: ["Unity", "C#", "2D", "WebGL"],
    url: "https://dfwrizzo.itch.io/zombie-hunters",
    playable: "Play in Browser",
    gradient: "from-red-950 via-orange-950 to-[#12121a]",
    glowColor: "rgba(239, 68, 68, 0.15)",
    accentColor: "text-red-400",
    borderColor: "border-red-900/40",
    icon: "zombie",
  },
  {
    title: "Purgatory",
    description:
      "A 3D speedrunning shooter combining fluid movement mechanics with intense enemy combat. Push your limits and master momentum.",
    genre: "3D Action · Shooter",
    tags: ["Unity", "C#", "3D", "WebGL"],
    url: "https://dfwrizzo.itch.io/purgatory",
    playable: "Play in Browser",
    gradient: "from-purple-950 via-slate-950 to-[#12121a]",
    glowColor: "rgba(124, 58, 237, 0.15)",
    accentColor: "text-purple-400",
    borderColor: "border-purple-900/40",
    icon: "shooter",
  },
  {
    title: "CodeQuest",
    description:
      "Learn Unity C# through gaming! A 3D puzzle-combat hybrid. Capstone project where I led the team from design to delivery.",
    genre: "3D Puzzle · Educational",
    tags: ["Unity", "C#", "3D", "Team Lead", "Capstone"],
    url: "https://dfwrizzo.itch.io/codequest",
    playable: "Download",
    gradient: "from-cyan-950 via-blue-950 to-[#12121a]",
    glowColor: "rgba(6, 182, 212, 0.15)",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-900/40",
    icon: "puzzle",
  },
  {
    title: "Pokemon Top Trumps",
    description:
      "A digital card game featuring Pokemon. Pick your deck, compare stats, and battle your way to prove you're the greatest trainer.",
    genre: "Card Game · 2D",
    tags: ["Unity", "C#", "2D", "WebGL"],
    url: "https://dfwrizzo.itch.io/pokemon-top-trumps-version",
    playable: "Play in Browser",
    gradient: "from-yellow-950 via-red-950 to-[#12121a]",
    glowColor: "rgba(234, 179, 8, 0.15)",
    accentColor: "text-yellow-400",
    borderColor: "border-yellow-900/40",
    icon: "card",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-purple-400 mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="gradient-text">Games</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto">
            All games are built with Unity and C#. Several are playable right in
            your browser on itch.io.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {games.map((game) => (
            <article
              key={game.title}
              className={`card-glow rounded-2xl bg-[#12121a] overflow-hidden flex flex-col ${game.borderColor}`}
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${game.gradient} p-8 flex items-center justify-between`}>
                <span className="text-slate-300"><GameIcon type={game.icon} /></span>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full border ${game.borderColor} ${game.accentColor} bg-black/20`}
                >
                  {game.playable}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white">{game.title}</h3>
                  <p className={`text-xs mt-1 font-medium ${game.accentColor}`}>{game.genre}</p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                  {game.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {game.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl border ${game.borderColor} ${game.accentColor} hover:bg-white/5 transition-colors duration-200 text-sm font-semibold`}
                >
                  <ItchIcon />
                  Play on itch.io
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Profile link */}
        <div className="mt-10 text-center">
          <a
            href="https://dfwrizzo.itch.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors duration-200"
          >
            View all projects on itch.io
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function GameIcon({ type }: { type: string }) {
  if (type === "zombie") return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M8 8h1m6 0h1M10 10s.5 1 2 1 2-1 2-1" />
      <path d="M5 20c0-4 3-6 7-6s7 2 7 6" />
      <path d="M3 14l2 2M21 14l-2 2" />
    </svg>
  );
  if (type === "shooter") return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12h10M17 8l4 4-4 4M13 12h4" />
      <circle cx="7" cy="12" r="2" />
      <path d="M7 6V4M7 20v-2M3 12H1M13 12h2" />
    </svg>
  );
  if (type === "puzzle") return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 3h4v3a1 1 0 001 1h2a1 1 0 001-1V3h4v4h-3a1 1 0 00-1 1v2a1 1 0 001 1h3v4h-4v-3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H7v-4h3a1 1 0 001-1v-2a1 1 0 00-1-1H7V3z" />
    </svg>
  );
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M8 12h2M9 11v2M14 12h2M15 11v2" />
    </svg>
  );
}

function ItchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.325 0 2.426-1.102 2.426-2.41 0 1.308 1.07 2.41 2.395 2.41 1.326 0 2.36-1.102 2.36-2.41 0 1.308 1.1 2.41 2.424 2.41h.024c1.324 0 2.424-1.102 2.424-2.41 0 1.308 1.034 2.41 2.36 2.41 1.326 0 2.394-1.102 2.394-2.41 0 1.308 1.1 2.41 2.425 2.41C22.78 8.43 24 7.283 24 5.98V4.95c-.02-.622-2.08-2.99-3.13-3.612C19.22.8 12.753.74 12 .74c-.754 0-7.22.06-8.87.598zm8.87 11.232c-1.307 0-2.522.11-3.465.326-1.79.412-2.067.965-2.067 1.71v.878h11.064v-.878c0-.745-.277-1.298-2.067-1.71-.943-.217-2.16-.326-3.465-.326zm-5.532 3.45v1.09h11.064v-1.09zm0 1.636v3.274h2.533l.568-2.068h4.862l.568 2.068H18.4v-3.274H6.468z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}