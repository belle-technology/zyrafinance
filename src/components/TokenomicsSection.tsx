import { motion } from "framer-motion";

const TokenomicsSection = () => (
  <section id="tokenomics" className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24">
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
    >
      <div className="text-center mb-12">
        <span className="inline-flex px-3 py-1 rounded-full text-xs font-mono-brand text-primary bg-primary/10 border border-primary/20 mb-6">
          TOKENOMICS
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter-custom text-foreground mb-4">
          ZRA <span className="gradient-text">Token</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Powering the Zyra ecosystem
        </p>
      </div>

      <div className="card-surface glow-border relative overflow-hidden p-10 md:p-14">
        {/* Decorative corner glow */}
        <div
          className="absolute -top-20 -right-20 w-60 h-60 pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(152 100% 50% / 0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
            <span className="text-2xl">📊</span>
          </div>
          <p className="text-muted-foreground text-lg mb-10">
            Full tokenomics breakdown coming soon
          </p>

          {/* Placeholder chart area */}
          <div className="w-full h-48 rounded-2xl bg-foreground/[0.02] border border-foreground/[0.05] mb-10 flex items-center justify-center">
            <div className="flex gap-3 items-end">
              {[40, 65, 50, 80, 35, 70, 55].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-4 md:w-6 rounded-t-md bg-primary/20"
                  initial={{ height: 0 }}
                  whileInView={{ height: h }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.2, 0, 0, 1] }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-muted-foreground bg-foreground/[0.03] border border-foreground/[0.06] hover:border-primary/20 hover:text-foreground transition-all duration-300 cursor-default">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              View Tokenomics
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-muted-foreground bg-foreground/[0.03] border border-foreground/[0.06] hover:border-primary/20 hover:text-foreground transition-all duration-300 cursor-default">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download PDF
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default TokenomicsSection;
