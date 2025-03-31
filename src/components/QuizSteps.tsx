
import React from "react";

const steps = [
  {
    number: 1,
    title: "Pick your pizza topping",
    description: "Your food choices reveal more than you think.",
  },
  {
    number: 2,
    title: "Choose your Sunday vibe",
    description: "How you recharge says everything about you.",
  },
  {
    number: 3,
    title: "Reveal your Mood Type",
    description: "Discover your unique vibe personality.",
  },
];

const QuizSteps: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="vibe-card flex flex-col items-center text-center">
              <div className="step-number mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-12">
          <div className="relative w-64 h-16 md:w-96 md:h-24 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-1 bg-vibe-black"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-between">
              <div className="w-5 h-5 rounded-full bg-vibe-black animate-bounce-slight"></div>
              <div className="w-5 h-5 rounded-full bg-vibe-black animate-bounce-slight" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-5 h-5 rounded-full bg-vibe-black animate-bounce-slight" style={{ animationDelay: "0.4s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSteps;
