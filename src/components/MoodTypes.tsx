
import React from "react";
import { ArrowRight } from "lucide-react";

const moodTypes = [
  {
    name: "The Delusional Optimist",
    description: "You see the bright side of everything, even when there isn't one.",
    emoji: "🌈",
  },
  {
    name: "The Cryptic Texter",
    description: "Your messages require a decoder ring and three cups of coffee.",
    emoji: "🔍",
  },
  {
    name: "The Vibe Gremlin",
    description: "Chaotic energy is your love language. No thoughts, just vibes.",
    emoji: "👾",
  },
];

const MoodTypes: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Vibe
          </h2>
          <p className="text-xl max-w-lg mx-auto">
            Which mood personality will you unlock?
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {moodTypes.map((type, index) => (
            <div 
              key={index} 
              className="bg-vibe-yellow p-6 rounded-xl border-4 border-vibe-black
                        shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                        transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{type.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{type.name}</h3>
              <p className="text-gray-700">{type.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button className="cta-button">
            Get your Vibe <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MoodTypes;
