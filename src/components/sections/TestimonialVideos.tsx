"use client";

import { useEffect } from "react";

export const testimonialVideoUrls = [
  "https://www.instagram.com/reel/DVhL6zeDlYA/",
  "https://www.instagram.com/reel/DVNEpVnjfan/",
  "https://www.instagram.com/reel/DTqXei3Do43/",
];

// Extend Window interface for Instagram embed API
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const TestimonialVideos = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    const timer = setTimeout(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section
      id="testimonial-videos"
      className="bg-surface-0 px-6 py-20 md:px-[8%] md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <h2
            className={
              "text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.95] text-primary-700"
            }
          >
            Testimonios en video
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-600 sm:mt-6 sm:text-lg">
            Conoce las experiencias de nuestros pacientes en sus propias
            palabras
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialVideoUrls.map((url, index) => (
            <div key={index} className="flex items-center justify-center">
              <iframe
                src={`${url}embed/`}
                className="h-150 w-full max-w-100 rounded-xl border-0"
                frameBorder="0"
                scrolling="no"
                allow="encrypted-media"
                title={`Testimonio ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideos;
