'use client';

import { 
  FiCalendar,
  FiClock,
  FiMessageCircle,
  FiPhone,
  FiStar
} from "react-icons/fi";

import { FaLightbulb, FaShieldAlt } from "react-icons/fa";

const scrollToSectionById = (id: string): void => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const PrimaryCtaSection = () => {
  return (
    <section className="relative overflow-hidden bg-secondary-900 px-6 py-20 md:px-[8%] md:py-28">
      {/* Background Image with Better Visibility */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-50 scale-105 blur-[1px]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80')" }}
      />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-900/75 via-primary-800/70 to-secondary-900/80" />

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 top-0 h-full w-1/3 rotate-12 bg-linear-to-b from-surface-0 to-transparent" />
        <div className="absolute -left-20 bottom-0 h-full w-1/3 -rotate-12 bg-linear-to-t from-surface-0 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Badge with glow */}
        <div className="mb-6 inline-flex items-center gap-2 animate-pulse border-2 border-primary-300/50 bg-primary-500/20 px-5 py-2 text-xs font-bold uppercase tracking-wide text-surface-0 shadow-lg shadow-primary-500/50 backdrop-blur-sm sm:px-8 sm:py-3 sm:text-sm sm:tracking-wider">
          <FaLightbulb className="h-5 w-5" strokeWidth={2.2} />
          Da el primer paso hoy
        </div>

        {/* Main Heading with text shadow for better readability */}
        <h2 className="mb-6 text-4xl font-black uppercase leading-[0.95] text-surface-0 drop-shadow-2xl sm:text-5xl md:text-7xl">
          ¿Listo para<br />
          <span className="text-primary-300">recuperar</span> tu<br />
          movilidad?
        </h2>

        {/* Subheading with better contrast */}
        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-surface-0/95 drop-shadow-lg sm:mb-12 sm:text-xl md:text-2xl">
          Agenda tu <strong className="text-primary-200">evaluación sin costo</strong> y comienza tu proceso de recuperación con nuestro equipo especializado
        </p>

        {/* CTA Buttons - Enhanced Design */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {/* Primary CTA - Calendar */}
          <button
            onClick={() => scrollToSectionById('contact')}
            className="group relative w-full overflow-hidden bg-primary-700 px-6 py-4 font-black uppercase tracking-wide text-surface-0 shadow-2xl shadow-primary-500/30 transition-all duration-300 hover:scale-105 hover:bg-primary-800 hover:shadow-primary-400/50 sm:w-auto sm:px-12 sm:py-6"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:gap-3 sm:text-lg">
              <FiCalendar className="h-7 w-7" strokeWidth={2.5} />
              Agenda tu cita ahora
            </span>
          </button>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden bg-primary-700 px-6 py-4 font-black uppercase tracking-wide text-surface-0 shadow-2xl shadow-primary-500/40 transition-all duration-300 hover:scale-105 hover:bg-primary-800 hover:shadow-primary-600/50 sm:w-auto sm:gap-3 sm:px-12 sm:py-6"
          >
            <FiMessageCircle className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12" strokeWidth={2.5} />
            <span className="text-sm sm:text-lg">Escríbenos por WhatsApp</span>
          </a>
        </div>

        {/* Quick Info Cards - Enhanced with better visibility */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:mt-16 md:grid-cols-3">
          <div className="group border-l-4 border-primary-300 bg-surface-0/15 p-6 backdrop-blur-md transition-all duration-300 hover:bg-surface-0/25 hover:shadow-2xl sm:p-8">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="shrink-0 pt-0.5 transition-transform duration-300 group-hover:scale-110">
                <FiPhone className="h-10 w-10 text-primary-200 sm:h-12 sm:w-12" strokeWidth={2} />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-wider text-primary-200">Llámanos ahora</p>
                <p className="mt-3 text-xl font-black text-surface-0 drop-shadow-lg">+57 123 456 7890</p>
              </div>
            </div>
          </div>

          <div className="group border-l-4 border-primary-300 bg-surface-0/15 p-6 backdrop-blur-md transition-all duration-300 hover:bg-surface-0/25 hover:shadow-2xl sm:p-8">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="shrink-0 pt-0.5 transition-transform duration-300 group-hover:scale-110">
                <FiClock className="h-10 w-10 text-primary-200 sm:h-12 sm:w-12" strokeWidth={2} />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-wider text-primary-200">Horario de atención</p>
                <p className="mt-3 text-xl font-black text-surface-0 drop-shadow-lg">Lun - Vie: 8am - 7pm</p>
              </div>
            </div>
          </div>

          <div className="group border-l-4 border-primary-300 bg-surface-0/15 p-6 backdrop-blur-md transition-all duration-300 hover:bg-surface-0/25 hover:shadow-2xl sm:p-8">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="shrink-0 pt-0.5 transition-transform duration-300 group-hover:scale-110">
                <FaShieldAlt className="h-10 w-10 text-primary-200 sm:h-12 sm:w-12" strokeWidth={2} />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-wider text-primary-200">Primera consulta</p>
                <p className="mt-3 text-xl font-black text-surface-0 drop-shadow-lg">Evaluación GRATIS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators - Better contrast */}
        <div className="mt-10 rounded-2xl bg-surface-0/10 px-4 py-4 backdrop-blur-sm sm:mt-12 sm:rounded-full sm:px-8">
          <p className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-surface-0 drop-shadow-lg sm:gap-3 sm:text-lg">
            <span className="flex gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <FiStar key={star} className="h-6 w-6 fill-current" />
              ))}
            </span>
            <span className="text-primary-200">Más de 2,000 pacientes recuperados</span> | 95% de satisfacción
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrimaryCtaSection;
