import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

export default function CTA({ onDemo = () => {} }) {
  const navigate = useNavigate();

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-8 py-14 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 anim-fade-up">
          <div>
            <h2 className="text-3xl font-bold">Ready to try SmartAccess?</h2>
            <p className="mt-3 text-white/70 max-w-xl">
              Get a quick demo and see how access control and attendance tracking can work for your team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button onClick={() => onDemo && onDemo()} className="w-full sm:w-auto">
              Request demo
            </Button>

            <Button
              variant="secondary"
              onClick={() => navigate("/pricing")}
              className="w-full sm:w-auto"
            >
              View pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
