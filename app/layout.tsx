import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/content";

const siteUrl = site.url;
const { title, description } = site;

export const metadata: Metadata = {
  // 끝의 슬래시가 있어야 하위 경로(basePath) 아래의 상대 URL이 올바르게 합쳐진다
  metadataBase: new URL(`${siteUrl}/`),
  title,
  description,
  keywords: ["한실장", "강남 텐카페", "강남 텐카페 예약", "텐카페 방문 문의", "한실장 010-5443-3976"],
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "한실장",
    url: "./",
    title,
    description,
    images: [{ url: "og.png", width: 1200, height: 630, alt: "한실장 - 강남 텐카페 예약·방문 안내" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#14171c" };

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
