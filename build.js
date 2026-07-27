const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'src');
const outputDir = path.join(__dirname, 'dist');

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });
fs.cpSync(sourceDir, outputDir, { recursive: true });

console.log('Built static site to dist/');