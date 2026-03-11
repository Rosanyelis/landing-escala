/**
 * Genera hero-mobile.webp, hero-desktop.webp y variantes JPG para Safari sin WebP.
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
const heroMobileJpgPath = join(publicDir, "hero-mobile.jpg");
const heroDesktopJpgPath = join(publicDir, "hero-desktop.jpg");

const MOBILE_MAX_WIDTH = 600;
const DESKTOP_MAX_WIDTH = 900;
const WEBP_QUALITY = 82;
const JPEG_QUALITY = 85;

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
      await sharp(buffer).jpeg({ quality: JPEG_QUALITY }).toFile(heroMobileJpgPath);
      console.log("[resize-hero] hero-mobile.webp y hero-mobile.jpg generados (mismo tamaño)");
    } else {
      await sharp(buffer)
        .resize(MOBILE_MAX_WIDTH, null, { withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(heroMobilePath);
      await sharp(buffer)
        .resize(MOBILE_MAX_WIDTH, null, { withoutEnlargement: true })
        .jpeg({ quality: JPEG_QUALITY })
        .toFile(heroMobileJpgPath);
      console.log("[resize-hero] hero-mobile.webp y hero-mobile.jpg generados (" + MOBILE_MAX_WIDTH + "px)");
    }

    if (width > DESKTOP_MAX_WIDTH) {
      await sharp(buffer)
        .resize(DESKTOP_MAX_WIDTH, null, { withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(heroDesktopPath);
      await sharp(buffer)
        .resize(DESKTOP_MAX_WIDTH, null, { withoutEnlargement: true })
        .jpeg({ quality: JPEG_QUALITY })
        .toFile(heroDesktopJpgPath);
      console.log("[resize-hero] hero-desktop.webp y hero-desktop.jpg generados (" + DESKTOP_MAX_WIDTH + "px)");
    } else {
      await sharp(buffer).webp({ quality: WEBP_QUALITY }).toFile(heroDesktopPath);
      await sharp(buffer).jpeg({ quality: JPEG_QUALITY }).toFile(heroDesktopJpgPath);
      console.log("[resize-hero] hero-desktop.webp y hero-desktop.jpg generados (mismo tamaño)");
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
