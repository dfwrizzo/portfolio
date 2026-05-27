const skillGroups = [
  {
    category: "Game Development",
    accent: "purple",
    skills: ["Unity Engine", "C# Programming", "Game Design", "Level Design", "Gameplay Systems"],
  },
  {
    category: "Tools & Tech",
    accent: "cyan",
    skills: ["Firebase", "Vercel", "Visual Studio", "Git & GitHub", "WebGL", "Unity Animator"],
  },
  {
    category: "Design & Platforms",
    accent: "violet",
    skills: ["Squarespace", "UI/UX Design", "Prototyping", "Asset Integration", "Web Development"],
  },
  {
    category: "Analytics & Productivity",
    accent: "emerald",
    skills: ["Mixpanel", "Excel", "Project Management", "Agile/Scrum", "Team Leadership"],
  },
];

const accentMap: Record<string, string> = {
  purple: "text-red-400 border-red-700/40 bg-red-950/20",
  cyan: "text-slate-200 border-slate-600/40 bg-slate-900/20",
  violet: "text-red-300 border-red-800/40 bg-red-950/10",
  emerald: "text-slate-300 border-slate-700/40 bg-slate-900/20",
};

const headerAccentMap: Record<string, string> = {
  purple: "text-red-400",
  cyan: "text-slate-200",
  violet: "text-red-300",
  emerald: "text-slate-300",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-4">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Skills &amp; <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto">
            The technologies and practices I rely on to build great games.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="card-glow rounded-2xl bg-[#12121a] p-6"
            >
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-5 ${headerAccentMap[group.accent]}`}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-badge text-xs px-3 py-1.5 rounded-full font-medium ${accentMap[group.accent]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Unity highlight bar */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-red-950/40 via-[#111111] to-slate-900/40 border border-red-900/30 p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
            <GamepadIcon />
          </div>
          <div>
            <h4 className="text-white font-semibold">Primary Stack</h4>
            <p className="text-slate-400 text-sm mt-1">
              Unity Engine &amp; C# — used across all shipped titles, from 2D
              browser games to 3D desktop shooters.
            </p>
          </div>
          <div className="sm:ml-auto flex items-center gap-2 text-sm text-red-400 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Active Stack
          </div>
        </div>
      </div>
    </section>
  );
}

function GamepadIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-400">
      <rect x="2" y="6" width="20" height="12" rx="3" />
      <path d="M6 12h4M8 10v4" />
      <circle cx="16" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="13" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}