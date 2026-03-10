/**
 * Redimensiona logo e iconos para reducir peso (Lighthouse: "Mejora la entrega de imágenes").
 * Logo: máx 360px ancho (2x para 180px). Iconos InsightSection: máx 108px (2x para 54px).
 * Se ejecuta en prebuild. Sobrescribe los archivos en src/assets.
 */
import { existsSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const assetsDir = join(root, "src", "assets", "img");
const variosDir = join(assetsDir, "varios");

const ASSETS = [
  { path: join(assetsDir, "logo.webp"), maxWidth: 360 },
  { path: join(variosDir, "reglas.webp"), maxSize: 108 },
  { path: join(variosDir, "metricas.webp"), maxSize: 108 },
  { path: join(variosDir, "estructura.webp"), maxSize: 108 },
];

const WEBP_QUALITY = 82;

async function run() {
  try {
    const sharp = (await import("sharp")).default;
    for (const asset of ASSETS) {
      if (!existsSync(asset.path)) continue;
      const buffer = readFileSync(asset.path);
      const image = sharp(buffer);
      const meta = await image.metadata();
      const w = meta.width || 0;
      const maxW = asset.maxWidth ?? 9999;
      const maxS = asset.maxSize ?? 9999;
      if (asset.maxWidth && w <= maxW) continue;
      if (asset.maxSize && w <= maxS) continue;
      if (asset.maxWidth) {
        await sharp(buffer)
          .resize(maxW, null, { withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY })
          .toFile(asset.path);
      } else {
        await sharp(buffer)
          .resize(maxS, maxS, { fit: "inside", withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY })
          .toFile(asset.path);
      }
      console.log("[resize-assets] Redimensionado:", asset.path.replace(root, ""));
    }
  } catch (err) {
    if (err.code === "ERR_MODULE_NOT_FOUND" || err.message?.includes("sharp")) {
      console.warn("[resize-assets] sharp no instalado. Omitiendo redimensionado de assets.");
      return;
    }
    throw err;
  }
}

run();
