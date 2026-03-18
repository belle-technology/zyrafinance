import { motion } from "framer-motion";

const problems = [
  {
    icon: "💸",
    title: "High Fees & Slippage",
    description: "African traders pay excessive fees on centralized exchanges with poor liquidity and unfair spreads.",
  },
  {
    icon: "🔒",
    title: "Custodial Risks",
    description: "Centralized platforms hold user funds — exposing traders to hacks, freezes, and rug pulls.",
  },
  {
    icon: "🌍",
    title: "Limited Access",
    description: "1.4 billion people across Africa lack access to global DeFi markets due to poor infrastructure.",
  },
  {
    icon: "⏳",
    title: "Slow Settlements",
    description: "Cross-border crypto transactions take hours instead of seconds, limiting trading opportunities.",
  },
];

const solutions = [
  {
    icon: "🔐",
    title: "Non-Custodial Trading",
    description: "Your keys, your crypto. Trade directly from your wallet with zero custodial risk.",
  },
  {
    icon: "⚡",
    title: "Cross-Chain Swaps",
    description: "Swap assets across 10+ blockchains seamlessly with our intelligent routing engine.",
  },
  {
    icon: "🛡️",
    title: "MEV Protection",
    description: "Built-in frontrunning protection ensures fair pricing on every trade you make.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Routing",
    description: "Smart order routing finds the best prices across liquidity pools automatically.",
  },
];

const AboutSection = () => (
  <section id="about" className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24">
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
      style={{
        background: "radial-gradient(circle, hsl(152 100% 50% / 0.04) 0%, transparent 70%)",
      }}
    />

    <div className="relative max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
      >
        <span className="inline-flex px-3 py-1 rounded-full text-xs font-mono-brand text-primary bg-primary/10 border border-primary/20 mb-6">
          THE PROBLEM & SOLUTION
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter-custom text-foreground mb-6">
          DeFi Was Never Built <span className="gradient-text">for Africa</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Existing DEXs ignore the world's fastest-growing crypto market. Zyra changes that — 
          a non-custodial exchange purpose-built for African traders with global-grade infrastructure.
        </p>
      </motion.div>

      {/* The Problem */}
      <motion.h3
        className="text-xs font-mono-brand text-destructive/70 uppercase tracking-widest mb-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        The Problem
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {problems.map((item, i) => (
          <motion.div
            key={item.title}
            className="card-surface card-surface-hover glow-border p-8 relative overflow-hidden group border-destructive/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
          >
            <div className="relative z-10">
              <span className="text-2xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* The Solution */}
      <motion.h3
        className="text-xs font-mono-brand text-primary uppercase tracking-widest mb-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Zyra's Solution
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {solutions.map((item, i) => (
          <motion.div
            key={item.title}
            className="card-surface card-surface-hover glow-border p-8 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
          >
            <div className="relative z-10">
              <span className="text-2xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
            <div
              className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(circle, hsl(152 100% 50% / 0.08) 0%, transparent 70%)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
