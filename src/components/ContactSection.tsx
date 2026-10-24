import { site, whatsappUrl } from "@/config/site";
import { ContactForm, type Area } from "./ContactForm";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = { area: Area; message: string };

export function ContactSection({ area, message }: Props) {
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
            className="mt-8 inline-flex items-center gap-2 font-semibold text-brand hover:underline"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Escribir directo por WhatsApp →
          </a>
          {site.email && <p className="mt-3 text-muted">{site.email}</p>}
        </div>
        <ContactForm area={area} />
      </div>
    </section>
  );
}
