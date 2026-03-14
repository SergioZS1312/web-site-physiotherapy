// ── Google Analytics ──────────────────────────────────────────────────────────
export const gaEvent = (action: string, params?: Record<string, string>) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, params);
};

// ── Meta Pixel ────────────────────────────────────────────────────────────────
export const pixelEvent = (event: string, params?: Record<string, unknown>) => {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", event, params);
};

// ── Evento de conversión — formulario enviado ─────────────────────────────────
export const trackFormSubmit = (service: string) => {
  // Google Analytics
  gaEvent("generate_lead", {
    event_category: "formulario",
    event_label: service,
  });

  // Meta Pixel — Lead es el evento estándar para formularios de contacto
  pixelEvent("Lead", {
    content_name: service,
    content_category: "fisioterapia",
  });
};