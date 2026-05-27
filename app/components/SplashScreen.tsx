"use client";

import { useEffect, useRef, useState } from "react";

type Phase = "appear" | "fill" | "pop" | "title" | "exit" | "done";

export default function SplashScreen() {
  const [phase, setPhase] = useState<Phase>("appear");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("fill"),  600),
      setTimeout(() => setPhase("pop"),   2500),
      setTimeout(() => setPhase("title"), 2900),
      setTimeout(() => setPhase("exit"),  4200),
      setTimeout(() => setPhase("done"),  5000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
      style={{ transition: "opacity 0.9s ease", opacity: phase === "exit" ? 0 : 1 }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(239,68,68,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Letter boxes */}
      {(phase === "appear" || phase === "fill" || phase === "pop") && (
        <div className="relative z-10 flex items-center gap-8 sm:gap-12">
          <LetterBox
            letter="R"
            isFilling={phase === "fill"}
            isPopping={phase === "pop"}
            delay={0}
          />
          <LetterBox
            letter="G"
            isFilling={phase === "fill"}
            isPopping={phase === "pop"}
            delay={120}
          />
        </div>
      )}

      {/* RIZZO GAMES — shown after pop */}
      {(phase === "title" || phase === "exit") && (
        <div
          className="relative z-10 flex flex-col items-center"
          style={{
            animation: "titleReveal 0.55s cubic-bezier(0.22,1,0.36,1) forwards",
            opacity: 0,
          }}
        >
          <div
            className="font-black leading-none tracking-tight"
            style={{
              fontSize: "clamp(4rem, 16vw, 9rem)",
              background:
                "linear-gradient(135deg, #ef4444 0%, #dc2626 45%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            RIZZO
          </div>
          <div
            className="font-bold tracking-[0.45em] text-slate-400 uppercase"
            style={{
              fontSize: "clamp(0.8rem, 2.5vw, 1.4rem)",
              animation: "fadeInFast 0.4s ease 0.25s forwards",
              opacity: 0,
              marginTop: "0.25rem",
            }}
          >
            GAMES
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Letter Box ── */
function LetterBox({
  letter,
  isFilling,
  isPopping,
  delay,
}: {
  letter: string;
  isFilling: boolean;
  isPopping: boolean;
  delay: number;
}) {
  const [fill, setFill] = useState(0);
  const rafRef = useRef<number>(0);

  // Animate fill 0 → 100 over ~1.7s
  useEffect(() => {
    if (!isFilling) return;
    let startTime: number | null = null;
    const duration = 1700;

    const tick = (now: number) => {
      if (startTime === null) startTime = now + delay;
      const elapsed = now - startTime;
      if (elapsed < 0) { rafRef.current = requestAnimationFrame(tick); return; }
      const t = Math.min(elapsed / duration, 1);
      // ease-in-out cubic
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setFill(eased * 100);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isFilling, delay]);

  const size = { width: 130, height: 158 };
  const fontSize = "5.8rem";

  return (
    <div
      style={{
        position: "relative",
        width: size.width,
        height: size.height,
        border: "2.5px solid rgba(239,68,68,0.65)",
        borderRadius: "6px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
        flexShrink: 0,
        animation: isPopping
          ? `boxPop 0.38s cubic-bezier(0.22,1,0.36,1) ${delay}ms forwards`
          : `boxAppear 0.45s cubic-bezier(0.22,1,0.36,1) forwards`,
        opacity: isPopping ? 1 : 0,
      }}
    >
      {/* ── Rising fill ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: `${fill}%`,
          background:
            "linear-gradient(180deg, #f87171 0%, #ef4444 50%, #dc2626 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Wave at waterline ── */}
      {isFilling && fill > 1 && fill < 99 && (
        <div
          style={{
            position: "absolute",
            left: "-15%",
            width: "130%",
            height: "16px",
            bottom: `calc(${fill}% - 8px)`,
            zIndex: 2,
            borderRadius: "50%",
            background: "rgba(252,165,165,0.55)",
            animation: "waveSlosh 1s ease-in-out infinite",
          }}
        />
      )}

      {/* ── Letter: outline (unfilled area, top portion) ── */}
      <span
        style={{
          position: "absolute",
          fontSize,
          fontWeight: 900,
          lineHeight: 1,
          WebkitTextStroke: "2.5px #ef4444",
          WebkitTextFillColor: "transparent",
          clipPath: `inset(0 0 ${fill}% 0)`,
          zIndex: 3,
          userSelect: "none",
        }}
      >
        {letter}
      </span>

      {/* ── Letter: solid white (filled area, bottom portion) ── */}
      <span
        style={{
          position: "absolute",
          fontSize,
          fontWeight: 900,
          lineHeight: 1,
          color: "white",
          clipPath: `inset(${100 - fill}% 0 0 0)`,
          zIndex: 3,
          userSelect: "none",
        }}
      >
        {letter}
      </span>
    </div>
  );
}