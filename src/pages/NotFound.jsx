import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-24 text-center">
        <Reveal>
          <h1 className="text-5xl font-extrabold">404</h1>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-4 text-white/70">
            Page not found. Let’s get you back.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-10 flex justify-center">
            <Button onClick={() => navigate("/")}>Go Home</Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
