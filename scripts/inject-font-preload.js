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

const preloads = ttfFiles
  .map(
    (f) =>
      `<link rel="preload" href="./assets/${f}" as="font" type="font/ttf" crossorigin>`,
  )
  .join("\n");

// Inyectar antes de </head> para que el navegador precargue fuentes y reduzca CLS
const headClose = "</head>";
if (!html.includes(headClose)) {
  console.warn("[inject-font-preload] </head> no encontrado.");
  process.exit(0);
}
html = html.replace(headClose, preloads + "\n" + headClose);

writeFileSync(indexPath, html);
console.log("[inject-font-preload] Preload de", ttfFiles.length, "fuente(s) inyectado.");
