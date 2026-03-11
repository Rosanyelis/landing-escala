import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initDeferredAnalytics } from "./utils/loadAnalytics";
import "./styles/fonts.css";
import "./styles/globals.css";

initDeferredAnalytics();

function showError(el, err) {
  if (!el) return;
  const msg = err && err.message ? err.message : String(err);
  const stack = err && err.stack ? "\n\n" + err.stack : "";
  el.innerHTML =
    '<div style="padding:2rem;font-family:monospace;white-space:pre-wrap;color:#c00;max-width:600px;margin:0 auto;font-size:14px">Error: ' +
    msg +
    stack +
    "</div>";
}

function mount() {
  const rootEl = document.getElementById("root");
  if (!rootEl) return;
  try {
    ReactDOM.createRoot(rootEl).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  } catch (e) {
    showError(rootEl, e);
  }
}

/* Safari puede ejecutar el módulo antes de que exista #root; montar cuando el DOM esté listo */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
