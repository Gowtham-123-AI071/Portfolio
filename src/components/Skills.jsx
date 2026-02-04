import GlassCard from "./GlassCard";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-28">
      
      {/* Title */}
      <h2 className="text-4xl font-bold mb-16 text-purple-500">
        Skills
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* Programming Languages */}
        <GlassCard>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Programming Languages
            </h3>

            <div className="flex flex-wrap gap-4">
              {["Python", "C", "C++", "Java"].map(skill => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full text-lg font-semibold
                             bg-blue-500/20 text-blue-300
                             border border-blue-400/40
                             shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </GlassCard>

        {/* Frontend */}
        <GlassCard>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-pink-400 mb-6">
              Frontend Development
            </h3>

            <div className="flex flex-wrap gap-4">
              {["HTML", "CSS", "JavaScript"].map(skill => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full text-lg font-semibold
                             bg-pink-500/20 text-pink-300
                             border border-pink-400/40
                             shadow-[0_0_15px_rgba(236,72,153,0.6)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </GlassCard>

        {/* Backend */}
        <GlassCard>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-emerald-400 mb-6">
              Backend & Databases
            </h3>

            <div className="flex flex-wrap gap-4">
              {["Node.js", "Flask", "MySQL"].map(skill => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full text-lg font-semibold
                             bg-emerald-500/20 text-emerald-300
                             border border-emerald-400/40
                             shadow-[0_0_15px_rgba(16,185,129,0.6)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </GlassCard>

        {/* AI & ML */}
        <GlassCard>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
              AI & Machine Learning
            </h3>

            <div className="flex flex-wrap gap-4">
              {["Machine Learning", "LangChain"].map(skill => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full text-lg font-semibold
                             bg-yellow-500/20 text-yellow-300
                             border border-yellow-400/40
                             shadow-[0_0_15px_rgba(234,179,8,0.6)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </GlassCard>

      </div>
    </section>
  );
}
