import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);

  return (
    <main className="page page-projects">
      <div className="container page-head">
        <p className="eyebrow">Projects</p>
        <h1>Six builds, shipped end to end.</h1>
        <p className="page-lede">
          Tap a project to expand it. Each one was built solo or in a small team.
        </p>
      </div>

      <div className="container project-list">
        {projects.map((project) => {
          const open = openId === project.id;
          return (
            <div className={`project-card${open ? " is-open" : ""}`} key={project.id}>
              <button
                className="project-head"
                onClick={() => setOpenId(open ? null : project.id)}
                aria-expanded={open}
              >
                <div>
                  <span className="project-dates eyebrow">{project.dates}</span>
                  <h2>{project.name}</h2>
                  <p className="project-tagline">{project.tagline}</p>
                </div>
                <span className="project-toggle" aria-hidden="true">
                  {open ? "–" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    className="project-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ul>
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.links.length > 0 && (
                      <div className="project-links">
                        {project.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link"
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </main>
  );
}
