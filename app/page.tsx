import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Spaces from "@/components/Spaces";
import Pricing from "@/components/Pricing";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";
import FloatingBuy from "@/components/FloatingBuy";
// 초기 팝업: 다시 쓰려면 아래 import와 <Popup /> 주석을 해제
// import Popup from "@/components/Popup";
import { brand, branches } from "@/lib/content";

// 전화번호·주소는 자리표시자라 구조화 데이터에 넣지 않는다 (실제 값으로 교체한 뒤 추가)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", name: brand.name, inLanguage: "ko-KR" },
    { "@type": "Organization", name: brand.name, description: "카페처럼 편안하고 스터디카페처럼 집중되는 라운지 패스", areaServed: branches.map((b) => b.name) },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Spaces />
        <Pricing />
        <Branches />
      </main>
      <Footer />
      <FloatingBuy />
      {/* <Popup /> */}
    </>
  );
}
