import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ksj1011.github.io/studycafe-clone";
const title = "라운지 패스 - STUDY LOUNGE | 서울 스터디카페·워크라운지";
const description = "카페처럼 편안하고 스터디카페처럼 집중되는 라운지 패스. 강남·역삼·선릉·잠실·홍대 등 서울 7개 지점에서 오픈 테이블, 듀얼 모니터석, 포커스 부스까지 구독과 원데이로 이용하세요.";

export const metadata: Metadata = {
  // 끝의 슬래시가 있어야 하위 경로(basePath) 아래의 상대 URL이 올바르게 합쳐진다
  metadataBase: new URL(`${siteUrl}/`),
  title,
  description,
  keywords: ["스터디카페", "워크라운지", "라운지 패스", "공유오피스", "강남 스터디카페", "노트북 작업 카페", "STUDY LOUNGE"],
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "STUDY LOUNGE",
    url: "./",
    title,
    description,
    images: [{ url: "og.png", width: 1200, height: 630, alt: "STUDY LOUNGE - 집중하기 좋은 나만의 라운지" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0f1014" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
