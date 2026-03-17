import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoadmapSection from "@/components/RoadmapSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import WhitepaperSection from "@/components/WhitepaperSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <main className="bg-background">
        <HeroSection />
        <AboutSection />
        <RoadmapSection />
        <TokenomicsSection />
        <WhitepaperSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
