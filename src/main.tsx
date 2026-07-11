import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import "./styles.css";
import App from "./App.tsx";

// NOTE: HashRouter (URLs like /#/projects) is used instead of BrowserRouter
// so that direct links and page refreshes work correctly on GitHub Pages
// without extra server configuration.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
