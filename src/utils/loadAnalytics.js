/**
 * Carga scripts de analytics (p. ej. Google Tag Manager) de forma diferida
 * para no bloquear el render ni el LCP. Se ejecuta después del load o en requestIdleCallback.
 */
const runWhenIdle = (fn) => {
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(fn, { timeout: 3000 });
  } else {
    setTimeout(fn, 1);
  }
};

const loadDeferred = () => {
  const id = import.meta.env.VITE_GTM_ID || import.meta.env.VITE_GA_ID;
  if (!id) return;

  const script = document.createElement("script");
  script.async = true;

  if (id.startsWith("GTM-")) {
    script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
  } else {
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", id);
  }
};

/**
 * Inicializa la carga diferida de analytics.
 * Llamar una vez al arranque de la app (p. ej. en main.jsx).
 */
export function initDeferredAnalytics() {
  if (document.readyState === "complete") {
    runWhenIdle(loadDeferred);
  } else {
    window.addEventListener("load", () => runWhenIdle(loadDeferred));
  }
}
