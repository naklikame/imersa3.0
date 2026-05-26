"use client";

import { useState, useCallback } from "react";

// ── Project types ──────────────────────────────────────
const projectTypes = [
  { id: "maly",    label: "Malý",    desc: "Rodinné domy, vily" },
  { id: "stredni", label: "Střední", desc: "10 – 50 jednotek"   },
  { id: "velky",   label: "Velký",   desc: "50+ jednotek"       },
] as const;

type ProjectType = typeof projectTypes[number]["id"];

// ── Service groups ─────────────────────────────────────
type ServiceDef = {
  id: number;
  name: string;
  desc: string;
  prices: { maly: number; stredni: number; velky: number };
  suffix?: string;
};

const serviceGroups: { id: string; label: string; services: ServiceDef[] }[] = [
  {
    id: "konfigurator",
    label: "Konfigurátor",
    services: [
      { id: 1,  name: "3D Konfigurátor",           desc: "Interaktivní průzkum budovy patrem po patru. Půdorysy, ceny a detaily bytů.", prices: { maly: 35000, stredni: 55000, velky: 95000 } },
      { id: 12, name: "Webová prezentace", desc: "Jednoduchý prezentační web nemovitosti bez konfigurátoru.", prices: { maly: 12000, stredni: 18000, velky: 28000 } },
    ],
  },
  {
    id: "nemovitost",
    label: "Nemovitost",
    services: [
      { id: 2,  name: "Interiér + exteriér",   desc: "Fotorealistické záběry interiérů, fasády a okolí projektu.",                   prices: { maly: 20000, stredni: 35000, velky: 65000 } },
      { id: 3,  name: "Virtuální prohlídka",   desc: "Matterport 3D sken nebo vlastní interaktivní VR prohlídka.",                   prices: { maly: 15000, stredni: 22000, velky: 38000 } },
      { id: 4,  name: "2D + 3D půdorysy",      desc: "Přesné půdorysy všech typů bytových jednotek.",                                prices: { maly: 10000, stredni: 18000, velky: 32000 } },
      { id: 41, name: "Fotografie nemovitosti", desc: "Profesionální fotografie interiérů a exteriérů pro inzerci a marketing.",      prices: { maly:  8000, stredni: 14000, velky: 25000 } },
      { id: 5,  name: "Prodejní video",         desc: "Profesionální video nemovitosti pro online inzerci. Střih, hudba, titulky.",  prices: { maly: 12000, stredni: 22000, velky: 40000 } },
      { id: 51, name: "Záběry z dronu",         desc: "Profesionální letecké záběry lokality a projektu.",                           prices: { maly:  8000, stredni: 12000, velky: 18000 } },
    ],
  },
  {
    id: "web",
    label: "Web",
    services: [
      { id: 6,  name: "Live kalkulačka",        desc: "Integrovaná kalkulačka měsíční splátky přímo na webu.",                       prices: { maly: 10000, stredni: 15000, velky: 22000 } },
      { id: 7,  name: "Vyhledávání jednotky",   desc: "Filtr dostupných bytů s aktuálním stavem a cenami.",                          prices: { maly:  8000, stredni: 12000, velky: 20000 } },
      { id: 8,  name: "CMS systém",             desc: "Admin rozhraní pro správu klientů, smluv a faktur.",                          prices: { maly:  6000, stredni:  8000, velky: 14000 } },
    ],
  },
  {
    id: "provoz",
    label: "Správa & provoz",
    services: [
      { id: 9,  name: "Hosting & provoz",  desc: "Spolehlivý cloud hosting, CDN a pravidelné zálohy dat projektu.",              prices: { maly: 1500, stredni: 2500, velky: 4500 }, suffix: "/ měs." },
      { id: 13, name: "AI chatbot",         desc: "Inteligentní asistent na webu projektu. Odpovídá na dotazy zájemců 24/7.",      prices: { maly: 2000, stredni: 3500, velky: 6000 }, suffix: "/ měs." },
      { id: 10, name: "Správa obsahu",     desc: "Aktualizace dostupnosti bytů, cen a technických podkladů v konfigurátoru.",   prices: { maly: 1000, stredni: 1500, velky: 3000 }, suffix: "/ měs." },
      { id: 11, name: "Technická podpora", desc: "Prioritní podpora, monitoring výkonu a drobné úpravy na vyžádání.",           prices: { maly:  500, stredni: 1000, velky: 2000 }, suffix: "/ měs." },
    ],
  },
];

