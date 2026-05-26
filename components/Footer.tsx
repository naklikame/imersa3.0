const footerLinks = [
  {
    heading: "Navigace",
    links: ["Home", "Case Study", "Naše řešení", "Služby"],
  },
  {
    heading: "Další",
    links: ["Náš tým", "Reference", "Blog", "Kontakt"],
  },
  {
    heading: "Sociální sítě",
    links: ["Instagram", "LinkedIn", "Behance", "Facebook"],
  },
];

export default function Footer() {
  return (
    <section className="w-full">

      {/* ── CTA band ── */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: "420px" }}>
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511497584788-876760111969?w=2000&q=85')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,14,8,0.72) 0%, rgba(8,14,8,0.62) 60%, rgba(8,14,8,0.82) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 md:px-14 py-28 gap-8">
          <span
            className="lg-light inline-block px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase"
            style={{ color: "rgba(238,233,228,0.85)" }}
          >
            Začněte hned
          </span>

          <h2
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] max-w-3xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "#EEE9E4",
              letterSpacing: "-0.03em",
            }}
          >
            Chcete takový konfigurátor
            <br />
            i pro váš projekt?
          </h2>

          <a
            href="#contact"
            className="lg-light inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              color: "#EEE9E4",
              fontFamily: "var(--font-display)",
            }}
          >
            Úvodní konzultace zdarma
            <span className="text-base leading-none">→</span>
          </a>
        </div>
      </div>

      {/* ── Footer ── */}
      <div
        className="w-full rounded-t-[2.5rem]"
        style={{ backgroundColor: "#EEE9E4" }}
      >
        <div className="max-w-[1300px] mx-auto px-8 md:px-14 pt-14 pb-8">

          {/* Top row */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-8 mb-14">

            {/* Brand */}
            <div className="flex-[1.4]">
              <img
                src="/logo-transparent.png"
                alt="Imersa"
                style={{ height: "30px", width: "auto", filter: "brightness(0)", marginBottom: "16px" }}
              />
              <p className="text-sm leading-relaxed max-w-xs mb-4" style={{ color: "#6D705A" }}>
                Interaktivní 3D konfigurátory a vizualizace
                <br />
                pro realitní development.
              </p>
              <a
                href="mailto:info@imersa.cz"
                className="text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: "#1a2a1a" }}
              >
                info@imersa.cz
              </a>
            </div>

            {/* Link columns */}
            <div className="flex-1 grid grid-cols-3 gap-8">
              {footerLinks.map((col) => (
                <div key={col.heading}>
                  <p
                    className="text-[10px] font-bold tracking-[0.16em] uppercase mb-5"
                    style={{ color: "#6D705A" }}
                  >
                    {col.heading}
                  </p>
                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm transition-opacity hover:opacity-60"
                          style={{ color: "#1a2a1a" }}
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full mb-6" style={{ backgroundColor: "rgba(109,112,90,0.2)" }} />

          {/* Copyright */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <p className="text-xs" style={{ color: "rgba(109,112,90,0.7)" }}>
              © 2026 Immersa. Všechna práva vyhrazena.
            </p>
            <p className="text-xs" style={{ color: "rgba(109,112,90,0.5)" }}>
              Ochrana osobních údajů · Obchodní podmínky
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
