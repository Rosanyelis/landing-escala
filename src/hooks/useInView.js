import { useEffect, useRef, useState } from "react";

/**
 * Hook que detecta cuando el elemento entra en viewport (IntersectionObserver).
 * Sustituye useInView de Framer Motion para animaciones con CSS y menos JS.
 */
export function useInView(options = {}) {
  const { once = true, margin = "-50px", amount = 0.1 } = options;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin: margin, threshold: amount },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, margin, amount]);

  return [ref, inView];
}
