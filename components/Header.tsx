"use client";
import { useEffect, useState } from "react";
import { brand, nav } from "@/lib/content";

export default function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur: string | null = null;
      for (const n of nav) {
        const el = document.getElementById(n.id);
        if (el && el.offsetTop <= y) cur = n.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="flex h-[68px] items-center gap-10 px-6 lg:px-20">
        <a href="#" onClick={(e) => { e.preventDefault(); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-lg font-extrabold tracking-widest">{brand.name}</a>
        <nav className="hidden gap-6 text-[15px] font-medium md:flex">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={(e) => go(e, n.id)} className={`border-b-2 py-1 transition-colors hover:text-[var(--brand)] ${active === n.id ? "border-[var(--brand)] text-[var(--brand)]" : "border-transparent"}`}>{n.label}</a>
          ))}
        </nav>
        <button className="ml-auto rounded-lg border border-black/10 px-3 py-2 text-xs transition hover:bg-neutral-50">로그인</button>
        <button aria-label="메뉴" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="flex h-10 w-10 items-center justify-center rounded-lg text-xl md:hidden">{open ? "✕" : "☰"}</button>
      </div>
      {open && (
        <nav className="absolute left-0 right-0 top-full flex flex-col border-b border-t border-black/5 bg-white px-6 py-2 shadow-lg md:hidden">
          {nav.map((n) => (<a key={n.id} href={`#${n.id}`} onClick={(e) => go(e, n.id)} className={`py-4 text-base font-medium ${active === n.id ? "text-[var(--brand)]" : ""}`}>{n.label}</a>))}
        </nav>
      )}
    </header>
  );
}
