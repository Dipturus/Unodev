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
      projectsTitle="Así trabajamos"
      projectsNote="Del montaje de tabiques y cielos a las terminaciones finales: las etapas de una remodelación de un local comercial."
      slidesNote="Imágenes ilustrativas."
      slides={[
        {
          src: "/proyectos/cafeteria-1-estructura.jpg",
          alt: "Cuadrilla instalando tabiques metálicos, cielos y cableado en un piso de oficinas",
          caption: "1. Estructura: tabiquería, cielos e instalaciones",
        },
        {
          src: "/proyectos/cafeteria-2-obra-gruesa.jpg",
          alt: "Mesón de cafetería en obra gruesa con instalaciones sanitarias a la vista",
          caption: "2. Obra gruesa: mesones e instalaciones",
        },
        {
          src: "/proyectos/cafeteria-3-avance.jpg",
          alt: "Cuadrilla trabajando en una cafetería con muros pintados y mesón terminado",
          caption: "3. Avance: muros, mesón y carpintería",
        },
        {
          src: "/proyectos/cafeteria-4-terminaciones.jpg",
          alt: "Instalación de cerámica en el piso de una cafetería con muros verdes",
          caption: "4. Terminaciones: pisos, pintura e iluminación",
        },
        {
          src: "/proyectos/cafeteria-5-resultado.jpg",
          alt: "Cafetería terminada con clientes, mesón curvo y grandes ventanales",
          caption: "5. Resultado: espacio listo para funcionar",
        },
      ]}
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
