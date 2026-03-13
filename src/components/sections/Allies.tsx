'use client';

import { FiCheck } from "react-icons/fi";
import Image from 'next/image';

export const alliesAthletes = [
  { name: 'Atleta 01', discipline: 'Running', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80' },
  { name: 'Atleta 02', discipline: 'CrossFit', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80' },
  { name: 'Atleta 03', discipline: 'Futbol', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80' },
  { name: 'Atleta 04', discipline: 'Ciclismo', image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=800&q=80' },
  { name: 'Atleta 05', discipline: 'Natación', image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=800&q=80' },
  { name: 'Atleta 06', discipline: 'Triatlón', image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&w=800&q=80' },
];

export const alliesCompany = [
  { name: 'RunCity Marathon', category: 'Evento' },
  { name: 'TechMove Corp', category: 'Empresa' },
  { name: 'Energy Brands', category: 'Marca' },
  { name: 'Wellness Group', category: 'Empresa' },
  { name: 'FitArena Games', category: 'Evento' },
  { name: 'ProFit Center', category: 'Centro deportivo' },
];

export const eventServices = ['Maratones', 'Eventos deportivos', 'Equipos deportivos', 'Activaciones de marca'];
export const corporateServices = ['Pausas activas', 'Jornadas de bienestar', 'Descargas musculares'];

const AlliesSection = () => {
  return (
    <section id="aliados" className="bg-surface-0 px-6 py-24 md:px-[8%] md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className='mb-12 text-center md:mb-16'>
          <h2 className={'text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.95] text-primary-700'}>
            Aliados y eventos
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-600 sm:mt-6 sm:text-lg'>
            Trabajamos con empresas y atletas brindando cobertura fisioterapeutica profesional
          </p>
        </div>

        {/* Mosaico de atletas */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-black uppercase tracking-tight text-primary-700 md:text-3xl">
            Atletas y embajadores
          </h3>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {alliesAthletes.map((athlete) => (
              <article
                key={athlete.name}
                className="group relative overflow-hidden rounded-xl"
              >
                {/* Imagen grande */}
                <div className="relative h-105 w-full overflow-hidden">
                  <div className="relative h-full w-full">
                    <Image
                      src={athlete.image}
                      alt={athlete.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />
                  </div>

                  {/* Overlay oscuro */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Información del atleta */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-linear-to-t from-black/90 to-transparent p-6 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-xl font-bold text-white">{athlete.name}</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-primary-300">
                    {athlete.discipline}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="mb-8 text-center text-2xl font-black uppercase tracking-tight text-primary-700 md:text-3xl">
            Empresas aliadas
          </h3>

          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 lg:grid-cols-6">
            {alliesCompany.map((ally) => (
              <article
                key={ally.name}
                className="min-w-37.5 shrink-0 rounded-lg border border-secondary-200 bg-white p-5 transition-all duration-300 hover:border-primary-600 hover:shadow-xl md:min-w-0"
              >
                <div className="flex h-20 items-center justify-center rounded-md bg-muted-50">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary-500">
                    Logo
                  </span>
                </div>

                <p className="mt-4 text-center text-sm font-bold text-secondary-900">
                  {ally.name}
                </p>

                <p className="mt-1 text-center text-xs font-semibold uppercase tracking-wide text-secondary-500">
                  {ally.category}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Event Services - Content Left / Image Right */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 md:items-center">
          {/* Content */}
          <div>
            <h3 className="mb-6 text-3xl font-black uppercase tracking-tight text-primary-700">
              Cobertura de eventos
            </h3>
            <p className="mb-8 text-lg text-secondary-600">
              Atención profesional durante maratones, competencias y activaciones deportivas.
            </p>
            <div className="space-y-4">
              {eventServices.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-l-4 border-primary-600 bg-primary-50 p-4 transition-all duration-300 hover:bg-primary-100"
                >
                  <FiCheck className="h-6 w-6 shrink-0 text-primary-600" strokeWidth={2.5} />
                  <span className="font-semibold text-secondary-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 h-64 overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src={'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80'}
                  alt="Evento 1"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-110"
                  unoptimized
                />
              </div>
            </div>
            <div className="h-40 overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src={'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80'}
                  alt="Evento 2"
                  fill
                  sizes="(max-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-110"
                  unoptimized
                />
              </div>
            </div>
            <div className="h-40 overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src={'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80'}
                  alt="Evento 3"
                  fill
                  sizes="(max-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-110"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Services - Image Left / Content Right */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 md:items-center">
          {/* Image */}
          <div className="order-2 grid grid-cols-2 gap-4 md:order-1">
            <div className="h-40 overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src={'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'}
                  alt="Corporativo 1"
                  fill
                  sizes="(max-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-110"
                  unoptimized
                />
              </div>
            </div>
            <div className="h-40 overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src={'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80'}
                  alt="Corporativo 2"
                  fill
                  sizes="(max-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-110"
                  unoptimized
                />
              </div>
            </div>
            <div className="col-span-2 h-64 overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src={'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'}
                  alt="Corporativo 3"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-110"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h3 className="mb-6 text-3xl font-black uppercase tracking-tight text-primary-700">
              Servicios corporativos
            </h3>
            <p className="mb-8 text-lg text-secondary-600">
              Bienestar y salud ocupacional para equipos de trabajo y empresas.
            </p>
            <div className="space-y-4">
              {corporateServices.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-l-4 border-primary-600 bg-primary-50 p-4 transition-all duration-300 hover:bg-primary-100"
                >
                  <FiCheck className="h-6 w-6 shrink-0 text-primary-600" strokeWidth={2.5} />
                  <span className="font-semibold text-secondary-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-linear-to-r from-primary-600 to-primary-600 p-10 text-center text-surface-0 shadow-xl">
          <p className="text-2xl font-black uppercase">
            ¿Necesitas cobertura para tu evento o empresa?
          </p>
          <p className="mt-3 text-lg text-primary-100">
            Contáctanos para una propuesta personalizada
          </p>
          <button className="mt-6 border-2 border-surface-0 bg-primary-700 px-8 py-3 font-bold uppercase tracking-wide text-surface-0 transition-all duration-300 hover:bg-primary-800 hover:border-primary-800">
            Solicitar cotización
          </button>
        </div>
      </div>
    </section>
  );
};

export default AlliesSection;
