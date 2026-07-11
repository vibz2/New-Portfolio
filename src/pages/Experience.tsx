import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  const [openId, setOpenId] = useState<string | null>(experience[0]?.id ?? null);

  return (
    <main className="page">
      <div className="container page-head">
        <p className="eyebrow">Experience</p>
        <h1>Internships, hackathons, and a school leadership.</h1>
        <p className="page-lede">
          A timeline of where I've worked and led — most recent first.
        </p>
      </div>

      <div className="container timeline">
        <div className="timeline-spine" aria-hidden="true" />
        {experience.map((employer, i) => {
          const open = openId === employer.id;
          return (
            <motion.div
              className={`timeline-item${open ? " is-open" : ""}`}
              key={employer.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setOpenId(open ? null : employer.id)}
              role="button"
              tabIndex={0}
              aria-expanded={open}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenId(open ? null : employer.id);
                }
              }}
            >
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-head">
                <div>
                  <h2>{employer.name}</h2>
                  <p className="timeline-meta eyebrow">
                    {employer.dates}
                    {employer.location ? ` · ${employer.location}` : ""}
                  </p>
                </div>
                <span className="project-toggle" aria-hidden="true">
                  {open ? "–" : "+"}
                </span>
              </div>

              <div className="timeline-tags">
                {employer.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    className="timeline-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {employer.roles.map((role) => (
                      <div className="timeline-role" key={role.title}>
                        <h3>
                          {role.title}
                          <span className="timeline-role-dates"> · {role.dates}</span>
                        </h3>
                        <ul>
                          {role.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}