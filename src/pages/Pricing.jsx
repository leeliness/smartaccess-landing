import { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";

const plans = [
  {
    name: "Starter",
    desc: "For small teams getting started.",
    monthly: 19,
    yearly: 190,
    features: ["Basic logs", "1 entry point", "Email support"],
  },
  {
    name: "Pro",
    desc: "Best for growing companies.",
    monthly: 49,
    yearly: 490,
    popular: true,
    features: ["Real-time logs", "Multiple entry points", "Analytics", "Priority support"],
  },
  {
    name: "Business",
    desc: "Advanced control & reporting.",
    monthly: 99,
    yearly: 990,
    features: ["Advanced permissions", "Exports", "Incidents", "SLA support"],
  },
];

export default function Pricing() {
  const { openDemo } = useOutletContext();
  const [billing, setBilling] = useState("monthly");

  const priceSuffix = billing === "monthly" ? "/mo" : "/yr";
  const list = useMemo(() => plans, []);

  return (
    <div className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Reveal>
          <h1 className="text-4xl font-extrabold tracking-tight text-center">
            Pricing
          </h1>
        </Reveal>

        <Reveal delay={1}>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto text-center">
            Choose a plan that fits your team. Upgrade anytime.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
              <button
                onClick={() => setBilling("monthly")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  billing === "monthly"
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  billing === "yearly"
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, idx) => {
            const price = billing === "monthly" ? p.monthly : p.yearly;

            return (
              <Reveal key={p.name} delay={idx === 0 ? 1 : idx === 1 ? 2 : 3}>
                <div
                  className={`h-full rounded-2xl border p-6 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.03)]
                  ${
                    p.popular
                      ? "border-blue-500/40 bg-blue-500/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex h-full flex-col">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg font-semibold">{p.name}</h3>
                        {p.popular && (
                          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-200">
                            Most popular
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-white/70">{p.desc}</p>

                      <div className="mt-6 flex items-end gap-2">
                        <div className="text-4xl font-extrabold">${price}</div>
                        <div className="text-white/60 pb-1">{priceSuffix}</div>
                      </div>

                      <ul className="mt-6 space-y-2 text-white/70">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-8">
                      <Button onClick={() => openDemo(p.name)} className="w-full">
                        Choose {p.name}
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
