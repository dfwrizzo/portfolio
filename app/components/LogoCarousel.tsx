const companies = [
  {
    name: "Mega Cat Studios",
    logo: "https://cdn.shopify.com/s/files/1/0444/0919/2598/files/mcs_logo_white.png?v=1771568420&width=400",
    width: 160,
  },
  {
    name: "PUNX",
    logo: "https://punx.ai/wp-content/uploads/2023/04/punx_logo_final.png",
    width: 110,
  },
  {
    name: "Timber Wolf Studios",
    logo: null,
    width: 180,
  },
];

// Duplicate for seamless loop
const track = [...companies, ...companies, ...companies];

export default function LogoCarousel() {
  return (
    <div className="py-14 overflow-hidden border-y border-slate-800/50 bg-[#0d0d14]">
      <p className="text-center text-xs uppercase tracking-widest text-slate-600 mb-8">
        Companies I&apos;ve worked with
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0d0d14, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0d0d14, transparent)" }} />

        <div className="logo-track flex items-center gap-16 w-max">
          {track.map((company, i) => (
            <div
              key={`${company.name}-${i}`}
              className="flex items-center justify-center flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ width: company.width }}
            >
              {company.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-10 w-auto object-contain filter brightness-0 invert"
                  style={{ maxWidth: company.width }}
                />
              ) : (
                <TimberWolfLogo />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TimberWolfLogo() {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-slate-300">
        <path d="M16 3L4 10v12l12 7 12-7V10L16 3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M10 14c0 0 2-3 6-3s6 3 6 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="13" cy="16" r="1" fill="currentColor" />
        <circle cx="19" cy="16" r="1" fill="currentColor" />
        <path d="M14 19c0 0 .8 1 2 1s2-1 2-1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
      <span className="text-slate-300 font-semibold text-xs tracking-widest uppercase whitespace-nowrap">
        Timber Wolf
      </span>
      <span className="text-slate-500 text-[9px] tracking-wider uppercase">Studios</span>
    </div>
  );
}