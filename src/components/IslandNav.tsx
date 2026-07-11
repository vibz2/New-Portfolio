import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const islands = [
  {
    to: "/resume",
    label: "Resume",
    note: "SWE + ML, one page each",
    glyph: "01",
  },
  {
    to: "/projects",
    label: "Projects",
    note: "six builds, shipped end to end",
    glyph: "02",
  },
  {
    to: "/experience",
    label: "Experience",
    note: "internships, hackathons, leadership",
    glyph: "03",
  },
  {
    to: "/contact",
    label: "Contact",
    note: "let's build something",
    glyph: "04",
  },
];

export default function IslandNav() {
  return (
    <div className="islands" role="navigation" aria-label="Site sections">
      {islands.map((island, i) => (
        <motion.div
          key={island.to}
          className="island-wrap"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to={island.to} className="island">
            <span className="island-glyph">{island.glyph}</span>
            <span className="island-label">{island.label}</span>
            <span className="island-note">{island.note}</span>
            <span className="island-arrow" aria-hidden="true">→</span>
            <svg className="island-wave" viewBox="0 0 200 24" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 12c20-10 40 10 60 0s40-10 60 0 40 10 60 0v12H0z" />
            </svg>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
