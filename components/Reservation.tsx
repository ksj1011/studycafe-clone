import { contact, faq, location, reservation } from "@/lib/content";

export default function Reservation() {
  return (
    <section id="reservation" className="mx-auto max-w-[1200px] scroll-mt-[68px] px-6 py-14 sm:py-20">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-0">
        <div className="lg:pr-14">
          <h2 className="text-2xl font-bold sm:text-3xl">{reservation.title}</h2>
          <ol className="mt-8 space-y-7">
            {reservation.steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--sand)] text-xl font-semibold">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-1.5 leading-7 text-[var(--muted)]">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="mt-14 text-2xl font-bold sm:text-3xl">{location.title}</h2>
          <p className="mt-4 leading-8 text-[var(--muted)]">{location.lines[0]}<br />{location.lines[1]}</p>
          <a href={contact.sms} className="mt-6 inline-flex min-h-12 items-center rounded-xl border border-[var(--gold)] px-7 font-semibold text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-white">{location.button}</a>
        </div>

        <div className="lg:border-l lg:border-[var(--line)] lg:pl-14">
          <h2 className="text-2xl font-bold sm:text-3xl">{faq.title}</h2>
          <div className="mt-6">
            {faq.items.map((f) => (
              <details key={f.q} open className="group border-t border-[var(--line)] first:border-t-0">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden className="w-5 shrink-0 text-center text-2xl leading-none text-[var(--gold)]"><span className="group-open:hidden">+</span><span className="hidden group-open:inline">−</span></span>
                </summary>
                <p className="pb-5 leading-7 text-[var(--muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
