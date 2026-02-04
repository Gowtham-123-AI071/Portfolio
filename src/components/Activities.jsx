import GlassCard from "./GlassCard";
import { motion } from "framer-motion";
import React from "react"; // ✅ ADDED

/* ================= LOCAL ERROR BOUNDARY (ADDED) ================= */
class ActivitiesErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Activities component crashed:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null; // ✅ Fail silently instead of blank screen
    }
    return this.props.children;
  }
}

export default function Activities() {
  return (
    <ActivitiesErrorBoundary> {/* ✅ ADDED */}
      <section
        id="activities"
        className="max-w-6xl mx-auto px-6 py-28"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-purple-700 mb-12"
        >
          Extra-Curricular Activities
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <GlassCard>
              <h3 className="font-semibold text-lg mb-2">
                College Fest Volunteer
              </h3>
              <p className="text-gray-400">
                Actively volunteered in UTSAV 2025, assisting in event
                coordination and on-ground management.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <GlassCard>
              <h3 className="font-semibold text-lg mb-2">
                NSS Club Volunteer
              </h3>
              <p className="text-gray-300">
                Participated in multiple NSS initiatives and community-focused
                programs, contributing to social responsibility activities.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </ActivitiesErrorBoundary>
  );
}
