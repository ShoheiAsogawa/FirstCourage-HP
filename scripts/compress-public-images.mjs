/**
 * Re-encode images under ./public with sharp.
 * PNG: zlib level 9, pick smaller of adaptive/non-adaptive filtering;
 *       optional palette quantisation only for opaque images above a size threshold.
 * JPEG: mozjpeg recompress with fixed quality (slightly lossy).
 */
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public");
const PNG_LOSSLESS_MIN_BYTES = 12_000;
const JPEG_MIN_BYTES = 4_000;
const PALETTE_TRIES_OPAQUE = [
  { palette: true, quality: 95, effort: 10, compressionLevel: 9, dither: 1.0 },
  { palette: true, quality: 90, effort: 10, compressionLevel: 9, dither: 1.0 },
];
const JPEG_QUALITY = 84;
const JPEG_MIN_SAVINGS_RATIO = 0.03;

const extsOk = new Set([".png", ".jpg", ".jpeg"]);

async function walk(dir, acc = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

async function compressPng(buf) {
  if (buf.length < PNG_LOSSLESS_MIN_BYTES) return buf;
  const meta = await sharp(buf).metadata();

  /** @type {Promise<Buffer>[]} */
  const candidates = [];

  candidates.push(sharp(buf).png({ compressionLevel: 9, adaptiveFiltering: false }).toBuffer());
  candidates.push(sharp(buf).png({ compressionLevel: 9, adaptiveFiltering: true }).toBuffer());

  const opaque = !meta.hasAlpha;
  const huge = buf.length >= 800_000;
  if (opaque && huge) {
    for (const opts of PALETTE_TRIES_OPAQUE) {
      candidates.push(sharp(buf).png(opts).toBuffer());
    }
  }

  let best = buf;
  for (const promise of candidates) {
    try {
      const out = await promise;
      if (out.length < best.length) best = out;
    } catch {
      /* skip broken variant */
    }
  }

  return best;
}

async function compressJpeg(filepath, buf) {
  if (buf.length < JPEG_MIN_BYTES) return buf;
  try {
    const out = await sharp(buf).jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
    if (out.length < buf.length * (1 - JPEG_MIN_SAVINGS_RATIO)) return out;
    return buf;
  } catch {
    return buf;
  }
}

async function processFile(filepath) {
  const ext = path.extname(filepath).toLowerCase();
  if (!extsOk.has(ext)) return null;

  const buf = await fs.readFile(filepath);
  const orig = buf.length;

  /** @type {Buffer} */
  let next;
  if (ext === ".png") next = await compressPng(buf);
  else next = await compressJpeg(filepath, buf);

  if (next.length >= orig) return null;
  const pct = (((orig - next.length) / orig) * 100).toFixed(1);
  return { filepath, orig, next, pct };
}

const files = await walk(ROOT);
const imageFiles = files.filter((f) => extsOk.has(path.extname(f).toLowerCase()));

let saved = 0;
let touched = 0;

for (const f of imageFiles) {
  const res = await processFile(f).catch(() => null);
  if (!res) continue;
  await fs.writeFile(res.filepath, res.next);
  const rel = path.relative(process.cwd(), res.filepath).replace(/\\/g, "/");
  console.log(`${rel}: ${res.orig} -> ${res.next.length} (-${res.pct}%)`);
  saved += res.orig - res.next.length;
  touched += 1;
}

console.log(`\nUpdated ${touched} file(s), total bytes saved ~${saved} (${(saved / (1024 * 1024)).toFixed(2)} MiB)`);
