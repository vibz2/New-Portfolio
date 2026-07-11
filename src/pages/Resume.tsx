import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Track = "swe" | "ml";

const resumeFiles: Record<Track, string> = {
  swe: "Vibhas_Ramani_Resume.pdf",
  ml: "Vibhas_Ramani_Resume_AI.pdf",
};

const highlights: Record<Track, { title: string; points: string[] }[]> = {
  swe: [
    {
      title: "Backend & full-stack systems",
      points: [
        "FastAPI + SQLAlchemy + Alembic services with WebSocket pipelines, Redis, and AWS S3 (NSF I-Corps Hub)",
        "Production FastAPI/React/Supabase platform shipped with a 15-person Agile team (Children's National Hospital)",
        "Automation tooling in Python, SQL, VBA, and Google Apps Script that saved $2,000+ in manual labor (Hardware & Lumber)",
      ],
    },
    {
      title: "Shipped products",
      points: [
        "Discord LeetCode Bot — discord.py, GraphQL, SQLite, deployed on Railway",
        "Marshie Guard — Chrome extension detecting malicious links, Bitcamp award winner",
        "Talk To Me — Node/Express + Gemini API multimodal app, 2nd place at Gemini Hacks",
      ],
    },
  ],
  ml: [
    {
      title: "Applied ML",
      points: [
        "HydroSentry AI — Gradient Boosting Regressor predicting water-pump maintenance needs from 73-column infrastructure data",
        "NFL Fantasy Age Study — regression, Random Forest, and K-Means across 4,000+ player-season records, evaluated on R²/RMSE/MAE",
        "FastAPI service integrating a brain-scan ML model into a hospital platform using NumPy and Nibabel",
      ],
    },
    {
      title: "Tooling",
      points: [
        "pandas, scikit-learn, NumPy for feature engineering and model evaluation",
        "Model serialization and deployment into Django/FastAPI backends for real-time inference",
        "Data pipeline design: cleaning, feature selection, and interactive result visualization",
      ],
    },
  ],
};

export default function Resume() {
  const [track, setTrack] = useState<Track>("swe");

  return (
    <main className="page page-resume">
      <div className="container page-head">
        <p className="eyebrow">Resume</p>
        <h1>Two resumes, one engineer.</h1>
        <p className="page-lede">
          Pick the version that matches what you're looking for: software engineering
          or machine learning. Both downloadable as a formatted PDF.
        </p>
      </div>

      <div className="container">
        <div className="resume-tabs" role="tablist" aria-label="Resume track">
          <button
            role="tab"
            aria-selected={track === "swe"}
            className={`resume-tab${track === "swe" ? " is-active" : ""}`}
            onClick={() => setTrack("swe")}
          >
            Software Engineering
          </button>
          <button
            role="tab"
            aria-selected={track === "ml"}
            className={`resume-tab${track === "ml" ? " is-active" : ""}`}
            onClick={() => setTrack("ml")}
          >
            Machine Learning
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={track}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              className="resume-download"
              href={resumeFiles[track]}
              download
            >
              Download {track === "swe" ? "SWE" : "ML"} resume (PDF)
              <span aria-hidden="true">↓</span>
            </a>

            <div className="resume-grid">
              {highlights[track].map((block) => (
                <div className="resume-block" key={block.title}>
                  <h2>{block.title}</h2>
                  <ul>
                    {block.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