const allServices = serviceGroups.flatMap(g => g.services);
const fmt = (n: number) => n.toLocaleString("cs-CZ") + " Kč";
type Service = ServiceDef;

// ── ServiceCard ────────────────────────────────────────
function ServiceCard({
  s, on, onToggle, tier,
}: {
  s: Service; on: boolean; onToggle: () => void; tier: ProjectType | null;
}) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const price = s.prices[tier ?? "maly"];

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  return (
    <div
      className="relative rounded-2xl cursor-pointer select-none h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos(null)}
      onClick={onToggle}
      style={{ padding: "1.5px" }}
    >
      {/* Cursor glow border */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: on
            ? "rgba(109,112,90,0.55)"
            : pos
            ? `radial-gradient(circle 110px at ${pos.x}px ${pos.y}px, rgba(109,112,90,0.85) 0%, rgba(109,112,90,0.12) 55%, transparent 100%)`
            : "rgba(109,112,90,0.2)",
          transition: on ? "background 0.3s" : "none",
        }}
      />

      {/* Card surface */}
      <div
        className={`relative text-left rounded-[14px] p-6 overflow-hidden h-full flex flex-col ${on ? "lg-dark" : "lg-clear"}`}
        style={{
          ...(on ? {
            background: "linear-gradient(155deg, rgba(238,233,228,0.1) 0%, rgba(10,18,8,0.88) 22%, rgba(8,16,6,0.97) 100%)",
            boxShadow: "inset 0 1.5px 0 rgba(238,233,228,0.3), 0 16px 60px rgba(10,21,8,0.5)",
          } : {
            backgroundColor: "rgba(235,235,232,0.72)",
          }),
          transition: "box-shadow 0.3s",
        }}
      >
        {pos && !on && (
          <span className="absolute inset-0 pointer-events-none" style={{
            background: `radial-gradient(circle 130px at ${pos.x - 1.5}px ${pos.y - 1.5}px, rgba(109,112,90,0.14) 0%, transparent 65%)`,
          }} />
        )}

        {/* Left accent */}
        <span className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full transition-all duration-300"
          style={{ backgroundColor: on ? "rgba(109,112,90,0.7)" : "rgba(109,112,90,0.3)" }}
        />

        {/* Indicator */}
        <span className="absolute top-5 right-5 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ backgroundColor: on ? "#6D705A" : "transparent", border: on ? "none" : "1.5px solid rgba(109,112,90,0.4)" }}
        >
          <span className="text-[10px] font-bold leading-none" style={{ color: on ? "#EEE9E4" : "rgba(109,112,90,0.55)" }}>
            {on ? "✓" : "+"}
          </span>
        </span>

        <h3 className="text-lg font-bold mb-1.5 leading-tight pr-6 pl-3 pt-1"
          style={{ fontFamily: "var(--font-display)", color: on ? "#EEE9E4" : "#1a2a1a" }}>
          {s.name}
        </h3>

        <p className="text-sm mb-4 leading-relaxed pl-3"
          style={{ color: on ? "rgba(238,233,228,0.5)" : "rgba(26,42,26,0.55)" }}>
          {s.desc}
        </p>

        <div className="flex-1" />

        <div className="ml-3 mb-3 h-px"
          style={{ backgroundColor: on ? "rgba(238,233,228,0.1)" : "rgba(109,112,90,0.15)" }} />

        <span className="text-base font-semibold pl-3"
          style={{ color: on ? "#EEE9E4" : "#4a5240", fontFamily: "var(--font-display)" }}>
          {fmt(price)}
          {s.suffix && (
            <span className="text-xs font-normal ml-1"
              style={{ color: on ? "rgba(238,233,228,0.4)" : "rgba(109,112,90,0.6)" }}>
              {s.suffix}
            </span>
          )}
        </span>
      </div>
    </div>
  );
}

