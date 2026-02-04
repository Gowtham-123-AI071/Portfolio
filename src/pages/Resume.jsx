import { useState } from "react";
import ParticlesCursor from "../components/ParticlesCursor"; // ✅ ADDED

export default function Resume() {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [showResume, setShowResume] = useState(false); // ✅ ADDED

  const handleDownload = () => {
    if (downloading) return;

    setDownloading(true);
    setProgress(0);

    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 15;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        const link = document.createElement("a");
        link.href = "/resume/Gowtham R_Resume.pdf";
        link.download = "Gowtham R_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
          setDownloading(false);
          setProgress(0);
        }, 600);
      }
      setProgress(Math.floor(value));
    }, 180);
  };

  return (
    <>
      {/* FORCE NAVBAR */}
      <style>
        {`
          nav {
            position: fixed !important;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 9999;
          }
        `}
      </style>

      {/* ✅ CURSOR MOVEMENT */}
      <ParticlesCursor />

      <div className="min-h-screen pt-32 px-6 bg-[#070B1A] text-white flex flex-col items-center relative overflow-hidden">

{/* ================= EXTRA STRONG WHITE GLOW ================= */}

        {/* Corner glow layers */}
        <div className="absolute top-0 left-0 w-[520px] h-[520px] bg-white/35 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-white/35 blur-[160px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-white/35 blur-[160px] rounded-full -translate-x-1/2 translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-white/35 blur-[160px] rounded-full translate-x-1/2 translate-y-1/2" />


        {/* Soft vignette glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgb(0, 0, 0), transparent 65%)"
          }}
        />

        {/* ============================================================ */}

        {/* TITLE */}
        <h1 className="text-5xl font-bold text-green-400 mb-3 relative z-10">
          Resume
        </h1>

        <p className="text-gray-300 mb-10 relative z-10">
          View or download my resume
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-6 items-center relative z-10">

          {/* ✅ VIEW BUTTON — FIXED (NO NAVIGATION) */}
          <button
            type="button"
            onClick={() => setShowResume(true)}
            className="
              px-8 py-3 rounded-xl
              bg-purple-600 text-white font-semibold
              hover:scale-105 transition
              shadow-[0_0_20px_rgba(168,85,247,0.8)]
            "
          >
            
            View Resume
          </button>

          {/* DOWNLOAD BUTTON */}
          <button
            onClick={handleDownload}
            className={`
              relative px-10 py-3 rounded-xl
              font-semibold text-black
              transition-all duration-300
              ${downloading
                ? "bg-green-400"
                : "bg-green-500 hover:scale-105"}
              shadow-[0_0_25px_rgba(34,197,94,0.9)]
            `}
          >
            {downloading ? "Downloading…" : "Download Resume"}

            {downloading && (
              <span
                className="absolute left-0 bottom-0 h-[4px] bg-black/70 rounded-b-xl transition-all"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
          
        </div>

        {/* PROGRESS TEXT */}
        {downloading && (
          <p className="mt-4 text-green-400 font-semibold relative z-10">
            {progress}%
          </p>
        )}

        {/* ✅ INLINE RESUME VIEWER */}
        {showResume && (
          <div className="mt-16 w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-white relative z-10">
            <iframe
              src="/resume/Gowtham R_Resume.pdf"
              title="Resume"
              className="w-full h-full"
              frameBorder="0"
            />
          </div>
        )}

      </div>
    </>
  );
}
