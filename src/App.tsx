import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PropertyIntent from "./components/PropertyIntent";
import FeaturedProperties from "./components/FeaturedProperties";
import PropertyDetailModal from "./components/PropertyDetailModal";
import EMICalculator from "./components/EMICalculator";
import About from "./components/About";
import Founder from "./components/Founder";
import Stats from "./components/Stats";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import RequirementCTA from "./components/RequirementCTA";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import type { Property } from "./data/content";

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <div className="min-h-screen bg-ivory text-navy">
      <Navbar />
      <main>
        <Hero />
        <PropertyIntent />
        <FeaturedProperties onView={setSelectedProperty} />
        <Stats />
        <EMICalculator />
        <About />
        <Founder />
        <WhyChoose />
        <Services />
        <Testimonials />
        <RequirementCTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />

      {selectedProperty && (
        <PropertyDetailModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
      )}
    </div>
  );
}
