import ContactButtons from "./ContactButtons";
import { contact, hero, photos } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden bg-[var(--ink)] text-white md:min-h-[640px]">
      <img src={photos.main} alt="" fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
      <div className="relative mx-auto w-full max-w-[1200px] px-6 py-16">
        <p className="text-sm font-semibold text-[var(--cream)] sm:text-base">{hero.eyebrow}</p>
        <h1 className="mt-4 text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight">
          {hero.title[0]}<br />{hero.title[1]}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
          {hero.lines[0]}<br />{hero.lines[1]}
        </p>
        <p className="mt-8 flex flex-wrap items-baseline gap-x-3 text-2xl font-semibold sm:text-4xl">
          <span>{contact.name}</span>
          <a href={contact.tel} className="tabular-nums hover:text-[var(--cream)]">{contact.phone}</a>
        </p>
        <ContactButtons className="mt-6 max-w-sm sm:max-w-none" />
      </div>
    </section>
  );
}
