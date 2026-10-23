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
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="flex h-[68px] items-center gap-4 px-4 sm:px-6 md:gap-10 lg:px-20">
        <a href="#" onClick={(e) => { e.preventDefault(); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="shrink-0 whitespace-nowrap text-base font-extrabold tracking-wider sm:text-lg sm:tracking-widest">{brand.name}</a>
        <nav className="hidden gap-2 text-[15px] font-medium md:flex lg:gap-4">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={(e) => go(e, n.id)} className={`flex min-h-11 items-center border-b-2 px-2 transition-colors hover:text-[var(--brand)] ${active === n.id ? "border-[var(--brand)] text-[var(--brand)]" : "border-transparent"}`}>{n.label}</a>
          ))}
        </nav>
        <button aria-label="메뉴" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="-mr-2 ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-xl md:hidden">{open ? "✕" : "☰"}</button>
      </div>
      {open && (
        <nav className="absolute left-0 right-0 top-full flex flex-col border-b border-t border-black/5 bg-white px-6 py-2 shadow-lg md:hidden">
          {nav.map((n) => (<a key={n.id} href={`#${n.id}`} onClick={(e) => go(e, n.id)} className={`flex min-h-12 items-center text-base font-medium ${active === n.id ? "text-[var(--brand)]" : ""}`}>{n.label}</a>))}
        </nav>
      )}
    </header>
  );
}
