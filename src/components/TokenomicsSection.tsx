import { motion } from "framer-motion";

const allocations = [
  { category: "Public Sale (ICO)", percentage: 40, amount: "68,000,000", color: "hsl(152 100% 50%)" },
  { category: "Liquidity Mining", percentage: 30, amount: "51,000,000", color: "hsl(152 80% 40%)" },
  { category: "Airdrops (User Growth)", percentage: 15, amount: "25,500,000", color: "hsl(170 100% 50%)" },
  { category: "Staking Rewards", percentage: 10, amount: "17,000,000", color: "hsl(152 60% 35%)" },
  { category: "Referral Rewards", percentage: 5, amount: "8,500,000", color: "hsl(140 70% 30%)" },
];

const TokenomicsSection = () => (
  <section id="tokenomics" className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24">
    <motion.div
      className="max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
    >
      <div className="text-center mb-16">
        <span className="inline-flex px-3 py-1 rounded-full text-xs font-mono-brand text-primary bg-primary/10 border border-primary/20 mb-6">
          TOKENOMICS
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter-custom text-foreground mb-4">
          ZRA <span className="gradient-text">Token</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Total Supply: <span className="text-foreground font-mono-brand font-semibold">170,000,000 ZRA</span>
        </p>
      </div>

      <div className="card-surface glow-border relative overflow-hidden p-8 md:p-12">
        <div
          className="absolute -top-20 -right-20 w-60 h-60 pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(152 100% 50% / 0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          {/* Donut chart visual */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
            <div className="relative w-48 h-48 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {allocations.reduce<{ elements: JSX.Element[]; offset: number }>(
                  (acc, item, i) => {
                    const circumference = Math.PI * 70;
                    const dash = (item.percentage / 100) * circumference;
                    acc.elements.push(
                      <motion.circle
                        key={i}
                        cx="50"
                        cy="50"
                        r="35"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="12"
                        strokeDasharray={`${dash} ${circumference - dash}`}
                        strokeDashoffset={-acc.offset}
                        strokeLinecap="round"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
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
                  <span className="text-2xl font-bold font-mono-brand text-foreground">170M</span>
                  <span className="text-[10px] text-muted-foreground block">ZRA</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full space-y-3">
              {allocations.map((item, i) => (
                <motion.div
                  key={item.category}
                  className="flex items-center justify-between gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-foreground/80 truncate">{item.category}</span>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-sm font-mono-brand text-primary font-semibold">{item.percentage}%</span>
                    <span className="text-xs text-muted-foreground font-mono-brand hidden sm:inline">{item.amount}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress bars */}
          <div className="space-y-2">
            {allocations.map((item, i) => (
              <motion.div
                key={item.category}
                className="w-full h-1.5 rounded-full bg-foreground/[0.05] overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: item.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.8, ease: [0.2, 0, 0, 1] }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default TokenomicsSection;
