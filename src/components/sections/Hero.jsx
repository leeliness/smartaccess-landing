import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

export default function Hero({ onDemo = () => {} }) {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(59,130,246,0.22),transparent_55%)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.65)]" />

      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="max-w-2xl text-white text-center md:text-left">
            <Reveal>
              <span className="inline-block mb-4 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white/90 border border-white/15">
                Smart access control
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Manage access and attendance{" "}
                <span className="block text-blue-300">in one simple platform</span>
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-6 text-base md:text-xl text-white/80">
                SmartAccess helps companies track visitors, control access points,
                and analyze attendance data in real time.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button onClick={() => onDemo && onDemo()} size="lg" className="w-full sm:w-auto">
                  Request demo
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => navigate("/pricing")}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  View pricing
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
