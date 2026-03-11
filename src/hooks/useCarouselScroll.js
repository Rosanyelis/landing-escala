import { useEffect } from "react";

/**
 * Carrusel horizontal: auto-scroll infinito que no se detiene.
 * El usuario puede además arrastrar en móvil para seleccionar/leer (scroll nativo).
 * Contenedor: overflow-x: auto y hijo con contenido duplicado (w-max).
 */
export function useCarouselScroll(scrollRef, options = {}) {
  const { speed = 0.6 } = options;

  useEffect(() => {
    const el = scrollRef?.current;
    if (!el) return;

    let rafRef;
    const tick = () => {
      if (el.scrollLeft !== undefined) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      rafRef = requestAnimationFrame(tick);
    };
    rafRef = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef);
  }, [scrollRef, speed]);
}
