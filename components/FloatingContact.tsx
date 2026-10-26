import { contact } from "@/lib/content";

// 화면 하단 고정 버튼: 전화 문의 / 문자 문의
export default function FloatingContact() {
  const base = "flex min-h-12 flex-1 items-center justify-center rounded-xl px-6 font-semibold transition";
  return (
    <div className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-3 right-3 z-40 mx-auto flex max-w-[380px] gap-2 rounded-2xl bg-[var(--ink)]/90 p-2 shadow-xl backdrop-blur sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))]">
      <a href={contact.tel} className={`${base} bg-[var(--cream)] text-[var(--ink)] hover:brightness-95`}>전화 문의</a>
      <a href={contact.sms} className={`${base} border border-[var(--gold-line)] text-[var(--cream)] hover:bg-white/10`}>문자 문의</a>
    </div>
  );
}
