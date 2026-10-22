import { spaces } from "@/lib/content";

export default function Spaces() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[640px] px-6">
        <h2 className="text-3xl font-bold leading-snug">5가지 스타일의<br />라운지를 이용하세요</h2>
        <p className="mt-6 text-lg text-neutral-700">비즈니스, 작업, 공부 어떤 목적에도 맞는 좌석</p>
      </div>
      <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto px-6 md:pl-[calc(50vw-320px)]">
        {spaces.map((s) => (
          <article key={s.title} className={`relative h-[420px] w-[640px] max-w-[85vw] shrink-0 overflow-hidden rounded-2xl text-white`}>
            <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 z-10">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm opacity-80">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
