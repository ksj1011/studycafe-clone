"use client";
import dynamic from "next/dynamic";
import { reviews } from "@/lib/content";

const BranchMap = dynamic(() => import("./BranchMap"), { ssr: false, loading: () => <div className="h-full w-full bg-[#dfe7ea]" /> });

export default function Branches() {
  const loop = [...reviews, ...reviews];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1120px] px-6">
        <h2 className="mb-6 text-3xl font-bold">가까운 지점을 찾아보세요</h2>
        <div className="relative z-0 h-[420px] overflow-hidden rounded-3xl"><BranchMap /></div>
      </div>
      <h2 className="mt-20 text-center text-3xl font-bold">이용 후기</h2>
      <div className="mt-10 overflow-hidden">
        <div className="marquee flex w-max gap-4">
          {loop.map((r, i) => (
            <figure key={i} className="w-[274px] shrink-0 rounded-2xl bg-neutral-100 p-5">
              <div className="text-[var(--accent)]">★★★★★</div>
              <blockquote className="mt-4 h-24 text-sm leading-6">{r.text}</blockquote>
              <figcaption className="mt-4 border-t border-black/10 pt-4"><b>{r.name} 님</b><div className="text-xs text-neutral-400">{r.place}</div></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