// ── ProjectTypeCard ────────────────────────────────────
function ProjectTypeCard({
  pt, active, onToggle,
}: {
  pt: typeof projectTypes[number]; active: boolean; onToggle: () => void;
}) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  return (
    <div
      className="relative rounded-2xl cursor-pointer select-none"
      onClick={onToggle}
      onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); setPos({ x: e.clientX - r.left, y: e.clientY - r.top }); }}
      onMouseLeave={() => setPos(null)}
      style={{ padding: "1.5px" }}
    >
      {/* Border gradient */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300"
        style={{
          background: active
            ? "rgba(109,112,90,0.55)"
            : pos
            ? `radial-gradient(circle 110px at ${pos.x}px ${pos.y}px, rgba(109,112,90,0.85) 0%, rgba(109,112,90,0.12) 55%, transparent 100%)`
            : "rgba(109,112,90,0.2)",
          transition: active ? "background 0.3s" : "none",
        }} />

      {/* Card surface */}
      <div
        className={`relative rounded-[14px] px-5 py-4 text-left overflow-hidden transition-all duration-300 ${active ? "lg-dark" : "lg-clear"}`}
        style={active ? {
          background: "linear-gradient(155deg, rgba(238,233,228,0.1) 0%, rgba(10,18,8,0.88) 22%, rgba(8,16,6,0.97) 100%)",
          boxShadow: "inset 0 1.5px 0 rgba(238,233,228,0.3), 0 8px 32px rgba(10,21,8,0.4)",
        } : { backgroundColor: "rgba(235,235,232,0.72)" }}
      >
        {pos && !active && (
          <span className="absolute inset-0 pointer-events-none" style={{
            background: `radial-gradient(circle 130px at ${pos.x - 1.5}px ${pos.y - 1.5}px, rgba(109,112,90,0.14) 0%, transparent 65%)`,
          }} />
        )}

        <span className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full transition-all duration-300"
          style={{ backgroundColor: active ? "rgba(109,112,90,0.7)" : "rgba(109,112,90,0.3)" }} />

        <span className="absolute top-4 right-4 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ backgroundColor: active ? "#6D705A" : "transparent", border: active ? "none" : "1.5px solid rgba(109,112,90,0.4)" }}>
          <span className="text-[10px] font-bold leading-none" style={{ color: active ? "#EEE9E4" : "rgba(109,112,90,0.55)" }}>
            {active ? "✓" : "+"}
          </span>
        </span>

        <span className="block text-sm font-bold mb-0.5 pl-3 pr-6"
          style={{ fontFamily: "var(--font-display)", color: active ? "#EEE9E4" : "#1a2a1a" }}>
          {pt.label}
        </span>
        <span className="text-xs pl-3" style={{ color: active ? "rgba(238,233,228,0.55)" : "#6D705A" }}>
          {pt.desc}
        </span>
      </div>
    </div>
  );
}

