import useInView from "../../hooks/useInView";

export default function Reveal({ children, delay = 0, className = "" }) {
  const { ref, isVisible } = useInView();

  const delayClass =
    delay === 1 ? "delay-1" : delay === 2 ? "delay-2" : delay === 3 ? "delay-3" : "";

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
