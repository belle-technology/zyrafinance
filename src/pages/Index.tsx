import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoadmapSection from "@/components/RoadmapSection";
import TeamSection from "@/components/TeamSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import WhitepaperSection from "@/components/WhitepaperSection";
import FooterSection from "@/components/FooterSection";

const SectionDivider = () => (
  <div className="section-divider" />
);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <main className="bg-background noise-bg relative">
        <Navbar />
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <RoadmapSection />
        <SectionDivider />
        <TeamSection />
        <SectionDivider />
        <TokenomicsSection />
        <SectionDivider />
        <WhitepaperSection />
        <SectionDivider />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
