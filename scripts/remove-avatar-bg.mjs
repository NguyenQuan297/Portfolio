import fs from "node:fs";
import sharp from "sharp";

const inputPath = "public/hero-avatar.png";
const outputPath = "public/hero-avatar-transparent.png";

// Remove near-white background by turning it into alpha=0.
// Tweak thresholds if halo still appears.
const thresholdStart = 245; // luminance where transparency begins
const thresholdEnd = 255; // luminance fully transparent

const clamp01 = (v) => Math.max(0, Math.min(1, v));

if (!fs.existsSync(inputPath)) {
  console.error(`Missing input image: ${inputPath}`);
  process.exit(1);
}

const img = sharp(inputPath);

const { data, info } = await img
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

// info.channels expected: 4 after ensureAlpha()
const channels = info.channels;
if (channels < 4) {
  console.error(`Expected 4 channels, got ${channels}`);
  process.exit(1);
}

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = data[i + 3];

  // If pixel already transparent, keep it.
  if (a === 0) continue;

  // Relative luminance approximation (sRGB)
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Compute alpha multiplier: 1 keeps, 0 removes (for near-white pixels)
  const t = (lum - thresholdStart) / (thresholdEnd - thresholdStart);
  const keep = 1 - clamp01(t);

  // Use keep to scale alpha for soft edges
  data[i + 3] = Math.round(a * keep);
}

await sharp(data, { raw: { width: info.width, height: info.height, channels } })
  .png()
  .toFile(outputPath);

console.log(`Wrote: ${outputPath}`);

