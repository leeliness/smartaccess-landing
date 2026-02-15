import { useMemo, useState } from "react";
import Reveal from "../components/ui/Reveal";

const items = [
  {
    q: "Can I start without hardware?",
    a: "Yes. You can start with basic logs and add devices later.",
  },
  {
    q: "Do you support attendance analytics?",
    a: "Yes. You can view trends and export reports.",
  },
  {
    q: "Is there a free trial?",
    a: "Demo is simulated in this project. You can present a trial flow later.",
  },
  {
    q: "How many entry points can I manage?",
    a: "You can manage one or multiple entry points depending on your plan.",
  },
  {
    q: "Can I export attendance data?",
    a: "Yes. Exporting logs and reports is available on higher plans.",
  },
  {
    q: "Is SmartAccess suitable for small teams?",
    a: "Yes. SmartAccess is designed to scale from small teams to larger organizations.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) => i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Reveal>
          <h1 className="text-4xl font-extrabold tracking-tight text-center">
            FAQ
          </h1>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-8 max-w-2xl mx-auto">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
        </Reveal>

        <div className="mt-10 max-w-3xl mx-auto space-y-3">
          {filtered.map((it, idx) => {
            const isOpen = idx === openIdx;

            return (
              <Reveal key={it.q} delay={(idx % 3) + 1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold">{it.q}</span>
                    <span className="text-white/60 text-xl leading-none">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-white/70">{it.a}</div>
                  )}
                </div>
              </Reveal>
            );
          })}

          {filtered.length === 0 && (
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70 text-center">
                No results found. Try another search.
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
}