// ── Main ───────────────────────────────────────────────
export default function Pricing() {
  const [tier, setTier]       = useState<ProjectType | null>(null);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [form, setForm]       = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent]       = useState(false);

  const toggle = (id: number) =>
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const selectedItems = allServices.filter(s => selected.has(s.id));
  const total = selectedItems.reduce((sum, s) => sum + s.prices[tier ?? "maly"], 0);

  return (
    <section className="w-full relative" style={{ overflow: "clip" }}>
      <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80')" }} />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(238,233,228,0.82) 0%, rgba(220,215,208,0.75) 50%, rgba(238,233,228,0.82) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(13,21,8,0.22) 100%)" }} />

      <div className="relative z-10 max-w-[1300px] mx-auto px-8 md:px-14 py-24">

        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#6D705A" }}>Ceník</span>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="text-5xl lg:text-6xl font-bold leading-[1.08]"
              style={{ fontFamily: "var(--font-display)", color: "#1a2a1a", letterSpacing: "-0.03em" }}>
              Sestavte si
              <br />
              projekt na míru
            </h2>
            <p className="text-base max-w-sm" style={{ color: "#6D705A" }}>
              Vyberte kombinaci služeb a získejte orientační odhad investice.
            </p>
          </div>
        </div>

        <div className="flex gap-8 items-start">

          {/* Left column */}
          <div className="flex-[1.4] flex flex-col gap-4">

            {/* ── Project type selector ── */}
            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-3 pl-1"
                style={{ color: "#6D705A" }}>
                Typ projektu
              </p>
              <div className="grid grid-cols-3 gap-3">
                {projectTypes.map(pt => (
                  <ProjectTypeCard
                    key={pt.id}
                    pt={pt}
                    active={tier === pt.id}
                    onToggle={() => setTier(tier === pt.id ? null : pt.id)}
                  />
                ))}
              </div>
            </div>

            {/* ── Service groups ── */}
            <div className="flex flex-col gap-8">
              {serviceGroups.map(group => (
                <div key={group.id}>
                  <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-3 pl-1"
                    style={{ color: "#6D705A" }}>
                    {group.label}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {group.services.map(s => (
                      <ServiceCard
                        key={s.id}
                        s={s}
                        on={selected.has(s.id)}
                        onToggle={() => toggle(s.id)}
                        tier={tier}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: sticky summary + form — two cards */}
          <div className="flex-1 min-w-[320px] flex flex-col gap-4" style={{ position: "sticky", top: "100px", maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}>

            {/* ── Card 1: Summary ── */}
            <div className="rounded-3xl p-8" style={{ backgroundColor: "#1a2a1a" }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ color: "rgba(238,233,228,0.45)" }}>
                Váš výběr
              </p>

              {tier && (
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ backgroundColor: "rgba(109,112,90,0.25)", color: "#6D705A" }}>
                    {projectTypes.find(p => p.id === tier)?.label} projekt
                  </span>
                </div>
              )}

              {selectedItems.length === 0 ? (
                <p className="text-sm mb-6" style={{ color: "rgba(238,233,228,0.35)" }}>
                  {tier ? "Zatím nic není vybráno." : "Nejprve vyberte typ projektu."}
                </p>
              ) : (
                <ul className="space-y-3 mb-6">
                  {selectedItems.map(s => (
                    <li key={s.id} className="flex justify-between items-start gap-3">
                      <span className="text-sm" style={{ color: "rgba(238,233,228,0.75)" }}>{s.name}</span>
                      <span className="text-sm font-semibold shrink-0" style={{ color: "#EEE9E4" }}>
                        {fmt(s.prices[tier ?? "maly"])}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="h-px w-full mb-6" style={{ backgroundColor: "rgba(238,233,228,0.12)" }} />

              <span className="text-sm block mb-2" style={{ color: "rgba(238,233,228,0.5)" }}>Celkem odhadem</span>
              <div className="text-4xl font-bold transition-all duration-500"
                style={{ fontFamily: "var(--font-display)", color: "#EEE9E4", letterSpacing: "-0.03em" }}>
                {fmt(total)}
              </div>
              {selectedItems.some(s => s.suffix) && (
                <p className="text-xs mt-1" style={{ color: "rgba(238,233,228,0.35)" }}>+ měsíční položky</p>
              )}
            </div>

            {/* ── Card 2: Contact form ── */}
            <div className="rounded-3xl p-8"
              style={{
                backgroundColor: "rgba(238,233,228,0.55)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(109,112,90,0.18)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5), 0 4px 20px rgba(10,21,8,0.06)",
              }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ color: "#6D705A" }}>
                Nezávazná poptávka
              </p>

              {sent ? (
                <div className="text-center py-4">
                  <p className="text-lg font-semibold mb-1" style={{ color: "#1a2a1a", fontFamily: "var(--font-display)" }}>Odesláno!</p>
                  <p className="text-sm" style={{ color: "#6D705A" }}>Ozvu se vám do 24 hodin.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
                  {[
                    { key: "name",  label: "Jméno",   type: "text",  required: true  },
                    { key: "email", label: "E-mail",  type: "email", required: true  },
                    { key: "phone", label: "Telefon", type: "tel",   required: false },
                  ].map(({ key, label, type, required }) => (
                    <div key={key}>
                      <input type={type} placeholder={label} required={required}
                        value={form[key as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                        className="w-full bg-transparent text-sm py-3 outline-none transition-colors"
                        style={{ color: "#1a2a1a", borderBottom: "1px solid rgba(109,112,90,0.25)" }}
                        onFocus={e => (e.target.style.borderBottomColor = "rgba(109,112,90,0.7)")}
                        onBlur={e  => (e.target.style.borderBottomColor = "rgba(109,112,90,0.25)")}
                      />
                    </div>
                  ))}
                  <div>
                    <textarea placeholder="Zpráva (nepovinné)" rows={2}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full bg-transparent text-sm py-3 outline-none resize-none transition-colors"
                      style={{ color: "#1a2a1a", borderBottom: "1px solid rgba(109,112,90,0.25)" }}
                      onFocus={e => (e.target.style.borderBottomColor = "rgba(109,112,90,0.7)")}
                        onBlur={e  => (e.target.style.borderBottomColor = "rgba(109,112,90,0.25)")}
                      />
                    </div>
                    <button type="submit"
                      className="w-full py-4 rounded-2xl text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 mt-2"
                      style={{ backgroundColor: "#1a2a1a", color: "#EEE9E4", fontFamily: "var(--font-display)" }}>
                      Odeslat poptávku →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
