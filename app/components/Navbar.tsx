"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Games", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-red-900/30 shadow-lg shadow-red-950/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold tracking-tight gradient-text"
        >
          Rizzo.dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://dfwrizzo.itch.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-full border border-red-600 text-red-400 hover:bg-red-600 hover:text-white transition-all duration-200"
            >
              itch.io
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#12121a]/95 backdrop-blur-md border-t border-red-900/20 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-slate-300 hover:text-white transition-colors text-base"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://dfwrizzo.itch.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm px-4 py-2 rounded-full border border-red-600 text-red-400"
                onClick={() => setOpen(false)}
              >
                itch.io
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}