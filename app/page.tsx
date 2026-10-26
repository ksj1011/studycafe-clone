import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Spaces from "@/components/Spaces";
import Reservation from "@/components/Reservation";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { contact, hero, site } from "@/lib/content";

// 주소는 예약 문의 시 안내하므로 구조화 데이터에 넣지 않는다
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", name: contact.name, inLanguage: "ko-KR" },
    { "@type": "Organization", name: contact.name, description: site.description, telephone: "+82-10-5443-3976", areaServed: "서울 강남", slogan: hero.title.join(" ") },
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
        <Reservation />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
