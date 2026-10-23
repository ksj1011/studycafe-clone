// SNS 공유용 OG 이미지(1200x630 PNG) 생성: node scripts/gen-og.mjs
import sharp from "sharp";

const text = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<rect width="1200" height="630" fill="#000" opacity=".5"/>
<text x="600" y="250" text-anchor="middle" font-family="Pretendard, 'Apple SD Gothic Neo', sans-serif" font-size="30" fill="#fff" opacity=".85" letter-spacing="6">STUDY LOUNGE</text>
<text x="600" y="340" text-anchor="middle" font-family="Pretendard, 'Apple SD Gothic Neo', sans-serif" font-size="68" font-weight="800" fill="#fff">집중하기 좋은</text>
<text x="600" y="425" text-anchor="middle" font-family="Pretendard, 'Apple SD Gothic Neo', sans-serif" font-size="68" font-weight="800" fill="#fff">나만의 라운지</text>
<text x="600" y="500" text-anchor="middle" font-family="Pretendard, 'Apple SD Gothic Neo', sans-serif" font-size="26" fill="#ffc61a">라운지 패스 · 서울 7개 지점</text>
</svg>`);

await sharp("public/images/hero.svg", { density: 150 })
  .resize(1200, 630, { fit: "cover", position: "attention" })
  .composite([{ input: text }])
  .png({ compressionLevel: 9 })
  .toFile("public/og.png");
