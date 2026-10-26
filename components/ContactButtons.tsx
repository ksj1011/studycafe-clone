import { contact } from "@/lib/content";

// 전화 문의(채움) / 문자 문의(테두리) 버튼 쌍. 어두운 배경 위에서 사용한다.
export default function ContactButtons({ className = "" }: { className?: string }) {
  const base = "inline-flex min-h-12 flex-1 items-center justify-center rounded-xl px-7 text-base font-semibold transition sm:min-h-[52px] sm:min-w-[170px] sm:flex-none";
  return (
    <div className={`flex gap-3 ${className}`}>
      <a href={contact.tel} className={`${base} bg-[var(--cream)] text-[var(--ink)] hover:brightness-95`}>전화 문의</a>
      <a href={contact.sms} className={`${base} border border-[var(--gold-line)] bg-[var(--ink)] text-[var(--cream)] hover:bg-white/10`}>문자 문의</a>
    </div>
  );
}
