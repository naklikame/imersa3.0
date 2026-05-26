"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background image — dark modern architecture */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=2000&q=85')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-8 md:px-14 pt-36 pb-12">
        {/* Top — label + heading */}
        <div className="max-w-3xl">
          {/* Label tag */}
          <span
            className="lg-light inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{ color: "#EEE9E4" }}
          >
            Pro realitní development
          </span>

          {/* Heading */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "#EEE9E4",
              letterSpacing: "-0.03em",
            }}
          >
            Zažijte svůj projekt
            <br />
            dřív, než ho
            <br />
            postavíte.
          </h1>
        </div>

        {/* Bottom row — card left + description + CTA right */}
        <div className="flex items-end justify-between gap-6">
          {/* Glass card — bottom left */}
          <div className="lg-dark flex flex-col gap-3 p-4 rounded-2xl max-w-[280px]">
            {/* Thumbnail */}
            <div
              className="w-full h-36 rounded-xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/renders/gran-via-exterier.png')",
              }}
            />
            <div>
              <p
                className="text-base font-semibold"
                style={{ color: "#EEE9E4", fontFamily: "var(--font-display)" }}
              >
                Gran Via Residence
              </p>
              <p
                className="text-sm mt-0.5"
                style={{ color: "rgba(238,233,228,0.6)" }}
              >
                42 prémiových bytů. Konfigurátor spuštěn za 6 týdnů.
              </p>
            </div>
          </div>

          {/* Description + CTA — bottom right */}
          <div className="flex flex-col items-end gap-5 max-w-sm text-right">
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(238,233,228,0.8)" }}
            >
              Zájemci si projdou byt sami, online,
              <br />
              kdykoli. Na schůzku přijdou rozhodnutí.
              <br />
              Vy prodáváte rychleji.
            </p>
            <a
              href="#contact"
              className="lg-light flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                color: "#EEE9E4",
                fontFamily: "var(--font-display)",
              }}
            >
              Nezávazná poptávka
              <span className="text-base leading-none">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
