import { gallery } from "@/lib/content";

export default function Gallery() {
  return (
    <section aria-label="공간 사진" className="grid grid-cols-2 md:grid-cols-6">
      {gallery.map((g, i) => (
        <img key={g.src} src={g.src} alt={g.alt} loading="lazy" decoding="async" draggable={false} className={`h-[180px] w-full object-cover md:h-[240px] ${i === 0 ? "col-span-2" : ""}`} />
      ))}
    </section>
  );
}
