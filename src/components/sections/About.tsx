"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { FaGraduationCap, FaHeart, FaBolt } from "react-icons/fa";
import CounterAnimation from "../ui/CounterAnimation";

const valueIcons: Record<string, ReactNode> = {
  professionalism: <FaGraduationCap className="h-6 w-6" strokeWidth={2.2} />,
  experience: <FaBolt className="h-6 w-6" strokeWidth={2.2} />,
  commitment: <FaHeart className="h-6 w-6" strokeWidth={2.2} />,
};

export const aboutStats = [
  { target: 15, suffix: "+", label: "Años de experiencia" },
  { target: 2000, suffix: "+", label: "Pacientes recuperados" },
  { target: 95, suffix: "%", label: "Tasa de satisfacción" },
];

export const aboutValues = [
  {
    id: "professionalism",
    title: "Profesionalismo",
    desc: "Certificaciones nacionales e internacionales",
  },
  {
    id: "experience",
    title: "Experiencia",
    desc: "Especialistas en rehabilitacion y alto rendimiento",
  },
  {
    id: "commitment",
    title: "Compromiso",
    desc: "Seguimiento continuo y atencion personalizada",
  },
];

const AboutSection = () => {
  return (
    <section
      id="nosotros"
      className="bg-muted-50 px-6 py-24 md:px-[8%] md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <h2
            className={
              "text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.95] text-primary-700"
            }
          >
            Sobre nosotros
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-600 sm:mt-6 sm:text-lg">
            Un equipo comprometido con tu recuperación y bienestar
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative h-100 overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src={"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"}
                  alt="Equipo de fisioterapia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="absolute bottom-6 left-6 bg-primary-700 p-6 text-surface-0 shadow-xl">
                <div className="text-4xl font-black">
                  <CounterAnimation target={15} suffix="+" />
                </div>
                <div className="mt-1 text-sm font-semibold uppercase tracking-wide">
                  Años en el sector
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="h-28 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src={"https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=600&q=80"}
                    alt="Equipo 1"
                    fill
                    sizes="(max-width: 1024px) 33vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-110"
                    unoptimized
                  />
                </div>
              </div>
              <div className="h-28 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src={"https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80"}
                    alt="Equipo 2"
                    fill
                    sizes="(max-width: 1024px) 33vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-110"
                    unoptimized
                  />
                </div>
              </div>
              <div className="h-28 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src={"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80"}
                    alt="Equipo 3"
                    fill
                    sizes="(max-width: 1024px) 33vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-110"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-3xl font-black uppercase leading-tight text-secondary-900">
              Expertos en recuperación y rendimiento físico
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-secondary-600">
              Somos un equipo de fisioterapeutas especializados en
              rehabilitación, readaptación deportiva y bienestar físico.
              Aplicamos protocolos basados en evidencia con atención
              personalizada.
            </p>

            <div className="space-y-4">
              {aboutValues.map((value) => (
                <div
                  key={value.title}
                  className="group flex items-start gap-4 border-l-4 border-primary-600 bg-surface-0 p-5 transition-all duration-300 hover:border-primary-600 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 transition-transform duration-300 group-hover:scale-110">
                    {valueIcons[value.id]}
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-secondary-900">
                      {value.title}
                    </h4>
                    <p className="text-sm text-secondary-600">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="border-t-4 border-primary-600 bg-surface-0 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl font-black text-primary-700">
                <CounterAnimation target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-wider text-secondary-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
