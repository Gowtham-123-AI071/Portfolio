import { education } from "../data/education";
import GlassCard from "./GlassCard";
import { motion } from "framer-motion";

export default function EducationTimeline() {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-6 py-24"
    >

      {/* ================= EDUCATION HEADING ================= */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          inline-block
          mb-16
          px-10 py-4
          bg-white
          text-black
          rounded-full
          text-4xl
          font-extrabold
          shadow-[0_0_30px_rgba(255,255,255,0.7)]
        "
      >
        Education
      </motion.h2>

      {/* ================= TIMELINE WRAPPER ================= */}
      <div className="relative space-y-14">

        {/* ================= VERTICAL LINE ================= */}
        <div
          className="
            absolute left-5 top-0 bottom-0 w-1.5
            bg-gradient-to-b from-white via-blue-500 to-orange-400
            rounded-full
          "
        ></div>

        {education.map((edu, i) => {

          /* ================= DOT COLOR ================= */
          const dotColor =
            i === 0
              ? "bg-white shadow-[0_0_18px_white]"
              : i === 1
              ? "bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,1)]"
              : "bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,1)]";

          /* ================= CARD COLOR ================= */
          const glassTint =
            i === 0
              ? "bg-white/70 border-white/60"
              : i === 1
              ? "bg-yellow-500/90 border-yellow-700/60"
              : "bg-orange-500/90 border-orange-400/60";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-20 flex justify-center"
            >

              {/* ================= CARD + DOT WRAPPER ================= */}
              <div className="relative flex items-center">

                {/* ================= TIMELINE DOT (PERFECT CENTER) ================= */}
                <div
                  className={`
                    absolute -left-[44px]
                    top-1/2 -translate-y-1/2
                    w-6 h-6
                    rounded-full
                    border-4 border-black
                    ${dotColor}
                  `}
                ></div>

                {/* ================= GLASS CARD ================= */}
                <GlassCard>
                  <div
                    className={`
                      p-6
                      rounded-2xl
                      backdrop-blur-md
                      border
                      ${glassTint}
                      w-[520px] md:w-[580px]
                    `}
                  >

                    {/* ================= CONTENT ================= */}
                    <div className="flex flex-col gap-3">

                      {/* ================= LOGO ================= */}
                      {edu.logo && (
                        <div
                          className="
                            w-10 h-10
                            rounded-lg
                            bg-white
                            flex items-center justify-center
                            shadow-md
                          "
                        >
                          <img
                            src={edu.logo}
                            alt={edu.place}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                      )}

                      <p className="text-base font-extrabold text-black">
                        {edu.place}
                      </p>

                      <h3 className="text-lg md:text-xl font-bold text-black">
                        {edu.title}
                      </h3>

                      <p className="text-sm font-semibold text-black/90">
                        {edu.year} • {edu.score}
                      </p>

                    </div>

                  </div>
                </GlassCard>
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
