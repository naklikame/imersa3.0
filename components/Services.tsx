const slide = {
  title: "3D Konfigurátor",
  desc: "Plynulé animace provedou zákazníky patrem po patru. Půdorysy, ceny a detaily bytů dostupné z jediného místa.",
  image: "/renders/loznice-2.jpg",
};

export default function Services() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100vh" }}>
      {/* Background photo — dark architectural */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/renders/kancelar-2.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,14,8,0.82) 0%, rgba(8,14,8,0.65) 50%, rgba(8,14,8,0.78) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center h-full px-8 md:px-14 pt-16 pb-12">

        {/* Heading */}
        <h2
          className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
        >
          Komplexní digitální
          <br />
          řešení pro prezentaci
        </h2>

        {/* Card */}
        <div
          className="rounded-3xl overflow-hidden flex flex-col flex-1 min-h-0 w-full max-w-[600px]"
          style={{ backgroundColor: "#EEE9E4" }}
        >
          {/* Live configurator iframe + overlay */}
          <div className="relative w-full overflow-hidden" style={{ flex: "0 0 58%" }}>
            <iframe
              src="https://granviaresidence.cz/#konfigurator"
              className="w-full h-full border-0"
              title="3D Konfigurátor Gran Via"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4"
              style={{ background: "rgba(10,21,8,0.45)", backdropFilter: "blur(2px)" }}
            >
              <span
                className="px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.16em] uppercase"
                style={{ backgroundColor: "rgba(238,233,228,0.18)", color: "rgba(238,233,228,0.75)", border: "1px solid rgba(238,233,228,0.25)" }}
              >
                Demo ukázka
              </span>
              <a
                href="https://granviaresidence.cz/"
                target="_blank"
                rel="noopener noreferrer"
                className="lg-light inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ color: "#EEE9E4", fontFamily: "var(--font-display)" }}
              >
                Zobrazit ukázkový web
                <span className="text-base leading-none">→</span>
              </a>
            </div>
          </div>

          {/* Text bottom */}
          <div
            className="flex flex-col items-center justify-center text-center px-8 py-7 flex-1"
            style={{ backgroundColor: "#EEE9E4" }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold mb-3 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "#1a2a1a",
                letterSpacing: "-0.02em",
              }}
            >
              {slide.title}
            </h3>
            <p className="text-base leading-relaxed max-w-sm" style={{ color: "#4a5a4a" }}>
              {slide.desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
