"use client";

import { useEffect, useState } from "react";

type Phase = "slash" | "reveal" | "loader" | "title" | "exit" | "done";

export default function SplashScreen() {
  const [phase, setPhase] = useState<Phase>("slash");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("reveal"),  400),
      setTimeout(() => setPhase("loader"),  1000),
      setTimeout(() => setPhase("title"),   2000),
      setTimeout(() => setPhase("exit"),    3200),
      setTimeout(() => setPhase("done"),    4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
      style={{ transition: "opacity 0.8s ease", opacity: phase === "exit" ? 0 : 1 }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(239,68,68,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center select-none">

        {/* ── Phase: slash line draws in ── */}
        {phase === "slash" && (
          <div className="flex flex-col items-center gap-3">
            <div
              style={{
                width: "80px",
                height: "3px",
                background: "linear-gradient(90deg, #ef4444, #ffffff)",
                borderRadius: "2px",
                animation: "slashGrow 0.35s cubic-bezier(0.22,1,0.36,1) forwards",
                transformOrigin: "left center",
                transform: "scaleX(0)",
              }}
            />
          </div>
        )}

        {/* ── Phase: R G wipe reveal ── */}
        {phase === "reveal" && (
          <div className="flex flex-col items-center gap-4">
            {/* Letters wipe in from center behind the slash */}
            <div className="flex items-end gap-1 overflow-hidden">
              <span
                className="font-black leading-none"
                style={{
                  fontSize: "clamp(5rem, 18vw, 10rem)",
                  background: "linear-gradient(160deg, #ef4444 0%, #dc2626 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "wipeFromLeft 0.45s cubic-bezier(0.22,1,0.36,1) forwards",
                  clipPath: "inset(0 100% 0 0)",
                }}
              >
                R
              </span>
              <span
                className="font-black leading-none"
                style={{
                  fontSize: "clamp(5rem, 18vw, 10rem)",
                  background: "linear-gradient(160deg, #f8fafc 0%, #cbd5e1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "wipeFromRight 0.45s cubic-bezier(0.22,1,0.36,1) 0.06s forwards",
                  clipPath: "inset(0 0 0 100%)",
                }}
              >
                G
              </span>
            </div>
            {/* Slash line under letters */}
            <div
              style={{
                width: "100%",
                height: "3px",
                background: "linear-gradient(90deg, #ef4444, #ffffff)",
                borderRadius: "2px",
                animation: "slashGrow 0.3s ease-out forwards",
                transformOrigin: "left center",
                transform: "scaleX(0)",
              }}
            />
          </div>
        )}

        {/* ── Phase: circular loader ── */}
        {phase === "loader" && (
          <div
            className="flex flex-col items-center gap-6"
            style={{ animation: "fadeInFast 0.2s ease-out forwards" }}
          >
            {/* Monogram fades small above loader */}
            <div
              className="font-black tracking-tight"
              style={{
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                background: "linear-gradient(135deg, #ef4444 0%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                opacity: 0.9,
              }}
            >
              RG
            </div>

            {/* Circular spinner */}
            <svg width="64" height="64" viewBox="0 0 100 100" className="-mt-2">
              {/* Track */}
              <circle
                cx="50" cy="50" r="42"
                fill="none"
                stroke="rgba(239,68,68,0.15)"
                strokeWidth="4"
              />
              {/* Progress ring */}
              <circle
                cx="50" cy="50" r="42"
                fill="none"
                stroke="url(#ringGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="263.9"
                style={{
                  transformOrigin: "50px 50px",
                  transform: "rotate(-90deg)",
                  animation: "ringFill 0.9s cubic-bezier(0.4,0,0.2,1) forwards",
                  strokeDashoffset: 263.9,
                }}
              />
              <defs>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}

        {/* ── Phase: full title ── */}
        {(phase === "title" || phase === "exit") && (
          <div
            className="flex flex-col items-center gap-3"
            style={{ animation: "titleReveal 0.5s cubic-bezier(0.22,1,0.36,1) forwards", opacity: 0 }}
          >
            {/* Slash accent above */}
            <div
              style={{
                width: "48px",
                height: "3px",
                background: "linear-gradient(90deg, #ef4444, #ffffff)",
                borderRadius: "2px",
                animation: "slashGrow 0.4s cubic-bezier(0.22,1,0.36,1) 0.1s forwards",
                transformOrigin: "left center",
                transform: "scaleX(0)",
              }}
            />

            <div
              className="font-black tracking-tight leading-none text-center"
              style={{
                fontSize: "clamp(3.5rem, 14vw, 8rem)",
                background: "linear-gradient(135deg, #ef4444 0%, #dc2626 40%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              RIZZO
            </div>

            <div
              className="font-bold tracking-[0.4em] uppercase text-slate-400 text-center"
              style={{
                fontSize: "clamp(0.85rem, 3vw, 1.4rem)",
                animation: "fadeInFast 0.4s ease-out 0.2s forwards",
                opacity: 0,
              }}
            >
              GAMES
            </div>
          </div>
        )}
      </div>
    </div>
  );
}