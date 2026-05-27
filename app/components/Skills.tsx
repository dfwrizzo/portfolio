const skillGroups = [
  {
    category: "Game Development",
    accent: "purple",
    skills: ["Unity Engine", "C# Programming", "Game Design", "Level Design", "Gameplay Systems"],
  },
  {
    category: "Tools & Tech",
    accent: "cyan",
    skills: ["Visual Studio", "Git & GitHub", "WebGL", "Unity Animator", "Physics Engine"],
  },
  {
    category: "Design",
    accent: "violet",
    skills: ["Game Mechanics", "UI/UX Design", "Prototyping", "Playtesting", "Asset Integration"],
  },
  {
    category: "Soft Skills",
    accent: "emerald",
    skills: ["Team Leadership", "Collaboration", "Project Management", "Problem Solving", "Agile/Scrum"],
  },
];

const accentMap: Record<string, string> = {
  purple: "text-purple-400 border-purple-700/40 bg-purple-950/20",
  cyan: "text-cyan-400 border-cyan-700/40 bg-cyan-950/20",
  violet: "text-violet-400 border-violet-700/40 bg-violet-950/20",
  emerald: "text-emerald-400 border-emerald-700/40 bg-emerald-950/20",
};

const headerAccentMap: Record<string, string> = {
  purple: "text-purple-400",
  cyan: "text-cyan-400",
  violet: "text-violet-400",
  emerald: "text-emerald-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-purple-400 mb-4">
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
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#12121a] to-cyan-950/40 border border-purple-900/30 p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl flex-shrink-0">
            🎮
          </div>
          <div>
            <h4 className="text-white font-semibold">Primary Stack</h4>
            <p className="text-slate-400 text-sm mt-1">
              Unity Engine &amp; C# — used across all shipped titles, from 2D
              browser games to 3D desktop shooters.
            </p>
          </div>
          <div className="sm:ml-auto flex items-center gap-2 text-sm text-purple-400 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Active Stack
          </div>
        </div>
      </div>
    </section>
  );
}