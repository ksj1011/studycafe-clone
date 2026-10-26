// 샘플 이미지 생성: node scripts/gen-images.mjs
// 실제 매장 사진(webp)을 public/images에 같은 이름으로 넣고 lib/content.ts의 IMG_EXT만 "webp"로 바꾸세요.
import { writeFileSync } from "node:fs";

const W = 1200, H = 900;
const glow = (x, y, r, c = "#ffd9a0") => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" opacity=".28"/><circle cx="${x}" cy="${y}" r="${r * 0.28}" fill="#fff3d6"/>`;
const chandelier = (x, y, s = 1, c) => `<path d="M${x} 0V${y}" stroke="#000" opacity=".4" stroke-width="3"/>${glow(x, y + 20 * s, 70 * s, c)}<path d="M${x - 40 * s} ${y + 10 * s}h${80 * s}l${-12 * s} ${30 * s}h${-56 * s}z" fill="#f8e3b0" opacity=".9"/>`;
const sofa = (x, y, w, h, c, back = true) => `${back ? `<rect x="${x}" y="${y - h * 0.55}" width="${w}" height="${h * 0.7}" rx="${h * 0.25}" fill="${c}"/>` : ""}<rect x="${x - 14}" y="${y}" width="${w + 28}" height="${h}" rx="${h * 0.3}" fill="${c}"/><rect x="${x - 14}" y="${y + h * 0.7}" width="${w + 28}" height="${h * 0.3}" fill="#000" opacity=".25"/>`;
const table = (x, y, w, c, top = "#222") => `<rect x="${x}" y="${y}" width="${w}" height="26" rx="8" fill="${top}"/><rect x="${x + 30}" y="${y + 26}" width="18" height="110" fill="#000" opacity=".45"/><rect x="${x + w - 48}" y="${y + 26}" width="18" height="110" fill="#000" opacity=".45"/>${[0.2, 0.4, 0.6, 0.8].map((t) => `<rect x="${x + w * t}" y="${y - 28}" width="16" height="30" rx="4" fill="#cfe8e4" opacity=".75"/>`).join("")}`;
const plant = (x, y) => `<rect x="${x}" y="${y + 90}" width="80" height="110" rx="12" fill="#3f3a35"/>${[-45, -20, 5, 30, 55].map((d, i) => `<ellipse cx="${x + 40 + d}" cy="${y + 20 - (i % 2) * 24}" rx="24" ry="84" fill="#15803d" transform="rotate(${d} ${x + 40 + d} ${y + 100})"/>`).join("")}`;

