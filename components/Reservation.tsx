import { contact, faq, location, reservation } from "@/lib/content";

export default function Reservation() {
  return (
    <>
      <section id="reservation" className="mx-auto max-w-[1200px] scroll-mt-[68px] px-6 pt-14 sm:pt-20">
        <h2 className="text-2xl font-bold sm:text-3xl">{reservation.title}</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {reservation.steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--sand)] text-xl font-semibold">{i + 1}</span>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 leading-7 text-[var(--muted)]">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="location-title" className="mx-auto max-w-[1200px] px-6 pt-12 sm:pt-16">
        <div className="flex flex-col gap-6 rounded-2xl bg-[var(--sand)] p-6 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="location-title" className="text-2xl font-bold sm:text-3xl">{location.title}</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">{location.lines[0]}<br className="hidden lg:block" /> {location.lines[1]}</p>
          </div>
          <a href={contact.sms} className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl border border-[var(--gold)] bg-white px-7 font-semibold text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-white">{location.button}</a>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="mx-auto max-w-[800px] px-6 py-14 sm:py-20">
        <h2 id="faq-title" className="text-2xl font-bold sm:text-3xl">{faq.title}</h2>
        <div className="mt-6 border-y border-[var(--line)]">
          {faq.items.map((f) => (
            <details key={f.q} className="group border-t border-[var(--line)] first:border-t-0">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="w-5 shrink-0 text-center text-2xl leading-none text-[var(--gold)]"><span className="group-open:hidden">+</span><span className="hidden group-open:inline">−</span></span>
              </summary>
              <p className="pb-5 leading-7 text-[var(--muted)]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
