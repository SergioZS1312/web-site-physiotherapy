'use client';

import { FiStar } from "react-icons/fi";

export const testimonialReviews = [
  {
    name: 'Carla Mendoza',
    context: 'Rehabilitación de rodilla',
    text: 'Excelente atención desde la primera sesión. Me explicaron todo el proceso y pude volver a caminar sin dolor.',
    rating: 5,
    date: 'Hace 2 semanas',
  },
  {
    name: 'Luis Ramírez',
    context: 'Lesión deportiva',
    text: 'Llegué con tendinitis y hoy entreno nuevamente. El plan fue claro, progresivo y adaptado a mis tiempos.',
    rating: 5,
    date: 'Hace 1 mes',
  },
  {
    name: 'Paula Díaz',
    context: 'Dolor cervical',
    text: 'Noté mejoría desde la segunda cita. Muy profesionales, puntuales y con seguimiento constante.',
    rating: 5,
    date: 'Hace 3 semanas',
  },
  {
    name: 'Jorge Pineda',
    context: 'Post cirugía de hombro',
    text: 'Me ayudaron a recuperar movilidad y fuerza sin forzar el proceso. Recomiendo totalmente su enfoque.',
    rating: 5,
    date: 'Hace 1 semana',
  },
  {
    name: 'Mariana Suárez',
    context: 'Pausas activas empresariales',
    text: 'Implementamos el programa en la empresa y el equipo está mucho mejor. Excelente ejecución.',
    rating: 5,
    date: 'Hace 2 meses',
  },
  {
    name: 'David Ortega',
    context: 'Lumbalgia',
    text: 'Después de varias terapias sin resultado, aquí sí vi cambios reales. Muy profesional.',
    rating: 5,
    date: 'Hace 5 días',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="bg-muted-50 px-6 py-20 md:px-[8%] md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className='mb-12 text-center md:mb-16'>
          <h2 className={'text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.95] text-primary-700'}>
            Lo que dicen nuestros pacientes
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-600 sm:mt-6 sm:text-lg'>
            Testimonios reales de personas que confiaron en nuestro equipo para su recuperación
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialReviews.map((item, index) => (
            <article
              key={index}
              className="rounded-lg border-l-4 border-primary-600 bg-surface-0 p-6 shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center gap-1 text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mb-5 text-base leading-relaxed text-secondary-700">"{item.text}"</p>

              <div className="border-t border-secondary-200 pt-4">
                <p className="font-bold text-secondary-900">{item.name}</p>
                <p className="mt-1 text-sm text-secondary-500">{item.context}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-secondary-600">
                  {item.date}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-linear-to-r from-primary-600 to-primary-700 p-8 text-center text-surface-0 shadow-xl md:p-10">
          <p className="text-2xl font-black uppercase tracking-tight md:text-3xl">
            Más de 500 pacientes atendidos
          </p>
          <p className="mt-3 text-lg opacity-95">
            Confía en nuestro equipo para tu recuperación
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
