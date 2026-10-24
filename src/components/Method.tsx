const method = [
  {
    n: "01",
    title: "Precisión",
    text: "Cada proyecto parte de un alcance definido por escrito: qué se hace, cómo y en qué plazos.",
  },
  {
    n: "02",
    title: "Claridad",
    text: "Contratos claros y comunicación directa. Sabes en qué etapa está tu proyecto en todo momento.",
  },
  {
    n: "03",
    title: "Respaldo",
    text: "Entregamos con garantía y soporte posterior, tanto en el espacio físico como en la solución digital.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight">Cómo trabajamos</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          El mismo estándar en las dos áreas, porque detrás hay un solo equipo.
        </p>
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
  );
}
