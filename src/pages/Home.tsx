import { motion } from "framer-motion";
import IslandNav from "../components/IslandNav";
import SkillsTide from "../components/SkillsTide";

const tide = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-sky" aria-hidden="true" />
        <div className="hero-stage">
          {/* ============================================================
              EDIT ME — swap in your real photo.
              1. Drop your photo file into the /public folder, e.g. as
                 "public/profile-photo.png" (a square or portrait crop
                 with a transparent or plain background works best).
              2. Change the src below from "/profile-placeholder.svg"
                 to "/profile-photo.png" (both places it appears).
             ============================================================ */}
          <motion.div
            className="sun-photo"
            initial={{ y: 130, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, ease: tide }}
          >
            <img src="public/pfp.jpg" alt="Vibhas Ramani" />
          </motion.div>
          <div className="horizon-line" aria-hidden="true" />
          <motion.div
            className="sun-reflection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.32 }}
            transition={{ duration: 2.8, delay: 0.6, ease: tide }}
            aria-hidden="true"
          >
            <img src="/profile-placeholder.svg" alt="" />
          </motion.div>
        </div>

        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5, ease: tide }}
        >
          <p className="eyebrow">Kingston, Jamaica → College Park, Maryland</p>
          <h1>
            Vibhas Ramani<span className="hero-dot">.</span>
          </h1>
          <p className="hero-role">Backend-leaning full-stack engineer, interested in ML.</p>
          {/* EDIT ME — tweak this paragraph to taste. */}
          <p className="hero-about">
            I ship backend systems and full-stack products, from a real-time FastAPI
            service at a hospital to a Gradient Boosting model predicting water-pump
            failures. Raised in Jamaica, trained across hackathons, internships, and a
            few thousand lines of production code. I like using my skills to deliver 
            tangible impact. Turning messy data and vague
            problems into something people can actually use.
          </p>
        </motion.div>

        <motion.div
          className="hero-scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.7 }}
          aria-hidden="true"
        >
          <span />
        </motion.div>
      </section>

      <section className="tide-section">
        <SkillsTide />
      </section>

      <section className="islands-section">
        <p className="eyebrow islands-eyebrow">where to next</p>
        <IslandNav />
      </section>
    </main>
  );
}
