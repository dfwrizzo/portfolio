import ProfilePhoto from "@/app/components/ProfilePhoto";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs uppercase tracking-widest text-red-400 mb-4">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Turning ideas into{" "}
              <span className="gradient-text">playable experiences</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m Angelo Castillo, a Unity game developer and designer
                passionate about crafting games that feel great to play. I
                specialize in C# programming, game mechanics design, and
                bringing creative concepts to life — from solo jam projects to
                team-led capstone productions.
              </p>
              <p>
                Whether it&apos;s a frantic zombie survival roguelike, a
                momentum-driven 3D shooter, or an educational puzzle adventure,
                I focus on the player experience from design to deployment.
              </p>
              <p>
                I&apos;m driven by collaboration, leadership, and continuous
                learning. I love pushing what&apos;s possible with Unity and
                always looking for my next challenge.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/DFWRIZZO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#12121a] border border-slate-800 hover:border-red-700/60 text-slate-300 hover:text-white text-sm transition-all duration-200"
              >
                <GithubIcon />
                GitHub
              </a>
              <a
                href="https://dfwrizzo.itch.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#12121a] border border-slate-800 hover:border-red-700/60 text-slate-300 hover:text-white text-sm transition-all duration-200"
              >
                <ItchIcon />
                itch.io
              </a>
            </div>
          </div>

          {/* Card */}
          <div className="card-glow rounded-2xl bg-[#12121a] p-8">
            <div className="mb-6">
              <ProfilePhoto />
              <h3 className="text-xl font-bold text-white">Angelo Castillo</h3>
              <p className="text-red-400 text-sm mt-1">Unity Developer · Game Designer</p>
            </div>

            <div className="space-y-3">
              {[
                { label: "Specialization", value: "2D/3D Unity Games" },
                { label: "Languages", value: "C#" },
                { label: "Engine", value: "Unity" },
                { label: "Capstone", value: "CodeQuest — Team Lead" },
                { label: "Platforms", value: "PC · WebGL · Browser" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-2.5 border-b border-slate-800/60 last:border-0"
                >
                  <span className="text-slate-500 text-sm">
                    {item.label}
                  </span>
                  <span className="text-slate-200 text-sm font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ItchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.325 0 2.426-1.102 2.426-2.41 0 1.308 1.07 2.41 2.395 2.41 1.326 0 2.36-1.102 2.36-2.41 0 1.308 1.1 2.41 2.424 2.41h.024c1.324 0 2.424-1.102 2.424-2.41 0 1.308 1.034 2.41 2.36 2.41 1.326 0 2.394-1.102 2.394-2.41 0 1.308 1.1 2.41 2.425 2.41C22.78 8.43 24 7.283 24 5.98V4.95c-.02-.622-2.08-2.99-3.13-3.612C19.22.8 12.753.74 12 .74c-.754 0-7.22.06-8.87.598zm8.87 11.232c-1.307 0-2.522.11-3.465.326-1.79.412-2.067.965-2.067 1.71v.878h11.064v-.878c0-.745-.277-1.298-2.067-1.71-.943-.217-2.16-.326-3.465-.326zm-5.532 3.45v1.09h11.064v-1.09zm0 1.636v3.274h2.533l.568-2.068h4.862l.568 2.068H18.4v-3.274H6.468z" />
    </svg>
  );
}