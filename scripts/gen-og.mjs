// OG 이미지 생성: node scripts/gen-og.mjs (히어로 사진을 바꾼 뒤 다시 실행하세요)
import sharp from "sharp";

const font = "Pretendard, 'Apple SD Gothic Neo', sans-serif";
const text = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<rect width="1200" height="630" fill="#000" opacity=".55"/>
<text x="600" y="230" text-anchor="middle" font-family="${font}" font-size="30" fill="#f6e7cc" letter-spacing="2">강남 텐카페 예약·방문 안내</text>
<text x="600" y="330" text-anchor="middle" font-family="${font}" font-size="64" font-weight="800" fill="#fff">원하는 분위기에 맞춰,</text>
<text x="600" y="410" text-anchor="middle" font-family="${font}" font-size="64" font-weight="800" fill="#fff">한실장이 안내합니다.</text>
<text x="600" y="500" text-anchor="middle" font-family="${font}" font-size="40" font-weight="600" fill="#f6e7cc">한실장  010-5443-3976</text>
</svg>`);

await sharp("public/images/01_main.svg", { density: 150 })
  .resize(1200, 630, { fit: "cover", position: "attention" })
  .composite([{ input: text }])
  .png({ compressionLevel: 9 })
  .toFile("public/og.png");
