import { useRef, useEffect } from "react"; // ✅ ADDED useEffect

export default function TiltCard({ children }) {
  const ref = useRef(null);

  // ✅ SAFETY FLAG (ADDED)
  const isReady = useRef(false);

  useEffect(() => {
    isReady.current = true;
    return () => {
      isReady.current = false;
    };
  }, []);

  const handleMove = (e) => {
    // ✅ SAFETY GUARDS (ADDED)
    if (!isReady.current) return;
    if (typeof window === "undefined") return;
    if (!ref.current) return;

    // Disable tilt on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = ref.current.getBoundingClientRect();
    if (!rect) return; // ✅ ADDED

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // ✅ REDUCED MOVEMENT (UPDATED)
    const rotateX = ((y / rect.height) - 0.5) * -4;
    const rotateY = ((x / rect.width) - 0.5) * 4;

    ref.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.01)
    `;
  };

  const reset = () => {
    // ✅ SAFETY GUARDS (ADDED)
    if (!isReady.current) return;
    if (!ref.current) return;

    ref.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="
        transition-transform duration-300 ease-out
        will-change-transform
      "
    >
      {children}
    </div>
  );
}
