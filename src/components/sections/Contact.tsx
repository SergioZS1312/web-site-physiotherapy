"use client";

import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

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
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbybLRJOVlhROwbSygeJX4dJSHgYsWUZY4qzbLGPeJH427jggo6MSze30pVXQQ3u-YlumQ/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          telefono: formData.phone,
          servicio: formData.service,
          mensaje: formData.message,
        }),
      }
    );

    if (response.ok) {
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 4000);
    }
  } catch (error) {
    console.error("Error enviando formulario:", error);
  }
};

  const contactIcons: Record<string, ReactNode> = {
    address: <FiMapPin className="h-6 w-6" strokeWidth={2} />,
    hours: <FiClock className="h-6 w-6" strokeWidth={2} />,
  };

  return (
    <section
      id="contact"
      className="bg-surface-0 px-6 py-24 md:px-[8%] md:py-28" 
    >
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
            <div className="border-t-4 border-primary-600 bg-surface-0 p-8 shadow-lg md:p-10">
              {submitted && (
                <div className="mb-8 border-l-4 border-primary-500 bg-primary-50 p-4 text-primary-800">
                  <strong>✓ ¡Mensaje enviado!</strong> Te contactaremos pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold uppercase tracking-wide text-secondary-700"
                  >
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 border-secondary-200 bg-muted-50 px-4 py-3 text-secondary-900 transition-all focus:border-primary-600 focus:bg-surface-0 focus:outline-none"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold uppercase tracking-wide text-secondary-700"
                  >
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-2 border-secondary-200 bg-muted-50 px-4 py-3 text-secondary-900 transition-all focus:border-primary-600 focus:bg-surface-0 focus:outline-none"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-bold uppercase tracking-wide text-secondary-700"
                  >
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-2 border-secondary-200 bg-muted-50 px-4 py-3 text-secondary-900 transition-all focus:border-primary-600 focus:bg-surface-0 focus:outline-none"
                    placeholder="+57 123 456 7890"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-bold uppercase tracking-wide text-secondary-700"
                  >
                    Servicio de interés *
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border-2 border-secondary-200 bg-muted-50 px-4 py-3 text-secondary-900 transition-all focus:border-primary-600 focus:bg-surface-0 focus:outline-none"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="deportiva">Fisioterapia deportiva</option>
                    <option value="manual">Terapia manual</option>
                    <option value="rehab">Rehabilitación física</option>
                    <option value="electro">Electroterapia</option>
                    <option value="maso">Masoterapia</option>
                    <option value="post">Rehabilitación postoperatoria</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold uppercase tracking-wide text-secondary-700"
                  >
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border-2 border-secondary-200 bg-muted-50 px-4 py-3 text-secondary-900 transition-all focus:border-primary-600 focus:bg-surface-0 focus:outline-none"
                    placeholder="Cuéntanos brevemente sobre tu situación..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-700 px-8 py-4 font-black uppercase tracking-wide text-surface-0 transition-all duration-300 hover:bg-primary-800 hover:shadow-xl"
                >
                  Enviar solicitud
                </button>
              </form>
            </div>
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
