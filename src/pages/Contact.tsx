import { motion } from "framer-motion";
import { contact } from "../data/contact";

export default function Contact() {
  return (
    <main className="page page-contact">
      <div className="container page-head">
        <p className="eyebrow">Contact</p>
        <h1>Let's build something.</h1>
        <p className="page-lede">
          Reach out about jobs, roles, or collaborations; I read everything.
        </p>
      </div>

      <div className="container contact-grid">
        <motion.a
          className="contact-card contact-card-primary"
          href={`mailto:${contact.email}`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Email</span>
          {/* EDIT ME — set your real email in src/data/contact.ts */}
          <span className="contact-value">{contact.email}</span>
          <span className="contact-arrow" aria-hidden="true">→</span>
        </motion.a>

        <motion.a
          className="contact-card"
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">LinkedIn</span>
          <span className="contact-value">/in/vibhas-ramani</span>
          <span className="contact-arrow" aria-hidden="true">↗</span>
        </motion.a>

        <motion.a
          className="contact-card"
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">GitHub</span>
          <span className="contact-value">/vibz2</span>
          <span className="contact-arrow" aria-hidden="true">↗</span>
        </motion.a>

        {contact.phone && (
          <motion.a
            className="contact-card"
            href={`tel:${contact.phone}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Phone</span>
            <span className="contact-value">{contact.phone}</span>
            <span className="contact-arrow" aria-hidden="true">→</span>
          </motion.a>
        )}
      </div>

      <p className="container contact-footnote">
        {/* EDIT ME — update location text in src/data/contact.ts if needed */}
        Based in {contact.location}, originally from Kingston, Jamaica.
      </p>
    </main>
  );
}
