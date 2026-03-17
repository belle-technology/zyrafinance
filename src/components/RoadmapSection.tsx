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
    <section id="roadmap" ref={sectionRef} className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="absolute top-0 left-0 w-full h-32"
        style={{ background: "linear-gradient(to bottom, hsl(0 0% 2%), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-32"
        style={{ background: "linear-gradient(to top, hsl(0 0% 2%), transparent)" }}
      />

      <motion.div
        className="relative max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
      >
        <div className="text-center mb-20">
          <span className="inline-flex px-3 py-1 rounded-full text-xs font-mono-brand text-primary bg-primary/10 border border-primary/20 mb-6">
            ROADMAP
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter-custom text-foreground mb-4">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From concept to a fully operational decentralized exchange
          </p>
        </div>

        {/* Desktop: Horizontal */}
        <div className="hidden lg:block">
          <div className="relative py-8">
            {/* Track */}
            <div className="w-full h-[2px] bg-foreground/[0.06] rounded-full" />

            {/* Animated Trail */}
            <motion.div
              className="absolute top-8 left-0 h-[2px] rounded-full"
              style={{
                background: "linear-gradient(90deg, hsl(152 100% 50% / 0.8), hsl(152 100% 50% / 0.3))",
                boxShadow: "0 0 20px hsl(152 100% 50% / 0.3)",
              }}
              initial={{ width: "0%" }}
              animate={isInView ? { width: ballPosition } : {}}
              transition={{ duration: 2, ease: [0.2, 0, 0, 1], delay: 0.5 }}
            />

            {/* Ball */}
            <motion.div
              className="absolute top-8 -translate-y-1/2 w-5 h-5 rounded-full bg-primary"
              style={{
                boxShadow: "0 0 20px hsl(152 100% 50%), 0 0 60px hsl(152 100% 50% / 0.4), 0 0 100px hsl(152 100% 50% / 0.2)",
              }}
              initial={{ left: "0%" }}
              animate={isInView ? { left: ballPosition } : {}}
              transition={{ duration: 2, ease: [0.2, 0, 0, 1], delay: 0.5 }}
            />

            {/* Phase markers */}
            <div className="flex justify-between mt-10">
              {phases.map((p, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-center"
                  style={{ width: `${100 / phases.length}%` }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
                >
                  <div
                    className={`w-3 h-3 rounded-full mb-4 transition-all duration-500 ${
                      p.status === "completed"
                        ? "bg-primary/60 shadow-[0_0_10px_hsl(152_100%_50%/0.3)]"
                        : p.status === "current"
                        ? "bg-primary shadow-[0_0_20px_hsl(152_100%_50%/0.5)]"
                        : "bg-foreground/10"
                    }`}
                  />
                  <span
                    className={`text-[11px] font-mono-brand mb-1 ${
                      p.status === "completed"
                        ? "text-primary/70"
                        : p.status === "current"
                        ? "text-primary font-bold"
                        : "text-foreground/20"
                    }`}
                  >
                    Phase {p.phase}
                  </span>
                  <span
                    className={`text-[10px] mb-1 ${
                      p.status === "current" ? "text-primary/60" : "text-muted-foreground/40"
                    }`}
                  >
                    {p.date}
                  </span>
                  <span
                    className={`text-[10px] leading-tight max-w-[100px] ${
                      p.status === "completed"
                        ? "text-primary/40"
                        : p.status === "current"
                        ? "text-foreground/70"
                        : "text-foreground/15"
                    }`}
                  >
                    {p.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical */}
        <div className="lg:hidden space-y-0 relative">
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-foreground/[0.06]" />

          <motion.div
            className="absolute left-4 top-0 w-[2px]"
            style={{
              background: "linear-gradient(180deg, hsl(152 100% 50% / 0.8), hsl(152 100% 50% / 0.2))",
              boxShadow: "0 0 15px hsl(152 100% 50% / 0.3)",
            }}
            initial={{ height: "0%" }}
            animate={isInView ? { height: `${((currentPhaseIndex + 0.5) / phases.length) * 100}%` } : {}}
            transition={{ duration: 2, ease: [0.2, 0, 0, 1], delay: 0.5 }}
          />

          {phases.map((p, i) => (
            <motion.div
              key={i}
              className="relative pl-12 pb-8"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div
                className={`absolute left-[12px] top-1 w-3 h-3 rounded-full ${
                  p.status === "completed"
                    ? "bg-primary/60 shadow-[0_0_10px_hsl(152_100%_50%/0.3)]"
                    : p.status === "current"
                    ? "bg-primary shadow-[0_0_20px_hsl(152_100%_50%/0.5)]"
                    : "bg-foreground/10"
                }`}
              />
              <span
                className={`text-xs font-mono-brand block mb-1 ${
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
                    ? "text-foreground/70"
                    : "text-foreground/15"
                }`}
              >
                {p.title}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default RoadmapSection;
