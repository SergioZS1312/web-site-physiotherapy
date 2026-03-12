'use client';

import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 sm:bottom-8 sm:right-8">
      {/* Tooltip */}
      <div
        className={`transform whitespace-nowrap rounded-lg bg-primary-700 px-4 py-2 text-xs font-bold uppercase tracking-wide text-surface-0 shadow-xl transition-all duration-300 sm:text-sm ${showTooltip
          ? 'translate-x-0 opacity-100'
          : 'translate-x-2 opacity-0 pointer-events-none'
          }`}
      >
        Agenda tu cita
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/573123456789?text=Hola,%20quiero%20agendar%20una%20cita"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green-600 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-700 sm:h-16 sm:w-16"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onTouchStart={() => setShowTooltip(true)}
        onTouchEnd={() => setTimeout(() => setShowTooltip(false), 2000)}
        aria-label="Agenda tu cita por WhatsApp"
      >
        <FaWhatsapp className="h-8 w-8 text-surface-0 sm:h-9 sm:w-9" strokeWidth={2.5} />

        {/* Pulse animation */}
        <span className="absolute -inset-1 animate-ping rounded-full bg-green-500 opacity-75"></span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
