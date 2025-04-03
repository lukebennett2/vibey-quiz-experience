// src/pages/QuizPage.tsx
import { useState } from 'react';
import { results } from '../data/results';
import { questions } from '../data/questions';
import { getResultFromAnswers } from '../utils/logic';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const totalQuestions = questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswer = (optionTag: string) => {
    const updatedAnswers = [...answers, optionTag];
    setAnswers(updatedAnswers);

    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowResult(true);
      }, 1800);
    }
  };

  const handleGoBack = () => {
    if (showResult || isLoading) return;
    if (currentQuestion > 0) {
      const updatedAnswers = answers.slice(0, -1);
      setAnswers(updatedAnswers);
      setCurrentQuestion(currentQuestion - 1);
    } else {
      navigate('/');
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const result = getResultFromAnswers(answers);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const twitterText = encodeURIComponent(
    `My vibe is: ${result.name} 🌀\n\nFind yours at vibely-quiz.com`
  );
  const twitterLink = `https://twitter.com/intent/tweet?text=${twitterText}`;

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied to clipboard!');
  };

  const nativeShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'My Vibely result',
          text: `My vibe is: ${result.name}`,
          url: shareUrl,
        })
        .catch((error) => console.error('Error sharing', error));
    } else {
      alert('Sharing not supported on this device');
    }
  };

  return (
    <div className="min-h-screen bg-yellow-300 text-black flex flex-col items-center justify-start px-4 pt-20 pb-16 relative">
      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-4 bg-yellow-300 z-50 border-b border-black/10">
        <button
          onClick={handleGoBack}
          className="text-sm font-semibold hover:underline"
        >
          ← Back
        </button>
        <div className="font-display text-lg font-bold tracking-wide">
          Vibely
        </div>
        <div className="w-12" /> {/* spacer to balance layout */}
      </nav>

      {isLoading ? (
        <div className="text-center animate-pulse flex flex-col items-center space-y-4">
          <div className="text-4xl font-display font-bold">Calculating your vibe...</div>
          <img
            src="/images/loading-image.png"
            alt="Loading"
            className="w-24 h-24 animate-bounce"
          />
          <p className="text-black/70">Checking your group chat history 🧠</p>
        </div>
      ) : !showResult ? (
        <div className="w-full max-w-xl text-center space-y-6">
          {/* Progress Bar */}
          <div className="w-full bg-black/10 rounded-full h-3 mb-4">
            <div
              className="bg-black h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Question Image */}
          <img
            src={questions[currentQuestion].image}
            alt={`Illustration for ${questions[currentQuestion].question}`}
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />

          {/* Question Title */}
          <h2 className="text-2xl font-bold font-display mt-6">
            {questions[currentQuestion].question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.tag)}
                className="block w-full bg-black text-yellow-300 font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
              >
                {option.emoji} {option.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center max-w-xl">
          <img
            src={result.emoji}
            alt={result.name}
            className="w-full max-w-md mx-auto mb-6 rounded-xl shadow-lg"
          />

          <h2 className="text-3xl font-display font-bold mb-2">{result.name}</h2>
          <p className="text-lg mb-4">{result.description}</p>
          <p className="text-md italic mb-8 text-black/70">{result.subtext}</p>

          <a
            href={`/share?result=${result.name}`}
            className="inline-block bg-black text-yellow-300 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition mb-6"
          >
            Share your vibe →
          </a>

          <div className="flex flex-col items-center space-y-3">
            <a
              href={result.emoji}
              download
              className="bg-white text-black px-5 py-2 rounded-full font-semibold border border-black hover:bg-black hover:text-yellow-300 transition"
            >
              Download image for Instagram
            </a>

            <a
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-yellow-300 px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Share on X (Twitter)
            </a>

            <button
              onClick={nativeShare}
              className="bg-black text-yellow-300 px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Share via device
            </button>

            <button
              onClick={copyLink}
              className="bg-black text-yellow-300 px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Copy link to share
            </button>

            <div className="text-sm text-black/60 italic pt-2">
              Open Instagram and add this image to your story manually ✨
            </div>
          </div>

          <button
            onClick={handleRetakeQuiz}
            className="mt-8 text-sm underline text-black/60 hover:text-black"
          >
            Retake the quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
