import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ComoAgendarSection } from "@/components/sections/ComoAgendarSection";
import { ContactoSection } from "@/components/sections/ContactoSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { GaleriaSection } from "@/components/sections/GaleriaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PreciosSection } from "@/components/sections/PreciosSection";
import { ServiciosSection } from "@/components/sections/ServiciosSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <HeroSection />
        <ServiciosSection />
        <GaleriaSection />
        <PreciosSection />
        <ComoAgendarSection />
        <FAQSection />
        <ContactoSection />
      </main>
      <Footer />
    </>
  );
}
