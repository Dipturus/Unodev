"use client";

import { useState } from "react";
import { whatsappUrl } from "@/config/site";

const inputClass =
  "w-full rounded-md border border-line bg-white px-3 py-2.5 text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

// Arma el mensaje de primer contacto y lo abre en WhatsApp: no hay backend ni se guardan datos.
export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [kind, setKind] = useState("Infraestructura");
  const [detail, setDetail] = useState("");

  const message = [
    "Hola UnoDev, quisiera cotizar un proyecto.",
    `*Nombre:* ${name || "-"}`,
    `*Empresa:* ${company || "-"}`,
    `*Tipo de solución:* ${kind}`,
    detail && `*Requerimiento:* ${detail}`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(whatsappUrl(message), "_blank", "noopener");
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Nombre
          <input required value={name} onChange={(e) => setName(e.target.value)} className={`${inputClass} mt-1`} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Empresa
          <input value={company} onChange={(e) => setCompany(e.target.value)} className={`${inputClass} mt-1`} />
        </label>
      </div>
      <label className="block text-sm font-medium text-ink">
        Tipo de solución
        <select value={kind} onChange={(e) => setKind(e.target.value)} className={`${inputClass} mt-1`}>
          <option>Infraestructura</option>
          <option>Tecnología</option>
          <option>Ambas</option>
        </select>
      </label>
      <label className="block text-sm font-medium text-ink">
        Cuéntanos tu requerimiento
        <textarea rows={4} value={detail} onChange={(e) => setDetail(e.target.value)} className={`${inputClass} mt-1`} />
      </label>
      <button
        type="submit"
        className="w-full rounded-md bg-brand px-5 py-3 font-semibold text-white transition hover:bg-brand-dark sm:w-auto"
      >
        Continuar por WhatsApp
      </button>
    </form>
  );
}
