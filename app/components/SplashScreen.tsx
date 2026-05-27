"use client";

import { useEffect, useState } from "react";

type Phase = "hidden" | "logo" | "text" | "exit" | "done";

export default function SplashScreen() {
  const [phase, setPhase] = useState<Phase>("hidden");

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase("logo"),  80),
      setTimeout(() => setPhase("text"),  700),
      setTimeout(() => setPhase("exit"),  2600),
      setTimeout(() => setPhase("done"),  3400),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center gap-7"
      style={{
        opacity: phase === "exit" ? 0 : 1,
        transition: "opacity 0.8s ease",
      }}
    >
      {/* Star logo */}
      <div
        style={{
          opacity: phase === "hidden" ? 0 : 1,
          transform: phase === "hidden" ? "scale(0.88)" : "scale(1)",
          transition: "opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <RStarLogo />
      </div>

      {/* RIZZO GAMES */}
      <div
        style={{
          opacity: phase === "text" ? 1 : 0,
          transition: "opacity 0.45s ease",
        }}
      >
        <p
          style={{
            margin: 0,
            fontWeight: 900,
            fontSize: "clamp(0.85rem, 2.2vw, 1.25rem)",
            letterSpacing: "0.42em",
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          RIZZO GAMES
        </p>
      </div>
    </div>
  );
}

function RStarLogo() {
  return (
    <svg
      width="148"
      height="148"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 5-point star */}
      <path
        d="M50,4 L61.2,36.2 L95.1,36.2 L68.0,56.8 L79.1,89.0 L50,68.4 L20.9,89.0 L32.0,56.8 L4.9,36.2 L38.8,36.2 Z"
        fill="#ef4444"
      />
      {/* R letterform */}
      <text
        x="50"
        y="67"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="32"
        fontWeight="900"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        R
      </text>
    </svg>
  );
}