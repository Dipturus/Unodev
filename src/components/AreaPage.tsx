import { whatsappUrl } from "@/config/site";
import { Carousel, type Slide } from "./Carousel";
import { ContactSection } from "./ContactSection";
import type { Area } from "./ContactForm";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Isotipo } from "./Isotipo";
import { Method } from "./Method";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  services: { title: string; text: string }[];
  projectsNote: string;
  projectsTitle?: string;
  slides?: Slide[];
  slidesNote?: string;
  area: Area;
  respaldo: string;
  whatsappMessage: string;
};

export function AreaPage({
  eyebrow,
  title,
  intro,
  services,
  projectsNote,
  projectsTitle = "Proyectos",
  slides,
  slidesNote,
  area,
  respaldo,
  whatsappMessage,
}: Props) {
  return (
    <>
      <Header whatsappMessage={whatsappMessage} />
      <main>
        <section className="relative overflow-hidden">
          <Isotipo
            color="#1D5A91"
            className="pointer-events-none absolute -right-24 top-10 hidden h-[28rem] w-auto opacity-[0.07] lg:block"
          />
          <div className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">{intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappUrl(whatsappMessage)}
                className="rounded-md bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
              >
                Solicitar cotización
              </a>
              <a
                href="#servicios"
                className="rounded-md border border-ink/20 px-6 py-3 font-semibold transition hover:border-brand hover:text-brand"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </section>

        <section id="servicios" className="border-t border-line bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="text-3xl font-extrabold tracking-tight">Qué hacemos</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {services.map((s) => (
                <article key={s.title} className="rounded-lg border border-line bg-paper p-8">
                  <h3 className="text-xl font-extrabold text-brand">{s.title}</h3>
                  <p className="mt-3 text-ink/80">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Method respaldo={respaldo} />

        <section id="proyectos" className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="text-3xl font-extrabold tracking-tight">{projectsTitle}</h2>
            <p className="mt-3 max-w-2xl text-muted">{projectsNote}</p>
            {slides ? (
              <div className="mt-12">
                <Carousel slides={slides} />
                {slidesNote && <p className="mt-1 text-center text-xs text-muted/70">{slidesNote}</p>}
              </div>
            ) : (
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex aspect-[4/3] flex-col items-center justify-center rounded-lg border border-dashed border-line bg-white text-center"
                  >
                    <Isotipo color="#1D5A91" className="h-10 w-auto opacity-30" />
                    <p className="mt-4 text-xs text-muted/70">Próximamente</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <ContactSection area={area} message={whatsappMessage} />
      </main>
      <Footer />
    </>
  );
}
