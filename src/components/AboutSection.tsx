import { motion } from "framer-motion";

const features = [
  {
    icon: "🔐",
    title: "Non-Custodial",
    description: "Your keys, your crypto. Full control of your assets at all times.",
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Optimized trading engine built for speed and minimal slippage.",
  },
  {
    icon: "🌍",
    title: "Built for Africa",
    description: "Designed for African markets with a global-first infrastructure.",
  },
  {
    icon: "🛡️",
    title: "Fully Transparent",
    description: "Open-source smart contracts audited for maximum security.",
  },
];

const AboutSection = () => (
  <section id="about" className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24">
    {/* Background accent */}
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
          ABOUT ZYRA
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter-custom text-foreground mb-6">
          The Future of Trading <span className="gradient-text">in Africa</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Zyra is a non-custodial decentralized exchange designed to provide secure,
          transparent, and accessible trading infrastructure for global users — starting with Africa.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            className="card-surface card-surface-hover glow-border p-8 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
          >
            <div className="relative z-10">
              <span className="text-2xl mb-4 block">{feature.icon}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
            {/* Hover glow */}
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
