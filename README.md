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

사진은 `public/images/`의 `01_main` · `02_room_cream` · `03_seating` · `04_room_blue` · `05_room_green` · `06_hall` (.webp)입니다.
같은 이름으로 덮어쓰면 교체됩니다. 확장자가 다르면 `lib/content.ts`의 `IMG_EXT`를 바꾸세요.
게시하는 사진은 사용 권한을 확인한 것만 쓰세요. 메인 사진(01)을 바꿨다면 공유 미리보기 이미지도 다시 만듭니다.

```bash
node scripts/gen-og.mjs     # public/og.png (메인 사진 + 한실장 + 연락처)
```

기획서 원본 자료(`han_site_content/`)는 `.gitignore`로 제외되어 저장소에 올라가지 않습니다.

## SEO / 배포

- 메타데이터·JSON-LD: `app/layout.tsx`, `app/page.tsx` (문구는 `lib/content.ts`의 `site`)
- 배포 주소: `NEXT_PUBLIC_SITE_URL` 환경변수 (기본값은 GitHub Pages 주소)
- 아이콘: `node scripts/gen-icons.mjs` → `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`
- `main`에 푸시하면 GitHub Actions가 GitHub Pages로 배포합니다 (`.github/workflows/deploy.yml`).
