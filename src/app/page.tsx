import Image from "next/image";
import Link from "next/link";

const areas = [
  {
    href: "/construccion",
    title: "Construcción y remodelación de espacios",
    image: "/proyectos/cafeteria-4-terminaciones.jpg",
    icon: <path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6" />,
  },
  {
    href: "/tecnologia",
    title: "Soluciones tecnológicas",
    image: "/areas/tecnologia.jpg",
    icon: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 py-16 text-ink">
      <Image
        src="/logo.png"
        alt="UnoDev, Building @ Technology Solutions"
        width={596}
        height={132}
        priority
        className="h-auto w-72 sm:w-96"
      />
      <p className="mt-10 text-center text-sm font-semibold uppercase tracking-widest text-muted">
        ¿Qué necesitas?
      </p>
      <div className="mt-8 grid w-full max-w-4xl gap-6 md:grid-cols-2">
        {areas.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="group relative flex min-h-72 flex-col justify-end overflow-hidden rounded-2xl bg-ink p-8 text-white transition hover:shadow-xl"
          >
            {a.image && (
              <Image
                src={a.image}
                alt=""
                fill
                sizes="(min-width: 896px) 448px, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            )}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/70 to-ink/40"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className="relative h-10 w-10 text-white"
            >
              {a.icon}
            </svg>
            <h2 className="relative mt-6 text-2xl font-bold">{a.title}</h2>
            <span className="relative mt-6 font-semibold transition group-hover:translate-x-1">
              Entrar →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
