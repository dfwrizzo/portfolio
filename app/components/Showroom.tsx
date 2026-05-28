"use client";

import { useState, useCallback } from "react";

type ShowroomItem = {
  title: string;
  description: string;
  tags: string[];
  videoUrl?: string;
  accent: string;
  gradient: string;
};

const ACCENT = "#ef4444";

const items: ShowroomItem[] = [
  {
    title: "Zombie Hunters — Gameplay",
    description: "Roguelike progression system in action — skill drops, horde scaling, and the survival loop from early game to endgame chaos.",
    tags: ["Zombie Hunters", "2D Roguelike", "Gameplay"],
    accent: ACCENT,
    gradient: "from-red-950/60 via-red-950/30 to-transparent",
    // videoUrl: "https://www.youtube.com/embed/YOUR_ID",
  },
  {
    title: "Purgatory — Movement Demo",
    description: "Fluid 3D movement and momentum-based speedrunning mechanics — watch the difference between a clean run and an optimised one.",
    tags: ["Purgatory", "3D Shooter", "Movement"],
    accent: ACCENT,
    gradient: "from-red-950/60 via-red-950/30 to-transparent",
    // videoUrl: "https://www.youtube.com/embed/YOUR_ID",
  },
  {
    title: "CodeQuest — Team Showcase",
    description: "Full walkthrough of our capstone — from design doc to delivery. Led a team of developers through the full production cycle.",
    tags: ["CodeQuest", "3D Puzzle", "Team Lead"],
    accent: ACCENT,
    gradient: "from-red-950/60 via-red-950/30 to-transparent",
    // videoUrl: "https://www.youtube.com/embed/YOUR_ID",
  },
  {
    title: "Pokemon Top Trumps — Overview",
    description: "Card battle mechanics, deck selection system, and stat comparison gameplay — a complete design-to-delivery breakdown.",
    tags: ["Pokemon Top Trumps", "Card Game", "Design"],
    accent: ACCENT,
    gradient: "from-red-950/60 via-red-950/30 to-transparent",
    // videoUrl: "https://www.youtube.com/embed/YOUR_ID",
  },
];

export default function Showroom() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback(
    (next: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, 280);
    },
    [animating]
  );

  function prev() {
    go((current - 1 + items.length) % items.length);
  }

  function next() {
    go((current + 1) % items.length);
  }

  const item = items[current];

  return (
    <section id="showroom" className="py-20 px-6 bg-[#08080f]">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-red-400 mb-2">Showroom</p>
            <h2 className="text-3xl font-bold text-white">
              In <span className="gradient-text">Action</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-xs sm:text-right">
            {current + 1} / {items.length}
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative rounded-2xl overflow-hidden bg-[#0c0c14] border border-white/5">
          {/* Video area — 16:9 */}
          <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <div
              className="absolute inset-0 transition-opacity duration-280"
              style={{ opacity: animating ? 0 : 1 }}
            >
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

            {/* Prev / Next overlays */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Info bar */}
          <div
            className="p-6 sm:p-8 transition-opacity duration-280"
            style={{ opacity: animating ? 0 : 1 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg sm:text-xl mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:justify-end sm:max-w-[200px]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 border"
                    style={{ color: item.accent, borderColor: `${item.accent}20` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2 mt-6">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className="transition-all duration-200"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === current ? ACCENT : "rgba(255,255,255,0.15)",
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
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
        style={{ fontSize: "clamp(5rem, 18vw, 12rem)", color: accent, opacity: 0.04 }}
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
          className="w-16 h-16 rounded-full border-2 flex items-center justify-center"
          style={{ borderColor: `${accent}50`, background: `${accent}12` }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill={accent} style={{ opacity: 0.75, marginLeft: 4 }}>
            <path d="M8 5v14l11-7z" />
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
        className="absolute top-4 right-4 w-2 h-2 rounded-full"
        style={{ background: accent, opacity: 0.3 }}
      />
    </div>
  );
}