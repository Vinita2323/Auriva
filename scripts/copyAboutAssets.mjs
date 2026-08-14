import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = 'C:\\Users\\admin\\.gemini\\antigravity-ide\\brain\\4c5ae5db-0739-41b2-8453-fae278a4bfe4';
const destDir = path.resolve(__dirname, '../src/assets');

const files = [
  { from: 'about_hero_bowl_1786706730446.jpg', to: 'about_hero_bowl.jpg' },
  { from: 'about_harvest_lotus_1786707081102.jpg', to: 'about_harvest_lotus.jpg' },
  { from: 'about_why_choose_pouches_1786707110675.jpg', to: 'about_why_choose_pouches.jpg' },
  { from: 'about_cta_bowl_1786707222215.jpg', to: 'about_cta_bowl.jpg' }
];

files.forEach(({ from, to }) => {
  const fromPath = path.join(srcDir, from);
  const toPath = path.join(destDir, to);
  if (fs.existsSync(fromPath)) {
    fs.copyFileSync(fromPath, toPath);
    console.log(`Copied ${from} to ${to}`);
  } else {
    console.warn(`File not found: ${fromPath}`);
  }
});
