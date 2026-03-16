"use client";

import { ReactNode } from "react";
import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ContactForm";
import dynamic from "next/dynamic";

// Carga dinámica para evitar errores de SSR
// const CalEmbed = dynamic(() => import("@/components/sections/CalEmbed"), {
//   ssr: false,
//   loading: () => (
//     <div className="flex h-96 items-center justify-center">
//       <p className="text-secondary-400">Cargando calendario...</p>
//     </div>
//   ),
// });

export const contactInfoItems = [
  {
    id: "address",
    label: "Direccion",
    value: "Av. Salud 245, Ciudad, Colombia",
    color: "text-primary-600",
    bgColor: "bg-primary-50",
  },
  {
    id: "hours",
    label: "Horario",
    value: "Lun-Vie: 8am-7pm | Sab: 9am-2pm",
    color: "text-primary-600",
    bgColor: "bg-primary-50",
  },
];

const ContactSection = () => {
  const contactIcons: Record<string, ReactNode> = {
    address: <FiMapPin className="h-6 w-6" strokeWidth={2} />,
    hours: <FiClock className="h-6 w-6" strokeWidth={2} />,
  };

  return (
    <section
      id="contact"
      className="bg-surface-0 px-6 py-24 md:px-[8%] md:py-28"
    >
      {/* <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-2 text-center text-3xl font-black uppercase tracking-wide text-secondary-900">
            Agenda tu cita
          </h2>
          <p className="mb-8 text-center text-secondary-500">
            Selecciona el día y hora que mejor te convenga
          </p>
          <CalEmbed />
        </div>
      </section> */}
      
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <h2
            className={
              "text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.95] text-primary-700"
            }
          >
            Agenda tu cita
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-600 sm:mt-6 sm:text-lg">
            Completa el formulario y nos pondremos en contacto contigo en menos
            de 24 horas
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Contact Form */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Right: Info & Map */}
          <div className="order-1 space-y-6 lg:order-2">
            {/* Top contact row: Telefono + WhatsApp */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="group flex h-full min-h-30 flex-col justify-between bg-primary-50 p-6 transition-all duration-300 hover:shadow-lg">
                <div className="mb-3 text-primary-600">
                  <FiPhone className="h-6 w-6" strokeWidth={2} />
                </div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-secondary-700">
                  Telefono
                </p>
                <p className="font-semibold text-secondary-900">
                  +57 123 456 7890
                </p>
              </div>

              <a
                href="https://wa.me/571234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-30 flex-col justify-between bg-primary-50 p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-3 text-primary-600">
                  <FaWhatsapp className="h-6 w-6" strokeWidth={2} />
                </div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-secondary-700">
                  WhatsApp
                </p>
                <p className="font-semibold text-secondary-900">
                  +57 123 456 7890
                </p>
              </a>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactInfoItems.map((info) => (
                <div
                  key={info.id}
                  className={`group ${info.bgColor} p-6 transition-all duration-300 hover:shadow-lg`}
                >
                  <div className={`mb-3 ${info.color}`}>
                    {contactIcons[info.id]}
                  </div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-secondary-700">
                    {info.label}
                  </p>
                  <p className="font-semibold text-secondary-900">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="group overflow-hidden shadow-lg">
              <iframe
                title="Mapa de ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302891.6481166902!2d-74.27262003119694!3d4.648278403289357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e1!3m2!1ses!2sco!4v1773150945472!5m2!1ses!2sco"
                className="h-100 w-full border-0 transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
