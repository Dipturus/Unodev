import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Isotipo } from "@/components/Isotipo";
import { Method } from "@/components/Method";

const areas = [
  {
    href: "/construccion",
    label: "Construcción",
    title: "Construcción y remodelación de espacios",
    text: "Remodelaciones, ampliaciones y terminaciones para tu local, oficina o edificio.",
  },
  {
    href: "/tecnologia",
    label: "Tecnología",
    title: "Soluciones tecnológicas",
    text: "Sitios web, sistemas de gestión y automatización a la medida de tu negocio.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="relative overflow-hidden">
          <Isotipo
            color="#1D5A91"
            className="pointer-events-none absolute -right-24 top-10 hidden h-[28rem] w-auto opacity-[0.07] lg:block"
          />
          <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Espacios y sistemas para tu negocio
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Construimos los cimientos físicos y digitales de tu éxito.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Un solo equipo, con alcance claro, plazos definidos y respaldo después de la entrega.
              Elige el área que necesitas.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {areas.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="group rounded-lg border border-line bg-white p-8 transition hover:border-brand hover:shadow-lg"
                >
                  <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                    {a.label}
                  </p>
                  <h2 className="mt-3 text-2xl font-extrabold">{a.title}</h2>
                  <p className="mt-3 text-muted">{a.text}</p>
                  <span className="mt-6 inline-block font-semibold text-brand transition group-hover:translate-x-1">
                    Ver servicios →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Method />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
