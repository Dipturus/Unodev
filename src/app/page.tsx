import Link from "next/link";
import { Logo } from "@/components/Logo";

const areas = [
  {
    href: "/construccion",
    title: "Construcción y remodelación de espacios",
    text: "Remodelaciones, ampliaciones y terminaciones para tu local, oficina o edificio.",
    items: ["Remodelaciones y ampliaciones", "Terminaciones y acabados", "Mantención y supervisión"],
    icon: (
      <path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6" />
    ),
  },
  {
    href: "/tecnologia",
    title: "Soluciones tecnológicas",
    text: "Software a la medida de tu negocio, con alcance claro y soporte después de la entrega.",
    items: ["Sistemas de gestión a medida", "Sitios web institucionales", "Automatización de procesos"],
    icon: (
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    ),
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-5 py-16 text-white">
      <Logo tone="dark" className="origin-center scale-125" />
      <p className="mt-8 text-center text-sm font-semibold uppercase tracking-widest text-white/60">
        ¿Qué necesitas?
      </p>
      <div className="mt-8 grid w-full max-w-4xl gap-6 md:grid-cols-2">
        {areas.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-brand hover:bg-white/10"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className="h-10 w-10 text-white/80"
            >
              {a.icon}
            </svg>
            <h2 className="mt-6 text-2xl font-bold">{a.title}</h2>
            <p className="mt-3 text-white/60">{a.text}</p>
            <ul className="mt-5 space-y-2 text-sm text-white/70">
              {a.items.map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                  {i}
                </li>
              ))}
            </ul>
            <span className="mt-8 font-semibold transition group-hover:translate-x-1">Entrar →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
