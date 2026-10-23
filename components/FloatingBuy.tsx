export default function FloatingBuy() {
  return (
    <a href="#promotion" className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-40 -translate-x-1/2 rounded-2xl bg-black/60 p-1 shadow-lg backdrop-blur sm:bottom-[max(2rem,env(safe-area-inset-bottom))]">
      <span className="flex w-[168px] items-center justify-center gap-2 rounded-xl bg-[var(--accent)] py-3.5 font-semibold text-neutral-900 sm:w-[200px] sm:py-4">▭ 구매하기</span>
    </a>
  );
}
