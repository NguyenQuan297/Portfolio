import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PurpleBackdrop from "./components/background/PurpleBackdrop";
import ScrollProgressBar from "./components/layout/ScrollProgressBar";
import NavBar from "./components/layout/NavBar";
import FooterBranding from "./components/layout/FooterBranding";
import HeroSection from "./components/hero/HeroSection";

import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SystemDesignSection from "./components/sections/SystemDesignSection";
import EducationSection from "./components/sections/EducationSection";
import ContactSection from "./components/sections/ContactSection";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 90,
    });

    // Ensure AOS recalculates positions after initial render.
    AOS.refresh();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <PurpleBackdrop />
      <ScrollProgressBar />
      <NavBar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <SystemDesignSection />
        <EducationSection />
        <ContactSection />
      </main>

      <FooterBranding />
    </div>
  );
}

