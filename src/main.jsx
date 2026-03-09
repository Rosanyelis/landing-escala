import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initDeferredAnalytics } from "./utils/loadAnalytics";
import "./styles/fonts.css";
import "./styles/globals.css";

initDeferredAnalytics();

/* Montaje inmediato: critical CSS ya está inline; mejora FCP/LCP en móvil */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
