// 파비콘/앱 아이콘 생성: node scripts/gen-icons.mjs
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const font = "Pretendard, 'Apple SD Gothic Neo', sans-serif";
const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
<rect width="512" height="512" rx="112" fill="#14171c"/>
<text x="256" y="352" text-anchor="middle" font-family="${font}" font-size="300" font-weight="800" fill="#f6e7cc">한</text>
</svg>`);

const png = (size) => sharp(svg, { density: 300 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

writeFileSync("app/icon.png", await png(512));
writeFileSync("app/apple-icon.png", await png(180));

// favicon.ico: PNG를 담은 ICO (16/32/48)
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(png));
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(1, 2); // type = icon
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((s, i) => {
  const e = 6 + 16 * i;
  header.writeUInt8(s, e); header.writeUInt8(s, e + 1);
  header.writeUInt16LE(1, e + 4); header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(images[i].length, e + 8); header.writeUInt32LE(offset, e + 12);
  offset += images[i].length;
});
writeFileSync("app/favicon.ico", Buffer.concat([header, ...images]));
console.log("icon.png, apple-icon.png, favicon.ico");
