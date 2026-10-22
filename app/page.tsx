import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Spaces from "@/components/Spaces";
import Pricing from "@/components/Pricing";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";
import FloatingBuy from "@/components/FloatingBuy";
import Popup from "@/components/Popup";

export default function Home() {
  return (
    <>
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
      <Popup />
    </>
  );
}
