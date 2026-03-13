"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiActivity, FiClock, FiHome } from "react-icons/fi";

export const heroImages = [
  "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=2070&q=80",
];

const HeroSection = () => {
  const [activeImage, setActiveImage] = useState<number>(0);
  const quickBenefits = [
    {
      icon: FiActivity,
      title: "Evaluacion funcional real",
      description:
        "No hacemos rutinas genericas: ajustamos cada sesion a tu dolor y objetivo.",
    },
    {
      icon: FiHome,
      title: "Consultorio o domicilio",
      description:
        "Te atendemos donde mejor te funcione, con seguimiento clinico constante.",
    },
    {
      icon: FiClock,
      title: "Respuesta agil por WhatsApp",
      description:
        "Te orientamos rapido para que no dejes avanzar la molestia.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center ">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === activeImage ? "opacity-100" : "opacity-0"}`}
            aria-hidden="true"
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-cover object-center brightness-90 saturate-95"
              priority={index === 0}
              unoptimized
            />
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0 bg-linear-to-br from-surface-0/82 via-surface-0/78 to-primary-100/65"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-linear-to-r from-surface-0/35 via-transparent to-primary-950/25"
        aria-hidden="true"
      />
      <div
        className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-primary-300/35 blur-3xl animate-drift"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-primary-600/25 blur-3xl animate-drift-delayed"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-primary-200/40 blur-3xl animate-drift"
        aria-hidden="true"
      />

      <div className="relative z-30 mx-auto min-h-[120vh] sm:min-h-screen w-full max-w-400 px-4 pb-10 pt-28 sm:px-5 sm:pb-12 sm:pt-24 md:px-[4%] md:pb-12 md:pt-18 lg:pb-14 xl:px-[3%]">
        <div className="absolute left-4 right-4 top-24 max-w-4xl text-left sm:left-5 sm:right-auto sm:top-24 md:left-[4%] md:w-[62%] lg:top-1/2 lg:transform lg:-translate-y-1/2 xl:left-[3%] xl:w-[58%] 2xl:w-[52%]">
          <p className="mb-4 inline-flex items-center gap-2 border border-primary-400/45 bg-surface-0/85 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-primary-800 backdrop-blur-sm sm:mb-5 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.17em]">
            <span
              className="inline-block h-2 w-2 rounded-full bg-primary-600 animate-glow-pulse"
              aria-hidden="true"
            />
            Fisioterapia en Colombia con atencion humana y precisa
          </p>

          <h1 className="font-display text-4xl leading-[0.92] font-black uppercase tracking-[-0.02em] text-primary-950 drop-shadow-sm sm:text-5xl md:text-6xl xl:text-7xl">
            Recupera tu movimiento.
            <span className="block text-primary-700">
              Vuelve a vivir sin dolor
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-primary-900/90 md:mt-5 md:text-lg">
            Tratamos lesiones deportivas, dolor lumbar, cervical y
            rehabilitacion postquirurgica con un plan personalizado que acelera
            tu regreso a la actividad.
          </p>

          <div className="mt-4 sm:hidden">
            <span className="inline-flex items-center border border-primary-300/80 bg-surface-0/85 px-3 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-primary-800 backdrop-blur-sm">
              {quickBenefits[0].title}
            </span>
          </div>

          <div className="mt-4 hidden flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.12em] text-primary-800 sm:flex sm:text-[11px] sm:tracking-[0.13em]">
            <span className="border border-primary-300/80 bg-surface-0/85 px-3 py-2 backdrop-blur-sm">
              Primera valoracion clara
            </span>
            <span className="border border-primary-300/80 bg-surface-0/85 px-3 py-2 backdrop-blur-sm">
              Seguimiento real
            </span>
            <span className="border border-primary-300/80 bg-surface-0/85 px-3 py-2 backdrop-blur-sm">
              Atencion en consultorio y domicilio
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-3">
            <a
              href="3118036269"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary-700 bg-primary-700 px-7 py-3.5 text-[11px] font-black uppercase tracking-[0.14em] text-surface-0 transition hover:bg-primary-800 sm:px-10 sm:py-4 sm:text-xs"
            >
              <FaWhatsapp className="h-5 w-5" />
              Agendar por WhatsApp
            </a>
            <span className="inline-flex items-center justify-center border border-primary-300/75 bg-surface-0/80 px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.11em] text-primary-800 backdrop-blur-sm sm:px-5 sm:py-4 sm:text-xs sm:tracking-[0.12em]">
              Horarios flexibles de lunes a sabado
            </span>
          </div>

          <div className="mt-6 border border-primary-300/70 bg-surface-0/82 p-4 backdrop-blur-sm sm:hidden">
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-primary-700">
              Plan de recuperacion
            </p>
            <p className="mt-2 text-sm font-extrabold uppercase tracking-[0.07em] text-primary-900">
              {quickBenefits[2].title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-primary-900/80">
              {quickBenefits[2].description}
            </p>
          </div>
        </div>

        <aside className="absolute right-[3%] top-28 hidden w-[36%] max-w-xl border border-primary-300/70 bg-surface-0/82 p-6 backdrop-blur-md 2xl:block 2xl:p-7 2xl:top-1/2 2xl:transform 2xl:-translate-y-1/2">
          <div className="absolute -right-3 -top-3 border border-primary-200 bg-primary-700 px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-surface-0">
            Plan de recuperacion
          </div>
          <h2 className="font-display text-2xl uppercase leading-tight text-primary-900 md:text-3xl">
            Tu cuerpo no necesita pausa.
            <span className="block text-primary-700">Necesita estrategia.</span>
          </h2>
          <div className="mt-6 space-y-4">
            {quickBenefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-3 border border-primary-200/70 bg-surface-0/70 p-3"
              >
                <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-primary-300 bg-primary-50 text-primary-700">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-primary-900">
                    {title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-primary-900/80">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HeroSection;
