"use client";
import { useEffect, useState } from "react";
import { contact, nav } from "@/lib/content";

const HEADER_H = 68;

export default function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // 새로고침·재방문 시 항상 맨 위에서 시작 (이전 스크롤 위치/해시 복원 방지)
  useEffect(() => {
    history.scrollRestoration = "manual";
    const hadHash = Boolean(location.hash);
    if (hadHash) history.replaceState(null, "", location.pathname + location.search);
    window.scrollTo(0, 0);
    // 해시로 진입하면 브라우저가 로드 완료 후 해당 앵커로 한 번 더 스크롤하므로 그 뒤에 다시 맨 위로 보낸다
    if (!hadHash || document.readyState === "complete") return;
    const reset = () => requestAnimationFrame(() => window.scrollTo(0, 0));
    window.addEventListener("load", reset, { once: true });
    return () => window.removeEventListener("load", reset);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      // 헤더 아래 화면 위쪽 35% 지점을 기준선으로, 그 선을 지난 섹션 중 시작점이 가장 아래인 것을 고른다
      // (헤더 바로 아래까지 올라와야 켜지면 화면에 보이는 섹션보다 메뉴 강조가 늦는다)
      const line = HEADER_H + (window.innerHeight - HEADER_H) * 0.35;
      let cur: string | null = null;
      let best = -Infinity;
      for (const n of nav) {
        const top = document.getElementById(n.id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= line && top > best) { best = top; cur = n.id; }
      }
      // 페이지 끝에서는 문의 섹션이 헤더 선까지 못 올라오므로 마지막 섹션을 켠다
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) cur = "contact";
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const mq = window.matchMedia("(min-width: 768px)");
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", close);
    return () => { window.removeEventListener("keydown", onKey); mq.removeEventListener("change", close); };
  }, [open]);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--ink)] text-white">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center gap-4 px-4 sm:px-6 md:gap-10">
        <a href="#" onClick={(e) => { e.preventDefault(); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="shrink-0 whitespace-nowrap text-xl font-bold">{contact.name}</a>
        <nav className="ml-auto hidden gap-2 text-[15px] font-medium md:flex lg:gap-4">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={(e) => go(e, n.id)} className={`flex min-h-11 items-center border-b-2 px-2 transition-colors hover:text-[var(--cream)] ${active === n.id ? "border-[var(--cream)] text-[var(--cream)]" : "border-transparent text-white/80"}`}>{n.label}</a>
          ))}
        </nav>
        <button aria-label="메뉴" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="-mr-2 ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-xl md:hidden">{open ? "✕" : "☰"}</button>
      </div>
      {open && (
        <nav className="absolute left-0 right-0 top-full flex flex-col border-b border-white/10 bg-[var(--ink)] px-6 py-2 shadow-lg md:hidden">
          {nav.map((n) => (<a key={n.id} href={`#${n.id}`} onClick={(e) => go(e, n.id)} className={`flex min-h-12 items-center text-base font-medium ${active === n.id ? "text-[var(--cream)]" : "text-white/85"}`}>{n.label}</a>))}
        </nav>
      )}
    </header>
  );
}
