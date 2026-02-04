import { useState } from "react";

export default function ParachuteDownloadButton({ file }) {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const startDownload = () => {
    if (downloading) return;

    setDownloading(true);
    setProgress(0);

    let val = 0;
    const timer = setInterval(() => {
      val += Math.random() * 10 + 5;

      if (val >= 100) {
        val = 100;
        clearInterval(timer);

        const a = document.createElement("a");
        a.href = file;
        a.download = file.split("/").pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setTimeout(() => {
          setDownloading(false);
          setProgress(0);
        }, 1000);
      }

      setProgress(Math.floor(val));
    }, 160);
  };

  return (
    <button
      onClick={startDownload}
      className="
        relative w-[320px] h-[70px]
        rounded-full bg-black
        border border-cyan-400
        shadow-[0_0_30px_rgba(34,211,238,0.9)]
        overflow-hidden
      "
    >
      {/* PROGRESS LINE */}
      <div className="absolute bottom-3 left-6 right-6 h-[3px] bg-cyan-400/20">
        <div
          className="h-full bg-cyan-400 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* PARACHUTE + ARROW */}
      <div
        className={`
          absolute left-1/2
          ${downloading ? "top-3" : "top-1/2"}
          -translate-x-1/2
          transition-all duration-700
        `}
      >
        {/* PARACHUTE SVG */}
        {downloading && (
          <svg
            width="40"
            height="20"
            viewBox="0 0 100 50"
            className="mx-auto animate-pulse"
          >
            <path
              d="M10 40 Q50 0 90 40"
              stroke="#22d3ee"
              strokeWidth="6"
              fill="none"
            />
            <line x1="50" y1="40" x2="50" y2="55" stroke="#22d3ee" strokeWidth="4" />
          </svg>
        )}

        {/* ARROW */}
        <div
          className={`
            mx-auto mt-1
            w-0 h-0
            border-l-[10px] border-l-transparent
            border-r-[10px] border-r-transparent
            border-t-[18px] border-t-cyan-400
            ${downloading ? "animate-bounce" : ""}
          `}
        />
      </div>

      {/* TEXT */}
      <span className="absolute inset-0 flex items-center justify-center text-cyan-300 font-semibold tracking-wider">
        {downloading ? `${progress}%` : "Download Resume"}
      </span>
    </button>
  );
}
