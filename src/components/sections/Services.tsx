'use client';

import { ReactNode } from 'react';

import { FiActivity, FiHeart, FiZap } from "react-icons/fi";
import { FaDumbbell, FaHandPaper, FaShieldAlt } from "react-icons/fa";

import CounterAnimation from '../ui/CounterAnimation';

const serviceIcons: Record<string, ReactNode> = {
  'sports-physio': <FaDumbbell className="h-10 w-10" strokeWidth={1.8} />,
  'manual-therapy': <FaHandPaper className="h-10 w-10" strokeWidth={1.8} />,
  'physical-rehab': <FiActivity className="h-10 w-10" strokeWidth={1.8} />,
  'electrotherapy': <FiZap className="h-10 w-10" strokeWidth={1.8} />,
  'massage-therapy': <FiHeart className="h-10 w-10" strokeWidth={1.8} />,
  'post-op-rehab': <FaShieldAlt className="h-10 w-10" strokeWidth={1.8} />,
};

export const serviceImages = [
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80',
];

export const serviceStats = [
  { target: 100, suffix: '%', label: 'Personalizado' },
  { target: 15, suffix: '+', label: 'Años experiencia' },
  { target: 2000, suffix: '+', label: 'Pacientes' },
];

export const servicesList = [
  {
    id: 'sports-physio',
    title: 'Fisioterapia deportiva',
    desc: 'Tratamiento de lesiones en atletas y planes de retorno seguro a la actividad fisica.',
  },
  {
    id: 'manual-therapy',
    title: 'Terapia manual',
    desc: 'Tecnicas manuales para aliviar dolor, mejorar movilidad articular y reducir tension muscular.',
  },
  {
    id: 'physical-rehab',
    title: 'Rehabilitacion fisica',
    desc: 'Programas funcionales para recuperar fuerza, control motor y autonomia en actividades diarias.',
  },
  {
    id: 'electrotherapy',
    title: 'Electroterapia',
    desc: 'Aplicacion de corrientes terapeuticas para control del dolor y estimulacion muscular.',
  },
  {
    id: 'massage-therapy',
    title: 'Masoterapia',
    desc: 'Masaje terapeutico para descarga muscular, recuperacion post esfuerzo y bienestar integral.',
  },
  {
    id: 'post-op-rehab',
    title: 'Rehabilitacion postoperatoria',
    desc: 'Acompanamiento progresivo despues de cirugia para recuperar movilidad y volver a tus rutinas.',
  },
];

const ServicesSection = () => {

  return (
    <section id="services" className="bg-muted-50 px-6 py-24 md:px-[8%] md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className='mb-12 text-center md:mb-16'>
          <h2 className={'text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.95] text-primary-700'}>
            Nuestros servicios
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-600 sm:mt-6 sm:text-lg'>
            Tratamientos especializados diseñados para tu recuperación integral
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Image Mosaic */}
          <div className="grid grid-cols-2 gap-3">
            {/* Large Image - spans 2 rows */}
            <div className="row-span-2 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url('${serviceImages[0]}')`, minHeight: '400px' }}
              />
            </div>

            {/* Top Right Image */}
            <div className="overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url('${serviceImages[1]}')`, minHeight: '195px' }}
              />
            </div>

            {/* Middle Right Image */}
            <div className="overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url('${serviceImages[2]}')`, minHeight: '195px' }}
              />
            </div>

            {/* Bottom Left Image */}
            <div className="overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url('${serviceImages[3]}')`, minHeight: '195px' }}
              />
            </div>

            {/* Bottom Middle Image */}
            <div className="overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url('${serviceImages[4]}')`, minHeight: '195px' }}
              />
            </div>
          </div>

          {/* Right Column: Services List */}
          <div className="flex flex-col gap-6">
            {servicesList.map((service) => (
              <div
                key={service.title}
                className="group flex gap-5 border-l-4 border-transparent bg-linear-to-r from-muted-50 to-transparent p-6 transition-all duration-300 hover:border-primary-600 hover:from-primary-50 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="shrink-0 text-primary-600 transition-transform duration-300 group-hover:scale-110">
                  {serviceIcons[service.id]}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold uppercase tracking-tight text-secondary-900">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary-600">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {serviceStats.map((stat) => (
            <div key={stat.label}
              className="border-t-4 border-primary-600 bg-surface-0 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl font-black text-primary-700">
                <CounterAnimation target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-wider text-secondary-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
