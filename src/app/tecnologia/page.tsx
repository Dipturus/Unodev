import type { Metadata } from "next";
import { AreaPage } from "@/components/AreaPage";

export const metadata: Metadata = {
  title: "Soluciones tecnológicas | UnoDev",
  description:
    "Sitios web, sistemas de gestión a medida y automatización de procesos para pequeñas y medianas empresas, con soporte posterior.",
};

export default function TecnologiaPage() {
  return (
    <AreaPage
      eyebrow="Tecnología"
      title="Soluciones tecnológicas a la medida de tu negocio"
      intro="Desarrollamos el software que tu operación necesita: sitios web, sistemas de gestión y automatización. Con alcance definido, entregas claras y soporte después del lanzamiento."
      services={[
        {
          title: "Sistemas de gestión a medida",
          text: "Herramientas pensadas para cómo trabaja tu empresa, no al revés.",
        },
        {
          title: "Sitios web institucionales",
          text: "Sitios rápidos y claros que presentan tu negocio y facilitan el contacto.",
        },
        {
          title: "Automatización de procesos",
          text: "Eliminamos tareas manuales repetitivas para ahorrar tiempo y reducir errores.",
        },
        {
          title: "Soporte y evolución",
          text: "Acompañamos la solución después de la entrega: mejoras, ajustes y resolución de problemas.",
        },
      ]}
      projectsNote="Estamos preparando los primeros casos de sistemas y sitios web."
      area="tecnologia"
      respaldo="Entregamos cada solución con garantía y soporte posterior, para que siga funcionando y evolucione con tu negocio."
      whatsappMessage="Hola UnoDev, quisiera cotizar una solución tecnológica. (Enviado desde la página de Tecnología)"
    />
  );
}
