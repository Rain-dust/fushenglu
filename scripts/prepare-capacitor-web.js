const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const webDir = path.join(rootDir, "www");
const entries = [
  "index.html",
  "app.js",
  "styles.css",
  "manifest.webmanifest",
  "sw.js",
  "assets",
];

function assertInsideProject(targetPath) {
  const relative = path.relative(rootDir, targetPath);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Refusing to write outside project: ${targetPath}`);
  }
}

function copyEntry(source, target) {
  const stat = fs.statSync(source);

  if (stat.isDirectory()) {
    fs.mkdirSync(target, { recursive: true });
    for (const child of fs.readdirSync(source)) {
      copyEntry(path.join(source, child), path.join(target, child));
    }
    return;
  }

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

assertInsideProject(webDir);
fs.rmSync(webDir, { recursive: true, force: true });
fs.mkdirSync(webDir, { recursive: true });

for (const entry of entries) {
  const source = path.join(rootDir, entry);
  if (!fs.existsSync(source)) {
    throw new Error(`Missing required web asset: ${entry}`);
  }
  copyEntry(source, path.join(webDir, entry));
}

console.log(`Prepared Capacitor web assets: ${webDir}`);
