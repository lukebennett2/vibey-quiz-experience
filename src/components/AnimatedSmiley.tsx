
import React from "react";

const AnimatedSmiley: React.FC = () => {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 animate-pulse-slow">
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/77d64679-9f9e-4812-ad02-10544b69238a.png" 
          alt="Smiley Face" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute -z-10 inset-0 bg-vibe-yellow rounded-full border-4 border-vibe-black animate-spin-slow opacity-30 blur-md"></div>
    </div>
  );
};

export default AnimatedSmiley;
