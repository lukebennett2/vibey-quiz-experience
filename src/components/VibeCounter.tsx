
import React, { useState, useEffect } from "react";

const VibeCounter: React.FC = () => {
  const [count, setCount] = useState(23821);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 8000); // Increment every 8 seconds for effect
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="vibe-card inline-block py-4 px-8">
          <p className="text-xl mb-2">Vibes Discovered</p>
          <div className="text-4xl md:text-5xl font-bold font-mono">
            {count.toLocaleString()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeCounter;
