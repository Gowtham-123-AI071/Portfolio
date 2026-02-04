import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

/* 🔥 Cursor Glow */
function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;

    const move = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div id="cursor-glow" className="cursor-glow"></div>;
}

/* 🔥 Disable background video outside Home */
function PageWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle(
      "disable-bg-video",
      location.pathname !== "/"
    );
  }, [location.pathname]);

  return children;
}

export default function App() {
  return (
    <>
      <CursorGlow />

      <Router>
        <Navbar />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </PageWrapper>
      </Router>
    </>
  );
}
