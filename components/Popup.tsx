"use client";
import { useEffect, useState } from "react";
import { asset } from "@/lib/content";

const KEY = "popup-hidden-until";

export default function Popup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    try { if (Number(localStorage.getItem(KEY)) > Date.now()) return; } catch {}
    setOpen(true);
  }, []);
  if (!open) return null;
  const hideToday = () => { try { localStorage.setItem(KEY, String(Date.now() + 86400000)); } catch {} setOpen(false); };
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30">
      <div className="flex max-h-[calc(100dvh-24px)] w-[380px] max-w-[92vw] flex-col overflow-hidden rounded-3xl bg-white">
        <div className="relative flex h-[min(470px,calc(100dvh-170px))] min-h-[260px] shrink flex-col items-center justify-center overflow-hidden text-center text-white">
          <img src={asset("/images/open.svg")} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <p className="relative font-semibold text-[var(--yellow)]">NEW 라운지 패스</p>
          <p className="relative mt-3 text-5xl font-extrabold">신규 지점</p>
          <p className="relative mt-5 text-sm leading-6 opacity-90">역에서 도보 6분<br />새로운 라운지를 만나보세요</p>
          <a href="#" className="relative mt-8 sm:mt-14 rounded-full bg-[var(--yellow)] px-8 py-3.5 font-semibold text-black">지금 바로 이용해보기</a>
        </div>
        <div className="grid shrink-0 grid-cols-2 text-sm">
          <button onClick={hideToday} className="py-5">오늘 동안 보지 않기</button>
          <button onClick={() => setOpen(false)} className="py-5">닫기</button>
        </div>
      </div>
    </div>
  );
}
