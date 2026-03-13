import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import About from "@/components/sections/About";
import Allies from "@/components/sections/Allies";
import Contact from "@/components/sections/Contact";
import FaqSection from "@/components/sections/FaqSection";
import PrimaryCta from "@/components/sections/PrimaryCta";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import YouTubeVideos from "@/components/sections/YouTubeVideos";

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <Process />
      <About />
      <Allies />
      <Testimonials />
      <YouTubeVideos />
      <Team />
      <FaqSection />
      <PrimaryCta />
      <Contact />
    </>
  );
}