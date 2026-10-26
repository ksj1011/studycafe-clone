"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { contact, spaces } from "@/lib/content";

export default function Spaces() {
  const scroller = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startLeft: 0 });
  const [index, setIndex] = useState(0);
  const [atEnd, setAtEnd] = useState(false);
  const [dragging, setDragging] = useState(false);
  const count = spaces.items.length;

  const step = () => {
    const kids = scroller.current?.children;
    if (!kids?.length) return 360;
    const a = kids[0] as HTMLElement;
    const b = kids[1] as HTMLElement | undefined;
    return b ? b.offsetLeft - a.offsetLeft : a.offsetWidth;
  };

  const sync = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const end = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2;
    setAtEnd(end);
    setIndex(end ? count - 1 : Math.min(count - 1, Math.max(0, Math.round(el.scrollLeft / step()))));
  }, [count]);

  useEffect(() => { sync(); window.addEventListener("resize", sync); return () => window.removeEventListener("resize", sync); }, [sync]);

  const goTo = (i: number) => {
    const next = Math.min(count - 1, Math.max(0, i));
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

  const arrow = "absolute top-[38%] z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl shadow-lg ring-1 ring-black/5 transition hover:scale-110 disabled:pointer-events-none disabled:opacity-0 md:flex";
  const pad = "max(24px, calc((100vw - 1200px) / 2))";

  return (
    <section id="spaces" className="scroll-mt-[68px] bg-[var(--sand)]/50 py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">{spaces.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">{spaces.desc}</p>
      </div>
      <div className="relative mt-8">
        <button aria-label="이전" className={`${arrow} left-6`} disabled={index === 0} onClick={() => goTo(index - 1)}>‹</button>
        <button aria-label="다음" className={`${arrow} right-6`} disabled={atEnd} onClick={() => goTo(index + 1)}>›</button>
        <div
          ref={scroller}
          tabIndex={0}
          onScroll={sync}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className={`no-scrollbar flex select-none gap-4 overflow-x-auto outline-none ${dragging ? "cursor-grabbing" : "cursor-grab snap-x snap-mandatory scroll-smooth"}`}
          style={{ paddingInline: pad, scrollPaddingInline: pad }}
        >
          {spaces.items.map((s) => (
            <article key={s.title} className="flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-white sm:w-[340px] lg:w-[380px]">
              <img src={s.img} alt={s.title} loading="lazy" decoding="async" draggable={false} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-[var(--muted)]">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        {spaces.items.map((s, i) => (
          <button key={s.title} aria-label={`${s.title} 보기`} onClick={() => goTo(i)} className="flex h-8 items-center px-2"><span className={`block h-2 rounded-full transition-all ${i === index ? "w-6 bg-[var(--ink)]" : "w-2 bg-neutral-300"}`} /></button>
        ))}
      </div>
      <div className="mt-6 flex justify-center px-6">
        <a href={contact.sms} className="inline-flex min-h-12 items-center rounded-xl bg-[var(--ink)] px-8 font-semibold text-[var(--cream)] transition hover:opacity-90">{spaces.button}</a>
      </div>
    </section>
  );
}
