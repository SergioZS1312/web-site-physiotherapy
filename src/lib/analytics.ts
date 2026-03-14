// Empuja al dataLayer si gtag no está listo todavía
const pushEvent = (eventName: string, params: Record<string, unknown>) => {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  } else {
    // gtag no cargó aún — empujar directo al dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event:         eventName,
      ...params,
    });
    console.log("Evento enviado via dataLayer:", eventName, params);
  }
};

export const trackFormSubmit = (service: string) => {
  if (typeof window === "undefined") return;
  pushEvent("generate_lead", {
    event_category: "formulario",
    event_label:    service,
  });
};