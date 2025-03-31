
import React from "react";
import AnimatedSmiley from "./AnimatedSmiley";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-tight">
            How Vibey Are You?
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-md">
            Take the world's least scientific mood quiz.
          </p>
          <button className="cta-button">
            Take the Quiz <ArrowRight size={20} />
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
          <AnimatedSmiley />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
