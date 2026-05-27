"use client";

import { useState } from "react";

export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative w-24 h-24 mb-4">
      <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-red-700/40 bg-[#1a1a1a] flex items-center justify-center">
        {failed ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-1 border-2 border-dashed border-red-700/40 rounded-2xl bg-[#1a1a1a]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-600">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
            </svg>
            <span className="text-[9px] text-slate-600 tracking-wide text-center px-1">
              Add photo
            </span>
          </div>
        ) : (
          <img
            src="/profile.jpg"
            alt="Angelo Castillo"
            className="w-full h-full object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <div className="absolute -inset-1 rounded-2xl border border-red-600/20 pointer-events-none" />
    </div>
  );
}