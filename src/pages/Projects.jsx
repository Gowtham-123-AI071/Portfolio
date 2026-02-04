import { projects } from "../data/projects";   // ✅ ADDED (named import)

/* ================= ADDED ================= */
import ParticlesCursor from "../components/ParticlesCursor";
import { useRef } from "react";
/* ======================================== */

export default function Projects() {

  /* ================= ADDED ================= */
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const cards = containerRef.current?.querySelectorAll(".glass-card");
    if (!cards) return;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / 100;
      const moveY = (y - centerY) / 100;

      card.style.transform = `
        perspective(900px)
        rotateX(${ -moveY }deg)
        rotateY(${ moveX }deg)
        translateZ(12px)
      `;
    });
  };

  const handleMouseLeave = () => {
    const cards = containerRef.current?.querySelectorAll(".glass-card");
    if (!cards) return;

    cards.forEach((card) => {
      card.style.transform = `
        perspective(900px)
        rotateX(0deg)
        rotateY(0deg)
        translateZ(0px)
      `;
    });
  };
  /* ======================================== */

  return (
    <>
      {/* 🔥 FORCE NAVBAR ALWAYS ON TOP (GLOBAL FIX) */}
      <style>
        {`
          nav {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            z-index: 9999 !important;
          }

          /* ================= ADDED ================= */
          .glass-card {
            transition: transform 0.15s ease-out;
            will-change: transform;
          }
          /* ======================================== */
        `}
      </style>

      {/* ================= ADDED ================= */}
      <ParticlesCursor />
      {/* ======================================== */}

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="min-h-screen pt-32 px-6 relative overflow-hidden bg-[#0b1220]"
      >

        {/* BACKGROUND EFFECTS ONLY */}
        <div className="absolute inset-0 z-0 pointer-events-none">

          {/* GRID */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,197,94,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* GLOWS */}
          <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-green-400/30 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] bg-emerald-400/25 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] bg-teal-400/20 rounded-full blur-3xl" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-16 text-center">
           My Projects are
          </h1>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="glass-card bg-white/90 backdrop-blur-xl rounded-2xl p-7 shadow-xl">
              <img
                src={projects[0]?.image}
                alt={projects[0]?.title}
                className="w-full h-48 object-cover rounded-xl mb-5"
              />
              <h2 className="text-xl font-semibold text-gray-900">
                  Portfolio Website
              </h2>
              <p className="text-sm text-blue-600 mt-1">
                Python, React.js,React Router DOM, Tailwind CSS ,Framer Motion,Vite
              </p>
              <p className="text-gray-700 mt-4">
                I designed and developed a modern personal portfolio website using React.js, Tailwind CSS, and Framer Motion to showcase projects, skills, education, and experience. The website features smooth animations, glassmorphism UI, custom cursor effects, 3D hover interactions, background video effects, and responsive design, providing an engaging and visually appealing user experience while maintaining performance and accessibility.
              </p>
            </div>

            <div className="glass-card bg-white/90 backdrop-blur-xl rounded-2xl p-7 shadow-xl">
              <img
                src={projects[1]?.image}
                alt={projects[1]?.title}
                className="w-full h-48 object-cover rounded-xl mb-5"
              />
              <h2 className="text-xl font-semibold text-gray-900">
                Smart-Price-Aggregator-A-Cross-Platform-E-Commerce-Comparison-System
              </h2>
              <p className="text-sm text-red-600 mt-1">
                Python, Flask, REST APIs, Machine Learning models, Pandas, NumPy, Web Scraping , API Integration
              </p>
              <p className="text-gray-700 mt-4">
                I developed a Smart Price Comparison system using Python, Flask, REST APIs, and Machine Learning to collect, analyze, and compare product prices across multiple e-commerce platforms. Integrated an AI-powered chatbot for user queries and interactive prediction graphs to visualize price trends and future price forecasts, enabling informed purchasing decisions through intelligent analysis of real-time and historical data.
              </p>
            </div>

            <div className="glass-card bg-white/90 backdrop-blur-xl rounded-2xl p-7 shadow-xl">
              <img
                src={projects[2]?.image}
                alt={projects[2]?.title}
                className="w-full h-48 object-cover rounded-xl mb-5"
              />
              <h2 className="text-xl font-semibold text-gray-900">
                Automated Email Sender
              </h2>
              <p className="text-sm text-green-600 mt-1">
                Python, SMTP, Email APIs, Automation Scripts
              </p>
              <p className="text-gray-700 mt-4">
                I developed an Automated Email Sender using Python and SMTP protocols to send personalized emails efficiently without manual intervention. The system supports automated bulk email delivery, dynamic message content, and scheduled execution, improving communication efficiency while ensuring reliability and accuracy.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
