import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const particles = Array.from({ length: 24 }, (_, idx) => ({
  id: idx,
  size: 3 + (idx % 5) * 2,
  x: `${(idx * 17) % 100}%`,
  delay: idx * 0.2
}));

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const lightX = useTransform(smoothX, (v) => `${v - 150}px`);
  const lightY = useTransform(smoothY, (v) => `${v - 150}px`);

  useEffect(() => {
    const handleMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ left: lightX, top: lightY }}
        className="absolute h-72 w-72 rounded-full bg-violet-500/25 blur-3xl"
      />
      <div className="absolute inset-0 bg-hero-grid bg-[size:60px_60px] opacity-20" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-300/40"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x
          }}
          animate={{
            y: ["110vh", "-10vh"],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 13 + (particle.id % 5) * 2,
            ease: "linear",
            delay: particle.delay
          }}
        />
      ))}
    </div>
  );
}
