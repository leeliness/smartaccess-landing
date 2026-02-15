import { ClipboardList, ShieldCheck, BarChart3 } from "lucide-react";
import Reveal from "../ui/Reveal";

const steps = [
  {
    title: "Set up in minutes",
    desc: "Create entry points, roles, and basic rules for your space.",
    icon: ClipboardList,
  },
  {
    title: "Control access",
    desc: "Allow or deny entry and keep a clean log for every event.",
    icon: ShieldCheck,
  },
  {
    title: "Track & analyze",
    desc: "See attendance and activity trends with simple reports.",
    icon: BarChart3,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl font-bold">How it works</h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-3 text-white/70 max-w-2xl">
            A simple flow to manage access and attendance without extra complexity.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={idx === 0 ? 1 : idx === 1 ? 2 : 3}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-3">
                      <Icon className="h-6 w-6 text-blue-300" />
                    </div>
                    <div className="text-sm font-semibold text-white/70">
                      Step {idx + 1}
                    </div>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-white/70">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
