
import React from "react";
import HeroSection from "../components/HeroSection";
import QuizSteps from "../components/QuizSteps";
import MoodTypes from "../components/MoodTypes";
import VibeCounter from "../components/VibeCounter";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-vibe-yellow">
      <HeroSection />
      <QuizSteps />
      <MoodTypes />
      <VibeCounter />
      <Footer />
    </div>
  );
};

export default Index;
