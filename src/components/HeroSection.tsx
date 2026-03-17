import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbX = useTransform(mouseX, [-400, 400], [-20, 20]);
  const orbY = useTransform(mouseY, [-400, 400], [-20, 20]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-svh flex items-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Gradient overlays */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
        style={{
          background: "radial-gradient(ellipse at center, hsl(152 100% 50% / 0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-[400px]"
        style={{
          background: "linear-gradient(to top, hsl(0 0% 2%), transparent)",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.2, 0, 0, 1] }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono-brand mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            PRESALE LAUNCHING JUNE 2026
          </motion.span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter-custom text-balance text-foreground leading-[1.05] mb-6">
            Decentralized Trading,{" "}
            <span className="gradient-text">Reimagined.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed mb-10">
            Africa's first non-custodial DEX — secure, transparent, and built for a global audience.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: "10", label: "Phases Planned" },
              { value: "2025", label: "Founded" },
              { value: "∞", label: "Potential" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                className="flex flex-col"
              >
                <span className="text-2xl md:text-3xl font-bold text-foreground font-mono-brand">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Orb */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.2, 0, 0, 1] }}
        >
          <motion.div
            className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px]"
            style={{ x: orbX, y: orbY }}
            animate={{ y: [-15, 15] }}
            transition={{
              y: { duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
            }}
          >
            {/* Rotating rings */}
            <motion.div
              className="absolute inset-[5%] rounded-full"
              style={{
                border: "1px solid hsl(152 100% 50% / 0.08)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-[15%] rounded-full"
              style={{
                border: "1px solid hsl(152 100% 50% / 0.12)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-[25%] rounded-full"
              style={{
                border: "1px dashed hsl(152 100% 50% / 0.06)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            />

            {/* Orbiting dots */}
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-primary glow-green"
              style={{ top: "5%", left: "50%", marginLeft: "-4px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            />
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/60"
              style={{ top: "15%", left: "85%" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            />

            {/* Outer glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(152 100% 50% / 0.12) 0%, hsl(152 100% 50% / 0.03) 40%, transparent 70%)",
              }}
            />
            {/* Mid glow */}
            <div
              className="absolute inset-[20%] rounded-full blur-2xl"
              style={{
                background: "radial-gradient(circle, hsl(152 100% 50% / 0.25) 0%, transparent 70%)",
              }}
            />
            {/* Inner core */}
            <div
              className="absolute inset-[35%] rounded-full blur-xl"
              style={{
                background: "radial-gradient(circle, hsl(152 100% 60% / 0.5) 0%, hsl(152 100% 50% / 0.2) 50%, transparent 80%)",
              }}
            />
            {/* Bright center */}
            <div
              className="absolute inset-[44%] rounded-full blur-sm"
              style={{
                background: "radial-gradient(circle, hsl(152 100% 80% / 0.6) 0%, hsl(152 100% 50% / 0.3) 60%, transparent 100%)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-[10px] text-muted-foreground font-mono-brand uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-primary/40 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
