import { useOutletContext } from "react-router-dom";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import HowItWorks from "../components/sections/HowItWorks";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";

export default function Home() {
  const { openDemo } = useOutletContext();

  return (
    <div className="bg-slate-950">
      <Hero onDemo={openDemo} />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA onDemo={openDemo} />
    </div>
  );
}