const scenes = {
  "01_main": { top: "#3b2a20", bot: "#150e0a", body: `
    ${[120, 800].map((x) => `<rect x="${x}" y="110" width="170" height="380" rx="6" fill="#9db4c8" opacity=".55"/><path d="M${x + 85} 110V490M${x} 300H${x + 170}" stroke="#2a1d15" stroke-width="8"/>`).join("")}
    <rect x="440" y="130" width="320" height="360" fill="#241810"/>${[...Array(18)].map((_, i) => `<rect x="${452 + (i % 9) * 34}" y="${150 + Math.floor(i / 9) * 150}" width="22" height="${70 + (i * 13) % 50}" fill="${["#8b3a3a", "#c9a45c", "#3d5a6c", "#d9d2c3"][i % 4]}"/>`).join("")}
    ${chandelier(300, 70, 1.1)}${chandelier(900, 70, 1.1)}
    ${sofa(60, 520, 1080, 110, "#0e0e10")}${table(300, 660, 600, "#111", "#1a1a1d")}` },
  "02_room_cream": { top: "#e6dccd", bot: "#b9a98f", body: `
    <path d="M0 300Q420 120 760 330T1200 240V0H0z" fill="#fff" opacity=".7"/><path d="M0 300Q420 120 760 330T1200 240" stroke="#fff" stroke-width="12" fill="none" opacity=".9"/>
    ${sofa(180, 520, 760, 120, "#efe3cf")}${sofa(820, 500, 300, 130, "#e6d8bf")}
    <rect x="340" y="450" width="70" height="70" rx="12" fill="#f08a2c"/>${table(360, 690, 480, "#fff", "#cbd5d8")}${plant(1000, 280)}` },
  "03_seating": { top: "#c2b39a", bot: "#7f7058", body: `
    ${[80, 360, 640, 920].map((x) => `<rect x="${x}" y="90" width="200" height="330" fill="#d6c8b0" opacity=".7"/><rect x="${x + 14}" y="104" width="172" height="302" fill="none" stroke="#a89878" stroke-width="4"/>`).join("")}
    ${chandelier(400, 60, 0.9)}${chandelier(800, 60, 0.9)}
    ${sofa(100, 480, 1000, 120, "#5d5262")}${sofa(60, 640, 120, 160, "#5d5262", false)}${sofa(1020, 640, 120, 160, "#5d5262", false)}
    <rect x="250" y="640" width="700" height="40" rx="10" fill="#f1efe9"/><path d="M260 650l680 0" stroke="#bbb" stroke-width="3"/>${[0.15, 0.35, 0.55, 0.75].map((t) => `<rect x="${250 + 700 * t}" y="610" width="16" height="30" rx="4" fill="#cfe8e4" opacity=".8"/>`).join("")}
    <rect x="300" y="470" width="60" height="60" rx="10" fill="#c9962f"/><rect x="840" y="470" width="60" height="60" rx="10" fill="#c9962f"/>` },
  "04_room_blue": { top: "#d4cfa5", bot: "#8a8466", body: `
    ${[60, 880].map((x) => `<rect x="${x}" y="100" width="260" height="520" fill="#4f8fa8" opacity=".7"/>`).join("")}<rect x="460" y="120" width="280" height="440" fill="#e8dfae"/>
    ${chandelier(600, 60, 1.4, "#fff3d6")}
    ${sofa(100, 560, 330, 130, "#58698f")}${sofa(770, 560, 330, 130, "#58698f")}${sofa(420, 420, 360, 100, "#58698f")}
    ${table(420, 700, 360, "#222", "#2a2a2e")}` },
  "05_room_green": { top: "#d8c3ac", bot: "#9a7e63", body: `
    ${chandelier(900, 50, 0.8)}<rect x="60" y="120" width="260" height="360" fill="#e4d4bf" opacity=".6"/>
    ${sofa(120, 500, 760, 130, "#9a6a4b")}${sofa(780, 560, 340, 130, "#a8764f")}
    ${[220, 330, 640].map((x) => `<rect x="${x}" y="450" width="64" height="64" rx="12" fill="#2f6b3a"/>`).join("")}
    ${table(360, 700, 460, "#fff", "#e9e1d3")}${plant(1060, 330)}` },
  "06_hall": { top: "#b46a52", bot: "#6f3f31", body: `
    ${[...Array(10)].map((_, r) => [...Array(14)].map((_, c) => `<rect x="${c * 86 + (r % 2) * 43}" y="${r * 48}" width="82" height="44" fill="#fff" opacity="${0.05 + ((r + c) % 3) * 0.03}"/>`).join("")).join("")}
    <rect x="760" y="150" width="260" height="520" fill="#1d1d1f"/><rect x="940" y="400" width="10" height="70" fill="#d6b56a"/>
    ${plant(130, 200)}<rect x="0" y="720" width="1200" height="180" fill="#2a2a2c"/>${[...Array(12)].map((_, i) => `<path d="M${i * 100} 720L${i * 100 - 40} 900" stroke="#555" stroke-width="3"/>`).join("")}` },
};

for (const [name, s] of Object.entries(scenes)) {
  writeFileSync(`public/images/${name}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${s.top}"/><stop offset="1" stop-color="${s.bot}"/></linearGradient></defs>
<rect width="${W}" height="${H}" fill="url(#g)"/>
${s.body}
<rect y="760" width="${W}" height="140" fill="#000" opacity=".28"/>
<text x="${W - 36}" y="${H - 30}" text-anchor="end" font-family="sans-serif" font-size="26" fill="#fff" opacity=".6">샘플 이미지</text>
</svg>`);
}
console.log(Object.keys(scenes).join(", "));
