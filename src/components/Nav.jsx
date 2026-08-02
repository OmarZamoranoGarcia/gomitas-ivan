"use client";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <li><a href="#catalogo" onClick={() => setOpen(false)}>Catálogo</a></li>
      <li><a href="#ubicacion" onClick={() => setOpen(false)}>Ubicación</a></li>
    </>
  );

  return (
    <nav className="bg-[var(--color-background)] fixed top-0 z-50 w-full">
      <div className="flex items-center justify-between p-4">
        <div className="font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--color-text-primary)]">
          TJ<span className="text-[var(--color-red)]"> Gomiland</span>
        </div>

        {/* Links desktop */}
        <ul className="hidden md:flex font-semibold flex-row gap-8 text-[var(--color-text-primary)] text-xl">
          {links}
        </ul>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-[var(--color-text-primary)] text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <LuX /> : <LuMenu />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 font-semibold text-[var(--color-text-primary)] text-lg bg-[var(--color-background)] border-t border-white/10">
          {links}
        </ul>
      )}
    </nav>
  );
}