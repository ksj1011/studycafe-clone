"use client";
import dynamic from "next/dynamic";
import { reviews } from "@/lib/content";

const BranchMap = dynamic(() => import("./BranchMap"), { ssr: false, loading: () => <div className="h-full w-full bg-[#dfe7ea]" /> });

export default function Branches() {
  // 한 그룹이 화면보다 넓어야 루프 끝에서 빈 공간이 생기지 않는다 (카드 15장 ≈ 4350px)
  const group = [...reviews, ...reviews, ...reviews];
  return (
    <section id="branches" className="scroll-mt-[68px] py-16">
      <div className="mx-auto max-w-[1120px] px-6">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl">가까운 지점을 찾아보세요</h2>
        <div className="relative z-0 h-[340px] overflow-hidden rounded-3xl sm:h-[420px]"><BranchMap /></div>
      </div>
      <h2 className="mt-14 text-center text-2xl font-bold sm:mt-20 sm:text-3xl">이용 후기</h2>
      <div className="mt-10 overflow-hidden motion-reduce:overflow-x-auto">
        <div className="marquee flex w-max">
          {[0, 1].map((g) => (
            <div key={g} aria-hidden={g === 1} className="flex shrink-0 gap-4 pr-4">
              {group.map((r, i) => (
                <figure key={i} className="w-[274px] shrink-0 rounded-2xl bg-neutral-100 p-5">
                  <div className="text-[var(--accent)]">★★★★★</div>
                  <blockquote className="mt-4 h-24 text-sm leading-6">{r.text}</blockquote>
                  <figcaption className="mt-4 border-t border-black/10 pt-4"><b>{r.name} 님</b><div className="text-xs text-neutral-400">{r.place}</div></figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
