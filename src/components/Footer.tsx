import { contact } from "../data/contact";
import { lastUpdated, formatLastUpdated } from "../data/site";


export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <span>© {new Date().getFullYear()} Vibhas Ramani</span>
        <span className="site-footer-sep" aria-hidden="true">
          ·
        </span>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <span className="site-footer-sep" aria-hidden="true">
          ·
        </span>
        <a href={contact.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span className="site-footer-sep" aria-hidden="true">
          ·
        </span>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span className="site-footer-sep" aria-hidden="true">
          ·
        </span>
        <span>Last updated {formatLastUpdated(lastUpdated)}</span>
      </div>
    </footer>
  );
}
