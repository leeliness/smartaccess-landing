import Reveal from "../ui/Reveal";

const testimonials = [
  {
    name: "Olena K.",
    role: "Office Manager",
    text: "We finally have clean visitor logs and clear attendance reports. Setup took less than a day.",
    avatar: "/avatars/olena.jpg",
  },
  {
    name: "Andrii M.",
    role: "Facility Lead",
    text: "RFID entry + real-time logs helped us improve security and reduce manual paperwork.",
    avatar: "/avatars/andrii.jpg",
  },
  {
    name: "Iryna S.",
    role: "HR Specialist",
    text: "Monthly attendance analytics are a game-changer. It’s simple for everyone to use.",
    avatar: "/avatars/iryna.jpg",
  },
];

function InitialAvatar({ name }) {
  const initials = name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="h-11 w-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-sm font-bold text-white/90">
      {initials}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl font-bold">Loved by teams</h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-3 text-white/70">
            A few words from people who track access and attendance every day.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name} delay={idx === 0 ? 1 : idx === 1 ? 2 : 3}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                <p className="text-white/85 leading-relaxed">“{t.text}”</p>

                <div className="mt-6 flex items-center gap-3">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-11 w-11 rounded-full object-cover border border-white/10"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  ) : (
                    <InitialAvatar name={t.name} />
                  )}

                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-white/60">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
