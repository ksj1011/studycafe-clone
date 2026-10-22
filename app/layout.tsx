import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "라운지 패스 - STUDY LOUNGE",
  description: "카페처럼 편안하고 스터디카페처럼 집중되는 라운지 패스",
};

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
