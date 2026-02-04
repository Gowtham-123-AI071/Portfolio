import { useEffect } from "react";

export default function useParallax() {
  useEffect(() => {

    // ✅ SAFETY GUARD (ADDED)
    if (typeof window === "undefined") return;

    const handleMouseMove = (e) => {
      // ✅ SAFETY GUARD (ADDED)
      if (!window.innerWidth || !window.innerHeight) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      // ✅ SAFETY GUARD (ADDED)
      if (document && document.documentElement) {
        document.documentElement.style.setProperty("--px", `${x}px`);
        document.documentElement.style.setProperty("--py", `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // ✅ CLEANUP SAFETY (UNCHANGED LOGIC, JUST GUARDED)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);
}
