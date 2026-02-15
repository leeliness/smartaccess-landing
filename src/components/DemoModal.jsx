export default function DemoModal({ open, onClose, plan }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* modal */}
      <div className="relative mx-auto mt-24 w-[92%] max-w-lg rounded-2xl border border-white/10 bg-slate-950/90 p-6 text-white shadow-2xl backdrop-blur">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">Request a demo</h3>
            <p className="mt-1 text-sm text-white/70">
              Leave your contact and we’ll get back to you.
            </p>

            {plan && (
              <p className="mt-2 text-sm text-blue-300">
                Selected plan: <span className="font-semibold">{plan}</span>
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="rounded-full px-3 py-1 text-white/70 hover:bg-white/10"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-blue-500/60"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-blue-500/60"
              placeholder="you@email.com"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Company (optional)</label>
            <input
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-blue-500/60"
              placeholder="Company name"
            />
          </div>

          <button className="w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/25 hover:brightness-110">
            Send request
          </button>

          <p className="text-xs text-white/45">
            Demo request is simulated (no backend yet).
          </p>
        </form>
      </div>
    </div>
  );
}
