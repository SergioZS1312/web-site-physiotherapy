'use client';

import Image from 'next/image';

export const teamMembers = [
  {
    name: 'Dra. Laura Martinez',
    role: 'Fisioterapeuta deportiva',
    specialty: 'Rehabilitacion de lesiones de alto rendimiento',
    experience: '12 anos de experiencia',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Lic. Andres Rojas',
    role: 'Especialista en terapia manual',
    specialty: 'Dolor lumbar, cervical y movilidad funcional',
    experience: '10 anos de experiencia',
    image: 'https://images.unsplash.com/photo-1614436163996-25cee5f54290?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dra. Valentina Perez',
    role: 'Fisioterapeuta clinica',
    specialty: 'Rehabilitacion postoperatoria y neurologica',
    experience: '8 anos de experiencia',
    image: 'https://images.unsplash.com/photo-1594824804732-ca8db26f2ccf?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Lic. Mateo Silva',
    role: 'Readaptador fisico',
    specialty: 'Retorno al deporte y prevencion de recaidas',
    experience: '9 anos de experiencia',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80',
  },
];

const TeamSection = () => {
  return (
    <section id="equipo" className="bg-surface-0 px-6 py-20 md:px-[8%] md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className='mb-12 text-center md:mb-16'>
          <h2 className={'text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.95] text-primary-700'}>
            Nuestro equipo
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-600 sm:mt-6 sm:text-lg'>
            Profesionales especializados que te acompanan en cada etapa de tu recuperacion
          </p>
        </div>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group w-[85vw] max-w-[320px] shrink-0 snap-start overflow-hidden border-t-4 border-primary-600 bg-surface-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 85vw, 320px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-secondary-900/80 to-transparent p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary-200">{member.experience}</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black uppercase leading-tight text-secondary-900">{member.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary-700">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-secondary-600">{member.specialty}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
