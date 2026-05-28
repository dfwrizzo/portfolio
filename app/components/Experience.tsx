"use client";

import { useState } from "react";

type Slide = {
  title: string;
  description: string;
  placeholder: string; // gradient CSS for placeholder image
};

type Company = {
  id: string;
  name: string;
  role: string;
  period: string;
  summary: string;
  accentColor: string;
  borderColor: string;
  logo: React.ReactNode;
  slides: Slide[];
};

const companies: Company[] = [
  {
    id: "timberwolf",
    name: "Timber Wolf Studios",
    role: "Producer Intern",
    period: "Internship",
    summary:
      "Assisted QA, contributed to website design, and delivered weekly analytics reports for Go, Operative! — an AR mobile game encouraging kids to go outdoors.",
    accentColor: "text-slate-300",
    borderColor: "border-white/10",
    logo: <TimberWolfBadge />,
    slides: [
      {
        title: "QA Testing",
        description:
          "Conducted quality assurance testing for Go, Operative! — an augmented reality mobile game. Identified and reported gameplay bugs, UX issues, and edge cases to improve the player experience before release.",
        placeholder: "linear-gradient(135deg, #064e3b, #065f46, #0f172a)",
      },
      {
        title: "Website Design",
        description:
          "Contributed to the visual design and layout of the studio's website, helping establish a clean and engaging web presence that communicated the game's outdoor adventure theme to potential players and investors.",
        placeholder: "linear-gradient(135deg, #065f46, #0d9488, #0f172a)",
      },
      {
        title: "Weekly Analytics Reports",
        description:
          "Compiled and presented weekly analytics reports tracking game performance, user engagement, and key metrics. These reports were presented to the team to inform design decisions and product roadmap priorities.",
        placeholder: "linear-gradient(135deg, #0f172a, #064e3b, #134e4a)",
      },
    ],
  },
  {
    id: "punx",
    name: "PUNX",
    role: "Game Developer & Web Developer",
    period: "Current",
    summary:
      "Building games for high-value clients and bridging the gap between game design and development. Also engineered an internal project management tool connecting the accounts team to clients.",
    accentColor: "text-slate-300",
    borderColor: "border-white/10",
    logo: <PunxBadge />,
    slides: [
      {
        title: "Client Game Development",
        description:
          "Designing and developing games for high-value clients using Unity and C#. Serving as the bridge between game designers and developers — translating creative concepts into polished, functional game builds.",
        placeholder: "linear-gradient(135deg, #450a0a, #7f1d1d, #0f172a)",
      },
      {
        title: "Project Management Tool",
        description:
          "Engineered an internal project management platform that aligns the team with task workflows and connects the accounts team directly to clients in an innovative way — streamlining communication and project delivery.",
        placeholder: "linear-gradient(135deg, #7f1d1d, #991b1b, #1c0a0a)",
      },
      {
        title: "Design-to-Dev Bridge",
        description:
          "Acted as the key link between game designers and developers at PUNX. Ensuring design intent is preserved through development, reducing iteration cycles and delivering client experiences that match the creative vision.",
        placeholder: "linear-gradient(135deg, #1c0a0a, #7f1d1d, #0f172a)",
      },
    ],
  },
  {
    id: "megacat",
    name: "Mega Cat Studios",
    role: "Async Playtester",
    period: "Contract",
    summary:
      "Approached by Mega Cat Studios to playtest an upcoming unreleased title. My contributions were recognized and I was included in the official game credits.",
    accentColor: "text-slate-300",
    borderColor: "border-white/10",
    logo: <MegaCatBadge />,
    slides: [
      {
        title: "Async Playtesting",
        description:
          "Selected by Mega Cat Studios to playtest an upcoming title asynchronously. Delivered structured feedback on gameplay mechanics, difficulty balance, and player experience — helping shape the final product before launch.",
        placeholder: "linear-gradient(135deg, #431407, #7c2d12, #0f172a)",
      },
      {
        title: "Game Credits",
        description:
          "Contributions were formally recognized by the studio — my name is included in the official game credits. A testament to the value of the feedback provided throughout the playtesting process.",
        placeholder: "linear-gradient(135deg, #7c2d12, #c2410c, #1c0a00)",
      },
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState<Company | null>(null);
  const [slide, setSlide] = useState(0);

  function openModal(company: Company) {
    setActive(company);
    setSlide(0);
  }

  function closeModal() {
    setActive(null);
  }

  function prev() {
    if (!active) return;
    setSlide((s) => (s - 1 + active.slides.length) % active.slides.length);
  }

  function next() {
    if (!active) return;
    setSlide((s) => (s + 1) % active.slides.length);
  }

  return (
    <>
      <section id="experience" className="py-24 px-6 bg-[#0d0d14]">
        <div className="max-w-6xl mx-auto">
          <div className="section-divider mb-16" />

          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">
              Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Where I&apos;ve <span className="gradient-text">Contributed</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-lg mx-auto">
              Click any card to see what I worked on.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {companies.map((company) => (
              <button
                key={company.id}
                onClick={() => openModal(company)}
                className={`card-glow text-left rounded-2xl bg-[#12121a] p-6 flex flex-col gap-4 cursor-pointer w-full ${company.borderColor} group`}
              >
                {/* Logo */}
                <div className="h-14 flex items-center">
                  {company.logo}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {company.name}
                  </h3>
                  <p className={`text-sm font-medium mt-1 ${company.accentColor}`}>
                    {company.role}
                  </p>
                  <span className="inline-block mt-2 text-xs text-slate-600 uppercase tracking-wider">
                    {company.period}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {company.summary}
                </p>

                {/* CTA */}
                <div className={`flex items-center gap-2 text-sm font-medium ${company.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`}>
                  <span>View my work</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{ background: "rgba(10,10,15,0.92)", backdropFilter: "blur(12px)" }}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-2xl bg-[#12121a] rounded-3xl overflow-hidden shadow-2xl"
            style={{
              border: "1px solid rgba(239,68,68,0.25)",
              animation: "modalExpand 0.35s cubic-bezier(0.22,1,0.36,1) forwards",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Slide image placeholder */}
            <div
              className="w-full h-52 sm:h-64 flex items-center justify-center relative overflow-hidden"
              style={{ background: active.slides[slide].placeholder }}
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 text-center px-8">
                <div className={`text-4xl font-black tracking-tight ${active.accentColor} opacity-20`}>
                  {active.name}
                </div>
              </div>
              {/* Slide counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {active.slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      i === slide ? "bg-white scale-125" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">{active.logo}</div>
                <div>
                  <h3 className="text-white font-bold text-xl">{active.name}</h3>
                  <p className={`text-sm font-medium ${active.accentColor}`}>{active.role}</p>
                </div>
              </div>

              {/* Slide content */}
              <div
                key={slide}
                style={{ animation: "slideContentFade 0.3s ease-out forwards" }}
              >
                <h4 className="text-white font-bold text-lg mb-3">
                  {active.slides[slide].title}
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {active.slides[slide].description}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prev}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all text-sm"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Prev
                </button>
                <span className="text-slate-600 text-sm">
                  {slide + 1} / {active.slides.length}
                </span>
                <button
                  onClick={next}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all text-sm"
                >
                  Next
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function TimberWolfBadge() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="text-slate-300">
          <path d="M16 3L4 10v12l12 7 12-7V10L16 3z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 15c0 0 1.5-2.5 5-2.5s5 2.5 5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="13.5" cy="17" r="1" fill="currentColor" />
          <circle cx="18.5" cy="17" r="1" fill="currentColor" />
        </svg>
      </div>
      <div>
        <div className="text-white font-bold text-sm leading-tight">Timber Wolf</div>
        <div className="text-slate-500 text-xs">Studios</div>
      </div>
    </div>
  );
}

function PunxBadge() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://punx.ai/wp-content/uploads/2023/04/punx_logo_final.png"
          alt="PUNX"
          className="w-8 h-8 object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div>
        <div className="text-white font-bold text-sm leading-tight">PUNX</div>
        <div className="text-slate-500 text-xs">AI Creative Agency</div>
      </div>
    </div>
  );
}

function MegaCatBadge() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.shopify.com/s/files/1/0444/0919/2598/files/mcs_logo_white.png?v=1771568420&width=400"
          alt="Mega Cat Studios"
          className="w-8 h-8 object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div>
        <div className="text-white font-bold text-sm leading-tight">Mega Cat Studios</div>
        <div className="text-slate-500 text-xs">Game Developer & Publisher</div>
      </div>
    </div>
  );
}