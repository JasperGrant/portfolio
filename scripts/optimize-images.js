// One-off script to resize/compress oversized source images in place.
// Run with: node scripts/optimize-images.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMG_DIR = path.join(__dirname, '..', 'src', 'img');

// Card/thumbnail photos rendered at ~h-56 inside a max 3-col grid (max-w-6xl) -> 900px wide is plenty even at 2x DPI.
const CARD_MAX_WIDTH = 900;
// Small square icons (nav logo, footer social icons).
const ICON_MAX_SIZE = 128;
// Homepage headshot, displayed as a 144px (w-36/h-36) circle -> cropped to a square so aspect ratio can't distort.
const HEADSHOT_SIZE = 320;
// Full-bleed CSS background image.
const BACKGROUND_MAX_WIDTH = 1920;

const icons = ['Logo.png', 'GitHubLogo.png', 'LinkedinLogo.png'];
const headshots = ['Jasper.jpg'];
const backgrounds = ['Ames.jpg'];

async function optimize(file) {
    const filePath = path.join(IMG_DIR, file);
    const ext = path.extname(file).toLowerCase();
    const before = fs.statSync(filePath).size;
    const buffer = fs.readFileSync(filePath);

    let pipeline = sharp(buffer);

    if (icons.includes(file)) {
        pipeline = pipeline.resize({ width: ICON_MAX_SIZE, height: ICON_MAX_SIZE, fit: 'inside', withoutEnlargement: true });
    } else if (headshots.includes(file)) {
        pipeline = pipeline.resize({ width: HEADSHOT_SIZE, height: HEADSHOT_SIZE, fit: 'cover', withoutEnlargement: true });
    } else if (backgrounds.includes(file)) {
        pipeline = pipeline.resize({ width: BACKGROUND_MAX_WIDTH, withoutEnlargement: true });
    } else {
        pipeline = pipeline.resize({ width: CARD_MAX_WIDTH, withoutEnlargement: true });
    }

    if (ext === '.png') {
        pipeline = pipeline.png({ quality: 78, compressionLevel: 9, palette: true });
    } else if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 78, mozjpeg: true });
    }

    const output = await pipeline.toBuffer();
    if (output.length < before) {
        fs.writeFileSync(filePath, output);
        console.log(`${file}: ${(before / 1024).toFixed(0)}KB -> ${(output.length / 1024).toFixed(0)}KB`);
    } else {
        console.log(`${file}: skipped (already optimal, ${(before / 1024).toFixed(0)}KB)`);
    }
}

async function main() {
    const files = fs.readdirSync(IMG_DIR).filter(f => /\.(png|jpe?g)$/i.test(f));
    for (const file of files) {
        await optimize(file);
    }
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
