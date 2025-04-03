import React from "react";
import { ArrowRight } from "lucide-react";

const DownloadCTA: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-black text-yellow-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
          Track Your Chaos. Daily.
        </h2>
        <p className="text-xl mb-10 text-yellow-200 max-w-xl mx-auto">
          Vibely is the only app that helps you track your mood, monitor your group chat energy,
          and fully lean into your unhinged era. Because feelings are real—and sometimes ridiculous.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition inline-flex items-center gap-2"
          >
            Download Vibely <ArrowRight size={20} />
          </a>
          <p className="text-sm mt-2 sm:mt-0 text-yellow-100 italic">
            Available nowhere yet, but manifesting hard ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
