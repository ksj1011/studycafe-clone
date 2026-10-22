"use client";
import { useState } from "react";
import { plans } from "@/lib/content";

export default function Pricing() {
  const [tab, setTab] = useState<"subscription" | "oneday">("subscription");
  return (
    <section id="promotion" className="scroll-mt-[68px] py-20 text-center">
      <span className="inline-block -rotate-2 bg-[var(--accent)] px-3 py-1 text-sm font-extrabold">10월 프로모션</span>
      <h2 className="mt-4 text-4xl font-extrabold">라운지 패스 요금제</h2>
      <div className="mx-auto mt-10 flex w-fit rounded-full border-2 border-black/10 p-1">
        {([["subscription", "구독"], ["oneday", "원데이"]] as const).map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} className={`rounded-full px-8 py-2 text-sm font-semibold ${tab === k ? "bg-white shadow ring-1 ring-black/10" : "text-neutral-400"}`}>{l}</button>
        ))}
      </div>
      <div className="no-scrollbar mx-auto mt-8 flex max-w-[1200px] gap-4 overflow-x-auto px-6 text-left">
        {plans[tab].map((p) => (
          <div key={p.name} className={`w-[300px] shrink-0 rounded-3xl p-6 ${p.best ? "bg-gradient-to-b from-purple-900 to-purple-600 text-white" : "bg-gradient-to-b from-purple-100 to-purple-50"}`}>
            <div className="flex items-center gap-2 font-semibold">{p.name}{p.best && <span className="rounded-full bg-black px-2 py-0.5 text-xs">Best</span>}</div>
            <p className="mt-6 text-3xl font-extrabold">월 {p.price}원<span className="ml-1 text-sm font-normal">부터</span></p>
            <ul className="mt-6 space-y-2">
              {p.perks.map((x) => (<li key={x} className="rounded-full bg-black/5 px-4 py-2 text-sm text-neutral-800">✔ {x}</li>))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-neutral-400">* 요금과 혜택은 예시이며 지점별로 다를 수 있습니다.</p>
    </section>
  );
}
