import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      {/* 🔖 Interviewer Notice Banner */}
      <div className="w-full bg-yellow-100 text-black text-sm px-4 py-3 text-center border-b border-black/10">
  🚀 <span className="font-semibold">Hey Howbout team! </span> This is a mock quiz I built to show how tone, humor, and shareability can drive conversion. I’ll walk through the strategy and results in our interview, but
I wanted to highlight skills beyond paid — because, when necessary, a growth marketer should be able to run their own experiments, end to end. Enjoy! </div>

      {/* 🌟 Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center py-12 px-4 md:px-6 relative overflow-hidden bg-yellow-300">
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
          {/* 📝 Text Section */}
          <div className="text-center md:text-left">
            <p className="uppercase text-sm font-bold text-black/50 mb-2 tracking-wider">
              ✦ Vibely certified ✦
            </p>

            <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight tracking-tight">
              What’s your <span className="text-yellow-500">vibe</span> today?
            </h1>

            <p className="text-xl md:text-2xl mb-4 max-w-md">
              Take the world’s most scientific* mood quiz.
            </p>

            <p className="text-md text-black/60 mb-8">
              *However, we have no clinical results to show at this time.
            </p>

            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-yellow-300 font-semibold hover:bg-yellow-300 hover:text-black transition text-lg"
            >
              Take the Quiz <ArrowRight size={20} />
            </Link>
          </div>

          {/* 🎨 Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/hero-characters.png"
              alt="Vibely characters"
              className="w-full max-w-[400px] h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
