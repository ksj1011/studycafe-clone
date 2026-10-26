// OG(공유 미리보기) 이미지 생성: node scripts/gen-og.mjs
// 구성: 메인 사진(01) + 한실장 + 연락처. 메인 사진을 바꾼 뒤 다시 실행하세요.
import sharp from "sharp";

const font = "Pretendard, 'Apple SD Gothic Neo', sans-serif";
const text = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<rect width="1200" height="630" fill="#000" opacity=".55"/>
<text x="600" y="330" text-anchor="middle" font-family="${font}" font-size="132" font-weight="800" fill="#fff">한실장</text>
<text x="600" y="440" text-anchor="middle" font-family="${font}" font-size="64" font-weight="600" fill="#f6e7cc">010-5443-3976</text>
</svg>`);

await sharp("public/images/01_main.webp")
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .composite([{ input: text }])
  .png({ palette: true, quality: 85, compressionLevel: 9 })
  .toFile("public/og.png");
