"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const CAL_LINK = "sergio-zuluaga-sayago-yipoo5/cita-de-fisioterapia"; // ← tu link de Cal.com

export default function CalEmbed() {
  const [calLoaded, setCalLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "cita-fisioterapia" });

      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: {
          branding: { brandColor: "#1d4ed8" }, // ← color primario de tu landing
        },
      });

      cal("on", {
        action: "bookingSuccessful",
        callback: () => {
          if (typeof window.gtag === "function") {
            window.gtag("event", "booking_confirmed", {
              event_category: "citas",
            });
          }
        },
      });
	  
      setCalLoaded(true);
    })();
  }, []);

  return (
    <div className="w-full">
      {!calLoaded && (
        <div className="flex h-96 items-center justify-center">
          <p className="text-secondary-400">Cargando calendario...</p>
        </div>
      )}
      <Cal
        namespace="cita-fisioterapia"
        calLink={CAL_LINK}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
