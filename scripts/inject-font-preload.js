/**
 * Inyecta <link rel="preload"> para fuentes .ttf en dist/index.html.
 * Reduce CLS al cargar las fuentes antes del primer pintado.
 * Ejecutar después del build (postbuild).
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");
const assetsDir = join(distDir, "assets");
const indexPath = join(distDir, "index.html");

if (!existsSync(indexPath) || !existsSync(assetsDir)) {
  console.warn("[inject-font-preload] dist o dist/assets no encontrados.");
  process.exit(0);
}

const files = readdirSync(assetsDir);
const ttfFiles = files.filter((f) => f.endsWith(".ttf"));

if (ttfFiles.length === 0) {
  process.exit(0);
}

let html = readFileSync(indexPath, "utf-8");

// Preload del CSS principal para que el navegador lo pida en paralelo al documento (reduce ruta crítica)
const cssLinkMatch = html.match(
  /<link[^>]*rel="stylesheet"[^>]*href="([^"]*\/assets\/index-[^"]+\.css)"[^>]*>/i
);
const cssPreload =
  cssLinkMatch && cssLinkMatch[1]
    ? `<link rel="preload" href="${cssLinkMatch[1]}" as="style">\n`
    : "";

// Modulepreload del entry JS para reducir latencia de la ruta crítica (LCP)
const entryScriptMatch = html.match(
  /<script[^>]*\ssrc="([^"]*\/assets\/index-[^"]+\.js)"[^>]*>/i
);
const modulePreload =
  entryScriptMatch && entryScriptMatch[1]
    ? `<link rel="modulepreload" href="${entryScriptMatch[1]}" crossorigin>\n`
    : "";

// Modulepreload de chunks lazy para que se descarguen en paralelo al entry (acorta ruta crítica)
const jsFiles = files.filter((f) => f.endsWith(".js"));
const chunkPrefixes = [
  "useInView",
  "ProblemSection",
  "InsightSection",
  "BenefitsSection",
  "TransformationSection",
  "TestimonialsSection",
  "ClientsSection",
  "FinalCTASection",
  "Footer",
  "ScrollToTopButton",
];
const earlyChunkFiles = jsFiles.filter((f) =>
  chunkPrefixes.some((p) => f.startsWith(p))
);
const sortOrder = [
  "useInView",
  "ProblemSection",
  "InsightSection",
  "BenefitsSection",
  "TransformationSection",
  "TestimonialsSection",
  "ClientsSection",
  "FinalCTASection",
  "Footer",
  "ScrollToTopButton",
];
earlyChunkFiles.sort((a, b) => {
  const ai = sortOrder.findIndex((p) => a.startsWith(p));
  const bi = sortOrder.findIndex((p) => b.startsWith(p));
  return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
});
const chunkPreloads = earlyChunkFiles
  .map((f) => `<link rel="modulepreload" href="./assets/${f}" crossorigin>`)
  .join("\n");
const chunkPreloadsBlock =
  chunkPreloads.length > 0 ? chunkPreloads + "\n" : "";

const preloads = ttfFiles
  .map(
    (f) =>
      `<link rel="preload" href="./assets/${f}" as="font" type="font/ttf" crossorigin>`,
  )
  .join("\n");

const headOpen = "<head>";
if (!html.includes(headOpen)) {
  console.warn("[inject-font-preload] <head> no encontrado.");
  process.exit(0);
}
// Hero preload primero para que LCP no espere al JS (mejora LCP y Speed Index)
const heroPreload =
  '<link rel="preload" as="image" href="./hero-mobile.webp" type="image/webp" fetchpriority="high" media="(max-width: 768px)">\n' +
  '<link rel="preload" as="image" href="./hero-desktop.webp" type="image/webp" fetchpriority="high" media="(min-width: 769px)">\n';

const headInject = [heroPreload, cssPreload, modulePreload, chunkPreloadsBlock]
  .filter(Boolean)
  .join("");
html = html.replace(headOpen, headOpen + "\n" + headInject);

// Inyectar antes de </head> para que el navegador precargue fuentes y reduzca CLS
const headClose = "</head>";
if (!html.includes(headClose)) {
  console.warn("[inject-font-preload] </head> no encontrado.");
  process.exit(0);
}
html = html.replace(headClose, preloads + "\n" + headClose);

writeFileSync(indexPath, html);
if (heroPreload) console.log("[inject-font-preload] preload hero (LCP) al inicio del head inyectado.");
if (cssPreload) console.log("[inject-font-preload] preload del CSS principal inyectado.");
if (modulePreload) console.log("[inject-font-preload] modulepreload del entry JS inyectado.");
if (earlyChunkFiles.length)
  console.log("[inject-font-preload] modulepreload de", earlyChunkFiles.length, "chunk(s) early inyectado(s).");
console.log("[inject-font-preload] Preload de", ttfFiles.length, "fuente(s) inyectado.");
