import GlassCard from "./GlassCard";
import { motion } from "framer-motion";
import React from "react"; // ✅ ADDED

/* ================= LOCAL ERROR BOUNDARY (ADDED) ================= */
class AchievementsErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Achievements component crashed:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null; // ✅ Fail silently instead of white screen
    }
    return this.props.children;
  }
}

export default function Achievements() {
  return (
    <AchievementsErrorBoundary> {/* ✅ ADDED */}
      <section
        id="achievements"
        className="max-w-6xl mx-auto px-6 py-28"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-14 text-purple-400"
        >
          Achievements & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="shadow-[0_0_25px_rgba(168,85,247,0.25)] rounded-2xl"
          >
            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="text-4xl text-purple-400">🏆</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100">
                    AI & Machine Learning Certifications
                  </h3>
                  <p className="mt-2 text-gray-300">
                    Completed multiple online certifications in AI, Machine Learning,
                    and Data Science fundamentals.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="shadow-[0_0_25px_rgba(168,85,247,0.25)] rounded-2xl"
          >
            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="text-4xl text-purple-400">🚀</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100">
                    Technical Project Recognition
                  </h3>
                  <p className="mt-2 text-gray-300">
                    Recognized for developing real-world AI-based projects such as
                    intelligent chatbots and data-driven applications.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </section>
    </AchievementsErrorBoundary>
  );
}
