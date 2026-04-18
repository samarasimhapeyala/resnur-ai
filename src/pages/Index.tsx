import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CommunitySection from "@/components/CommunitySection";
import NewsletterSection from "@/components/NewsletterSection";
import AuthModal from "@/components/AuthModal";
import Footer from "@/components/Footer";
import TrendingAIAnimation from "@/components/TrendingAIAnimation";

const Index = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");

  const handleAuthOpen = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <TrendingAIAnimation />
      <Navbar onAuthOpen={handleAuthOpen} />
      <div className="relative z-10">
        <HeroSection onAuthOpen={handleAuthOpen} />
        <FeaturesSection />
        <HowItWorksSection />
        <CommunitySection />
        <NewsletterSection />
        <Footer />
        <AuthModal open={authOpen} onOpenChange={setAuthOpen} mode={authMode} onModeChange={setAuthMode} />
      </div>
    </div>
  );
};

export default Index;
