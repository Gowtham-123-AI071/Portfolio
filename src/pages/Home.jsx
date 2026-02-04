import { motion } from "framer-motion";
import { useEffect } from "react";
import Hero3D from "../components/Hero3D";
import EducationTimeline from "../components/EducationTimeline";
import Achievements from "../components/Achievements";
import Skills from "../components/Skills";
import Projects3D from "../components/Projects3D";
import Contact from "../components/Contact";
import Section from "../components/Section";

/* 🔥 PARTICLE CURSOR */
import ParticlesCursor from "../components/ParticlesCursor";

/* ================= ERROR BOUNDARY ================= */
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Home page crash caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#070B1A] text-white">
          <h1 className="text-xl font-semibold">
            Loading portfolio… please refresh
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function Home() {

  /* ================= PARALLAX ENGINE ================= */
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const handleMouseMove = (e) => {
      if (!window.innerWidth || !window.innerHeight) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      document.documentElement.style.setProperty("--px", `${x}px`);
      document.documentElement.style.setProperty("--py", `${y}px`);
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* ================= SCROLL ENGINE ================= */
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const handleScroll = () => {
      document.documentElement.style.setProperty("--sy", `${window.scrollY}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ErrorBoundary>
      <main className="pt-28 bg-[#070B1A] text-white relative overflow-hidden">

        {/* ================= PARTICLE CURSOR ================= */}
        <ParticlesCursor />

        {/* ================= ORIGINAL VIDEO (UNCHANGED) ================= */}
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
          <video
            className="w-full h-full object-cover transition-transform duration-300 will-change-transform"
            src="/videos/bg-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              transform: "scale(calc(1 + (var(--sy) * 0.00015)))"
            }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* ================= ZOOM-SAFE OVERLAY VIDEO (ADDED) ================= */}
        <div className="fixed inset-0 -z-40 pointer-events-none">
          <video
            className="w-full h-full object-cover fixed inset-0"
            src="/videos/bg-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-24">

              <motion.div
                initial={{ x: 120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="
                  flex-shrink-0
                  w-[320px] sm:w-[380px] md:w-[420px] lg:w-[480px]
                  scale-110 md:scale-125 lg:scale-150
                "
              >
                <Hero3D />
              </motion.div>

              <motion.div
                initial={{ x: -120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="max-w-2xl md:pr-12 text-left"
              >
                <h1 className="
                  text-6xl md:text-7xl font-extrabold
                  text-green-400
                  drop-shadow-[0_0_30px_rgba(34,197,94,0.7)]
                ">
                  Gowtham R
                </h1>

                <p className="mt-6 text-xl md:text-2xl text-gray-200">
                  Artificial Intelligence & Machine Learning Student
                </p>

                <p className="mt-6 text-lg leading-relaxed text-gray-300">
                  Driven and enthusiastic AI & Machine Learning student with a strong command of programming
                  languages such as Python, C, and C++. Proficient in Data Structures and Algorithms, with
                  practical experience in building smart solutions and web applications.
                </p>

                <div className="mt-10">
                  <a
                    href="#projects"
                    className="
                      inline-block px-8 py-4
                      bg-gradient-to-r from-blue-500 to-blue-700
                      text-white rounded-2xl
                      shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_50px_rgba(255,255,255,0.6)]
                      hover:scale-105
                      transition-all duration-300
                    "
                  >
                    View Projects
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        <Section id="education"><EducationTimeline /></Section>
        <Section id="achievements"><Achievements /></Section>
        <Section id="skills"><Skills /></Section>
        <Section id="projects"><Projects3D /></Section>
        <Section id="contact"><Contact /></Section>

      </main>
    </ErrorBoundary>
  );
}
