import { motion } from "framer-motion";

const allocations = [
  { category: "Public Sale (ICO)", percentage: 40, amount: "68,000,000", color: "hsl(152 100% 50%)" },
  { category: "Liquidity Mining", percentage: 30, amount: "51,000,000", color: "hsl(152 80% 40%)" },
  { category: "Airdrops", percentage: 15, amount: "25,500,000", color: "hsl(170 100% 45%)" },
  { category: "Staking Rewards", percentage: 10, amount: "17,000,000", color: "hsl(152 60% 32%)" },
  { category: "Referral Rewards", percentage: 5, amount: "8,500,000", color: "hsl(140 50% 25%)" },
];

const TokenomicsSection = () => (
  <section id="tokenomics" className="relative py-28 md:py-40 px-6 md:px-16 lg:px-24">
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
    >
      <div className="text-center mb-16">
        <span className="inline-flex px-3 py-1 rounded-full text-xs font-mono-brand text-primary bg-primary/[0.08] border border-primary/15 mb-6">
          TOKENOMICS
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter-custom text-foreground mb-4">
          ZRA <span className="gradient-text">Token</span>
        </h2>
        <p className="text-muted-foreground text-base max-w-lg mx-auto">
          Total Supply: <span className="text-foreground font-mono-brand font-semibold">170,000,000 ZRA</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Donut */}
        <div className="relative w-52 h-52 flex-shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            {allocations.reduce<{ elements: JSX.Element[]; offset: number }>(
              (acc, item, i) => {
                const circumference = Math.PI * 70;
                const dash = (item.percentage / 100) * circumference;
                const gap = 1.5;
                acc.elements.push(
                  <motion.circle
                    key={i}
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="10"
                    strokeDasharray={`${dash - gap} ${circumference - dash + gap}`}
                    strokeDashoffset={-acc.offset}
                    strokeLinecap="round"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                  />
                );
                acc.offset += dash;
                return acc;
              },
              { elements: [], offset: 0 }
            ).elements}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-xl font-bold font-mono-brand text-foreground">170M</span>
              <span className="text-[9px] text-muted-foreground/50 block mt-0.5">ZRA</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 w-full space-y-4">
          {allocations.map((item, i) => (
            <motion.div
              key={item.category}
              className="flex items-center justify-between"
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-sm text-foreground/70">{item.category}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-mono-brand text-primary font-semibold">{item.percentage}%</span>
                <span className="text-xs text-muted-foreground/40 font-mono-brand hidden sm:inline">{item.amount}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing info */}
      <motion.div
        className="mt-16 grid grid-cols-3 gap-3"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {[
          { phase: "Presale", price: "$0.20" },
          { phase: "ICO Stage 1", price: "$0.30" },
          { phase: "Public Listing", price: "Market" },
        ].map((p) => (
          <div key={p.phase} className="text-center rounded-xl bg-foreground/[0.02] border border-foreground/[0.05] py-4 px-3">
            <span className="text-[10px] font-mono-brand text-muted-foreground/40 uppercase tracking-wider block mb-1">{p.phase}</span>
            <span className="text-lg font-bold font-mono-brand text-foreground">{p.price}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default TokenomicsSection;
