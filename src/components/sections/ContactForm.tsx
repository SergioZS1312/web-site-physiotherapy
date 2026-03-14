"use client";

import { ChangeEvent, FormEvent, useState, useRef } from "react";
import SuccessModal from "./SuccessModal";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
}

type ContactFormProps = {
  onSuccess?: () => void;
};

type Status = "idle" | "loading" | "error";

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL!;
const VALID_SERVICES  = ["deportiva", "manual", "rehab", "electro", "maso", "post"];

const sanitize = (value: string): string =>
  value.replace(/[<>]/g, "").replace(/javascript:/gi, "").replace(/on\w+=/gi, "").trim().slice(0, 500);

const validators = {
  name:    (v: string) => !v.trim() ? "El nombre es requerido" : v.trim().length < 3 ? "Mínimo 3 caracteres" : "",
  email:   (v: string) => !v.trim() ? "El correo es requerido" : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "Correo inválido" : "",
  phone:   (v: string) => {
    if (!v.trim()) return "El teléfono es requerido";
    if (!/^(\+?57)?3\d{9}$/.test(v.replace(/[\s\-\(\)]/g, ""))) return "Número colombiano inválido (ej: 300 123 4567)";
    return "";
  },
  service: (v: string) => !v ? "Selecciona un servicio" : !VALID_SERVICES.includes(v) ? "Servicio no válido" : "",
};

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [formData, setFormData]       = useState<FormData>({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors]           = useState<FormErrors>({});
  const [touched, setTouched]         = useState<Record<string, boolean>>({});
  const [status, setStatus]           = useState<Status>("idle");
  const [showModal, setShowModal]     = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const formLoadTime = useRef<number>(Date.now());
  const submitCount  = useRef<number>(0);

  const validateField = (id: string, value: string) => {
    const validator = validators[id as keyof typeof validators];
    return validator ? validator(value) : "";
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};
    let valid = true;
    (Object.keys(validators) as Array<keyof typeof validators>).forEach((key) => {
      const error = validators[key](formData[key]);
      if (error) { newErrors[key] = error; valid = false; }
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, service: true });
    return valid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (touched[id]) setErrors((prev) => ({ ...prev, [id]: validateField(id, value) }));
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));
    setErrors((prev) => ({ ...prev, [id]: validateField(id, value) }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;
    if ((Date.now() - formLoadTime.current) / 1000 < 3) return;
    if (submitCount.current >= 3) { setStatus("error"); return; }

    setStatus("loading");
    submitCount.current += 1;

    const sanitized = {
      name:    sanitize(formData.name),
      email:   sanitize(formData.email),
      phone:   sanitize(formData.phone),
      service: VALID_SERVICES.includes(formData.service) ? formData.service : "",
      message: sanitize(formData.message),
    };

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(sanitized),
      });

      setSubmittedName(formData.name);
      setShowModal(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setTouched({});
      setErrors({});
      setStatus("idle");
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full border-2 bg-muted-50 px-4 py-3 text-secondary-900 transition-all focus:bg-surface-0 focus:outline-none ${
      touched[field] && errors[field]
        ? "border-red-500 focus:border-red-500"
        : "border-secondary-200 focus:border-primary-600"
    }`;

  const isBlocked = submitCount.current >= 3;

  return (
    <>
      <div className="border-t-4 border-primary-600 bg-surface-0 p-8 shadow-lg md:p-10">
        {status === "error" && (
          <div className="mb-8 border-l-4 border-red-500 bg-red-50 p-4 text-red-800">
            {isBlocked
              ? "⚠️ Demasiados intentos. Recarga la página si necesitas enviar otro mensaje."
              : "✗ Error al enviar. Por favor intenta nuevamente."}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off"
              onChange={(e) => { if (e.target.value) submitCount.current = 999; }} />
          </div>

          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-bold uppercase tracking-wide text-secondary-700">Nombre completo *</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} onBlur={handleBlur}
              placeholder="Tu nombre" maxLength={100} className={inputClass("name")} />
            {touched.name && errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-bold uppercase tracking-wide text-secondary-700">Correo electrónico *</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleBlur}
              placeholder="tu@email.com" maxLength={150} className={inputClass("email")} />
            {touched.email && errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-bold uppercase tracking-wide text-secondary-700">Teléfono / WhatsApp *</label>
            <input type="tel" id="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur}
              placeholder="+57 300 123 4567" maxLength={15} className={inputClass("phone")} />
            {touched.phone && errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="service" className="mb-2 block text-sm font-bold uppercase tracking-wide text-secondary-700">Servicio de interés *</label>
            <select id="service" value={formData.service} onChange={handleChange} onBlur={handleBlur} className={inputClass("service")}>
              <option value="">Selecciona un servicio</option>
              <option value="deportiva">Fisioterapia deportiva</option>
              <option value="manual">Terapia manual</option>
              <option value="rehab">Rehabilitación física</option>
              <option value="electro">Electroterapia</option>
              <option value="maso">Masoterapia</option>
              <option value="post">Rehabilitación postoperatoria</option>
            </select>
            {touched.service && errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-bold uppercase tracking-wide text-secondary-700">Mensaje (opcional)</label>
            <textarea id="message" value={formData.message} onChange={handleChange} rows={4} maxLength={500}
              className="w-full border-2 border-secondary-200 bg-muted-50 px-4 py-3 text-secondary-900 transition-all focus:border-primary-600 focus:bg-surface-0 focus:outline-none"
              placeholder="Cuéntanos brevemente sobre tu situación..." />
            <p className="mt-1 text-right text-xs text-secondary-400">{formData.message.length}/500</p>
          </div>

          <button type="submit" disabled={status === "loading" || isBlocked}
            className="w-full bg-primary-700 px-8 py-4 font-black uppercase tracking-wide text-surface-0 transition-all duration-300 hover:bg-primary-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60">
            {status === "loading" ? "Enviando..." : "Enviar solicitud"}
          </button>
        </form>
      </div>

      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        name={submittedName}
      />
    </>
  );
};

export default ContactForm;