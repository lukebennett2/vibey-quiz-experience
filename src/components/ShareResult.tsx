import { useLocation } from "react-router-dom";
import { results } from "../data/results";

const ShareResult = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const resultId = searchParams.get("result");

  const result = results[resultId ?? ""] || results["The Delusional Optimist"];

  const shareText = `I just took the 'How Vibey Are You?' quiz and got "${result.name}" ${result.emoji} – what's your vibe?\n\nTake it here: https://yourquizlink.com`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText);
    alert("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-yellow-300 text-black px-4 py-20 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
        You are… {result.name} {result.emoji}
      </h1>
      <p className="text-lg max-w-xl mb-6">{result.subtext}</p>

      <div className="mb-10">
        <button
          onClick={copyToClipboard}
          className="bg-black text-yellow-300 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
        >
          Copy & Share
        </button>
      </div>

      <a
        href="/"
        className="underline text-black/70 text-sm hover:text-black"
      >
        Or retake the quiz →
      </a>
    </div>
  );
};

export default ShareResult;
