export type MoodResult = {
    id: string;
    name: string;
    emoji: string;
    description: string;
    subtext?: string;
    color?: string;
  };
  
  export const results: Record<string, MoodResult> = {
    "the-soft-spiral": {
      id: "the-soft-spiral",
      name: "The Soft Spiral",
      emoji: "/images/soft-spiral.png",
      description: "You’re vibing... mostly. But also maybe crying in the tub a little. A poet in a pickle. A thinker in their feelings.",
      subtext: "Your vibe? Dreamy. Dark. Tender. Not entirely okay but hot about it.",
      color: "#D9BFFF"
    },
    "the-over-it-ghost": {
      id: "the-over-it-ghost",
      name: "The Over It Ghost",
      emoji: "/images/over-it-ghost.png",
      description: "You’ve left the chat. Permanently. Social energy is expensive and you're budgeting hard.",
      subtext: "Your vibe? Quiet quitting life. A soft yes to nothing.",
      color: "#C1C1C1"
    },
    "the-vibe-gremlin": {
      id: "the-vibe-gremlin",
      name: "The Vibe Gremlin",
      emoji: "/images/vibe-gremlin.png",
      description: "No thoughts, just chaos. You live for the meme, the mess, and the mystery of what you’ll do next.",
      subtext: "Your vibe? Loud. Chaotic. Slightly cursed.",
      color: "#FFD966"
    },
    "the-hype-beast": {
      id: "the-hype-beast",
      name: "The Hype Beast",
      emoji: "/images/hype-beast.png",
      description: "You are the rave. Life is a main stage and you’re front and center, screaming the lyrics to a song no one knows.",
      subtext: "Your vibe? High energy. Maximum volume. Selectively feral.",
      color: "#FF8C66"
    },
    "the-delusional-optimist": {
      id: "the-delusional-optimist",
      name: "The Delusional Optimist",
      emoji: "/images/delusional-optimist.png",
      description: "You believe it’ll all work out, even when it's clearly on fire. A little naive. A lot iconic.",
      subtext: "Your vibe? Sparkly. Hopeful. Hilariously resilient.",
      color: "#FEEE69"
    },
    "the-terminally-online": {
      id: "the-terminally-online",
      name: "The Terminally Online",
      emoji: "/images/terminally-online.png",
      description: "You saw the meme. You were the meme. You might have posted it. You are the group chat incarnate.",
      subtext: "Your vibe? Hyper-aware. Slightly unwell. Extremely funny.",
      color: "#93B7FF"
    },
    "the-planner-in-denial": {
      id: "the-planner-in-denial",
      name: "The Planner In Denial",
      emoji: "/images/planner-in-denial.png",
      description: "You pretend to go with the flow but you’ve actually color-coded your Google Calendar since 2016.",
      subtext: "Your vibe? Chill façade, organized chaos inside.",
      color: "#FFD5A1"
    },
    "the-wellness-skeptic": {
      id: "the-wellness-skeptic",
      name: "The Wellness Skeptic",
      emoji: "/images/wellness-skeptic.png",
      description: "You meditate... once a year. You try journaling... and then just spiral. Wellness is a vibe, not a requirement.",
      subtext: "Your vibe? Well-intentioned. Slightly cynical. Trying.",
      color: "#C4F0B0"
    },
    "the-soup-girl-romantic": {
      id: "the-soup-girl-romantic",
      name: "The Soup Girl Romantic",
      emoji: "/images/soup-girl.png",
      description: "Soft sweaters. Sad movies. Slightly feral desire for deep emotional connection. You live for the lore.",
      subtext: "Your vibe? Tender. Melancholic. Craving soup and love.",
      color: "#FFC5D9"
    }
  };
  