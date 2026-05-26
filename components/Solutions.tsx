const cards = [
  {
    title: "Interaktivní 3D konfigurátor",
    desc: "Zákazník si projde celou budovu patrem po patru. Půdorysy, ceny a detaily bytů na jednom místě.",
    image: "/renders/obyvak-kk.jpg",
    tags: ["Patro po patru", "Živá data"],
    colStart: "56%",
  },
  {
    title: "Vizualizace, foto & video",
    desc: "Fotorealistické rendery, profesionální fotografie i prodejní videa nemovitostí. Interiéry, exteriéry i letecké záběry.",
    image: "/renders/kancelar.jpg",
    tags: ["Fotografie", "Video", "Rendering"],
    colStart: "28%",
  },
  {
    title: "Webové stránky na míru",
    desc: "Od jednoduché prezentace nemovitosti až po komplexní digitální řešení s kalkulačkou, CRM a admin rozhraním.",
    image: "/renders/pracovna.png",
    tags: ["Rychlý prodej", "Admin rozhraní"],
    colStart: "0%",
  },
];

export default function Solutions() {
  return (
    <section
      style={{ backgroundColor: "#EEE9E4", height: "90vh", minHeight: "680px" }}
      className="w-full overflow-hidden"
    >
      <div className="flex gap-5 h-full px-8 md:px-14 pt-16 pb-10">

        {/* ── Col 1: text (top 56%) + card (bottom 44%) ── */}
        <div className="flex flex-col flex-[2.2]">
          <div className="flex flex-col" style={{ flex: "0 0 56%" }}>
            <span
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#6D705A" }}
            >
              Naše řešení
            </span>
            <h2
              className="text-5xl lg:text-[3.75rem] font-bold leading-[1.18] mb-8"
              style={{
                fontFamily: "var(--font-display)",
                color: "#1a2a1a",
                letterSpacing: "-0.03em",
              }}
            >
              Jedno místo.
              <br />
              Kompletní digitální
              <br />
              prezentace.
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#6D705A",
                color: "#EEE9E4",
                fontFamily: "var(--font-display)",
              }}
            >
              Zjistit více <span>→</span>
            </a>
          </div>
          <div className="flex-1 min-h-0">
            <Card card={cards[0]} />
          </div>
        </div>

        {/* ── Col 2: spacer 28% + card 72% ── */}
        <div className="flex flex-col flex-1">
          <div style={{ flex: "0 0 28%" }} />
          <div className="flex-1 min-h-0">
            <Card card={cards[1]} />
          </div>
        </div>

        {/* ── Col 3: card full height ── */}
        <div className="flex flex-col flex-1">
          <Card card={cards[2]} />
        </div>

      </div>
    </section>
  );
}

function Card({ card }: { card: (typeof cards)[0] }) {
  return (
    <div
      className="relative rounded-3xl overflow-hidden h-full"
      style={{ backgroundColor: "#0a1508" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${card.image}')` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #0a1508 0%, #0a1508 32%, rgba(10,21,8,0.88) 50%, rgba(10,21,8,0.45) 68%, rgba(10,21,8,0.08) 100%)",
        }}
      />
      <div className="relative z-10 flex flex-col h-full p-6 md:p-7">
        <div>
          <h3
            className="text-2xl lg:text-3xl font-bold text-white mb-2.5 leading-tight"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            {card.title}
          </h3>
          <p
            className="text-sm md:text-base leading-relaxed"
            style={{ color: "rgba(238,233,228,0.6)" }}
          >
            {card.desc}
          </p>
        </div>
        <div className="flex-1" />
        <div className="flex gap-2 flex-wrap">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "rgba(238,233,228,0.92)",
                color: "#1a2a1a",
                backdropFilter: "blur(4px)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
