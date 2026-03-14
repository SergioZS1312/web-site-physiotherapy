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
  console.log("trackFormSubmit llamado con:", service);        // ← debug
  console.log("window.gtag disponible:", typeof window.gtag); // ← debug

  if (typeof window === "undefined" || !window.gtag) {
    console.warn("gtag no disponible");
    return;
  }

  window.gtag("event", "generate_lead", {
    event_category: "formulario",
    event_label: service,
  });
};