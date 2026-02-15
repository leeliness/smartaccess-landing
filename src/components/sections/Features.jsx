import {
  ShieldCheck,
  Users,
  DoorClosed,
  BarChart3,
  Bell,
  SlidersHorizontal,
} from "lucide-react";

const features = [
  {
    title: "Secure access control",
    desc: "Role-based rules and entry-point management for teams.",
    icon: ShieldCheck,
  },
  {
    title: "Visitor & attendance tracking",
    desc: "Log visits and attendance in real time with clear history.",
    icon: Users,
  },
  {
    title: "Entry points & zones",
    desc: "Control doors, zones, and permissions from one place.",
    icon: DoorClosed,
  },
  {
    title: "Analytics & reports",
    desc: "Understand patterns with dashboards and exports.",
    icon: BarChart3,
  },
  {
    title: "Alerts & incidents",
    desc: "Get notified about unusual events and access issues.",
    icon: Bell,
  },
  {
    title: "Flexible setup",
    desc: "Start simple, then scale with devices and integrations.",
    icon: SlidersHorizontal,
  },
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold anim-fade-up">Everything you need</h2>
        <p className="mt-3 text-white/70 max-w-2xl anim-fade-up anim-delay-1">
          Build a secure access workflow and keep attendance data organized — without complicated setup.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => {
            const Icon = f.icon;
            const delayClass = idx % 3 === 0 ? "anim-delay-1" : idx % 3 === 1 ? "anim-delay-2" : "anim-delay-3";

            return (
              <div
                key={f.title}
                className={`h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition hover:bg-white/7 hover:-translate-y-0.5 ${"anim-fade-up"} ${delayClass}`}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-3">
                    <Icon className="h-6 w-6 text-blue-300" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">{f.title}</h3>
                    <p className="mt-2 text-white/70">{f.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
