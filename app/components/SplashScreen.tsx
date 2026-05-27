"use client";

import { useEffect, useState } from "react";

type Phase = "enter" | "title" | "exit" | "done";

export default function SplashScreen() {
  const [phase, setPhase] = useState<Phase>("enter");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("title"), 1100),
      setTimeout(() => setPhase("exit"), 2700),
      setTimeout(() => setPhase("done"), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-[#0a0a0f] flex items-center justify-center"
      style={{
        transition: "opacity 0.8s ease",
        opacity: phase === "exit" ? 0 : 1,
      }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col items-center select-none">
        {/* Phase: R and G letters */}
        {phase === "enter" && (
          <div className="flex items-center gap-6 sm:gap-10">
            <span
              className="font-black leading-none"
              style={{
                fontSize: "clamp(6rem, 20vw, 12rem)",
                background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "splashSlideLeft 0.55s cubic-bezier(0.22,1,0.36,1) forwards",
                opacity: 0,
              }}
            >
              R
            </span>
            <span
              className="font-black leading-none"
              style={{
                fontSize: "clamp(6rem, 20vw, 12rem)",
                background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "splashSlideRight 0.55s cubic-bezier(0.22,1,0.36,1) forwards",
                opacity: 0,
              }}
            >
              G
            </span>
          </div>
        )}

        {/* Phase: Full name */}
        {(phase === "title" || phase === "exit") && (
          <div
            className="text-center"
            style={{
              animation: "splashFadeScale 0.5s cubic-bezier(0.22,1,0.36,1) forwards",
              opacity: 0,
            }}
          >
            <div
              className="font-black tracking-tight leading-none"
              style={{
                fontSize: "clamp(3rem, 12vw, 8rem)",
                background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 40%, #06b6d4 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "splashFadeScale 0.5s cubic-bezier(0.22,1,0.36,1) forwards, splashGradientShift 3s ease infinite 0.5s",
              }}
            >
              RIZZO
            </div>
            <div
              className="font-bold text-slate-400 tracking-[0.35em] uppercase mt-1"
              style={{
                fontSize: "clamp(1rem, 4vw, 2rem)",
                animation: "splashFadeUp 0.5s ease-out 0.15s forwards",
                opacity: 0,
              }}
            >
              GAMES
            </div>

            {/* Decorative line */}
            <div
              className="mx-auto mt-4 h-px"
              style={{
                width: "60%",
                background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), rgba(6,182,212,0.6), transparent)",
                animation: "splashLineExpand 0.6s ease-out 0.3s forwards",
                transform: "scaleX(0)",
                transformOrigin: "center",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}