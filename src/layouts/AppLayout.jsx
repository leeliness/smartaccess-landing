import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import DemoModal from "../components/DemoModal";
import Button from "../components/ui/Button";

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-full text-sm font-medium transition ${
    isActive
      ? "bg-white/10 text-white"
      : "text-white/80 hover:bg-white/6 hover:text-white"
  }`;

export default function AppLayout() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const openDemo = (planName) => {
    setSelectedPlan(planName || null);
    setDemoOpen(true);
  };

  const closeDemo = () => {
    setDemoOpen(false);
    setSelectedPlan(null);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-3">
          <span className="font-bold text-lg tracking-tight">SmartAccess</span>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/pricing" className={linkClass}>
              Pricing
            </NavLink>
            <NavLink to="/faq" className={linkClass}>
              FAQ
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden rounded-full border border-white/15 bg-white/5 px-3 py-2 text-white/90 hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              ☰
            </button>

            <Button size="sm" onClick={() => openDemo(null)} className="px-5">
              Request demo
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-slate-950/95 anim-fade-up">
            <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
              <NavLink to="/" end className={linkClass} onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink to="/pricing" className={linkClass} onClick={closeMenu}>
                Pricing
              </NavLink>
              <NavLink to="/faq" className={linkClass} onClick={closeMenu}>
                FAQ
              </NavLink>
              <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet context={{ openDemo }} />
      </main>

      <footer className="border-t border-white/10 text-sm text-white/60">
        <div className="max-w-6xl mx-auto px-4 py-6">
          © {new Date().getFullYear()} SmartAccess
        </div>
      </footer>

      <DemoModal open={demoOpen} onClose={closeDemo} plan={selectedPlan} />
    </div>
  );
}
