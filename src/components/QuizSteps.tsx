import React from "react";

const steps = [
  {
    number: 1,
    title: "Answer 5 simple questions",
    description: "Pizza toppings, friend drama, Sunday moods — we're getting into it.",
  },
  {
    number: 2,
    title: "Embrace the chaos",
    description: "There are no wrong answers. Just deeply revealing ones.",
  },
  {
    number: 3,
    title: "Unlock your vibe identity",
    description: "Get your very real, VERY scientific Mood Type™.",
  },
];

const QuizSteps: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-yellow-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="vibe-card flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-md transition hover:shadow-xl"
            >
              <div className="text-3xl font-black text-yellow-500 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-black/70">{step.description}</p>
            </div>
          ))}
        </div>

        {/* 🟡 Decorative bouncing dots */}
        <div className="w-full flex justify-center mt-16">
          <div className="relative w-64 h-16 md:w-96 md:h-24 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-1 bg-black/20"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <div className="w-5 h-5 rounded-full bg-black animate-bounce-slight"></div>
              <div
                className="w-5 h-5 rounded-full bg-black animate-bounce-slight"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-5 h-5 rounded-full bg-black animate-bounce-slight"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSteps;
