import { useRef } from "react";

export default function GlassCard({ children }) {

  /* ================= ADDED ================= */
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--cx", `${x}px`);
    card.style.setProperty("--cy", `${y}px`);
  };
  /* ======================================== */

  return (
    <>
      {/* ================= ADDED STYLES ================= */}
      <style>
        {`
          .glass-card {
            position: relative;
            overflow: hidden;
          }

          .glass-card::before {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
              180px circle at var(--cx, 50%) var(--cy, 50%),
              rgba(168,85,247,0.45),
              transparent 60%
            );
            opacity: 0;
            transition: opacity 0.2s ease;
            pointer-events: none;
          }

          .glass-card:hover::before {
            opacity: 1;
          }
        `}
      </style>
      {/* ================================================= */}

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="
          glass-card
          bg-white/20 backdrop-blur-lg
          border border-white/30
          rounded-2xl p-6
          shadow-xl transition-transform
          hover:scale-105 hover:shadow-neon
        "
      >
        {children}
      </div>
    </>
  );
}
