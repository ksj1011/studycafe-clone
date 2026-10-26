import ContactButtons from "./ContactButtons";
import { closing, contact } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-[68px] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 rounded-3xl bg-[var(--ink)] p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-14">
        <div>
          <h2 className="text-2xl font-bold sm:text-4xl">{closing.title}</h2>
          <p className="mt-6 font-semibold text-[var(--cream)]">{contact.name}</p>
          <a href={contact.tel} className="mt-1 block text-[clamp(2rem,8vw,3.75rem)] font-semibold tabular-nums leading-tight">{contact.phone}</a>
          <p className="mt-6 text-white/80">{closing.note}</p>
        </div>
        <ContactButtons className="lg:shrink-0" />
      </div>
    </section>
  );
}
