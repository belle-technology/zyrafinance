import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbX = useTransform(mouseX, [-400, 400], [-15, 15]);
  const orbY = useTransform(mouseY, [-400, 400], [-15, 15]);

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
      className="min-h-svh flex items-center px-6 md:px-16 lg:px-24"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0, 0, 1] }}
        >
          <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-8">
            COMING SOON
          </span>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter-custom text-balance text-foreground leading-[1.05]">
            Decentralized Trading, Reimagined.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md mt-6 leading-relaxed">
            Secure. Non-custodial. Built for the future.
          </p>
        </motion.div>

        {/* Orb */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.2, 0, 0, 1] }}
        >
          <motion.div
            className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px]"
            style={{ x: orbX, y: orbY }}
            animate={{ y: [-20, 20] }}
            transition={{
              y: { duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
            }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Outer glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(152 100% 50% / 0.15) 0%, transparent 70%)",
                mixBlendMode: "screen",
              }}
            />
            {/* Inner core */}
            <div
              className="absolute inset-[30%] rounded-full blur-3xl"
              style={{
                background: "hsl(152 100% 50% / 0.2)",
                mixBlendMode: "screen",
              }}
            />
            {/* Bright center */}
            <div
              className="absolute inset-[42%] rounded-full blur-xl"
              style={{
                background: "hsl(152 100% 50% / 0.4)",
                mixBlendMode: "screen",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
