import { projects } from "../data/projects";
import GlassCard from "./GlassCard";
import TiltCard from "./TiltCard";
import { motion } from "framer-motion";

/* ================= ADDED ================= */
import { useEffect } from "react";
/* ======================================== */

export default function Projects3D() {

  /* ================= PARALLAX ENGINE (ADDED) ================= */
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
  /* =========================================================== */

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-28"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-purple-700"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <TiltCard key={i}>
            <GlassCard>

              {/* IMAGE CONTAINER */}
              <div className="
                w-full h-56
                rounded-xl mb-6
                overflow-hidden
                bg-gradient-to-br from-purple-200 to-purple-400
                flex items-center justify-center
                relative
              ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="
                    absolute inset-0
                    bg-black/60
                    flex items-center justify-center
                    gap-4
                  "
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4 py-2
                      bg-white text-black
                      rounded-lg text-sm
                      hover:scale-105 transition
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4 py-2
                      bg-purple-600 text-white
                      rounded-lg text-sm
                      hover:scale-105 transition
                    "
                  >
                    Live Demo
                  </a>
                </motion.div>

              </div>

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-500">
                {project.tech}
              </p>

            </GlassCard>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
