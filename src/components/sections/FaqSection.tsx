"use client";

import { useState } from "react";

export const faqItems = [
  {
    question: "¿Cuanto dura una sesion de fisioterapia?",
    answer:
      "La sesion suele durar entre 45 y 60 minutos, segun tu evaluacion y el plan de tratamiento definido por el especialista.",
  },
  {
    question: "¿Necesito orden medica para agendar cita?",
    answer:
      "No siempre. Puedes agendar una valoracion inicial directamente y, si se requiere, te indicamos los soportes medicos recomendados.",
  },
  {
    question: "¿Atienden rehabilitacion postoperatoria?",
    answer:
      "Si. Trabajamos protocolos de recuperacion postoperatoria con seguimiento continuo para mejorar movilidad, fuerza y funcionalidad.",
  },
  {
    question: "¿Ofrecen atencion a domicilio?",
    answer:
      "Si, contamos con modalidad a domicilio en zonas seleccionadas. Escríbenos por WhatsApp para confirmar cobertura y horarios.",
  },
  {
    question: "¿Cuantas sesiones voy a necesitar?",
    answer:
      "Depende de tu diagnostico y objetivos. En la primera evaluacion estimamos un plan de sesiones con metas por etapas.",
  },
  {
    question: "¿Puedo pagar por paquete de sesiones?",
    answer:
      "Si, tenemos planes por sesiones individuales y paquetes con beneficios. Te compartimos opciones segun tu caso.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="bg-muted-50 px-6 py-20 md:px-[8%] md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <h2
            className={
              "text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.95] text-primary-700"
            }
          >
            Preguntas frecuentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-600 sm:mt-6 sm:text-lg">
            Respuestas rapidas para ayudarte a iniciar tu proceso con claridad
          </p>
        </div>
        <div className="mx-auto max-w-4xl space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden border-l-4 border-primary-600 bg-surface-0 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left sm:px-6"
                >
                  <span className="text-base font-bold text-secondary-900 sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary-600 text-primary-700 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-70"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-6 text-secondary-600 sm:px-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
