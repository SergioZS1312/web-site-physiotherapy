"use client";

import Image from "next/image";

export const problemsContent = {
  title: "Problemas que tratamos",
  description:
    "Soluciones especializadas para cada tipo de dolor o lesion. Nuestro equipo esta preparado para ayudarte.",

  items: [
    {
      title: "Dolor de espalda",
      description:
        "Tratamiento especializado para lumbalgia, hernias discales y problemas posturales",
      image:
        "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Lesiones deportivas",
      description:
        "Recuperacion rapida y efectiva para atletas y deportistas de todos los niveles",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Contracturas musculares",
      description:
        "Alivio inmediato del dolor y tension muscular con tecnicas avanzadas",
      image:
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Rehabilitacion post cirugia",
      description:
        "Programa personalizado para recuperar movilidad y funcionalidad completa",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Dolor cervical",
      description:
        "Soluciones efectivas para torticolis, cervicalgia y problemas de cuello",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Tendinitis",
      description:
        "Tratamiento integral para inflamacion de tendones y dolor articular",
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

const ProblemsSection = () => {
  const scrollToSectionById = (id: string): void => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="problemas"
      className="bg-surface-0 px-6 py-24 md:px-[8%] md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <h2
            className={
              "text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.95] text-primary-700"
            }
          >
            Problemas que tratamos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-600 sm:mt-6 sm:text-lg">
            Soluciones especializadas para cada tipo de dolor o lesion. Nuestro
            equipo esta preparado para ayudarte
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problemsContent.items.map((problem) => (
            <article
              key={problem.title}
              className="group relative h-80 overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={problem.image}
                  alt={problem.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-primary-950/95 via-primary-900/60 to-transparent transition-opacity duration-500 group-hover:from-primary-700/95 group-hover:via-primary-700/70" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="mb-3 text-2xl font-black uppercase leading-tight text-surface-0 transition-all duration-300">
                  {problem.title}
                </h3>
                <p className="text-sm text-surface-0/90 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {problem.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-surface-0 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border-l-4 border-primary-600 bg-primary-50 p-6 text-center md:p-8">
          <p className="text-base text-secondary-700 md:text-lg">
            ¿No encuentras tu caso? Te ayudamos a encontrar la mejor solución
            para ti.
          </p>
          <button
            type="button"
            onClick={() => scrollToSectionById("contact")}
            className="mt-5 bg-primary-700 px-8 py-3 text-xs font-black uppercase tracking-[0.14em] text-surface-0 transition-all duration-300 hover:bg-primary-800"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
