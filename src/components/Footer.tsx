import { site } from "@/config/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between">
        <Logo tone="dark" />
        <div className="text-sm text-white/60">
          {site.email && <p>{site.email}</p>}
          {site.location && <p>{site.location}</p>}
          <p className="mt-2">© 2026 UnoDev. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
