import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  { phase: 0, date: "2025", title: "ZRA Token Development & Smart Contract Initialization", status: "completed" as const },
  { phase: 1, date: "June 2026", title: "First Presale Launch", status: "current" as const },
  { phase: 2, date: "Q3 2026", title: "MVP (Minimum Viable Product) Release", status: "future" as const },
  { phase: 3, date: "Q4 2026", title: "Public ICO & Token Distribution Event", status: "future" as const },
  { phase: 4, date: "Q4 2026", title: "Testnet Launch", status: "future" as const },
  { phase: 5, date: "Q1 2027", title: "Mainnet Exchange Launch", status: "future" as const },
  { phase: 6, date: "Q1–Q2 2027", title: "Mobile Applications (iOS & Android)", status: "future" as const },
  { phase: 7, date: "Q2 2027", title: "DAO Governance Activation", status: "future" as const },
  { phase: 8, date: "Q3–Q4 2027", title: "Cross-Chain Integration & Liquidity Expansion", status: "future" as const },
  { phase: 9, date: "2028", title: "Advanced AI Trading & Automation Systems", status: "future" as const },
];

const currentPhaseIndex = 1;
const ballPosition = `${(currentPhaseIndex / (phases.length - 1)) * 100}%`;

const RoadmapSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-32 md:py-48 px-6 md:px-16 lg:px-24">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
      >
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter-custom text-foreground mb-16 text-center">
          Roadmap
        </h2>

        {/* Desktop: Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Track */}
            <div className="w-full h-[2px] bg-foreground/10" />

            {/* Animated Trail */}
            <motion.div
              className="absolute top-0 left-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, hsl(152 100% 50% / 0.6), hsl(152 100% 50% / 0.2))" }}
              initial={{ width: "0%" }}
              animate={isInView ? { width: ballPosition } : {}}
              transition={{ duration: 1.5, ease: [0.2, 0, 0, 1], delay: 0.3 }}
            />

            {/* Ball */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary glow-green"
              style={{ willChange: "transform" }}
              initial={{ left: "0%" }}
              animate={isInView ? { left: ballPosition } : {}}
              transition={{ duration: 1.5, ease: [0.2, 0, 0, 1], delay: 0.3 }}
            />

            {/* Phase markers */}
            <div className="flex justify-between mt-8">
              {phases.map((p, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center"
                  style={{ width: `${100 / phases.length}%` }}
                >
                  <div
                    className={`w-2 h-2 rounded-full mb-3 ${
                      p.status === "completed"
                        ? "bg-primary/60"
                        : p.status === "current"
                        ? "bg-primary glow-green"
                        : "bg-foreground/20"
                    }`}
                  />
                  <span
                    className={`text-xs font-mono mb-1 ${
                      p.status === "completed"
                        ? "text-primary/60"
                        : p.status === "current"
                        ? "text-primary font-bold text-glow-green"
                        : "text-foreground/20"
                    }`}
                  >
                    Phase {p.phase}
                  </span>
                  <span
                    className={`text-[10px] mb-1 ${
                      p.status === "current" ? "text-primary/80" : "text-muted-foreground/60"
                    }`}
                  >
                    {p.date}
                  </span>
                  <span
                    className={`text-[10px] leading-tight max-w-[100px] ${
                      p.status === "completed"
                        ? "text-primary/40"
                        : p.status === "current"
                        ? "text-foreground/80"
                        : "text-foreground/15"
                    }`}
                  >
                    {p.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical */}
        <div className="lg:hidden space-y-0 relative">
          {/* Vertical track */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-foreground/10" />

          {/* Animated trail */}
          <motion.div
            className="absolute left-4 top-0 w-[2px]"
            style={{ background: "linear-gradient(180deg, hsl(152 100% 50% / 0.6), hsl(152 100% 50% / 0.2))" }}
            initial={{ height: "0%" }}
            animate={isInView ? { height: `${((currentPhaseIndex + 0.5) / phases.length) * 100}%` } : {}}
            transition={{ duration: 1.5, ease: [0.2, 0, 0, 1], delay: 0.3 }}
          />

          {phases.map((p, i) => (
            <div key={i} className="relative pl-12 pb-8">
              <div
                className={`absolute left-[12px] top-1 w-3 h-3 rounded-full ${
                  p.status === "completed"
                    ? "bg-primary/60"
                    : p.status === "current"
                    ? "bg-primary glow-green"
                    : "bg-foreground/20"
                }`}
              />
              <span
                className={`text-xs font-mono block mb-1 ${
                  p.status === "completed"
                    ? "text-primary/60"
                    : p.status === "current"
                    ? "text-primary font-bold"
                    : "text-foreground/20"
                }`}
              >
                Phase {p.phase} — {p.date}
              </span>
              <span
                className={`text-sm ${
                  p.status === "completed"
                    ? "text-primary/40"
                    : p.status === "current"
                    ? "text-foreground/80"
                    : "text-foreground/15"
                }`}
              >
                {p.title}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default RoadmapSection;
