"use client";

export const processSteps = [
  {
    step: "01",
    title: "Evaluacion inicial",
    description:
      "Analizamos tu historial, dolor, postura y movilidad para entender el origen del problema.",
  },
  {
    step: "02",
    title: "Diagnostico",
    description:
      "Definimos un diagnostico funcional claro y objetivos de recuperacion medibles.",
  },
  {
    step: "03",
    title: "Plan de tratamiento",
    description:
      "Disenamos sesiones personalizadas con tecnicas seguras y progresivas para tu caso.",
  },
  {
    step: "04",
    title: "Seguimiento",
    description:
      "Controlamos avances, ajustamos cargas y prevenimos recaidas hasta el alta funcional.",
  },
];

const ProcessSection = () => {
  return (
    <section
      id="proceso"
      className="bg-surface-0 px-6 py-24 md:px-[8%] md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <h2
            className={
              "text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.95] text-primary-700"
            }
          >
            Proceso de tratamiento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-600 sm:mt-6 sm:text-lg">
            Así trabajamos cada caso para lograr una recuperación segura,
            progresiva y medible
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((item) => (
            <article
              key={item.step}
              className="group border border-secondary-200 bg-muted-100 p-7 transition duration-300 hover:-translate-y-1 hover:border-primary-700 hover:bg-surface-0"
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-primary-700">
                Paso {item.step}
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.02em] leading-[0.95]">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-secondary-600">
                {item.description}
              </p>
              <div className="mt-5 h-0.5 w-12 bg-primary-700 transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
