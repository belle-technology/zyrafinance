import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, targetDate.getTime() - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return timeLeft;
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbX = useTransform(mouseX, [-400, 400], [-15, 15]);
  const orbY = useTransform(mouseY, [-400, 400], [-15, 15]);
  const presaleDate = useRef(new Date("2026-06-01T00:00:00Z"));
  const { days, hours, minutes, seconds } = useCountdown(presaleDate.current);

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
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(152 100% 50% / 0.05) 0%, transparent 70%)",
        }}
      />
      
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none"
        style={{ background: "linear-gradient(to top, hsl(0 0% 2%), transparent)" }}
      />

      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0, 0, 1] }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15 text-primary text-[11px] font-mono-brand mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            PRESALE — JUNE 2026
          </motion.span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter-custom text-balance text-foreground leading-[1.05] mb-6">
            Trade Without{" "}
            <span className="gradient-text">Borders.</span>
          </h1>
          
          <p className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed mb-3">
            Africa's first non-custodial DEX — eliminating high fees, slow settlements, and limited access to global crypto markets.
          </p>
          <p className="text-muted-foreground/50 text-sm max-w-lg leading-relaxed mb-10 font-mono-brand">
            Cross-chain · MEV Protection · AI Routing · Built for 1.4B people
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            {[
              { value: "0%", label: "Custodial Risk" },
              { value: "10+", label: "Chains Planned" },
              { value: "< 1s", label: "Settlement Target" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                className="flex flex-col"
              >
                <span className="text-2xl md:text-3xl font-bold text-foreground font-mono-brand">
                  {stat.value}
                </span>
                <span className="text-[11px] text-muted-foreground/60 mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span className="text-[10px] text-muted-foreground/50 font-mono-brand uppercase tracking-widest mb-3 block">
              Presale Launches In
            </span>
            <div className="flex gap-3">
              {[
                { value: days, label: "Days" },
                { value: hours, label: "Hrs" },
                { value: minutes, label: "Min" },
                { value: seconds, label: "Sec" },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="flex flex-col items-center rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] px-3.5 py-2.5 min-w-[56px]"
                >
                  <span className="text-xl md:text-2xl font-bold font-mono-brand text-primary">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] text-muted-foreground/40 mt-0.5">{unit.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Orb */}
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.2, 0, 0, 1] }}
        >
          <motion.div
            className="relative w-[400px] h-[400px] xl:w-[480px] xl:h-[480px]"
            style={{ x: orbX, y: orbY }}
            animate={{ y: [-12, 12] }}
            transition={{ y: { duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" } }}
          >
            {/* Orbital rings */}
            <motion.div
              className="absolute inset-[5%] rounded-full"
              style={{ border: "1px solid hsl(152 100% 50% / 0.06)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-[15%] rounded-full"
              style={{ border: "1px solid hsl(152 100% 50% / 0.1)" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-[28%] rounded-full"
              style={{ border: "1px dashed hsl(152 100% 50% / 0.05)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            />
            
            {/* Orbital dots */}
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-primary"
              style={{ top: "5%", left: "50%", marginLeft: "-4px", boxShadow: "0 0 12px hsl(152 100% 50% / 0.6)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            />
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/50"
              style={{ top: "15%", left: "85%" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            />
            
            {/* Core glow layers */}
            <div className="absolute inset-0 rounded-full" style={{
              background: "radial-gradient(circle, hsl(152 100% 50% / 0.08) 0%, transparent 60%)",
            }} />
            <div className="absolute inset-[18%] rounded-full blur-2xl" style={{
              background: "radial-gradient(circle, hsl(152 100% 50% / 0.2) 0%, transparent 70%)",
            }} />
            <div className="absolute inset-[32%] rounded-full blur-xl" style={{
              background: "radial-gradient(circle, hsl(152 100% 60% / 0.4) 0%, transparent 70%)",
            }} />
            <div className="absolute inset-[42%] rounded-full blur-sm" style={{
              background: "radial-gradient(circle, hsl(152 100% 80% / 0.5) 0%, transparent 80%)",
            }} />
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
        <span className="text-[9px] text-muted-foreground/40 font-mono-brand uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-[1px] h-6 bg-gradient-to-b from-primary/30 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
