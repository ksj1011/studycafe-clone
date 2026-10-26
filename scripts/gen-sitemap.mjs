// sitemap.xml / robots.txt 생성: 빌드 전에 자동 실행(prebuild)되어 lastmod가 항상 배포일로 갱신된다.
import { writeFileSync } from "node:fs";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ksj1011.github.io/studycafe-clone").replace(/\/$/, "");
const today = new Date().toISOString().slice(0, 10);

writeFileSync("public/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`);
writeFileSync("public/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`sitemap.xml, robots.txt (${siteUrl}, lastmod ${today})`);
