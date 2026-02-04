import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ helper: go home + scroll
  const goHomeAndScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  // ✅ helper: active link style
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-purple-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1
          className="text-xl font-bold text-purple-700 tracking-wide cursor-pointer"
          onClick={() => navigate("/")}
        >
          Gowtham R
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-base font-semibold text-gray-800">

          {/* HOME */}
          <button
            onClick={() => navigate("/")}
            className={`px-3 py-2 rounded-lg transition
              ${isActive("/") ? "bg-gray-300 text-gray-900" : "hover:bg-gray-200"}`}
          >
            Home
          </button>

          {/* EDUCATION */}
          <button
            onClick={() => goHomeAndScroll("education")}
            className={`px-3 py-2 rounded-lg transition
              ${isActive("/") ? "hover:bg-blue-100 hover:text-blue-700" : "hover:bg-blue-100 hover:text-blue-700"}`}
          >
            Education
          </button>

          {/* PROJECTS */}
          <button
            onClick={() => navigate("/projects")}
            className={`px-3 py-2 rounded-lg transition
              ${isActive("/projects")
                ? "bg-indigo-200 text-indigo-800"
                : "hover:bg-indigo-100 hover:text-indigo-700"}`}
          >
            Projects
          </button>

          {/* ACHIEVEMENTS */}
          <button
            onClick={() => navigate("/achievements")}
            className={`px-3 py-2 rounded-lg transition
              ${isActive("/achievements")
                ? "bg-purple-200 text-purple-800"
                : "hover:bg-purple-100 hover:text-purple-700"}`}
          >
            Achievements
          </button>

          {/* EXPERIENCE */}
          <button
            onClick={() => navigate("/experience")}
            className={`px-3 py-2 rounded-lg transition
              ${isActive("/experience")
                ? "bg-emerald-200 text-emerald-800"
                : "hover:bg-emerald-100 hover:text-emerald-700"}`}
          >
            Experience
          </button>

          {/* ACTIVITIES */}
          <button
            onClick={() => navigate("/activities")}
            className={`px-3 py-2 rounded-lg transition
              ${isActive("/activities")
                ? "bg-orange-200 text-orange-800"
                : "hover:bg-orange-100 hover:text-orange-700"}`}
          >
            Activities
          </button>

          {/* RESUME */}
          <button
            onClick={() => navigate("/resume")}
            className={`ml-2 px-6 py-2 rounded-xl shadow-md transition
              ${isActive("/resume")
                ? "bg-purple-800 text-white"
                : "bg-purple-600 text-white hover:bg-purple-700 hover:scale-105"}`}
          >
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-purple-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 px-6 pb-6 space-y-3 font-semibold">

          <button
            onClick={() => navigate("/")}
            className={`block w-full text-left px-3 py-2 rounded
              ${isActive("/") && "bg-gray-200"}`}
          >
            Home
          </button>

          <button
            onClick={() => goHomeAndScroll("education")}
            className="block w-full text-left px-3 py-2"
          >
            Education
          </button>

          <button
            onClick={() => navigate("/projects")}
            className={`block w-full text-left px-3 py-2 rounded
              ${isActive("/projects") && "bg-indigo-200 text-indigo-800"}`}
          >
            Projects
          </button>

          <button
            onClick={() => navigate("/achievements")}
            className={`block w-full text-left px-3 py-2 rounded
              ${isActive("/achievements") && "bg-purple-200 text-purple-800"}`}
          >
            Achievements
          </button>

          <button
            onClick={() => navigate("/experience")}
            className={`block w-full text-left px-3 py-2 rounded
              ${isActive("/experience") && "bg-emerald-200 text-emerald-800"}`}
          >
            Experience
          </button>

          <button
            onClick={() => navigate("/activities")}
            className={`block w-full text-left px-3 py-2 rounded
              ${isActive("/activities") && "bg-orange-200 text-orange-800"}`}
          >
            Activities
          </button>

          <button
            onClick={() => navigate("/resume")}
            className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg"
          >
            Resume
          </button>
        </div>
      )}
    </nav>
  );
}
