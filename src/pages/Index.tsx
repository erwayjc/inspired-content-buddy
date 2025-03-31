
import React from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import DemoVideo from "@/components/DemoVideo";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <DemoVideo />
        <FeatureSection />
        <HowItWorks />
        <TestimonialSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
