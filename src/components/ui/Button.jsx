export default function Button({
  children,
  variant = "primary", // primary | secondary | dark | outline
  size = "md", // sm | md | lg
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 " +
    "active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none";

  const sizes = {
    sm: "text-sm px-4 py-2 rounded-full",
    md: "text-sm px-6 py-3 rounded-full",
    lg: "text-base px-7 py-3.5 rounded-full",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg shadow-blue-600/25 hover:brightness-110 hover:shadow-blue-600/35",
    secondary:
      "border border-white/18 bg-white/6 text-white hover:bg-white/10 hover:border-white/25",
    dark:
      "bg-white text-slate-950 hover:bg-white/90 shadow-lg shadow-black/20",
    outline:
      "border border-slate-700/70 bg-slate-900/40 text-white hover:bg-slate-900/70",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
