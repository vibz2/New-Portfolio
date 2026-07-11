import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/resume", label: "Resume" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export default function TopNav() {
  const location = useLocation();

  return (
    <header className="topnav">
      <Link to="/" className="topnav-logo" aria-label="Home">
        <span className="topnav-logo-mark">VR</span>
        <span className="topnav-logo-line"/>
      </Link>
      <nav className="topnav-links" aria-label="Primary">
        {links.map((link) => {
          const active = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`topnav-link${active ? " is-active" : ""}`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
