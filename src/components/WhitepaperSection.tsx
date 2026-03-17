import { motion } from "framer-motion";

const WhitepaperSection = () => (
  <section id="whitepaper" className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24">
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
    >
      <div className="text-center mb-12">
        <span className="inline-flex px-3 py-1 rounded-full text-xs font-mono-brand text-primary bg-primary/10 border border-primary/20 mb-6">
          DOCUMENTATION
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter-custom text-foreground mb-4">
          <span className="gradient-text">Whitepaper</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Deep dive into Zyra's architecture and vision
        </p>
      </div>

      <div className="card-surface glow-border relative overflow-hidden p-10 md:p-14">
        <div
          className="absolute -bottom-20 -left-20 w-60 h-60 pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(152 100% 50% / 0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
            <span className="text-2xl">📄</span>
          </div>
          <p className="text-muted-foreground text-lg mb-10">
            Full whitepaper releasing soon
          </p>

          {/* Document preview placeholder */}
          <div className="w-full max-w-sm aspect-[3/4] rounded-2xl bg-foreground/[0.02] border border-foreground/[0.05] mb-10 flex flex-col items-center justify-center gap-3 p-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-xs text-muted-foreground/50 font-mono-brand">ZYRA_WHITEPAPER.PDF</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-muted-foreground bg-foreground/[0.03] border border-foreground/[0.06] hover:border-primary/20 hover:text-foreground transition-all duration-300 cursor-default">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              View Whitepaper
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

export default WhitepaperSection;
