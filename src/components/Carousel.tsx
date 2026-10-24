"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type Slide = { src: string; alt: string; caption: string };

const AUTOPLAY_MS = 5000;

const arrowClass =
  "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-ink shadow transition hover:bg-white";

export function Carousel({ slides }: { slides: Slide[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  // El avance automático se apaga para siempre en cuanto alguien interactúa.
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      const el = track.current;
      if (!el) return;
      const last = Math.round(el.scrollLeft / el.clientWidth) >= slides.length - 1;
      el.scrollTo({ left: last ? 0 : el.scrollLeft + el.clientWidth, behavior: "smooth" });
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [auto, slides.length]);

  function go(dir: 1 | -1) {
    setAuto(false);
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  }

  const stopAuto = () => setAuto(false);

  return (
    <div className="relative" role="region" aria-roledescription="carrusel" aria-label="Proyectos">
      <div
        ref={track}
        onPointerDown={stopAuto}
        onTouchStart={stopAuto}
        onWheel={stopAuto}
        onFocus={stopAuto}
        onScroll={(e) => {
          const el = e.currentTarget;
          setIndex(Math.round(el.scrollLeft / el.clientWidth));
        }}
        className="flex snap-x snap-mandatory overflow-x-auto rounded-lg [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s) => (
          <figure key={s.src} className="relative aspect-[1408/768] w-full shrink-0 snap-center">
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(min-width: 1152px) 1112px, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-6 pb-5 pt-16 text-sm font-semibold text-white sm:text-base">
              {s.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <button type="button" onClick={() => go(-1)} aria-label="Imagen anterior" className={`${arrowClass} left-3`}>
        ←
      </button>
      <button type="button" onClick={() => go(1)} aria-label="Imagen siguiente" className={`${arrowClass} right-3`}>
        →
      </button>

      <p className="mt-3 text-center text-sm text-muted" aria-live="polite">
        {index + 1} / {slides.length}
      </p>
    </div>
  );
}
