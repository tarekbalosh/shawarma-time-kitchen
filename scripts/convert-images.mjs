#!/usr/bin/env node
/**
 * convert-images.mjs
 * ──────────────────
 * Batch-converts every .jpg / .jpeg / .png inside a source directory into
 * both WebP AND AVIF format using the `sharp` library (no native binary
 * required – ships as a pre-built Node.js addon).
 *
 * Usage
 * ─────
 *   # 1. Install sharp once (if not already in devDeps):
 *   npm install --save-dev sharp
 *
 *   # 2. Run from the project root:
 *   node scripts/convert-images.mjs
 *
 *   # 3. Or pass a custom source/output directory:
 *   node scripts/convert-images.mjs --src public/images --out public/images/optimized
 *
 *   # 4. Dry-run (lists files without writing):
 *   node scripts/convert-images.mjs --dry
 *
 * Output
 * ──────
 *   For each source file the script writes TWO files next to the original:
 *     public/images/f1.png  →  public/images/f1.webp
 *                           →  public/images/f1.avif
 *
 *   The originals are NEVER deleted.  Once converted, update your <Image>
 *   src props to point at the .webp or .avif files (Next.js will serve the
 *   correct format automatically via <picture> when you use next/image).
 *
 * Compression presets (tweak to taste)
 * ──────────────────────────────────────
 *   WebP:  quality 82, lossless:false  → best for photos & food images
 *   AVIF:  quality 60, effort 4        → ~30-50 % smaller than WebP; slower encode
 */

import path   from 'node:path'
import fs     from 'node:fs'
import { createRequire } from 'node:module'

// ── Config ─────────────────────────────────────────────────────────────────

const DEFAULT_SRC_DIR = 'public/images'
const DEFAULT_OUT_DIR = null          // null = write next to original

// WebP encoding options
const WEBP_OPTIONS = {
  quality:   82,
  lossless:  false,
  smartSubsample: true,
}

// AVIF encoding options
const AVIF_OPTIONS = {
  quality: 60,
  effort:  4,              // 0 (fast) – 9 (slow). 4 = good balance
  chromaSubsampling: '4:2:0',
}

// Source extensions to process (case-insensitive)
const SOURCE_EXTS = new Set(['.jpg', '.jpeg', '.png'])

// ── Arg parsing ────────────────────────────────────────────────────────────

function parseArgs() {
  const argv = process.argv.slice(2)
  const args = { src: DEFAULT_SRC_DIR, out: DEFAULT_OUT_DIR, dry: false }

  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--src' && argv[i + 1]) args.src = argv[++i]
    if (argv[i] === '--out' && argv[i + 1]) args.out = argv[++i]
    if (argv[i] === '--dry') args.dry = true
  }

  return args
}

// ── Sharp loader (lazy, so missing sharp gives a nice message) ─────────────

function loadSharp() {
  try {
    const require = createRequire(import.meta.url)
    return require('sharp')
  } catch {
    console.error(`
  ✖  Could not load 'sharp'.
     Run:  npm install --save-dev sharp
     Then re-run this script.
`)
    process.exit(1)
  }
}

// ── File walking ───────────────────────────────────────────────────────────

function collectImages(dir) {
  const results = []

  if (!fs.existsSync(dir)) {
    console.error(`✖  Source directory not found: ${path.resolve(dir)}`)
    process.exit(1)
  }

  function walk(current) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name)
      if (entry.isDirectory()) {
        walk(full)
      } else if (SOURCE_EXTS.has(path.extname(entry.name).toLowerCase())) {
        results.push(full)
      }
    }
  }

  walk(dir)
  return results
}

// ── Conversion ─────────────────────────────────────────────────────────────

async function convertFile(sharp, srcPath, outDir, dry) {
  const dir    = outDir ?? path.dirname(srcPath)
  const base   = path.basename(srcPath, path.extname(srcPath))
  const webpOut = path.join(dir, `${base}.webp`)
  const avifOut = path.join(dir, `${base}.avif`)

  const srcStat = fs.statSync(srcPath)

  if (dry) {
    console.log(`  [dry] ${path.relative(process.cwd(), srcPath)} → .webp + .avif`)
    return
  }

  // Ensure output dir exists
  fs.mkdirSync(dir, { recursive: true })

  const img = sharp(srcPath)

  // WebP
  await img.clone().webp(WEBP_OPTIONS).toFile(webpOut)
  const webpSize = fs.statSync(webpOut).size
  const webpSaving = (((srcStat.size - webpSize) / srcStat.size) * 100).toFixed(1)

  // AVIF
  await img.clone().avif(AVIF_OPTIONS).toFile(avifOut)
  const avifSize = fs.statSync(avifOut).size
  const avifSaving = (((srcStat.size - avifSize) / srcStat.size) * 100).toFixed(1)

  const rel = path.relative(process.cwd(), srcPath)
  const kb  = (n) => `${(n / 1024).toFixed(1)} KB`

  console.log(
    `  ✔  ${rel}\n` +
    `       src  : ${kb(srcStat.size)}\n` +
    `       webp : ${kb(webpSize)} (${webpSaving}% smaller)\n` +
    `       avif : ${kb(avifSize)} (${avifSaving}% smaller)\n`
  )
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main() {
  const args  = parseArgs()
  const sharp = loadSharp()

  console.log(`\n🚀 Shawarma Time – Image Optimiser`)
  console.log(`   Source : ${path.resolve(args.src)}`)
  console.log(`   Output : ${args.out ? path.resolve(args.out) : 'next to original'}`)
  if (args.dry) console.log('   Mode   : DRY RUN (no files written)\n')
  else          console.log()

  const files = collectImages(args.src)

  if (files.length === 0) {
    console.log('  No .jpg / .jpeg / .png files found.')
    return
  }

  console.log(`  Found ${files.length} image(s) to convert:\n`)

  let ok = 0, fail = 0
  for (const file of files) {
    try {
      await convertFile(sharp, file, args.out, args.dry)
      ok++
    } catch (err) {
      console.error(`  ✖  Failed: ${file}\n     ${err.message}\n`)
      fail++
    }
  }

  console.log('─'.repeat(50))
  console.log(`  Done.  ${ok} converted${fail ? `, ${fail} failed` : ''}.`)
  if (!args.dry) {
    console.log()
    console.log('  Next step: update your <Image> src props to use the')
    console.log('  new .webp or .avif paths, e.g.:')
    console.log('    src="/images/f1.webp"')
    console.log()
    console.log('  Or use next/image which serves the correct format')
    console.log('  automatically from your original src.\n')
  }
}

main().catch((err) => {
  console.error('Unexpected error:', err)
  process.exit(1)
})
