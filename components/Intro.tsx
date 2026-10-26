import { guide, intro } from "@/lib/content";

export default function Intro() {
  return (
    <>
      <section id="intro" className="scroll-mt-[68px] bg-[var(--sand)] px-6 py-14 text-center sm:py-16">
        <h2 className="text-2xl font-bold sm:text-3xl">{intro.title}</h2>
        <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
          {intro.lines[0]}<br />{intro.lines[1]}
        </p>
      </section>
      <section className="mx-auto max-w-[1200px] px-6 py-14 sm:py-20">
        <h2 className="text-xl font-bold sm:text-2xl">{guide.title}</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guide.items.map((g) => (
            <li key={g.no} className="rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-7">
              <span className="text-sm font-semibold text-[var(--gold)]">{g.no}</span>
              <h3 className="mt-4 text-xl font-bold">{g.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">{g.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
