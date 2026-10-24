import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Isotipo } from "@/components/Isotipo";
import { site, whatsappUrl } from "@/config/site";

const services = [
  {
    title: "Infraestructura",
    subtitle: "Obras menores y acabado de edificios",
    items: [
      "Remodelaciones y ampliaciones de espacios",
      "Terminaciones y acabados de edificios",
      "Mantención y reparación de obras",
      "Planificación y supervisión del trabajo",
    ],
  },
  {
    title: "Tecnología",
    subtitle: "Soluciones a la medida para tu negocio",
    items: [
      "Sistemas de gestión a medida",
      "Sitios web institucionales",
      "Automatización de procesos internos",
      "Soporte y evolución posterior a la entrega",
    ],
  },
];

const method = [
  {
    n: "01",
    title: "Precisión",
    text: "Cada proyecto parte de un alcance definido por escrito: qué se construye, cómo y en qué plazos.",
  },
  {
    n: "02",
    title: "Claridad",
    text: "Contratos claros y comunicación directa. Sabes en qué etapa está tu proyecto en todo momento.",
  },
  {
    n: "03",
    title: "Respaldo",
    text: "Entregamos con garantía y soporte posterior, tanto en la obra física como en la solución digital.",
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
              Infraestructura física y digital
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Construimos los cimientos físicos y digitales de tu éxito.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Obras menores, acabado de edificios y soluciones tecnológicas a la medida para empresas
              que buscan calidad, orden y seguridad en cada entrega.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-md bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
              >
                Conversemos tu proyecto
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
            <h2 className="text-3xl font-extrabold tracking-tight">Dos áreas, un mismo estándar</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Una sola empresa para lo que se construye y para lo que se programa.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {services.map((s) => (
                <article key={s.title} className="rounded-lg border border-line bg-paper p-8">
                  <h3 className="text-2xl font-extrabold text-brand">{s.title}</h3>
                  <p className="mt-1 font-medium">{s.subtitle}</p>
                  <ul className="mt-6 space-y-3 text-ink/80">
                    {s.items.map((i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="bg-ink text-white">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="text-3xl font-extrabold tracking-tight">Cómo trabajamos</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {method.map((m) => (
                <div key={m.n}>
                  <span className="text-sm font-bold tracking-widest text-white/50">{m.n}</span>
                  <h3 className="mt-2 text-xl font-bold">{m.title}</h3>
                  <p className="mt-3 text-white/70">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portafolio" className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="text-3xl font-extrabold tracking-tight">Portafolio</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Proyectos de infraestructura y tecnología. Estamos preparando los primeros casos.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["Infraestructura", "Tecnología", "Infraestructura"].map((k, i) => (
                <div
                  key={i}
                  className="flex aspect-[4/3] flex-col items-center justify-center rounded-lg border border-dashed border-line bg-white text-center"
                >
                  <Isotipo color="#1D5A91" className="h-10 w-auto opacity-30" />
                  <p className="mt-4 text-sm font-semibold text-muted">{k}</p>
                  <p className="text-xs text-muted/70">Próximamente</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Hablemos de tu proyecto</h2>
              <p className="mt-4 max-w-md text-muted">
                Cuéntanos qué necesitas. Un especialista analizará tu requerimiento y te responderá
                con una propuesta clara.
              </p>
              <a
                href={whatsappUrl("Hola UnoDev, quisiera conversar sobre un proyecto.")}
                className="mt-8 inline-block font-semibold text-brand hover:underline"
              >
                Escribir directo por WhatsApp →
              </a>
              {site.email && <p className="mt-3 text-muted">{site.email}</p>}
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
