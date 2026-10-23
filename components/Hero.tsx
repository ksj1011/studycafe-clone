import { asset } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative flex h-[70svh] min-h-[420px] items-center justify-center overflow-hidden text-center text-white md:min-h-[480px]">
      <img src={asset("/images/hero.svg")} alt="STUDY LOUNGE 라운지 내부" fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover object-[60%_50%]" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative px-6">
        <p className="mb-4 text-base opacity-80 sm:text-lg">라운지 패스</p>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">집중하기 좋은<br />나만의 라운지</h1>
      </div>
    </section>
  );
}
