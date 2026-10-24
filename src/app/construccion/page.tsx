import type { Metadata } from "next";
import { AreaPage } from "@/components/AreaPage";

export const metadata: Metadata = {
  title: "Construcción y remodelación de espacios | UnoDev",
  description:
    "Remodelaciones, ampliaciones y terminaciones para locales, oficinas y edificios, con alcance claro, plazos definidos y garantía.",
};

export default function ConstruccionPage() {
  return (
    <AreaPage
      eyebrow="Construcción"
      title="Construcción y remodelación de espacios"
      intro="Remodelamos, ampliamos y terminamos tu local, oficina o edificio. Cada obra parte con un alcance escrito, plazos definidos y respaldo después de la entrega."
      services={[
        {
          title: "Remodelaciones y ampliaciones",
          text: "Renovamos y ampliamos espacios existentes para que se adapten a cómo trabajas hoy.",
        },
        {
          title: "Terminaciones y acabados",
          text: "Pisos, muros, cielos, pintura y detalles finales para dejar el espacio listo para usar.",
        },
        {
          title: "Mantención y reparación",
          text: "Arreglos y mantención de obras para que tu espacio siga en buen estado.",
        },
        {
          title: "Planificación y supervisión",
          text: "Organizamos y supervisamos cada etapa para cumplir plazos y estándares de calidad.",
        },
      ]}
      projectsNote="Estamos preparando los primeros casos de obras y remodelaciones."
      kind="Construcción y remodelación"
      whatsappMessage="Hola UnoDev, quisiera cotizar una obra o remodelación."
      cross={{
        href: "/tecnologia",
        title: "¿Necesitas también una solución tecnológica?",
        text: "Sitios web, sistemas de gestión y automatización, con el mismo estándar.",
      }}
    />
  );
}
