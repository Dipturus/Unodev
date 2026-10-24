"use client";

import { useState } from "react";
import { whatsappUrl } from "@/config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export type Area = "construccion" | "tecnologia";

// Cada página de área identifica su origen en el mensaje que llega por WhatsApp.
const areaInfo: Record<Area, { intro: string; origin: string }> = {
  construccion: {
    intro: "quisiera cotizar una obra o remodelación",
    origin: "Página de Construcción y remodelación de espacios",
  },
  tecnologia: {
    intro: "quisiera cotizar una solución tecnológica",
    origin: "Página de Soluciones tecnológicas",
  },
};

const inputClass =
  "w-full rounded-md border border-line bg-white px-3 py-2.5 text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

// Arma el mensaje de primer contacto y lo abre en WhatsApp: no hay backend ni se guardan datos.
export function ContactForm({ area }: { area: Area }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [detail, setDetail] = useState("");

  const message = [
    `Hola UnoDev, ${areaInfo[area].intro}.`,
    `*Origen:* ${areaInfo[area].origin}`,
    `*Nombre:* ${name || "-"}`,
    `*Empresa:* ${company || "-"}`,
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
        Cuéntanos tu requerimiento
        <textarea rows={4} value={detail} onChange={(e) => setDetail(e.target.value)} className={`${inputClass} mt-1`} />
      </label>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 font-semibold text-white transition hover:bg-brand-dark sm:w-auto"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Continuar por WhatsApp
      </button>
    </form>
  );
}
