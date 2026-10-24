import { whatsappUrl } from "@/config/site";
import { Logo } from "./Logo";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#metodo", label: "Método" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" aria-label="UnoDev, inicio">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/80 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-brand">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={whatsappUrl("Hola UnoDev, quisiera conversar sobre un proyecto.")}
          className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Solicitar reunión
        </a>
      </div>
    </header>
  );
}
