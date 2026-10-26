# 한실장 — 예약·방문 안내 홈페이지

Next.js(App Router) + Tailwind로 만든 단일 페이지 사이트입니다. 기획서(2026.10.26) 구성을 따릅니다.

## 실행

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # 빌드 (sitemap.xml / robots.txt 자동 생성)
```

## 내용 수정

문구, 연락처, 메뉴, FAQ는 모두 `lib/content.ts` 한 곳에서 바꿉니다.

## 사진 교체

현재 사진은 샘플 일러스트입니다. 사용 권한을 확인한 실제 매장 사진(webp)을 `public/images/`에 아래 이름으로 넣으세요.

`01_main` · `02_room_cream` · `03_seating` · `04_room_blue` · `05_room_green` · `06_hall`

그다음 `lib/content.ts`의 `IMG_EXT`를 `"webp"`로 바꾸고 OG 이미지를 다시 만듭니다.

```bash
node scripts/gen-og.mjs     # public/og.png (공유 미리보기 이미지)
```

## SEO / 배포

- 메타데이터·JSON-LD: `app/layout.tsx`, `app/page.tsx` (문구는 `lib/content.ts`의 `site`)
- 배포 주소: `NEXT_PUBLIC_SITE_URL` 환경변수 (기본값은 GitHub Pages 주소)
- 아이콘: `node scripts/gen-icons.mjs` → `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`
- `main`에 푸시하면 GitHub Actions가 GitHub Pages로 배포합니다 (`.github/workflows/deploy.yml`).
