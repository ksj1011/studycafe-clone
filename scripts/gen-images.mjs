// 자리표시자용 오리지널 SVG 일러스트 생성: node scripts/gen-images.mjs
import { writeFileSync } from "node:fs";
const scenes = {
  hero:    { bg: ["#57534e", "#1c1917"], desk: "#a8856a", chair: "#292524", accent: "#d6d3d1", plant: true, lamp: true },
  open:    { bg: ["#78716c", "#292524"], desk: "#b08968", chair: "#1c1917", accent: "#e7e5e4", plant: false, lamp: true },
  monitor: { bg: ["#64748b", "#1e293b"], desk: "#cbd5e1", chair: "#0f172a", accent: "#38bdf8", plant: false, lamp: false, screens: 2 },
  booth:   { bg: ["#047857", "#022c22"], desk: "#a16207", chair: "#064e3b", accent: "#86efac", plant: true, lamp: true },
  sofa:    { bg: ["#d97706", "#78350f"], desk: "#fde68a", chair: "#7c2d12", accent: "#fdba74", plant: true, lamp: true, sofa: true },
  stand:   { bg: ["#0284c7", "#0c4a6e"], desk: "#e0f2fe", chair: "#075985", accent: "#7dd3fc", plant: false, lamp: false },
};
const svg = (n, s) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 800" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${s.bg[0]}"/><stop offset="1" stop-color="${s.bg[1]}"/></linearGradient></defs>
<rect width="1280" height="800" fill="url(#g)"/>
<rect y="560" width="1280" height="240" fill="#000" opacity=".25"/>
<rect x="0" y="80" width="260" height="360" rx="6" fill="${s.accent}" opacity=".18"/>
${s.lamp ? `<circle cx="1020" cy="150" r="90" fill="#fff7d6" opacity=".25"/><path d="M1020 0v110" stroke="#000" opacity=".4" stroke-width="4"/><path d="M980 130h80l-14 -28h-52z" fill="#111" opacity=".6"/>` : ""}
${s.sofa ? `<rect x="120" y="430" width="520" height="150" rx="40" fill="${s.chair}"/><rect x="150" y="380" width="460" height="90" rx="30" fill="${s.chair}" opacity=".85"/>` : ""}
<rect x="560" y="470" width="640" height="34" rx="10" fill="${s.desk}"/>
<rect x="600" y="504" width="22" height="200" fill="#000" opacity=".5"/><rect x="1138" y="504" width="22" height="200" fill="#000" opacity=".5"/>
${[...Array(s.screens ?? 1)].map((_, i) => `<rect x="${760 + i * 200}" y="330" width="170" height="110" rx="8" fill="#0b1220"/><rect x="${770 + i * 200}" y="340" width="150" height="88" rx="4" fill="${s.accent}" opacity=".55"/><rect x="${838 + i * 200}" y="440" width="14" height="30" fill="#111"/>`).join("")}
<rect x="420" y="520" width="150" height="26" rx="12" fill="${s.chair}"/><rect x="430" y="380" width="130" height="150" rx="24" fill="${s.chair}"/><rect x="488" y="546" width="14" height="150" fill="#000" opacity=".5"/>
${s.plant ? `<rect x="90" y="610" width="90" height="110" rx="12" fill="#44403c"/>${[-40, -15, 10, 35].map((d, i) => `<ellipse cx="${135 + d}" cy="${560 - i * 18}" rx="22" ry="78" fill="#16a34a" transform="rotate(${d} ${135 + d} 600)"/>`).join("")}` : ""}
</svg>`;
for (const [n, s] of Object.entries(scenes)) writeFileSync(`public/images/${n}.svg`, svg(n, s));
console.log(Object.keys(scenes).join(", "));
