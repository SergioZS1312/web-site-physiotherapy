export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type":    "PhysicalTherapist",   // tipo específico para fisioterapia
    name:       "Fisioterapia Tu Negocio",  // ← nombre
    description: "Centro de fisioterapia en Bogotá especializado en fisioterapia deportiva, terapia manual, rehabilitación física y más.",
    url:        "https://www.tudominio.com",  // ← URL
    telephone:  "+573001234567",              // ← teléfono
    email:      "contacto@tudominio.com",     // ← email
    image:      "https://www.tudominio.com/og-image.jpg",
    priceRange: "$$",
    address: {
      "@type":           "PostalAddress",
      addressLocality:   "Bogotá",         // ← ciudad
      addressRegion:     "Cundinamarca",   // ← departamento
      addressCountry:    "CO",
    },
    geo: {
      "@type":    "GeoCoordinates",
      latitude:   4.7110,   // ← tus coordenadas
      longitude:  -74.0721,
    },
    openingHoursSpecification: [
      {
        "@type":     "OpeningHoursSpecification",
        dayOfWeek:   ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens:       "08:00",
        closes:      "18:00",
      },
      {
        "@type":     "OpeningHoursSpecification",
        dayOfWeek:   ["Saturday"],
        opens:       "08:00",
        closes:      "13:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name:    "Servicios de Fisioterapia",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fisioterapia deportiva"        } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Terapia manual"                } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rehabilitación física"         } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electroterapia"                } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Masoterapia"                   } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rehabilitación postoperatoria" } },
      ],
    },
    sameAs: [
      // ← agrega tus redes si las tienes
      // "https://www.instagram.com/tu_usuario",
      // "https://www.facebook.com/tu_pagina",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}