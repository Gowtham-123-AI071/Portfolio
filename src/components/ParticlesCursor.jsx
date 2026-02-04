import { useEffect, useRef } from "react";

export default function ParticlesCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {

    // ✅ SAFETY: ensure browser + canvas exists
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // ✅ prevent crash if context fails

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = [];
    const mouse = { x: w / 2, y: h / 2 };

    // ✅ STORE HANDLERS FOR CLEANUP
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      for (let i = 0; i < 4; i++) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 60,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationId; // ✅ track animation frame

    function draw() {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,215,0,${p.life / 60})`;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "rgba(255,215,0,1)";
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
      });

      animationId = requestAnimationFrame(draw); // ✅ safe RAF
    }

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // ✅ CLEANUP (CRITICAL FOR STRICT MODE)
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[999]"
    />
  );
}
