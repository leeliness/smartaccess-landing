import { useState } from "react";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  return (
    <div className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Reveal>
          <h1 className="text-4xl font-extrabold tracking-tight text-center">Contact</h1>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto text-center">
            Send a message and we’ll get back to you.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-10 max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent (simulated).");
                setForm({ name: "", email: "", message: "" });
              }}
            >
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  value={form.name}
                  onChange={onChange("name")}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-blue-500/50"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  value={form.email}
                  onChange={onChange("email")}
                  type="email"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-blue-500/50"
                  placeholder="you@email.com"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  value={form.message}
                  onChange={onChange("message")}
                  className="mt-1 w-full min-h-[120px] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-blue-500/50"
                  placeholder="Tell us what you need…"
                  required
                />
              </div>

              <Button className="w-full" type="submit">
                Send message
              </Button>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
