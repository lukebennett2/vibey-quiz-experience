import { results } from '../data/results';

interface ScoreCount {
  [tag: string]: number;
}

const tagToResultMap: { [tag: string]: string } = {
  "extrovert": "the-hype-beast",
  "introspective": "the-soft-spiral",
  "chaotic-comfort": "the-vibe-gremlin",
  "offline-core": "the-over-it-ghost",
  "anxious": "the-spiral-specialist",
  "main-character": "the-delusional-optimist",
  "self-care": "the-wellness-skeptic",
  "reckless-romantic": "the-soup-girl-romantic",
  "soft-ironic": "the-delusional-optimist",
  "hyper-online": "the-terminally-online",
  "dreamy-dark": "the-soft-spiral",
  "loud-chaotic": "the-vibe-gremlin",
  "chaotic-hype": "the-hype-beast",
  "organised-overlord": "the-planner-in-denial",
  "lurker-vibes": "the-over-it-ghost",
  "sweet-mama": "the-wellness-skeptic",
  "chaos-fatigue": "the-soft-spiral",
  "lowkey-serene": "the-wellness-skeptic",
  "shutdown-mode": "the-over-it-ghost",
  "high-vibe": "the-delusional-optimist"
};

export const getResultFromAnswers = (selectedTags: string[]) => {
  const scoreCount: ScoreCount = {};

  selectedTags.forEach(tag => {
    const resultId = tagToResultMap[tag];
    if (resultId) {
      scoreCount[resultId] = (scoreCount[resultId] || 0) + 1;
    }
  });

  const sorted = Object.entries(scoreCount).sort((a, b) => b[1] - a[1]);
  const topResultId = sorted[0]?.[0];

  return results[topResultId] || Object.values(results)[0];
};
