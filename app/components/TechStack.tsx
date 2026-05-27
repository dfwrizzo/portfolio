import React from "react";

const primary = [
  { name: "Unity",    sub: "Game Engine",     Icon: UnityIcon    },
  { name: "C#",       sub: "Language",         Icon: CSharpIcon   },
  { name: "Firebase", sub: "Backend / DB",     Icon: FirebaseIcon },
  { name: "Vercel",   sub: "Deployment",       Icon: VercelIcon   },
  { name: "GitHub",   sub: "Version Control",  Icon: GitHubIcon   },
  { name: "Git",      sub: "Source Control",   Icon: GitIcon      },
];

const tools = [
  { name: "Visual Studio", sub: "IDE",              Icon: VisualStudioIcon },
  { name: "WebGL",         sub: "Browser Platform", Icon: WebGLIcon        },
  { name: "Squarespace",   sub: "Web Builder",      Icon: SquarespaceIcon  },
  { name: "Mixpanel",      sub: "Analytics",        Icon: MixpanelIcon     },
  { name: "Excel",         sub: "Productivity",     Icon: ExcelIcon        },
];

function Card({ name, sub, Icon }: { name: string; sub: string; Icon: () => React.ReactElement }) {
  return (
    <div className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#0f0f16] border border-white/5 hover:border-red-700/30 hover:bg-[#141420] transition-all duration-200 group cursor-default min-w-[100px]">
      <div className="w-10 h-10 flex items-center justify-center">
        <Icon />
      </div>
      <div className="text-center">
        <p className="text-white text-sm font-semibold leading-tight">{name}</p>
        <p className="text-slate-600 text-[11px] mt-0.5">{sub}</p>
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-red-400 mb-2">Tech Stack</p>
            <h2 className="text-3xl font-bold text-white">
              What I <span className="gradient-text">operate</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs">
            Tools and platforms I use daily across game dev, web, and analytics.
          </p>
        </div>

        {/* Primary stack */}
        <div className="mb-4">
          <p className="text-xs text-slate-600 uppercase tracking-widest mb-4">Core</p>
          <div className="flex flex-wrap gap-3">
            {primary.map((t) => <Card key={t.name} {...t} />)}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-8">
          <p className="text-xs text-slate-600 uppercase tracking-widest mb-4">Tools &amp; Platforms</p>
          <div className="flex flex-wrap gap-3">
            {tools.map((t) => <Card key={t.name} {...t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SVG Icons ── */

function UnityIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
      <path d="M20 4L35 13V27L20 36L5 27V13L20 4Z" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
      <path d="M20 4L35 13L20 22L5 13Z" fill="rgba(255,255,255,0.92)"/>
      <path d="M5 13L20 22V36L5 27Z" fill="rgba(255,255,255,0.42)"/>
      <path d="M35 13V27L20 36V22Z" fill="rgba(255,255,255,0.65)"/>
    </svg>
  );
}

function CSharpIcon() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36">
      <path d="M20 2L36 11V29L20 38L4 29V11Z" fill="#9B4F96"/>
      <text x="20" y="26" textAnchor="middle" fill="white" fontSize="13" fontWeight="900" fontFamily="ui-monospace,monospace">C#</text>
    </svg>
  );
}

function FirebaseIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
      <path d="M9 30L14 8L21 19L18 10L28 4L22 30Z" fill="#FFA000"/>
      <path d="M9 30L22 30L28 4L18 10Z" fill="#F57F17"/>
      <path d="M22 30L32 24L28 4Z" fill="#FFCA28"/>
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36">
      <path d="M20 5L37 34H3L20 5Z" fill="white"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" width="36" height="36">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
      <path d="M36.5 18.5L21.5 3.5C20.7 2.7 19.3 2.7 18.5 3.5L3.5 18.5C2.7 19.3 2.7 20.7 3.5 21.5L18.5 36.5C19.3 37.3 20.7 37.3 21.5 36.5L36.5 21.5C37.3 20.7 37.3 19.3 36.5 18.5Z" fill="#F05032"/>
      <circle cx="20" cy="13" r="2.5" fill="white"/>
      <circle cx="14" cy="22" r="2.5" fill="white"/>
      <circle cx="26" cy="22" r="2.5" fill="white"/>
      <path d="M20 15.5V22M14 19.5L20 22M26 19.5L20 22" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function VisualStudioIcon() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36">
      <rect width="40" height="40" rx="4" fill="#5C2D91"/>
      <text x="20" y="27" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui">VS</text>
    </svg>
  );
}

function WebGLIcon() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36">
      <rect width="40" height="40" rx="4" fill="#8B0000"/>
      <text x="20" y="26" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="800" fontFamily="ui-monospace,monospace" letterSpacing="0.3">WebGL</text>
    </svg>
  );
}

function SquarespaceIcon() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36">
      <rect width="40" height="40" rx="4" fill="#111"/>
      <text x="20" y="29" textAnchor="middle" fill="white" fontSize="22" fontWeight="700" fontFamily="Georgia,serif">S</text>
    </svg>
  );
}

function MixpanelIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
      <rect width="40" height="40" rx="4" fill="#7856FF"/>
      <rect x="8"  y="26" width="6" height="8"  rx="1.5" fill="white"/>
      <rect x="17" y="18" width="6" height="16" rx="1.5" fill="white"/>
      <rect x="26" y="10" width="6" height="24" rx="1.5" fill="white"/>
    </svg>
  );
}

function ExcelIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
      <rect width="40" height="40" rx="4" fill="#1D6F42"/>
      <path d="M11 12L20 20M20 20L29 28M29 12L20 20M20 20L11 28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}