import { brand, gallery } from "@/lib/content";

const cols = [
  { t: "문의", l: ["중개 문의", "신규지점 개설 제안", "이용 문의", "광고 문의", "제휴 제안", "PR"] },
  { t: "회사", l: ["회사소개", "채용"] },
];

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-2 md:grid-cols-5">
        {gallery.map((g, i) => (<img key={i} src={g} alt="" className={`h-[220px] w-full object-cover ${i === 0 ? "col-span-2" : ""}`} />))}
      </div>
      <div id="contact" className="mx-auto flex max-w-[1280px] scroll-mt-[68px] flex-col gap-12 px-6 py-16 md:flex-row md:justify-between">
        <div>
          <h3 className="text-2xl font-bold leading-snug">입주 문의</h3>
          <p className="mt-3 text-xs text-neutral-500">운영시간 : {brand.hours}</p>
          <div className="mt-6 flex gap-2 text-xs"><span className="rounded-lg border px-4 py-3">{brand.phone}</span><span className="rounded-lg border px-4 py-3">입주문의</span></div>
        </div>
        <div className="flex gap-16 text-sm">
          {cols.map((c) => (
            <div key={c.t}><h4 className="font-semibold">{c.t}</h4><ul className="mt-5 space-y-3 text-neutral-500">{c.l.map((x) => <li key={x}>{x}</li>)}</ul></div>
          ))}
        </div>
      </div>
      <div className="mx-auto mb-10 max-w-[1280px] rounded-3xl bg-neutral-100 p-10 text-xs text-neutral-600">
        <b className="text-base tracking-widest text-black">{brand.name}</b>
        <p className="mt-4">{brand.biz}</p>
        <p className="mt-2">{brand.address}</p>
        <p className="mt-2">© {brand.name}</p>
        <p className="mt-6 font-semibold text-neutral-800">이용약관 &nbsp;|&nbsp; 개인정보 처리방침</p>
      </div>
    </footer>
  );
}
