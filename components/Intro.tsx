import { facilities } from "@/lib/content";

export default function Intro() {
  return (
    <>
      <section className="bg-[#e3eeec] px-6 py-12 text-center text-base leading-8 sm:py-16 sm:text-lg text-neutral-700">
        <p>카페는 소란스러워 오래 머물기 어렵고</p>
        <p>스터디카페는 노트북을 쓰기에 지나치게 조용하다고 느끼셨나요?</p>
        <p>이제 차분한 분위기에서 자유롭게 일할 수 있는 라운지 패스를 이용해 보세요</p>
      </section>
      <section className="mx-auto max-w-[640px] px-6 py-16 sm:py-24">
        <h2 className="text-2xl font-bold sm:text-3xl">편의 시설도 함께 누리세요</h2>
        <p className="mt-6 text-base text-neutral-700 sm:text-lg">집중을 방해하지 않도록 일할 때 필요한 모든 것을 준비했습니다</p>
        <ul className="mt-12 border-t border-black/10">
          {facilities.map((f) => (
            <li key={f.title} className="border-b border-black/10 py-6">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-neutral-400">* 지점별 제공 시설 상이</p>
      </section>
    </>
  );
}
