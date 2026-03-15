"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
};

const CAL_LINK = "tu-usuario/cita-fisioterapia"; // ← tu link

const SOCIAL_LINKS = [
  // ← Cambia estos links por los tuyos
  { label: "Instagram", href: "https://instagram.com/tu_usuario", icon: "📸" },
  { label: "Facebook", href: "https://facebook.com/tu_pagina", icon: "👍" },
  { label: "WhatsApp", href: "https://wa.me/573001234567", icon: "💬" },
];

export default function SuccessModal({
  isOpen,
  onClose,
  name,
}: SuccessModalProps) {
  // Cerrar con Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const firstName = name.split(" ")[0];

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "cita-fisioterapia" });
      cal("ui", { theme: "light", hideEventTypeDetails: false });
    })();
  }, []);

  return (
    // Overlay
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative w-full max-w-md border-t-4 border-primary-600 bg-surface-0 p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()} // evitar cerrar al hacer clic dentro
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-secondary-700 transition-colors hover:text-secondary-900"
          aria-label="Cerrar"
        >
          ✕
        </button>

        {/* Ícono */}
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-3xl">
            ✅
          </div>
        </div>

        {/* Mensaje */}
        <h2 className="mb-2 text-center text-2xl font-black uppercase tracking-wide text-secondary-900">
          ¡Recibimos tu solicitud!
        </h2>
        <p className="mb-1 text-center text-secondary-600">
          Gracias, <strong>{firstName}</strong>. Nos pondremos en contacto
          contigo a la brevedad.
        </p>
        <p className="mb-6 text-center text-sm text-secondary-600">
          Revisa tu correo — te enviamos una confirmación.
        </p>

        {/* Redes sociales */}
        <div className="mb-6">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-wide text-secondary-500">
            Síguenos en redes
          </p>
          <div className="flex justify-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-secondary-200 px-4 py-2 text-sm font-semibold text-secondary-700 transition-all hover:border-primary-600 hover:text-primary-700"
              >
                <span>{icon}</span>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* <button
          data-cal-namespace="cita-fisioterapia"
          data-cal-link={CAL_LINK}
          data-cal-config='{"layout":"month_view"}'
          className="mb-4 w-full border-2 border-primary-700 px-8 py-3 font-black uppercase tracking-wide text-primary-700 transition-all hover:bg-primary-700 hover:text-surface-0"
        >
          📅 Agendar cita ahora
        </button> */}

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="w-full bg-primary-700 px-8 py-3 font-black uppercase tracking-wide text-surface-0 transition-all hover:bg-primary-800"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
