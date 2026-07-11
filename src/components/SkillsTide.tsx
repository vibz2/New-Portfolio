import { motion } from "framer-motion";
import { useState } from "react";
import { skills } from "../data/skills";

export default function SkillsTide() {
  const [dragging, setDragging] = useState(false);
  const track = [...skills, ...skills];

  return (
    <div className="tide">
      <p className="eyebrow tide-label">skills that carry over from the waves below</p>
      <div className="tide-track-wrap">
        <motion.div
          className={`tide-track${dragging ? " is-dragging" : ""}`}
          drag="x"
          dragConstraints={{ left: -1200, right: 0 }}
          dragElastic={0.08}
          onDragStart={() => setDragging(true)}
          onDragEnd={() => setDragging(false)}
        >
          {track.map((skill, i) => (
            <span className="tide-chip" key={`${skill}-${i}`}>
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
