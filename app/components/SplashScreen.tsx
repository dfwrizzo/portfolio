"use client";

import { useEffect, useState } from "react";

type Phase = "init" | "rg" | "transition" | "title" | "exit" | "done";

export default function SplashScreen() {
  const [phase, setPhase] = useState<Phase>("init");

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase("rg"),          80),
      setTimeout(() => setPhase("transition"),  980),
      setTimeout(() => setPhase("title"),       1120),
      setTimeout(() => setPhase("exit"),        2700),
      setTimeout(() => setPhase("done"),        3500),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
      style={{ transition: "opacity 0.8s ease", opacity: phase === "exit" ? 0 : 1 }}
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(239,68,68,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Slash — shoots on init and transition */}
      {(phase === "init" || phase === "transition") && (
        <SlashLine key={phase} />
      )}

      {/* RG monogram */}
      {(phase === "rg" || phase === "transition") && (
        <div className="relative z-10 flex items-center">
          <OutlineLetter letter="R" revealDelay={90} />
          <OutlineLetter letter="G" revealDelay={170} />
        </div>
      )}

      {/* RIZZO GAMES — wipes in behind slash 2 */}
      {(phase === "title" || phase === "exit") && (
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span
            className="font-black leading-none"
            style={{
              fontSize: "clamp(4rem, 14vw, 9rem)",
              background:
                "linear-gradient(135deg, #ef4444 0%, #dc2626 40%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              clipPath: "inset(0 100% 0 0)",
              animation: "maskWipe 0.28s cubic-bezier(0.22,1,0.36,1) 0ms forwards",
            }}
          >
            RIZZO
          </span>
          <span
            className="font-bold tracking-[0.45em] uppercase text-slate-400"
            style={{
              fontSize: "clamp(0.8rem, 2.5vw, 1.4rem)",
              clipPath: "inset(0 100% 0 0)",
              animation: "maskWipe 0.28s cubic-bezier(0.22,1,0.36,1) 80ms forwards",
            }}
          >
            GAMES
          </span>

          {/* Underline accent draws in */}
          <div
            style={{
              height: "2px",
              width: "100%",
              background: "linear-gradient(90deg, #ef4444, #ffffff)",
              transformOrigin: "left center",
              transform: "scaleX(0)",
              animation: "scaleInX 0.25s cubic-bezier(0.22,1,0.36,1) 0.22s forwards",
            }}
          />
        </div>
      )}
    </div>
  );
}

/* ── Vertical slash line that shoots left → right ── */
function SlashLine() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "2px",
        left: "-2px",
        zIndex: 30,
        background:
          "linear-gradient(180deg, transparent 0%, rgba(239,68,68,0.6) 20%, #ef4444 45%, #ffffff 50%, #ef4444 55%, rgba(239,68,68,0.6) 80%, transparent 100%)",
        boxShadow:
          "0 0 8px rgba(239,68,68,1), 0 0 24px rgba(239,68,68,0.6), 0 0 48px rgba(239,68,68,0.2)",
        animation: "slashShoot 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      }}
    />
  );
}

/* ── Single letter that unmasks left → right ── */
function OutlineLetter({
  letter,
  revealDelay,
}: {
  letter: string;
  revealDelay: number;
}) {
  return (
    <span
      className="font-black leading-none select-none"
      style={{
        fontSize: "clamp(6rem, 20vw, 12rem)",
        WebkitTextStroke: "2.5px #ef4444",
        WebkitTextFillColor: "transparent",
        clipPath: "inset(0 100% 0 0)",
        animation: `maskWipe 0.2s cubic-bezier(0.22,1,0.36,1) ${revealDelay}ms forwards`,
        display: "block",
        lineHeight: 1,
      }}
    >
      {letter}
    </span>
  );
}