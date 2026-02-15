import { useEffect, useRef, useState } from "react";

export default function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.unobserve(entry.target); // one-time reveal
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, isVisible };
}
