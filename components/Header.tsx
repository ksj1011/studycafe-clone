import { brand, nav } from "@/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[68px] items-center gap-10 border-b border-black/5 bg-white px-6 lg:px-20">
      <a href="#" className="text-lg font-extrabold tracking-widest">{brand.name}</a>
      <nav className="hidden gap-6 text-[15px] font-medium md:flex">
        {nav.map((n) => (<a key={n} href="#" className="hover:text-[var(--brand)]">{n}</a>))}
      </nav>
      <button className="ml-auto rounded-lg border border-black/10 px-3 py-2 text-xs">로그인</button>
    </header>
  );
}
