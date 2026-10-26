import { contact } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="px-6 pb-28 pt-4 text-center text-sm text-[var(--muted)]">
      {contact.name} | 예약·방문 문의 <a href={contact.tel} className="inline-block py-3 tabular-nums hover:underline">{contact.phone}</a>
    </footer>
  );
}
