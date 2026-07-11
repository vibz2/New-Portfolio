export interface Project {
  id: string;
  name: string;
  dates: string;
  tagline: string;
  bullets: string[];
  tags: string[];
  links: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    id: "discord-leetcode-bot",
    name: "Discord LeetCode Bot",
    dates: "Jun 2026 – Present",
    tagline: "Gamifying LeetCode practice for Discord communities",
    bullets: [
      "Built a Python Discord bot using discord.py slash commands to gamify LeetCode practice with automated point tracking and leaderboards",
      "Integrated the LeetCode GraphQL API to retrieve accepted submissions and problem metadata for real-time score updates",
      "Designed a normalized SQLite database to manage users, solve history, and leaderboard data",
      "Implemented Discord UI moderation commands with confirmation dialogs for safe user and server data management",
      "Deployed the application on Railway with secure environment-based configuration for continuous hosting",
    ],
    tags: ["Python", "Discord.py", "GraphQL", "SQLite", "Railway"],
    links: [
      { label: "GitHub", url: "https://github.com/vibz2/Discord-Leetcode-Bot" },
    ],
  },
  {
    id: "hydrosentry",
    name: "HydroSentry AI",
    dates: "May 2026",
    tagline: "Predictive maintenance for water infrastructure",
    bullets: [
      "Built an ML pipeline on WPdx water infrastructure data, narrowing 73 columns to 10 key features via pandas and feature engineering",
      "Trained a Gradient Boosting Regressor to predict pump maintenance needs, enabling proactive repairs before failures disrupt water access",
      "Serialized the model and encoder, integrating inference into a Django backend for real-time predictions from user input",
    ],
    tags: ["Python", "Pandas", "scikit-learn", "Django"],
    links: [
      { label: "GitHub", url: "https://github.com/keshavmp/HydroSentry" },
    ],
  },
  {
    id: "nfl-fantasy-age",
    name: "Analyzing Age's Impact on NFL Fantasy Performance",
    dates: "Oct 2025 – Dec 2025",
    tagline: "Does age predict fantasy football decline?",
    bullets: [
      "Built an end-to-end ML pipeline on 4,000+ NFL player-season records — dataset curation, feature engineering, model training, and evaluation",
      "Trained and evaluated supervised and unsupervised models (linear & polynomial regression, Random Forest, K-Means), using R², RMSE, and MAE to assess performance",
      "Implemented scikit-learn pipelines and deployed results as an interactive GitHub Pages site with visualizations and analysis",
    ],
    tags: ["Python", "Pandas", "scikit-learn", "Data Visualization"],
    links: [
      {
        label: "Live Site",
        url: "https://natanel-solomonov.github.io/CMSC320Project/",
      },
    ],
  },
  {
    id: "platformer-knight",
    name: "Platformer Knight",
    dates: "Dec 2025",
    tagline: "A hand-built 2D platformer — my first game",
    bullets: [
      "A mini 2D platformer built in Godot Engine 4.4.1 and GDScript — players guide a knight across platforms, collecting coins and dodging enemies",
      "Demonstrates core game-dev concepts: player movement, collision detection, level design, and collectibles",
      "First game project — hands-on introduction to game engines, scripting, and asset integration",
    ],
    tags: ["Godot Engine", "GDScript", "Game Design"],
    links: [
      { label: "GitHub", url: "https://github.com/vibz2/Platformer-Knight" },
    ],
  },
  {
    id: "talk-to-me",
    name: "Talk To Me",
    dates: "Nov 2025",
    tagline: "A multimodal AI therapist — 2nd place, Gemini Hacks",
    bullets: [
      'A multimodal AI therapist system supporting CBT, Somatic, and Psychodynamic therapy modes — awarded 2nd place, Health & Wellness category at Gemini Hacks',
      "Node.js/Express backend integrating the Gemini 2.5 Flash API with tailored system prompts for three therapist personas",
      "Session memory via secure cookie-based IDs and an in-memory context layer for consistent conversational grounding",
      "React chat pipeline with localStorage-based client-side persistence for private, in-browser interaction",
    ],
    tags: ["Google Gemini", "Node.js", "React"],
    links: [
      { label: "Devpost", url: "https://devpost.com/software/talk-to-me-v6lwi2" },
      { label: "Event", url: "https://gemini-hack-night.devpost.com/" },
      {label: "Github", url: "https://github.com/vibz2/Talk-to-me"}
    ],
  },
  {
    id: "marshie-guard",
    name: "Marshie Guard",
    dates: "Apr 2024",
    tagline: "A Chrome extension that hunts malicious links",
    bullets: [
      "A Chrome extension using JSON parsing and dynamic API calls to detect malicious links and email breaches",
      "Built a Chrome crawler to detect links anywhere on the page, removing the need to copy-paste links into the extension",
      "Awarded the Marshmallow Maker prize for outstanding innovation and design in cybersecurity tools at Bitcamp",
    ],
    tags: ["JavaScript", "CSS", "Chrome Extension APIs"],
    links: [
      {label: "Devpost", url: "https://devpost.com/software/marshiesguard"},
      {label: "Github", url: "https://github.com/ZyadKhan05/MarshieGuard"}
    ],
  },
];
