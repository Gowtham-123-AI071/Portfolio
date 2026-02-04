import { motion } from "framer-motion";
import { useEffect, useState } from "react"; // ✅ ADDED

export default function Hero3D() {

  // ✅ SAFE MOUNT GUARD (ADDED)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ PREVENT RENDER BEFORE MOUNT
  if (!mounted) return null;

  return (
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="relative flex justify-center items-center"
    >
      {/* ✅ STRONGER PURPLE GLOW (ENHANCED) */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-purple-500 blur-[140px] opacity-40"></div>

      {/* ✅ SOFT WHITE GLOW (ADDED) */}
      <div className="absolute w-[360px] h-[360px] rounded-full bg-white/30 blur-[120px]"></div>

      {/* Profile Image */}
      <img
        src="/images/PHOTO.jpeg"   // ✅ JPEG
        alt="Gowtham R"
        onError={(e) => { e.currentTarget.style.display = "none"; }} // ✅ ADDED SAFETY
        className="
          relative z-10

          /* ✅ BIGGER SIZE */
          w-72 h-72
          sm:w-80 sm:h-80
          md:w-96 md:h-96

          rounded-full
          object-cover object-center

          /* ✅ SHARPER BORDER + GLOW */
          border-[5px] border-purple-500
          shadow-[0_0_50px_rgba(168,85,247,1),0_0_90px_rgba(255,255,255,0.6)]

          /* ✅ IMAGE CLARITY */
          contrast-105 saturate-110
        "
      />
    </motion.div>
  );
}
