
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-4 md:px-6 bg-vibe-black text-vibe-yellow">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xl">
          Quiz made by Vibely, the app where moods come out to play.
        </p>
        <div className="mt-6 text-sm opacity-70">
          © {new Date().getFullYear()} Vibely. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
