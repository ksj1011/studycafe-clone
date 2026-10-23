"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { spaces } from "@/lib/content";

export default function Spaces() {
  const scroller = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startLeft: 0 });
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);

  const step = () => {
    const el = scroller.current;
    const card = el?.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + 8 : 648;
  };

  const sync = useCallback(() => {
    const el = scroller.current;
    if (el) setIndex(Math.min(spaces.length - 1, Math.max(0, Math.round(el.scrollLeft / step()))));
  }, []);

  const goTo = (i: number) => {
    const next = Math.min(spaces.length - 1, Math.max(0, i));
    scroller.current?.scrollTo({ left: next * step(), behavior: "smooth" });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (document.activeElement !== scroller.current) return;
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    drag.current = { active: true, startX: e.clientX, startLeft: scroller.current!.scrollLeft };
    setDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    scroller.current!.scrollLeft = drag.current.startLeft - (e.clientX - drag.current.startX);
  };
  const endDrag = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    setDragging(false);
    goTo(Math.round(scroller.current!.scrollLeft / step()));
  };

  const arrow = "absolute top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-neutral-900 shadow-lg transition hover:scale-110 disabled:pointer-events-none disabled:opacity-0 md:flex";

  return (
    <section id="products" className="scroll-mt-[68px] py-16">
      <div className="mx-auto max-w-[640px] px-6">
        <h2 className="text-2xl font-bold leading-snug sm:text-3xl">5가지 스타일의<br />라운지를 이용하세요</h2>
        <p className="mt-6 text-base text-neutral-300 sm:text-lg">비즈니스, 작업, 공부 어떤 목적에도 맞는 좌석</p>
      </div>
      <div className="relative mt-10">
        <button aria-label="이전" className={`${arrow} left-6`} disabled={index === 0} onClick={() => goTo(index - 1)}>‹</button>
        <button aria-label="다음" className={`${arrow} right-6`} disabled={index === spaces.length - 1} onClick={() => goTo(index + 1)}>›</button>
        <div
          ref={scroller}
          tabIndex={0}
          onScroll={sync}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className={`no-scrollbar flex select-none gap-2 overflow-x-auto px-6 outline-none md:px-[calc(50vw-320px)] ${dragging ? "cursor-grabbing" : "cursor-grab snap-x snap-mandatory scroll-smooth"}`}
          style={{ scrollPaddingLeft: "max(24px, calc(50vw - 320px))" }}
        >
          {spaces.map((s, i) => (
            <article key={s.title} className={`group relative h-[360px] w-[640px] sm:h-[420px] max-w-[85vw] shrink-0 snap-start overflow-hidden rounded-2xl text-white transition-opacity duration-300 ${i === index ? "opacity-100" : "opacity-60"}`}>
              <img src={s.img} alt={s.title} loading="lazy" decoding="async" draggable={false} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm opacity-80">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        {spaces.map((s, i) => (
          <button key={s.title} aria-label={`${s.title} 보기`} onClick={() => goTo(i)} className="flex h-8 items-center px-2"><span className={`block h-2 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-2 bg-neutral-700"}`} /></button>
        ))}
      </div>
    </section>
  );
}
