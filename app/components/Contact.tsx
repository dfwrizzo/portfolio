const socials = [
  {
    label: "GitHub",
    href: "https://github.com/DFWRIZZO",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "itch.io",
    href: "https://dfwrizzo.itch.io",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.325 0 2.426-1.102 2.426-2.41 0 1.308 1.07 2.41 2.395 2.41 1.326 0 2.36-1.102 2.36-2.41 0 1.308 1.1 2.41 2.424 2.41h.024c1.324 0 2.424-1.102 2.424-2.41 0 1.308 1.034 2.41 2.36 2.41 1.326 0 2.394-1.102 2.394-2.41 0 1.308 1.1 2.41 2.425 2.41C22.78 8.43 24 7.283 24 5.98V4.95c-.02-.622-2.08-2.99-3.13-3.612C19.22.8 12.753.74 12 .74c-.754 0-7.22.06-8.87.598zm8.87 11.232c-1.307 0-2.522.11-3.465.326-1.79.412-2.067.965-2.067 1.71v.878h11.064v-.878c0-.745-.277-1.298-2.067-1.71-.943-.217-2.16-.326-3.465-.326zm-5.532 3.45v1.09h11.064v-1.09zm0 1.636v3.274h2.533l.568-2.068h4.862l.568 2.068H18.4v-3.274H6.468z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/angelo-nicholas-castillo-6483a0299/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-purple-400 mb-4">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Let&apos;s <span className="gradient-text">work together</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-10">
            I&apos;m open to game dev collaborations, freelance projects, and
            full-time opportunities. Drop me a message and let&apos;s build
            something great.
          </p>

          {/* Email CTA */}
          <a
            href="mailto:castillo.angelo2024@gmail.com"
            className="btn-glow inline-flex items-center gap-3 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors duration-200 mb-12"
          >
            <EmailIcon />
            castillo.angelo2024@gmail.com
          </a>

          {/* Socials */}
          <div className="flex items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-12 h-12 rounded-xl bg-[#12121a] border border-slate-800 hover:border-purple-700/60 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 card-glow"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <span>© 2026 Angelo Castillo. All rights reserved.</span>
        <span>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-300 transition-colors"
          >
            Next.js
          </a>{" "}
          · Deployed on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-300 transition-colors"
          >
            Vercel
          </a>
        </span>
      </div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}