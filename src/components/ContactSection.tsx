import { site, whatsappUrl } from "@/config/site";
import { ContactForm, type ProjectKind } from "./ContactForm";

type Props = { kind?: ProjectKind; message?: string };

export function ContactSection({ kind, message = "Hola UnoDev, quisiera conversar sobre un proyecto." }: Props) {
  return (
    <section id="contacto" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Hablemos de tu proyecto</h2>
          <p className="mt-4 max-w-md text-muted">
            Cuéntanos qué necesitas. Un especialista analizará tu requerimiento y te responderá con
            una propuesta clara.
          </p>
          <a
            href={whatsappUrl(message)}
            className="mt-8 inline-block font-semibold text-brand hover:underline"
          >
            Escribir directo por WhatsApp →
          </a>
          {site.email && <p className="mt-3 text-muted">{site.email}</p>}
        </div>
        <ContactForm defaultKind={kind} />
      </div>
    </section>
  );
}
