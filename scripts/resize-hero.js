/**
 * Genera hero-mobile.webp a partir de hero.webp para optimizar LCP en móvil.
 * Se ejecuta antes del build (prebuild). Si hero.webp no existe o sharp no está instalado, no falla.
 */
import { readFileSync, existsSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");
const heroPath = join(publicDir, "hero.webp");
const heroMobilePath = join(publicDir, "hero-mobile.webp");
const heroDesktopPath = join(publicDir, "hero-desktop.webp");

const MOBILE_MAX_WIDTH = 600;
const DESKTOP_MAX_WIDTH = 900;
const WEBP_QUALITY = 82;

if (!existsSync(heroPath)) {
  console.warn("[resize-hero] public/hero.webp no encontrado; se omite generación.");
  process.exit(0);
}

async function run() {
  try {
    const sharp = (await import("sharp")).default;
    const buffer = readFileSync(heroPath);
    const image = sharp(buffer);
    const meta = await image.metadata();
    const width = meta.width || 650;

    if (width <= MOBILE_MAX_WIDTH) {
      await sharp(buffer).webp({ quality: WEBP_QUALITY }).toFile(heroMobilePath);
      console.log("[resize-hero] hero-mobile.webp generado (mismo tamaño)");
    } else {
      await sharp(buffer)
        .resize(MOBILE_MAX_WIDTH, null, { withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(heroMobilePath);
      console.log("[resize-hero] hero-mobile.webp generado (" + MOBILE_MAX_WIDTH + "px)");
    }

    if (width > DESKTOP_MAX_WIDTH) {
      await sharp(buffer)
        .resize(DESKTOP_MAX_WIDTH, null, { withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(heroDesktopPath);
      console.log("[resize-hero] hero-desktop.webp generado (" + DESKTOP_MAX_WIDTH + "px)");
    } else {
      await sharp(buffer).webp({ quality: WEBP_QUALITY }).toFile(heroDesktopPath);
      console.log("[resize-hero] hero-desktop.webp generado (mismo tamaño)");
    }
  } catch (err) {
    if (err.code === "ERR_MODULE_NOT_FOUND" || err.message?.includes("sharp")) {
      console.warn("[resize-hero] sharp no instalado. Copiando hero.webp.");
      writeFileSync(heroMobilePath, readFileSync(heroPath));
      writeFileSync(heroDesktopPath, readFileSync(heroPath));
      process.exit(0);
    }
    throw err;
  }
}

run();
