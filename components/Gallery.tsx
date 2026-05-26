const images = [
  { src: "/renders/loznice-2.jpg",    span: "row-span-2", label: "Ložnice" },
  { src: "/renders/kuchyne.jpg",      span: "",           label: "Kuchyně" },
  { src: "/renders/detsky-pokoj.jpg", span: "",           label: "Dětský pokoj" },
  { src: "/renders/koupelna.jpg",     span: "",           label: "Koupelna" },
  { src: "/renders/chodba.jpg",       span: "",           label: "Chodba" },
  { src: "/renders/pracovna.png",     span: "row-span-2", label: "Pracovna" },
  { src: "/renders/obyvak-kk.jpg",    span: "",           label: "Obývací pokoj" },
  { src: "/renders/kancelar.jpg",     span: "",           label: "Kancelář" },
];

export default function Gallery() {
  return (
    <section style={{ backgroundColor: "#EEE9E4" }} className="w-full">
      <div className="max-w-[1300px] mx-auto px-8 md:px-14 py-24">

        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#6D705A" }}>
              Portfolio
            </span>
            <h2
              className="text-5xl lg:text-[3.5rem] font-bold leading-[1.1]"
              style={{ fontFamily: "var(--font-display)", color: "#1a2a1a", letterSpacing: "-0.03em" }}
            >
              Naše vizualizace
              <br />
              mluví za vše.
            </h2>
          </div>
          <p className="text-base max-w-xs" style={{ color: "#6D705A" }}>
            Fotorealistické interiéry a exteriéry pro prodejní prezentace developerských projektů.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "280px",
          }}
        >
          {images.map((img) => (
            <div
              key={img.src}
              className={`relative rounded-2xl overflow-hidden group ${img.span}`}
              style={{ backgroundColor: "#1a2a1a" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${img.src}')` }}
              />
              {/* Subtle label on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
                style={{ background: "linear-gradient(to top, rgba(10,21,8,0.55) 0%, transparent 60%)" }}
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: "#EEE9E4", fontFamily: "var(--font-display)" }}
                >
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
