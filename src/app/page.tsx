"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import IntroLoader from "@/components/intro-loader";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ServicesSection from "@/components/services-section";
import DesignsSection from "@/components/designs-section";
import ResumeSection from "@/components/resume-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <IntroLoader />}
      </AnimatePresence>

      {!loading && (
        <>
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ServicesSection />
            <DesignsSection />
            <ResumeSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
